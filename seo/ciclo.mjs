#!/usr/bin/env node
// Ciclo de auto-mejora SEO de kineum.cl.
// Encadena: auditar -> corregir -> compilar -> validar -> desplegar.
// Si algo falla, revierte y no despliega.
//
//   node seo/ciclo.mjs            -> ciclo completo con despliegue
//   node seo/ciclo.mjs --dry      -> audita y muestra que haria, sin tocar nada
//   node seo/ciclo.mjs --no-push  -> corrige y compila, pero no despliega

import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dir = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dir, '..')
const DRY = process.argv.includes('--dry')
const NO_PUSH = process.argv.includes('--no-push')

const sh = (cmd, opts = {}) => execSync(cmd, { cwd: ROOT, encoding: 'utf8', stdio: 'pipe', ...opts })
const paso = (n, txt) => console.log(`\n[${n}] ${txt}`)

const historialPath = join(__dir, 'historial.json')
const historial = existsSync(historialPath) ? JSON.parse(readFileSync(historialPath, 'utf8')) : []

function resumenAuditoria() {
    const r = JSON.parse(readFileSync(join(__dir, 'last-report.json'), 'utf8'))
    return r.resumen
}

async function main() {
    console.log('===== CICLO DE AUTO-MEJORA SEO — kineum.cl =====')

    // Guardarrail: no operar sobre un arbol sucio (cambios ajenos sin commitear).
    const sucio = sh('git status --porcelain').trim()
    if (sucio && !DRY) {
        console.error('\nEl repositorio tiene cambios sin commitear. Commitealos o descartalos antes de correr el ciclo.')
        console.error(sucio.split('\n').slice(0, 10).join('\n'))
        process.exit(1)
    }

    paso(1, 'Auditando produccion...')
    sh('node seo/audit.mjs', { stdio: 'inherit' })
    const antes = resumenAuditoria()

    if (DRY) {
        paso(2, 'Simulando correcciones (no se escribe nada)...')
        sh('node seo/autofix.mjs --dry', { stdio: 'inherit' })
        console.log('\nSimulacion terminada. Nada fue modificado.')
        return
    }

    paso(2, 'Aplicando correcciones automaticas...')
    sh('node seo/autofix.mjs', { stdio: 'inherit' })

    const cambios = sh('git status --porcelain').trim()
    if (!cambios) {
        console.log('\nNo hubo nada que corregir. El sitio ya cumple las reglas automatizables.')
        return
    }
    console.log(`\nArchivos modificados: ${cambios.split('\n').length}`)

    paso(3, 'Compilando para validar...')
    try {
        sh('npm run build')
        console.log('Build correcto.')
    } catch (e) {
        console.error('BUILD FALLIDO. Revirtiendo todos los cambios.')
        sh('git checkout -- .')
        console.error(String(e.stdout || e.message).slice(-1500))
        process.exit(1)
    }

    if (NO_PUSH) {
        console.log('\n--no-push: los cambios quedan aplicados y compilados, sin desplegar.')
        return
    }

    paso(4, 'Desplegando...')
    const n = cambios.split('\n').length
    sh('git add -A')
    sh(`git commit -q -m "SEO auto-mejora: ${n} archivos corregidos por el ciclo automatico"`)
    sh('git push origin main')
    console.log('Desplegado.')

    paso(5, 'Registrando en el historial...')
    historial.push({
        fecha: new Date().toISOString(),
        archivos: n,
        antes,
        commit: sh('git rev-parse --short HEAD').trim(),
    })
    writeFileSync(historialPath, JSON.stringify(historial, null, 1), 'utf8')

    console.log('\n===== CICLO COMPLETO =====')
    console.log(`Antes: ${antes.porSeveridad.alta} problemas altos, ${antes.titulosLargos} titulos largos, ${antes.descLargas} descripciones largas`)
    console.log('Vuelve a correr el ciclo en unos minutos (tras el deploy) para medir el despues.')
    console.log(`\nPendientes que requieren criterio editorial: seo/pendientes-humano.json`)
}

main().catch((e) => { console.error(e); process.exit(1) })
