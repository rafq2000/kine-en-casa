// Contenido clínico por especialidad kinésica.
// Lo usan /servicios/*, el blog y los hubs /kinesiologo-a-domicilio-{comuna}, donde cada
// especialidad es un bloque con id={slug}. Las páginas /{slug}-{comuna} responden 308 a su hub (T37).

export interface Especialidad {
    /** id del bloque en el hub (/kinesiologo-a-domicilio-{comuna}#{slug}) */
    slug: string
    /** Nombre para títulos y H1 */
    nombre: string
    /** Nombre corto para frases dentro del texto */
    corto: string
    /** Párrafo de apertura, específico del servicio (fallback del bloque del hub y /llms.txt) */
    intro: string
    /** Motivos de consulta que trata este servicio (solo títulos; se muestran en los hubs) */
    condiciones: string[]
    /** Página de servicio general asociada */
    servicioUrl: string
    /** Artículos del blog relacionados */
    articulos: { titulo: string; url: string }[]
}

export const especialidades: Especialidad[] = [
    {
        slug: "kinesiologia-geriatrica",
        nombre: "Kinesiología Geriátrica",
        corto: "kinesiología geriátrica",
        intro:
            "La rehabilitación del adulto mayor tiene una regla que lo cambia todo: la fuerza es independencia. Trabajamos en casa para que la persona vuelva a pararse sola del sillón, camine segura y deje de temerle a las caídas.",
        condiciones: [
            "Sarcopenia y pérdida de fuerza",
            "Prevención de caídas",
            "Artrosis de rodilla y cadera",
            "Recuperación post hospitalización",
            "Fractura de cadera",
            "Deterioro funcional general",
        ],
        servicioUrl: "/servicios/geriatrica",
        articulos: [
            { titulo: "Kinesiología a domicilio para un paciente postrado: qué se puede hacer, de verdad", url: "/blog/kinesiologia-paciente-postrado-en-casa" },
            { titulo: "Adulto mayor se cayó en la casa: qué hacer en el momento y después", url: "/blog/adulto-mayor-se-cayo-en-casa-que-hacer" },
            { titulo: "Fractura o prótesis de cadera en el adulto mayor: cómo es la rehabilitación en casa", url: "/blog/fractura-cadera-adulto-mayor" },
            { titulo: "Artrosis de Rodilla: Ejercicios que Ayudan y Cuáles Evitar", url: "/blog/artrosis-rodilla-ejercicios" },
        ],
    },
    {
        slug: "rehabilitacion-postquirurgica",
        nombre: "Rehabilitación Postquirúrgica",
        corto: "rehabilitación postquirúrgica",
        intro:
            "La cirugía es la mitad del resultado; la otra mitad se juega en las primeras semanas de rehabilitación. Y hay una regla que ningún operado debería ignorar: el rango de movimiento que no se gana temprano cuesta muchísimo más recuperar después.",
        condiciones: [
            "Prótesis de rodilla",
            "Prótesis de cadera",
            "Artroscopia de rodilla u hombro",
            "Cirugía de columna",
            "Reparación de manguito rotador",
            "Cirugía de ligamento cruzado",
        ],
        servicioUrl: "/servicios/postquirurgica",
        articulos: [
            { titulo: "Prótesis de rodilla: cómo es la recuperación en tu casa, paso a paso", url: "/blog/protesis-rodilla-recuperacion" },
            { titulo: "Fractura o prótesis de cadera en el adulto mayor: cómo es la rehabilitación en casa", url: "/blog/fractura-cadera-adulto-mayor" },
            { titulo: "¿Cuántas sesiones de kinesiología necesito? Rangos orientativos según tu caso", url: "/blog/cuantas-sesiones-de-kinesiologia-necesito" },
            { titulo: "Drenaje Linfático Post Operatorio a Domicilio: Qué Esperar", url: "/blog/drenaje-linfatico-post-operatorio-domicilio" },
        ],
    },
    {
        slug: "kinesiologia-respiratoria",
        nombre: "Kinesiología Respiratoria",
        corto: "kinesiología respiratoria",
        intro:
            "La kinesiterapia respiratoria ayuda a movilizar y eliminar secreciones, y a recuperar capacidad pulmonar después de una infección. En niños pequeños es especialmente útil porque todavía no saben toser ni sonarse con eficacia.",
        condiciones: [
            "Bronquiolitis y virus respiratorios",
            "Bronquitis obstructiva (SBO)",
            "Neumonía en recuperación",
            "EPOC y asma",
            "Recuperación post COVID",
            "Pacientes post hospitalización",
        ],
        servicioUrl: "/servicios/respiratoria",
        articulos: [
            { titulo: "Kinesiología Respiratoria Infantil a Domicilio: Guía para Padres", url: "/blog/kinesiologia-respiratoria-infantil-domicilio" },
        ],
    },
    {
        slug: "rehabilitacion-neurologica",
        nombre: "Rehabilitación Neurológica",
        corto: "rehabilitación neurológica",
        intro:
            "El cerebro se reorganiza con estímulo específico y repetición: eso es la neuroplasticidad. Por eso la neurorehabilitación en casa funciona tan bien, entrenando con las tareas y los espacios reales del paciente.",
        condiciones: [
            "Secuelas de ACV",
            "Enfermedad de Parkinson",
            "Esclerosis múltiple",
            "Parálisis facial",
        ],
        servicioUrl: "/servicios/neurologica",
        articulos: [
            { titulo: "Rehabilitación después de un ACV en casa: cuándo empezar, qué se hace y cómo ayuda la familia", url: "/blog/neuroplasticidad-recuperacion-acv" },
            { titulo: "Parálisis Facial: La Importancia de las Primeras 72 Horas", url: "/blog/paralisis-facial-rehabilitacion" },
        ],
    },
    {
        slug: "kinesiologia-traumatologica",
        nombre: "Kinesiología Traumatológica",
        corto: "kinesiología traumatológica",
        intro:
            "Las lesiones musculares, articulares y de tendones tienen algo en común: se recuperan con carga progresiva bien dosificada, no con reposo. Ese es el eje de nuestro trabajo traumatológico a domicilio.",
        condiciones: [
            "Esguince de tobillo",
            "Lumbago y dolor de espalda",
            "Tendinopatías de hombro",
            "Fracturas en recuperación",
            "Epicondilitis y tendinitis",
        ],
        servicioUrl: "/servicios/traumatologica",
        articulos: [
            { titulo: "Esguince de Tobillo: Cuánto Demora y Qué Hacer", url: "/blog/esguince-tobillo-recuperacion" },
            { titulo: "Lumbago agudo: qué hacer las primeras 48 horas y cuándo llamar al kinesiólogo", url: "/blog/lumbago-agudo-que-hacer" },
            { titulo: "Tendinitis de hombro: cómo recuperar el manguito rotador", url: "/blog/tendinitis-hombro-manguito-rotador" },
            { titulo: "Ciática: cómo distinguir el dolor real de la falsa ciática y qué hacer", url: "/blog/ciatica-sintomas-tratamiento" },
            { titulo: "Hernia Discal: ¿Cuándo se Opera y Qué Hacer Mientras Tanto?", url: "/blog/hernia-discal-operacion" },
            { titulo: "Túnel Carpiano: Qué Puede Hacer la Kinesiología Antes del Pabellón", url: "/blog/tunel-carpiano-alivio" },
            { titulo: "Fascitis Plantar: el Dolor del Primer Paso de la Mañana", url: "/blog/fascitis-plantar-solucion" },
            { titulo: "Codo de Tenista (Epicondilitis): No Solo para Deportistas", url: "/blog/epicondilitis-codo-tenista" },
        ],
    },
]
