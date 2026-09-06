@echo off
REM Ciclo de auto-mejora SEO de kineum.cl (capa determinista, sin Claude).
REM Audita produccion, aplica las correcciones seguras, compila y despliega.
REM Si el build falla, revierte solo y no despliega.

cd /d "C:\Users\rude_\Downloads\kine-en-casa"

echo [%date% %time%] Iniciando ciclo SEO >> seo\ciclo.log
node seo\ciclo.mjs >> seo\ciclo.log 2>&1

if %ERRORLEVEL% NEQ 0 (
  echo [%date% %time%] Ciclo terminado con error %ERRORLEVEL% >> seo\ciclo.log
) else (
  echo [%date% %time%] Ciclo OK >> seo\ciclo.log
)
