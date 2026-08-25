// Contenido clínico por especialidad kinésica.
// Se combina con lib/comunas-data.ts para generar las páginas
// /{especialidad}-{comuna} con contenido propio de cada servicio.

export interface Especialidad {
    /** Prefijo de la URL: /{slug}-{comuna} */
    slug: string
    /** Nombre para títulos y H1 */
    nombre: string
    /** Nombre corto para frases dentro del texto */
    corto: string
    /** Término que usa la gente al buscar (para el título SEO) */
    terminoBusqueda: string
    /** Párrafo de apertura, específico del servicio */
    intro: string
    /** Motivos de consulta que trata este servicio */
    condiciones: { titulo: string; detalle: string }[]
    /** Qué hace el kinesiólogo en la sesión */
    sesion: string[]
    /** Equipamiento que traslada el profesional */
    equipamiento: string
    /** Duración típica del tratamiento */
    duracion: string
    /** Señales para consultar o derivar */
    alerta: { titulo: string; items: string[] }
    /** Preguntas frecuentes propias del servicio */
    faqs: { q: string; a: string }[]
    /** Keywords base; la comuna se agrega en cada página */
    keywords: string[]
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
        terminoBusqueda: "Kinesiólogo para Adulto Mayor",
        intro:
            "La rehabilitación del adulto mayor tiene una regla que lo cambia todo: la fuerza es independencia. Trabajamos en casa para que la persona vuelva a pararse sola del sillón, camine segura y deje de temerle a las caídas.",
        condiciones: [
            { titulo: "Sarcopenia y pérdida de fuerza", detalle: "Recuperación de masa muscular con ejercicio progresivo, incluso en mayores de 80 años." },
            { titulo: "Prevención de caídas", detalle: "Entrenamiento de equilibrio, marcha y reacción, más auditoría de seguridad del hogar." },
            { titulo: "Artrosis de rodilla y cadera", detalle: "Manejo del dolor con fortalecimiento y dosificación de la caminata, no con reposo." },
            { titulo: "Recuperación post hospitalización", detalle: "Reacondicionamiento tras días en cama, que cuestan fuerza y confianza." },
            { titulo: "Fractura de cadera", detalle: "Programa intensivo para volver a caminar: transferencias, marcha asistida y retorno a la vida diaria." },
            { titulo: "Deterioro funcional general", detalle: "Cuando cuesta subir escaleras, cargar las bolsas o levantarse de la cama." },
        ],
        sesion: [
            "Evaluación funcional: velocidad de marcha, fuerza de agarre y test de sentarse-pararse",
            "Ejercicio de fuerza adaptado con el peso corporal, bandas y los muebles de la casa",
            "Trabajo de equilibrio y prevención de caídas en el entorno real del paciente",
            "Educación a la familia o al cuidador para continuar entre sesiones",
            "Auditoría de seguridad del hogar: alfombras, iluminación, barras de apoyo",
        ],
        equipamiento: "camilla profesional, bandas elásticas, pesas livianas y elementos de equilibrio",
        duracion: "Los programas geriátricos suelen tomar de 8 a 16 semanas, con 2 o 3 sesiones semanales al inicio.",
        alerta: {
            titulo: "Cuándo consultar pronto",
            items: [
                "Caídas repetidas o miedo a caminar solo",
                "Dificultad para levantarse de una silla sin usar las manos",
                "Pérdida de peso y masa muscular en pocos meses",
                "Alta hospitalaria reciente con días de reposo en cama",
            ],
        },
        faqs: [
            {
                q: "Mi papá casi no se mueve, ¿sirve igual?",
                a: "Sí. El músculo responde al estímulo a cualquier edad y en cualquier nivel funcional. Partimos desde donde está la persona, aunque sea trabajando sentado o en cama, y progresamos gradualmente.",
            },
            {
                q: "¿Es peligroso hacer ejercicio a los 80 años?",
                a: "El riesgo mayor es no hacerlo. El ejercicio supervisado por un kinesiólogo es seguro y es la intervención con mejor evidencia para prevenir caídas y dependencia en el adulto mayor.",
            },
            {
                q: "¿Puede acompañar un familiar la sesión?",
                a: "Lo recomendamos. Formar al cuidador en transferencias seguras y en los ejercicios del día a día multiplica el resultado del tratamiento.",
            },
        ],
        keywords: [
            "kinesiólogo adulto mayor",
            "kinesiología geriátrica a domicilio",
            "rehabilitación adulto mayor en casa",
            "prevención de caídas adulto mayor",
            "tratamiento sarcopenia",
            "kine tercera edad",
            "fisioterapia geriátrica",
        ],
        servicioUrl: "/servicios/geriatrica",
        articulos: [
            { titulo: "Sarcopenia: por qué la fuerza es el nuevo signo vital", url: "/blog/sarcopenia-fuerza-es-salud" },
            { titulo: "Fractura de cadera: el camino para volver a caminar", url: "/blog/fractura-cadera-adulto-mayor" },
            { titulo: "Vivir sin dolor con artrosis de rodilla", url: "/blog/artrosis-rodilla-ejercicios" },
        ],
    },
    {
        slug: "rehabilitacion-postquirurgica",
        nombre: "Rehabilitación Postquirúrgica",
        corto: "rehabilitación postquirúrgica",
        terminoBusqueda: "Kinesiólogo Post Operatorio",
        intro:
            "La cirugía es la mitad del resultado; la otra mitad se juega en las primeras semanas de rehabilitación. Y hay una regla que ningún operado debería ignorar: el rango de movimiento que no se gana temprano cuesta muchísimo más recuperar después.",
        condiciones: [
            { titulo: "Prótesis de rodilla", detalle: "Prioridad en la extensión completa y progresión de la flexión hacia 115-125 grados." },
            { titulo: "Prótesis de cadera", detalle: "Marcha segura, respeto de las precauciones quirúrgicas y fuerza de glúteos." },
            { titulo: "Artroscopia de rodilla u hombro", detalle: "Control del edema, rango articular y retorno progresivo a la carga." },
            { titulo: "Cirugía de columna", detalle: "Control motor, higiene postural y reacondicionamiento gradual." },
            { titulo: "Reparación de manguito rotador", detalle: "Progresión protegida según el protocolo del traumatólogo." },
            { titulo: "Cirugía de ligamento cruzado", detalle: "Recuperación de cuádriceps, propiocepción y criterios de retorno deportivo." },
        ],
        sesion: [
            "Control del dolor y del edema post operatorio",
            "Recuperación del rango articular dentro de lo autorizado por el cirujano",
            "Fortalecimiento progresivo de la musculatura que se inhibió con la cirugía",
            "Reeducación de la marcha y uso correcto de bastones o andador",
            "Entrenamiento de escaleras, transferencias y actividades de la vida diaria",
        ],
        equipamiento: "camilla profesional, TENS, ultrasonido, bandas elásticas y goniómetro",
        duracion: "La mayoría de los protocolos post quirúrgicos toma de 8 a 16 semanas, con mayor frecuencia durante el primer mes.",
        alerta: {
            titulo: "Avisa de inmediato a tu cirujano si aparece",
            items: [
                "Fiebre, enrojecimiento o secreción en la herida",
                "Pantorrilla hinchada, caliente y dolorosa",
                "Dolor que aumenta bruscamente en vez de ceder",
                "Pérdida súbita de rango o sensación de falla articular",
            ],
        },
        faqs: [
            {
                q: "¿Cuándo debo empezar después de la cirugía?",
                a: "Idealmente apenas recibes el alta, coordinado con tu traumatólogo. Las primeras semanas definen el rango de movimiento que conservarás: empezar tarde es la causa más común de rigidez crónica.",
            },
            {
                q: "¿Por qué rehabilitarse en casa y no en un centro?",
                a: "Porque recién operado cada traslado significa dolor e inflamación extra antes de empezar la sesión. En domicilio toda tu energía se invierte en rehabilitar, y trabajamos con tus escaleras, tu cama y tu baño reales.",
            },
            {
                q: "¿Trabajan coordinados con mi traumatólogo?",
                a: "Sí. Seguimos el protocolo y las precauciones que indica tu cirujano, y documentamos la evolución para que el equipo médico la revise en los controles.",
            },
        ],
        keywords: [
            "kinesiólogo post operatorio a domicilio",
            "rehabilitación post cirugía en casa",
            "kine prótesis de rodilla",
            "rehabilitación prótesis de cadera",
            "kinesiología post operatoria",
            "recuperación post quirúrgica a domicilio",
        ],
        servicioUrl: "/servicios/traumatologica",
        articulos: [
            { titulo: "Vida después de la prótesis de rodilla", url: "/blog/protesis-rodilla-recuperacion" },
            { titulo: "Drenaje linfático post operatorio a domicilio", url: "/blog/drenaje-linfatico-post-operatorio-domicilio" },
            { titulo: "Fractura de cadera: volver a caminar", url: "/blog/fractura-cadera-adulto-mayor" },
        ],
    },
    {
        slug: "kinesiologia-respiratoria",
        nombre: "Kinesiología Respiratoria",
        corto: "kinesiología respiratoria",
        terminoBusqueda: "Kinesiólogo Respiratorio (KTR)",
        intro:
            "La kinesiterapia respiratoria ayuda a movilizar y eliminar secreciones, y a recuperar capacidad pulmonar después de una infección. En niños pequeños es especialmente útil porque todavía no saben toser ni sonarse con eficacia.",
        condiciones: [
            { titulo: "Bronquiolitis y virus respiratorios", detalle: "KTR infantil con indicación pediátrica, la consulta más frecuente del invierno." },
            { titulo: "Bronquitis obstructiva (SBO)", detalle: "Manejo de la hipersecreción en lactantes y preescolares." },
            { titulo: "Neumonía en recuperación", detalle: "Limpieza bronquial y reexpansión pulmonar tras el cuadro agudo." },
            { titulo: "EPOC y asma", detalle: "Entrenamiento de la musculatura respiratoria y técnicas de ahorro de energía." },
            { titulo: "Recuperación post COVID", detalle: "Reeducación diafragmática y reacondicionamiento físico progresivo." },
            { titulo: "Pacientes post hospitalización", detalle: "Prevención de complicaciones respiratorias tras días en cama." },
        ],
        sesion: [
            "Control de la saturación de oxígeno y la frecuencia respiratoria antes y durante la sesión",
            "Técnicas de higiene bronquial adaptadas a la edad del paciente",
            "Reeducación de la respiración diafragmática",
            "Aseo nasal y educación a los padres en el caso de los niños",
            "Indicaciones de posicionamiento y señales de alarma para la familia",
        ],
        equipamiento: "oxímetro de pulso, elementos de aseo nasal y dispositivos de entrenamiento respiratorio",
        duracion: "En cuadros agudos suelen bastar de 3 a 8 sesiones; en patología crónica el trabajo es periódico.",
        alerta: {
            titulo: "Signos de urgencia: acude a un servicio de urgencia",
            items: [
                "Respiración muy rápida, quejido o hundimiento de las costillas",
                "Labios o piel azulada",
                "Rechazo total del alimento en lactantes",
                "Somnolencia excesiva o irritabilidad inconsolable",
            ],
        },
        faqs: [
            {
                q: "¿Necesito orden médica para la KTR?",
                a: "Sí. La kinesiterapia respiratoria se realiza con indicación del pediatra, broncopulmonar o médico tratante, que define si corresponde y con qué frecuencia.",
            },
            {
                q: "¿Por qué es mejor en casa que en un centro?",
                a: "Porque evitas exponer a un niño enfermo a una sala de espera llena de otros virus, el niño coopera mucho más en su propio ambiente y los padres aprenden las técnicas con sus propios elementos.",
            },
            {
                q: "¿Atienden adultos también?",
                a: "Sí. Tratamos EPOC, secuelas de neumonía y recuperación post COVID en adultos, con control de saturación y progresión de ejercicio.",
            },
        ],
        keywords: [
            "kinesiología respiratoria a domicilio",
            "KTR infantil a domicilio",
            "kinesiólogo respiratorio niños",
            "kine respiratorio bebé",
            "kinesiología bronquiolitis",
            "kinesiología respiratoria adultos",
        ],
        servicioUrl: "/servicios/respiratoria",
        articulos: [
            { titulo: "Kinesiología respiratoria infantil: guía para padres", url: "/blog/kinesiologia-respiratoria-infantil-domicilio" },
            { titulo: "Rehabilitación respiratoria post COVID y neumonía", url: "/blog/kinesiologia-post-covid" },
        ],
    },
    {
        slug: "rehabilitacion-neurologica",
        nombre: "Rehabilitación Neurológica",
        corto: "rehabilitación neurológica",
        terminoBusqueda: "Neurorehabilitación a Domicilio",
        intro:
            "El cerebro se reorganiza con estímulo específico y repetición: eso es la neuroplasticidad. Por eso la neurorehabilitación en casa funciona tan bien, entrenando con las tareas y los espacios reales del paciente.",
        condiciones: [
            { titulo: "Secuelas de ACV", detalle: "Recuperación de marcha, equilibrio y uso del brazo afectado con repetición intensiva." },
            { titulo: "Enfermedad de Parkinson", detalle: "Trabajo de amplitud del movimiento, marcha y prevención de bloqueos." },
            { titulo: "Esclerosis múltiple", detalle: "Manejo de la fatiga, fuerza y equilibrio con dosificación cuidadosa." },
            { titulo: "Alzheimer y otras demencias", detalle: "Mantención funcional y rutinas seguras de movimiento." },
            { titulo: "Parálisis facial", detalle: "Reeducación neuromuscular precoz para recuperar la simetría." },
            { titulo: "Neuropatías periféricas", detalle: "Fuerza, sensibilidad y prevención de caídas." },
        ],
        sesion: [
            "Repetición intensiva de movimientos funcionales con objetivos concretos",
            "Entrenamiento de marcha y equilibrio en el entorno real de la casa",
            "Trabajo del miembro superior orientado a tareas cotidianas",
            "Manejo del tono muscular y prevención de contracturas",
            "Educación al cuidador en transferencias y estimulación segura",
        ],
        equipamiento: "camilla profesional, elementos de equilibrio, bandas y ayudas técnicas de entrenamiento",
        duracion: "La neurorehabilitación es un proceso largo: los programas se miden en meses, con reevaluaciones periódicas.",
        alerta: {
            titulo: "Emergencia neurológica: llama al 131",
            items: [
                "Pérdida súbita de fuerza en un lado del cuerpo",
                "Dificultad repentina para hablar o entender",
                "Desviación aguda de la cara",
                "Pérdida brusca de visión o de equilibrio",
            ],
        },
        faqs: [
            {
                q: "¿Cuándo conviene empezar después de un ACV?",
                a: "Lo antes posible tras el alta. Los primeros seis meses concentran la mayor ventana de recuperación, aunque la neuroplasticidad se puede estimular durante toda la vida con el estímulo correcto.",
            },
            {
                q: "¿Sirve si el ACV fue hace años?",
                a: "Sí. Se siguen logrando mejoras funcionales con entrenamiento específico, sobre todo en marcha, equilibrio y autonomía en tareas diarias.",
            },
            {
                q: "¿Qué rol cumple la familia?",
                a: "Es determinante. Entrenamos al cuidador para que las repeticiones continúen entre sesiones, que es donde realmente se consolida el aprendizaje motor.",
            },
        ],
        keywords: [
            "neurorehabilitación a domicilio",
            "rehabilitación ACV en casa",
            "kinesiólogo neurológico",
            "tratamiento Parkinson kinesiología",
            "rehabilitación neurológica domicilio",
            "kine post ACV",
        ],
        servicioUrl: "/servicios/neurologica",
        articulos: [
            { titulo: "Neuroplasticidad: acelerando la recuperación post-ACV", url: "/blog/neuroplasticidad-recuperacion-acv" },
            { titulo: "Parálisis facial: la importancia de las primeras 72 horas", url: "/blog/paralisis-facial-rehabilitacion" },
        ],
    },
    {
        slug: "kinesiologia-traumatologica",
        nombre: "Kinesiología Traumatológica",
        corto: "kinesiología traumatológica",
        terminoBusqueda: "Kinesiólogo Traumatológico",
        intro:
            "Las lesiones musculares, articulares y de tendones tienen algo en común: se recuperan con carga progresiva bien dosificada, no con reposo. Ese es el eje de nuestro trabajo traumatológico a domicilio.",
        condiciones: [
            { titulo: "Esguince de tobillo", detalle: "Carga progresiva y propiocepción para evitar la inestabilidad crónica." },
            { titulo: "Lumbago y dolor de espalda", detalle: "Movilidad, control motor y retorno a la actividad sin miedo al movimiento." },
            { titulo: "Tendinopatías de hombro", detalle: "Fortalecimiento progresivo del manguito rotador, alternativa real a la cirugía." },
            { titulo: "Fracturas en recuperación", detalle: "Rango articular y fuerza tras la inmovilización." },
            { titulo: "Lesiones deportivas", detalle: "Desde el manejo agudo hasta los criterios de retorno al deporte." },
            { titulo: "Epicondilitis y tendinitis", detalle: "Carga excéntrica y corrección de la cadena que generó la sobrecarga." },
        ],
        sesion: [
            "Evaluación del movimiento y del gesto que genera el dolor",
            "Terapia manual: movilizaciones articulares y trabajo de tejidos blandos",
            "Ejercicio terapéutico con carga progresiva medida",
            "Electroterapia o ultrasonido cuando el caso lo requiere",
            "Plan de ejercicios en casa con seguimiento entre sesiones",
        ],
        equipamiento: "camilla profesional, TENS, ultrasonido, bandas elásticas y pesas",
        duracion: "Las lesiones traumatológicas suelen requerir de 6 a 12 semanas según el tejido comprometido y la severidad.",
        alerta: {
            titulo: "Consulta médica antes de rehabilitar si hay",
            items: [
                "Deformidad evidente o imposibilidad total de mover el segmento",
                "Pérdida de fuerza o sensibilidad progresiva",
                "Dolor nocturno intenso que no cede en ninguna posición",
                "Fiebre asociada al dolor articular",
            ],
        },
        faqs: [
            {
                q: "¿Necesito radiografía o resonancia antes?",
                a: "No siempre. En la evaluación inicial determinamos si el cuadro requiere imágenes o derivación médica; muchas lesiones se diagnostican y tratan clínicamente sin examen previo.",
            },
            {
                q: "¿Cuántas sesiones voy a necesitar?",
                a: "Depende del tejido y la severidad, habitualmente entre 6 y 12 sesiones. En la evaluación gratuita te damos una estimación realista antes de que decidas.",
            },
            {
                q: "¿Puedo seguir entrenando durante el tratamiento?",
                a: "En general sí, ajustando la carga. Detener toda actividad suele retrasar la recuperación; lo que hacemos es modificar el estímulo, no eliminarlo.",
            },
        ],
        keywords: [
            "kinesiólogo traumatológico a domicilio",
            "rehabilitación lesiones deportivas en casa",
            "kinesiología esguince de tobillo",
            "tratamiento lumbago a domicilio",
            "kine tendinitis hombro",
            "fisioterapia traumatológica",
        ],
        servicioUrl: "/servicios/traumatologica",
        articulos: [
            { titulo: "Esguince de tobillo: protocolo de recuperación acelerada", url: "/blog/esguince-tobillo-recuperacion" },
            { titulo: "Lumbago agudo: ¿reposo o movimiento?", url: "/blog/lumbago-agudo-que-hacer" },
            { titulo: "Tendinitis de hombro: salvando tu manguito rotador", url: "/blog/tendinitis-hombro-manguito-rotador" },
        ],
    },
]

export function getEspecialidad(slug: string) {
    return especialidades.find((e) => e.slug === slug)
}
