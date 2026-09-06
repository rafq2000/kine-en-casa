// Contenido de las paginas de servicio general (/servicios/*) y /nosotros.
// Separado del markup para poder revisarlo y ampliarlo sin tocar componentes.
//
// Regla anti-canibalizacion: estas paginas responden QUE es el tratamiento, PARA QUIEN,
// COMO funciona y CUANDO consultar, a nivel Santiago. El DONDE (sectores, comunas)
// vive en las 55 paginas /{especialidad}-{comuna}.
//
// Regla de veracidad: prohibido incluir nombres de profesionales, numeros de registro,
// cantidad de pacientes, años de trayectoria, premios o convenios. Solo datos verificables.

export interface SeccionServicio {
    h2: string
    parrafos: string[]
    lista?: string[]
    listaTitulo?: string
    /** true para señales de urgencia: se destaca visualmente en ambar */
    alerta?: boolean
}

export interface ContenidoServicio {
    slug: string
    url: string
    breadcrumb: string
    kicker: string
    h1: string
    intro: string
    secciones: SeccionServicio[]
    faqs: { q: string; a: string }[]
    cta: { titulo: string; texto: string; boton: string; whatsapp: string }
    /** Fecha de ultima revision clinica del contenido (schema lastReviewed) */
    revisado: string
}

const REVISADO = '2026-09-06'

export const serviciosContenido: Record<string, ContenidoServicio> = {
    geriatrica: {
        slug: 'geriatrica',
        url: 'https://kineum.cl/servicios/geriatrica',
        breadcrumb: 'Kinesiología geriátrica',
        kicker: 'Adulto mayor',
        h1: 'Kinesiólogo a Domicilio para Adulto Mayor',
        intro:
            'Si llegaste hasta acá probablemente no es por ti, sino por tu papá, tu mamá o tu abuela. Quizás se cayó, quizás salió del hospital más débil de lo que entró, o simplemente notas que ya le cuesta pararse del sillón. La buena noticia es que casi nada de eso es irreversible: el músculo responde al entrenamiento a cualquier edad, y trabajar en la casa hace que ese entrenamiento se sostenga en el tiempo.',
        secciones: [
            {
                h2: 'La pérdida de fuerza no es "cosa de la edad": tiene nombre y tratamiento',
                parrafos: [
                    'Se llama sarcopenia y es la pérdida progresiva de masa y fuerza muscular asociada al envejecimiento. Empieza silenciosa alrededor de los 50 años y se acelera después de los 70, sobre todo si la persona pasa mucho tiempo sentada o estuvo hospitalizada.',
                    'Lo importante es esto: la sarcopenia responde al ejercicio de fuerza. No es un deterioro que solo se pueda acompañar. Los estudios en personas mayores de 80 años muestran ganancias de fuerza relevantes tras algunas semanas de trabajo progresivo bien dosificado. La condición es que el estímulo sea real y sostenido, no una caminata ocasional.',
                    'Por eso el objetivo de un plan geriátrico no es "que se mueva un poco", sino que recupere funciones concretas: levantarse solo de la cama, subir el escalón de la entrada, cargar una bolsa, ducharse sin ayuda.',
                ],
            },
            {
                h2: 'El círculo del miedo a caminar (y cómo se rompe)',
                parrafos: [
                    'Una caída rara vez es solo una caída. Después viene el miedo, y con el miedo la persona camina menos, sale menos, se apoya más en los muebles. Al moverse menos pierde fuerza y equilibrio, y con menos fuerza y equilibrio el riesgo de caer otra vez aumenta. El miedo termina provocando justo aquello que se temía.',
                    'Ese círculo se rompe con exposición gradual y supervisada: entrenar el equilibrio en un entorno seguro, recuperar la confianza en superficies reales, y trabajar la reacción ante un desbalance. No se rompe con reposo ni con más supervisión pasiva.',
                ],
                listaTitulo: 'Qué se entrena para prevenir caídas',
                lista: [
                    'Equilibrio estático y dinámico: apoyo en un pie, marcha en tándem, cambios de dirección.',
                    'Reacción ante desbalances: la capacidad de dar un paso rápido para no caer.',
                    'Fuerza de piernas y glúteos, que es lo que permite recuperar el equilibrio a tiempo.',
                    'Seguridad del entorno: alfombras sueltas, iluminación nocturna, barras de apoyo en el baño.',
                ],
            },
            {
                h2: '"Tiene desgaste, mejor que no camine": el mito que más daño hace',
                parrafos: [
                    'La artrosis de rodilla y cadera es frecuente después de los 60, y la conclusión intuitiva es proteger la articulación moviéndola menos. Es exactamente al revés.',
                    'El cartílago no tiene vasos sanguíneos: se nutre del líquido articular, que circula cuando la articulación se mueve y recibe carga. La inactividad lo desnutre. Además, la correlación entre lo que muestra la radiografía y el dolor que siente la persona es baja: hay rodillas con artrosis avanzada sin dolor y rodillas casi normales con dolor importante. Lo que mejor predice el dolor y la función es la fuerza muscular alrededor de la articulación.',
                    'El tratamiento kinesiológico apunta ahí: fortalecer cuádriceps y glúteos para que absorban la carga, y dosificar la caminata en lugar de eliminarla. Tres caminatas cortas suelen tolerarse mejor que una larga.',
                ],
            },
            {
                h2: 'Después del hospital: la ventana que no conviene perder',
                parrafos: [
                    'Unos pocos días en cama cuestan fuerza, equilibrio y confianza. En el adulto mayor ese deterioro se instala rápido y cuesta bastante más revertirlo que prevenirlo. Por eso las semanas siguientes al alta son decisivas, sea por una neumonía, una cirugía o una fractura de cadera.',
                    'En el caso de la fractura de cadera, la evidencia es consistente en que la rehabilitación temprana y sostenida se asocia a mejores resultados funcionales. El trabajo parte por lo básico —transferencias seguras entre cama, silla y baño— y progresa hacia la marcha asistida, las escaleras y el retorno a las actividades de siempre.',
                ],
            },
            {
                h2: 'Cómo se evalúa a un adulto mayor (y por qué no basta con preguntarle cómo está)',
                parrafos: [
                    'La primera sesión es de evaluación funcional y en KINEUM no tiene costo. Se miden cosas concretas y repetibles, para poder comparar más adelante y saber si el plan está funcionando:',
                ],
                listaTitulo: 'Qué se mide en la evaluación',
                lista: [
                    'Velocidad de marcha: caminar bajo cierto umbral de velocidad se asocia a mayor riesgo funcional.',
                    'Test de sentarse y pararse de una silla: refleja fuerza de piernas y riesgo de caídas.',
                    'Fuerza de agarre, que es un buen indicador de fuerza general.',
                    'Equilibrio en distintas condiciones de apoyo.',
                    'Revisión del hogar: dónde ocurren los tropiezos reales de esa casa en particular.',
                ],
            },
            {
                h2: 'Por qué en la casa funciona mejor para este perfil',
                parrafos: [
                    'En un box clínico se entrena en un entorno neutro. En la casa se entrena en el entorno donde la persona efectivamente se cae: ese escalón, ese pasillo estrecho, esa cama alta, ese baño sin barra.',
                    'Se suma un factor práctico: para un adulto mayor con movilidad reducida, cada traslado a un centro implica esfuerzo, riesgo y a menudo depender de un familiar que pida permiso en el trabajo. Esa fricción es la razón más común por la que un tratamiento se abandona a la tercera semana.',
                    'Y hay un tercer beneficio: el cuidador aprende en el lugar. Cómo asistir una transferencia sin lastimarse la espalda, qué ejercicios supervisar entre sesiones, qué señales vigilar.',
                ],
            },
            {
                h2: 'Cuándo conviene consultar pronto',
                parrafos: [
                    'Estas situaciones no son urgencias médicas, pero sí indican que conviene evaluar antes de que el deterioro avance:',
                ],
                lista: [
                    'Caídas repetidas, o miedo a caminar solo dentro de la casa.',
                    'Dificultad para levantarse de una silla sin usar las manos.',
                    'Pérdida de peso y de masa muscular en pocos meses.',
                    'Alta hospitalaria reciente con varios días de reposo en cama.',
                    'Dejar de salir de la casa por inseguridad al caminar.',
                ],
                alerta: true,
            },
        ],
        faqs: [
            {
                q: '¿Es peligroso que una persona de 80 años haga ejercicio?',
                a: 'El riesgo mayor es no hacerlo. El ejercicio supervisado por un kinesiólogo, con carga progresiva y adaptado a la condición de la persona, es una de las intervenciones con mejor respaldo para prevenir caídas y dependencia en el adulto mayor. Lo que sí requiere criterio profesional es la dosis inicial y la progresión.',
            },
            {
                q: 'Mi papá casi no se mueve, ¿igual sirve?',
                a: 'Sí. Se parte desde donde está la persona, aunque eso signifique trabajar sentado o incluso en cama las primeras sesiones, y se progresa gradualmente. El punto de partida bajo no impide la mejora: la limita solo si nunca se empieza.',
            },
            {
                q: '¿Necesito orden médica para empezar?',
                a: 'Para la evaluación inicial no es necesaria. Sí la vas a necesitar si quieres reembolsar las sesiones en tu Isapre o en tu seguro complementario, y siempre es útil que el kinesiólogo conozca el diagnóstico y las indicaciones del médico tratante.',
            },
            {
                q: '¿Cuántas sesiones se necesitan?',
                a: 'Los programas geriátricos suelen tomar entre 8 y 16 semanas, con dos o tres sesiones semanales al inicio y luego un espaciado progresivo. En la evaluación gratuita te damos una estimación realista para el caso puntual antes de que decidas.',
            },
            {
                q: '¿Puede acompañar un familiar la sesión?',
                a: 'Lo recomendamos. Formar al cuidador en transferencias seguras y en los ejercicios del día a día multiplica el resultado, porque el trabajo continúa entre sesiones. Esa continuidad es la que sostiene la mejora.',
            },
            {
                q: '¿Qué equipamiento llevan a la casa?',
                a: 'Camilla profesional, bandas elásticas, pesas livianas y elementos para trabajar equilibrio. No necesitas comprar ni acondicionar nada: parte del trabajo consiste justamente en usar los muebles y los espacios que la persona ya tiene.',
            },
        ],
        cta: {
            titulo: 'Evaluación geriátrica gratuita en tu casa',
            texto: 'Medimos fuerza, marcha y equilibrio, revisamos la seguridad del hogar y te decimos con honestidad qué se puede recuperar y en cuánto tiempo.',
            boton: 'Agendar evaluación gratuita',
            whatsapp: 'Hola, quiero una evaluación de kinesiología geriátrica a domicilio',
        },
        revisado: REVISADO,
    },

    respiratoria: {
        slug: 'respiratoria',
        url: 'https://kineum.cl/servicios/respiratoria',
        breadcrumb: 'Kinesiología respiratoria',
        kicker: 'KTR infantil y adulta',
        h1: 'Kinesiología Respiratoria a Domicilio (KTR)',
        intro:
            'Es invierno, tu hijo lleva noches con tos y secreciones que no salen, el pediatra indicó KTR y lo último que quieres es llevarlo con fiebre a una sala de espera llena de otros niños enfermos. La kinesiterapia respiratoria se puede hacer completa en tu casa, y en lactantes hay una razón clínica de peso para hacerlo así: todavía no saben toser ni sonarse con eficacia, y necesitan ayuda externa para movilizar lo que tienen.',
        secciones: [
            {
                h2: 'Qué hace realmente la kinesiterapia respiratoria',
                parrafos: [
                    'La KTR es un conjunto de técnicas manuales e instrumentales que ayudan a movilizar y eliminar secreciones de la vía aérea, y a recuperar capacidad pulmonar después de una infección. No es un masaje en la espalda ni "golpecitos": son maniobras que aprovechan los flujos de aire del propio paciente para arrastrar las secreciones hacia donde puedan eliminarse.',
                    'En niños pequeños es especialmente útil porque la vía aérea es más estrecha, se obstruye con menos secreción y el reflejo de tos aún no es eficiente. En adultos, el foco suele estar en recuperar volumen pulmonar y resistencia después de una neumonía o una descompensación.',
                    'Un punto importante: la KTR se realiza con indicación médica. El pediatra, broncopulmonar o médico tratante define si corresponde y con qué frecuencia, porque no todos los cuadros respiratorios la requieren y en algunos no está indicada.',
                ],
            },
            {
                h2: 'Bronquiolitis, VRS y síndrome bronquial obstructivo',
                parrafos: [
                    'La bronquiolitis es la infección respiratoria baja más frecuente en lactantes durante el invierno chileno, y el virus respiratorio sincicial es su causa más común. El cuadro combina inflamación de la vía aérea pequeña con secreciones, y por eso el niño respira más rápido, se cansa al comer y duerme mal.',
                    'El manejo es principalmente médico y de soporte. La KTR se indica en casos seleccionados, típicamente cuando hay abundantes secreciones que el niño no logra movilizar, y su aporte es ayudar a despejar la vía aérea para que respire con menos esfuerzo.',
                    'En el síndrome bronquial obstructivo recurrente el trabajo suele ser periódico y se acompaña de educación a los padres: aseo nasal correcto, posiciones que favorecen el descanso y, sobre todo, reconocer a tiempo cuándo el cuadro se está complicando.',
                ],
            },
            {
                h2: 'Señales de urgencia: no llames al kinesiólogo, ve a urgencias',
                parrafos: [
                    'La kinesiología respiratoria complementa el tratamiento médico, no lo reemplaza. Ante cualquiera de estos signos, la indicación es acudir de inmediato a un servicio de urgencia:',
                ],
                lista: [
                    'Respiración muy rápida, quejido al respirar o hundimiento de las costillas y el cuello (retracciones).',
                    'Labios, lengua o piel de color azulado.',
                    'Rechazo total del alimento o del pecho en un lactante.',
                    'Somnolencia excesiva, decaimiento marcado o irritabilidad que no cede.',
                    'Pausas respiratorias, sobre todo en menores de 3 meses.',
                    'Fiebre alta en un lactante menor de 3 meses.',
                ],
                alerta: true,
            },
            {
                h2: 'Adultos: neumonía, EPOC y recuperación post COVID',
                parrafos: [
                    'Después de una neumonía es habitual quedar con zonas del pulmón mal ventiladas, secreciones espesas y musculatura respiratoria debilitada por los días de reposo. El cuerpo compensa respirando corto y alto, lo que perpetúa la sensación de falta de aire.',
                    'El trabajo con adultos combina reeducación de la respiración diafragmática, técnicas de higiene bronquial y reacondicionamiento físico progresivo, siempre con control de saturación durante la sesión. En EPOC y asma se suma el entrenamiento de la musculatura inspiratoria y técnicas de ahorro de energía para las actividades cotidianas.',
                    'Si la falta de aire no mejora varias semanas después del cuadro agudo, conviene evaluar: la fatiga persistente no es un desenlace inevitable.',
                ],
            },
            {
                h2: 'Cómo es una sesión en tu casa',
                parrafos: [
                    'La sesión parte con una evaluación breve del estado respiratorio y termina con indicaciones concretas para las horas siguientes. Con niños, buena parte del valor está en lo que los padres aprenden a hacer entre sesiones.',
                ],
                listaTitulo: 'Qué incluye',
                lista: [
                    'Control de saturación de oxígeno y frecuencia respiratoria antes, durante y después.',
                    'Técnicas de higiene bronquial adaptadas a la edad y al cuadro.',
                    'Aseo nasal, que en lactantes suele ser la mitad del problema.',
                    'Reeducación de la respiración diafragmática en niños mayores y adultos.',
                    'Educación a los padres: posiciones, señales de alarma y qué esperar en las próximas horas.',
                ],
            },
            {
                h2: 'Por qué a domicilio, y no en un centro',
                parrafos: [
                    'La razón principal es epidemiológica: llevar a un lactante con bronquiolitis a una sala de espera en pleno invierno lo expone a otros virus respiratorios, justo cuando su vía aérea ya está comprometida.',
                    'La segunda es práctica y clínica a la vez. Un niño coopera mucho más en su propio ambiente, con sus juguetes y sus padres cerca, y una sesión con un niño tranquilo rinde bastante más que una con un niño angustiado. Además los padres aprenden las técnicas con sus propios elementos, en su propia casa, que es donde van a tener que aplicarlas a las tres de la mañana.',
                ],
            },
        ],
        faqs: [
            {
                q: '¿Necesito orden médica para la KTR?',
                a: 'Sí. La kinesiterapia respiratoria se realiza con indicación del pediatra, broncopulmonar o médico tratante, que define si corresponde para ese cuadro y con qué frecuencia. Si aún no tienes evaluación médica, ese es el primer paso.',
            },
            {
                q: '¿La KTR sirve para cualquier resfrío?',
                a: 'No. Está indicada cuando hay secreciones que el paciente no logra movilizar por sí solo, y en cuadros específicos definidos por el médico. Un resfrío común sin compromiso bronquial no requiere kinesiterapia respiratoria.',
            },
            {
                q: '¿Le va a doler a mi hijo?',
                a: 'Las técnicas no son dolorosas, aunque a los lactantes suele incomodarles el aseo nasal y es habitual que lloren durante parte de la sesión. Ese llanto, de hecho, moviliza aire y ayuda. El kinesiólogo va explicando lo que hace para que puedas acompañarlo con tranquilidad.',
            },
            {
                q: '¿Cuántas sesiones se necesitan?',
                a: 'En cuadros agudos suelen bastar entre 3 y 8 sesiones, a veces concentradas en pocos días. En patología crónica o recurrente el trabajo es periódico y se ajusta según la temporada y la evolución.',
            },
            {
                q: '¿Atienden adultos o solo niños?',
                a: 'Ambos. Tratamos EPOC, secuelas de neumonía, recuperación post COVID y pacientes que quedaron desacondicionados tras una hospitalización, con control de saturación y progresión de ejercicio.',
            },
            {
                q: '¿Atienden fines de semana?',
                a: 'Sí, atendemos de lunes a domingo. En invierno priorizamos los casos respiratorios infantiles porque suelen requerir atención en el día.',
            },
        ],
        cta: {
            titulo: '¿Tu pediatra indicó KTR?',
            texto: 'Cuéntanos la edad del paciente y qué indicó el médico. Coordinamos la visita sin que tengas que salir de la casa con el niño enfermo.',
            boton: 'Coordinar KTR a domicilio',
            whatsapp: 'Hola, necesito kinesiología respiratoria (KTR) a domicilio',
        },
        revisado: REVISADO,
    },

    traumatologica: {
        slug: 'traumatologica',
        url: 'https://kineum.cl/servicios/traumatologica',
        breadcrumb: 'Kinesiología traumatológica',
        kicker: 'Lesiones y post operatorio',
        h1: 'Kinesiología Traumatológica a Domicilio',
        intro:
            'Lesiones musculares, articulares y de tendones tienen algo en común: se recuperan con carga progresiva bien dosificada, no con reposo. Esa es la diferencia entre volver a moverte sin dolor en algunas semanas y quedar con una molestia que reaparece cada tanto durante años. Y si acabas de salir de pabellón, el traslado a un centro es justamente lo que más te conviene evitar.',
        secciones: [
            {
                h2: 'Por qué el reposo prolongado es la peor receta',
                parrafos: [
                    'Durante décadas la indicación por defecto ante una lesión fue reposo. Hoy la evidencia apunta en otra dirección: el tejido lesionado necesita carga controlada para reorganizarse y recuperar su capacidad de soportar tensión. Sin ese estímulo, cicatriza más débil y con menor tolerancia al esfuerzo.',
                    'Esto no significa seguir como si nada. Significa modificar la carga en lugar de eliminarla: bajar la intensidad, cambiar el gesto, reducir el rango, pero mantener al tejido trabajando. La dosis correcta es la que genera una molestia tolerable que no aumenta al día siguiente.',
                    'El error más común que vemos no es exigirse de más, sino inmovilizar de más y volver de golpe a la actividad completa cuando el dolor cede. Ahí ocurre la recaída.',
                ],
            },
            {
                h2: 'Lumbago: qué hacer las primeras 48 horas',
                parrafos: [
                    'El dolor lumbar agudo afecta a la gran mayoría de las personas en algún momento de la vida, y la mayoría de los episodios no responde a una lesión estructural grave. Lo que más influye en cómo evoluciona es lo que se hace en los primeros días.',
                    'La recomendación actual es mantener actividad suave dentro de lo tolerable, evitar el reposo en cama prolongado, aplicar calor local para relajar la musculatura y retomar de forma gradual las actividades habituales. El reposo absoluto por varios días se asocia a peor evolución.',
                    'Ahora bien, hay señales que obligan a consultar antes de rehabilitar: pérdida de fuerza en las piernas, alteraciones para orinar o defecar, fiebre asociada al dolor, o dolor tras un golpe o caída importante.',
                ],
            },
            {
                h2: 'Esguince de tobillo: el que "se cura solo" y vuelve a fallar',
                parrafos: [
                    'Un esguince de tobillo mal rehabilitado es una de las causas más frecuentes de inestabilidad crónica. El ligamento cicatriza, el dolor cede y la persona vuelve a caminar normal, pero queda algo que nadie ve: los receptores de posición del tobillo quedaron alterados.',
                    'Eso es la propiocepción, y es lo que permite corregir automáticamente cuando pisas mal en un terreno irregular. Si no se reentrena con trabajo de equilibrio y superficies inestables, el tobillo vuelve a "fallar" al primer descuido, y cada nuevo esguince deja la articulación más laxa.',
                    'Por eso el alta no debería darse cuando desaparece el dolor, sino cuando se recupera fuerza, rango y control. Son criterios distintos y llegan en momentos distintos.',
                ],
            },
            {
                h2: 'Hombro: la alternativa real a la cirugía',
                parrafos: [
                    'El dolor de hombro por tendinopatía del manguito rotador es muy frecuente después de los 40. La evidencia disponible muestra que, en casos no traumáticos, un programa de ejercicio progresivo bien conducido obtiene resultados comparables a la cirugía en buena parte de los pacientes.',
                    'El tratamiento parte con ejercicios isométricos, que además tienen efecto analgésico, progresa a trabajo con resistencia y termina con fortalecimiento funcional por sobre la cabeza. Suele tomar entre 8 y 12 semanas de trabajo constante.',
                    'Los tres errores que perpetúan el dolor son conocidos: reposo total del brazo, estiramientos agresivos sobre un tendón irritado, e infiltraciones repetidas sin rehabilitar después.',
                ],
            },
            {
                h2: 'Post operatorio: la ventana que no vuelve',
                parrafos: [
                    'Después de una cirugía —prótesis de rodilla o cadera, artroscopia, reparación de manguito, ligamento cruzado— hay una regla que conviene no ignorar: el rango de movimiento que no se gana en las primeras semanas cuesta muchísimo más recuperar después, y a veces no se recupera.',
                    'El tejido cicatricial se organiza rápido. Sin movilización dentro de lo que autorizó el cirujano, la articulación se rigidiza. En prótesis de rodilla, además, dormir con una almohada bajo la rodilla porque duele menos es la forma más eficiente de terminar con una extensión incompleta y una marcha coja permanente.',
                    'Todo el trabajo se hace respetando el protocolo y las precauciones que indicó tu traumatólogo, y documentando la evolución para sus controles.',
                ],
            },
            {
                h2: 'Qué llega a tu casa y para qué sirve',
                parrafos: [
                    'El kinesiólogo traslada el equipamiento completo, así que no necesitas comprar ni arrendar nada:',
                ],
                lista: [
                    'Camilla profesional, para poder trabajar en la posición correcta y no en un sillón.',
                    'TENS (electroestimulación), para modular el dolor cuando limita el movimiento.',
                    'Ultrasonido, en las fases donde está indicado.',
                    'Bandas elásticas y pesas, que son el corazón del tratamiento: la carga progresiva.',
                    'Goniómetro, para medir el rango articular y comprobar que efectivamente estás avanzando.',
                ],
            },
            {
                h2: 'Consulta médica antes de rehabilitar si hay',
                parrafos: [
                    'Estas situaciones requieren evaluación médica previa, no kinesiología directa:',
                ],
                lista: [
                    'Deformidad evidente o imposibilidad total de mover el segmento tras un golpe.',
                    'Pérdida de fuerza o de sensibilidad que va en aumento.',
                    'Dolor nocturno intenso que no cede en ninguna posición.',
                    'Fiebre asociada a dolor articular, o una articulación caliente y enrojecida.',
                    'Pantorrilla hinchada, caliente y dolorosa después de una cirugía o inmovilización.',
                ],
                alerta: true,
            },
        ],
        faqs: [
            {
                q: '¿Necesito radiografía o resonancia antes de empezar?',
                a: 'No siempre. Muchas lesiones se diagnostican y tratan clínicamente sin imágenes. En la evaluación inicial determinamos si el cuadro requiere estudio o derivación médica antes de iniciar el tratamiento.',
            },
            {
                q: '¿Cuántas sesiones voy a necesitar?',
                a: 'Depende del tejido comprometido y de la severidad, habitualmente entre 6 y 12 sesiones. En la evaluación gratuita te damos una estimación realista antes de que decidas, y la vamos ajustando según cómo respondas.',
            },
            {
                q: '¿Puedo seguir entrenando durante el tratamiento?',
                a: 'En general sí, ajustando la carga. Detener toda actividad suele retrasar la recuperación y desacondiciona el resto del cuerpo. Lo que hacemos es modificar el estímulo, no eliminarlo: cambiar el gesto, el rango o la intensidad.',
            },
            {
                q: '¿Cuándo empiezo después de una cirugía?',
                a: 'Idealmente apenas recibes el alta, coordinado con tu traumatólogo y respetando sus precauciones. Empezar tarde es la causa más común de rigidez articular persistente.',
            },
            {
                q: '¿Trabajan coordinados con mi traumatólogo?',
                a: 'Sí. Seguimos el protocolo que indica tu cirujano y documentamos la evolución para que el equipo médico la revise en los controles. Si detectamos algo fuera de lo esperado, lo derivamos.',
            },
            {
                q: '¿Sirve si la lesión es de hace meses?',
                a: 'Sí. Las lesiones crónicas responden a carga progresiva igual que las agudas, aunque suelen requerir más tiempo y más constancia. Lo que no funciona en esos casos es seguir esperando a que pase solo.',
            },
        ],
        cta: {
            titulo: 'Evaluación traumatológica gratuita en tu casa',
            texto: 'Evaluamos el movimiento, identificamos qué gesto genera el dolor y te decimos cuántas sesiones necesitas antes de que decidas.',
            boton: 'Agendar evaluación gratuita',
            whatsapp: 'Hola, necesito kinesiología traumatológica a domicilio',
        },
        revisado: REVISADO,
    },

    neurologica: {
        slug: 'neurologica',
        url: 'https://kineum.cl/servicios/neurologica',
        breadcrumb: 'Rehabilitación neurológica',
        kicker: 'ACV, Parkinson y más',
        h1: 'Neurorehabilitación a Domicilio en Santiago',
        intro:
            'Si alguien de tu familia acaba de tener un accidente cerebrovascular, probablemente estás sobrepasado y con dos preguntas urgentes: cuánto se puede recuperar y cuándo hay que empezar. La respuesta corta a la segunda es lo antes posible tras el alta. La respuesta a la primera depende de muchos factores, pero hay algo que sí está claro: el cerebro puede reorganizarse, y esa reorganización responde al entrenamiento.',
        secciones: [
            {
                h2: 'Neuroplasticidad, explicado sin jerga',
                parrafos: [
                    'Durante mucho tiempo se creyó que el cerebro adulto era una estructura fija. Hoy se sabe que no: puede formar nuevas conexiones y reasignar funciones a otras áreas cuando una zona resulta dañada. Eso es la neuroplasticidad.',
                    'Lo relevante para una familia es que ese proceso no ocurre solo por el paso del tiempo. Se activa con estímulo específico y repetición: practicar muchas veces el movimiento que se quiere recuperar, con dificultad ajustada para que sea exigente pero posible.',
                    'De ahí sale el principio que ordena todo el tratamiento: repetición intensiva de tareas con sentido. No ejercicios abstractos, sino alcanzar un vaso, abotonarse, levantarse del sillón. El cerebro aprende mejor lo que tiene un propósito.',
                ],
            },
            {
                h2: 'Después de un ACV: por qué el tiempo importa',
                parrafos: [
                    'Los primeros meses tras un ACV concentran la mayor capacidad de recuperación, y por eso iniciar la rehabilitación temprano tras el alta es lo recomendable. Eso no significa que después no se pueda avanzar: la neuroplasticidad se puede estimular durante toda la vida, y pacientes con años de evolución siguen ganando función, sobre todo en marcha, equilibrio y autonomía en tareas diarias.',
                    'Lo que no se puede hacer es prometer un resultado. La recuperación depende de la extensión y ubicación de la lesión, la edad, las condiciones previas y la intensidad del trabajo. Cualquiera que te garantice un desenlace específico no está siendo honesto contigo.',
                    'El trabajo se organiza en tres frentes: recuperar la marcha y el equilibrio, reincorporar el brazo afectado a las tareas cotidianas, y prevenir las complicaciones del lado con menor movilidad, como el dolor de hombro y las contracturas.',
                ],
            },
            {
                h2: 'Parkinson: amplitud y bloqueos de la marcha',
                parrafos: [
                    'En la enfermedad de Parkinson el movimiento tiende a hacerse más pequeño de forma progresiva, y la persona no siempre lo percibe: siente que camina normal aunque el paso se acortó. Por eso el trabajo se enfoca en entrenar deliberadamente movimientos de gran amplitud.',
                    'El otro problema característico son los bloqueos de la marcha, esos momentos en que los pies parecen pegarse al piso, típicamente al cruzar un umbral o al girar. Se trabajan con estrategias de clave externa —señales visuales o auditivas que dan el ritmo— que suelen permitir retomar el paso.',
                    'La constancia importa más que la intensidad: el ejercicio regular es parte del manejo de la enfermedad, no un complemento opcional.',
                ],
            },
            {
                h2: 'Esclerosis múltiple y el manejo de la fatiga',
                parrafos: [
                    'En esclerosis múltiple el desafío no es solo la fuerza o el equilibrio, sino la fatiga, que es uno de los síntomas más limitantes y peor comprendidos por el entorno.',
                    'El principio es dosificar: trabajar por debajo del umbral que dispara el agotamiento, distribuir la actividad a lo largo del día y evitar el calor excesivo durante el ejercicio, que en muchas personas empeora los síntomas transitoriamente. Un programa mal dosificado deja a la persona en cama dos días y termina abandonándose.',
                ],
            },
            {
                h2: 'El cuidador no es un espectador',
                parrafos: [
                    'En neurorehabilitación el resultado depende en buena medida de lo que ocurre entre sesiones. Un kinesiólogo que va dos o tres veces por semana aporta las horas de entrenamiento supervisado; el resto de las repeticiones las facilita quien está en la casa.',
                    'Por eso parte del trabajo consiste en formar al cuidador: cómo asistir una transferencia sin lastimarse, cómo estimular el uso del lado afectado en vez de hacerlo todo por la persona, qué ejercicios supervisar y cuáles no, y cómo reconocer señales que hay que consultar.',
                    'Ese acompañamiento también protege al cuidador. La sobrecarga física y emocional de quien cuida es un problema clínico en sí mismo.',
                ],
            },
            {
                h2: 'Por qué la casa gana al box clínico en neurología',
                parrafos: [
                    'El aprendizaje motor es específico del contexto: lo que se entrena en un entorno se transfiere mejor a ese mismo entorno. Practicar levantarse de una camilla estándar no es lo mismo que practicar levantarse del sillón donde la persona pasa el día.',
                    'En la casa se entrena con los objetos reales, en el baño real, con la altura de cama real y las escaleras reales. Para un paciente neurológico, que necesita reaprender tareas concretas, esa diferencia es sustancial. Y se elimina la fricción del traslado, que en pacientes con movilidad reducida es la principal causa de abandono del tratamiento.',
                ],
            },
            {
                h2: 'Emergencia neurológica: llama al 131',
                parrafos: [
                    'Ante estos signos de aparición súbita no corresponde esperar ni consultar por WhatsApp: es una emergencia y el tiempo determina el pronóstico.',
                ],
                lista: [
                    'Pérdida repentina de fuerza o sensibilidad en un lado del cuerpo.',
                    'Dificultad súbita para hablar o para entender lo que le dicen.',
                    'Desviación aguda de un lado de la cara.',
                    'Pérdida brusca de visión o de equilibrio.',
                    'Dolor de cabeza intenso y repentino, distinto a cualquier otro.',
                ],
                alerta: true,
            },
        ],
        faqs: [
            {
                q: '¿Cuándo conviene empezar después de un ACV?',
                a: 'Lo antes posible tras el alta hospitalaria. Los primeros meses concentran la mayor ventana de recuperación, aunque el trabajo posterior sigue aportando. Si el alta fue esta semana, esta semana debería empezar la rehabilitación.',
            },
            {
                q: '¿Sirve si el ACV fue hace años?',
                a: 'Sí. Se siguen logrando mejoras funcionales con entrenamiento específico, sobre todo en marcha, equilibrio y autonomía en tareas diarias. El progreso es más lento que en la fase inicial, pero existe.',
            },
            {
                q: '¿Cuánto dura un programa de neurorehabilitación?',
                a: 'Es un proceso largo: se mide en meses, con reevaluaciones periódicas para ajustar objetivos. No es un tratamiento de diez sesiones y alta, y cualquier plan que se presente así conviene mirarlo con dudas.',
            },
            {
                q: '¿Trabajan con el neurólogo tratante?',
                a: 'Sí. Seguimos las indicaciones médicas y documentamos la evolución funcional para los controles. Si aparecen signos que requieren evaluación médica, derivamos de inmediato.',
            },
            {
                q: '¿Qué pasa si el paciente no colabora?',
                a: 'Es frecuente, sobre todo cuando hay deterioro cognitivo o ánimo bajo tras el evento. Se ajustan las tareas para que sean significativas para esa persona en particular y se trabaja con el cuidador. Forzar no sirve; encontrar una tarea que le importe, sí.',
            },
            {
                q: '¿Atienden parálisis facial?',
                a: 'Sí, con reeducación neuromuscular. En parálisis facial el inicio temprano y la dosificación suave son importantes: el trabajo agresivo puede favorecer movimientos involuntarios asociados que después cuesta corregir.',
            },
        ],
        cta: {
            titulo: 'Evaluación neurológica gratuita en tu casa',
            texto: 'Evaluamos marcha, equilibrio y función del brazo afectado, y armamos un plan realista con la familia. Sin promesas que no se puedan cumplir.',
            boton: 'Agendar evaluación gratuita',
            whatsapp: 'Hola, necesito neurorehabilitación a domicilio',
        },
        revisado: REVISADO,
    },

    nosotros: {
        slug: 'nosotros',
        url: 'https://kineum.cl/nosotros',
        breadcrumb: 'Quiénes somos',
        kicker: 'Equipo clínico',
        h1: 'Kinesiólogos Certificados a Domicilio en Santiago',
        intro:
            'Cuando dejas entrar a un profesional a tu casa para tratar a tu papá, a tu hijo o a ti mismo, la pregunta de fondo es una sola: ¿quién es esta persona y por qué debería confiar en ella? Esta página responde eso: qué le exigimos a un kinesiólogo para atender bajo nuestro nombre, cómo trabajamos y qué puedes verificar por tu cuenta.',
        secciones: [
            {
                h2: 'Qué le exigimos a un kinesiólogo para atender contigo',
                parrafos: [
                    'Atender a domicilio es distinto a atender en un box. El profesional trabaja sin colegas al lado, decide solo, y muchas veces es la única persona del sistema de salud que ve cómo vive realmente el paciente. Eso exige más criterio, no menos.',
                ],
                listaTitulo: 'Requisitos que verificamos',
                lista: [
                    'Título universitario de kinesiólogo, verificado.',
                    'Inscripción vigente en el Registro Nacional de Prestadores Individuales de Salud de la Superintendencia de Salud, que puedes consultar tú mismo en el sitio de la Superintendencia.',
                    'Experiencia clínica previa en el área que va a atender: la rehabilitación geriátrica, la respiratoria infantil y la neurológica requieren competencias distintas.',
                    'Capacidad de comunicarse con la familia y con el médico tratante, que en domicilio es parte del trabajo, no un extra.',
                ],
            },
            {
                h2: 'Cómo trabajamos: evaluar, planificar, reevaluar',
                parrafos: [
                    'No partimos tratando. Partimos midiendo, porque sin línea de base no hay forma de saber si el tratamiento está sirviendo o solo está pasando el tiempo.',
                    'La primera visita es una evaluación funcional sin costo: se miden capacidades concretas según el caso —rango articular, fuerza, velocidad de marcha, equilibrio, saturación—, se revisa el entorno donde vive el paciente y se conversan objetivos realistas con la familia. De ahí sale un plan con número estimado de sesiones y frecuencia.',
                    'Cada cierto tiempo se repiten las mismas mediciones. Si los números no se mueven, el plan cambia. Preferimos decirte que hay que ajustar el enfoque antes que vender sesiones que no están aportando.',
                ],
            },
            {
                h2: 'Qué llevamos a tu casa',
                parrafos: [
                    'El equipamiento viaja con el kinesiólogo. No necesitas comprar, arrendar ni acondicionar nada, y esa es una diferencia real respecto de las atenciones domiciliarias que llegan solo con las manos.',
                ],
                lista: [
                    'Camilla profesional plegable, para trabajar en la posición correcta.',
                    'Electroestimulación (TENS) y ultrasonido cuando el caso lo requiere.',
                    'Bandas elásticas, pesas livianas y elementos de equilibrio.',
                    'Oxímetro de pulso para las atenciones respiratorias.',
                    'Goniómetro y elementos de medición, porque el progreso se mide, no se estima.',
                ],
            },
            {
                h2: 'La kinesiología complementa al médico, no lo reemplaza',
                parrafos: [
                    'Esto es parte de cómo trabajamos y conviene decirlo claro. Un kinesiólogo no diagnostica enfermedades ni reemplaza la indicación médica. Trabajamos sobre el diagnóstico del médico tratante y dentro de las precauciones que él define, especialmente en post operatorios.',
                    'Cuando detectamos algo que se sale de lo esperado —dolor que aumenta en vez de ceder, signos de infección, deterioro neurológico, una pantorrilla hinchada y caliente— la conducta es suspender y derivar, no seguir tratando. Preferimos perder una sesión antes que perder un paciente.',
                    'Y si en la evaluación inicial concluimos que el caso no requiere kinesiología, o que necesita primero otra especialidad, te lo decimos. La evaluación es gratuita justamente para poder ser honestos en ese momento.',
                ],
            },
            {
                h2: 'Transparencia de precios y reembolso',
                parrafos: [
                    'Los valores están publicados en la página de precios, sin "consulte por su caso" para los planes estándar. Somos un servicio particular: emitimos boleta de honorarios electrónica el mismo día del pago.',
                    'Con esa boleta puedes solicitar reembolso en tu Isapre, donde según el plan se recupera habitualmente entre un 50% y un 80%, y luego el copago restante en tu seguro complementario si tienes uno. Para el reembolso vas a necesitar orden médica vigente, así que conviene pedirla desde el principio.',
                    'Somos un servicio particular: no emitimos bonos de ningún sistema previsional. El camino es siempre boleta y reembolso.',
                ],
            },
            {
                h2: 'Datos de la empresa',
                parrafos: [
                    'Para que sepas con quién estás contratando, y puedas verificarlo:',
                ],
                lista: [
                    'Razón social: Kineum SpA.',
                    'RUT: 76.892.102-K.',
                    'Dirección: Av. Apoquindo 4501, Las Condes, Santiago.',
                    'Teléfono y WhatsApp: +56 9 9967 9593.',
                    'Cobertura: 11 comunas de Santiago Oriente y Centro.',
                ],
            },
            {
                h2: 'Si algo no sale bien',
                parrafos: [
                    'Puede pasar que un kinesiólogo no haga match con un paciente, que el horario deje de funcionar o que sientas que el tratamiento no avanza. Escríbenos por WhatsApp y lo resolvemos: cambiamos de profesional, reajustamos el plan o revisamos el enfoque.',
                    'Lo que preferimos es que nos lo digas y no que abandones el tratamiento en silencio, porque en rehabilitación abandonar a mitad de camino suele significar perder lo ganado.',
                ],
            },
        ],
        faqs: [
            {
                q: '¿Cómo verifico que el kinesiólogo está registrado?',
                a: 'La Superintendencia de Salud mantiene el Registro Nacional de Prestadores Individuales de Salud, de consulta pública. Puedes buscar ahí por nombre o RUT del profesional. Si quieres verificar antes de la primera visita, pídenos los datos por WhatsApp y te los damos.',
            },
            {
                q: '¿La evaluación inicial es realmente gratis?',
                a: 'Sí, y sin compromiso de contratar. Incluye la visita, la evaluación funcional y la propuesta de plan con número estimado de sesiones. Si decides no seguir, no pagas nada.',
            },
            {
                q: '¿Cómo funciona el pago y el reembolso?',
                a: 'KINEUM es un servicio particular: pagas la sesión o el plan y emitimos boleta de honorarios electrónica el mismo día. Con esa boleta y tu orden médica solicitas el reembolso en tu Isapre, y el copago restante en tu seguro complementario si tienes uno. No emitimos bonos de ningún sistema previsional.',
            },
            {
                q: '¿Siempre va el mismo kinesiólogo?',
                a: 'Es lo que buscamos, porque la continuidad mejora el resultado y la relación con el paciente. Si por alguna razón hay que cambiar, te avisamos antes y traspasamos la ficha completa para que el tratamiento no se reinicie.',
            },
            {
                q: '¿Qué pasa si mi caso necesita otra especialidad?',
                a: 'Te lo decimos en la evaluación y te orientamos sobre a quién consultar. No tomamos casos que no correspondan a kinesiología solo para vender sesiones.',
            },
            {
                q: '¿Puedo pagar con tarjeta?',
                a: 'Sí: aceptamos efectivo, transferencia, tarjeta de débito y crédito. La boleta se emite el mismo día y llega a tu correo.',
            },
        ],
        cta: {
            titulo: 'Conversemos tu caso',
            texto: 'Cuéntanos qué necesitas por WhatsApp. Si corresponde kinesiología, agendamos la evaluación gratuita; si no, te orientamos igual.',
            boton: 'Escribir por WhatsApp',
            whatsapp: 'Hola, quiero consultar por kinesiología a domicilio',
        },
        revisado: REVISADO,
    },
}

export function getServicio(slug: string) {
    return serviciosContenido[slug]
}
