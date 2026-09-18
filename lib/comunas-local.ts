// Contenido local único por comuna (centros de salud verificados, bloque del hub
// y texto por especialidad). Reduce el texto compartido entre /{especialidad}-{comuna}.

export interface CentroSalud {
    nombre: string
    tipo: string
    nota: string
}

export interface SeoLocal {
    title: string
    description: string
    keywords: string[]
}

export interface EspecialidadLocal {
    slug: string
    introLocal: string
    faqsLocales: { q: string; a: string }[]
    seoTitle?: string
    seoDescription?: string
    keywords?: string[]
}

export interface ComunaLocal {
    centrosSalud: CentroSalud[]
    hub: { h2: string; parrafos: string[] }
    especialidades: EspecialidadLocal[]
    /** Metadatos del hub de la comuna, escritos junto con el texto local */
    hubSeo?: SeoLocal
}

export const comunasLocal: Record<string, ComunaLocal> = {
    "las-condes": {
        "centrosSalud": [
            {
                "nombre": "Clínica Las Condes",
                "tipo": "Clínica privada",
                "nota": "Urgencia 24 h adulto y pediátrica"
            },
            {
                "nombre": "Clínica Universidad de los Andes",
                "tipo": "Clínica privada",
                "nota": "Urgencia 24 h adulto y pediátrica"
            },
            {
                "nombre": "Hospital Clínico de la Fuerza Aérea de Chile \"Gral. Dr. Raúl Yazigi J.\" (Hospital FACh)",
                "tipo": "Hospital",
                "nota": "Urgencia 24 h adulto y pediátrica"
            },
            {
                "nombre": "SAPU Las Condes (La Escuela 1229)",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria 24 h, adulto y pediátrica"
            },
            {
                "nombre": "Clínica Alemana de Santiago",
                "tipo": "Clínica privada",
                "nota": "Ubicada en Vitacura. Urgencia 24 h adulto y pediátrica"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Las Condes: de Apoquindo a la precordillera",
            "parrafos": [
                "Atenderte en tu casa en Las Condes cambia bastante según dónde vivas. En el eje Apoquindo, El Golf, Escuela Militar y Manquehue abundan las torres con ascensor: el kinesiólogo sube con equipo portátil y la sesión se arma en el living o el dormitorio, sin que tengas que enfrentar la congestión de Av. Apoquindo en hora punta. Hacia el oriente, en San Carlos de Apoquindo y Los Dominicos, predominan las casas y condominios, y el terreno sube: calles en pendiente, escaleras exteriores y accesos que también se trabajan dentro del plan.",
                "La comuna concentra centros de alta complejidad como Clínica Las Condes, Clínica Universidad de los Andes y el Hospital FACh. Si te dieron el alta en alguno de ellos, ten a mano tu epicrisis y las indicaciones médicas para la evaluación inicial gratuita: el kinesiólogo arma el plan siguiendo esa pauta. KINEUM atiende de forma particular e independiente, sin convenio con esos centros.",
                "Ante una urgencia, como dificultad para respirar, dolor en el pecho o pérdida súbita de fuerza, la kinesiología no es el camino: llama al SAMU 131 o acude a una urgencia 24 h, como el SAPU Las Condes en La Escuela 1229 o las urgencias de las clínicas de la comuna."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En Las Condes, la kinesiología geriátrica a domicilio se adapta a dos realidades muy distintas. Si tu papá o tu mamá vive en un departamento del eje Apoquindo o Manquehue, el trabajo suele centrarse en moverse con seguridad dentro de espacios acotados: levantarse del sillón, entrar a la ducha, caminar hasta el ascensor y salir al hall del edificio. Si vive en una casa hacia San Carlos de Apoquindo o Los Dominicos, aparecen otros desafíos: escaleras interiores, peldaños hacia el jardín y veredas con pendiente, donde tropezar es más fácil. El kinesiólogo evalúa esos puntos del recorrido real de la persona y entrena fuerza de piernas, equilibrio y marcha sobre ese mismo terreno, además de sugerir ajustes simples como barandas o mejor iluminación en los accesos. Así el plan responde a los obstáculos que la persona enfrenta cada día y no a los de una sala de ejercicios. Si hubo una caída con golpe en la cabeza, confusión o dolor intenso, primero va la evaluación médica.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en una casa en Los Dominicos con escaleras exteriores, ¿pueden trabajar la entrada y salida de la casa?",
                        "a": "Sí. Si es seguro hacerlo, parte de la sesión se realiza en los peldaños y el acceso reales de la casa, con apoyo del kinesiólogo, para practicar subir y bajar con buena técnica y definir dónde conviene instalar una baranda."
                    },
                    {
                        "q": "Mi papá vive en un departamento pequeño cerca de Escuela Militar, ¿hay espacio suficiente para las sesiones?",
                        "a": "Habitualmente sí. El equipo es portátil y los ejercicios se adaptan a un pasillo, una silla firme o el living. Esos mismos espacios sirven para entrenar los traslados y la marcha que tu papá usa todos los días."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Si te operaron en Clínica Las Condes, en la Clínica Universidad de los Andes o en el Hospital FACh, las primeras semanas en casa suelen ser las más difíciles para moverse, y justo entonces toca empezar la rehabilitación. En Las Condes eso puede implicar bajar de una torre en ascensor, conseguir quién te lleve y quedar detenido en la congestión de Av. Apoquindo con una rodilla, cadera u hombro recién intervenido. Con la rehabilitación postquirúrgica a domicilio ese traslado se evita: el kinesiólogo revisa tu epicrisis y la pauta del cirujano, y trabaja rango de movimiento, fuerza y marcha, con o sin ayudas técnicas, en tu propio departamento o casa. KINEUM atiende de forma particular y no tiene convenio con esos centros. Fiebre, herida con secreción o un dolor que aumenta bruscamente son motivo de consulta médica pronta. Dolor o hinchazón en una pantorrilla, o falta de aire repentina o dolor en el pecho, requieren atención inmediata: llama al SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "Me operaron en una clínica de Las Condes, ¿pueden empezar la rehabilitación en casa apenas me den el alta?",
                        "a": "Depende de las indicaciones de tu cirujano. Con la epicrisis y la pauta médica, en la evaluación inicial gratuita se define cuándo y cómo partir. Si el médico pide esperar o limitar movimientos, se respeta."
                    },
                    {
                        "q": "Vivo en San Carlos de Apoquindo, lejos del Metro, ¿llegan hasta allá para las sesiones después de la operación?",
                        "a": "Sí, Las Condes está dentro de las comunas que cubre KINEUM. Al escribir al WhatsApp +56 9 9967 9593 indica tu dirección para coordinar el horario, y ten a mano la epicrisis y las ayudas técnicas que te indicaron."
                    }
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "La kinesiología respiratoria a domicilio en Las Condes sirve tanto para niños con cuadros bronquiales como para adultos que se recuperan de una neumonía o viven con una enfermedad pulmonar crónica. En la sesión se trabajan técnicas de despeje de secreciones, patrón respiratorio y tolerancia al esfuerzo, siempre según la indicación médica. En esta especialidad, tan importante como la sesión es saber cuándo no esperar al kinesiólogo: respiración muy rápida, hundimiento entre las costillas, labios morados o decaimiento marcado son señales de alarma. Ante ellas llama al SAMU 131 o ve a una urgencia. En la comuna tienen urgencia pediátrica 24 h el SAPU Las Condes de La Escuela 1229, Clínica Las Condes y Clínica Universidad de los Andes; la Clínica Alemana, en Vitacura, también la tiene. Como la comuna es extensa, conviene que identifiques cuál te queda más cerca antes de necesitarla y que guardes su dirección junto al número del SAMU.",
                "faqsLocales": [
                    {
                        "q": "Si mi hijo empeora de noche en Las Condes, ¿a dónde lo llevo?",
                        "a": "Si le cuesta mucho respirar, llama al SAMU 131. Si puedes trasladarlo, hay urgencia pediátrica 24 h en el SAPU Las Condes (La Escuela 1229), Clínica Las Condes y Clínica Universidad de los Andes. La kinesiología no reemplaza esa atención."
                    },
                    {
                        "q": "Vivo en un sector alto de Las Condes, ¿qué hago mientras llega la ayuda si mi hijo respira mal?",
                        "a": "Llama al SAMU 131 y sigue sus indicaciones por teléfono. Mientras llegan, deja a tu hijo en la posición en que respire más cómodo, habitualmente sentado o semisentado, mantenlo tranquilo, evita darle comida y ten lista la dirección exacta con una referencia para ubicar la casa, sobre todo si vives en un condominio. No intentes reemplazar esa atención con ejercicios respiratorios por tu cuenta."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Volver a casa después de un ACV u otra lesión neurológica, tras una hospitalización en uno de los centros de alta complejidad que hay en Las Condes, abre una etapa en que la familia pasa a sostener buena parte del día a día. La rehabilitación neurológica a domicilio busca dar continuidad a lo que se inició durante la hospitalización: el kinesiólogo parte de la epicrisis y de las indicaciones del neurólogo y del equipo tratante, y desde ahí trabaja control de tronco, traslados, equilibrio y marcha según lo que la persona pueda hacer. También se aplica en enfermedades progresivas como el Parkinson. Una parte central es enseñar a la familia o a la cuidadora a asistir sin sobrecargarse: pasar de la cama a la silla, cambiar de posición en la cama y, si la persona vive en un edificio, entrar y salir del ascensor en silla de ruedas con seguridad. Pérdida súbita de fuerza, dificultad para hablar o la cara desviada pueden indicar un nuevo ACV: llama de inmediato al SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "A mi papá le dan el alta de una clínica de Las Condes después de un ACV, ¿qué conviene tener listo para la primera sesión en casa?",
                        "a": "La epicrisis, las indicaciones del neurólogo y del equipo tratante, la lista de medicamentos y, si existen, los informes de la kinesiología que recibió hospitalizado. Con eso, la evaluación inicial gratuita permite dar continuidad al trabajo sin partir de cero."
                    },
                    {
                        "q": "Mi mamá usa silla de ruedas y vive en un edificio, ¿pueden enseñarle a la cuidadora a movilizarla, incluido el ascensor?",
                        "a": "Sí. Parte de las sesiones se dedica a enseñar traslados, posicionamiento y el manejo de la silla en el ascensor y el hall, además de ejercicios simples para los días sin kinesiólogo."
                    }
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Un esguince de tobillo, una tendinopatía, un lumbago, dolor de cuello o las secuelas de una fractura se pueden tratar con kinesiología traumatológica a domicilio en Las Condes. El kinesiólogo evalúa, aplica terapia manual y ejercicio terapéutico, y ajusta la carga a tu evolución. En un departamento de torre basta un espacio despejado en el living; en una casa se puede aprovechar el patio o un peldaño para ejercicios funcionales. Lo propio de la comuna aparece al final del proceso: si sales a caminar o trotar por calles en pendiente hacia el oriente, la vuelta a ese terreno se planifica por etapas, primero en plano, luego en subidas suaves y al final en bajadas, que suelen exigir más a rodillas y tobillos. Ante una deformidad visible, imposibilidad de apoyar el pie o un dolor que no cede tras un golpe fuerte, primero hay que descartar una fractura en una urgencia con radiografía, como las de Clínica Las Condes o Clínica Universidad de los Andes.",
                "faqsLocales": [
                    {
                        "q": "Vivo en una torre de Las Condes con poco espacio, ¿se puede hacer ejercicio terapéutico con carga en el departamento?",
                        "a": "Habitualmente sí. Se trabaja con bandas elásticas, el peso del propio cuerpo, una silla firme o un escalón, y la carga se ajusta con series, repeticiones y ritmo. Si en algún momento tu caso requiere cargas mayores, el kinesiólogo te lo indica."
                    },
                    {
                        "q": "Me torcí el tobillo trotando en una calle en pendiente de Las Condes, ¿llamo primero al kinesiólogo?",
                        "a": "Si no puedes apoyar el pie, hay deformidad o mucha hinchazón, primero descarta una fractura en una urgencia con radiografía. Si ya te evaluó un médico o la lesión es leve, la evaluación inicial gratuita define el plan."
                    }
                ]
            }
        ]
    },
    "vitacura": {
        "centrosSalud": [
            {
                "nombre": "Clínica Alemana de Santiago (sede Vitacura)",
                "tipo": "clinica privada",
                "nota": "Urgencia 24 h, adulto y pediátrica"
            },
            {
                "nombre": "Clínica RedSalud Vitacura (ex Clínica Tabancura)",
                "tipo": "clinica privada",
                "nota": "Urgencia 24 h, adulto y pediátrica"
            },
            {
                "nombre": "SAPU Vitacura (Indiana 1195)",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria municipal; no funciona las 24 horas"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Vitacura: cómo funciona en tu barrio",
            "parrafos": [
                "En Vitacura predominan las casas con jardín, aunque en ejes como Av. Vitacura, Alonso de Córdova y Kennedy también hay edificios de departamentos. Eso cambia la sesión: en una casa solemos aprovechar pasillos, escaleras interiores y el jardín para practicar la marcha; en un departamento trabajamos con el espacio del living, el ascensor y el acceso al edificio. En sectores con pendiente, como Santa María de Manquehue o Lo Curro, caminar por la calle o moverse en silla de ruedas cuesta más, y ahí evitar el traslado a un centro suele marcar la diferencia.",
                "Como la comuna se recorre sobre todo en auto por Costanera Norte, Kennedy y Av. Vitacura, y en la mayor parte no hay Metro, atenderte en casa te ahorra estacionamientos y esperas. Si vienes saliendo de alta de una clínica de la zona, ten a mano tu epicrisis y las indicaciones de tu médico para la evaluación inicial gratuita: KINEUM es un servicio particular e independiente y armamos el plan a partir de esos documentos.",
                "Ante una urgencia, llama al SAMU (131). El SAPU municipal de Indiana 1195 no funciona las 24 horas; de noche, las urgencias más cercanas son las de Clínica Alemana y Clínica RedSalud Vitacura."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "Si tu papá o tu mamá vive en una de las casas con jardín que predominan en Vitacura, o en un departamento de la comuna, la kinesiología geriátrica a domicilio parte por recorrer con ellos los lugares donde se mueven cada día. Si la casa tiene escalera al segundo piso, escalones de acceso o un desnivel hacia la terraza, entrenamos ahí mismo; en un departamento, el foco puede estar en el ascensor, una puerta pesada o el baño. Trabajamos equilibrio, fuerza de piernas y marcha, también sobre el pasto del jardín cuando la persona está lista, y revisamos ajustes que pueden reducir el riesgo de caídas, como barras de apoyo o mejor luz en los pasillos. En las faldas del Manquehue o en Lo Curro, caminar por la calle suele ser más exigente por la pendiente, así que graduamos las salidas al exterior según cómo avance cada persona. Si hay una caída con golpe en la cabeza, dolor intenso o la persona no logra levantarse, no esperes la sesión: llama al 131.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en una casa con escalera en Santa María de Manquehue y ya no quiere subir al segundo piso. ¿Pueden trabajar eso?",
                        "a": "Sí. Practicamos la subida y bajada en su propia escalera, con la técnica y los apoyos adecuados, y evaluamos si conviene algún ajuste como pasamanos a ambos lados. Si por ahora no es seguro, te lo diremos y buscaremos alternativas dentro de la casa mientras gana fuerza y equilibrio."
                    },
                    {
                        "q": "¿Tienen que salir a caminar a la calle aunque el barrio tenga mucha pendiente?",
                        "a": "No necesariamente. Empezamos dentro de la casa o en el jardín y solo sumamos tramos en la calle cuando la persona está preparada. En sectores con pendiente elegimos recorridos cortos y acompañados, según su condición."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Volver a casa en Vitacura después de una operación de cadera, rodilla, hombro o columna suele implicar subir a un auto, bajar en la entrada de la casa o del edificio y, si tu casa los tiene, enfrentar escalones antes de llegar a la cama. Con la rehabilitación postquirúrgica a domicilio evitas repetir ese trayecto por Kennedy o Av. Vitacura varias veces por semana, justo en las semanas en que moverse cuesta más. Si te dan de alta en una clínica de la comuna, en la evaluación inicial gratuita revisamos el protocolo de tu cirujano, las restricciones de carga y tus controles. KINEUM no tiene convenio con clínicas: trabajamos como servicio particular, alineados con las indicaciones médicas que traes. También enseñamos a tu familia a ayudarte en los traslados dentro de la casa. Si aparece fiebre, enrojecimiento o secreción en la herida, o dolor e hinchazón en la pantorrilla, contacta de inmediato a tu médico o consulta en una urgencia. Si sientes falta de aire repentina o dolor en el pecho, llama de inmediato al 131.",
                "faqsLocales": [
                    {
                        "q": "Me dan de alta el viernes de una clínica de Vitacura. ¿Pueden empezar el fin de semana?",
                        "a": "Atendemos de lunes a domingo, así que escríbenos al +56 9 9967 9593 antes del alta para coordinar la evaluación inicial. Lo ideal es tener a mano la epicrisis y las indicaciones de tu cirujano para partir según su protocolo."
                    },
                    {
                        "q": "Vivo en una casa con escalones en la entrada; ¿qué preparo antes de volver de la clínica?",
                        "a": "Conviene despejar el camino desde el auto hasta la pieza, retirar alfombras sueltas y, si la escalera interior es un problema, evaluar dejar la cama en el primer piso las primeras semanas. Si el escalón de la entrada no tiene dónde afirmarse, un pasamanos o alguien que te acompañe ayuda. En la evaluación inicial revisamos esos accesos contigo y practicamos el paso según las restricciones que te indicó tu cirujano."
                    }
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En kinesiología respiratoria a domicilio, saber a dónde ir si algo empeora es parte del plan. En la primera visita dejamos claras las señales de alarma: respiración muy rápida, hundimiento de las costillas al respirar, labios morados, decaimiento marcado o, en guaguas, dificultad para alimentarse. Ante cualquiera de ellas se consulta en una urgencia o se llama al 131, sin esperar al kinesiólogo. En casa trabajamos técnicas para despejar la vía aérea, ejercicios respiratorios y educación para la familia, siempre con indicación médica. Atenderse en la casa evita que un niño o una persona mayor con un cuadro respiratorio pase por salas de espera, y en una comuna que se recorre casi siempre en auto, también ahorra abrigarlo, subirlo al auto y buscar estacionamiento. Si en tu casa hay varios niños, te orientamos sobre cómo organizar la sesión para que el resto de la familia siga su rutina. Como atendemos de lunes a domingo, las sesiones indicadas por tu médico pueden continuar también el fin de semana; si el cuadro empeora, primero urgencia o 131.",
                "faqsLocales": [
                    {
                        "q": "Mi hijo tiene bronquitis obstructiva y de noche respira peor. ¿Lo llevo al SAPU de Vitacura?",
                        "a": "El SAPU municipal no funciona las 24 horas. Si de noche ves señales de alarma, como respiración muy rápida, hundimiento de costillas o labios morados, consulta en la urgencia pediátrica de Clínica Alemana o de Clínica RedSalud Vitacura, o llama al 131. La kinesiología respiratoria no reemplaza esa atención."
                    },
                    {
                        "q": "¿Pueden venir un domingo si mi hijo empeora y no quiero salir de noche a la clínica?",
                        "a": "Atendemos de lunes a domingo, así que un domingo puede haber sesión si tu médico la indicó. Pero si tu hijo empeora, la kinesiología no reemplaza la urgencia: ante respiración muy rápida, hundimiento de costillas, labios morados o mucho decaimiento, llévalo a una urgencia pediátrica o llama al 131, aunque sea de noche."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Después de un ACV o con enfermedades como el Parkinson, el entorno de la casa pesa mucho en la rehabilitación. En Vitacura, donde predominan las casas con jardín pero también hay departamentos, eso puede significar cosas distintas: escalones en la entrada o desniveles hacia el jardín, si tu casa los tiene, o pasillos donde el espacio para una silla de ruedas o un andador es acotado. La rehabilitación neurológica a domicilio permite entrenar justo esas tareas: pasar de la cama a la silla, entrar a la ducha, subir el escalón de la entrada o recorrer el pasillo con menos apoyo. En sectores altos como Santa María de Manquehue o Lo Curro, las calles en pendiente convierten cada salida a terapia en un operativo para la familia. Trabajamos según lo que indique tu neurólogo o fisiatra e incluimos a quienes cuidan al paciente, para que la práctica siga entre sesiones. Si aparecen síntomas nuevos de forma brusca, como pérdida de fuerza en un lado del cuerpo, dificultad para hablar o la cara desviada, llama de inmediato al 131.",
                "faqsLocales": [
                    {
                        "q": "Mi papá usa silla de ruedas y vivimos en una casa con escalones en la entrada. ¿Pueden ayudarnos con los traslados?",
                        "a": "Sí. Evaluamos los accesos de la casa y entrenamos con ustedes las transferencias y el manejo de la silla en esos escalones, con técnicas que cuiden la espalda de quien ayuda. Si vemos que hace falta una adaptación, como una rampa o barras, te lo indicamos para que lo evalúes."
                    },
                    {
                        "q": "Vivimos en Lo Curro y a mi mamá le cuesta salir con el andador por la pendiente de la calle. ¿Pueden practicar salidas al exterior?",
                        "a": "Sí, cuando su condición lo permita y siempre acompañada. Partimos dentro de la casa y en superficies planas, y solo después probamos tramos cortos en la calle, eligiendo bien el recorrido. Si la pendiente no es segura para ella, seguimos trabajando dentro de la casa y el jardín, y te decimos qué apoyos podrían ayudar."
                    }
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Un esguince, una tendinitis, un lumbago o un dolor de hombro pueden aparecer si sales a correr o a andar en bicicleta, o después de muchas horas frente a un escritorio en casa. En la kinesiología traumatológica a domicilio evaluamos la lesión y también el lugar donde pasas el día, para ajustar ejercicios y postura a tu realidad y no a una camilla de consulta. En una comuna que se recorre casi siempre en auto, si la lesión te impide manejar no dependes de que alguien te lleve por Kennedy o Costanera Norte a cada sesión. Si vives en un sector con pendiente, como las faldas del Manquehue, también vemos cuándo es razonable volver a caminar o trotar cuesta arriba. Usamos ejercicio terapéutico, terapia manual y educación para que retomes tus actividades de forma progresiva; los plazos dependen de cada lesión y de cómo responda tu cuerpo, así que no prometemos fechas. Si el golpe viene con deformidad visible, no puedes apoyar el pie o el dolor es muy intenso, consulta primero en una urgencia para descartar una fractura.",
                "faqsLocales": [
                    {
                        "q": "Me torcí el tobillo corriendo por una calle en pendiente cerca del Manquehue. ¿Llamo a un kinesiólogo o voy a urgencia?",
                        "a": "Si no puedes apoyar el pie, ves deformidad o el dolor es muy intenso, ve primero a una urgencia para descartar fractura. Si puedes apoyar y el dolor es tolerable, igual conviene una evaluación médica; con el diagnóstico, podemos iniciar la kinesiología en tu casa."
                    },
                    {
                        "q": "Trabajo desde mi departamento en Vitacura y me duele el cuello. ¿Sirve que revisen mi escritorio?",
                        "a": "Sí. Parte de la sesión en casa es ver cómo trabajas: altura de la pantalla, silla y pausas. Lo combinamos con ejercicios y terapia manual. Si el dolor se irradia al brazo con hormigueo o pérdida de fuerza, te pediremos consultar también con tu médico."
                    }
                ]
            }
        ]
    },
    "providencia": {
        "centrosSalud": [
            {
                "nombre": "Clínica Santa María",
                "tipo": "Clínica privada",
                "nota": "Urgencia 24 h, adulto y pediátrica"
            },
            {
                "nombre": "Clínica INDISA",
                "tipo": "Clínica privada",
                "nota": "Urgencia 24 h, adulto y pediátrica"
            },
            {
                "nombre": "Hospital del Salvador",
                "tipo": "Hospital público",
                "nota": "Urgencia 24 h de adultos"
            },
            {
                "nombre": "Hospital Dr. Luis Calvo Mackenna",
                "tipo": "Hospital público",
                "nota": "Hospital pediátrico con urgencia 24 h para niños"
            }
        ],
        "hub": {
            "h2": "Cómo es la kinesiología a domicilio en Providencia",
            "parrafos": [
                "En Providencia predominan los edificios de departamentos: conviven torres modernas con ascensor y edificios antiguos de pocos pisos que pueden no tenerlo. Antes de la primera visita te preguntamos por el piso, el acceso y el espacio disponible, para llegar con el equipamiento adecuado y armar ejercicios que calcen con tu living o tu dormitorio. Si vives hacia Pedro de Valdivia Norte o los faldeos del cerro San Cristóbal, consideramos las calles con pendiente cuando la meta es volver a caminar fuera de casa.",
                "Al concentrar hospitales y clínicas de alta complejidad, en la comuna es frecuente rehabilitarse después de un alta. KINEUM no tiene convenio con ningún centro: trabajamos con la epicrisis y las indicaciones que te entregaron, y si algo no calza te pedimos confirmarlo con tu médico tratante.",
                "La atención a domicilio no reemplaza una urgencia. Si aparece dolor en el pecho, falta de aire intensa o pérdida súbita de fuerza o del habla, llama de inmediato al SAMU (131). En la comuna, Clínica Santa María y Clínica INDISA tienen urgencia 24 horas para adultos y niños, el Hospital del Salvador atiende urgencia de adultos y el Calvo Mackenna es un hospital público pediátrico con urgencia 24 horas."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "Para una persona mayor en Providencia, el desafío diario muchas veces está dentro del propio edificio. En los bloques antiguos de pocos pisos que no tienen ascensor, salir a comprar o a una hora médica obliga a enfrentar la escalera de ida y de vuelta. Por eso la kinesiología geriátrica a domicilio entrena justo ese gesto: subir y bajar peldaños apoyándose en la baranda, hacer pausas seguras en el rellano y levantarse de la silla sin impulso. Primero trabajamos fuerza y estabilidad dentro del departamento y, cuando la condición lo permite, practicamos en la escalera real del edificio y en la vereda cercana, que en gran parte de la comuna es plana. El objetivo es que vuelva a salir con más confianza, a su ritmo. Si la escalera ya no es segura, conversamos con la familia alternativas como ayudas técnicas o salir acompañada. Ante una caída con golpe en la cabeza, sobre todo si toma anticoagulantes, está confusa, somnolienta o vomita, llévala a urgencia o llama al SAMU (131); si queda un dolor que no cede, consulta al médico.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en un tercer piso sin ascensor en Providencia, ¿pueden trabajar las escaleras con ella?",
                        "a": "Sí. La escalera de su edificio suele ser parte del entrenamiento: evaluamos cómo sube y baja, trabajamos fuerza y equilibrio en casa y luego practicamos en los peldaños reales con la seguridad que su condición permita. Si al subir aparece dolor en el pecho, falta de aire intensa o se desvanece, detén el ejercicio y llama al SAMU (131). Si solo tiene mareos ocasionales, conviene que la vea su médico antes de seguir con las escaleras."
                    },
                    {
                        "q": "¿Las sesiones pueden incluir salir a caminar por la vereda cerca del edificio?",
                        "a": "Según el caso, parte del trabajo puede hacerse en la escalera del edificio o en la vereda cercana, cuando la persona ya tiene la fuerza y el equilibrio para hacerlo con seguridad. Lo definimos después de la evaluación inicial, que es gratuita."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Providencia concentra clínicas y hospitales de alta complejidad, así que la cirugía y el alta pueden ocurrir cerca de tu casa. Aun así, los primeros días de vuelta el traslado a un centro de rehabilitación puede ser lo más difícil: bajar con muletas o con un brazo inmovilizado, esperar un taxi en una avenida con tráfico y volver a subir. Con la rehabilitación postquirúrgica a domicilio esos traslados se evitan en la etapa más delicada. Partimos desde la epicrisis y el protocolo de tu cirujano; KINEUM no tiene convenio con esos centros, así que si una indicación no está clara te pedimos confirmarla con tu equipo tratante. En el departamento practicamos lo que el alta exige de inmediato: entrar y salir de la cama, usar el baño con seguridad y moverte en espacios estrechos. Si notas fiebre, enrojecimiento o secreción en la herida, o dolor e hinchazón en una pantorrilla, consulta a tu médico o acude a urgencia. Si aparece falta de aire repentina o dolor en el pecho, llama de inmediato al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "Me operaron en una clínica de Providencia, ¿qué necesito para empezar la kinesiología en mi casa?",
                        "a": "Ten a mano la epicrisis y la indicación de kinesiología que te entregaron al alta, porque ahí vienen las restricciones de la cirugía. Para el reembolso, consulta en tu isapre o seguro complementario qué documentos piden además de la boleta de honorarios; habitualmente incluyen la orden médica."
                    },
                    {
                        "q": "Me dieron el alta hace pocos días, ¿cuándo puede ser la primera sesión en mi departamento?",
                        "a": "Depende de la cirugía y de lo que indique tu cirujano: algunos protocolos piden moverse desde los primeros días y otros esperan un control. La evaluación inicial es gratuita y la agendamos de lunes a domingo según esa indicación."
                    }
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En Providencia, la kinesiología respiratoria a domicilio puede indicarse en algunos cuadros bronquiales de niños, según lo que evalúe su pediatra, y en adultos que vuelven a casa tras una hospitalización por neumonía u otra causa respiratoria. Lo propio de esta comuna es la cercanía de la urgencia pediátrica, y conviene tenerla clara desde el inicio, porque la kinesiología no reemplaza esa evaluación. Si tu hijo tiene labios morados o se ve muy decaído, llama al SAMU (131). Si respira muy rápido, se le hunden las costillas o le cuesta alimentarse, llévalo a urgencia: el Hospital Dr. Luis Calvo Mackenna, hospital público pediátrico de la comuna, atiende las 24 horas, y en la lista de centros de esta página verás otras urgencias con atención infantil. En adultos, un parámetro práctico es el esfuerzo de llegar a tu departamento: si ese tramo te deja sin aire, lo registramos y ajustamos la progresión. Ante falta de aire intensa o dolor en el pecho, llama al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "Mi hijo tiene una crisis bronquial en la noche, ¿llamo a KINEUM o voy a urgencia?",
                        "a": "Si tiene labios morados o se ve muy decaído, llama al SAMU (131). Si respira rápido o se le hunden las costillas, llévalo a urgencia; en Providencia el Hospital Calvo Mackenna atiende niños las 24 horas. La kinesiología respiratoria a domicilio se agenda con indicación médica y no es atención de urgencia."
                    },
                    {
                        "q": "Salí de alta por una neumonía y me canso al llegar a mi departamento, ¿pueden ayudarme?",
                        "a": "Si tu médico lo indica, sí: trabajamos ejercicios respiratorios y de resistencia progresiva en tu casa y medimos cómo respondes al esfuerzo. Si la falta de aire no cede con el reposo o aparece dolor en el pecho, consulta antes de seguir."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Tras un accidente cerebrovascular u otra condición neurológica, volver a un departamento de Providencia define buena parte de las metas de rehabilitación. En una torre, el desafío puede ser usar el ascensor sin ayuda y recorrer el pasillo del piso; en un edificio antiguo, un ascensor estrecho para el andador o la silla de ruedas. La rehabilitación neurológica a domicilio trabaja ese recorrido real, desde la cama hasta la puerta de calle. Como el relieve de la comuna es mayormente plano, al avanzar una meta posible es caminar por la vereda de la cuadra, con o sin ayuda técnica, siempre que la condición lo permita. Al concentrar la comuna centros de alta complejidad, es frecuente iniciar la rehabilitación tras el alta; KINEUM no tiene convenio con esos centros y trabaja con la epicrisis y las indicaciones del neurólogo o fisiatra. Los avances suelen ser graduales y distintos en cada persona. Si aparecen pérdida súbita de fuerza, dificultad para hablar o la cara desviada, llama de inmediato al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "Mi papá tuvo un ACV y su edificio en Providencia tiene un ascensor muy chico para el andador, ¿conviene hacer la rehabilitación en casa?",
                        "a": "En muchos casos sí, justamente porque salir puede ser complicado al principio. Trabajamos traslados y marcha en su departamento y evaluamos cuándo practicar la salida del edificio. La decisión depende de su condición y de lo que indique su médico."
                    },
                    {
                        "q": "¿Cómo se coordina la rehabilitación con el equipo que lo trató en el hospital?",
                        "a": "Nos basamos en la epicrisis y las indicaciones que les entregaron al alta. KINEUM no tiene convenio con hospitales ni clínicas; lo que observemos en las sesiones puede servirles para comentarlo en sus controles médicos."
                    }
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Providencia tiene Metro (Líneas 1 y 6) y muchos recorridos de buses por Providencia, Nueva Providencia y Andrés Bello. Si tu rutina incluye caminar hasta la estación, bajar sus escaleras o subir a una micro, un esguince de tobillo, una fractura o un dolor de rodilla te quitan justo eso. La kinesiología traumatológica a domicilio permite partir el tratamiento en tu departamento mientras moverte todavía duele, trabajando dolor, movilidad y fuerza. A medida que avanzas, ese trayecto se vuelve la meta: tolerar el tramo a pie hasta la estación, bajar escaleras con control y, si vives hacia Pedro de Valdivia Norte o los faldeos del cerro San Cristóbal, caminar en calles con pendiente, que exigen más a tobillos y rodillas. Los tiempos de recuperación varían según la lesión y cada persona, y la progresión se ajusta sesión a sesión. Ante un golpe con deformidad, imposibilidad de apoyar el pie o dolor intenso, primero corresponde una evaluación en urgencia o llamar al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "Me doblé el tobillo bajando la escalera del Metro y no puedo apoyar bien, ¿empiezo kinesiología a domicilio de inmediato?",
                        "a": "Si no puedes apoyar el pie, hay deformidad o mucha hinchazón, primero debe evaluarte un médico en urgencia para descartar una fractura. Con ese diagnóstico e indicación, iniciamos la kinesiología en tu casa y trabajamos para que vuelvas a moverte con seguridad, en los tiempos que permita tu lesión."
                    },
                    {
                        "q": "Vivo hacia Pedro de Valdivia Norte y la subida a mi casa me duele en la rodilla, ¿pueden trabajar eso?",
                        "a": "Sí. Tras evaluar la rodilla, trabajamos fuerza y control en casa y luego practicamos en la misma subida, según lo tolere tu lesión. Si la rodilla se hincha mucho, se traba o cede, conviene que primero la evalúe un médico."
                    }
                ]
            }
        ]
    },
    "nunoa": {
        "centrosSalud": [
            {
                "nombre": "SAR Ñuñoa (Servicio de Alta Resolución, Av. Grecia 3980)",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia 24 h adulto y pediátrica, en Ñuñoa"
            },
            {
                "nombre": "SAPU Rosita Renard",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria adulto y pediátrica, no 24 h; revisa su horario antes de ir"
            },
            {
                "nombre": "Hospital de Carabineros \"General Humberto Arriagada Valdivieso\"",
                "tipo": "otro",
                "nota": "Urgencia 24 h adulto y pediátrica, en Ñuñoa"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Ñuñoa: cómo funciona en tu barrio",
            "parrafos": [
                "Ñuñoa es una comuna mayoritariamente plana, y eso juega a favor de la rehabilitación: cuando tu kinesiólogo lo indica, la sesión puede salir de la casa y seguir en la vereda o en la plaza más cercana, practicando marcha real sin cuestas. Adentro, la vivienda cambia mucho de un barrio a otro. En las casas de uno o dos pisos trabajamos el traspaso, la escalera interior y el acceso al patio; en los edificios nuevos de Irarrázaval, Grecia o los alrededores de Plaza Ñuñoa, el ascensor facilita la llegada, pero el living suele ser acotado y adaptamos los ejercicios a esos metros. En los bloques antiguos sin ascensor, la escalera común pasa a ser parte del plan.",
                "Si durante el tratamiento aparece una señal de alarma, como falta de aire intensa, dolor en el pecho o pérdida súbita de fuerza, llama al SAMU (131) o acude a urgencia. En la lista de centros de salud de esta página tienes los de la comuna, como el SAR Ñuñoa.",
                "Si vienes saliendo del hospital o la clínica, trae la epicrisis y las indicaciones médicas a la evaluación inicial gratuita: con eso coordinamos el plan en casa. KINEUM atiende de forma particular y no tiene convenio con ningún centro; la boleta de honorarios la puedes presentar para reembolso en tu Isapre o seguro complementario, según tu plan (normalmente te pedirán la orden médica)."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "Cuidar a un adulto mayor en una casa antigua de barrio en Ñuñoa, con peldaños a la entrada, patio de baldosas y un baño que nunca se pensó para un andador, obliga a mirar la casa con otros ojos. En un departamento de bloque sin ascensor, en cambio, la escalera común decide si la persona sale o se queda adentro. La kinesiología geriátrica a domicilio parte justamente de ese escenario: evaluamos cómo se levanta de la cama, cómo usa el baño y cómo enfrenta los escalones reales de su casa, y desde ahí trabajamos fuerza, equilibrio y prevención de caídas. Como la comuna es plana, cuando el caso lo permite la sesión puede terminar con una caminata acompañada por la cuadra o hasta la plaza del barrio, recuperando confianza fuera de la casa. Los avances suelen depender de la constancia y del estado de salud de cada persona, por eso ajustamos el plan con la familia. Si notas un deterioro brusco, confusión repentina o una caída con golpe en la cabeza, consulta al médico o llama al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en un tercer piso sin ascensor en Ñuñoa, ¿pueden trabajar para que vuelva a bajar sola?",
                        "a": "Sí, la escalera se vuelve parte del entrenamiento. Primero evaluamos si es seguro intentarlo y, según el caso, avanzamos por etapas: fuerza de piernas, apoyo en la baranda y tramos cortos acompañada, hasta ver qué nivel de autonomía es realista para ella."
                    },
                    {
                        "q": "¿Pueden salir a caminar con mi papá por el barrio durante la sesión?",
                        "a": "Si su condición lo permite y el kinesiólogo lo considera seguro, sí. Las veredas planas de buena parte de Ñuñoa ayudan a practicar la marcha en un entorno real, algo que dentro del departamento cuesta reproducir."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Después de una cirugía de cadera, rodilla u hombro, las primeras semanas cuesta moverse, y en Ñuñoa ir a cada sesión suele significar coordinar un traslado por Irarrázaval o Grecia en horario de tráfico, con muletas y acompañante. Con la rehabilitación postquirúrgica a domicilio ese viaje se evita: el kinesiólogo llega a tu casa y trabaja movilidad, control del dolor con ejercicio y recuperación de la marcha donde realmente la vas a usar. Si tu edificio es nuevo y tiene ascensor, aprovechamos el pasillo para practicar; si vives en casa, entrenamos el paso por la entrada y el patio. Todo se hace siguiendo las indicaciones de tu traumatólogo o cirujano, así que trae el protocolo o la epicrisis a la evaluación inicial gratuita. Los plazos de recuperación varían según la cirugía y cada persona. Ante fiebre, enrojecimiento o secreción en la herida, o dolor en la pantorrilla con hinchazón, avisa a tu médico de inmediato. Si aparece falta de aire súbita o dolor en el pecho, llama al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "Me opero en una clínica fuera de Ñuñoa, ¿cuándo pueden empezar la rehabilitación en mi casa?",
                        "a": "Puedes pedir la evaluación inicial para cuando te den el alta, sujeta a disponibilidad de agenda y a lo que indique tu cirujano sobre cuándo empezar. Lo importante es contar con las indicaciones del equipo que te operó; KINEUM no tiene convenio con clínicas, así que tú nos compartes esa información directamente."
                    },
                    {
                        "q": "Vivo en un departamento chico cerca de Plaza Ñuñoa, ¿alcanza el espacio para la rehabilitación?",
                        "a": "En la mayoría de los casos sí. Adaptamos los ejercicios al espacio disponible y usamos lo que hay en casa, como una silla firme o el pasillo del edificio cuando corresponde."
                    }
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "Cuando un niño o un adulto mayor tiene una infección respiratoria, sacarlo de la casa en un día frío para una sesión de kinesiología puede ser más un desgaste que una ayuda. En Ñuñoa la kinesiología respiratoria a domicilio permite hacer las técnicas de despeje bronquial y los ejercicios respiratorios en tu propio hogar, sin salas de espera, siempre con indicación médica. Durante la visita te enseñamos a reconocer cómo evoluciona la respiración y qué cambios no pueden esperar. Si observas hundimiento de costillas al respirar, labios morados, mucho decaimiento o dificultad para hablar o alimentarse, no esperes la siguiente sesión: en la comuna está el SAR Ñuñoa, en Av. Grecia 3980, con urgencia 24 horas para adultos y niños, y ante una emergencia grave puedes llamar al SAMU (131). El SAPU Rosita Renard también recibe consultas pediátricas, pero no funciona las 24 horas, así que revisa su horario. La kinesiología complementa el tratamiento médico y no lo reemplaza.",
                "faqsLocales": [
                    {
                        "q": "Si mi hijo empeora de noche en Ñuñoa, ¿a dónde lo llevo?",
                        "a": "El SAR Ñuñoa atiende urgencias pediátricas las 24 horas. Si ves señales graves, como mucha dificultad para respirar o coloración morada, llama al SAMU (131)."
                    },
                    {
                        "q": "¿Necesito orden médica para kinesiología respiratoria a domicilio?",
                        "a": "Sí, trabajamos con la indicación de tu médico, porque las técnicas dependen del diagnóstico y es el médico quien define el tratamiento. Además, para reembolsar en tu Isapre o seguro complementario normalmente te pedirán esa orden junto con la boleta de honorarios."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Tras un ACV, o con enfermedades como el Parkinson, cada salida de la casa exige planificación: acompañante, traslado y, en muchos edificios antiguos de Ñuñoa, una escalera sin ascensor que se vuelve un obstáculo mayor. La rehabilitación neurológica a domicilio traslada el trabajo al lugar donde la persona vive su día a día. Ahí practicamos transferencias desde la cama o la silla, equilibrio, marcha y tareas concretas del hogar, adaptando el entorno para hacerlo más seguro. En una casa de barrio revisamos umbrales, alfombras y el acceso al baño; en un departamento nuevo, los giros en espacios estrechos y el uso del ascensor. Cuando la persona avanza y el kinesiólogo lo estima prudente, las calles planas de la comuna permiten ensayar la marcha al aire libre. La recuperación neurológica suele ser gradual y distinta en cada caso, por eso fijamos metas con la familia y el equipo médico tratante. Si aparece pérdida súbita de fuerza, boca desviada o dificultad para hablar, llama de inmediato al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "Mi papá tuvo un ACV y vivimos en una casa de dos pisos en Ñuñoa, ¿conviene dejarlo en el primer piso?",
                        "a": "Depende de su evaluación. Revisamos si la escalera es segura para él y, según lo que veamos, recomendamos organizar la casa de forma temporal o incorporar la escalera como objetivo de entrenamiento con apoyo."
                    },
                    {
                        "q": "¿Pueden orientarnos a la familia para ayudarlo entre sesiones?",
                        "a": "Sí. Parte del trabajo es enseñarles cómo asistir los traslados sin lastimarse y qué ejercicios simples pueden repetir en casa, siempre según lo que el kinesiólogo indique para su caso."
                    }
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Un esguince jugando fútbol, una tendinitis por el computador o un dolor lumbar que no se va son motivos habituales de consulta, y con la lesión a cuestas, un viaje en Metro por la Línea 3 o la 6, o en micro por Irarrázaval, Grecia u Ossa, puede ser lo último que quieres. La kinesiología traumatológica a domicilio te permite tratar la lesión en tu casa, coordinando el horario contigo, de lunes a domingo. Evaluamos la zona afectada y armamos un plan de ejercicio terapéutico progresivo, con educación para que sepas qué movimientos conviene evitar por ahora y cuáles ayudan. Si trabajas desde tu departamento, revisamos también la postura en tu puesto de trabajo. En etapas más avanzadas, y si el caso lo permite, te damos indicaciones claras para retomar de forma gradual tu actividad física o deportiva. Cada lesión evoluciona distinto, así que no prometemos plazos fijos. Si hubo un golpe fuerte con deformidad, no puedes apoyar el pie o el dolor es intenso, consulta primero en urgencia para descartar una fractura.",
                "faqsLocales": [
                    {
                        "q": "Me torcí el tobillo y no sé si está fracturado, ¿llamo primero a KINEUM?",
                        "a": "Si no puedes apoyar, hay deformidad o hinchazón importante, consulta primero en urgencia, por ejemplo en el SAR Ñuñoa. Una vez descartada la fractura, podemos empezar la rehabilitación en tu casa."
                    },
                    {
                        "q": "Trabajo desde casa en Ñuñoa y tengo dolor de cuello, ¿cómo coordinamos el horario de las sesiones?",
                        "a": "Atendemos de lunes a domingo y coordinamos contigo el horario según la disponibilidad de la agenda. Además, aprovechamos la visita para revisar cómo está armado tu puesto de trabajo."
                    }
                ]
            }
        ]
    },
    "la-reina": {
        "centrosSalud": [
            {
                "nombre": "Hospital Militar de Santiago",
                "tipo": "Hospital",
                "nota": "Urgencia 24 h adulto y pediátrica; según su sitio, atiende también a la comunidad general"
            },
            {
                "nombre": "SAR La Reina",
                "tipo": "Servicio de urgencia primaria (SAR)",
                "nota": "Urgencia primaria 24 h"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en La Reina: casas con escalera y calles en pendiente",
            "parrafos": [
                "La Reina tiene una geografía que influye en cómo te rehabilitas: es plana hacia Américo Vespucio y va ganando pendiente a medida que avanzas al oriente, hacia el sector precordillerano y el Parque Mahuida. La mayoría de los hogares son casas de uno o dos pisos con patio, así que en la evaluación inicial gratuita revisamos contigo la escalera interior, los desniveles del antejardín y el espacio disponible para trabajar.",
                "Como el Metro solo toca el límite poniente de la comuna y el interior depende más del auto y los buses, ir a un centro de rehabilitación varias veces al mes suele significar traslados largos. Atenderte en casa evita ese desgaste, sobre todo cuando recién saliste del hospital y todavía te cuesta subir a un vehículo.",
                "Si durante una sesión aparece una señal de alarma, te indicamos consultar de inmediato: dentro de la comuna están el Hospital Militar de Santiago, con urgencia 24 horas adulta y pediátrica, y el SAR La Reina. Ante una emergencia vital, llama al SAMU (131). KINEUM no tiene convenio con esos centros: después de un alta trabajamos con la epicrisis y las indicaciones que te entregó tu médico."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En las casas de dos pisos, frecuentes en La Reina, la escalera interior suele ser el lugar donde más se nota la pérdida de fuerza o de equilibrio de una persona mayor. Por eso la entrenamos tal como es: con la altura de sus peldaños, su pasamanos y su iluminación.\n\nEl patio y el antejardín también entran en la evaluación del riesgo de caídas: desniveles, pastelones sueltos o pasto húmedo. Si la casa está hacia el oriente, donde las calles ganan pendiente, practicamos la marcha en subida y en bajada con la ayuda técnica que corresponda antes de que tu familiar salga a caminar sin compañía. La meta es que se mueva con más seguridad por su barrio, no solo dentro del dormitorio.\n\nDespués de una caída, no esperes la sesión si se golpeó la cabeza (especialmente si toma anticoagulantes), está confundido, muy somnoliento o vomita: consulta de inmediato en urgencia, por ejemplo en el Hospital Militar de Santiago, o llama al 131.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en una casa de dos pisos en La Reina, ¿conviene bajar su dormitorio al primer piso?",
                        "a": "Depende de cómo se maneje con la escalera. En la evaluación inicial gratuita vemos cómo la sube y la baja; a veces basta con entrenarla y mejorar el apoyo del pasamanos, y otras veces conviene dejar el dormitorio abajo mientras avanza la rehabilitación. Lo decidimos junto con la familia."
                    },
                    {
                        "q": "¿Las sesiones pueden incluir caminar por las calles con pendiente cerca de la casa?",
                        "a": "Sí, cuando es seguro. Primero trabajamos fuerza y equilibrio dentro de la casa y después salimos a practicar en la vereda y en tramos con subida, siempre acompañado por el kinesiólogo y a un ritmo acorde a su condición."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Las primeras semanas en casa después de una cirugía son las que más cuestan, y en La Reina se suma un factor: el Metro solo pasa por el borde poniente de la comuna, así que el interior se recorre sobre todo en auto o en bus. Subir y bajar de un vehículo con una rodilla o una cadera recién operada, sesión tras sesión, suele ser agotador y a veces doloroso.\n\nCon kinesiología a domicilio, las sesiones de alrededor de 60 minutos se hacen en tu casa siguiendo el protocolo que indicó tu cirujano. Si vives en una casa de dos pisos, parte del plan es enseñarte a usar la escalera con la técnica adecuada para tu etapa. KINEUM no tiene convenio con clínicas ni hospitales: trabajamos con la epicrisis y las indicaciones del alta, sin importar dónde te operaron.\n\nSi tienes fiebre, la herida enrojecida o con secreción, o un dolor que aumenta de golpe, avisa a tu equipo médico. Si notas la pantorrilla hinchada, caliente o dolorosa, o te falta el aire de forma repentina o tienes dolor en el pecho, consulta en urgencia de inmediato o llama al 131.",
                "faqsLocales": [
                    {
                        "q": "Me operaron fuera de La Reina, ¿pueden seguir la rehabilitación en mi casa?",
                        "a": "Sí. Nos basamos en las indicaciones de tu cirujano y en la epicrisis, sin importar el centro donde te operaron. No tenemos convenio con ese centro: atendemos de forma particular y te entregamos boleta de honorarios electrónica para que pidas el reembolso en tu Isapre o seguro complementario, según las condiciones de tu plan."
                    },
                    {
                        "q": "Tengo escalera interior y me operaron la rodilla, ¿puedo seguir durmiendo en el segundo piso?",
                        "a": "Depende de la cirugía, del apoyo que autorizó tu médico y de cómo te manejes. En la primera visita probamos la escalera contigo y te enseñamos la secuencia más segura para subir y bajar. Si todavía no es seguro, te recomendamos acomodarte en el primer piso por un tiempo."
                    }
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "La kinesiología respiratoria en casa sirve tanto para niños con cuadros bronquiales como para adultos que se recuperan de una neumonía o viven con una enfermedad pulmonar crónica. Para las familias de La Reina conviene saber de antemano dónde consultar si algo cambia: la urgencia pediátrica 24 horas está dentro de la misma comuna, en el Hospital Militar de Santiago, que según su sitio atiende también a la comunidad general. Para adultos, el SAR La Reina es otra puerta de urgencia primaria.\n\nEl kinesiólogo no reemplaza la evaluación médica. Si en la sesión vemos respiración muy rápida, hundimiento entre las costillas, labios morados, decaimiento marcado o fiebre que no cede, te indicamos consultar de inmediato; si la situación es grave, llama al 131.\n\nEn casa, además, revisamos el ambiente donde duerme el paciente: ventilación, humedad y el tipo de calefacción que usan en invierno. También te enseñamos las técnicas que puedes aplicar entre sesiones, siempre según lo indicado por el médico o pediatra.",
                "faqsLocales": [
                    {
                        "q": "Si mi hijo empeora de noche, ¿dónde lo llevo dentro de La Reina?",
                        "a": "A la urgencia pediátrica 24 horas del Hospital Militar de Santiago. Si ves dificultad respiratoria importante, labios morados o decaimiento marcado, no esperes a la próxima sesión; ante una emergencia vital, llama al SAMU (131)."
                    },
                    {
                        "q": "¿El SAR La Reina atiende a niños con dificultad respiratoria?",
                        "a": "La urgencia pediátrica 24 horas que podemos confirmar en la comuna es la del Hospital Militar de Santiago. No tenemos información verificada de que el SAR La Reina atienda niños, así que no te lo aseguramos. Si tu hijo respira con dificultad y tienes dudas sobre dónde ir, llama al 131."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "La rehabilitación neurológica después de un ACV, o en personas con Parkinson u otras condiciones neurológicas, se juega en gran parte en el lugar donde se vive. En La Reina ese lugar suele ser una casa con patio, y eso permite trabajar objetivos muy concretos: cruzar el living sin afirmarse de los muebles, pasar el desnivel de la puerta que da al patio o llegar al baño de noche con seguridad.\n\nEntrenar en tu propia casa ayuda a que lo aprendido se traslade al día a día, que es justo lo que más cuesta cuando se practica en un gimnasio ajeno. Cuando la condición lo permite, también ensayamos situaciones de la rutina fuera de la casa: entrar y salir del auto familiar o bajar de la vereda para cruzar la calle. Y orientamos a la familia sobre cómo asistir sin cargar peso de más.\n\nSi aparecen de golpe síntomas nuevos, como debilidad de un lado, la cara desviada o dificultad para hablar, llama de inmediato al 131: es una emergencia.",
                "faqsLocales": [
                    {
                        "q": "Mi papá tuvo un ACV y vive en una casa de un piso con patio, ¿qué se puede trabajar ahí?",
                        "a": "Bastante: marcha dentro de la casa, paso de la cama a la silla, entrada y salida al patio, equilibrio y actividades de su rutina. Los objetivos se definen en la evaluación inicial gratuita, según lo indicado por su neurólogo o fisiatra y cómo está hoy; los avances varían mucho de una persona a otra."
                    },
                    {
                        "q": "¿Pueden practicar con mi papá cómo subirse y bajarse del auto?",
                        "a": "Sí. Es una de las transferencias que más suele costar después de un ACV. La practicamos con el auto de la familia, estacionado frente a la casa, paso a paso y con la técnica que le resulte más segura, y enseñamos a quien lo acompaña cómo ayudarlo."
                    }
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Esguinces, fracturas en recuperación, tendinopatías y dolores de rodilla u hombro son motivos habituales de kinesiología traumatológica. Si te lesionaste caminando o haciendo deporte en los senderos cercanos al Parque Mahuida, por ejemplo con una torcedura de tobillo al bajar, el plan apunta a que vuelvas a ese terreno con seguridad.\n\nEl trabajo en casa parte con control del dolor y movilidad, y avanza hacia fuerza, equilibrio y ejercicios específicos para tu actividad, usando lo que tienes a mano: el pasto del patio como superficie irregular, un escalón o bandas elásticas. Cuando corresponde, aprovechamos las calles en pendiente del sector oriente de la comuna para entrenar subidas y bajadas antes de volver al sendero. Los plazos dependen de la lesión y de cada persona, por eso no prometemos fechas.\n\nSi después de un golpe ves el hueso o la articulación deformados, la zona se hincha mucho en poco rato o no puedes mover ni apoyar la extremidad, puede haber una fractura: evita apoyarla y consulta en urgencia, por ejemplo en el SAR La Reina o en el Hospital Militar de Santiago, antes de empezar kinesiología.",
                "faqsLocales": [
                    {
                        "q": "Me torcí el tobillo bajando un sendero cerca del Parque Mahuida, ¿cuándo empiezo kinesiología?",
                        "a": "Primero conviene que un médico descarte una fractura, sobre todo si no puedes apoyar el pie o hay mucha hinchazón. Con eso resuelto, la kinesiología puede partir pronto y se adapta a la etapa de la lesión; lo coordinamos en la evaluación inicial gratuita."
                    },
                    {
                        "q": "¿Pueden trabajar la vuelta al trote o a la caminata en subida si vivo en el sector oriente de La Reina?",
                        "a": "Sí, cuando la lesión y tu evolución lo permiten. Primero recuperamos fuerza y control en casa, y luego progresamos a tramos en pendiente cerca de tu casa, partiendo por caminata y avanzando al trote de forma gradual. Si tu traumatólogo indicó restricciones, las respetamos."
                    }
                ]
            }
        ]
    },
    "lo-barnechea": {
        "centrosSalud": [
            {
                "nombre": "Clínica Alemana de La Dehesa",
                "tipo": "Clínica privada",
                "nota": "Urgencia 24 h, adulto y pediátrica"
            },
            {
                "nombre": "SAPU Lo Barnechea (El Rodeo 13.533)",
                "tipo": "Servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia 24 h, adulto y pediátrica"
            },
            {
                "nombre": "Posta de Farellones",
                "tipo": "Posta",
                "nota": "Sector cordillerano; atiende solo en horario hábil, sin urgencia 24 h"
            },
            {
                "nombre": "Centro Médico Clínica Santa María La Dehesa",
                "tipo": "Centro médico ambulatorio",
                "nota": "Consultas y controles; no tiene urgencia hospitalaria"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Lo Barnechea: cerros, casas en desnivel y urgencias a mano",
            "parrafos": [
                "La zona urbana de Lo Barnechea (La Dehesa, El Arrayán y el pueblo) se extiende por el piedemonte, entre cerros isla, quebradas y calles en pendiente. Sin Metro y con traslados que dependen de Av. La Dehesa o de Costanera Norte, ir a sesiones varias veces por semana puede comerse la mañana en hora punta. Atenderte en casa elimina ese viaje y permite trabajar justo donde te mueves a diario.",
                "Aquí predominan las casas y los condominios de casas, muchos con escaleras interiores o accesos en desnivel. En la evaluación inicial gratuita revisamos esos puntos (el tramo de escalera hacia el dormitorio, la entrada desde el estacionamiento, el paso al baño) y adaptamos los ejercicios a ellos. También llegamos al sector cordillerano: como queda lejos del núcleo urbano, ahí coordinamos una hora fija con anticipación.",
                "Ante un síntoma de alarma no esperes la sesión: llama al SAMU (131) o acude a urgencia. En la comuna hay urgencia 24 h en Clínica Alemana de La Dehesa y en el SAPU de El Rodeo; la posta de Farellones atiende solo en horario hábil. Si te dan el alta en un centro cercano, compártenos tu epicrisis y las indicaciones médicas y partimos desde ahí. No tenemos convenio con ninguna clínica: atendemos de forma particular, con boleta de honorarios reembolsable en tu Isapre o seguro complementario según tu plan."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En Lo Barnechea la vida de muchos adultos mayores transcurre entre calles en pendiente, accesos en desnivel y jardines con escalones o terreno irregular, y eso pesa cuando el equilibrio o la fuerza de piernas empiezan a fallar. La kinesiología geriátrica a domicilio trabaja sobre esos tramos concretos: el camino desde el portón hasta la puerta, la bajada al jardín, levantarse de la silla del comedor sin apoyarse en muebles inestables. En la evaluación inicial gratuita miramos cómo se desplaza la persona en su propio entorno, dónde suele tropezar y qué apoyos o barandas conviene revisar con la familia.\n\nEn una comuna donde casi todo se hace en auto, si la persona sale poco de casa puede perder condición sin notarlo. Las sesiones de unos 60 minutos suelen combinar fuerza, equilibrio y marcha a su ritmo, y se avanza hacia el exterior solo cuando es seguro. Si hay una caída con golpe en la cabeza, dolor intenso o confusión, no se espera la sesión: llama al 131 o acude a urgencia; en el recuadro de centros de esta página ves los de la comuna.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en una casa de dos pisos en La Dehesa y ya le cuesta la escalera, ¿conviene bajarle el dormitorio al primer piso?",
                        "a": "Depende de lo que veamos en la evaluación. A veces lo más seguro es un cambio temporal de dormitorio y en otros casos basta con entrenar la escalera y revisar pasamanos e iluminación. En la evaluación inicial gratuita observamos cómo sube y baja y te damos una recomendación concreta para su casa; si ha tenido caídas recientes, conviene comentarlo también con su médico."
                    },
                    {
                        "q": "Vive en un condominio con el acceso en pendiente, ¿igual pueden trabajar la marcha afuera?",
                        "a": "Sí, cuando es seguro según su condición. Solemos partir dentro de la casa y avanzar de forma gradual hacia los tramos que usa a diario, como el camino desde el estacionamiento o hacia el jardín. Si la pendiente resulta riesgosa, se prioriza la marcha en terreno plano y el uso de apoyos."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Después de una operación, volver a casa en Lo Barnechea casi siempre significa un trayecto en auto por Av. La Dehesa o Costanera Norte, y repetirlo dos o tres veces por semana para ir a rehabilitación cansa más de lo que parece cuando todavía usas bastón, muletas o cabestrillo. Subir y bajar del auto, además, suele ser de lo que más cuesta en las primeras semanas, que habitualmente son las más delicadas. La rehabilitación postquirúrgica a domicilio evita esos viajes: no importa dónde te hayas operado, con tu epicrisis y las indicaciones del cirujano partimos desde ahí y respetamos las restricciones de carga y movimiento que haya definido tu equipo médico. Avanzamos en fuerza y rango de movimiento según tu evolución.\n\nSi notas fiebre, la herida roja o con secreción, dolor que aumenta de golpe o una pantorrilla hinchada y dolorosa, contacta a tu médico o acude a urgencia sin esperar la sesión. Si aparece dolor en el pecho o falta de aire repentina, llama de inmediato al 131.",
                "faqsLocales": [
                    {
                        "q": "Me voy a operar en una clínica del sector, ¿ustedes coordinan directamente con la clínica?",
                        "a": "No tenemos convenio con clínicas. Trabajamos con la epicrisis y las indicaciones escritas de tu cirujano, que tú nos compartes. Si durante el tratamiento aparece una duda clínica, te pedimos consultarla con tu equipo tratante antes de avanzar."
                    },
                    {
                        "q": "Me operan fuera de la comuna y vuelvo a mi casa en El Arrayán, que tiene escalera, ¿desde cuándo pueden venir y cómo manejamos la escalera?",
                        "a": "Partimos cuando tu cirujano lo indique; conviene dejarlo coordinado antes de la operación para no perder días. En la primera visita practicamos contigo la escalera con la técnica y el apoyo que correspondan a tu cirugía, por ejemplo con muletas o baranda, y si todavía no es seguro usarla, vemos con tu familia cómo organizarte en un solo nivel por un tiempo."
                    }
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En kinesiología respiratoria a domicilio conviene saber desde el primer día a dónde ir si un cuadro se complica, y en Lo Barnechea eso depende del sector: los traslados son solo por vía vial y pueden alargarse en hora punta. En la zona urbana hay urgencia 24 h adulta y pediátrica en Clínica Alemana de La Dehesa y en el SAPU de El Rodeo; en el sector cordillerano, la posta de Farellones funciona solo en horario hábil, así que fuera de ese horario, ante una urgencia, llama al 131.\n\nLas sesiones en casa suelen apoyar a lactantes y niños con cuadros bronquiales, a adultos que se recuperan de una neumonía y a personas con enfermedad respiratoria crónica, siempre como complemento de la indicación médica. Trabajamos técnicas de despeje de secreciones y ejercicios respiratorios, y te enseñamos a reconocer cuándo el cuadro se sale de lo esperable. Si ves que se le hunden las costillas al respirar, labios morados, respiración muy rápida o decaimiento marcado, sobre todo en un niño, no esperes la sesión: llama al 131 o acude a urgencia.",
                "faqsLocales": [
                    {
                        "q": "Mi hijo tiene tos con flema de noche, ¿llamo a la kine o me voy a urgencia?",
                        "a": "Si respira con esfuerzo, se le hunden las costillas, tiene los labios morados o está muy decaído, ve a urgencia: en la comuna, Clínica Alemana de La Dehesa y el SAPU de El Rodeo tienen urgencia pediátrica 24 h. Si está estable, consulta a su pediatra; la kinesiología respiratoria suele indicarse como complemento de ese control."
                    },
                    {
                        "q": "Estamos en el sector de Farellones, ¿llegan hasta allá?",
                        "a": "Sí, llegamos. Como ese sector queda lejos del núcleo urbano y en altura, coordinamos una hora fija con anticipación. Ten presente que la posta de Farellones atiende solo en horario hábil: si hay dificultad respiratoria fuera de ese horario, llama al 131."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "En Lo Barnechea predominan las casas, muchas con escaleras interiores, livings a desnivel o el dormitorio en el segundo piso. Tras un ACV, con Parkinson o después de otra lesión neurológica, esos cambios de nivel pueden volverse un límite para la autonomía si no se practican con guía. La rehabilitación neurológica a domicilio permite entrenar transferencias, marcha y equilibrio justo en esos espacios: la cama, el baño, el tramo de escalera que se usa a diario.\n\nTambién evita que la familia tenga que organizar traslados en auto varias veces por semana, algo que en una comuna sin Metro y con horas punta cargadas termina desgastando a quien cuida. En la evaluación inicial gratuita conversamos con los cuidadores, porque lo que se practica entre sesiones suele influir en la continuidad del avance. El progreso depende de cada diagnóstico y de cada persona. Ante debilidad brusca de un lado del cuerpo, dificultad para hablar o la cara desviada, llama de inmediato al 131: pueden ser señales de un ACV.",
                "faqsLocales": [
                    {
                        "q": "Mi papá tiene controles médicos fuera de la comuna y hay que llevarlo en auto, ¿nos pueden enseñar a subirlo y bajarlo sin lastimarnos?",
                        "a": "Sí, según su condición. Practicamos con el cuidador el paso desde la silla o la silla de ruedas al asiento del auto y de vuelta, idealmente con el mismo vehículo que usan, y ajustamos la técnica a lo que la persona puede aportar. Si esa transferencia todavía no es segura, te lo decimos y conviene conversarlo con su equipo médico."
                    },
                    {
                        "q": "¿Sirven las sesiones si el paciente pasa casi todo el día en cama?",
                        "a": "Sí, según el caso. Se puede partir con cambios de posición, sentarse al borde de la cama y ejercicios en la misma cama, y avanzar hacia ponerse de pie y caminar cuando la evaluación y el equipo médico lo permitan. No hay plazos garantizados: el avance depende del diagnóstico y de cada persona."
                    }
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Si te lesionaste caminando por los cerros o en la cordillera, o tienes un esguince, dolor de rodilla, hombro o un lumbago, en Lo Barnechea el problema no es solo el dolor: moverse implica calles en pendiente, subidas desde el estacionamiento y trayectos en auto que no conviene hacer manejando lesionado. La kinesiología traumatológica a domicilio te permite empezar el tratamiento sin sumar viajes por Av. La Dehesa en hora punta ni bajar por el camino a Farellones para cada sesión.\n\nCuando la lesión afecta la marcha, incluimos los tramos que usas a diario, como la pendiente de acceso a tu casa o la calle en subida por donde caminas, y avanzamos hacia ellos de forma gradual según tu evolución. La kinesiología complementa la evaluación médica y no la reemplaza: si hubo un golpe fuerte, ves una deformidad, no puedes apoyar el pie o el dolor es muy intenso, primero consulta en urgencia para descartar una fractura. Ante un golpe en la cabeza o pérdida de conciencia, llama al 131.",
                "faqsLocales": [
                    {
                        "q": "Me torcí el tobillo en la cordillera, ¿puedo partir directo con kine en casa?",
                        "a": "Primero conviene descartar una fractura. Si no puedes apoyar el pie, está deformado o muy hinchado, consulta antes: en horario hábil, en la posta de Farellones; fuera de ese horario, en la urgencia de Clínica Alemana de La Dehesa o del SAPU de El Rodeo, sin manejar tú. Ante un golpe en la cabeza, pérdida de conciencia o dolor que impide moverte, llama al 131. Con el diagnóstico en mano, iniciamos la rehabilitación en tu casa."
                    },
                    {
                        "q": "Me duele la rodilla en las bajadas cuando salgo a caminar por los cerros del sector, ¿esto se puede tratar en casa?",
                        "a": "Habitualmente sí, después de una evaluación. Revisamos cómo cargas la rodilla, trabajamos fuerza y control del movimiento en tu casa y planificamos una vuelta gradual a las subidas y bajadas. Si la rodilla se hincha, se bloquea o cede, o el dolor apareció tras un golpe o una torcedura, consulta primero con un médico."
                    }
                ]
            }
        ]
    },
    "la-florida": {
        "centrosSalud": [
            {
                "nombre": "Hospital Clínico Metropolitano La Florida Dra. Eloísa Díaz Insunza",
                "tipo": "Hospital público",
                "nota": "Urgencia 24 h, adulto y pediátrica"
            },
            {
                "nombre": "Clínica Bupa Santiago",
                "tipo": "Clínica privada",
                "nota": "Urgencia 24 h, adulto y pediátrica"
            },
            {
                "nombre": "Clínica Dávila Vespucio",
                "tipo": "Clínica privada",
                "nota": "Urgencia 24 h, adulto y pediátrica"
            },
            {
                "nombre": "SAR Los Quillayes",
                "tipo": "Servicio de urgencia de atención primaria (SAR)",
                "nota": "Urgencia primaria 24 h, adulto y pediátrica, red municipal"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en La Florida: del plano de Vicuña Mackenna a la precordillera",
            "parrafos": [
                "La Florida no se vive igual en todos sus sectores. En la comuna predominan las casas en villas y poblaciones, y cerca de Vicuña Mackenna y de los centros comerciales hay cada vez más edificios de departamentos. El poniente es plano, mientras que hacia el oriente las calles suben hacia la precordillera. Antes de la primera sesión conversamos contigo cómo es tu vivienda para planificar el trabajo en ese espacio real: si tu casa tiene escalones en la entrada o un patio con desniveles, o si vives en un edificio con ascensor y pasillos angostos.",
                "Atenderte en casa te ahorra traslados, algo que pesa más cuando la movilidad está limitada y vives en los sectores altos, que quedan más lejos del Metro. Si te dieron el alta en el Hospital Eloísa Díaz, en Clínica Bupa Santiago o en Clínica Dávila Vespucio, ten a mano la epicrisis y las indicaciones médicas para la evaluación inicial gratuita. Kineum atiende de forma particular e independiente de esos centros.",
                "Ante una urgencia, llama al SAMU (131) o al rescate municipal de La Florida (1416). En la red comunal solo algunos servicios de urgencia funcionan 24 horas, como el SAR Los Quillayes, así que conviene confirmar el horario del más cercano a tu casa antes de necesitarlo."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "Si tu familiar vive hace años en una casa con escalones en la entrada o un patio con desniveles, o en una calle de los sectores que suben hacia la precordillera, salir a comprar o a la feria puede volverse un riesgo. La kinesiología geriátrica a domicilio trabaja justo sobre esos obstáculos: subir y bajar el escalón del antejardín, levantarse de la cama o del sillón y caminar por la vereda inclinada con o sin bastón.\n\nSi en cambio vive en un departamento en el sector plano de la comuna, el foco cambia: ascensor, pasillos estrechos, baño pequeño y el trayecto hasta el Metro. En ambos casos la sesión, de unos 60 minutos, se adapta a lo que la persona necesita hacer en su día a día y suele incluir ejercicios de fuerza y equilibrio que la familia puede reforzar entre visitas.\n\nAnte una caída con golpe en la cabeza, dolor intenso o imposibilidad de apoyar, no esperes la sesión: llama al SAMU (131) o al rescate municipal (1416).",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en una calle en pendiente en la parte alta de La Florida y casi no sale. ¿Pueden trabajar la marcha fuera de la casa?",
                        "a": "Sí, según su estado. Primero evaluamos dentro de la casa y, cuando es seguro, incorporamos tramos cortos en la vereda o en la subida cercana, acompañada por el kinesiólogo. La idea es que recupere confianza para salir, sin forzarla."
                    },
                    {
                        "q": "Mi papá vive en una casa con escalones en la entrada. ¿Conviene poner pasamanos?",
                        "a": "En la evaluación revisamos accesos, escalones y baño, y te sugerimos adaptaciones concretas como pasamanos, barras de apoyo o retirar alfombras sueltas. La decisión y la instalación quedan en manos de la familia."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Si te operaron en un centro de la comuna, como la Clínica Dávila Vespucio, el alta te deja en casa con un primer desafío: moverte con puntos, con una rodilla o una cadera recién operada, o con un brazo inmovilizado. Los primeros días, subir a un auto o salir a la calle para cada sesión puede resultar agotador.\n\nCon la rehabilitación postquirúrgica a domicilio, el kinesiólogo llega a tu casa o departamento con las indicaciones de tu cirujano. Revisamos cómo entras y sales de la cama, cómo usas el baño y cómo manejas la escalera o el ascensor, y avanzamos según la pauta médica y tu evolución, sin saltarnos etapas. La epicrisis y el protocolo que te entregaron al alta son la base de la evaluación inicial gratuita.\n\nSi notas fiebre, la herida enrojecida o con secreción, o dolor e hinchazón en la pantorrilla, avisa a tu equipo tratante o consulta en urgencia. Si aparece falta de aire repentina o dolor en el pecho, llama de inmediato al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "Me operan en una clínica de La Florida. ¿Puedo coordinar la kinesiología antes del alta?",
                        "a": "Sí. Escríbenos por WhatsApp al +56 9 9967 9593 con la fecha estimada de alta y coordinamos la evaluación inicial gratuita para tus primeros días en casa, siempre que tu cirujano indique kinesiología."
                    },
                    {
                        "q": "Vivo en una casa de dos pisos y mi pieza está arriba. ¿Pueden ayudarme con la escalera después de la operación?",
                        "a": "Sí. Trabajamos cómo subir y bajar esa escalera de forma segura, con la técnica y las ayudas que correspondan a tu cirugía. Si tu médico restringió las escaleras por un tiempo, respetamos esa indicación y te orientamos para organizarte en el primer piso."
                    }
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "Cuando un niño o un adulto mayor está resfriado o con secreciones y su médico indicó kinesiología respiratoria, atenderse en casa evita sacarlo para cada sesión, esperar locomoción o hacer un trayecto largo dentro de la comuna en pleno cuadro. La sesión se hace en su pieza: técnicas para ayudar a despejar secreciones, ejercicios respiratorios y educación a la familia.\n\nParte del trabajo es que sepas reconocer cuándo la kinesiología no basta. Si ves dificultad para respirar, hundimiento de costillas al respirar, labios morados, respiración muy rápida, somnolencia marcada o un lactante que no quiere alimentarse, acude a urgencia. En la comuna hay urgencia pediátrica 24 horas en Clínica Bupa Santiago, Clínica Dávila Vespucio y el Hospital Eloísa Díaz, además del SAR Los Quillayes en la red municipal. Si la situación es grave, llama al SAMU (131).\n\nComo no todos los servicios de urgencia comunales atienden de noche, revisa hoy cuál es el que funciona 24 horas más cerca de tu casa.",
                "faqsLocales": [
                    {
                        "q": "Mi hijo tiene bronquitis obstructiva y vivimos en la parte alta de La Florida. ¿Cuándo pueden venir?",
                        "a": "Escríbenos por WhatsApp al +56 9 9967 9593 y coordinamos la visita según disponibilidad; atendemos de lunes a domingo. Si mientras tanto tu hijo muestra señales de dificultad respiratoria, no esperes la sesión y acude a una urgencia pediátrica o llama al SAMU (131)."
                    },
                    {
                        "q": "Me indicaron kinesiología respiratoria en una urgencia de La Florida. ¿Puedo hacerla en casa y pedir reembolso?",
                        "a": "Sí. Kineum es un servicio particular: te entregamos boleta de honorarios electrónica, que puedes presentar a tu isapre o seguro complementario junto con la orden médica. El monto reembolsado depende de tu plan."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Después de un ACV u otro diagnóstico neurológico, la rehabilitación suele ser larga y exige constancia. En una comuna extensa como La Florida, trasladarse varias veces por semana puede transformarse en el mayor obstáculo: una persona con debilidad de un lado del cuerpo o con problemas de equilibrio difícilmente sube a un auto o llega hasta el Metro sin ayuda.\n\nLa rehabilitación neurológica a domicilio se hace donde la persona tiene que volver a desenvolverse: el paso de la cama a la silla, la puerta del baño, los escalones de acceso o el pasillo del edificio. Involucramos a quien la cuida para que las transferencias seguras y los ejercicios continúen entre sesiones. El avance depende de cada caso y de las indicaciones del equipo médico tratante.\n\nAnte síntomas nuevos como boca desviada, pérdida súbita de fuerza o dificultad para hablar, llama de inmediato al SAMU (131): son señales de urgencia.",
                "faqsLocales": [
                    {
                        "q": "Cuidamos a mi papá en un departamento con baño pequeño. ¿Cómo nos enseñan a pasarlo de la cama a la silla?",
                        "a": "En las sesiones practicamos las transferencias en tu propio espacio, con la cama, la silla y el baño que tienen, y te mostramos cómo ubicarte para cuidar tu espalda y la seguridad de tu papá. Si el espacio lo complica, te sugerimos cambios simples, como mover muebles o agregar barras de apoyo."
                    },
                    {
                        "q": "Mi mamá usa silla de ruedas y nuestra casa tiene escalones en la entrada. ¿Qué pueden hacer?",
                        "a": "Evaluamos los accesos y enseñamos a la familia transferencias seguras. Según su condición, trabajamos para ganar pasos con apoyo; si subir escalones no es seguro para ella, te orientamos sobre alternativas como una rampa, cuya instalación decide la familia."
                    }
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Un esguince al bajar una vereda empinada, una fractura tras una caída en la escalera de la casa, una tendinitis de hombro o un dolor lumbar que no cede: la kinesiología traumatológica a domicilio parte evaluando la lesión y lo que necesitas volver a hacer. Para algunos es subir su propia calle o la escalera; para otros, volver al trabajo, a la bicicleta o a la pichanga del fin de semana.\n\nEn casa trabajamos movilidad, fuerza y control del movimiento con lo que tienes a mano, y progresamos hacia esos gestos sin apurar etapas. Te dejamos una pauta de ejercicios para los días sin sesión, pensada para el espacio que tienes, aunque sea un living pequeño.\n\nSi después de un golpe hay deformidad, no puedes apoyar o el dolor es intenso, primero descarta una fractura en urgencia, por ejemplo en el Hospital Eloísa Díaz o en otro de los centros de la comuna listados en esta página. Ante un accidente con lesiones graves, llama al SAMU (131) o al rescate municipal de La Florida (1416).",
                "faqsLocales": [
                    {
                        "q": "Me doblé el tobillo bajando una calle en pendiente. ¿Puedo empezar la kinesiología en casa sin radiografía?",
                        "a": "Si hubo dolor intenso, mucha hinchazón o no puedes apoyar el pie, primero consulta a un médico para descartar fractura. Con eso descartado, partimos el tratamiento a domicilio con la evaluación inicial gratuita."
                    },
                    {
                        "q": "Tuve una lesión de rodilla y para llegar a mi casa tengo que subir una calle empinada. ¿Trabajan esa subida en la rehabilitación?",
                        "a": "Sí, cuando la lesión lo permite. Primero recuperamos movilidad y fuerza dentro de la casa y luego practicamos la subida y la bajada en tramos cortos, acompañado por el kinesiólogo. No hay un plazo fijo: depende de la lesión y de cómo evoluciones."
                    }
                ]
            }
        ]
    },
    "penalolen": {
        "centrosSalud": [
            {
                "nombre": "Hospital Santiago Oriente Dr. Luis Tisné Brousse",
                "tipo": "hospital publico",
                "nota": "Urgencia hospitalaria 24 h para adultos, en Av. Las Torres"
            },
            {
                "nombre": "SAR Carol Urzúa",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria con atención infantil; días hábiles de tarde-noche, 24 h fines de semana y festivos"
            },
            {
                "nombre": "SAPU La Faena",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria con atención infantil; días hábiles de tarde-noche, 24 h fines de semana y festivos"
            },
            {
                "nombre": "SAPU Lo Hermida",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria con atención infantil; días hábiles de tarde-noche, 24 h fines de semana y festivos"
            },
            {
                "nombre": "SAPU San Luis",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria con atención infantil; días hábiles de tarde-noche, 24 h fines de semana y festivos"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Peñalolén: de la villa a la ladera",
            "parrafos": [
                "Peñalolén sube hacia la precordillera oriente, y eso se nota en la rehabilitación. En Peñalolén Alto y en los faldeos, las calles con pendiente hacen que salir a caminar después de una lesión o una operación cueste más de lo que parece. Por eso adaptamos los ejercicios al espacio que tienes: el pasillo de una casa en Lo Hermida, el living de un condominio en ladera o el patio de una villa en San Luis o La Faena.",
                "En los blocks de pocos pisos sin ascensor, la escalera pasa a ser parte del tratamiento. Si el alta es reciente o se trata de un adulto mayor, practicamos subir y bajar con seguridad antes de exigirlo a diario, y evaluamos si conviene hacer las primeras sesiones sin salir del departamento.",
                "La kinesiología no reemplaza la atención médica: ante una emergencia médica, llama al SAMU 131. La urgencia hospitalaria 24 horas de la comuna, para adultos, está en el Hospital Santiago Oriente, en Av. Las Torres; los SAPU y el SAR municipales, que atienden niños, funcionan de tarde-noche en días hábiles y 24 horas los fines de semana y festivos. La Municipalidad además tiene el 1461, su número de emergencias comunal, las 24 horas. Si vienes saliendo de alta de un centro cercano, ten a mano tu epicrisis y las indicaciones médicas para la evaluación inicial gratuita: las seguimos, aunque no tenemos convenio con ningún centro."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "Para un adulto mayor en Peñalolén, salir de la casa muchas veces empieza con una cuesta. En Peñalolén Alto y en los faldeos cordilleranos, la calle con pendiente frente a la puerta puede ser el motivo por el que alguien deja de salir, y quedarse adentro suele acelerar la pérdida de fuerza y equilibrio. La kinesiología geriátrica a domicilio parte justamente ahí: evaluamos cómo camina tu familiar en su propio entorno y trabajamos fuerza de piernas, equilibrio y marcha con metas concretas, como volver a llegar a la esquina con apoyo. En las casas de uno o dos pisos de Lo Hermida, San Luis o La Faena revisamos escalones de entrada, patios con desniveles y el baño; en los blocks sin ascensor, la escalera se entrena paso a paso y con pasamanos. Si hay una caída con golpe en la cabeza, dolor intenso o no puede apoyar una pierna, llama primero al SAMU 131: la sesión puede esperar.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en Peñalolén Alto y dejó de salir por la subida. ¿Sirve atenderla en la casa?",
                        "a": "Sí. Primero trabajamos dentro de la casa fuerza, equilibrio y marcha. Cuando el kinesiólogo lo considera seguro, practicamos tramos cortos de la calle con pendiente, acompañada y con pausas. El ritmo de avance depende de cada persona y no se puede garantizar un plazo."
                    },
                    {
                        "q": "Mi papá vive en un segundo piso de un block sin ascensor. ¿Pueden ayudarlo con la escalera?",
                        "a": "Sí. En la evaluación inicial gratuita vemos la escalera y definimos si conviene entrenarla desde el comienzo o ganar fuerza antes dentro del departamento. Si ha tenido mareos o caídas recientes, conviene que también lo evalúe su médico."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Volver a casa después de una operación en Peñalolén suele significar enfrentarse a algo que en el hospital no estaba: la escalera del block, el desnivel de la entrada o la calle en subida hasta el auto. Con la rehabilitación postquirúrgica a domicilio te evitas justamente esos traslados en las primeras semanas, cuando cada salida cuesta y un mal paso pesa más. Si te dieron de alta en el Hospital Santiago Oriente o en otro centro, tu kinesiólogo trabaja con la epicrisis y las indicaciones de tu cirujano: cargas permitidas, rangos de movimiento y fechas de control. KINEUM no tiene convenio con ningún centro, así que eres tú quien nos comparte esa información en la evaluación inicial gratuita. En condominios en ladera y casas de dos pisos definimos por dónde moverte con seguridad y si conviene dormir en el primer piso los primeros días. Fiebre, una herida que supura, dolor que aumenta o una pierna hinchada son motivo para consultar a tu médico o ir a urgencia antes de seguir.",
                "faqsLocales": [
                    {
                        "q": "Me operaron de una pierna y vivo en un block sin ascensor. ¿Cómo se practica la escalera en las sesiones?",
                        "a": "Primero ganamos control y confianza dentro del departamento con la ayuda técnica que te indicaron. Cuando tu cirujano lo permite, practicamos la escalera con pasamanos y la regla habitual: al subir va primero la pierna sana y al bajar, la operada, junto al bastón o las muletas si los usas. Si aparece mareo o un dolor que aumenta, se detiene y se reevalúa."
                    },
                    {
                        "q": "Vivo en un condominio en ladera y el auto queda abajo. ¿Cómo llego a los controles con el cirujano los primeros días?",
                        "a": "En la evaluación revisamos el camino desde tu puerta hasta el auto y practicamos el tramo con pendiente y la forma de subir y bajar del vehículo según tu cirugía. Si todavía no es seguro hacerlo solo, conviene organizar ayuda de alguien de tu familia y comentarlo con tu cirujano."
                    }
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En kinesiología respiratoria, lo más útil que podemos dejarte en Peñalolén, además de las sesiones, es un plan claro para cuando algo no anda bien. A domicilio trabajamos técnicas de respiración, manejo de secreciones y tolerancia al esfuerzo en adultos y niños, según indicación médica, sin sacar a la calle a quien respira con dificultad. Conviene saber a dónde ir: los SAPU La Faena, Lo Hermida y San Luis y el SAR Carol Urzúa atienden niños, pero en días hábiles funcionan de tarde-noche; fines de semana y festivos, las 24 horas. Si un niño empeora cuando están cerrados, llama al SAMU 131. Para adultos, la urgencia hospitalaria 24 horas de la comuna es el Hospital Santiago Oriente, en Av. Las Torres. Costillas que se hunden al respirar, labios morados, respiración muy rápida o decaimiento marcado son motivo para llamar al SAMU 131 sin esperar la sesión. En los sectores altos, donde la pendiente exige más a quien tiene poca capacidad pulmonar, la vuelta a caminar afuera se gradúa con pausas planificadas.",
                "faqsLocales": [
                    {
                        "q": "Si mi hijo tiene una crisis respiratoria un martes en la madrugada, ¿a dónde lo llevo en Peñalolén?",
                        "a": "En la madrugada de un día hábil, los SAPU y el SAR de la comuna suelen estar cerrados, y el Hospital Santiago Oriente no figura como urgencia pediátrica. Si tu hijo respira con dificultad, llama al SAMU 131: te orientan y, si hace falta, lo trasladan. Conviene confirmar antes con la Municipalidad (1461) el horario vigente de los SAPU. La kinesiología respiratoria no reemplaza la urgencia."
                    },
                    {
                        "q": "Mi abuelo vive en la parte alta de Peñalolén y se ahoga subiendo la calle. ¿Le sirve la kinesiología respiratoria?",
                        "a": "Puede ayudar, con indicación de su médico. En casa trabajamos la respiración y la resistencia al esfuerzo y, cuando es seguro, tramos cortos de calle con pendiente. Si la falta de aire aparece en reposo o empeora de golpe, corresponde ir a urgencia o llamar al SAMU 131."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Después de un ACV, o con una enfermedad como el Parkinson, la rehabilitación neurológica a domicilio suele rendir más porque se practica donde la persona vive, y en Peñalolén ese lugar cambia mucho de una casa a otra. En una villa de Lo Hermida o San Luis trabajamos los traslados dentro de la casa, el paso por puertas angostas y el escalón de entrada. En un condominio en ladera, las rampas y desniveles exteriores. En un block sin ascensor, evaluamos si la escalera es viable o si por ahora conviene ejercitar dentro del departamento. Incorporamos a la familia o al cuidador en las sesiones para que las transferencias y la marcha asistida se hagan igual el resto de la semana. Los avances suelen ser graduales y dependen del diagnóstico y del tiempo de evolución. Si aparecen síntomas nuevos, como pérdida súbita de fuerza, la cara desviada o dificultad para hablar, llama de inmediato al SAMU 131: puede ser un nuevo ACV y ninguna sesión debe retrasar esa atención.",
                "faqsLocales": [
                    {
                        "q": "Mi papá tuvo un ACV y salir de la casa en Peñalolén Alto es muy difícil para él. ¿Cómo empiezan las sesiones?",
                        "a": "Con una evaluación inicial gratuita en la casa. Partimos por lo de adentro: pasar de la cama a la silla, ir al baño y caminar con ayuda. La salida a la calle con pendiente se deja para cuando haya equilibrio suficiente, siempre acompañado. Conviene tener a mano las indicaciones de su neurólogo o fisiatra."
                    },
                    {
                        "q": "¿Nos enseñan a la familia a ayudarlo en la escalera del block?",
                        "a": "Sí, cuando es seguro hacerlo. Practicamos la técnica con el cuidador presente. Si la escalera todavía no es segura para él, te lo decimos con claridad y lo conversamos con su médico tratante."
                    }
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Un esguince de tobillo o una lesión de rodilla se sienten distinto en Peñalolén Alto que en terreno plano: bajar una calle con pendiente carga más la articulación y exige más control que subirla. En kinesiología traumatológica a domicilio tomamos eso en cuenta para decidir cuándo vuelves a caminar por las calles en pendiente de los sectores altos o a retomar el trote. Mientras tanto, trabajamos en tu casa o departamento con ejercicios de fuerza, movilidad y equilibrio que no necesitan gimnasio. Si vives en un block sin ascensor, la escalera se incorpora como ejercicio graduado y no como una prueba diaria que agrava la lesión; en una casa de dos pisos, ensayamos la escalera interior con la técnica que corresponde. Si la lesión es reciente y hay deformidad, no puedes apoyar o el dolor es intenso, primero hay que descartar una fractura en un servicio de urgencia; si es un niño y los SAPU están cerrados, o no sabes a dónde ir, llama al SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "Me torcí el tobillo y vivo en una calle en subida. ¿Cuándo puedo volver a caminar por el barrio?",
                        "a": "Depende de la lesión. Habitualmente se avanza de caminar en plano dentro de la casa a tramos cortos con pendiente, y la bajada se deja para después porque exige más control. Tu kinesiólogo lo va definiendo con pruebas simples en cada sesión, sin plazos garantizados."
                    },
                    {
                        "q": "Vivo en un block sin ascensor y tengo una lesión de rodilla. ¿Cómo hago las primeras semanas?",
                        "a": "Según la lesión y las indicaciones de tu médico, al comienzo suele convenir reducir las subidas y bajadas innecesarias, agrupar las salidas y usar siempre el pasamanos. En las sesiones practicamos la escalera con una técnica que cuida la rodilla y sumamos carga a medida que responde. Si la rodilla se hincha mucho, se bloquea o cede, consulta a tu médico."
                    }
                ]
            }
        ]
    },
    "macul": {
        "centrosSalud": [
            {
                "nombre": "SAPU Santa Julia",
                "tipo": "Servicio de urgencia primaria municipal (SAPU)",
                "nota": "Urgencia con atención pediátrica; 24 horas solo fines de semana y festivos"
            },
            {
                "nombre": "Centro Médico San Joaquín UC CHRISTUS (Emergencia UC CHRISTUS)",
                "tipo": "Clínica privada",
                "nota": "Urgencia ambulatoria en horario diurno, con atención pediátrica; Av. Vicuña Mackenna 4686, en Macul pese a su nombre"
            },
            {
                "nombre": "Centro Médico Macul del Hospital Clínico Universidad de Chile",
                "tipo": "Centro médico ambulatorio",
                "nota": "Atención ambulatoria; sin urgencia 24 horas"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Macul: lo que conviene saber",
            "parrafos": [
                "Macul es una comuna mayormente plana y residencial, donde predominan las casas de uno o dos pisos en villas y poblaciones. En ese tipo de vivienda, por lo general se puede habilitar un espacio para los ejercicios de marcha y fuerza, y el kinesiólogo llega con el equipamiento necesario. Distinto es el caso de las villas con blocks de pocos pisos sin ascensor: ahí la escalera es la principal barrera para una persona recién operada o un adulto mayor, y atenderse en el propio departamento evita ese tramo.",
                "La comuna tiene buena conexión por Metro, con la Línea 5 por el borde de Vicuña Mackenna y la Línea 4 por el oriente. Pero moverse con dolor, con muletas o con una secuela neurológica no es lo mismo que hacerlo sano, y la sesión en casa te ahorra ese trayecto.",
                "Dentro de Macul no hay un hospital de urgencia 24 horas; en esta página encontrarás los servicios de urgencia de la comuna y sus horarios. Ante dolor de pecho, dificultad grave para respirar o pérdida de conciencia, llama al SAMU (131). Si vienes saliendo de un alta, ten a mano la epicrisis y las indicaciones de tu médico para la evaluación inicial gratuita."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En Macul muchos adultos mayores viven en casas de uno o dos pisos, y es en esos espacios donde se juega su autonomía: la escalera interior que lleva a los dormitorios, el escalón entre la cocina y el patio, el trayecto al baño en la noche. La kinesiología geriátrica a domicilio trabaja sobre esos recorridos reales, con ejercicios de equilibrio, fuerza de piernas y marcha adaptados a cada persona.\n\nEn la casa se ve lo que en una consulta no aparece: una alfombra suelta, un pasillo sin luz de noche, una silla demasiado baja. Cuando corresponde, el kinesiólogo sugiere ajustes simples para reducir el riesgo de caídas y, según el caso, conversa con la familia si conviene que la persona duerma en el primer piso mientras gana fuerza. Las sesiones duran cerca de 60 minutos y la familia puede estar presente para aprender a acompañar los ejercicios entre visitas. La evaluación inicial es gratuita y sirve para definir la frecuencia y los objetivos.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en una casa de dos pisos en Macul y le cuesta subir al dormitorio, ¿conviene bajarla al primer piso?",
                        "a": "Depende de su estado. En la evaluación inicial gratuita el kinesiólogo observa cómo sube y baja la escalera y te orienta: a veces basta con trabajar fuerza y equilibrio y practicar la escalera con supervisión; otras veces conviene un cambio transitorio mientras progresa. Si su médico dio una indicación al respecto, esa manda."
                    },
                    {
                        "q": "Si mi papá se cae en la casa, ¿qué hago antes de llamar al kinesiólogo?",
                        "a": "Si se golpeó la cabeza, perdió el conocimiento o no puede levantarse, no lo muevas a la fuerza y llama al SAMU (131). Si logra levantarse, igual conviene que lo evalúe un médico; en esta página tienes los servicios de urgencia de Macul. La kinesiología viene después, para recuperar confianza y prevenir nuevas caídas."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Volver a un block sin ascensor en Macul después de una cirugía cambia la rutina: cada salida significa subir y bajar escaleras con muletas o andador, y en las primeras semanas ese esfuerzo puede pesar más que la rehabilitación misma. En la rehabilitación postquirúrgica a domicilio el kinesiólogo sube a tu departamento, así que no dependes de alguien que te ayude a bajar ni de buscar locomoción.\n\nTrabajamos según las indicaciones de tu traumatólogo o cirujano: movilidad, manejo del dolor con técnicas kinésicas, fuerza progresiva y entrenamiento de marcha con la ayuda técnica indicada. La escalera del edificio se incorpora al plan solo cuando tu médico lo autoriza. No importa en qué centro te operaron; para la evaluación inicial gratuita basta con tener el protocolo o la epicrisis. Si notas fiebre, la herida enrojecida o con secreción, o dolor e hinchazón que aumentan en la pantorrilla, consulta a tu médico sin esperar la sesión. Si además aparece falta de aire repentina o dolor en el pecho, llama de inmediato al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "¿Cuándo voy a poder bajar la escalera de mi block en Macul después de la operación?",
                        "a": "No hay un plazo fijo: depende de la cirugía, de las indicaciones de tu médico y de cómo avances. Primero se trabaja movilidad y fuerza dentro del departamento; cuando el médico lo autoriza y la evaluación lo respalda, se practica la escalera con supervisión, de a pocos escalones."
                    },
                    {
                        "q": "Me dieron el alta en un centro cercano a Macul, ¿ustedes coordinan con ellos?",
                        "a": "No tenemos convenio con clínicas ni centros de salud. Trabajamos con la documentación que te entregaron al alta (epicrisis, protocolo e indicaciones del cirujano) y, si surge una duda clínica, te pedimos consultarla con tu médico tratante."
                    }
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "Para un niño con bronquitis obstructiva o un adulto mayor con secreciones, la kinesiología respiratoria en casa evita salir con frío y esperar en una sala llena. En Macul hay un dato que conviene tener claro: dentro de la comuna no hay urgencia 24 horas todos los días. El SAPU Santa Julia atiende urgencias con atención pediátrica, pero funciona 24 horas solo fines de semana y festivos; el Centro Médico San Joaquín UC CHRISTUS, en Av. Vicuña Mackenna 4686, recibe urgencias ambulatorias en horario diurno, también pediátricas.\n\nPor eso en la primera visita repasamos contigo las señales de alarma y a dónde ir según el día y la hora: respiración muy rápida, hundimiento de costillas, labios morados, somnolencia o que el niño deje de alimentarse. Frente a esas señales, la urgencia o el SAMU (131) van primero que cualquier sesión. La kinesiología respiratoria complementa el tratamiento del pediatra o del médico, con técnicas para despejar la vía aérea y educación para la familia.",
                "faqsLocales": [
                    {
                        "q": "Si mi hijo empeora de noche un día de semana, ¿a dónde lo llevo desde Macul?",
                        "a": "Si tiene dificultad respiratoria importante, llama al SAMU (131) o acude al servicio de urgencia abierto más cercano. Ten presente que el SAPU Santa Julia funciona 24 horas solo fines de semana y festivos, y que la urgencia del Centro Médico San Joaquín UC CHRISTUS atiende en horario diurno; conviene que confirmes con tu pediatra cuál es tu urgencia de referencia en la noche."
                    },
                    {
                        "q": "Vivimos en Macul, ¿conviene agendar la kinesiología respiratoria de mi hijo en la mañana?",
                        "a": "Suele ser práctico: si durante la sesión el kinesiólogo detecta señales de alarma, en horario diurno tienes disponible la urgencia ambulatoria del Centro Médico San Joaquín UC CHRISTUS, dentro de la comuna. De todas formas, si el niño está muy decaído o respira con mucha dificultad, llama al SAMU (131) a cualquier hora."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Después de un ACV o con un diagnóstico como Parkinson, lo que más importa es recuperar lo que se hace en la propia casa: levantarse de la cama, caminar hasta la cocina, sentarse y pararse con seguridad. Las casas de uno o dos pisos que predominan en las villas de Macul permiten entrenar esos recorridos tal como son, con sus pasillos, marcos de puerta y desniveles, en vez de ejercicios que después cuesta llevar a la vida diaria.\n\nLa rehabilitación neurológica a domicilio también mira a quien cuida. Le enseñamos a ayudar en el paso de la cama a la silla, a acompañar la marcha sin cargar el peso con la espalda y a repetir los ejercicios en los días sin sesión, porque la constancia suele ser clave. Cuando hace falta, sugerimos ajustes simples, como despejar un pasillo o ubicar un apoyo junto a la puerta del baño. El plan se ajusta a la evaluación y a las indicaciones del neurólogo o fisiatra. Ante síntomas nuevos y bruscos, como pérdida de fuerza en un lado del cuerpo o dificultad para hablar, llama de inmediato al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "Mi papá tuvo un ACV y su casa en Macul tiene pasillos angostos, ¿igual se puede hacer la rehabilitación ahí?",
                        "a": "Por lo general sí. En la evaluación inicial gratuita el kinesiólogo revisa por dónde se mueve tu papá, si pasan la silla o el andador y qué conviene despejar o reorganizar. Los objetivos y la frecuencia se definen según su estado y las indicaciones de su médico."
                    },
                    {
                        "q": "¿Qué hago si mi familiar presenta síntomas nuevos entre sesiones?",
                        "a": "Pérdida brusca de fuerza, cara desviada o dificultad para hablar son una emergencia: llama al SAMU (131) sin esperar. En Macul no hay urgencia hospitalaria 24 horas, por eso lo más seguro es llamar al SAMU en vez de trasladarlo por tu cuenta."
                    }
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Esguince de tobillo, lumbago, dolor de hombro o de rodilla: en la kinesiología traumatológica a domicilio el tratamiento parte en tu casa, sin manejar ni tomar el Metro con dolor. Macul tiene buena conexión por la Línea 5 y la Línea 4, pero con una lesión reciente incluso caminar hasta la estación y usar sus escaleras puede aumentar las molestias.\n\nEn casa el kinesiólogo trabaja con terapia manual, ejercicio terapéutico progresivo y, según el caso, otras técnicas kinésicas. En las casas de uno o dos pisos que predominan en la comuna, por lo general se puede habilitar un espacio para los ejercicios de fuerza y equilibrio, y para enseñarte una rutina que puedas repetir por tu cuenta entre sesiones. Atendemos de lunes a domingo, así la rehabilitación no choca con tu jornada. Si la lesión trae deformidad visible, no puedes apoyar el pie o el dolor es muy intenso, primero necesitas evaluación médica: en esta página encontrarás los servicios de urgencia de Macul.",
                "faqsLocales": [
                    {
                        "q": "Me torcí el tobillo jugando a la pelota en Macul, ¿voy primero a urgencia o llamo al kinesiólogo?",
                        "a": "Si no puedes apoyar el pie, hay deformidad o el dolor es muy intenso, primero necesitas evaluación médica y probablemente una radiografía; revisa en esta página los servicios de urgencia de la comuna y sus horarios. Con el diagnóstico listo, la kinesiología en casa suele ser el paso siguiente."
                    },
                    {
                        "q": "Me lesioné un sábado en Macul y el lunes tengo que trabajar, ¿puedo empezar la kinesiología el mismo fin de semana?",
                        "a": "Si un médico ya te evaluó y descartó una lesión que requiera otro manejo, sí: atendemos de lunes a domingo, así que la evaluación inicial gratuita puede ser ese mismo fin de semana, según disponibilidad. Si todavía no te ha visto un médico y el dolor es intenso o no puedes apoyar, parte por un servicio de urgencia."
                    }
                ]
            }
        ]
    },
    "san-joaquin": {
        "centrosSalud": [
            {
                "nombre": "SAR Enrique Molina G.",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia adulto y pediátrica; 24 h solo fines de semana y festivos, horario parcial en días hábiles"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en San Joaquín: casas, blocks sin ascensor y urgencia más cercana",
            "parrafos": [
                "San Joaquín es una comuna plana, así que cuando el plan incluye salir a caminar, las cuadras de tu barrio sirven como circuito de práctica. La sesión se adapta a tu vivienda: en barrios tradicionales como La Legua predominan las casas de un piso, donde trabajamos en el living o el patio; en los blocks de departamentos sin ascensor, subir y bajar la escalera con seguridad suele ser uno de los primeros objetivos.",
                "Dentro de la comuna no hay hospital ni clínica con urgencia 24 horas. El SAR Enrique Molina G. atiende urgencias de adultos y niños, pero abre las 24 horas solo los fines de semana y festivos; en días hábiles su horario es parcial. Ante una emergencia grave, llama al SAMU al 131.",
                "Si trabajas en el sector industrial y de bodegas de Av. Las Industrias, o te mueves por la Línea 5 del Metro en Vicuña Mackenna, recibir las sesiones en tu casa te ahorra traslados justo cuando más cuesta moverse. Para la evaluación inicial gratuita, ten a mano tu epicrisis y las indicaciones médicas. Somos un servicio particular: entregamos boleta de honorarios electrónica para pedir reembolso en tu Isapre o seguro complementario, según tu plan."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En los blocks de departamentos sin ascensor de San Joaquín, la escalera suele marcar la independencia de una persona mayor: si no se siente segura bajando, puede pasar semanas sin salir del departamento, y ese encierro habitualmente se traduce en menos fuerza y menos confianza. Por eso practicamos en los tramos reales de su edificio, con la baranda que existe y usando el descanso entre pisos para recuperar el aliento. Empezamos con pocos peldaños y avanzamos según cómo responda. La otra ventaja local es el terreno: como la comuna es plana, cuando el equilibrio lo permite sumamos caminatas cortas por la cuadra, con acompañante y, si hace falta, con bastón, alargando la distancia de a poco. Dentro del departamento revisamos alfombras sueltas, la luz del pasillo para levantarse de noche y la altura de la cama y del sillón. Al cerrar cada sesión dejamos a la familia indicaciones concretas para ayudar sin sobreproteger.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en un block sin ascensor en San Joaquín y ya casi no baja. ¿Se puede trabajar la escalera en la sesión?",
                        "a": "Sí. Primero evaluamos su fuerza, su equilibrio y cómo toma la baranda, y según eso practicamos subir y bajar en la escalera de su propio edificio, con pocos peldaños al comienzo. El avance depende de cada persona. Si aparece mareo, dolor en el pecho o falta de aire, se detiene la práctica; si el dolor de pecho o la falta de aire no ceden con el reposo, llama al SAMU al 131."
                    },
                    {
                        "q": "¿Sirve salir a caminar por el barrio como parte de la rehabilitación de un adulto mayor?",
                        "a": "Suele ser un buen complemento, porque las calles de San Joaquín son planas. El kinesiólogo define la distancia, el ritmo y si conviene usar bastón o ir acompañado; al principio se hace durante la sesión y después queda como tarea con indicaciones claras."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Si vives en un block sin ascensor en San Joaquín, volver a casa después de una operación de rodilla, cadera o tobillo trae un desafío inmediato: la escalera, con muletas y sin poder cargar todo el peso. Es lo primero que practicamos, peldaño a peldaño y siempre dentro de la carga que autorizó tu cirujano, para que bajar a tus controles no sea una apuesta. En la evaluación inicial gratuita revisamos tus indicaciones de alta: restricciones de carga, rangos de movimiento permitidos y cuidados de la herida. Con eso armamos el plan en tu casa, sin traslados a un centro en las semanas en que más cuesta moverse. Las señales de alarma quedan claras desde el primer día: fiebre, enrojecimiento que avanza alrededor de la herida o dolor e hinchazón que aumentan en la pantorrilla requieren avisar a tu equipo médico o consultar en urgencia. Si aparece falta de aire repentina o dolor en el pecho, llama de inmediato al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "Me opero en una clínica fuera de San Joaquín. ¿Pueden empezar la kinesiología en mi casa apenas me den el alta?",
                        "a": "Sí, siempre que tu cirujano lo indique. Coordinamos la evaluación inicial gratuita para los días siguientes al alta y trabajamos con sus indicaciones escritas. KINEUM no tiene convenio con clínicas: contratas directamente y recibes boleta de honorarios electrónica para pedir reembolso en tu Isapre o seguro complementario, según tu plan."
                    },
                    {
                        "q": "Vivo en un tercer piso sin ascensor y me operaron la rodilla. ¿Cómo bajo a mis controles?",
                        "a": "La técnica habitual es subir apoyando primero la pierna sana y bajar apoyando primero la operada, junto con las muletas y siempre dentro de la carga que autorizó tu cirujano. Lo practicamos en tu escalera antes de que tengas que usarla; mientras no te sientas seguro, lo recomendable es bajar acompañado."
                    }
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En kinesiología respiratoria, la sesión en casa y el plan para cuando algo empeora van juntos. En San Joaquín la urgencia municipal más a mano es el SAR Enrique Molina G., que no está abierto 24 horas en días hábiles, así que en la primera visita dejamos claro qué hacer a cualquier hora. En niños, las señales de alarma son respiración muy rápida, costillas que se hunden al respirar, labios morados, quejido o dificultad para comer; en adultos, falta de aire en reposo, labios o uñas azulados o confusión. Si aparecen, no esperes la sesión: llama al SAMU al 131. En casa trabajamos técnicas para despejar secreciones, ejercicios respiratorios y el uso correcto del inhalador y la aerocámara cuando el médico los indicó. Así un niño con fiebre o un adulto con oxígeno domiciliario no tiene que salir de la casa, y la familia aprende a notar si la respiración va mejorando o no entre una sesión y otra.",
                "faqsLocales": [
                    {
                        "q": "Es de noche un día de semana y mi hijo respira con mucho esfuerzo. ¿Adónde voy en San Joaquín?",
                        "a": "El SAR Enrique Molina G. atiende urgencias pediátricas, pero en días hábiles no funciona las 24 horas. Si tu hijo tiene señales de alarma, llama al SAMU al 131 o ve al servicio de urgencia abierto más cercano. La kinesiología respiratoria no reemplaza la atención de urgencia ni la evaluación médica."
                    },
                    {
                        "q": "Un fin de semana mi hijo amaneció con más tos y flemas. ¿Conviene ir al SAR o esperar la sesión?",
                        "a": "Depende de lo que veas. Si hay señales de alarma, no esperes: los fines de semana y festivos el SAR Enrique Molina G. atiende urgencias pediátricas las 24 horas, y ante una emergencia grave llama al SAMU al 131. Si respira tranquilo y solo tiene más secreciones, la sesión puede ayudar, idealmente con la indicación de su pediatra. Ante la duda, consulta primero."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "La rehabilitación neurológica, tras un ACV o con enfermedades como el Parkinson, suele rendir más cuando se practica en el espacio donde la persona vive. Por eso adaptamos la casa por dentro: de qué lado conviene la cama para bajarse por el lado con más fuerza, qué muebles estorban el paso con andador, dónde hacen falta apoyos en el baño y cómo dejar libre el recorrido de noche. Si en tu familia se turnan el cuidado, cada persona tiende a movilizar al paciente a su manera; parte del trabajo es que todos aprendan la misma técnica para traslados y cambios de posición, sin lesionarse la espalda. Los progresos varían mucho y no hay plazos fijos. Un dato local importante: dentro de San Joaquín no hay hospital con urgencia 24 horas, y un ACV necesita atención hospitalaria sin demora. Si aparecen síntomas nuevos, como pérdida súbita de fuerza, dificultad para hablar o la cara que se desvía, no esperes la sesión: llama de inmediato al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "Mi papá tuvo un ACV y vive en un block sin ascensor en San Joaquín. ¿Tiene sentido empezar la kinesiología en casa?",
                        "a": "Suele tenerlo, porque trabajamos en su espacio real: traslados, marcha dentro del departamento y orden de la casa para reducir el riesgo de caídas. La escalera se incorpora cuando su equipo médico lo autoriza y la evaluación muestra que es seguro."
                    },
                    {
                        "q": "Si todavía no puede bajar la escalera del block, ¿cómo llega a sus controles médicos?",
                        "a": "Mientras la escalera no sea segura, no conviene forzarla. Pregunta a su equipo médico si algún control puede resolverse de otra forma y, si tiene que bajar, que lo asistan al menos dos personas que sepan cómo hacerlo o un servicio de traslado. Nosotros evaluamos cuándo puede intentarlo y lo practicamos con él tramo a tramo."
                    }
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Esguinces, lumbago, un hombro doloroso o una fractura ya consolidada son motivos habituales de kinesiología traumatológica. San Joaquín tiene un sector industrial y de bodegas hacia Av. Las Industrias y el poniente de la comuna, y si trabajas ahí, el objetivo no es solo que deje de doler: es volver a levantar, empujar carros o cargar cajas durante un turno completo sin recaer. En casa trabajamos movilidad, fuerza y técnica de carga usando objetos de peso parecido a los que manejas en el trabajo, y ajustamos la progresión a las exigencias reales de tu jornada. Si te lesionaste trotando o haciendo deporte, la comuna plana ayuda: la vuelta a caminar y a trotar se programa por tramos en tu propio barrio, sin pendientes que sumen carga a un tobillo o una rodilla en recuperación. Si el golpe fue fuerte, hay deformidad, no puedes apoyar el pie o el dolor es muy intenso, primero debe verte un médico: la kinesiología viene después del diagnóstico.",
                "faqsLocales": [
                    {
                        "q": "Me torcí el tobillo trabajando en una bodega de San Joaquín. ¿Puedo tratarme con ustedes?",
                        "a": "Si te lesionaste trabajando, avisa primero a tu empleador para que te deriven a la atención que corresponde por accidente laboral. Si además quieres kinesiología particular a domicilio, la coordinamos cuando ya tengas evaluación médica."
                    },
                    {
                        "q": "¿Cuándo puedo volver a trotar por mi barrio después de un esguince?",
                        "a": "No hay una fecha fija: depende de la lesión y de cómo evoluciones. Habitualmente se avanza de caminar a trote suave en tramos cortos y en terreno plano, y se aumenta solo si al día siguiente no hay más dolor ni hinchazón."
                    }
                ]
            }
        ]
    },
    "santiago-centro": {
        "centrosSalud": [
            {
                "nombre": "Hospital Clínico San Borja Arriarán",
                "tipo": "hospital publico",
                "nota": "Urgencia 24 h, adulto y pediátrica"
            },
            {
                "nombre": "Hospital de Urgencia Asistencia Pública (ex Posta Central)",
                "tipo": "hospital publico",
                "nota": "Urgencia 24 h solo de adultos"
            },
            {
                "nombre": "Hospital San Juan de Dios",
                "tipo": "hospital publico",
                "nota": "Urgencia 24 h de adultos"
            },
            {
                "nombre": "Hospital Clínico UC CHRISTUS",
                "tipo": "clinica privada",
                "nota": "Urgencia 24 h, adulto y pediátrica"
            },
            {
                "nombre": "Servicio de Atención Primaria de Urgencia (SAPU) N° 1",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria con atención pediátrica para consultas de menor complejidad; no funciona las 24 h, confirma el horario"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Santiago Centro: cómo funciona en tu barrio",
            "parrafos": [
                "Atenderte en Santiago Centro tiene sus particularidades. En barrios patrimoniales como Yungay o Brasil abundan los edificios antiguos de pocos pisos sin ascensor, y para alguien recién operado o un adulto mayor, bajar esas escaleras para ir a una consulta puede ser el obstáculo más grande del día. Por eso el kinesiólogo sube a tu casa con el equipamiento y la sesión se hace donde vives.",
                "Si vives en una de las torres nuevas, en un departamento pequeño, no necesitas una sala especial: basta con despejar un par de metros junto a una pared o una silla firme, y los ejercicios se adaptan a ese espacio. El tránsito denso y lo difícil que es estacionar en el casco histórico influyen en la hora de llegada, así que el horario se coordina contigo con anticipación, de lunes a domingo.",
                "Si vienes saliendo de alta de un hospital o clínica del centro, ten a mano la epicrisis y las indicaciones médicas para la evaluación inicial, que es gratuita: el plan parte desde lo que indicó tu equipo tratante. KINEUM es un servicio particular e independiente, sin convenios con esos centros. Ante una urgencia no esperes la sesión: llama al SAMU (131) o acude a una urgencia 24 h, como la del Hospital Clínico San Borja Arriarán (adultos y niños) o la ex Posta Central (solo adultos)."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "Si un adulto mayor vive en un edificio antiguo de pocos pisos sin ascensor, como los de los barrios Yungay o Brasil, esa escalera suele terminar decidiendo cuántas veces a la semana sale a la calle, y quedarse encerrado habitualmente acelera la pérdida de fuerza y equilibrio. La kinesiología geriátrica a domicilio trabaja justamente ahí: se practica subir y bajar esa escalera con apoyo seguro, se revisan pasamanos, alfombras y la luz del pasillo, y se entrena la fuerza de piernas que exige ese trayecto concreto. Cuando la escalera deja de ser una barrera, el paso siguiente suele ser volver a la calle. Como el terreno de Santiago Centro es mayormente plano, salvo en los sectores cercanos al cerro Santa Lucía, retomar caminatas cortas por el barrio suele ser una meta alcanzable, según el caso, y en las sesiones se van definiendo distancias y pausas seguras. Si hay una caída con golpe en la cabeza, dolor intenso o imposibilidad de apoyar, no esperes la sesión: llama al 131 o acude a una urgencia.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en un tercer piso sin ascensor en el barrio Yungay, ¿igual pueden atenderla?",
                        "a": "Sí. El kinesiólogo sube al departamento con el equipamiento, y la escalera pasa a ser parte del trabajo: se evalúa cómo la sube y la baja, y se entrena ese trayecto con técnica y apoyo seguros, según lo que permita su condición."
                    },
                    {
                        "q": "Mi papá vive cerca del cerro Santa Lucía, ¿igual puede volver a salir a caminar?",
                        "a": "Según su condición, sí, aunque las pendientes de ese sector exigen más. En la evaluación inicial gratuita se revisan su fuerza y su equilibrio, y lo habitual es partir por trayectos planos y cortos antes de sumar subidas."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Dentro de Santiago Centro están el Hospital San Juan de Dios, el Hospital Clínico San Borja Arriarán y el Hospital Clínico UC CHRISTUS, así que tu cirugía puede haber sido cerca de casa. Pero cerca no significa fácil: si vives en un edificio antiguo sin ascensor, bajar con muletas o con una rodilla, cadera u hombro recién operados para ir a una consulta expone a caídas justo en las primeras semanas, que suelen ser las más delicadas. Con la rehabilitación postquirúrgica a domicilio esos traslados se evitan, y el uso seguro de las muletas en tu propia escalera se trabaja desde el comienzo. Para partir bien, ten a mano la epicrisis, el protocolo del cirujano y las restricciones de carga o movimiento: el plan sigue esas indicaciones, y las dudas se consultan con tu equipo tratante. KINEUM es un servicio particular, independiente de esos hospitales y sin convenio con ellos. Si tienes falta de aire repentina o dolor en el pecho, llama de inmediato al 131; si notas fiebre, la herida enrojecida o con secreción, o dolor e hinchazón en la pantorrilla, acude a una urgencia.",
                "faqsLocales": [
                    {
                        "q": "Me operaron en un hospital del centro y vivo cerca, ¿puedo partir la kinesiología en mi casa apenas me den el alta?",
                        "a": "Según el caso, sí. Lo habitual es comenzar cuando el cirujano lo indica. Con esa indicación y la epicrisis se agenda la evaluación inicial gratuita en tu domicilio, y el plan se arma respetando el protocolo de tu cirugía."
                    },
                    {
                        "q": "Vivo en un segundo piso sin ascensor, ¿cómo me las arreglo los primeros días con muletas?",
                        "a": "Una de las primeras cosas que se trabajan es cómo subir y bajar tu escalera con muletas o bastón de forma segura, respetando la carga que autorizó el cirujano. Mientras tanto, las sesiones se hacen en tu casa, así que no necesitas bajar para ir a rehabilitación."
                    }
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En Santiago Centro, llevar a una consulta a un niño con tos o a un adulto que se cansa al respirar puede significar bajar la escalera de un edificio antiguo sin ascensor o esperar locomoción con alguien que no se siente bien. La kinesiología respiratoria a domicilio permite hacer técnicas de despeje de secreciones y ejercicios respiratorios en casa, según lo que indique el médico tratante. Igual de importante es saber cuándo no esperar la sesión. Si un niño respira muy rápido, se le hunden las costillas al respirar, tiene los labios morados, está muy decaído o no quiere alimentarse, llévalo a una urgencia pediátrica 24 h, como la del Hospital Clínico San Borja Arriarán o la del Hospital Clínico UC CHRISTUS, o llama al 131. El SAPU N° 1 también atiende niños, pero no funciona las 24 horas y corresponde a consultas de menor complejidad: confirma su horario antes de ir. En un adulto con falta de aire intensa o dolor en el pecho, llama de inmediato al 131.",
                "faqsLocales": [
                    {
                        "q": "¿Dónde hay urgencia pediátrica 24 horas en Santiago Centro?",
                        "a": "Dentro de la comuna, el Hospital Clínico San Borja Arriarán y el Hospital Clínico UC CHRISTUS tienen urgencia pediátrica 24 h; confirma la información antes de ir. Si la situación es grave o no puedes trasladar al niño, llama al SAMU al 131."
                    },
                    {
                        "q": "Mi hijo tiene tos y está decaído, ¿lo llevo al SAPU N° 1 o a un hospital?",
                        "a": "El SAPU N° 1 atiende niños en consultas de menor complejidad, pero no funciona las 24 horas, así que confirma su horario. Si respira muy rápido, se le hunden las costillas o tiene los labios morados, no pases por el SAPU: ve a una urgencia pediátrica 24 h o llama al 131."
                    }
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Después de un ACV o con una enfermedad como el Parkinson, la vida diaria se juega en los detalles del propio hogar, y en Santiago Centro esos detalles tienen rasgos propios. En los barrios patrimoniales, muchos edificios antiguos de pocos pisos no tienen ascensor, así que la escalera puede definir si la persona sale o no de casa; en las torres nuevas, en cambio, abundan los departamentos pequeños donde una silla de ruedas o un andador ocupan casi todo el paso. La rehabilitación neurológica a domicilio trabaja en ese entorno real: transferencias de la cama a la silla, marcha dentro del departamento, entrada a la ducha y, cuando es posible, la escalera del edificio. Practicar en tu casa suele traducirse mejor en autonomía que ensayar en un espacio que no se parece a donde vives. El avance varía mucho según la lesión y la persona, así que el plan se ajusta a lo indicado por tu neurólogo. Si aparecen de golpe debilidad de un lado del cuerpo, la cara desviada o dificultad para hablar, llama de inmediato al 131: puede ser un nuevo ACV.",
                "faqsLocales": [
                    {
                        "q": "A mi papá le dan el alta tras un ACV en un hospital del centro, ¿qué documentos conviene tener para la primera sesión en casa?",
                        "a": "Ten a mano la epicrisis, las indicaciones del neurólogo, los informes de kinesiología o terapia que te hayan entregado en el hospital y la lista de medicamentos. Con eso, la evaluación inicial gratuita parte desde lo que ya se hizo y el plan sigue las indicaciones de su equipo tratante."
                    },
                    {
                        "q": "El departamento es chico y usamos silla de ruedas, ¿igual se puede trabajar la marcha?",
                        "a": "Según el caso, sí. Se aprovechan pasillos, paredes y muebles firmes como apoyo, y se reorganiza lo mínimo necesario para moverse con seguridad. También se entrenan las transferencias dentro de la casa, que son clave para ganar autonomía."
                    }
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Un esguince de tobillo, una fractura de muñeca ya tratada por el traumatólogo o un dolor lumbar que no cede son motivos frecuentes para buscar kinesiología traumatológica. En Santiago Centro, donde muchos edificios antiguos no tienen ascensor, una de las metas más concretas suele ser volver a subir y bajar la escalera del edificio sin dolor ni miedo, y después retomar de a poco la caminata diaria, por ejemplo hasta la estación de Metro. El kinesiólogo gradúa ese regreso según cómo responde la lesión. Si tu jornada es larga, atenderte en tu domicilio ayuda a no saltarte sesiones: cada una dura alrededor de 60 minutos y la hora se coordina contigo, de lunes a domingo. Hay situaciones que no esperan la sesión. Si tras una caída hay deformidad visible, no puedes apoyar el pie o el dolor es intenso, acude primero a una urgencia para descartar una fractura. Y si el dolor lumbar viene con debilidad o adormecimiento de las piernas, o con pérdida de control de la orina o las deposiciones, consulta de urgencia.",
                "faqsLocales": [
                    {
                        "q": "Me caí y me duele mucho la muñeca, ¿voy primero a urgencia o llamo al kinesiólogo?",
                        "a": "Primero a urgencia, para descartar una fractura. En la comuna hay urgencia 24 h de adultos en el Hospital San Juan de Dios y en la ex Posta Central. Con el diagnóstico y las indicaciones médicas, la kinesiología a domicilio puede empezar cuando corresponda."
                    },
                    {
                        "q": "Tengo jornadas largas, ¿pueden atenderme el fin de semana?",
                        "a": "Sí, se atiende de lunes a domingo y la hora se coordina contigo. La sesión, de unos 60 minutos, es siempre en tu domicilio, dentro de las comunas con cobertura."
                    }
                ]
            }
        ]
    },
    "la-pintana": {
        "centrosSalud": [
            {
                "nombre": "Hospital Padre Hurtado (Esperanza 2150)",
                "tipo": "hospital público",
                "nota": "Ubicado en San Ramón; es el hospital de referencia de La Pintana. Urgencia 24 h adulto y pediátrica"
            },
            {
                "nombre": "SAR Santiago de Nueva Extremadura (Juanita 13558)",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia comunal dentro de La Pintana; conviene confirmar horario y funcionamiento antes de salir"
            },
            {
                "nombre": "Hospital Dr. Sótero del Río",
                "tipo": "hospital público",
                "nota": "Ubicado en Puente Alto; recibe las derivaciones de alta complejidad de la red sur oriente"
            },
            {
                "nombre": "SAPU Pablo de Rokha",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria del CESFAM; conviene confirmar horario y tipo de atención antes de ir"
            },
            {
                "nombre": "SAPU Santo Tomás",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria del CESFAM; conviene confirmar horario y tipo de atención antes de ir"
            },
            {
                "nombre": "SAPU San Rafael",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria del CESFAM; conviene confirmar horario y tipo de atención antes de ir"
            },
            {
                "nombre": "CESFAM San Rafael, Santo Tomás, Pablo de Rokha, El Roble, Flor Fernández y Santiago de Nueva Extremadura",
                "tipo": "CESFAM",
                "nota": "Atención primaria por sector; son el lugar de los controles y de las derivaciones"
            },
            {
                "nombre": "Centro Comunitario de Rehabilitación (CCR) y COSAM La Pintana",
                "tipo": "centro comunitario",
                "nota": "Rehabilitación comunitaria y salud mental de la red pública local; referencia, sin convenio con KINEUM"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en La Pintana: llegar hasta el pasaje cuando el Metro todavía no llega",
            "parrafos": [
                "La Pintana queda en el extremo sur del Gran Santiago, a unos 16 kilómetros del centro, y todavía no tiene Metro en operación: la Línea 9 está en obras por Avenida Santa Rosa. Por eso el kinesiólogo llega en vehículo con la camilla y el equipamiento, y entra hasta el pasaje donde vives. Al agendar conviene dejar una referencia clara del acceso, porque en los sectores de vivienda social los pasajes son angostos.",
                "La comuna es de casas pareadas y de blocks de tres o cuatro pisos sin ascensor. Si vives en un tercer piso, el kinesiólogo sube la camilla plegada por la escalera y arma la sesión con el espacio que haya; si el auto no llega hasta la puerta, avísalo al coordinar. Hacia el borde surponiente, por el sector de parcelas y el Campus Antumapu, las direcciones cuestan más de ubicar: un punto de referencia en Avenida Observatorio o en Santa Rosa ahorra vueltas.",
                "El hospital base queda en San Ramón, el Padre Hurtado, y la alta complejidad se deriva al Sótero del Río, en Puente Alto: ninguna derivación se resuelve dentro de la comuna. Si vuelves de un alta, junta la epicrisis y las indicaciones médicas para la evaluación inicial gratuita; KINEUM atiende de forma particular, sin convenio con esos centros. Ante una urgencia llama al SAMU 131; dentro de la comuna está el SAR de Juanita 13558, cuyo horario conviene confirmar antes de salir."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En La Pintana la vida de una persona mayor suele resolverse en pocas cuadras: el almacén del pasaje, el CESFAM de su sector y poco más. Cuando aparece el miedo a caerse, ese radio se achica hasta la pieza y la pérdida de fuerza avanza rápido. En la sesión trabajamos lo que sostiene la independencia dentro de una vivienda como la tuya: levantarse del sillón y de la cama sin impulso, girar sin perder el equilibrio en un pasillo angosto, entrar y salir del baño. Si vive en un block de tres o cuatro pisos sin ascensor, la escalera del edificio es el objetivo que más le cambia el día, y se entrena de a pocos peldaños con la baranda que existe. Si vive en casa pareada, revisamos el umbral de la entrada, el desnivel del antejardín y el piso del patio. Todo el trabajo se hace en el domicilio y en su acceso inmediato. Después de una caída con golpe en la cabeza, confusión o dolor que no cede, lo primero es la evaluación médica.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en San Rafael y ya casi no sale de la casa por miedo a caerse. ¿Eso se puede trabajar?",
                        "a": "Sí. Se parte adentro, con fuerza de piernas, equilibrio y la técnica para levantarse y girar, y se practica en un escalón firme de altura parecida a la de la escalera o el umbral que tiene que usar. Si el kinesiólogo lo estima seguro, se avanza hasta el acceso de la casa. El ritmo depende de cada persona y no tiene un plazo fijo."
                    },
                    {
                        "q": "Somos varios en la casa y el living se usa todo el día. ¿Alcanza el espacio para las sesiones?",
                        "a": "Habitualmente sí. Basta correr una silla o una mesa liviana para dejar un espacio firme junto a la cama o a una pared; no hay que mover muebles pesados ni dejar la casa inutilizable. Cuando adentro no se puede, el antejardín o el patio sirven igual, siempre que el piso esté parejo y seco."
                    }
                ],
                "seoTitle": "Kinesiología Geriátrica a Domicilio en La Pintana",
                "seoDescription": "Kinesiólogo para adulto mayor a domicilio en La Pintana: fuerza, equilibrio y la escalera del block, trabajados en tu casa. Evaluación inicial gratuita.",
                "keywords": [
                    "kinesiólogo adulto mayor a domicilio La Pintana",
                    "kinesiología geriátrica La Pintana",
                    "kinesiólogo para adulto mayor La Pintana",
                    "rehabilitación adulto mayor a domicilio La Pintana",
                    "prevención de caídas adulto mayor La Pintana",
                    "kinesiólogo a domicilio La Pintana",
                    "kinesiología domiciliaria adulto mayor zona sur Santiago"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Volver a casa en La Pintana después de una operación de cadera, rodilla u hombro casi siempre implica llegar desde fuera de la comuna: el hospital de referencia es el Padre Hurtado, en San Ramón, y la alta complejidad se deriva al Sótero del Río, en Puente Alto. Repetir ese viaje dos o tres veces por semana para rehabilitarte, sin Metro y dependiendo de la micro por Santa Rosa, es justo lo que evitas con las sesiones en casa. En la evaluación inicial gratuita revisamos tu epicrisis, la carga que autorizó tu cirujano y los rangos de movimiento permitidos, y con eso armamos el plan dentro de tu vivienda: pasar del auto al pasaje, cruzar el umbral, moverte con muletas o andador en un pasillo angosto y ordenar la pieza para dormir sin girar sobre la zona operada. Si la herida se enrojece o supura, aparece fiebre o se hincha la pantorrilla, consulta el mismo día: de noche, el SAR de Juanita 13558; si tu equipo tratante indicó volver, el Padre Hurtado. Si te falta el aire de golpe, no viajes por tu cuenta: llama al SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "Me operaron en el Hospital Padre Hurtado y vivo en La Pintana. ¿Pueden atenderme en mi casa?",
                        "a": "Sí, la atención es particular y no depende del lugar donde te operaron; KINEUM no tiene convenio con ese hospital ni con ningún otro. Trabajamos siguiendo las indicaciones escritas de tu cirujano, así que ten a mano la epicrisis y el papel con las restricciones de carga. Recibes boleta de honorarios electrónica para pedir reembolso en tu Isapre o seguro complementario, según tu plan."
                    },
                    {
                        "q": "No tengo cómo llegar a los controles después del alta. ¿La kinesiología en casa los reemplaza?",
                        "a": "No. Los controles médicos y el retiro de puntos los hace tu equipo tratante y no se pueden reemplazar con kinesiología. Lo que sí hacemos es preparar ese traslado: practicar el trayecto desde la pieza hasta la puerta, el uso de las muletas en el pasaje y cómo subir a un auto, para que ir al control sea más seguro."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica en Casa en La Pintana",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en La Pintana: retomas tu recuperación en casa, sin viajar a San Ramón ni a Puente Alto cada semana.",
                "keywords": [
                    "rehabilitación postquirúrgica a domicilio La Pintana",
                    "kinesiología post operatoria La Pintana",
                    "kinesiólogo después de operación La Pintana",
                    "rehabilitación rodilla a domicilio La Pintana",
                    "kinesiología post cirugía cadera La Pintana",
                    "kinesiólogo a domicilio La Pintana",
                    "rehabilitación en casa tras el alta La Pintana"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "Antes de la primera sesión conviene dejar resuelto el plan de la madrugada, porque en La Pintana no hay Metro y trasladar a un niño que respira mal depende del auto o de la micro por Santa Rosa. Si respira muy rápido, se le hunden las costillas, se queja al botar el aire, se pone morado o deja de tomar pecho, y en un adulto si falta el aire estando sentado y quieto, eso no espera la sesión: llama al SAMU 131. La urgencia con 24 horas confirmadas para adultos y niños es la del Hospital Padre Hurtado, en San Ramón; dentro de la comuna quedan más cerca el SAR de Juanita 13558 y los SAPU de los CESFAM, cuyo horario y funcionamiento conviene confirmar antes de salir. En la visita trabajamos despeje de secreciones, ejercicios respiratorios y el uso del inhalador con aerocámara cuando el médico lo indicó, y dejamos anotado qué observar entre una visita y otra: cuántas veces tosió de noche, si comió igual que siempre y si durmió sin despertarse, algo que cuesta distinguir cuando duermen varios niños en la misma pieza.",
                "faqsLocales": [
                    {
                        "q": "Es de madrugada y mi hijo respira con esfuerzo. ¿A dónde voy desde La Pintana?",
                        "a": "Si la dificultad para respirar es marcada, llama al SAMU 131 en vez de trasladarlo por tu cuenta. La urgencia pediátrica con 24 horas confirmadas es la del Hospital Padre Hurtado, en San Ramón. Dentro de la comuna te queda más cerca el SAR de Juanita 13558, pero conviene confirmar su horario y funcionamiento antes de salir. La kinesiología respiratoria no reemplaza la atención de urgencia."
                    },
                    {
                        "q": "Mi hijo quedó con muchas flemas después de una bronquitis. ¿Sirve una sesión en la casa?",
                        "a": "Suele ayudar cuando el niño respira tranquilo y solo le cuesta eliminar secreciones, idealmente con indicación de su pediatra. Si tiene señales de alarma, la sesión no corresponde: primero urgencia. Atendiéndolo en casa te ahorras la sala de espera y el traslado con un niño resfriado."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio La Pintana",
                "seoDescription": "Kinesiología respiratoria a domicilio en La Pintana para niños y adultos: despeje de secreciones y señales de alarma claras, de lunes a domingo.",
                "keywords": [
                    "kinesiología respiratoria a domicilio La Pintana",
                    "kinesiólogo respiratorio La Pintana",
                    "kinesiología respiratoria niños La Pintana",
                    "kinesiólogo a domicilio bronquitis La Pintana",
                    "kinesiología respiratoria adulto mayor La Pintana",
                    "kinesiólogo a domicilio La Pintana",
                    "kinesiología respiratoria domiciliaria zona sur Santiago"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Después de un ACV la persona vuelve a La Pintana desde el Hospital Padre Hurtado, en San Ramón, o desde el Sótero del Río, en Puente Alto, y la familia queda a cargo del día a día en una casa que casi nunca estaba preparada para eso. La rehabilitación neurológica a domicilio da continuidad a lo que se inició en el hospital: partimos de la epicrisis y de las indicaciones del neurólogo, y desde ahí trabajamos control de tronco, traslados, equilibrio y marcha, al ritmo que permita cada caso. También adaptamos el recorrido real: de qué lado dejar la cama, cómo pasar el umbral de la entrada y cómo maniobrar la silla de ruedas en un pasaje angosto o en el antejardín. Si además asisten al Centro Comunitario de Rehabilitación o al CESFAM del sector, ordenamos las sesiones para no chocar con esos horarios; KINEUM atiende de forma particular, sin convenio con la red pública. Ante pérdida brusca de fuerza, boca desviada o habla enredada, llama al 131 y deja a alguien en la bocacalle con el portón abierto: en pasaje angosto la ambulancia pierde minutos buscando la casa.",
                "faqsLocales": [
                    {
                        "q": "Mi papá quedó en silla de ruedas y vivimos en un pasaje angosto. ¿Se puede sacar a la calle?",
                        "a": "Habitualmente sí, y se practica dentro de la sesión: el paso del umbral, el giro en el pasaje y el manejo de la silla en la vereda. Como el terreno de la comuna no tiene pendientes, el empuje se complica menos. Enseñamos también la técnica a quien lo cuida, para que nadie se lesione la espalda."
                    },
                    {
                        "q": "Ya va al Centro Comunitario de Rehabilitación de la comuna. ¿Tiene sentido sumar kinesiología en casa?",
                        "a": "Puede complementarlo, porque en casa se trabaja el entorno real: la cama, el baño, el umbral y los traslados que hace todos los días. Conviene contarle al kinesiólogo qué se está haciendo allá para no repetir ni sobrecargar. Son servicios independientes: KINEUM no tiene convenio con la red pública."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica en Casa en La Pintana",
                "seoDescription": "Rehabilitación neurológica a domicilio en La Pintana tras un ACV: marcha, traslados y apoyo al cuidador en tu propia casa, sin salir de la comuna.",
                "keywords": [
                    "rehabilitación neurológica a domicilio La Pintana",
                    "kinesiología neurológica La Pintana",
                    "kinesiólogo para ACV a domicilio La Pintana",
                    "rehabilitación después de un ACV La Pintana",
                    "kinesiología Parkinson a domicilio La Pintana",
                    "kinesiólogo a domicilio La Pintana",
                    "rehabilitación neurológica domiciliaria zona sur Santiago"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Un esguince, un lumbago o un hombro que duele al levantar el brazo se tratan después del diagnóstico, y en La Pintana conseguirlo ya es un trámite aparte: la radiografía y el traumatólogo quedan fuera de la comuna. Si el dolor apareció tras un golpe fuerte, hay deformidad o no logras apoyar el pie, parte por descartar una fractura en un servicio de urgencia: el SAR de Juanita 13558, confirmando antes su horario, o el Hospital Padre Hurtado, en San Ramón. Con el diagnóstico en mano, el trabajo en casa se arma sobre las cargas que de verdad haces: llevar las bolsas de la feria desde donde te deja la micro hasta la puerta, agacharte en un patio chico sin castigar la espalda, aguantar de pie esperando en Santa Rosa. Si trabajas en las parcelas del sector sur o en la feria, sumamos levantar peso desde el suelo y apoyo en terreno irregular, con progresión controlada, para que el alta no dependa solo de que deje de doler en reposo.",
                "faqsLocales": [
                    {
                        "q": "Tengo lumbago y subo las compras a un tercer piso sin ascensor. ¿Cuándo puedo volver a hacerlo?",
                        "a": "No hay una fecha fija: depende de cómo evolucione el dolor y de la fuerza que recuperes. El trabajo habitual es progresivo, partiendo con cargas livianas y buena técnica para agacharse, y recién después se suma la escalera con peso. Si el dolor baja a la pierna o hay adormecimiento, corresponde evaluación médica."
                    },
                    {
                        "q": "¿Necesito una radiografía o una orden médica para empezar?",
                        "a": "La evaluación inicial gratuita sirve para orientarte y ver si corresponde consultar antes a un médico; el plan de tratamiento se arma con la indicación médica. Si ya te evaluaron, trae el informe o la radiografía. Cuando hay señales de fractura o algo no calza, te derivamos a evaluación médica en lugar de tratar."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica a Domicilio La Pintana",
                "seoDescription": "Kinesiología traumatológica a domicilio en La Pintana: esguinces, lumbago y hombro doloroso tratados en tu casa, de lunes a domingo.",
                "keywords": [
                    "kinesiología traumatológica a domicilio La Pintana",
                    "kinesiólogo para lumbago La Pintana",
                    "kinesiólogo esguince de tobillo La Pintana",
                    "kinesiología hombro doloroso La Pintana",
                    "rehabilitación de fractura a domicilio La Pintana",
                    "kinesiólogo a domicilio La Pintana",
                    "kinesiólogo particular La Pintana"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio La Pintana, Todos los Días",
            "description": "Kinesiología a domicilio en La Pintana: sesiones en tu casa en El Castillo, Santo Tomás o San Rafael. Evaluación inicial gratuita, lunes a domingo.",
            "keywords": [
                "kinesiólogo a domicilio La Pintana",
                "kinesiología a domicilio La Pintana",
                "kinesiólogo La Pintana",
                "kinesiólogo particular La Pintana",
                "rehabilitación a domicilio La Pintana",
                "kinesiología domiciliaria La Pintana",
                "kinesiólogo a domicilio zona sur Santiago"
            ]
        }
    },
    "puente-alto": {
        "centrosSalud": [
            {
                "nombre": "Complejo Asistencial Dr. Sótero del Río",
                "tipo": "Hospital público",
                "nota": "Urgencia 24 h adulto y pediátrica, sobre Av. Concha y Toro, con estación de Metro del mismo nombre"
            },
            {
                "nombre": "SAR CESFAM Padre Manuel Villaseca (Luis Matte Larraín 2312, sector Oriente)",
                "tipo": "Servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria del sector oriente de la comuna; confirma el horario antes de ir"
            },
            {
                "nombre": "SAR CESFAM Cardenal Raúl Silva Henríquez (San Pedro 3345, El Volcán, Bajos de Mena)",
                "tipo": "Servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria en Bajos de Mena; confirma el horario antes de ir"
            },
            {
                "nombre": "SAPU CESFAM Vista Hermosa (El Volcán 04549, Casas Viejas)",
                "tipo": "Servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria del sector; no está confirmado que atienda las 24 horas, revisa su horario antes de ir"
            },
            {
                "nombre": "SAPU CESFAM Karol Wojtyla (Curaco de Vélez 4110, Villa Pedro Lira, Bajos de Mena)",
                "tipo": "Servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria del sector; no está confirmado que atienda las 24 horas, revisa su horario antes de ir"
            },
            {
                "nombre": "SAPU CESFAM Laurita Vicuña (Av. Ejército Libertador 2433, Villa La Foresta)",
                "tipo": "Servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria del sector; no está confirmado que atienda las 24 horas, revisa su horario antes de ir"
            },
            {
                "nombre": "CESFAM Alejandro del Río (Gandarillas 105, sector centro)",
                "tipo": "CESFAM",
                "nota": "Atención primaria, sin servicio de urgencia; sirve para controles y derivaciones"
            },
            {
                "nombre": "Centro de Referencia de Salud (CRS) Hospital Provincia Cordillera",
                "tipo": "Centro de referencia de salud",
                "nota": "Consultas y procedimientos de especialidad de la red pública, sin servicio de urgencia"
            },
            {
                "nombre": "Clínica Policenter Puente Alto (Av. 21 de Mayo 165, junto al Metro Plaza de Puente Alto)",
                "tipo": "Clínica privada",
                "nota": "Atención privada en el centro de la comuna; no está confirmado que tenga urgencia 24 h"
            },
            {
                "nombre": "Clínica Cruz Nacional Puente Alto (Av. Concha y Toro 908)",
                "tipo": "Clínica privada",
                "nota": "Atención privada sobre Av. Concha y Toro; no está confirmada la atención nocturna continua"
            },
            {
                "nombre": "IntegraMédica Puente Alto",
                "tipo": "Centro médico",
                "nota": "Centro médico y dental, sin servicio de urgencia"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Puente Alto: de los blocks de Bajos de Mena a las parcelas de Las Vizcachas",
            "parrafos": [
                "En Puente Alto la vivienda cambia mucho de un sector a otro y eso define cómo se arma la sesión. En Bajos de Mena, El Volcán y Villa Pedro Lira hay muchos blocks de pocos pisos sin ascensor: el kinesiólogo sube la camilla y el equipo por la escalera, y los ejercicios se adaptan al espacio que hay. En el sector centro, en torno a la Plaza de Puente Alto y Av. Concha y Toro, predominan las casas ya consolidadas, y hacia Las Vizcachas y El Peral aparecen parcelas con portón y acceso por camino interior.",
                "Como la comuna es grande, las distancias internas pesan: ir de Bajos de Mena a Casas Viejas toma su tiempo. Por eso agendamos por sector, con hora convenida, y si vives en condominio cerrado te pedimos dejar avisado en conserjería el nombre del kinesiólogo.",
                "Muchos pacientes llegan a la kinesiología después de una hospitalización en el Complejo Asistencial Dr. Sótero del Río, que está en la misma comuna, sobre Av. Concha y Toro. Trae la epicrisis y las indicaciones a la evaluación inicial gratuita: KINEUM es un servicio particular, sin convenio con ese ni con ningún otro centro. Ante una urgencia, llama al SAMU (131); la única urgencia de la comuna confirmada como 24 horas es la del Sótero del Río, y en los SAPU y SAR conviene revisar el horario antes de ir."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En Puente Alto, buena parte del trabajo con adultos mayores pasa por quitarles traslados del día a día. La comuna es grande y cruzarla de un extremo a otro para una sesión puede tomar más que la sesión misma, así que el kinesiólogo llega al sector donde vive la persona y deja las salidas para lo que sí las exige: los controles en su CESFAM o las horas de especialidad en el Centro de Referencia de Salud Hospital Provincia Cordillera. En los blocks sin ascensor de Bajos de Mena o Villa Pedro Lira, la escalera común es el punto que más pesa, así que se entrena fuerza de piernas y equilibrio dentro del departamento y, cuando el kinesiólogo lo estima seguro, ese tramo se practica acompañado. En los condominios cerrados de Gabriela Oriente conviene dejar avisado en conserjería para no recortar la sesión. Y una advertencia: si hubo una caída con golpe en la cabeza, confusión o vómitos, eso no se maneja con ejercicios y corresponde consultar de inmediato en una urgencia.",
                "faqsLocales": [
                    {
                        "q": "Vivimos en Bajos de Mena y a mi mamá le cuesta cruzar la comuna para cada sesión, ¿el kinesiólogo llega hasta allá?",
                        "a": "Sí. Bajos de Mena está dentro de la cobertura y la visita se agenda por sector, con hora convenida, así el único traslado que ella tiene que hacer es el de sus controles médicos. La primera visita se coordina habitualmente dentro de 24 a 48 horas, según agenda."
                    },
                    {
                        "q": "Vivimos en un condominio cerrado en Gabriela Oriente, ¿cómo entra el kinesiólogo?",
                        "a": "Deja avisado en conserjería el nombre del kinesiólogo y el horario, así el ingreso es directo y no se pierden minutos de la sesión, que dura alrededor de 60 minutos. Si el número no se ve desde la calle o el acceso es por portón, mándanos una referencia al WhatsApp +56 9 9967 9593."
                    }
                ],
                "seoTitle": "Kinesiología Geriátrica a Domicilio Puente Alto | KINEUM",
                "seoDescription": "Kinesiólogo a domicilio para adultos mayores en Puente Alto: escaleras de block, caídas y marcha. Evaluación inicial gratuita.",
                "keywords": [
                    "kinesiología geriátrica Puente Alto",
                    "kinesiólogo adulto mayor a domicilio Puente Alto",
                    "rehabilitación adulto mayor Puente Alto",
                    "kinesiólogo adulto mayor Bajos de Mena",
                    "prevención de caídas adulto mayor Puente Alto",
                    "kinesiología para ancianos Puente Alto"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Después de una prótesis de cadera o rodilla, o de una fractura operada, el alta del Complejo Asistencial Dr. Sótero del Río te deja en casa con la pauta del cirujano y un problema práctico: si vives en un block de Bajos de Mena o en Casas Viejas, cada sesión fuera de la comuna significa caminar hasta el paradero, tomar el Metro Línea 4 desde Plaza de Puente Alto y, a la vuelta, enfrentar la escalera del edificio con muletas o bastón. La rehabilitación postquirúrgica a domicilio te ahorra ese trayecto. El kinesiólogo trabaja con tu epicrisis y las restricciones de carga que te indicaron, y entrena lo que tu casa te exige cada día: pararte de la cama, entrar al baño, subir los tramos hasta tu piso. Si aparece fiebre, secreción en la herida o dolor con hinchazón en la pantorrilla, consulta pronto; ante falta de aire repentina o dolor en el pecho, llama al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "Me operaron y me dieron el alta en el Sótero del Río, ¿cuándo puede ser la primera sesión en mi casa?",
                        "a": "Depende de lo que haya indicado tu cirujano sobre cuándo partir y con qué restricciones. Escríbenos al +56 9 9967 9593 apenas tengas la fecha de alta: en Puente Alto la visita se coordina según agenda y sector, habitualmente dentro de 24 a 48 horas."
                    },
                    {
                        "q": "Vivo en Las Vizcachas, camino a San José de Maipo, ¿llegan hasta allá después de una operación?",
                        "a": "Sí, el sector precordillerano de la comuna está dentro de la cobertura. Como el acceso suele ser por camino interior, mándanos una referencia del portón o de la esquina más cercana. El horario se fija por sector para llegar a la hora convenida."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica Puente Alto | KINEUM",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en Puente Alto tras el alta del Sótero del Río o de una clínica. Evaluación inicial gratuita.",
                "keywords": [
                    "rehabilitación postquirúrgica a domicilio Puente Alto",
                    "kinesiología post operatoria Puente Alto",
                    "rehabilitación prótesis de rodilla Puente Alto",
                    "kinesiólogo después de una operación Puente Alto",
                    "rehabilitación tras el alta Sótero del Río",
                    "kinesiología post fractura Puente Alto"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "La kinesiología respiratoria a domicilio se indica sobre todo en lactantes y preescolares con cuadros bronquiales, y en adultos que vuelven a casa tras una neumonía. En Puente Alto hay algo que conviene tener resuelto antes de que llegue la noche: la urgencia de la comuna confirmada como 24 horas, con atención pediátrica, es la del Complejo Asistencial Dr. Sótero del Río, sobre Av. Concha y Toro. Los SAPU y SAR de la red comunal, como el de San Pedro 3345 en Bajos de Mena o el de Vista Hermosa en Casas Viejas, atienden urgencia primaria, pero sus horarios cambian y hay que confirmarlos antes de necesitarlos. Si tu guagua respira muy rápido, se le hunden las costillas al respirar, tiene los labios morados o deja de alimentarse, no esperes la sesión: llama al SAMU (131) o acude a una urgencia. En la visita hacemos, en su propia pieza, las técnicas de despeje y los ejercicios que indicó el médico, y te enseñamos a reconocer esas señales. La kinesiología complementa el tratamiento médico, no lo reemplaza.",
                "faqsLocales": [
                    {
                        "q": "Mi hijo empeora de noche y vivimos en Bajos de Mena, ¿dónde lo llevo?",
                        "a": "Si lo ves con mucha dificultad para respirar o decaído, llama al SAMU (131). Para trasladarlo de noche, la urgencia con atención pediátrica confirmada las 24 horas es la del Sótero del Río, sobre Av. Concha y Toro. El SAR del sector puede estar abierto, pero confirma su horario antes de salir."
                    },
                    {
                        "q": "El pediatra indicó kinesiología respiratoria y yo trabajo toda la semana, ¿atienden sábado o domingo?",
                        "a": "Sí, atendemos de lunes a domingo y la hora se coordina por sector. Si en el intertanto tu hijo empeora, la sesión no reemplaza la urgencia: ante señales de alarma, urgencia o SAMU (131)."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria Puente Alto | KINEUM",
                "seoDescription": "Kinesiología respiratoria a domicilio en Puente Alto y dónde ir de noche: urgencia pediátrica 24 h del Sótero del Río. Evaluación gratuita.",
                "keywords": [
                    "kinesiología respiratoria Puente Alto",
                    "kinesiólogo respiratorio a domicilio Puente Alto",
                    "kinesiología respiratoria infantil Puente Alto",
                    "kine respiratoria a domicilio Puente Alto",
                    "kinesiología respiratoria bebé Puente Alto",
                    "bronquitis obstructiva kinesiología Puente Alto"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Tras un ACV, el alta hospitalaria abre la etapa más larga, y en Puente Alto la continuidad depende de algo prosaico: quién traslada a la persona. Los controles de especialidad suelen quedar en el Centro de Referencia de Salud Hospital Provincia Cordillera o en el propio Complejo Asistencial Dr. Sótero del Río, y salir para eso ya ocupa buena parte del día; sumar dos o tres viajes semanales de rehabilitación, por Av. Concha y Toro o la Autopista Acceso Sur, suele ser lo que termina cortando el tratamiento. Por eso la rehabilitación neurológica se hace donde la persona tiene que volver a moverse: control de tronco, paso de la cama a la silla, equilibrio de pie y marcha con o sin ayuda técnica, según lo que indique su neurólogo o fisiatra. También se aplica en enfermedades como el Parkinson. Buena parte de la sesión es enseñarle a quien cuida, casi siempre un familiar, a asistir sin lesionarse la espalda. Si aparecen de golpe pérdida de fuerza, boca desviada o dificultad para hablar, llama de inmediato al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "Los controles de mi mamá quedaron en el CRS Hospital Provincia Cordillera, ¿cómo se coordina la kinesiología con esas horas?",
                        "a": "Nos dices qué días tiene control y agendamos las sesiones en los otros, para que no se le junte el traslado con el ejercicio. Trae la epicrisis y las indicaciones de su médico a la evaluación inicial gratuita: el plan se arma siguiendo lo que ellos indicaron."
                    },
                    {
                        "q": "Soy la única que cuida a mi mamá, ¿me pueden enseñar a moverla sin lesionarme?",
                        "a": "Sí. Parte de las visitas se dedica a enseñarte las transferencias paso a paso, cómo ubicar la silla, cómo cuidar tu espalda y qué ejercicios simples repetir los días sin kinesiólogo, según lo que corresponda a su caso."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica Puente Alto | KINEUM",
                "seoDescription": "Rehabilitación neurológica a domicilio en Puente Alto: continuidad tras el alta del Sótero del Río, sin salir de tu casa. Evaluación gratuita.",
                "keywords": [
                    "rehabilitación neurológica a domicilio Puente Alto",
                    "kinesiología neurológica Puente Alto",
                    "rehabilitación post ACV Puente Alto",
                    "kinesiólogo Parkinson Puente Alto",
                    "kinesiología domiciliaria ACV Puente Alto",
                    "rehabilitación neurológica Bajos de Mena"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Esguinces de tobillo, lumbagos, tendinopatías de hombro y secuelas de fracturas se tratan en tu casa, y en Puente Alto eso evita un trayecto que con muletas se hace largo y caro. La evaluación empieza por lo que necesitas volver a hacer. La comuna sube de poniente a oriente: si vives hacia Las Vizcachas o El Peral, entre calles en pendiente y accesos por caminos interiores, la meta no es caminar en plano, sino volver a subir tu propia calle cargando bolsas, y eso se trabaja por etapas, primero en el pasillo de la casa y después en el desnivel de la cuadra. Si vives en el sector centro o hacia Gabriela, el objetivo suele ser otro: aguantar la jornada de pie o el trayecto diario hasta el paradero. ¿Y si el golpe fue reciente? Antes de cualquier ejercicio hay que descartar una fractura con radiografía, y para eso está la urgencia del Complejo Asistencial Dr. Sótero del Río; si el cuadro parece menor, el SAPU de tu sector sirve para esa primera evaluación.",
                "faqsLocales": [
                    {
                        "q": "Me doblé el tobillo bajando por una calle en pendiente en Las Vizcachas, ¿llamo al kinesiólogo o voy a urgencia?",
                        "a": "Si no puedes apoyar el pie, ves deformidad o mucha hinchazón, ve primero a una urgencia con radiografía, como la del Sótero del Río, para descartar una fractura. Con el diagnóstico en mano, la evaluación inicial gratuita define el plan en tu casa."
                    },
                    {
                        "q": "Tengo hora en el traumatólogo recién en dos semanas, ¿puedo partir la kinesiología antes?",
                        "a": "Depende. Si ya te evaluaron en el SAPU de tu sector o en la urgencia del Sótero del Río y tienes diagnóstico e indicación, sí. Si nadie te ha visto y el dolor viene de un golpe fuerte, primero necesitas esa evaluación médica: la kinesiología complementa el tratamiento, no lo reemplaza."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica Puente Alto | KINEUM",
                "seoDescription": "Kinesiólogo traumatológico a domicilio en Puente Alto: esguinces, lumbago y post fractura en Bajos de Mena o Las Vizcachas.",
                "keywords": [
                    "kinesiología traumatológica Puente Alto",
                    "kinesiólogo a domicilio esguince Puente Alto",
                    "kinesiología para lumbago Puente Alto",
                    "rehabilitación de fractura a domicilio Puente Alto",
                    "kinesiólogo para dolor de espalda Puente Alto",
                    "kinesiología de hombro Puente Alto"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Puente Alto | KINEUM",
            "description": "Kinesiología a domicilio en Puente Alto: sesiones en tu casa en Bajos de Mena, Las Vizcachas o el centro. Evaluación inicial gratuita.",
            "keywords": [
                "kinesiólogo a domicilio Puente Alto",
                "kinesiología a domicilio Puente Alto",
                "kinesiólogo Puente Alto",
                "kinesiología domiciliaria Puente Alto",
                "kinesiólogo a domicilio Bajos de Mena",
                "rehabilitación a domicilio Puente Alto",
                "kinesiólogo particular Puente Alto"
            ]
        }
    },
    "pudahuel": {
        "centrosSalud": [
            {
                "nombre": "SAR La Estrella",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria en Pudahuel; atiende población general, incluidos niños. Los horarios varían según la fuente, confírmalos antes de ir"
            },
            {
                "nombre": "SAR Dr. Gustavo Molina",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria dentro de la comuna; atiende población general, incluidos niños. Confirma el horario antes de ir"
            },
            {
                "nombre": "SAR Violeta Parra",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Funciona junto al CRS Dr. Salvador Allende Gossens, en Teniente Cruz; urgencia primaria de población general, sin atención las 24 h"
            },
            {
                "nombre": "CRS Dr. Salvador Allende Gossens (Teniente Cruz 800)",
                "tipo": "Centro de referencia de salud",
                "nota": "Concentra la atención ambulatoria de especialidades dentro de Pudahuel; no es servicio de urgencia"
            },
            {
                "nombre": "CESFAM Pudahuel Estrella (Av. San Francisco 8698)",
                "tipo": "CESFAM",
                "nota": "Atención primaria del sector La Estrella; controles y derivaciones, sin urgencia 24 h"
            },
            {
                "nombre": "CESFAM Pudahuel Poniente",
                "tipo": "CESFAM",
                "nota": "Atención primaria del sector poniente de la comuna, sin urgencia 24 h"
            },
            {
                "nombre": "CESFAM Cardenal Raúl Silva Henríquez",
                "tipo": "CESFAM",
                "nota": "Atención primaria en Pudahuel; controles médicos y derivaciones, sin urgencia 24 h"
            },
            {
                "nombre": "CECOSF Irene Frei Montalva y Servicio de Urgencia Rural (Camino Noviciado Km 17)",
                "tipo": "Centro comunitario de salud familiar",
                "nota": "Punto de atención del sector rural del poniente; confirma horarios antes de ir"
            },
            {
                "nombre": "COSAM Pudahuel (Santa Corina 8629)",
                "tipo": "Centro de salud mental",
                "nota": "Salud mental comunitaria en la comuna, por derivación; no atiende urgencias"
            },
            {
                "nombre": "Hospital Clínico Félix Bulnes",
                "tipo": "hospital publico",
                "nota": "Está en Cerro Navia, no en Pudahuel. Urgencia 24 h de adultos y pediátrica"
            },
            {
                "nombre": "Hospital San Juan de Dios",
                "tipo": "hospital publico",
                "nota": "Está en Santiago Centro, en la red poniente que cubre a Pudahuel. Urgencia 24 h de adultos y pediátrica"
            },
            {
                "nombre": "Mater Salud",
                "tipo": "clinica privada",
                "nota": "Centro médico ambulatorio en la comuna; consultas con hora, no tiene urgencia 24 h"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Pudahuel: del block de Pudahuel Sur al condominio del poniente",
            "parrafos": [
                "En Pudahuel casi todo depende de en qué lado del aeropuerto vivas. En Pudahuel Norte, Barrancas, La Estrella y Laguna Sur el terreno es plano y llegar con camilla, colchoneta y bandas no tiene misterio; antes de agendar preguntamos el piso y si el block tiene ascensor, porque en Pudahuel Sur muchos no lo tienen. Hacia el poniente confirmamos disponibilidad al agendar: en Ciudad de Los Valles y Lomas de Lo Aguirre se entra por conserjería, y en El Noviciado te pedimos una referencia del acceso.",
                "La urgencia primaria está dentro de la comuna: el SAR La Estrella, el SAR Dr. Gustavo Molina y el SAR Violeta Parra, junto al CRS Dr. Salvador Allende Gossens, en Teniente Cruz. Sus horarios varían, así que conviene confirmarlos antes de necesitarlos. La hospitalización compleja queda fuera: el Hospital Clínico Félix Bulnes, en Cerro Navia, y el Hospital San Juan de Dios, en Santiago Centro. Ante una emergencia, llama al SAMU al 131.",
                "Esa misma división pesa después de un alta: acá el viaje al control no se mide en comunas, sino en cruzar la propia Pudahuel, partida por el aeropuerto y la Ruta 68. Las especialidades ambulatorias se concentran en el CRS Dr. Salvador Allende Gossens y la hospitalización queda fuera, así que sostener sesiones lejos de casa suele ser lo primero que se abandona. KINEUM es particular, sin convenio con esos centros, y atiende de lunes a domingo."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En Pudahuel el problema de un adulto mayor rara vez es solo la casa: es lo que hay entre la casa y el resto de la comuna. Ir a un control al CRS Dr. Salvador Allende Gossens, en Teniente Cruz, o al CESFAM que le corresponde puede significar caminar varias cuadras, subir el peldaño alto de una micro y bajar después con las piernas cansadas. Por eso el plan se arma sobre ese recorrido real: fuerza de piernas, equilibrio al girar y práctica del trayecto hasta el paradero o hasta las estaciones Barrancas o Laguna Sur, con sus escaleras. La puerta de salida también cambia según el sector. En las villas de casas pareadas de Pudahuel Sur hay peldaño de acceso y un antejardín con desnivel, donde el bastón se engancha en la reja o en una baldosa suelta; en los condominios del poniente el trecho hasta la conserjería es largo y parejo, y ahí lo que pesa es la distancia, no el escalón. Si hubo una caída con golpe en la cabeza o dolor intenso, primero va la evaluación médica.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en una villa de Pudahuel Sur y le da miedo salir sola al paradero. ¿Se puede trabajar eso?",
                        "a": "Sí. Cuando la evaluación muestra que es seguro, parte de la sesión se hace en el recorrido real: el peldaño de la casa, la vereda, el desnivel de la solera y la subida a la micro, primero acompañada y con las pausas que necesite. El avance depende de cada persona."
                    },
                    {
                        "q": "Vivo en Ciudad de Los Valles y mi papá casi no camina. ¿Llegan hasta allá?",
                        "a": "Estamos ampliando la atención hacia el poniente de la comuna. Escríbenos al WhatsApp +56 9 9967 9593 con la dirección y el nombre del condominio para confirmar disponibilidad y coordinar la hora; si el edificio tiene conserjería, deja avisado en portería el nombre del kinesiólogo para no perder tiempo en el acceso."
                    }
                ],
                "seoTitle": "Kinesiología Geriátrica a Domicilio en Pudahuel",
                "seoDescription": "Kinesiología geriátrica a domicilio en Pudahuel: equilibrio, fuerza y marcha segura en tu villa, block o condominio. Evaluación inicial gratuita.",
                "keywords": [
                    "kinesiología geriátrica Pudahuel",
                    "kinesiólogo adulto mayor Pudahuel",
                    "kinesiología a domicilio adulto mayor Pudahuel",
                    "rehabilitación adulto mayor Pudahuel",
                    "prevención de caídas Pudahuel",
                    "kinesiólogo geriátrico Barrancas"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "En Pudahuel no hay hospital de alta complejidad: la red pública que cubre a la comuna deriva al Hospital Clínico Félix Bulnes, en Cerro Navia, o al Hospital San Juan de Dios, en Santiago Centro, y las clínicas privadas también quedan fuera. Te hayas operado donde te hayas operado, el alta llega con indicaciones claras y con un problema práctico: cada sesión de rehabilitación implicaría cruzar Américo Vespucio o San Pablo con una rodilla, una cadera o un hombro recién operados, y volver en hora punta. La rehabilitación postquirúrgica a domicilio evita ese viaje. En la evaluación inicial gratuita se revisan la epicrisis y la pauta del cirujano —carga permitida, rangos de movimiento, cuidado de la herida— y con eso se trabaja en tu casa. Si vives en un block sin ascensor o en un condominio del poniente, la escalera y el trecho hasta el estacionamiento se practican antes de que tengas que usarlos para ir a un control. Fiebre, herida enrojecida o con secreción, o dolor e hinchazón en la pantorrilla requieren consulta médica; ante falta de aire repentina o dolor en el pecho, llama al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "Me operan en el Hospital Félix Bulnes. ¿Pueden seguir la rehabilitación en mi casa en Pudahuel?",
                        "a": "Sí, siempre que tu equipo tratante lo indique. Con la epicrisis y las indicaciones de alta coordinamos la evaluación inicial gratuita en tu domicilio. KINEUM es un servicio particular y no tiene convenio con ese hospital: contratas directamente y recibes boleta de honorarios electrónica para pedir reembolso en tu Isapre o seguro complementario, según tu plan."
                    },
                    {
                        "q": "Me operaron la cadera y los controles me quedan fuera de la comuna. ¿Cómo hago ese viaje?",
                        "a": "Conviene planificarlo: ir acompañado, salir fuera de la hora punta y respetar la carga que autorizó tu cirujano. En las sesiones practicamos antes el tramo difícil, como bajar la escalera del block o entrar y salir de un auto, que suele ser lo que más cuesta después de una cadera."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica a Domicilio Pudahuel",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en Pudahuel tras el alta: rodilla, cadera y hombro en tu casa, sin cruzar la comuna cada sesión.",
                "keywords": [
                    "rehabilitación postquirúrgica Pudahuel",
                    "kinesiología postoperatoria Pudahuel",
                    "kinesiólogo a domicilio Pudahuel postoperado",
                    "rehabilitación rodilla a domicilio Pudahuel",
                    "rehabilitación cadera Pudahuel",
                    "kinesiología después de operación Pudahuel"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En kinesiología respiratoria importa tanto la sesión como saber adónde ir cuando algo se complica, y en Pudahuel eso se decide sobre todo de noche. Dentro de la comuna no encontramos una clínica privada con urgencia las 24 horas, así que a esa hora el plan depende de si el SAR está abierto: el SAR La Estrella, el SAR Dr. Gustavo Molina y el SAR Violeta Parra, junto al CRS Dr. Salvador Allende Gossens en Teniente Cruz, atienden urgencia primaria de población general, incluidos niños, y sus horarios varían según la fuente, así que conviene confirmarlos y anotarlos antes de necesitarlos. La urgencia hospitalaria que cubre a Pudahuel está fuera de la comuna: el Hospital Clínico Félix Bulnes, en Cerro Navia, y el Hospital San Juan de Dios, en Santiago Centro, ambos con urgencia de adultos y pediátrica. Ten decidido de antemano a cuál te conviene ir desde tu sector, porque no es lo mismo salir desde Laguna Sur que desde El Noviciado, donde el camino rural agrega su propio tramo. Ante respiración muy rápida, costillas que se hunden, labios morados o rechazo del alimento, no esperes la sesión: llama al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "Mi hijo respira con esfuerzo de noche y vivimos en Pudahuel Sur. ¿Adónde lo llevo?",
                        "a": "Si hay señales de alarma, llama al SAMU al 131. Los SAR de la comuna atienden urgencia primaria de población general, incluidos niños, pero no son urgencia pediátrica hospitalaria y sus horarios varían, así que confírmalos. La urgencia de hospital que cubre a Pudahuel está en el Félix Bulnes, en Cerro Navia, y en el San Juan de Dios, en Santiago Centro. La kinesiología respiratoria no reemplaza esa atención."
                    },
                    {
                        "q": "Vivimos en El Noviciado y quedamos lejos de todo. ¿Qué conviene tener listo?",
                        "a": "Ten anotada la dirección con una referencia clara del camino, el teléfono del SAMU (131), quién puede manejar a cualquier hora y las indicaciones del médico, incluido el inhalador si lo usan. Ante señales de alarma se sale de inmediato; el kinesiólogo trabaja el día a día, no la urgencia."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio en Pudahuel",
                "seoDescription": "Kinesiología respiratoria a domicilio en Pudahuel para niños y adultos: sesiones en casa y señales de alarma claras. Atención de lunes a domingo.",
                "keywords": [
                    "kinesiología respiratoria Pudahuel",
                    "kinesiólogo respiratorio a domicilio Pudahuel",
                    "kinesiología respiratoria niños Pudahuel",
                    "kinesiólogo bronquitis Pudahuel",
                    "kinesiología respiratoria adultos Pudahuel",
                    "kinesiólogo a domicilio Laguna Sur"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Quien vuelve a Pudahuel después de una hospitalización por un ACV vuelve a una comuna sin hospital: el alta la firmaron en el Félix Bulnes, en Cerro Navia, o en el San Juan de Dios, en Santiago Centro, y los controles quedan repartidos entre esos centros, el CESFAM del sector y el CRS Dr. Salvador Allende Gossens, en Teniente Cruz, que concentra las especialidades ambulatorias dentro de la comuna. Ahí aparece la pregunta real: quién lleva y cómo. Sostener terapia tres veces por semana no es lo mismo en Barrancas, con la Línea 5 a pasos pero con torniquetes y escaleras que una hemiparesia no perdona, que en El Noviciado, donde no hay metro y el camino rural obliga a depender de un auto y de quien pueda manejarlo. Esa cuenta suele terminar con las sesiones suspendidas. Trabajar en el domicilio saca ese cálculo del medio: el kinesiólogo llega con la epicrisis y lo indicado por el neurólogo a la vista, y avanza al ritmo que la persona tolera, también en cuadros progresivos como el Parkinson. Si de golpe un brazo deja de responder, la boca se tuerce o cuesta entender lo que dice, llama al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "A mi papá le dieron el alta en el Hospital San Juan de Dios tras un ACV y vivimos en Barrancas. ¿Tiene que seguir viajando para allá?",
                        "a": "Los controles médicos siguen donde su equipo tratante los indique, eso no lo reemplazamos. Lo que cambia es la frecuencia de los viajes: las sesiones de kinesiología se hacen en tu casa, así que solo salen para los controles y no varias veces por semana. KINEUM es particular y no tiene convenio con ese hospital."
                    },
                    {
                        "q": "Mi papá quedó con hemiplejía y vivimos en una casa pareada de Pudahuel Sur con peldaño en la entrada. ¿Se puede trabajar la salida a la vereda?",
                        "a": "Suele poderse, y es un objetivo concreto: el peldaño, el desnivel del antejardín y el portón son el tramo que decide si puede llegar al auto el día del control. Se entrena cuando su equipo médico lo autoriza y la evaluación muestra que es seguro, primero con asistencia y enseñándole a la familia cómo acompañarlo sin cargar con la espalda."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica a Domicilio en Pudahuel",
                "seoDescription": "Rehabilitación neurológica a domicilio en Pudahuel tras un ACV o con Parkinson: continuidad en tu casa, sin cruzar la comuna cada semana.",
                "keywords": [
                    "rehabilitación neurológica Pudahuel",
                    "kinesiología neurológica a domicilio Pudahuel",
                    "rehabilitación ACV Pudahuel",
                    "kinesiólogo Parkinson Pudahuel",
                    "kinesiología a domicilio post ACV Pudahuel",
                    "rehabilitación domiciliaria Pudahuel Norte"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "El aeropuerto y el parque de empresas de Enea marcan los horarios de mucha gente en Pudahuel: turnos rotativos, semanas de noche y jornadas que parten de madrugada. Si ese es tu caso, pesa en la kinesiología traumatológica, porque un hombro doloroso o un lumbago no ceden solo con reposo cuando al tercer día toca volver a levantar, empujar y estar de pie un turno completo, además con el sueño corrido. Por eso la hora se fija según tu ciclo de turnos y no al revés, sábados y domingos incluidos, y la carga se progresa con pesos parecidos a los que manejas. Si vives en Ciudad de Los Valles o Lomas de Lo Aguirre el asunto es otro: casi todo el desplazamiento es en auto y son muchos minutos sentado hasta Américo Vespucio o la Ruta 68, algo que una espalda adolorida nota. Ahí el trabajo incluye cómo te acomodas al volante, las pausas del trayecto y qué hacer al bajarte. Si hay deformidad, no puedes apoyar el pie o el dolor es muy intenso, primero debe verte un médico.",
                "faqsLocales": [
                    {
                        "q": "Hago turnos de noche en el aeropuerto. ¿Pueden atenderme en otro horario o el fin de semana?",
                        "a": "Sí, se atiende de lunes a domingo y la hora se coordina contigo, en tu domicilio. Cada sesión dura alrededor de 60 minutos. Si tu turno rota cada semana, conviene dejar agendadas las próximas sesiones apenas sepas el rol, para que el cambio de turno no corte la continuidad."
                    },
                    {
                        "q": "Me duele la espalda de cargar en la bodega. ¿Basta con ejercicios o necesito un diagnóstico?",
                        "a": "Si el dolor apareció trabajando, informa la lesión a tu empleador: esos casos se atienden por la vía del seguro laboral y no como consulta particular. Fuera de eso, si el dolor baja por la pierna con debilidad o adormecimiento, o aparece pérdida de control de la orina, consulta de urgencia antes de hacer cualquier ejercicio."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica a Domicilio Pudahuel",
                "seoDescription": "Kinesiología traumatológica a domicilio en Pudahuel: lumbago, esguinces y hombro doloroso, con horas que calzan con tus turnos. Evaluación gratuita.",
                "keywords": [
                    "kinesiología traumatológica Pudahuel",
                    "kinesiólogo a domicilio Pudahuel lumbago",
                    "kinesiología esguince Pudahuel",
                    "kinesiólogo hombro Pudahuel",
                    "rehabilitación traumatológica a domicilio Pudahuel",
                    "kinesiólogo dolor de espalda Pudahuel"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Pudahuel y Barrancas",
            "description": "Kinesiología a domicilio en Pudahuel: Pudahuel Norte y Sur, Barrancas, La Estrella y Laguna Sur. Evaluación inicial gratuita, de lunes a domingo.",
            "keywords": [
                "kinesiólogo a domicilio Pudahuel",
                "kinesiología a domicilio Pudahuel",
                "kinesiólogo Pudahuel",
                "kinesiólogo a domicilio Barrancas",
                "kinesiólogo a domicilio Pudahuel Sur",
                "rehabilitación a domicilio Pudahuel",
                "kinesiólogo particular Pudahuel"
            ]
        }
    },
    "maipu": {
        "centrosSalud": [
            {
                "nombre": "Hospital El Carmen Dr. Luis Valentín Ferrada (Camino a Rinconada 1201)",
                "tipo": "Hospital público",
                "nota": "Urgencia 24 h, adulto y pediátrica. Es el hospital público de referencia de la comuna"
            },
            {
                "nombre": "CRS Maipú (Camino a Rinconada 1001)",
                "tipo": "Centro de referencia de salud",
                "nota": "Atención ambulatoria de especialidades, junto al Hospital El Carmen. No es servicio de urgencia"
            },
            {
                "nombre": "SAR Presidenta Michelle Bachelet (Av. Nueva San Martín 776)",
                "tipo": "Servicio de urgencia primaria (SAR)",
                "nota": "Urgencia primaria 24 h, adulto y pediátrica, junto al CESFAM del mismo nombre"
            },
            {
                "nombre": "SAPU del CESFAM Maipú (sobre Av. Pajaritos)",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria con atención pediátrica. No funciona las 24 horas: confirma dirección y horario vigente antes de ir"
            },
            {
                "nombre": "SAPU CESFAM Dra. Ana María Juricic (Av. El Conquistador 1841)",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria con atención pediátrica, en horario acotado. Conviene confirmar el horario antes de ir"
            },
            {
                "nombre": "SAPU CESFAM Dr. Iván Insunza (Mar de Chile 491)",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria con atención pediátrica, en horario acotado, hacia el poniente de la comuna"
            },
            {
                "nombre": "CESFAM Dr. Eduardo Ahués (Av. Independencia 2200)",
                "tipo": "CESFAM",
                "nota": "Atención primaria del sector centro. No es servicio de urgencia"
            },
            {
                "nombre": "CESFAM Dr. Carlos Godoy (Av. El Conquistador 1565)",
                "tipo": "CESFAM",
                "nota": "Atención primaria. No es servicio de urgencia"
            },
            {
                "nombre": "CESFAM Clotario Blest (Av. Los Trabajadores 999)",
                "tipo": "CESFAM",
                "nota": "Atención primaria del sector. No es servicio de urgencia"
            },
            {
                "nombre": "CECOSF Lo Errázuriz (Av. Sur de Chile 4369)",
                "tipo": "Centro comunitario de salud familiar",
                "nota": "Atención primaria del sector Lo Errázuriz. No es servicio de urgencia"
            },
            {
                "nombre": "Clínica INDISA Maipú (Santa Elena 901)",
                "tipo": "Centro privado",
                "nota": "Centro privado dentro de la comuna. Para una urgencia, el Hospital El Carmen y el SAR Presidenta Michelle Bachelet atienden de noche"
            },
            {
                "nombre": "Cruz Nacional Maipú (Av. Esquina Blanca 087, a pasos de Metro Plaza de Maipú)",
                "tipo": "Centro médico privado",
                "nota": "Atención ambulatoria privada junto a Plaza de Maipú. No es referencia de urgencia: para eso, el Hospital El Carmen"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Maipú: de Plaza de Maipú a Rinconada",
            "parrafos": [
                "Maipú es grande y su área urbana es casi toda plana, así que llegar con camilla plegable y equipamiento hasta tu puerta rara vez es el problema; lo que manda es cómo sea tu casa. En el centro hay villas antiguas de casas pareadas y, hacia el poniente y el sur, conjuntos de departamentos y condominios más nuevos: atendemos en ambos, de Maipú Centro a Sol Poniente, Portal del Sol y Lo Errázuriz. En Rinconada, sector rural de parcelas con accesos por caminos interiores, conviene darnos la dirección exacta y una referencia. En la evaluación inicial gratuita revisamos el acceso y el espacio de trabajo.",
                "Si algo se sale del plan, la kinesiología no es el camino. El Hospital El Carmen Dr. Luis Valentín Ferrada, en Camino a Rinconada 1201, tiene urgencia las 24 horas para adultos y niños, y el SAR Presidenta Michelle Bachelet, en Av. Nueva San Martín 776, también atiende de noche. Los SAPU de los CESFAM funcionan en horarios acotados que conviene confirmar. Ante una emergencia grave, llama al SAMU 131.",
                "El Hospital El Carmen es también el hospital público de referencia de la comuna: si tu alta salió de ahí, volver para cada sesión significa cruzar Maipú por Pajaritos o 5 de Abril. Ten a mano la epicrisis y las indicaciones médicas y el kinesiólogo continúa ese trabajo en tu casa. KINEUM atiende de forma particular, sin convenio con ese hospital."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "Si tu mamá o tu papá vive en una casa pareada de una villa de Maipú Centro o de Ciudad Satélite, lo que define hasta dónde se mueve la persona no es el tamaño de la comuna, sino los pocos metros entre la cama, el baño y la puerta de calle. La kinesiología geriátrica a domicilio trabaja sobre ese recorrido: fuerza de piernas, equilibrio y técnica de marcha, más una revisión de lo que estorba, como alfombras sueltas, la luz para levantarse de noche o la altura del sillón. Como el área urbana de Maipú es plana, cuando el equilibrio lo permite el objetivo se vuelve concreto: volver a la feria del sector o al almacén, sumando tramos de vereda y minutos, con acompañamiento al principio. En Rinconada, sector rural de parcelas con accesos por caminos interiores, la marcha se practica en el terreno que la persona realmente usa para salir. Si hubo una caída con golpe en la cabeza, confusión o imposibilidad de levantarse, primero va la evaluación médica: llama al SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en Ciudad Satélite y lo único que quiere es volver sola a la feria. ¿Eso se puede trabajar?",
                        "a": "Sí, y conviene que el objetivo sea así de concreto, porque ordena todo el plan. El kinesiólogo mide cuánto camina hoy, entrena fuerza y equilibrio, y después se practica el trayecto real: salir de la casa, la vereda, el cruce y la vuelta cargando algo liviano. Cuánto demore depende de su avance, no de una fecha fijada de antemano."
                    },
                    {
                        "q": "Vivimos en una parcela de Rinconada, lejos del centro de Maipú. ¿Llegan hasta allá?",
                        "a": "Sí, Rinconada está dentro de la cobertura en Maipú. Al escribir al WhatsApp +56 9 9967 9593 indica la dirección exacta y una referencia del camino interior, porque esos accesos no siempre aparecen bien en los mapas. Ahí coordinamos según agenda, habitualmente dentro de 24 a 48 horas; en el área urbana solemos llegar el mismo día o al día siguiente."
                    }
                ],
                "seoTitle": "Kinesiólogo para Adulto Mayor a Domicilio en Maipú",
                "seoDescription": "Kinesiólogo para adulto mayor a domicilio en Maipú: fuerza, equilibrio y prevención de caídas en su propia casa. Evaluación inicial gratuita.",
                "keywords": [
                    "kinesiólogo adulto mayor Maipú",
                    "kinesiología geriátrica Maipú",
                    "kinesiólogo a domicilio Maipú",
                    "rehabilitación adulto mayor a domicilio Maipú",
                    "prevención de caídas Maipú",
                    "kinesiólogo para personas mayores Ciudad Satélite"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Salir de pabellón y volver a Maipú deja un problema doméstico muy concreto: moverte con puntos, con una rodilla, una cadera o un hombro recién operados, en una comuna donde ir de un extremo a otro toma harto rato. Con la rehabilitación postquirúrgica a domicilio, ese viaje por Pajaritos, 5 de Abril o Camino a Rinconada queda reservado para los controles médicos, que no se reemplazan. En la evaluación inicial gratuita el kinesiólogo lee tu epicrisis y la pauta del cirujano (restricciones de carga, rangos permitidos, cuidado de la herida) y a partir de ahí trabaja movilidad, fuerza y marcha, con o sin ayudas técnicas, en el living o el dormitorio. El Hospital El Carmen Dr. Luis Valentín Ferrada, en Camino a Rinconada 1201, es el hospital público de referencia de la comuna; KINEUM atiende de forma particular, sin convenio con ese hospital. Fiebre, herida enrojecida o con secreción, o dolor e hinchazón en la pantorrilla obligan a consultar pronto; si aparece falta de aire repentina o dolor en el pecho, llama de inmediato al SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "Vivo solo en una casa de Maipú Centro y me operan la cadera. ¿Quién me ayuda con los traslados los primeros días?",
                        "a": "Parte de la sesión se dedica a enseñar los traslados seguros (cama, silla, baño) a quien te acompañe esos días, sea familia, vecina o cuidadora, y a dejar por escrito qué puedes y qué no puedes hacer según la pauta de tu cirujano. Si vas a estar solo varias horas, el kinesiólogo revisa contigo el recorrido dentro de la casa y qué conviene dejar a mano. Avísanos al +56 9 9967 9593 apenas tengas la fecha del alta."
                    },
                    {
                        "q": "Mis controles quedaron en el CRS Maipú, en Camino a Rinconada. ¿La kinesiología en casa me ahorra esos viajes?",
                        "a": "Esos no. Los controles y los exámenes siguen siendo donde te citaron, y hay que ir. Lo que se evita es cruzar la comuna dos o tres veces por semana solo para rehabilitarte: esas sesiones se hacen en tu casa y se ajustan con lo que te indiquen en cada control."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica a Domicilio en Maipú",
                "seoDescription": "Rehabilitación postoperatoria a domicilio en Maipú: movilidad, fuerza y marcha según la pauta de tu cirujano, sin cruzar la comuna. Evaluación gratuita.",
                "keywords": [
                    "rehabilitación postquirúrgica Maipú",
                    "kinesiología post operatoria a domicilio Maipú",
                    "kinesiólogo después de operación Maipú",
                    "rehabilitación rodilla a domicilio Maipú",
                    "rehabilitación cadera a domicilio Maipú",
                    "kinesiólogo a domicilio Maipú"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En kinesiología respiratoria lo más útil que puedes tener claro en Maipú no es una técnica, sino a dónde ir si tu hijo empeora de noche. La comuna es extensa y no todos los servicios abren a la misma hora: el Hospital El Carmen, en Camino a Rinconada 1201, tiene urgencia pediátrica las 24 horas, y el SAR Presidenta Michelle Bachelet, en Av. Nueva San Martín 776, también atiende de noche; los SAPU de los CESFAM funcionan en horarios acotados y conviene confirmar dirección y horario vigente antes de necesitarlos. Las señales de alarma son respiración muy rápida, hundimiento entre las costillas, labios morados, decaimiento marcado o, en guaguas, que deje de alimentarse: ante cualquiera de ellas, urgencia o SAMU 131, sin esperar al kinesiólogo. La sesión en casa trabaja despeje de secreciones, patrón respiratorio y tolerancia al esfuerzo según la indicación médica, y evita que un niño con un cuadro bronquial cruce media comuna y pase por una sala de espera.",
                "faqsLocales": [
                    {
                        "q": "Vivo en Portal del Sol y mi hijo respira mal de madrugada. ¿A qué urgencia lo llevo?",
                        "a": "Primero mira cómo respira: si no logra respirar tranquilo, se le hunden las costillas o está muy decaído, eso ya es urgencia y no espera. En ese estado, marca el 131 antes de subirlo al auto. Si puedes trasladarlo, de noche las referencias firmes en Maipú son la urgencia pediátrica del Hospital El Carmen, en Camino a Rinconada 1201, y el SAR Presidenta Michelle Bachelet, en Av. Nueva San Martín 776."
                    },
                    {
                        "q": "Mi papá quedó con secuelas de una neumonía y se cansa al caminar por la casa. ¿La kinesiología respiratoria a domicilio le sirve?",
                        "a": "Suele servir, con indicación médica. El trabajo mezcla ejercicios respiratorios con reacondicionamiento progresivo: primero dentro de la casa, después el pasaje o la vereda frente a la puerta y, más adelante, si tolera, un tramo hasta la esquina y de vuelta. El kinesiólogo mide cómo responde, cuánto se agita y cuánto demora en recuperarse, antes de subir la exigencia."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio en Maipú",
                "seoDescription": "Kinesiología respiratoria a domicilio en Maipú para niños y adultos: despeje de secreciones, ejercicios y señales de alarma claras. Sin salas de espera.",
                "keywords": [
                    "kinesiología respiratoria Maipú",
                    "KTR a domicilio Maipú",
                    "kinesiólogo respiratorio niños Maipú",
                    "kinesiología respiratoria adulto Maipú",
                    "kinesiólogo a domicilio Maipú",
                    "urgencia pediátrica Maipú"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Volver a Maipú después de una hospitalización por un ACV u otra lesión neurológica deja a la familia con dos tareas encima: sostener el día a día y no perder lo que se ganó internado. Como las distancias internas de la comuna son largas, trasladar a alguien con el equilibrio comprometido puede costar más que la sesión misma. A domicilio el orden se invierte: primero se mira la casa y lo que la persona necesita hacer en ella, girarse en la cama, pasar a la silla, llegar al baño, cruzar el pasillo, y sobre eso se arma el entrenamiento de tronco, transferencias, equilibrio y marcha, dentro de lo que autorice el equipo tratante. Lo mismo vale en cuadros progresivos como el Parkinson. Si la casa tiene un peldaño en la entrada o una puerta de baño estrecha, parte de la sesión se dedica a enseñar a la familia o a la cuidadora a asistir el traslado y a sacar la silla de ruedas hasta la vereda sin lastimarse. Si aparece pérdida súbita de fuerza, dificultad para hablar o la cara desviada, llama de inmediato al SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "A mi marido le dan el alta del Hospital El Carmen en silla de ruedas y nuestra casa tiene un peldaño en la entrada. ¿Qué dejamos listo antes de que llegue?",
                        "a": "Lo primero es decidir dónde va a dormir: si la pieza está en el segundo piso, suele convenir bajar la cama al primero las primeras semanas y dejar libre el camino hasta el baño, sin alfombras ni cables. Para el peldaño, mide el ancho de la puerta y del pasillo antes de comprar o arrendar la silla, porque una silla estándar no siempre pasa. En la primera visita vemos ese acceso con ustedes y practicamos cómo entrar y salir sin que nadie se lastime."
                    },
                    {
                        "q": "Los controles quedaron en el CRS Maipú y moverlo es un problema. ¿La kinesiología en casa los reemplaza?",
                        "a": "No. El kinesiólogo trabaja en casa y puede dejarte por escrito cómo va avanzando para que lo muestres en el control, pero los ajustes de tratamiento y las indicaciones siguen siendo del equipo tratante. KINEUM es un servicio particular e independiente de ese centro."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica a Domicilio en Maipú",
                "seoDescription": "Rehabilitación neurológica a domicilio en Maipú tras un ACV o con Parkinson: transferencias, equilibrio y marcha en tu casa. Evaluación inicial gratuita.",
                "keywords": [
                    "rehabilitación neurológica Maipú",
                    "kinesiología neurológica a domicilio Maipú",
                    "kinesiólogo ACV Maipú",
                    "rehabilitación post ACV a domicilio Maipú",
                    "kinesiólogo Parkinson Maipú",
                    "kinesiólogo a domicilio Maipú"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Si te mueves a diario en la Línea 5 desde Plaza de Maipú, Santiago Bueras o Del Sol, o manejas por Pajaritos y la Ruta 78, pasas mucho rato en la misma posición antes siquiera de llegar al trabajo, y eso pesa cuando la espalda o el cuello vienen sensibles. Por eso el plan de kinesiología traumatológica en Maipú no termina en la sesión: incluye qué hacer durante ese trayecto, cómo cargas la mochila y qué pausas te sirven. En casa se tratan esguinces de tobillo, lumbagos, dolor cervical, tendinopatías de hombro y secuelas de fractura, con evaluación, trabajo manual y ejercicio dosificado según cómo respondas. Para volver a caminar o a trotar, la vuelta se arma por etapas y con un circuito medible, como dar vueltas a la Plaza de Maipú, antes de retomar el ritmo de siempre. Cuando el dolor aparece tras un golpe fuerte y viene con deformidad o con imposibilidad de apoyar el pie, el orden se invierte: radiografía en una urgencia antes que cualquier ejercicio.",
                "faqsLocales": [
                    {
                        "q": "Hago el viaje diario desde Plaza de Maipú en la Línea 5 y llego con la espalda baja adolorida. ¿Sirve tratarlo en casa?",
                        "a": "Suele servir, y el trayecto es parte del tratamiento. Además del trabajo sobre el dolor, se revisa cómo vas en ese tramo: de pie sin moverte, con la mochila en un solo hombro o sentado con la espalda floja. De ahí salen dos o tres cosas concretas para hacer en el andén o al llegar, más los ejercicios de la semana. Las sesiones se agendan en horarios que calcen con tu jornada, incluido el fin de semana."
                    },
                    {
                        "q": "Me torcí el tobillo en un camino interior de Rinconada y quedó hinchado. ¿Qué hago mientras tanto?",
                        "a": "Mientras decides, baja la carga: no fuerces el apoyo, deja el pie en alto y aplica frío por ratos cortos. El paso siguiente depende de un par de señales. Si el tobillo se deformó, no aguanta nada de peso o el dolor no cede, hay que ver una radiografía en una urgencia, y la del Hospital El Carmen, en el mismo Camino a Rinconada, atiende las 24 horas. Con eso descartado, o si la lesión es leve, agendamos la evaluación en tu casa."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica a Domicilio en Maipú",
                "seoDescription": "Kinesiología traumatológica a domicilio en Maipú: esguinces, lumbago, tendinopatías y secuelas de fractura, tratadas en tu casa. Evaluación gratuita.",
                "keywords": [
                    "kinesiología traumatológica Maipú",
                    "kinesiólogo a domicilio Maipú",
                    "kinesiólogo lumbago Maipú",
                    "kinesiólogo esguince tobillo Maipú",
                    "rehabilitación de fractura a domicilio Maipú",
                    "kinesiólogo hombro Maipú"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Maipú y Ciudad Satélite",
            "description": "Kinesiólogo a domicilio en Maipú: Maipú Centro, Ciudad Satélite, El Abrazo, Portal del Sol, Sol Poniente y Rinconada. Evaluación inicial gratuita.",
            "keywords": [
                "kinesiólogo a domicilio Maipú",
                "kinesiología a domicilio Maipú",
                "kinesiólogo Maipú",
                "kinesiólogo particular Maipú",
                "rehabilitación a domicilio Maipú",
                "kinesiólogo a domicilio Ciudad Satélite",
                "kinesiólogo a domicilio Rinconada Maipú"
            ]
        }
    },
    "san-bernardo": {
        "centrosSalud": [
            {
                "nombre": "Hospital y CRS El Pino",
                "tipo": "Hospital público",
                "nota": "Urgencia 24 h, adulto y pediátrica; es la urgencia de referencia dentro de la comuna"
            },
            {
                "nombre": "Hospital Parroquial de San Bernardo",
                "tipo": "Clínica privada",
                "nota": "Recibe urgencias de adultos y de niños; conviene confirmar dirección y horario antes de ir"
            },
            {
                "nombre": "SAR Eugenia Muñoz Dalmatín (Mendoza 855)",
                "tipo": "Servicio de urgencia primaria (SAR)",
                "nota": "Urgencia primaria; revisa su horario, no está confirmado que funcione las 24 horas"
            },
            {
                "nombre": "SAPU Confraternidad (Martín de Solís 14210)",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria; consulta su horario antes de trasladarte"
            },
            {
                "nombre": "SAPU Padre Joan Alsina (Márquez de la Plata 5)",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria junto al CESFAM del mismo nombre; no nos consta que atienda 24 horas"
            },
            {
                "nombre": "CESFAM Carol Urzúa",
                "tipo": "CESFAM",
                "nota": "Atención primaria en el sector Tejas de Chena; sin urgencia 24 horas"
            },
            {
                "nombre": "CESFAM Juan Pablo II (Santa Marta 276)",
                "tipo": "CESFAM",
                "nota": "Atención primaria; sin urgencia 24 horas"
            },
            {
                "nombre": "CESFAM Confraternidad",
                "tipo": "CESFAM",
                "nota": "Atención primaria; sin urgencia 24 horas"
            },
            {
                "nombre": "CESFAM Padre Joan Alsina (Márquez de la Plata 5)",
                "tipo": "CESFAM",
                "nota": "Atención primaria; sin urgencia 24 horas"
            },
            {
                "nombre": "Clínica Policenter San Bernardo (Av. O'Higgins 237)",
                "tipo": "Clínica privada",
                "nota": "Atención ambulatoria en horario diurno; no nos consta que tenga servicio de urgencia"
            },
            {
                "nombre": "Centro Médico y Dental RedSalud San Bernardo",
                "tipo": "Centro médico ambulatorio",
                "nota": "Consultas y exámenes ambulatorios; sin urgencia"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en San Bernardo: del casco histórico a Nos y Lo Herrera",
            "parrafos": [
                "San Bernardo no se recorre de una sola manera: entre las casonas antiguas del casco histórico, en torno a la Plaza de Armas y las calles Eyzaguirre, Freire y Urmeneta, el barrio ferroviario de la Maestranza, los blocks de vivienda social de los setenta y ochenta y las parcelas de Lo Herrera hay varios kilómetros y varias formas de vivir. Eso cambia el armado de la sesión: en una casa antigua suele haber pasillo para entrenar la marcha; en un departamento sin ascensor el kinesiólogo sube con la camilla y se trabaja en la pieza o el comedor.",
                "La distancia también manda: desde Nos o El Cerrillo de Nos hasta el centro comunal hay un viaje entero, y quien depende del tren Nos–Estación Central o de Gran Avenida gasta en el traslado la energía que necesitaba para la terapia. Atenderte en tu casa saca ese tramo de la ecuación.",
                "Si vienes saliendo de alta del Hospital El Pino o del Hospital Parroquial de San Bernardo, la parte larga recién empieza. En la evaluación inicial gratuita miramos lo que dejó indicado tu equipo tratante: el protocolo quirúrgico marca cuánto puedes cargar y el informe del médico fija hasta dónde apuntar. Con eso se arma el plan en tu casa. KINEUM es particular y no tiene convenio con esos centros. Ante una urgencia llama al SAMU (131): la urgencia 24 horas de referencia en la comuna es la del Hospital El Pino."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En San Bernardo la kinesiología geriátrica a domicilio empieza por recorrer contigo la casa donde vive tu papá o tu mamá. En las casonas antiguas del casco histórico, hacia Eyzaguirre, Freire y Urmeneta, seguimos el camino entre el dormitorio, el baño y la cocina para ver qué peldaños, desniveles o puertas angostas aparecen en esa casa en particular, porque ninguna se construyó igual a la de al lado. En las parcelas de Lo Herrera, La Vara o El Mariscal, el tramo que más pesa suele ser el que va de la puerta al portón: si ese camino es de tierra o irregular, se entrena ahí mismo y con el apoyo que corresponda. Las metas también se fijan con lugares concretos: volver a llegar a la Plaza de Armas, alcanzar la estación del tren o salir a comprar sin que alguien tenga que ir al lado. La evaluación inicial gratuita sirve para acordar esa meta con la familia y definir la frecuencia. Si hay una caída con golpe en la cabeza, confusión o la persona no logra levantarse, llama al SAMU (131) sin esperar la sesión.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en una casona antigua del centro de San Bernardo y le cuesta moverse entre las piezas. ¿Eso se puede trabajar?",
                        "a": "Sí. En la primera visita medimos ese recorrido tal como está: si hay un desnivel entre la pieza y el pasillo, si el patio se pone resbaloso cuando llueve, si el baño le queda al otro extremo. Con eso practicamos el paso con la técnica y el apoyo que corresponda, y te decimos qué ajustes convienen en esa casa. La decisión y la instalación quedan en la familia."
                    },
                    {
                        "q": "Vivimos en una parcela en Lo Herrera. ¿Llegan hasta allá y pueden sacar a caminar a mi papá?",
                        "a": "Sí, Lo Herrera está dentro de la cobertura. Partimos dentro de la casa y en el patio, y después probamos el tramo hasta el portón, que es el que usa de verdad. Si ese terreno todavía no es seguro para él, seguimos trabajando fuerza y equilibrio puertas adentro hasta que lo sea."
                    }
                ],
                "seoTitle": "Kinesiólogo Adulto Mayor a Domicilio San Bernardo",
                "seoDescription": "Kinesiología geriátrica a domicilio en San Bernardo: fuerza, equilibrio y prevención de caídas en la casa. Evaluación inicial gratuita.",
                "keywords": [
                    "kinesiólogo adulto mayor San Bernardo",
                    "kinesiología geriátrica a domicilio San Bernardo",
                    "kinesiólogo a domicilio adulto mayor San Bernardo",
                    "prevención de caídas San Bernardo",
                    "rehabilitación adulto mayor en casa San Bernardo",
                    "kinesiólogo geriátrico San Bernardo",
                    "kinesiología domiciliaria adulto mayor Nos"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Salir de alta del Hospital El Pino o del Hospital Parroquial de San Bernardo es la parte corta. Lo largo viene después: dos o tres sesiones por semana durante semanas, y ahí la geografía de la comuna aparece de golpe. Si vives en Nos, El Cerrillo de Nos o Los Morros, cada sesión significa conseguir quién te lleve, subir a un auto con la rodilla o la cadera recién operada y cruzar media comuna por Gran Avenida o la Ruta 5 Sur. Con la rehabilitación postquirúrgica a domicilio ese viaje simplemente no ocurre. El kinesiólogo trabaja con lo que te entregaron al alta: el protocolo quirúrgico dice cuánto peso puedes poner y qué movimientos quedan fuera por ahora, y tus controles van marcando cuándo avanzar. Desde ahí se entrena movilidad, fuerza y marcha en los pasos que exige tu propia casa, sea el peldaño del antejardín o la escalera interior. KINEUM es un servicio particular, sin convenio con esos hospitales. Consulta pronto si aparece fiebre, si la herida se enrojece o secreta, o si una pantorrilla duele e hincha; ante falta de aire repentina o dolor en el pecho, llama al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "Me operan en el Hospital El Pino. ¿Ustedes coordinan la rehabilitación con el hospital?",
                        "a": "No. KINEUM no tiene convenio con hospitales ni clínicas: contratas directamente. Trabajamos con los documentos que te entregan al alta y con lo que indique tu cirujano. Si algo no queda claro, te pedimos confirmarlo en tu control antes de avanzar."
                    },
                    {
                        "q": "Vivo en Nos y todo me queda al otro lado de la comuna. ¿Llegan hasta allá y en cuánto tiempo?",
                        "a": "Sí, Nos está dentro de la cobertura. Escríbenos al WhatsApp +56 9 9967 9593 con tu dirección y la fecha estimada de alta: la primera visita se coordina según agenda, habitualmente dentro de 24 a 48 horas."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica a Domicilio San Bernardo",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en San Bernardo tras el alta: movilidad, fuerza y marcha en tu casa, según lo que indicó tu cirujano.",
                "keywords": [
                    "rehabilitación postquirúrgica a domicilio San Bernardo",
                    "kinesiólogo post operado San Bernardo",
                    "kinesiología post cirugía San Bernardo",
                    "rehabilitación después de operación de rodilla San Bernardo",
                    "kinesiólogo a domicilio post alta San Bernardo",
                    "rehabilitación cadera operada San Bernardo",
                    "kinesiología postquirúrgica Nos"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En un cuadro respiratorio lo que más pesa en San Bernardo no es la sesión: es la noche. Si vives en Nos, Lo Herrera o La Vara, la urgencia no te queda a pasos, así que conviene tener resuelto de antemano a cuál vas, quién maneja y por qué ruta sales, antes de necesitarlo. Esa conversación la tenemos en la primera visita, junto con qué mirar en tu hijo o en el adulto mayor de la casa: cómo respira mientras duerme, si come igual que siempre, si el pecho se hunde al tomar aire, si está mucho más decaído que ayer. Con eso claro, la sesión en casa se dedica a movilizar y ayudar a sacar secreciones, a ordenar la respiración y a que la familia repita bien lo que el médico indicó entre una visita y otra. Atendemos de lunes a domingo, pero la kinesiología respiratoria no reemplaza una consulta: si el esfuerzo para respirar aumenta, si los labios se ven morados o si una guagua deja de alimentarse, llama al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "Vivimos en Lo Herrera y mi hijo empeora de noche. ¿A dónde lo llevo?",
                        "a": "Si ves que le cuesta respirar, llama al SAMU (131) sin esperar. Si puedes trasladarlo, la urgencia pediátrica de referencia en la comuna es la del Hospital y CRS El Pino, que atiende 24 horas; el Hospital Parroquial de San Bernardo también recibe niños, aunque conviene confirmar su horario. Desde los sectores más alejados, tener elegido el lugar y el acompañante de antemano ahorra minutos clave."
                    },
                    {
                        "q": "¿Pueden venir un domingo si mi hijo está con muchas secreciones?",
                        "a": "Sí, atendemos de lunes a domingo y la visita se coordina según agenda, siempre con la indicación de su pediatra. Ahora, si respira con mucho esfuerzo, se le hunden las costillas o está muy decaído, eso no es tema de kinesiología: primero urgencia o SAMU (131)."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio San Bernardo",
                "seoDescription": "Kinesiología respiratoria a domicilio en San Bernardo para niños y adultos, con indicación médica, y las señales de alarma claras desde el día uno.",
                "keywords": [
                    "kinesiología respiratoria a domicilio San Bernardo",
                    "kinesiólogo respiratorio San Bernardo",
                    "kinesiología respiratoria niños San Bernardo",
                    "kinesiólogo a domicilio bronquitis San Bernardo",
                    "kinesiología respiratoria adulto mayor San Bernardo",
                    "urgencia pediátrica San Bernardo",
                    "kinesiólogo respiratorio Nos"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Después de un ACV lo que cambia no es solo el cuerpo: es la logística de toda la casa. En San Bernardo eso suele significar que alguien de la familia arma un operativo cada vez que hay que ir a terapia, varias veces por semana, y desde El Mariscal, Los Morros o Nos el viaje no es corto; ni el Metro ni el tren resuelven el tramo entre la casa y la estación cuando la persona todavía no camina sola. La rehabilitación neurológica a domicilio corre ese trabajo al lugar donde tiene que volver a funcionar: levantarse de su propia cama, cruzar hasta el patio de la casa de un piso, salir al portón, subir y bajar del auto cuando toca el control médico. El plan se arma con lo que dejó escrito el neurólogo o el fisiatra, porque KINEUM no tiene convenio con el hospital donde estuvo internada. También se enseña a quien cuida, muchas veces un hijo o una hija que además trabaja, a asistir los traslados sin lastimarse la espalda. Ante pérdida súbita de fuerza, cara desviada o dificultad para hablar, llama de inmediato al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "A mi papá le dan el alta en el Hospital El Pino después de un ACV. ¿Qué conviene dejar listo?",
                        "a": "Lo más práctico es avisarnos antes del alta, sobre todo si viven en Nos o El Mariscal y no tienen auto: así la primera visita queda tomada para los días siguientes. Dinos también a qué tipo de vivienda vuelve; si es un departamento sin ascensor, planificamos desde el comienzo el traslado entre el auto y la puerta. Todo lo que el equipo tratante haya dejado escrito sobre su estado y sus restricciones nos evita partir de cero."
                    },
                    {
                        "q": "Vivimos en Nos y no tenemos auto para llevar a mi mamá a rehabilitación. ¿Las sesiones en casa reemplazan sus controles médicos?",
                        "a": "No. La kinesiología complementa el tratamiento médico y no lo reemplaza: sus controles con el neurólogo o el médico tratante siguen siendo necesarios. Lo que sí se evita es el traslado varias veces por semana para la terapia, que es la parte más frecuente y la que más cuesta sostener."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica a Domicilio San Bernardo",
                "seoDescription": "Rehabilitación neurológica a domicilio en San Bernardo tras un ACV o con Parkinson: traslados, equilibrio y marcha entrenados en tu propia casa.",
                "keywords": [
                    "rehabilitación neurológica a domicilio San Bernardo",
                    "kinesiólogo neurológico San Bernardo",
                    "rehabilitación ACV a domicilio San Bernardo",
                    "kinesiología Parkinson San Bernardo",
                    "kinesiólogo a domicilio post ACV San Bernardo",
                    "rehabilitación neurológica en casa Nos",
                    "kinesiología neurológica Provincia de Maipo"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Un esguince, un lumbago, un hombro que no sube o la secuela de una fractura se pueden tratar en tu casa, sin que tengas que moverte con dolor hasta un box. Lo que cambia en San Bernardo es cómo se define la meta: acá casi nadie pide recuperar grados de movilidad, pide volver a hacer el trayecto de siempre. Llegar caminando a la Plaza de Armas, alcanzar a pie la estación de Maestranza o Cinco Pinos, cruzar el antejardín y abrir el portón sin cojear, cargar las bolsas desde el paradero de Gran Avenida hasta la casa. Esos recorridos se convierten en el objetivo y se practican por partes: primero movilidad, fuerza y ejercicio terapéutico puertas adentro, después el tramo real, alargándolo según cómo responda el cuerpo al día siguiente. Antes de todo eso hay algo que descartar: una fractura se confirma con radiografía en una urgencia, como la del Hospital El Pino, así que si el golpe dejó deformidad, no logras apoyar el pie o el dolor no cede, eso va primero y la kinesiología parte después del diagnóstico.",
                "faqsLocales": [
                    {
                        "q": "Me lesioné la rodilla y desde el paradero hasta mi casa en Cinco Pinos camino varias cuadras. ¿Se trabaja ese trayecto?",
                        "a": "Sí, ese recorrido pasa a ser la meta. Primero recuperamos movilidad y fuerza dentro de la casa y después practicamos el tramo real, alargándolo de a poco. No hay plazo fijo: depende de la lesión y de cómo evolucione. Si al día siguiente hay más dolor o hinchazón, se retrocede un paso."
                    },
                    {
                        "q": "Me duele mucho la espalda y no puedo manejar hasta un centro de kinesiología. ¿Cuándo pueden venir?",
                        "a": "Atendemos de lunes a domingo y la visita se coordina según agenda, habitualmente dentro de 24 a 48 horas. Eso sí, si el dolor baja por la pierna con hormigueo, pérdida de fuerza o problemas para controlar la orina, consulta primero a un médico."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica a Domicilio San Bernardo",
                "seoDescription": "Kinesiología traumatológica a domicilio en San Bernardo: esguinces, lumbago y secuelas de fractura tratados en tu casa, de lunes a domingo.",
                "keywords": [
                    "kinesiología traumatológica a domicilio San Bernardo",
                    "kinesiólogo traumatológico San Bernardo",
                    "kinesiólogo esguince San Bernardo",
                    "kinesiología lumbago a domicilio San Bernardo",
                    "kinesiólogo a domicilio fractura San Bernardo",
                    "rehabilitación de rodilla a domicilio San Bernardo",
                    "kinesiólogo hombro San Bernardo"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en San Bernardo | KINEUM",
            "description": "Kinesiología a domicilio en San Bernardo, del casco histórico a Nos y Lo Herrera. Evaluación inicial gratuita y atención de lunes a domingo.",
            "keywords": [
                "kinesiólogo a domicilio San Bernardo",
                "kinesiología a domicilio San Bernardo",
                "kinesiólogo San Bernardo",
                "kinesiología domiciliaria San Bernardo",
                "rehabilitación a domicilio San Bernardo",
                "kinesiólogo particular San Bernardo",
                "kinesiólogo a domicilio Nos",
                "kinesiólogo a domicilio Provincia de Maipo"
            ]
        }
    },
    "quilicura": {
        "centrosSalud": [
            {
                "nombre": "SAPU Rodrigo Rojas de Negri",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria dentro de Quilicura. Confirma su horario antes de ir, porque la información publicada no coincide entre fuentes."
            },
            {
                "nombre": "Servicio de Urgencia Pediátrica Municipal, en el CESFAM Marta Ugarte Román (Av. Bernardo O'Higgins 460)",
                "tipo": "Servicio de urgencia primaria municipal",
                "nota": "Urgencia pediátrica municipal en la comuna. No atiende las 24 horas: consulta su horario antes de trasladar a un niño."
            },
            {
                "nombre": "CESFAM y SAPU Presidente Salvador Allende Gossens (Santa Luisa 290)",
                "tipo": "CESFAM con SAPU",
                "nota": "Atención primaria y urgencia primaria en el sector Santa Luisa. No es urgencia de alta complejidad."
            },
            {
                "nombre": "CESFAM y SAPU Irene Frei de Cid (Cabo Primero Carlos Cuevas Golmos 525)",
                "tipo": "CESFAM con SAPU",
                "nota": "Atención primaria y urgencia primaria. Consulta en tu CESFAM a qué sector corresponde tu dirección."
            },
            {
                "nombre": "Complejo Hospitalario San José (San José 1196, Independencia)",
                "tipo": "Hospital público",
                "nota": "Está en Independencia, no en Quilicura. Urgencia 24 h de adultos y hospital de referencia de la red norte para la comuna."
            },
            {
                "nombre": "Hospital de Niños Dr. Roberto del Río (Independencia)",
                "tipo": "Hospital público",
                "nota": "Está en Independencia, no en Quilicura. Urgencia pediátrica 24 h de referencia para Quilicura."
            },
            {
                "nombre": "Centro de Atención Integral IST Quilicura (Av. Américo Vespucio 1720)",
                "tipo": "Centro de salud laboral",
                "nota": "Orientado a accidentes del trabajo. Atiende de lunes a domingo de 08:30 a 20:00. No es urgencia general."
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Quilicura: una comuna partida por el cordón industrial",
            "parrafos": [
                "Quilicura ocupa cerca de 58 km² en el norponiente del Gran Santiago y creció rápido, pero no creció de una pieza: la franja industrial y logística que acompaña a Américo Vespucio y a la Ruta 5 deja los barrios residenciales separados unos de otros. Cruzar de un extremo a otro de la comuna para cada sesión es un viaje en sí mismo. Desde 2023 la Línea 3 sumó tres estaciones acá —Ferrocarril, Lo Cruzat y Plaza de Quilicura—, útiles para moverse, poco prácticas cuando quien se rehabilita todavía no camina seguro.",
                "La comuna es plana, salvo el faldeo del cerro Renca y otros cerros isla, y mezcla barrios planificados como Valle Lo Campino, con parque central y calles interiores, con villas más densas donde hay blocks y edificios de hasta cinco pisos que habitualmente no tienen ascensor. Ahí la camilla y el equipamiento suben por la escalera: avísanos el piso al coordinar.",
                "Lo de mayor complejidad se deriva fuera de la comuna, a la red norte en Independencia: el Complejo Hospitalario San José y, en niños, el Hospital Roberto del Río. Si vuelves de un alta ahí, la evaluación inicial gratuita parte de lo que indicó ese equipo tratante; KINEUM atiende de forma particular, sin convenio con ninguno. Ante una urgencia, el 131. Y si vas a un SAPU, confirma antes su horario: el del Rodrigo Rojas de Negri no coincide entre fuentes y la urgencia pediátrica municipal no atiende las 24 horas."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En Quilicura conviven casas de villa con un escalón en el antejardín y blocks de hasta cinco pisos que habitualmente no tienen ascensor. En unas y otros, el recorrido de una persona mayor termina siendo corto y siempre el mismo: del dormitorio al baño, del living a la reja, y de ahí al paradero o al almacén de la esquina. La kinesiología geriátrica a domicilio entrena justo ese recorrido. El kinesiólogo trabaja fuerza de piernas, equilibrio y marcha donde de verdad ocurren: el descanso de la escalera común, el pasillo del block, el antejardín y la vereda hasta la esquina. También mira cómo se levanta del sillón y de la cama, y deja tareas simples para los días sin sesión. Un dato local que conviene tener claro de antemano: si hay una caída y aparece confusión, vómitos o no puede apoyar la pierna, eso no se resuelve en un SAPU de horario parcial sino en una urgencia abierta; si no puedes trasladarla, llama al 131.",
                "faqsLocales": [
                    {
                        "q": "Vivimos en Valle Lo Campino y mi mamá se atiende en el CESFAM Irene Frei, ¿tengo que avisar algo allá para empezar las sesiones en casa?",
                        "a": "No necesitas hacer ningún trámite en el CESFAM: KINEUM es un servicio particular y contratas directo. Sí conviene que nos cuentes qué le indicó su médico y que lleves a su próximo control lo que vayamos registrando, para que el plan en casa no choque con el tratamiento que ya tiene."
                    },
                    {
                        "q": "Vivimos al otro lado de Américo Vespucio, en un sector rodeado de bodegas, ¿llegan igual hasta allá?",
                        "a": "Sí, cubrimos toda la comuna, incluidos los sectores que quedan separados por la zona industrial. Como ese trayecto suma camino, en Quilicura la primera visita se coordina según agenda, habitualmente dentro de 24 a 48 horas, y desde ahí se fijan días y horas estables para no depender del tránsito."
                    }
                ],
                "seoTitle": "Kinesiología Geriátrica a Domicilio Quilicura",
                "seoDescription": "Kinesiología geriátrica a domicilio en Quilicura: fuerza, equilibrio y marcha en la casa, la escalera del block y la vereda del barrio.",
                "keywords": [
                    "kinesiología geriátrica a domicilio Quilicura",
                    "kinesiólogo para adulto mayor Quilicura",
                    "kinesiólogo a domicilio Quilicura",
                    "prevención de caídas adulto mayor Quilicura",
                    "rehabilitación adulto mayor en casa Quilicura",
                    "kinesiólogo adulto mayor Valle Lo Campino"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Quilicura no tiene dentro de sus límites un hospital de alta complejidad: las cirugías se resuelven fuera, sea en la red norte —el Complejo Hospitalario San José, en Independencia— o en centros privados, y el alta te devuelve a una comuna desde la que cada control obliga a salir por la Autopista Central o por Américo Vespucio. Hacer ese trayecto dos o tres veces por semana con una rodilla, una cadera o un hombro recién operados es lo que evita la rehabilitación postquirúrgica a domicilio. El kinesiólogo trabaja con tu epicrisis y la pauta del cirujano a la vista, y desde ahí define rango de movimiento, fuerza, uso de bastón o muletas y, si vives en un block, cómo bajar esa escalera el día del control que sí es presencial. KINEUM es un servicio particular y no tiene convenio con ese hospital ni con los centros donde te operaron. Avísale a tu equipo tratante si la herida cambia de aspecto o el dolor sube en vez de bajar; si aparece falta de aire repentina, dolor en el pecho o una pantorrilla hinchada y dolorosa, llama al 131.",
                "faqsLocales": [
                    {
                        "q": "Me dan el alta en el San José y en la casa hay que subir dos pisos por escalera, ¿qué hago el primer día?",
                        "a": "Lo primero es que alguien te acompañe en esa subida y que respetes la carga que autorizó tu cirujano. En la evaluación inicial gratuita vemos esa misma escalera contigo, definimos la técnica con muletas o bastón y qué apoyos faltan. Si tu cirujano pidió evitar escaleras por ahora, se respeta y organizamos la rutina en un solo piso."
                    },
                    {
                        "q": "¿Tengo que ir igual a los controles fuera de la comuna si hago la kinesiología en casa?",
                        "a": "Los controles con tu cirujano no se reemplazan: esos hay que ir a hacerlos donde te operaron. Lo que se evita es el resto de los viajes, que son la mayoría: las sesiones se hacen en tu casa, de lunes a domingo, y el registro de avance lo llevas tú a ese control."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica a Domicilio Quilicura",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en Quilicura: sigue la pauta de tu cirujano en casa y evita salir de la comuna por cada sesión.",
                "keywords": [
                    "rehabilitación postquirúrgica a domicilio Quilicura",
                    "kinesiología post operatoria Quilicura",
                    "kinesiólogo después de operación Quilicura",
                    "rehabilitación rodilla operada Quilicura",
                    "kinesiólogo a domicilio Quilicura",
                    "rehabilitación cadera en casa Quilicura"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En Quilicura la kinesiología respiratoria a domicilio se pide sobre todo en invierno, por niños con cuadros bronquiales, y por adultos que quedaron cargados de secreciones o sin aire para el esfuerzo después de una neumonía. Atenderlos en su propia pieza evita sacarlos al frío y esperar locomoción en Av. Bernardo O'Higgins con el cuadro encima. Lo que se hace en la sesión —despejar secreciones, ordenar la respiración, recuperar tolerancia al esfuerzo y usar bien el inhalador y la aerocámara— sale de lo que indicó el médico. Igual de importante es tener resuelto de antemano a dónde ir, porque acá la urgencia no está abierta a cualquier hora: el servicio de urgencia pediátrica municipal funciona en el CESFAM Marta Ugarte Román, en Av. Bernardo O'Higgins 460, pero no atiende las 24 horas, así que confirma su horario antes de salir. Si respira muy rápido, se le hunden las costillas, se pone morado, está muy decaído o un lactante deja de alimentarse, no esperes la sesión: de madrugada el camino es el 131 o el Hospital Roberto del Río, en Independencia.",
                "faqsLocales": [
                    {
                        "q": "Son las tres de la mañana y mi hijo respira con esfuerzo, ¿parto por la urgencia pediátrica municipal o voy directo a Independencia?",
                        "a": "A esa hora no cuentes con la urgencia pediátrica municipal del CESFAM Marta Ugarte Román, porque no atiende las 24 horas. Si le cuesta respirar, llama al 131 y sigue lo que te indiquen por teléfono; la urgencia pediátrica de referencia para la comuna es el Hospital Roberto del Río, en Independencia. La kinesiología respiratoria no reemplaza esa atención."
                    },
                    {
                        "q": "Mi hijo se atiende en el CESFAM Marta Ugarte, ¿la sesión en casa sirve igual si la indicación salió de ahí?",
                        "a": "Sirve igual: el kinesiólogo trabaja sobre esa indicación, la hayas pedido donde la hayas pedido. Ten a mano la orden o la receta para la evaluación inicial gratuita, así sabemos qué te indicaron y con qué frecuencia. KINEUM no forma parte de la red municipal ni tiene convenio con el CESFAM: contratas directo y recibes boleta de honorarios electrónica."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio en Quilicura",
                "seoDescription": "Kinesiología respiratoria a domicilio en Quilicura para niños y adultos, con indicación médica, y qué urgencia queda abierta de noche.",
                "keywords": [
                    "kinesiología respiratoria a domicilio Quilicura",
                    "kinesiólogo respiratorio niños Quilicura",
                    "kinesiología respiratoria infantil Quilicura",
                    "kinesiólogo a domicilio Quilicura",
                    "bronquitis obstructiva kinesiología Quilicura",
                    "kinesiología respiratoria adulto mayor Quilicura"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Después de un ACV, con un Parkinson o tras una lesión medular, lo primero que se rompe es la continuidad: la persona sale de la red norte con indicación de seguir rehabilitándose y, desde Quilicura, cada sesión fuera de casa significa cruzar la comuna o salir de ella por Américo Vespucio con alguien que tiene medio cuerpo débil o el equilibrio alterado. La rehabilitación neurológica a domicilio sostiene esa continuidad donde la persona vive. Si es un departamento de block, el trabajo pasa por las transferencias de la cama a la silla, un baño estrecho y el pasillo común; si es una casa de villa, por el escalón del antejardín, la reja y el patio. El kinesiólogo parte de lo que indicó el equipo tratante, entrena a quien cuida para movilizar sin lastimarse la espalda y deja pautas para los días sin sesión. Los avances dependen de cada caso y no hay plazos garantizados. Si aparece la cara desviada, pérdida súbita de fuerza o dificultad para hablar, eso es un llamado al 131, no un tema para la próxima visita.",
                "faqsLocales": [
                    {
                        "q": "Mi papá volvió en silla de ruedas y en el block no hay ascensor, ¿queda encerrado en el departamento?",
                        "a": "No necesariamente, pero hay que ser realistas: la escalera común se trabaja solo si su condición lo permite. Mientras tanto, la rehabilitación se hace dentro del departamento —transferencias, sentarse, ponerse de pie, marcha asistida si corresponde— y definimos cuántas personas hacen falta para las salidas necesarias, como un control médico."
                    },
                    {
                        "q": "Mi mamá tiene Parkinson y se le pegan los pies en las calles interiores de la villa, ¿eso también se trabaja?",
                        "a": "Sí, en lo motor. Se entrena el arranque de la marcha cuando los pies se quedan pegados, el giro y el paso por lugares estrechos, primero en la casa y después en un tramo corto y conocido de la calle, acompañada. Si además notas desorientación o confusión, coméntalo con su neurólogo: eso se evalúa por el lado médico."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica a Domicilio Quilicura",
                "seoDescription": "Rehabilitación neurológica a domicilio en Quilicura: continuidad tras el alta, transferencias en casa y apoyo a quien cuida.",
                "keywords": [
                    "rehabilitación neurológica a domicilio Quilicura",
                    "kinesiología neurológica Quilicura",
                    "rehabilitación ACV a domicilio Quilicura",
                    "kinesiólogo a domicilio Quilicura",
                    "kinesiología Parkinson Quilicura",
                    "rehabilitación en casa después del alta Quilicura"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Junto a Américo Vespucio y la Ruta 5, Quilicura concentra una amplia zona industrial y logística, con bodegas y centros de distribución. Si tu jornada incluye levantar carga, mover pallets o pasar horas al volante, el hombro, la espalda baja y las rodillas lo acusan. La kinesiología traumatológica a domicilio parte de la lesión y de lo que necesitas volver a hacer: levantar una caja sin que se te vaya la espalda, subir los cinco pisos del block con las bolsas o volver a las vueltas del parque central de Valle Lo Campino. En casa se trabaja movilidad, fuerza y control del movimiento con equipamiento portátil, y queda una pauta para los días sin sesión, que es donde se gana la mayor parte. Si la lesión ocurrió en el trabajo, la atención corresponde a la mutualidad a la que esté adherido tu empleador; el IST, por ejemplo, tiene un centro en Av. Américo Vespucio 1720. Y si después de un golpe hay deformidad, no puedes apoyar o el dolor es intenso, primero hay que descartar una fractura.",
                "faqsLocales": [
                    {
                        "q": "Me lesioné la espalda trabajando en una bodega del sector de Vespucio, ¿me pueden atender?",
                        "a": "Si fue un accidente del trabajo, avísale a tu empleador: la atención te corresponde por la mutualidad a la que esté adherido, y si es el IST, tiene un centro en Av. Américo Vespucio 1720. Si el dolor no es de origen laboral, o quieres complementar de forma particular en casa, te atendemos igual, partiendo por la evaluación inicial gratuita."
                    },
                    {
                        "q": "Trabajo en turnos y llego tarde a la casa, ¿pueden atenderme después de las 20:00 o los domingos?",
                        "a": "Atendemos de lunes a domingo y el horario se acuerda al agendar, según la disponibilidad que haya en Quilicura ese día. Escríbenos al WhatsApp +56 9 9967 9593 con los bloques que te sirven; si tu turno cambia cada semana, conviene ir tomando la sesión con algunos días de anticipación."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica a Domicilio Quilicura",
                "seoDescription": "Kinesiología traumatológica a domicilio en Quilicura: hombro, espalda baja y rodilla, con equipamiento portátil en tu casa.",
                "keywords": [
                    "kinesiología traumatológica a domicilio Quilicura",
                    "kinesiólogo traumatológico Quilicura",
                    "kinesiólogo para dolor de espalda Quilicura",
                    "kinesiología esguince de tobillo Quilicura",
                    "kinesiólogo a domicilio Quilicura",
                    "rehabilitación de hombro a domicilio Quilicura"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Quilicura | KINEUM",
            "description": "Kinesiólogo a domicilio en Quilicura: sesiones en tu casa, sin cruzar la comuna ni salir a la red norte. Evaluación inicial gratuita, lunes a domingo.",
            "keywords": [
                "kinesiólogo a domicilio Quilicura",
                "kinesiología a domicilio Quilicura",
                "kinesiólogo Quilicura",
                "kinesiología domiciliaria Quilicura",
                "kinesiólogo particular Quilicura",
                "rehabilitación a domicilio Quilicura",
                "kinesiólogo a domicilio Valle Lo Campino"
            ]
        }
    },
    "huechuraba": {
        "centrosSalud": [
            {
                "nombre": "SAR La Pincoya (Servicio de Alta Resolutividad)",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia de atención primaria, con atención pediátrica. No funciona las 24 horas; confirma el horario antes de ir"
            },
            {
                "nombre": "SAPU Los Libertadores",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia de atención primaria. No funciona las 24 horas; confirma el horario por teléfono"
            },
            {
                "nombre": "CESFAM La Pincoya (Av. Recoleta 5580)",
                "tipo": "CESFAM",
                "nota": "Centro de salud familiar del sector La Pincoya; atención por horario, no es servicio de urgencia"
            },
            {
                "nombre": "CESFAM El Barrero (Las Petunias 305)",
                "tipo": "CESFAM",
                "nota": "Centro de salud familiar del sector El Barrero; atención por horario, no es servicio de urgencia"
            },
            {
                "nombre": "CESFAM Dr. Salvador Allende Gossens (Av. Recoleta 6160)",
                "tipo": "CESFAM",
                "nota": "Centro de salud familiar en el eje Av. Recoleta; atención por horario, no es servicio de urgencia"
            },
            {
                "nombre": "CECOSF Los Libertadores",
                "tipo": "CESFAM",
                "nota": "Centro comunitario de salud familiar del sector Los Libertadores; atención por horario, no es servicio de urgencia"
            },
            {
                "nombre": "IntegraMédica Norte (Mallplaza Norte, Av. Américo Vespucio 1731)",
                "tipo": "clinica privada",
                "nota": "Centro médico ambulatorio junto a Vespucio Norte; consultas con horario acotado, sin servicio de urgencia"
            },
            {
                "nombre": "Hospital San José",
                "tipo": "hospital publico",
                "nota": "Urgencia 24 h de adultos de referencia para la comuna. Está en Independencia, no en Huechuraba"
            },
            {
                "nombre": "Hospital de Niños Dr. Roberto del Río",
                "tipo": "hospital publico",
                "nota": "Urgencia pediátrica 24 h de referencia para la comuna. Está en Independencia, no en Huechuraba"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Huechuraba: del pasaje al condominio, y sin hospital en la comuna",
            "parrafos": [
                "Huechuraba se atiende distinto según de qué lado vivas. En La Pincoya y El Barrero hay pasajes estrechos y blocks de pocos pisos sin ascensor: avísanos el piso y si hay escalera al coordinar, porque el kinesiólogo sube con camilla y equipamiento. En Pedro Fontova, El Carmen y Santa Marta predominan los condominios de casas con control de acceso, y en Ciudad Empresarial las torres con conserjería y ascensor, donde basta dejar el nombre del kinesiólogo en portería. Al pie de los cerros Punta Mocha y La Región varias calles quedan en subida, algo que se considera al planificar la marcha.",
                "Dentro de la comuna no hay hospital. La urgencia local es de atención primaria, en el SAR La Pincoya y el SAPU Los Libertadores, con horarios acotados que conviene confirmar por teléfono. La urgencia hospitalaria de adultos es el Hospital San José y la pediátrica el Hospital Roberto del Río, ambos en Independencia. Ante una emergencia llama al SAMU al 131: la kinesiología no reemplaza esa atención.",
                "Si vuelves a casa tras una hospitalización, ten a mano la epicrisis y las indicaciones médicas para la evaluación inicial gratuita: con eso el kinesiólogo continúa lo que se hizo en el hospital, sin cruzar Vespucio Norte varias veces por semana. KINEUM es un servicio particular, sin convenio con hospitales ni clínicas, y entrega boleta de honorarios electrónica para reembolso en tu Isapre o seguro complementario, según tu plan."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En Huechuraba, la kinesiología geriátrica a domicilio empieza por el tramo que decide si la persona sale o se queda encerrada. En la autoconstrucción de La Pincoya y El Barrero ese tramo suele ser el peldaño de la entrada, muchas veces sin baranda donde afirmarse, seguido de un pasaje angosto donde no cabe un andador de lado a lado. Ahí trabajamos fuerza de piernas y el gesto exacto de subir y bajar ese escalón, primero con apoyo del kinesiólogo y después con el punto de apoyo que existe en la casa. En los condominios de casas de Pedro Fontova, El Carmen o Santa Marta el problema es otro: la calle interior es segura y sin tráfico, pero tiene pendiente porque el sector está al pie de los cerros, así que la subida y la bajada se entrenan por separado y en distancias cortas. En Ciudad Empresarial, el hall y el ascensor sirven de circuito cuando afuera hace frío. Tras una caída con golpe en la cabeza, confusión o dolor intenso, primero va la evaluación médica.",
                "faqsLocales": [
                    {
                        "q": "Mi papá vive solo en El Barrero y le da miedo el escalón de la entrada. ¿Se puede trabajar eso en la sesión?",
                        "a": "Sí, y suele ser lo primero. Evaluamos su fuerza, su equilibrio y qué tiene realmente para afirmarse en esa entrada, y practicamos el escalón tal como está, con el apoyo que exista. Si no hay ninguno seguro, te indicamos qué apoyo conviene evaluar; la instalación la resuelve la familia, nosotros no hacemos obras en la casa."
                    },
                    {
                        "q": "Vivimos en un condominio de Santa Marta con calles internas en subida. ¿Sirven para las caminatas de mi mamá?",
                        "a": "Suelen servir, porque son tranquilas y sin tráfico. Empezamos por los tramos planos y recién después sumamos la subida, que exige más al corazón y a las piernas, y la bajada, que carga más las rodillas. El kinesiólogo define la distancia, el ritmo y si conviene bastón o acompañante."
                    }
                ],
                "seoTitle": "Kinesiología Geriátrica a Domicilio en Huechuraba",
                "seoDescription": "Kinesiólogo de adulto mayor a domicilio en Huechuraba: escalón de entrada, pasajes de La Pincoya y calles en subida. Evaluación inicial gratuita.",
                "keywords": [
                    "kinesiología geriátrica a domicilio Huechuraba",
                    "kinesiólogo adulto mayor Huechuraba",
                    "rehabilitación adulto mayor Huechuraba",
                    "prevención de caídas Huechuraba",
                    "kinesiólogo adulto mayor Pedro Fontova",
                    "kine tercera edad Huechuraba"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "El alta quirúrgica te devuelve a una comuna sin hospital propio: los controles con el cirujano quedan fuera de Huechuraba, y repetir ese viaje por Av. Recoleta o Vespucio Norte dos o tres veces por semana es justo lo que más cuesta cuando recién te operaron la cadera, la rodilla, el hombro o la columna. La rehabilitación postquirúrgica a domicilio deja esos traslados solo para los controles médicos. Lo que cambia el plan acá es la puerta de tu casa: si vives en una torre de Ciudad Empresarial, el ascensor y el estacionamiento subterráneo hacen que tus primeras salidas con muletas sean cortas y bajo techo; si vives en un block sin ascensor o en una casa con escalones en La Pincoya, ese tramo hay que practicarlo antes de que tengas que usarlo para ir al control, y conviene tenerlo resuelto con quien te acompañe. El kinesiólogo trabaja dentro de lo que autorizó tu cirujano. Fiebre, herida con secreción o dolor que aumenta de golpe son motivo de consulta médica pronta; falta de aire repentina o dolor en el pecho, SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "Me dan el alta en el Hospital San José y vuelvo a mi casa en Huechuraba. ¿Pueden empezar ahí?",
                        "a": "Sí, siempre que tu equipo tratante lo indique. Lleva la epicrisis y las indicaciones escritas a la evaluación inicial gratuita y con eso se arma el plan. KINEUM no tiene convenio con hospitales ni clínicas: contratas de forma particular y recibes boleta de honorarios electrónica para pedir reembolso en tu Isapre o seguro complementario, según tu plan."
                    },
                    {
                        "q": "Vivo en una torre de Ciudad Empresarial con conserjería. ¿Cómo entra el kinesiólogo con la camilla?",
                        "a": "Avisa en portería el día anterior y deja registrado el nombre del kinesiólogo. El equipo es portátil y sube en el ascensor sin problema; si el edificio exige entrada por el subterráneo o algún registro especial, cuéntanoslo al coordinar por WhatsApp para llegar a la hora acordada."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica a Domicilio Huechuraba",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en Huechuraba: el alta te deja sin hospital en la comuna y con controles fuera. Evaluación inicial gratuita.",
                "keywords": [
                    "rehabilitación postquirúrgica a domicilio Huechuraba",
                    "kinesiólogo post operatorio Huechuraba",
                    "kinesiología prótesis de rodilla Huechuraba",
                    "rehabilitación después de una operación Huechuraba",
                    "kinesiología post cirugía Ciudad Empresarial",
                    "kinesiólogo después del alta Huechuraba"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En Huechuraba, lo que más tranquiliza a una familia con un niño que se enferma de los bronquios no es la técnica de la sesión, sino tener anotado en el refrigerador qué hacer si el cuadro se sale de control. La puerta pediátrica dentro de la comuna es el SAR La Pincoya, que atiende urgencia de atención primaria pero no funciona las 24 horas; del SAPU Los Libertadores no hay confirmación de atención pediátrica, así que no conviene llegar ahí con una guagua sin llamar antes. Cerrada esa ventana, el trayecto real es hacia la urgencia pediátrica del Hospital Roberto del Río, en Independencia. Por eso en la primera visita dejamos anotados los teléfonos y el orden en que hay que usarlos. Si el niño respira con esfuerzo evidente, se pone morado o deja de alimentarse, eso no espera la sesión: SAMU 131. La sesión en casa evita abrigarlo y subirlo al auto con fiebre para cruzar Vespucio Norte, y en adultos que salen de una neumonía permite espaciar las salidas mientras recuperan tolerancia al esfuerzo.",
                "faqsLocales": [
                    {
                        "q": "Es de madrugada y mi hijo respira con mucho esfuerzo. ¿A dónde lo llevo desde Huechuraba?",
                        "a": "Llama al SAMU al 131. A esa hora el SAR La Pincoya y el SAPU Los Libertadores habitualmente no están funcionando, porque atienden de tarde y noche y no las 24 horas, así que la referencia de madrugada es la urgencia pediátrica del Hospital Roberto del Río, en Independencia. La kinesiología respiratoria no reemplaza esa atención."
                    },
                    {
                        "q": "El pediatra indicó kinesiología respiratoria. ¿Pueden venir un fin de semana a Huechuraba?",
                        "a": "Sí, atendemos de lunes a domingo y coordinamos la hora por WhatsApp al +56 9 9967 9593. Eso evita sacar de la casa a un niño con fiebre. Si durante el fin de semana aparecen señales de alarma, no esperes la sesión: urgencia o SAMU 131."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio Huechuraba",
                "seoDescription": "Kinesiología respiratoria a domicilio en Huechuraba, niños y adultos: a qué urgencia acudir si el cuadro empeora. Evaluación inicial gratuita.",
                "keywords": [
                    "kinesiología respiratoria Huechuraba",
                    "kinesiólogo respiratorio a domicilio Huechuraba",
                    "kinesiología respiratoria niños Huechuraba",
                    "kine respiratoria La Pincoya",
                    "bronquitis obstructiva Huechuraba",
                    "kinesiólogo respiratorio adulto mayor Huechuraba"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Después de un ACV, lo que se juega en Huechuraba es la logística del día a día. El control neurológico queda cruzando hacia Independencia y dentro de la comuna el Metro solo toca el borde sur, con Vespucio Norte en la Línea 2 y Los Libertadores en la Línea 3, así que casi todo lo demás se hace en micro o en auto. Cada sesión que no obliga a mover a la persona es una salida menos que organizar. Si vives en un block de La Pincoya sin ascensor, lo primero suele ser resolver cómo se baja la escalera con ayuda, porque de eso dependen los controles médicos; si vives en una torre de Ciudad Empresarial, el ascensor y el hall permiten practicar la salida a la calle desde temprano, y en los condominios de casas de Pedro Fontova el objetivo es el desnivel de la entrada y el recorrido por la calle interior. Le enseñamos a quien cuida a asistir sin lesionarse la espalda y a repartir el esfuerzo entre dos personas cuando hace falta. Ante pérdida súbita de fuerza, dificultad para hablar o la cara desviada, SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "Mi papá volvió del hospital en silla de ruedas y vivimos en un tercer piso sin ascensor en La Pincoya. ¿Cómo lo bajamos para el control en Independencia?",
                        "a": "Eso se planifica antes, no el día del control. Evaluamos cuánto puede colaborar él, entrenamos con ustedes la técnica de traslado tramo a tramo y el uso del descanso entre pisos, y definimos si hacen falta dos personas o un servicio de traslado. Si la escalera no es segura tal como está, te lo decimos y conviene preguntar a su equipo tratante si algún control se puede resolver de otra forma."
                    },
                    {
                        "q": "No tenemos auto y el Metro nos queda en el borde de la comuna. ¿Eso complica la rehabilitación?",
                        "a": "Para las sesiones no: el kinesiólogo llega a tu casa de lunes a domingo, con hora fija coordinada por WhatsApp al +56 9 9967 9593. Lo que sí conviene es agrupar los controles médicos fuera de la comuna y pedir las indicaciones por escrito, para que cada viaje rinda y el trabajo en casa siga la misma línea."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica a Domicilio Huechuraba",
                "seoDescription": "Rehabilitación neurológica a domicilio en Huechuraba tras un ACV: menos traslados fuera de la comuna. Evaluación inicial gratuita.",
                "keywords": [
                    "rehabilitación neurológica a domicilio Huechuraba",
                    "kinesiólogo neurológico Huechuraba",
                    "kinesiología ACV Huechuraba",
                    "rehabilitación post ACV Huechuraba",
                    "kinesiólogo neurorrehabilitación Huechuraba",
                    "kinesiología a domicilio hemiplejia Huechuraba"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "La kinesiología traumatológica a domicilio resuelve esguinces, lumbago, hombro doloroso, tendinopatías y secuelas de una fractura ya consolidada. En Huechuraba conviene definir desde el comienzo para qué terreno estás entrenando, porque no es lo mismo volver a un pasaje plano de El Barrero que a una calle en cuesta al pie de los cerros Punta Mocha y La Región: si tu casa queda en subida, el alta funcional recién llega cuando esa cuesta deja de doler al día siguiente. Si trabajas en las oficinas de Ciudad Empresarial, el cuadro más común es otro: muchas horas sentado, el auto o el bus por Vespucio Norte y una espalda que reclama al final del día, así que revisamos tu puesto, tus pausas y cómo cargas el bolso. Y si vives en un block, la escalera pasa a ser parte del entrenamiento de carga en vez de algo que evitar. Usamos terapia manual y ejercicio progresivo; los plazos dependen de tu lesión y de tu respuesta, así que no comprometemos fechas. Si tras un golpe hay deformidad o no logras apoyar, eso se descarta antes con radiografía.",
                "faqsLocales": [
                    {
                        "q": "Trabajo en una oficina de Ciudad Empresarial y ando con lumbago hace dos semanas. ¿Pueden atenderme al terminar la jornada?",
                        "a": "Sí. Atendemos de lunes a domingo y la hora se fija al coordinar por WhatsApp, así que puede ser al salir del trabajo, en tu casa. La sesión dura alrededor de 60 minutos e incluye terapia manual, ejercicio y ajustes a tu puesto y tus pausas, sin sumar otro traslado por Vespucio Norte."
                    },
                    {
                        "q": "Me caí un domingo por la tarde y la muñeca quedó hinchada. ¿Voy a un SAPU de Huechuraba?",
                        "a": "Si hay deformidad, no puedes mover los dedos o el dolor es muy intenso, necesitas evaluación médica y probablemente una radiografía. Dentro de la comuna la urgencia es de atención primaria y con horario acotado, así que confirma por teléfono antes de salir; la urgencia hospitalaria de adultos de referencia es el Hospital San José, en Independencia. Con el diagnóstico en mano, la kinesiología parte en tu casa."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica a Domicilio Huechuraba",
                "seoDescription": "Kinesiólogo traumatológico a domicilio en Huechuraba: esguinces, lumbago y volver a subir tu calle. Evaluación inicial gratuita.",
                "keywords": [
                    "kinesiología traumatológica a domicilio Huechuraba",
                    "kinesiólogo traumatológico Huechuraba",
                    "kinesiólogo esguince de tobillo Huechuraba",
                    "tratamiento de lumbago a domicilio Huechuraba",
                    "kinesiólogo dolor de hombro Huechuraba",
                    "kinesiología lumbago Ciudad Empresarial"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Huechuraba, Santiago",
            "description": "Kinesiólogo a domicilio en Huechuraba: La Pincoya, Pedro Fontova, Santa Marta y Ciudad Empresarial. Evaluación inicial gratuita, lunes a domingo.",
            "keywords": [
                "kinesiólogo a domicilio Huechuraba",
                "kinesiología a domicilio Huechuraba",
                "kinesiólogo Huechuraba",
                "kine a domicilio Huechuraba",
                "rehabilitación a domicilio Huechuraba",
                "kinesiólogo domicilio La Pincoya",
                "kinesiólogo Ciudad Empresarial",
                "kinesiología particular Huechuraba"
            ]
        }
    },
    "conchali": {
        "centrosSalud": [
            {
                "nombre": "SAR Conchalí, Av. Independencia 5663",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Única urgencia de la comuna con atención 24 h documentada. No está documentada una urgencia pediátrica diferenciada"
            },
            {
                "nombre": "SAPU CESFAM Dr. Lucas Sierra, Av. Pedro Fontova 4107",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria sobre el eje Pedro Fontova; su horario no está publicado de forma confiable, confírmalo antes de ir"
            },
            {
                "nombre": "CESFAM Juanita Aguirre, Altona 1835",
                "tipo": "CESFAM",
                "nota": "Atención primaria del sector Juanita Aguirre; consulta horario antes de acudir"
            },
            {
                "nombre": "CESFAM José Symon Ojeda, Av. El Cortijo 2895",
                "tipo": "CESFAM",
                "nota": "Atención primaria del sector El Cortijo; consulta horario antes de acudir"
            },
            {
                "nombre": "CESFAM Alberto Bachelet Martínez, Guanaco 3250",
                "tipo": "CESFAM",
                "nota": "Atención primaria sobre el eje Guanaco; consulta horario antes de acudir"
            },
            {
                "nombre": "Complejo Hospitalario San José, Prof. Alberto Zañartu 1085-1130",
                "tipo": "hospital público",
                "nota": "Está en Independencia, comuna vecina al sur. Urgencia adulto 24 h; es el hospital público de referencia del sector"
            },
            {
                "nombre": "Hospital de Niños Dr. Roberto del Río, Prof. Alberto Zañartu 1085",
                "tipo": "hospital público",
                "nota": "Está en Independencia, comuna vecina al sur. Urgencia infantil 24 h"
            },
            {
                "nombre": "Clínica Dávila, Av. Recoleta 464",
                "tipo": "clínica privada",
                "nota": "Está en Recoleta, comuna vecina. Urgencia 24 h adulto y pediátrica"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Conchalí: del pasaje interior al eje de Av. Independencia",
            "parrafos": [
                "Conchalí cabe en 10,7 km² completamente urbanizados y se cruza rápido, así que las horas se pueden dejar seguidas y ajustadas. Lo que cambia de una cuadra a otra es la vivienda: pasajes de casas pareadas de uno o dos pisos, blocks de vivienda social sin ascensor y condominios más nuevos como La Ciudadela y San Fernando. Al agendar conviene decir el piso, si hay ascensor y una referencia clara de la entrada, porque en los pasajes interiores, angostos y con autos a ambos lados, dejar el auto puede tomar más que el trayecto mismo. El equipamiento es portátil y se sube a mano.",
                "La red de la comuna es de atención primaria: los CESFAM Juanita Aguirre, José Symon Ojeda y Alberto Bachelet, el SAPU de Av. Pedro Fontova y el SAR de Av. Independencia 5663, la única urgencia de la comuna con atención 24 h documentada. La urgencia hospitalaria de referencia queda en Independencia, bajando por la misma avenida: el Complejo Hospitalario San José para adultos y el Hospital de Niños Roberto del Río para menores. Si vienes saliendo de alta, junta el informe de egreso y las indicaciones antes de la evaluación inicial gratuita: sobre esa pauta se arma el plan. KINEUM es un servicio particular e independiente, sin convenio con hospitales, clínicas ni isapres.",
                "Ante una urgencia, como falta de aire, dolor en el pecho o pérdida súbita de fuerza, la kinesiología no es el camino: llama al SAMU 131."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En Conchalí la vivienda es mezclada dentro de una misma cuadra: pasajes de casas pareadas de uno o dos pisos, blocks sin ascensor y condominios más nuevos como La Ciudadela o San Fernando. Para muchos adultos mayores la salida de la casa pasa por una escalera común angosta, con baranda a un solo lado, o por el peldaño de la entrada al pasaje. Cuando ese tramo empieza a dar miedo, la persona sale menos y la pérdida de fuerza suele llegar sola. Por eso, si la evaluación lo permite, parte de la sesión se hace en el acceso real de su departamento o de su casa: fuerza de piernas, equilibrio, técnica de apoyo y cómo levantarse de la silla sin impulso. Dentro del hogar se ajusta lo que se puede cambiar sin obra: si la cama quedó demasiado baja para levantarse sola, una barra en el baño o dejar despejado el trayecto que hace de noche. Si hubo una caída con golpe en la cabeza, confusión o la persona no logra ponerse de pie, primero va la evaluación médica.",
                "faqsLocales": [
                    {
                        "q": "Vivimos en un pasaje interior por Juanita Aguirre y casi no hay dónde estacionar, ¿es un problema?",
                        "a": "No. El equipamiento es portátil y se camina desde donde se pueda dejar el auto, que en los pasajes de Conchalí a veces es media cuadra antes. Al escribir al +56 9 9967 9593 danos una referencia clara de la entrada y avísanos el piso y si hay ascensor."
                    },
                    {
                        "q": "Mi mamá ya no se atreve a bajar la escalera del block, ¿hasta dónde se puede trabajar?",
                        "a": "Se parte puertas adentro, con fuerza de piernas y equilibrio, y la escalera se practica acompañada cuando hay base suficiente. Si todavía no es seguro para ella, el kinesiólogo lo dice y se sigue trabajando dentro del departamento."
                    }
                ],
                "seoTitle": "Kinesiología Geriátrica a Domicilio en Conchalí",
                "seoDescription": "Kinesiología geriátrica a domicilio en Conchalí: fuerza, equilibrio y la escalera común del block, en la casa del adulto mayor.",
                "keywords": [
                    "kinesiólogo adulto mayor Conchalí",
                    "kinesiología geriátrica a domicilio Conchalí",
                    "rehabilitación adulto mayor Conchalí",
                    "prevención de caídas Conchalí",
                    "kinesiólogo para persona mayor en casa Conchalí",
                    "kine tercera edad Conchalí"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Si te operaron y quedaste con indicación de kinesiología, en Conchalí el problema suele ser el viaje de vuelta. El hospital público de referencia del sector es el Complejo Hospitalario San José, en Independencia: si tu alta salió de ahí, cada control es bajar por la misma Av. Independencia. Repetir ese trayecto dos o tres veces por semana solo para rehabilitarte, con una rodilla, una cadera o un hombro recién operados, significa además caminar hasta el paradero o hasta Metro Conchalí, Vivaceta o Cardenal Caro. La rehabilitación postquirúrgica a domicilio saca ese viaje de la ecuación: el kinesiólogo llega con la camilla, revisa el documento de alta y la pauta del cirujano, y trabaja rango de movimiento, fuerza y marcha con bastón o andador dentro de tu casa, incluido el acceso que vas a tener que usar igual. KINEUM atiende de forma particular y no tiene convenio con ese hospital ni con ninguna clínica. Fiebre, herida con secreción o dolor que aumenta de golpe son motivo de consulta médica pronta; ante falta de aire o dolor en el pecho, llama al SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "Me operaron en el Hospital San José y vivo en Conchalí, ¿pueden seguir la rehabilitación en mi casa?",
                        "a": "Sí. Con el documento de alta del cirujano a la vista, el kinesiólogo arma el plan respetando las restricciones de carga y tus fechas de control. KINEUM es un servicio particular, sin convenio con ese hospital ni con ningún otro centro."
                    },
                    {
                        "q": "Los días que tengo control en Independencia, ¿pierdo la sesión?",
                        "a": "No, la hora se mueve. Atendemos de lunes a domingo y el horario se coordina por WhatsApp al +56 9 9967 9593, así que la sesión se corre a otra hora del mismo día o al día siguiente."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica en Casa, Conchalí",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en Conchalí tras el alta: rango, fuerza y marcha en tu casa, sin sumar traslados por Av. Independencia.",
                "keywords": [
                    "rehabilitación postquirúrgica Conchalí",
                    "kinesiólogo post operatorio Conchalí",
                    "rehabilitación prótesis de rodilla Conchalí",
                    "kinesiólogo después de una operación Conchalí",
                    "rehabilitación en casa tras el alta Conchalí",
                    "kinesiología post cirugía de cadera Conchalí"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "La kinesiología respiratoria a domicilio en Conchalí se usa sobre todo en dos escenarios: guaguas y niños con cuadros bronquiales en invierno, y adultos que salen de una neumonía o viven con una enfermedad pulmonar crónica. En la sesión se trabaja el despeje de secreciones, el patrón respiratorio y la tolerancia al esfuerzo, siempre según la indicación médica. Acá lo local pesa más que en otras especialidades, porque conviene tener decidido de antemano a dónde ir si la cosa se complica de noche. La red de la comuna es de atención primaria y la urgencia con 24 h documentadas dentro de Conchalí es el SAR de Av. Independencia 5663; del SAPU de Av. Pedro Fontova y de los CESFAM conviene confirmar el horario antes de salir. La urgencia infantil de referencia queda fuera de la comuna: el Hospital de Niños Dr. Roberto del Río, en Prof. Alberto Zañartu 1085, Independencia, y en el sector privado la urgencia pediátrica de Clínica Dávila, en Recoleta. Respiración muy rápida, hundimiento entre las costillas, labios morados o decaimiento marcado son señales de alarma: ahí no se espera al kinesiólogo, se llama al SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "Si mi hijo se complica de noche en Conchalí, ¿dónde hay urgencia infantil?",
                        "a": "Dentro de la comuna no hay una urgencia pediátrica verificada. La más cercana es el Hospital de Niños Roberto del Río, en Independencia, y en el sector privado la urgencia de Clínica Dávila, en Recoleta. Si le cuesta mucho respirar, llama primero al SAMU 131."
                    },
                    {
                        "q": "¿La kinesiología respiratoria sirve para no tener que ir a la urgencia?",
                        "a": "No reemplaza la atención médica. Ayuda a movilizar secreciones y a tolerar mejor el cuadro cuando el médico ya la indicó, pero ante señales de alarma hay que ir a la urgencia igual."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio, Conchalí",
                "seoDescription": "Kinesiología respiratoria a domicilio en Conchalí para niños y adultos: despeje de secreciones y señales de alarma claras. Evaluación gratuita.",
                "keywords": [
                    "kinesiología respiratoria Conchalí",
                    "kinesiólogo respiratorio a domicilio Conchalí",
                    "kinesiología respiratoria niños Conchalí",
                    "kine respiratoria bebé Conchalí",
                    "urgencia respiratoria infantil cerca de Conchalí",
                    "kinesiología bronquial Conchalí"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Después de un ACV, en Conchalí la parte más difícil suele empezar el día del alta. La persona vuelve a un departamento en altura sin ascensor o a una casa de pasaje, y cada control médico se convierte en una salida organizada por toda la familia; esa dificultad para salir es una de las razones por las que la continuidad del tratamiento se hace difícil. La rehabilitación neurológica a domicilio existe para sostenerla: el kinesiólogo parte del informe de egreso y de las indicaciones del neurólogo, y trabaja control de tronco, transferencias, equilibrio y marcha dentro de la casa, con la familia participando. Buena parte del tiempo se dedica a quien cuida: cómo movilizarla sin dañarse la espalda y cómo enfrentar la escalera común el día que sí haya que salir. También se aplica en Parkinson y en otras enfermedades progresivas. Un detalle local: la Autopista Central y Vespucio Norte parten la comuna, así que el trayecto a un control puede ser bastante más largo de lo que sugiere el mapa. Ante pérdida súbita de fuerza, dificultad para hablar o la cara desviada, llama de inmediato al SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "Vivimos en El Cortijo y su control queda al otro lado de la autopista, ¿se puede preparar esa salida en las sesiones?",
                        "a": "Sí. Se entrena el recorrido real: levantarse, llegar hasta el auto, subir y bajar de él y aguantar el tiempo de viaje sentado. Y la sesión se agenda en días sin control, para que no lleguen agotados a las dos cosas."
                    },
                    {
                        "q": "¿Cuánto hay que esperar después del alta para empezar en casa?",
                        "a": "Depende de lo que indique el equipo tratante. Escríbenos al +56 9 9967 9593 con el informe de egreso a la vista y la evaluación inicial gratuita define cuándo partir. Habitualmente la continuidad temprana rinde mejor, pero la indicación médica manda."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica a Domicilio, Conchalí",
                "seoDescription": "Rehabilitación neurológica a domicilio en Conchalí tras un ACV: transferencias, marcha y apoyo a quien cuida, en tu propia casa.",
                "keywords": [
                    "rehabilitación neurológica Conchalí",
                    "kinesiólogo neurológico a domicilio Conchalí",
                    "rehabilitación de ACV en casa Conchalí",
                    "kinesiología Parkinson Conchalí",
                    "continuidad de rehabilitación tras el alta Conchalí",
                    "rehabilitación post ACV Conchalí"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Un esguince de tobillo, un lumbago, una tendinopatía de hombro o las secuelas de una fractura se tratan con kinesiología traumatológica a domicilio sin pedir permiso en el trabajo para ir a un box. En Conchalí la parte funcional del tratamiento termina casi siempre en lo que haces a diario: volver de la feria con las bolsas por un pasaje angosto, esquivar los autos estacionados a ambos lados y entrar a tu casa o subir a tu departamento con esa carga encima. Eso es lo que se entrena, con el mismo peso y el mismo recorrido, y la progresión se ajusta por series, repeticiones y ritmo según cómo responda el dolor al día siguiente. Para volver a caminar o a trotar juega a favor que la comuna sea plana y chica: se dosifica por distancia y no por pendiente, y se arman circuitos en tu propio barrio cuidando los desniveles del pasaje. Si hay deformidad visible, no puedes apoyar el pie o el dolor no cede tras un golpe fuerte, primero hay que descartar una fractura con radiografía en una urgencia.",
                "faqsLocales": [
                    {
                        "q": "¿Se puede entrenar en el pasaje o hay que hacerlo todo adentro?",
                        "a": "Depende de la lesión y de la hora. El pasaje sirve para practicar marcha y carga en el terreno real, pero es angosto y con autos entrando y saliendo, así que lo de más riesgo se hace adentro y la salida se deja para el final de la sesión, acompañada."
                    },
                    {
                        "q": "Tengo lumbago y trabajo todo el día, ¿atienden fuera del horario de oficina en Conchalí?",
                        "a": "Atendemos de lunes a domingo y la hora se acuerda al agendar por WhatsApp al +56 9 9967 9593. Como la sesión es en tu casa, no pierdes el tiempo de ir y volver a un centro."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica en Casa, Conchalí",
                "seoDescription": "Kinesiología traumatológica a domicilio en Conchalí: esguinces, lumbago y hombro, con terapia manual y ejercicio en tu casa, de lunes a domingo.",
                "keywords": [
                    "kinesiólogo traumatológico Conchalí",
                    "kinesiología traumatológica a domicilio Conchalí",
                    "kinesiólogo esguince Conchalí",
                    "tratamiento de lumbago Conchalí",
                    "kinesiólogo para dolor de hombro Conchalí",
                    "rehabilitación de fractura Conchalí"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Conchalí, Santiago",
            "description": "Kinesiología a domicilio en Conchalí: sesiones en tu casa o departamento, de Vivaceta a El Cortijo. Evaluación inicial gratuita, lunes a domingo.",
            "keywords": [
                "kinesiólogo a domicilio Conchalí",
                "kinesiología a domicilio Conchalí",
                "kinesiólogo Conchalí",
                "kine a domicilio Conchalí",
                "rehabilitación a domicilio Conchalí",
                "kinesiólogo particular Conchalí",
                "fisioterapia a domicilio Conchalí"
            ]
        }
    },
    "recoleta": {
        "centrosSalud": [
            {
                "nombre": "Clínica Dávila Recoleta",
                "tipo": "Clínica privada",
                "nota": "Urgencia 24 h adulto y pediátrica, dentro de la comuna"
            },
            {
                "nombre": "SAR Recoleta Dr. Juan Carlos Concha (Av. Zapadores 1099)",
                "tipo": "Servicio de urgencia primaria (SAR)",
                "nota": "Urgencia primaria 24 h; si vas con un niño, confirma antes qué atención pediátrica hay disponible"
            },
            {
                "nombre": "CESFAM Recoleta (Av. Recoleta 740)",
                "tipo": "CESFAM",
                "nota": "Atención primaria y controles en horario hábil, no es urgencia"
            },
            {
                "nombre": "Hospital San José",
                "tipo": "Hospital público",
                "nota": "Urgencia 24 h de adultos. Está en Independencia, a pocas cuadras del límite poniente de Recoleta"
            },
            {
                "nombre": "Hospital de Niños Dr. Roberto del Río",
                "tipo": "Hospital público",
                "nota": "Urgencia pediátrica 24 h. También en Independencia, cruzando el límite poniente"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Recoleta: del Mapocho a Vespucio Norte",
            "parrafos": [
                "Recoleta se recorre por un eje: Av. Recoleta y la Línea 2 suben juntas de sur a norte, así que con nombrar tu estación, de Patronato a Zapadores, el domicilio queda ubicado. En el extremo sur, donde el comercio de La Vega y Patronato ocupa las calles con carga y descarga desde temprano, la hora se acuerda con anticipación.",
                "La vivienda cambia el plan más que la dirección. En Quinta Bella y Lo Aránguiz mandan los blocks de tres o cuatro pisos, sin ascensor: el kinesiólogo sube con camilla y equipamiento, y esos peldaños se aprovechan después como entrenamiento si el caso lo permite. En las casas antiguas de un piso de Valdivieso y Einstein sobra el pasillo largo para trabajar la marcha, y en los faldeos del Cerro Blanco y del San Cristóbal se suman pendientes y calles angostas que conviene practicar aparte.",
                "Un detalle propio: el hospital de referencia no está en Recoleta, sino cruzando el límite poniente, en Independencia, con el San José para adultos y el Roberto del Río para niños. Si el alta viene de ahí o de la Clínica Dávila Recoleta, la primera visita parte leyendo tu epicrisis y lo que indicó el equipo tratante, para retomar el trabajo donde quedó. KINEUM no forma parte de esos centros ni tiene acuerdos con ellos: le cobra directamente al paciente. Si algo se agrava antes de la sesión, el camino es el SAMU (131) o una urgencia abierta."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En Valdivieso y Einstein todavía abundan las casas antiguas de un piso: pasillo largo hasta el fondo, uno o dos peldaños para salir al patio y un baño al que se llega recorriendo media casa. Ahí no hay escalera que culpar, pero ese trayecto repetido diez veces al día es justamente donde ocurren los tropiezos, sobre todo de noche y con poca luz. La kinesiología geriátrica a domicilio se arma alrededor de ese recorrido: fuerza de piernas, equilibrio, cómo pararse de la cama o del sillón sin impulso, y una revisión del piso, la iluminación y los puntos donde apoyarse. Después viene la calle. Para mucha gente mayor de Recoleta el paseo que importa es cruzar Av. Recoleta hasta la feria o el almacén, y ese cruce, con vereda irregular, semáforo corto y bolsas de vuelta, se entrena aparte y primero acompañada. Si vive en un block del sector norte, los peldaños se incorporan al plan una vez que la evaluación muestra que es seguro. Y si se cae y se golpea la cabeza, vomita o deja de mover bien un brazo, primero el médico.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en Valdivieso y ya casi no cruza Av. Recoleta para ir a la feria. ¿Se puede trabajar eso?",
                        "a": "Sí. Primero se evalúa su marcha y su equilibrio dentro de la casa, en el pasillo y en el peldaño del patio, y recién después se practica el trayecto real: la vereda, el desnivel de la esquina y la vuelta con peso en las manos. Se avanza por tramos, acompañada, y con la distancia que resista sin quedar agotada."
                    },
                    {
                        "q": "¿Sirve la kinesiología si mi papá solo se mueve entre la cama, el sillón y el baño?",
                        "a": "Suele ser el mejor momento para empezar, porque esos tres traslados son los que sostienen su independencia. Se trabaja levantarse sin impulso, girar sin perder el equilibrio y llegar de noche al baño sin tropezar. Sus controles siguen igual con su médico o en el CESFAM que le corresponde."
                    }
                ],
                "seoTitle": "Kinesiólogo Adulto Mayor a Domicilio, Recoleta",
                "seoDescription": "Kinesiólogo para adulto mayor a domicilio en Recoleta: marcha en el pasillo de la casa, cruces de Av. Recoleta y prevención de caídas.",
                "keywords": [
                    "kinesiólogo para adulto mayor Recoleta",
                    "kinesiología geriátrica Recoleta",
                    "prevención de caídas adulto mayor Recoleta",
                    "kinesiólogo adulto mayor a domicilio Valdivieso",
                    "rehabilitación de la marcha adulto mayor Recoleta",
                    "kinesiólogo domiciliario tercera edad Recoleta"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "La Clínica Dávila Recoleta está dentro de la comuna y el Hospital San José queda a pocas cuadras del límite poniente, en Independencia, así que es probable que te operen cerca de casa. Estar cerca, eso sí, no te ahorra el viaje de vuelta. Con una rodilla, una cadera o un hombro recién operados, ir dos o tres veces por semana a sesión significa bajar por Av. Recoleta en hora punta, subirse a una micro con muletas o enfrentar las escaleras de tu estación de la Línea 2. La rehabilitación postquirúrgica a domicilio borra ese trayecto: el kinesiólogo llega con el equipamiento, lee tu epicrisis y el protocolo del cirujano y avanza en movilidad, en fuerza y en volver a caminar, sin pasarse de la carga autorizada. Los controles médicos sí siguen en tu agenda, y ese camino hasta el auto o el paradero se practica antes. KINEUM le cobra directamente al paciente, sin convenio con esos centros. Una herida caliente o con secreción, fiebre o una pantorrilla hinchada se consultan el mismo día; si falta el aire de golpe o aprieta el pecho, marca 131.",
                "faqsLocales": [
                    {
                        "q": "Me operan en la Clínica Dávila Recoleta. ¿Hay que pedir algo especial ahí para que vayan a mi casa?",
                        "a": "No. KINEUM es un servicio particular y no tiene convenio con la clínica, así que el trámite no pasa por ella: con tu epicrisis y la indicación de tu cirujano se agenda la evaluación inicial gratuita y se parte el día que él lo autorice."
                    },
                    {
                        "q": "Vivo en un cuarto piso sin ascensor en Zapadores. ¿Puedo empezar aunque no pueda salir del departamento?",
                        "a": "Sí, esa es justamente la idea: el kinesiólogo sube y la sesión se hace ahí. Salir pasa a ser una meta del plan, primero hasta el descanso de la escalera y después hasta la reja, sin pasarte de la carga que autorizó el cirujano."
                    }
                ],
                "seoTitle": "Kinesiólogo Post Operatorio en Casa, Recoleta",
                "seoDescription": "Kinesiólogo post operatorio a domicilio en Recoleta: rodilla, cadera u hombro sin bajar por Av. Recoleta ni usar las escaleras del Metro.",
                "keywords": [
                    "kinesiólogo post operatorio Recoleta",
                    "rehabilitación postquirúrgica a domicilio Recoleta",
                    "kinesiología después de operación de rodilla Recoleta",
                    "rehabilitación de cadera operada Recoleta",
                    "rehabilitación de hombro operado a domicilio Recoleta",
                    "kinesiología post operatoria en casa Recoleta"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En Patronato y Cerro Blanco se vive en departamentos chicos y en pisos altos, y sacar a la calle a una guagua con tos, o a un adulto al que le falta el aire a las dos cuadras, cuesta más de lo que parece: ascensor lleno o escalera, vereda ocupada por mercadería y espera de micro en Av. Recoleta. La kinesiología respiratoria a domicilio evita esa salida. En el mismo departamento se trabaja el despeje de secreciones, el patrón respiratorio y la tolerancia al esfuerzo según lo que haya indicado el médico, y no hace falta espacio: basta la cama o el sillón. Hay señales, en cambio, que no admiten esperar la sesión. Fíjate si el pecho se le hunde bajo las costillas, si las respiraciones se vuelven cortas y rápidas, si se pone azuloso alrededor de la boca, si está muy dormido o si deja de comer. Con cualquiera de ellas, urgencia: dentro de la comuna atiende 24 horas la Clínica Dávila Recoleta, y el Hospital de Niños Dr. Roberto del Río queda en Independencia, cruzando el límite poniente. Si no puedes trasladarlo, llama al 131.",
                "faqsLocales": [
                    {
                        "q": "Vivo en un departamento chico en Patronato. ¿Hay espacio suficiente para la sesión?",
                        "a": "Sí. La kinesiología respiratoria se hace sobre la cama, en el sillón o en brazos si es una guagua, así que no tienes que despejar la pieza. Lo que conviene es ventilar antes y tener a mano el inhalador y la aerocámara si el médico los indicó."
                    },
                    {
                        "q": "Si mi hijo se complica de noche, ¿me sirve el SAR de Av. Zapadores?",
                        "a": "El SAR Dr. Juan Carlos Concha atiende urgencias las 24 horas, pero si vas con un niño confirma antes qué atención pediátrica hay disponible. Con señales de dificultad para respirar, lo más seguro es la urgencia pediátrica de la Clínica Dávila Recoleta, en la comuna, o el Hospital Roberto del Río, en Independencia. Si es grave, llama al 131."
                    }
                ],
                "seoTitle": "Kinesiólogo Respiratorio a Domicilio, Recoleta",
                "seoDescription": "Kinesiología respiratoria a domicilio en Recoleta para niños y adultos: señales de alarma y dónde queda la urgencia pediátrica más cercana.",
                "keywords": [
                    "kinesiólogo respiratorio Recoleta",
                    "KTR a domicilio Recoleta",
                    "kinesiología respiratoria niños Recoleta",
                    "kinesiólogo respiratorio para bebé Recoleta",
                    "kinesiología respiratoria adulto mayor Recoleta",
                    "kinesiólogo respiratorio a domicilio Cerro Blanco"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "En Recoleta, después de un ACV el alta suele llegar desde fuera de la comuna: el hospital de referencia es el San José, en Independencia, a pocas cuadras del límite poniente. El equipo que conoce el caso queda cruzando ese límite, y cada control significa mover a alguien que todavía no camina solo. La rehabilitación neurológica a domicilio sostiene ese intermedio: el kinesiólogo toma la epicrisis y la pauta que dejó el neurólogo, y desde ahí entrena control de tronco, transferencias, equilibrio y marcha con lo que la persona pueda hacer hoy. Lo mismo vale en Parkinson u otras condiciones progresivas. Buena parte del trabajo es con quien cuida: cómo pasar a la persona de la cama a la silla sin lesionarse la espalda, cómo acomodarla para dormir y cómo preparar la salida a un control: quién ayuda, por dónde entra el auto y cuántas manos hacen falta. Si de pronto un lado del cuerpo pierde fuerza, la cara se desvía o las palabras no salen, no esperes a la próxima sesión: marca 131, porque puede tratarse de otro ACV.",
                "faqsLocales": [
                    {
                        "q": "El alta viene del Hospital San José, que está en Independencia. ¿Igual atienden en Recoleta?",
                        "a": "Sí. Recoleta está dentro de la cobertura y el kinesiólogo va a tu casa. El hospital donde estuvo internado no cambia nada, porque KINEUM es un servicio particular y no depende de ningún centro: para la primera visita basta con la epicrisis, la pauta que dejó el neurólogo y la lista de medicamentos."
                    },
                    {
                        "q": "Tenemos control en Independencia cada cierto tiempo y mi marido no camina. ¿Pueden ayudarnos a preparar esa salida?",
                        "a": "Sí, se practica dentro del plan: la transferencia a la silla, el paso por la puerta y el traspaso al auto, con la técnica que corresponda según su peso y el tuyo. Si todavía no es seguro hacerlo entre ustedes, se dice con claridad y se busca apoyo de otra persona o de un servicio de traslado."
                    }
                ],
                "seoTitle": "Kinesiólogo Post ACV a Domicilio en Recoleta",
                "seoDescription": "Kinesiólogo a domicilio en Recoleta tras un ACV o con Parkinson: continuidad del alta del Hospital San José y apoyo a quien cuida en casa.",
                "keywords": [
                    "kinesiólogo post ACV a domicilio Recoleta",
                    "rehabilitación neurológica Recoleta",
                    "neurorehabilitación a domicilio Recoleta",
                    "kinesiología para Parkinson Recoleta",
                    "rehabilitación tras alta hospitalaria Recoleta",
                    "kinesiólogo neurológico a domicilio Zapadores"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Las lesiones que se repiten en el sur de Recoleta tienen la forma del trabajo del barrio: horas de pie tras el mesón en Patronato, carretillas cargadas y peldaños de galpón en La Vega Central y Tirso de Molina, cajas que se levantan en el pasillo porque no hay dónde apoyarlas. De ahí salen los lumbagos, los hombros que duelen al subir el brazo y los tobillos que se doblan en una vereda ocupada por mercadería. Más al norte pasa otra cosa: quien vive en los faldeos del Cerro Blanco o hacia El Salto vuelve a su casa en subida, y esa cuesta diaria es un examen para una rodilla que recién se está recuperando. La kinesiología traumatológica a domicilio parte de ese uso real del cuerpo, con control del dolor, recuperación de movilidad y fuerza y una vuelta graduada a la carga, con metas concretas: levantar sin que se dispare el dolor, aguantar el turno completo, subir tu cuadra sin detenerte. Si tras un golpe el pie no soporta peso, la articulación cambia de forma o el dolor no cede, primero una urgencia para descartar fractura.",
                "faqsLocales": [
                    {
                        "q": "Paso el día de pie atendiendo en Patronato y me duele la espalda baja. ¿Tengo que dejar de trabajar para mejorar?",
                        "a": "No siempre. En la evaluación se revisa qué posturas y qué movimientos del mesón te disparan el dolor, y se ajusta cómo cargas y cada cuánto cambias de posición mientras avanza el tratamiento. Si aparece debilidad o adormecimiento en las piernas, o pierdes control de la orina, consulta de urgencia antes de seguir."
                    },
                    {
                        "q": "Me torcí el tobillo bajando cajas en La Vega. ¿Llamo al kinesiólogo o voy a urgencia?",
                        "a": "Primero urgencia si no puedes apoyar, si se hincha de golpe o si se ve deformado: dentro de la comuna atienden las 24 horas el SAR Dr. Juan Carlos Concha y la Clínica Dávila Recoleta. Si fue trabajando, avisa a tu empleador para que se tramite como accidente laboral. Con el diagnóstico en mano, la kinesiología en tu casa puede partir."
                    }
                ],
                "seoTitle": "Kinesiólogo Traumatológico a Domicilio, Recoleta",
                "seoDescription": "Kinesiólogo traumatológico a domicilio en Recoleta: lumbagos por carga en La Vega, hombros y tobillos, tratados en tu casa y sin traslados.",
                "keywords": [
                    "kinesiólogo traumatológico Recoleta",
                    "kinesiología para dolor lumbar Recoleta",
                    "esguince de tobillo kinesiólogo Recoleta",
                    "dolor de hombro kinesiólogo a domicilio Recoleta",
                    "kinesiología por sobrecarga laboral Recoleta",
                    "rehabilitación de rodilla a domicilio Recoleta"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Recoleta | Evaluación Gratis",
            "description": "Kinesiólogo a domicilio en Recoleta, de Patronato a Zapadores: adulto mayor, post operados y pacientes neurológicos. Evaluación inicial gratuita.",
            "keywords": [
                "kinesiólogo a domicilio Recoleta",
                "kinesiología a domicilio Recoleta",
                "kinesiólogo Recoleta",
                "rehabilitación a domicilio Recoleta",
                "kinesiólogo a domicilio Patronato",
                "kinesiólogo a domicilio Quinta Bella",
                "kinesiólogo domiciliario Recoleta"
            ]
        }
    },
    "independencia": {
        "centrosSalud": [
            {
                "nombre": "Complejo Hospitalario San José",
                "tipo": "Hospital público",
                "nota": "Urgencia 24 h en el polo hospitalario del norte. Para niños, el Hospital Roberto del Río está a pocas cuadras"
            },
            {
                "nombre": "Hospital de Niños Dr. Roberto del Río",
                "tipo": "Hospital público",
                "nota": "Urgencia pediátrica 24 h, referencia del sector norte de Santiago"
            },
            {
                "nombre": "Hospital Clínico de la Universidad de Chile Dr. José Joaquín Aguirre",
                "tipo": "Hospital público",
                "nota": "Urgencia 24 h de adultos y de niños, en el eje de Av. Independencia"
            },
            {
                "nombre": "SAPU Dr. Agustín Cruz Melo",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria asociada al CESFAM del mismo nombre; atiende en horario vespertino y nocturno, no las 24 h, así que confirma antes de ir"
            },
            {
                "nombre": "SAPU Juan Antonio Ríos",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Misma modalidad de urgencia primaria, en el sector de la Población Juan Antonio Ríos"
            },
            {
                "nombre": "CESFAM Dr. Agustín Cruz Melo",
                "tipo": "CESFAM",
                "nota": "Atención primaria comunal: controles, recetas y derivaciones"
            },
            {
                "nombre": "CESFAM Juan Antonio Ríos",
                "tipo": "CESFAM",
                "nota": "Atención primaria para el sector de la Juan Antonio Ríos; no atiende urgencias"
            },
            {
                "nombre": "CECOSF Las Enredaderas",
                "tipo": "CECOSF",
                "nota": "Centro comunitario de salud familiar, para atenciones de menor complejidad cerca del domicilio"
            },
            {
                "nombre": "Clínica Dávila",
                "tipo": "Clínica privada",
                "nota": "Está en Recoleta, en Av. Recoleta 464, a pocas cuadras del límite de Independencia. Urgencia 24 h adulto y pediátrica"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Independencia: cités, blocks y el polo hospitalario del norte",
            "parrafos": [
                "En Independencia la sesión se arma según cómo sea tu casa. En la Población Juan Antonio Ríos y en otros conjuntos antiguos mandan los blocks de baja altura sin ascensor, y esa escalera pasa a ser parte del plan: el kinesiólogo sube con camilla plegable y equipamiento portátil. En los cités de La Chimba y en los pasajes de la Zona Típica Los Castaños los accesos son estrechos, así que la sesión se monta en el living, el pasillo o el patio común.",
                "Si lo que ocurre es una urgencia, la red está a mano: el Complejo Hospitalario San José, el Hospital de Niños Dr. Roberto del Río y el Hospital Clínico de la Universidad de Chile atienden las 24 horas en el eje de Av. Independencia con Santos Dumont. Los SAPU Dr. Agustín Cruz Melo y Juan Antonio Ríos, en cambio, funcionan en horario vespertino y nocturno, así que confirma antes de salir. Ante una emergencia, llama al SAMU al 131.",
                "Que el alta quede a pocas cuadras no resuelve lo que viene después. Acá lo que se coordina no es el traslado, sino la continuidad: qué día llega la persona a la casa, quién queda a cargo cuando bajo el mismo techo conviven dos grupos familiares, y cómo se llega al control de vuelta cuando esas mismas cuadras ya no se pueden caminar. La evaluación inicial es gratuita y sirve justamente para ver eso en terreno, con las indicaciones médicas a la vista."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En Independencia, envejecer en casa tiene dos versiones muy distintas y el plan cambia entre una y otra. En la Población Juan Antonio Ríos y en otros conjuntos antiguos, la puerta del departamento queda a media escalera de un block sin ascensor: ese tramo define si la persona baja a comprar o se queda arriba toda la semana, y se trabaja peldaño por peldaño con los apoyos que el edificio ya tiene. En los cités del eje Av. Independencia, en La Chimba y en los pasajes de la Zona Típica Los Castaños el problema es horizontal: umbral alto en la puerta, pasillo compartido angosto y patio común donde un andador se atasca antes de llegar a la reja. El kinesiólogo hace con la persona el recorrido real, de la cama al baño y del patio a la reja, y sobre ese trazado entrena fuerza de piernas, equilibrio y traslados. Si en la vivienda hay más de un grupo familiar, las indicaciones quedan por escrito para que quien esté ese día asista de la misma forma. Después de una caída con golpe en la cabeza, confusión o dolor intenso, primero corresponde la evaluación médica.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en un cité de La Chimba y el patio es común a todos los vecinos. ¿Se puede hacer la sesión ahí?",
                        "a": "Habitualmente sí, mientras el paso no esté ocupado. El equipamiento es portátil y, si el patio está en uso, el ejercicio se adapta al living o al pasillo. Ese patio y el umbral de la puerta son, además, el mejor terreno para practicar la marcha, porque son los que ella cruza todos los días."
                    },
                    {
                        "q": "En la casa vivimos dos familias y cada uno ayuda a mi papá a su manera. ¿Cómo lo ordenan?",
                        "a": "Al cerrar cada sesión quedan por escrito tres o cuatro indicaciones concretas: cómo asistirlo al levantarse, cómo acompañarlo en la escalera y qué conviene dejar que haga solo. Se pegan donde se usan, para que no dependa de quién esté ese día. Si alguien puede estar presente durante la sesión, mejor todavía."
                    }
                ],
                "seoTitle": "Kinesiología Geriátrica en Independencia | KINEUM",
                "seoDescription": "Kinesiología geriátrica a domicilio en Independencia: fuerza, equilibrio y marcha en cités, pasajes y blocks sin ascensor de la comuna.",
                "keywords": [
                    "kinesiología geriátrica Independencia",
                    "kinesiólogo adulto mayor a domicilio Independencia",
                    "rehabilitación adulto mayor Independencia",
                    "prevención de caídas Independencia",
                    "kinesiólogo a domicilio Juan Antonio Ríos",
                    "kine a domicilio adulto mayor Independencia"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Salir de pabellón en el Complejo Hospitalario San José o en el Hospital Clínico de la Universidad de Chile y llegar a tu casa en Independencia puede tomar diez minutos, porque el polo hospitalario está en el mismo eje donde vives. Lo difícil empieza después de la puerta. Entre la calle y tu cama todavía hay una calle interior angosta, con autos estacionados a ambos lados, un umbral alto de cité o los peldaños de un block de baja altura, y ese último tramo es justo el que nadie ensaya en el hospital. Es lo primero que se entrena en la rehabilitación postquirúrgica a domicilio: el kinesiólogo revisa tu epicrisis y las restricciones de carga que dejó el cirujano, y sobre esa pauta trabaja rango de movimiento, fuerza y la forma de entrar y salir de tu propia casa sin exponerte a una caída. Más adelante la meta se corre hacia el control de vuelta, esas mismas cuadras hasta el hospital, cuando tu evolución y tu cirujano lo permitan. Fiebre, herida enrojecida o con secreción, o dolor e hinchazón en la pantorrilla piden consulta médica pronta.",
                "faqsLocales": [
                    {
                        "q": "Me dieron el alta a cinco cuadras de mi casa. ¿Igual necesito kinesiología a domicilio?",
                        "a": "Lo que cuesta no son las cuadras, sino el último tramo: el umbral del cité, el pasaje o los peldaños hasta el departamento con la zona operada todavía sensible. La evaluación inicial es gratuita y sirve para ver ese recorrido en terreno y definir, con la pauta del cirujano, cuándo conviene partir."
                    },
                    {
                        "q": "Mi pasaje es angosto y siempre hay autos estacionados a ambos lados. ¿Complica la visita?",
                        "a": "No. El kinesiólogo llega con camilla plegable y equipamiento portátil, así que no necesita estacionar en la puerta. Al coordinar por WhatsApp al +56 9 9967 9593 conviene indicar el número del block o del pasaje y una referencia cercana para ubicar la entrada."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica Independencia | KINEUM",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en Independencia: del alta a tu cama hay un pasaje angosto y un peldaño alto; eso se entrena primero.",
                "keywords": [
                    "rehabilitación postquirúrgica Independencia",
                    "kinesiología post operatoria a domicilio Independencia",
                    "kinesiólogo post operación Independencia",
                    "rehabilitación rodilla a domicilio Independencia",
                    "kinesiología tras alta hospitalaria Independencia",
                    "kinesiólogo a domicilio Independencia"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "La kinesiología respiratoria a domicilio puede indicarse en niños con algunos cuadros bronquiales, según lo que evalúe su pediatra, y en adultos que arrastran las secuelas de una neumonía o conviven con una enfermedad pulmonar crónica. En la sesión se trabaja el despeje de secreciones, el ritmo y la profundidad de la respiración y la tolerancia al esfuerzo, dentro de lo que haya indicado el médico tratante, y se revisa que la terapia inhalada se esté usando como corresponde. Lo propio de Independencia es que la urgencia queda cerca y aun así hay que saber a cuál ir: el Hospital de Niños Dr. Roberto del Río y el Hospital Clínico de la Universidad de Chile atienden urgencia pediátrica las 24 horas en el mismo corredor de Av. Independencia, mientras que los SAPU Dr. Agustín Cruz Melo y Juan Antonio Ríos funcionan en horario vespertino y nocturno. Para un adulto con oxígeno domiciliario en un tercer piso sin ascensor, además, atenderse en casa le ahorra la parte más pesada del día, que es bajar y volver a subir. Si la falta de aire no cede, llama al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "Vivimos a unas cuadras del Roberto del Río. ¿Voy directo o espero al SAPU de mi CESFAM?",
                        "a": "Si está respirando con esfuerzo evidente, muy acelerado, con las costillas hundiéndose, quejido, labios azulados o rechazo del alimento, ve directo a una urgencia pediátrica: el Roberto del Río y el Hospital Clínico de la Universidad de Chile atienden las 24 horas. Los SAPU de la comuna funcionan en horario vespertino y nocturno, así que conviene confirmar antes de partir. Si no puedes trasladarlo, llama al SAMU al 131."
                    },
                    {
                        "q": "Mi mamá usa oxígeno en casa, en un tercer piso sin ascensor. ¿Pueden atenderla ahí?",
                        "a": "Sí. El kinesiólogo sube con el equipamiento y la sesión se hace con el oxígeno tal como lo dejó indicado su médico. Se trabaja la tolerancia al esfuerzo dentro del departamento y, cuando es seguro, el tramo de escalera, que para ella suele ser la parte más exigente del día."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria en Independencia | KINEUM",
                "seoDescription": "Kinesiología respiratoria a domicilio en Independencia para niños y adultos, con indicación médica y la urgencia del sector norte a mano.",
                "keywords": [
                    "kinesiología respiratoria Independencia",
                    "kinesiólogo respiratorio a domicilio Independencia",
                    "KTR a domicilio Independencia",
                    "kinesiología respiratoria niños Independencia",
                    "kinesiólogo respiratorio adulto mayor Independencia",
                    "kinesiólogo a domicilio Independencia"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Volver a Independencia después de un ACV suele significar recorrer pocas cuadras desde el Complejo Hospitalario San José o el Hospital Clínico de la Universidad de Chile hasta una vivienda que nunca se pensó para una silla de ruedas. Por eso el trabajo parte midiendo el espacio que sí existe: el ancho de la puerta del cité, la altura del umbral, el giro que permite el pasillo y los peldaños hasta el departamento en un block de baja altura. Con esas medidas se decide qué mueble se corre, dónde sirve una tabla de transferencia y qué parte del recorrido todavía no es segura; lo que no tiene solución, se dice derechamente. En hogares donde se turnan varios adultos para cuidar, se enseña la misma maniobra a todos, con indicaciones cortas pegadas donde se usan. Los avances varían mucho de una persona a otra y no hay plazos fijos. Si de golpe aparece debilidad de un lado del cuerpo, la cara desviada o dificultad para hablar, llama al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "Mi papá volvió en silla de ruedas y la puerta del cité es más angosta que la silla. ¿Qué se puede hacer?",
                        "a": "En la primera visita se miden el umbral, el ancho de la puerta y el giro del pasillo. Con eso se define si conviene una rampa portátil, una tabla de transferencia o hacer el ingreso fuera de la silla, y se entrena a la familia para moverlo sin arrastrarlo. Si un tramo no es seguro, se dice y se busca otra vía en vez de forzarlo."
                    },
                    {
                        "q": "El control de vuelta es en el mismo hospital donde estuvo internado, pero ya no puede caminar hasta allá. ¿Qué hacemos?",
                        "a": "Se practican en casa los traslados que ese día va a necesitar: de la cama a la silla, de la silla al vehículo y el tramo de escalera con dos personas si no hay otra opción. La hora de la sesión se coordina para los días previos al control, y conviene avisar en el hospital si necesita apoyo para el ingreso."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica Independencia | KINEUM",
                "seoDescription": "Rehabilitación neurológica a domicilio en Independencia: continuidad tras el alta, traslados y marcha medidos en tu propia casa.",
                "keywords": [
                    "rehabilitación neurológica Independencia",
                    "kinesiología neurológica a domicilio Independencia",
                    "rehabilitación ACV a domicilio Independencia",
                    "kinesiólogo a domicilio silla de ruedas Independencia",
                    "kinesiología tras alta hospitalaria Independencia",
                    "kinesiólogo a domicilio Independencia"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Un esguince de tobillo, un lumbago, un hombro que no deja dormir o la secuela de una fractura ya tratada se trabajan con kinesiología traumatológica a domicilio en Independencia. Lo particular de acá aparece al volver a la calle. Las calles interiores de la trama antigua son angostas y tienen autos estacionados a ambos lados, así que el primer tramo de caminata se elige cuadra por cuadra contigo, y los pasajes de Los Castaños o de un cité obligan a avanzar en fila, sin espacio para corregir un tropiezo. Recién después se suman recorridos más largos, por ejemplo hasta Plaza Chacabuco, el entorno del Estadio Santa Laura o la boca de Metro más cercana, y más adelante el trote si corresponde. Si vives en un block sin ascensor, la meta concreta suele ser otra: subir los pisos sin que el tobillo o la rodilla protesten al día siguiente, y eso se practica en tu propia escalera. Cuando tu trabajo implica levantar o trasladar carga, la última fase del plan reproduce esos movimientos antes de que vuelvas al turno completo.",
                "faqsLocales": [
                    {
                        "q": "Me torcí el tobillo saliendo del pasaje y me cuesta afirmarme. ¿Parto por el kinesiólogo?",
                        "a": "Primero la radiografía: si el pie no aguanta peso o el tobillo se ve deformado, la urgencia del Complejo Hospitalario San José y la del Hospital Clínico de la Universidad de Chile quedan en el mismo eje de Av. Independencia y atienden a toda hora. Con la fractura descartada, la kinesiología parte en tu casa, y si vives en un block la primera meta suele ser bajar y subir esa escalera sin cargar de más el tobillo."
                    },
                    {
                        "q": "Trabajo por turnos y cargando peso. ¿Hay horas fuera de la jornada?",
                        "a": "Sí, se atiende de lunes a domingo y la hora se acuerda contigo, incluidos los horarios en que recién llegas a la casa. Cada sesión dura alrededor de 60 minutos, y si tu trabajo implica levantar o empujar carga, la parte final del plan reproduce esos gestos con pesos parecidos antes de que vuelvas al turno completo."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica Independencia | KINEUM",
                "seoDescription": "Kinesiología traumatológica a domicilio en Independencia: esguinces, lumbago y hombro doloroso, con vuelta gradual a tu escalera y al barrio.",
                "keywords": [
                    "kinesiología traumatológica Independencia",
                    "kinesiólogo esguince a domicilio Independencia",
                    "kinesiología lumbago Independencia",
                    "rehabilitación fractura a domicilio Independencia",
                    "kinesiólogo hombro doloroso Independencia",
                    "fisioterapeuta a domicilio Independencia"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio Independencia y La Chimba | KINEUM",
            "description": "Kinesiólogo a domicilio en Independencia: sesiones en tu casa en La Chimba, la Juan Antonio Ríos o Los Castaños. Evaluación inicial gratuita.",
            "keywords": [
                "kinesiólogo a domicilio Independencia",
                "kinesiología a domicilio Independencia",
                "kinesiólogo Independencia Santiago",
                "rehabilitación a domicilio Independencia",
                "kinesiólogo a domicilio Juan Antonio Ríos",
                "kine a domicilio Independencia",
                "kinesiólogo particular Independencia"
            ]
        }
    },
    "cerro-navia": {
        "centrosSalud": [
            {
                "nombre": "Hospital Clínico Félix Bulnes Cerda",
                "tipo": "hospital publico",
                "nota": "Está dentro de la comuna. Urgencia 24 h, adulto y pediátrica"
            },
            {
                "nombre": "CESFAM Dr. Steeger (Huelén 1629)",
                "tipo": "CESFAM",
                "nota": "Atención primaria del sector Huelén; no es servicio de urgencia"
            },
            {
                "nombre": "CESFAM Dr. Arturo Albertz (Las Torres 1204)",
                "tipo": "CESFAM",
                "nota": "Atención primaria; para una urgencia, el hospital de la comuna o el SAMU al 131"
            },
            {
                "nombre": "CESFAM Cerro Navia (Sado 7965)",
                "tipo": "CESFAM",
                "nota": "Atención primaria; en el mismo recinto funciona el SAPU, confirma su horario antes de ir"
            },
            {
                "nombre": "CESFAM Lo Amor",
                "tipo": "CESFAM",
                "nota": "Atención primaria del sector Lo Amor; confirma su dirección y horario antes de ir"
            },
            {
                "nombre": "SAPU Cerro Navia (adosado al CESFAM Cerro Navia, Sado 7965)",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencias de menor complejidad; confirma el horario vigente antes de ir"
            },
            {
                "nombre": "SAR del CRS Dr. Salvador Allende Gossens",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Atiende a vecinos de Cerro Navia, pero está en Pudahuel; confirma el horario antes de ir"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Cerro Navia: pasajes, blocks sin ascensor y el Félix Bulnes dentro de la comuna",
            "parrafos": [
                "En Cerro Navia casi todo se resuelve a nivel de suelo: pese al nombre, no hay cerro ni pendientes que compliquen llegar caminando con la camilla y el equipo desde donde se alcanzó a estacionar. Eso importa: buena parte de la comuna se organiza en pasajes interiores y callejones donde el auto no siempre entra, así que confirmamos por teléfono el punto exacto de llegada antes de la visita.",
                "Las casas de uno y dos pisos, muchas ampliadas por las propias familias, dejan el living o el patio como mejor lugar para armar la sesión. En los blocks de vivienda social de tres a cinco pisos sin ascensor, el equipo sube a mano y la escalera del edificio pasa a ser parte del plan de trabajo, no un obstáculo que se evita.",
                "El Hospital Clínico Félix Bulnes Cerda está dentro de la comuna, con urgencia de adultos y pediátrica las 24 horas, y la atención primaria la cubren los CESFAM Dr. Steeger, Dr. Arturo Albertz, Cerro Navia y Lo Amor. Ante una urgencia no esperes la sesión: llama al SAMU al 131. Lo que pesa aquí no es el día del alta, que muchas veces ocurre en la misma comuna, sino las semanas siguientes: son los controles y las sesiones repetidas los que obligan a salir del pasaje y tomar micro. A KINEUM lo contratas de forma directa y particular; ningún centro de la comuna nos deriva pacientes."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "Aquí la kinesiología geriátrica se arma alrededor de un recorrido que en Cerro Navia se repite: la puerta de casa, el pasaje hasta la esquina y el paradero. El pavimento de los pasajes interiores es irregular, con desniveles entre una vereda y otra y a veces sin solera continua, así que el trabajo de equilibrio se hace pensando en ese piso y no en el suelo parejo de una sala. Después viene el escalón de la micro, que en una comuna sin Metro es obligatorio para casi cualquier control médico o trámite: subirlo con bolsas y muchas veces apurado es un gesto concreto que se practica, con fuerza de piernas, agarre firme y una secuencia segura. En los blocks sin ascensor se suma la escalera del edificio, que se trabaja por tramos y con el descanso entre pisos como pausa planificada. Todo esto se ajusta a lo que tu mamá o tu papá pueda hacer hoy, y los avances varían según el caso. Si hubo una caída con golpe en la cabeza o dolor intenso, primero va la evaluación médica.",
                "faqsLocales": [
                    {
                        "q": "¿Pueden entrenar a mi papá para subir a la micro? Es la única forma que tiene de ir a sus controles.",
                        "a": "Sí, y suele ser uno de los objetivos concretos, porque en Cerro Navia no hay Metro y ese escalón alto aparece en casi todas las salidas. Se evalúa primero su fuerza de piernas, su equilibrio de pie y cómo se toma del pasamanos, y después se practica la secuencia completa, incluido llevar las manos libres. Mientras no esté seguro, lo razonable es que salga acompañado."
                    },
                    {
                        "q": "El pasaje donde vivimos es angosto y el auto no entra hasta la puerta. ¿Igual llegan con la camilla?",
                        "a": "Sí. Como Cerro Navia es plana, caminar el último tramo con la camilla y el equipo no es problema. Al confirmar la hora se acuerda por teléfono el punto exacto de llegada y alguna referencia del pasaje, para no perder tiempo buscando el número."
                    }
                ],
                "seoTitle": "Kinesiología Geriátrica a Domicilio en Cerro Navia",
                "seoDescription": "Kinesiología geriátrica a domicilio en Cerro Navia: equilibrio en el pasaje, escalera del block y subir a la micro sin depender de nadie.",
                "keywords": [
                    "kinesiólogo adulto mayor Cerro Navia",
                    "kinesiología geriátrica a domicilio Cerro Navia",
                    "kine adulto mayor Cerro Navia",
                    "rehabilitación adulto mayor en casa Cerro Navia",
                    "prevención de caídas adulto mayor Cerro Navia",
                    "kinesiólogo a domicilio Herminda de la Victoria",
                    "kine tercera edad Cerro Navia"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "El Hospital Clínico Félix Bulnes Cerda está dentro de Cerro Navia, así que varias altas de cirugía ocurren en la misma comuna donde vives. Lo difícil viene después. Volver cada semana a una consulta de rehabilitación implica salir del pasaje, caminar hasta José Joaquín Pérez o San Pablo y subir a una micro con muletas, porque no hay estación de Metro dentro de la comuna. Con la rehabilitación postquirúrgica a domicilio ese trayecto repetido se evita en las semanas más delicadas. En la evaluación inicial gratuita se revisa tu epicrisis y la pauta del cirujano: restricciones de carga, rangos de movimiento permitidos y cuidado de la herida. Si el auto no llega hasta tu puerta, también se entrena el tramo del pasaje hasta el punto donde te pueden recoger, que es el que vas a repetir cada vez que tengas control. KINEUM es un servicio particular, sin convenio con ese hospital ni con los CESFAM. Fiebre, herida enrojecida o con secreción, o una pantorrilla hinchada y dolorosa piden consulta médica pronta; ante falta de aire repentina o dolor en el pecho, llama al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "Me operaron y me dieron el alta en el Hospital Félix Bulnes. ¿Pueden seguir la rehabilitación en mi casa?",
                        "a": "Sí, cuando tu cirujano lo indique. Con la epicrisis y las indicaciones escritas se agenda la evaluación inicial gratuita en tu domicilio y el plan respeta ese protocolo. KINEUM no tiene convenio con el hospital: contratas de forma particular y recibes boleta de honorarios electrónica para pedir reembolso en tu Isapre o seguro complementario, según tu plan."
                    },
                    {
                        "q": "Tengo control en el hospital y el auto no entra al pasaje. ¿Cómo hago ese tramo con muletas?",
                        "a": "Ese tramo corto se puede entrenar antes de que lo necesites: se practica el manejo de las muletas sobre pavimento irregular, la pisada en los desniveles y dónde conviene detenerse a descansar, siempre dentro de la carga que autorizó tu cirujano. Conviene salir con tiempo y acompañado, y acordar con quien te lleva un punto fijo de encuentro en la esquina."
                    }
                ],
                "seoTitle": "Kinesiólogo Post Operatorio a Domicilio Cerro Navia",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en Cerro Navia tras el alta: sin salir del pasaje a tomar micro con muletas cada semana.",
                "keywords": [
                    "kinesiólogo post operatorio Cerro Navia",
                    "rehabilitación post cirugía en casa Cerro Navia",
                    "kine prótesis de rodilla Cerro Navia",
                    "rehabilitación prótesis de cadera Cerro Navia",
                    "kinesiología post operatoria a domicilio Cerro Navia",
                    "kinesiólogo después del alta hospitalaria Cerro Navia",
                    "kine post cirugía Cerro Navia"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En kinesiología respiratoria, tan importante como la sesión es tener claro adónde ir si algo empeora, y en Cerro Navia esa respuesta está dentro de la comuna: el Hospital Clínico Félix Bulnes Cerda tiene urgencia de adultos y pediátrica las 24 horas. Los CESFAM Dr. Steeger, Dr. Arturo Albertz, Cerro Navia y Lo Amor cubren la atención primaria, y el SAPU adosado al CESFAM Cerro Navia, en Sado 7965, ve urgencias de menor complejidad; conviene confirmar su horario antes de ir, igual que el del SAR del CRS Dr. Salvador Allende Gossens, que atiende a vecinos de la comuna pero está en Pudahuel. Si tu hijo respira muy rápido, se le hunden las costillas, tiene los labios morados o rechaza el alimento, no esperes la sesión: llama al SAMU al 131 o acude a la urgencia. Como el hospital queda en la misma comuna, el criterio que se trabaja con la familia no es cuánto demora el traslado, sino cómo reconocer a tiempo que hay que hacerlo: qué mirar en la respiración después de cada sesión y qué cambios significan que el cuadro va para atrás.",
                "faqsLocales": [
                    {
                        "q": "Es de madrugada y mi hijo respira con mucho esfuerzo. ¿Adónde lo llevo en Cerro Navia?",
                        "a": "El Hospital Clínico Félix Bulnes Cerda está dentro de la comuna y tiene urgencia pediátrica las 24 horas. Si le cuesta mucho respirar, tiene los labios morados o está muy decaído, llama al SAMU al 131. La kinesiología respiratoria no reemplaza esa atención."
                    },
                    {
                        "q": "¿Me sirve el SAPU del CESFAM Cerro Navia si mi hijo empeora en la noche?",
                        "a": "El SAPU de Sado 7965 resuelve urgencias de menor complejidad y su horario conviene confirmarlo antes de ir, así que no lo des por seguro a cualquier hora. Con señales de alarma, no pases por ahí: ve directo a la urgencia pediátrica del Félix Bulnes o llama al 131."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio Cerro Navia",
                "seoDescription": "Kinesiología respiratoria a domicilio en Cerro Navia, niños y adultos: técnicas en casa y la urgencia 24 h del Félix Bulnes a mano.",
                "keywords": [
                    "kinesiología respiratoria a domicilio Cerro Navia",
                    "KTR infantil Cerro Navia",
                    "kinesiólogo respiratorio niños Cerro Navia",
                    "kine respiratorio bebé Cerro Navia",
                    "kinesiología bronquiolitis Cerro Navia",
                    "kinesiología respiratoria adulto mayor Cerro Navia",
                    "kine respiratorio a domicilio Cerro Navia"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Después de un ACV, la casa a la que vuelve la persona define buena parte del plan, y en Cerro Navia esas casas tienen rasgos propios. Muchas se ampliaron por etapas, con piezas agregadas al fondo, peldaños entre un sector y otro y pasillos angostos por donde una silla de ruedas apenas pasa; en los blocks, el departamento es compacto pero está en un tercer o cuarto piso sin ascensor. La rehabilitación neurológica a domicilio trabaja ahí: control de tronco, transferencias de la cama a la silla, marcha con apoyo y orden de los espacios para que el recorrido nocturno sea seguro. En estos barrios casi siempre hay una hija, una vecina o un hermano que también ayuda a moverlo, así que las indicaciones quedan por escrito y a la vista, no solo en la cabeza del cuidador principal. El plan parte de la epicrisis y de lo indicado por el neurólogo; los avances varían caso a caso. Ante debilidad súbita de un lado, cara desviada o dificultad para hablar, llama de inmediato al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "¿Le sirve a mi mamá salir a practicar la marcha al pasaje, o es mejor solo dentro de la casa?",
                        "a": "Depende de cómo estén ese día su control de tronco y su equilibrio. El pasaje tiene a favor que es plano, corto y con muros cerca para apoyarse, y en contra el pavimento parchado y los desniveles. Por eso se parte adentro, en un trayecto conocido, y se sale cuando la evaluación lo permite, acompañada y con el apoyo técnico que se haya indicado."
                    },
                    {
                        "q": "Nuestra casa se fue ampliando y hay peldaños entre las piezas. ¿Se puede rehabilitar igual ahí?",
                        "a": "Sí, y de hecho conviene: esos peldaños y pasillos son el recorrido que tu papá va a usar todos los días. Se entrenan en la sesión y se sugieren ajustes simples, como despejar el paso, mejorar la luz o instalar un apoyo firme en el punto más complicado."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica a Domicilio Cerro Navia",
                "seoDescription": "Rehabilitación neurológica a domicilio en Cerro Navia: transferencias, marcha y seguridad en casas ampliadas y blocks sin ascensor.",
                "keywords": [
                    "neurorehabilitación a domicilio Cerro Navia",
                    "rehabilitación ACV en casa Cerro Navia",
                    "kinesiólogo neurológico Cerro Navia",
                    "kinesiología Parkinson Cerro Navia",
                    "rehabilitación después del alta Cerro Navia",
                    "kine post ACV Cerro Navia",
                    "kinesiólogo a domicilio Sara Gajardo"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Un esguince de tobillo, un lumbago que no cede o un hombro que duele al levantar el brazo se recuperan con carga progresiva, y esa progresión se diseña mejor si se conoce el terreno que vas a pisar. En Cerro Navia, el trayecto diario suele empezar en un pasaje con pavimento parchado y desniveles, seguir por una vereda angosta y terminar en un paradero de José Joaquín Pérez o San Pablo. Ese recorrido es el examen real: si el tobillo responde ahí, responde en casi cualquier parte, así que se usa como referencia para decidir cuándo aumentar distancia o carga. La otra ventaja es que la sesión ocurre en tu casa, lo que importa en una comuna sin Metro y con poca oferta de kinesiología particular cerca: no pierdes media jornada en llegar a una consulta. Si tu trabajo implica cargar peso, subir escaleras o estar de pie muchas horas, la progresión se arma con movimientos y pesos parecidos a los tuyos. Si hubo un golpe fuerte, hay deformidad o no puedes apoyar el pie, primero debe verte un médico: la kinesiología viene después del diagnóstico.",
                "faqsLocales": [
                    {
                        "q": "¿Cuándo puedo volver a caminar hasta el paradero después de un esguince de tobillo?",
                        "a": "El criterio no es el calendario, sino cómo responde el tobillo al día siguiente. Se parte por el largo del pasaje, en el horario con menos gente, y recién cuando ese tramo no deja hinchazón ni dolor se suma la vereda hasta la esquina y después el trecho hasta el paradero. Si vuelve a hincharse, se retrocede un paso y se mantiene esa distancia unos días."
                    },
                    {
                        "q": "¿Llegan a Cerro Navia o tengo que ir a una consulta al otro lado de Santiago?",
                        "a": "Llegamos a tu casa. KINEUM está ampliando su cobertura en la Región Metropolitana y Cerro Navia está incluida; escribe al WhatsApp +56 9 9967 9593 con tu dirección y una referencia del pasaje para coordinar la evaluación inicial gratuita. Si el dolor partió con un golpe fuerte, consulta primero a un médico."
                    }
                ],
                "seoTitle": "Kinesiólogo Traumatológico a Domicilio Cerro Navia",
                "seoDescription": "Kinesiólogo traumatológico a domicilio en Cerro Navia: esguinces, lumbago y hombro doloroso, con la sesión en tu casa y hora coordinada.",
                "keywords": [
                    "kinesiólogo traumatológico a domicilio Cerro Navia",
                    "kinesiología esguince de tobillo Cerro Navia",
                    "tratamiento lumbago a domicilio Cerro Navia",
                    "kine tendinitis hombro Cerro Navia",
                    "rehabilitación lesiones deportivas Cerro Navia",
                    "kinesiología deportiva a domicilio Cerro Navia",
                    "kinesiólogo a domicilio El Montijo"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Cerro Navia | KINEUM",
            "description": "Kinesiólogo a domicilio en Cerro Navia: Herminda de la Victoria, Sara Gajardo, El Montijo y todo el sector. Sesiones en tu casa, hora coordinada.",
            "keywords": [
                "kinesiólogo a domicilio Cerro Navia",
                "kine a domicilio Cerro Navia",
                "kinesiología a domicilio Cerro Navia",
                "fisioterapeuta a domicilio Cerro Navia",
                "kinesiólogo Cerro Navia isapre",
                "kine Cerro Navia reembolso",
                "kinesiólogo particular Cerro Navia"
            ]
        }
    },
    "renca": {
        "centrosSalud": [
            {
                "nombre": "SAR Renca, Av. José Manuel Balmaceda 4012",
                "tipo": "Servicio de urgencia primaria (SAR)",
                "nota": "Urgencia primaria 24 h; la municipalidad no detalla una urgencia pediátrica dedicada"
            },
            {
                "nombre": "SAPU Huamachuco, Las Margaritas 2466",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria del sector Huamachuco, con horario parcial: confirma antes de ir"
            },
            {
                "nombre": "SAPU Bicentenario, Av. Brasil 8005",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria del sector poniente, con horario parcial: confirma antes de ir"
            },
            {
                "nombre": "CESFAM Renca, Av. José Manuel Balmaceda 4420",
                "tipo": "CESFAM",
                "nota": "Atención primaria en el eje Balmaceda, cerca del SAR"
            },
            {
                "nombre": "CESFAM Dr. Hernán Urzúa Merino, Totoral Bajo 1011",
                "tipo": "CESFAM",
                "nota": "Atiende el sector Totoral Bajo"
            },
            {
                "nombre": "CESFAM Huamachuco, Los Tulipanes 2466",
                "tipo": "CESFAM",
                "nota": "Atiende el sector Huamachuco"
            },
            {
                "nombre": "CESFAM Bicentenario, Av. Brasil 8005",
                "tipo": "CESFAM",
                "nota": "Atiende el sector poniente, en la misma dirección que el SAPU Bicentenario"
            },
            {
                "nombre": "Hospital Clínico Félix Bulnes",
                "tipo": "Hospital público",
                "nota": "Está en Cerro Navia, no en Renca. Es el hospital de referencia del sector, con urgencia de adultos e infantil"
            },
            {
                "nombre": "Centro Médico Susalud, Blanco Encalada 1538",
                "tipo": "Centro médico ambulatorio",
                "nota": "Atención ambulatoria dentro de la comuna; no es un servicio de urgencia"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Renca: el cerro al medio y pasajes que no dan para todo",
            "parrafos": [
                "En Renca el kinesiólogo llega con camilla plegable y equipo portátil. En los sectores de autoconstrucción, con pasajes angostos y antejardines chicos, el auto suele quedar a media cuadra y se trabaja en el living o en el patio. En los blocks de las poblaciones antiguas la escalera del edificio entra derechamente en el plan; en los condominios del borde del Mapocho se avisa en conserjería antes de subir.",
                "El Cerro Renca parte la comuna en dos: los sectores de un lado y del otro no se conectan en línea recta, así que el horario se acuerda con anticipación y conviene dejar una referencia clara del pasaje. Ante una urgencia no esperes la sesión: llama al SAMU al 131. Dentro de la comuna el SAR de Av. Balmaceda 4012 atiende las 24 horas; el hospital de referencia del sector es el Félix Bulnes, en la vecina Cerro Navia.",
                "La rehabilitación comunal se reparte entre cuatro CESFAM, un SAR y dos SAPU, y funciona con cupos. Si estás esperando hora, o si te dieron el alta y cada control significa salir de la comuna, la atención en casa te deja avanzar mientras tanto. KINEUM es particular e independiente, sin convenio con esos centros: recibes boleta de honorarios electrónica para tu reembolso según la cobertura de tu plan. La evaluación inicial es gratuita: escribe al +56 9 9967 9593 con tu sector y el horario que te acomoda."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "Muchas casas de Renca crecieron por partes: un segundo piso levantado años después, con escalera empinada, angosta y a veces sin baranda continua. Para una persona mayor ese tramo decide el día entero, y es ahí donde el kinesiólogo mira cómo sube, cómo baja, de qué se afirma y qué se puede corregir sin obra: fijar un pasamanos firme, cambiar la ampolleta del descanso, sacar la alfombra suelta. Afuera el punto crítico cambia de lugar: el peldaño del antejardín, la vereda irregular del pasaje y el auto estacionado a media cuadra son el trayecto que más cuesta, así que la marcha se entrena en ese mismo recorrido, con el bastón o el apoyo que use. Cuando el equilibrio lo permite, las caminatas más largas se programan por espacios peatonales como la Plaza Mayor de Renca o el Parque El Montijo, y las calles que trepan hacia las faldas del cerro quedan para más adelante. Cada sesión termina con indicaciones concretas para quien acompaña. Si hubo una caída con golpe en la cabeza, confusión o dolor intenso, primero va la evaluación médica.",
                "faqsLocales": [
                    {
                        "q": "El auto no llega hasta la puerta y la vereda del pasaje está rota. ¿Cómo hacemos para que mi abuela salga sin miedo?",
                        "a": "Ese trayecto se practica tal como es, no en abstracto: el kinesiólogo los acompaña desde el antejardín hasta donde se estaciona el auto, marca en qué puntos el suelo está desnivelado y define dónde conviene que alguien la tome del brazo. Si el peldaño de la entrada es alto, se busca primero un apoyo fijo antes de pensar en obras. Lo habitual es repetir el mismo recorrido durante varias sesiones hasta que salga sin dudar."
                    },
                    {
                        "q": "¿Conviene llevarla a caminar a la Plaza Mayor o al Parque El Montijo, o que dé vueltas por el pasaje?",
                        "a": "Depende de la etapa en que esté. Al principio el pasaje sirve porque la casa queda a metros si se cansa o se marea. Cuando ya camina segura, un espacio peatonal como la Plaza Mayor o El Montijo permite sumar minutos sin cruzar calles con tráfico. Las subidas hacia el cerro son otra exigencia y se dejan para el final, si es que el caso lo permite; el kinesiólogo te indica cuándo corresponde cada paso."
                    }
                ],
                "seoTitle": "Kinesiólogo para Adulto Mayor a Domicilio en Renca",
                "seoDescription": "Kinesiología geriátrica a domicilio en Renca: escaleras de pasajes y blocks, equilibrio y prevención de caídas en casa. Evaluación gratuita.",
                "keywords": [
                    "kinesiólogo adulto mayor Renca",
                    "kinesiología geriátrica a domicilio Renca",
                    "rehabilitación adulto mayor Renca",
                    "prevención de caídas Renca",
                    "kinesiólogo tercera edad Renca",
                    "kine a domicilio adulto mayor Huamachuco",
                    "fisioterapia geriátrica Renca"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Como en Renca no hay hospital, después de una cirugía casi todos vuelven a casa desde fuera de la comuna, y el centro de referencia del sector es el Hospital Clínico Félix Bulnes, en Cerro Navia. Cada control o sesión fuera del domicilio significa salir por Balmaceda o Domingo Santa María con una rodilla, una cadera o un hombro recién operados, y en varios pasajes el auto ni siquiera llega hasta la puerta: los últimos metros hay que hacerlos con muletas y ayuda. La rehabilitación postquirúrgica a domicilio evita ese trayecto y transforma esa energía en trabajo útil. En la evaluación inicial gratuita se revisan la epicrisis y el protocolo del cirujano (restricciones de carga, rangos permitidos, cuidados de la herida) y desde ahí se trabajan rango de movimiento, fuerza y marcha en tu propia casa, incluida la escalera cuando la hay. Fiebre, herida enrojecida o con secreción, o dolor e hinchazón en la pantorrilla obligan a consultar pronto; ante falta de aire repentina o dolor en el pecho, llama al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "Me van a operar y me dan el alta en el Félix Bulnes. ¿Pueden partir la kinesiología en mi casa en Renca?",
                        "a": "Sí, cuando tu equipo médico lo indique. Con la epicrisis y las indicaciones escritas se agenda la evaluación inicial gratuita en tu domicilio y el plan respeta ese protocolo. KINEUM no tiene convenio con ese hospital ni con ningún otro centro: contratas directo y recibes boleta de honorarios electrónica para pedir reembolso según la cobertura de tu plan."
                    },
                    {
                        "q": "Vivo en un pasaje angosto donde el auto no llega hasta la puerta. ¿Igual pueden atenderme recién operado?",
                        "a": "Sí. El equipo es portátil y la camilla es plegable, así que el kinesiólogo entra caminando los últimos metros sin problema. Al coordinar por WhatsApp conviene indicar el número del pasaje y una referencia, porque varios pasajes de Renca no quedan bien marcados en los mapas."
                    }
                ],
                "seoTitle": "Kinesiólogo Post Operatorio a Domicilio en Renca",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en Renca: continuidad tras el alta hospitalaria, sin traslados por pasajes y escaleras.",
                "keywords": [
                    "kinesiólogo post operatorio Renca",
                    "rehabilitación postquirúrgica a domicilio Renca",
                    "kinesiología después de operación Renca",
                    "rehabilitación prótesis de rodilla Renca",
                    "kinesiólogo a domicilio post cirugía Renca",
                    "recuperación post operatoria en casa Renca"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En Renca hay tres puertas de urgencia primaria y ninguna sirve para todas las horas: el SAR de Av. Balmaceda 4012 atiende las 24 horas, mientras que los SAPU de Huamachuco y Bicentenario funcionan en horario parcial. Por eso, en la primera visita, lo primero que se deja escrito en el refrigerador no es un ejercicio: es cuál de las tres está abierta a las tres de la mañana, porque el cerro parte la comuna y desde los sectores del norte hay que rodearlo para bajar a Balmaceda. El segundo dato es la escalera: en los blocks sin ascensor, bajar en brazos a un niño que respira con esfuerzo o subir un concentrador de oxígeno hasta un tercer piso es parte del problema, y la sesión incluye resolver dónde queda el equipo y cómo se hace ese trayecto. Recién después viene lo clínico, ajustado a cada caso: maniobras para movilizar secreciones, trabajo de la tos y revisión de cómo se está usando el inhalador que indicó el médico. El hospital de referencia del sector es el Hospital Clínico Félix Bulnes, en la vecina Cerro Navia, con urgencia de adultos e infantil.",
                "faqsLocales": [
                    {
                        "q": "Es de madrugada y mi hijo respira con esfuerzo. ¿Voy al SAR de Balmaceda o salgo de Renca?",
                        "a": "Si ves quejido al respirar, hundimiento entre las costillas, labios morados o que rechaza el alimento, llama primero al SAMU al 131 y sigue lo que te indiquen. A esa hora, dentro de la comuna la única urgencia abierta es el SAR de Av. Balmaceda 4012; los SAPU de Huamachuco y Bicentenario tienen horario parcial. El hospital de referencia del sector es el Félix Bulnes, en la vecina Cerro Navia, con urgencia de adultos e infantil. La kinesiología respiratoria no reemplaza esa atención."
                    },
                    {
                        "q": "Mi papá usa oxígeno en casa y vivimos al norte del cerro. ¿Llegan igual a hacer las sesiones?",
                        "a": "Sí. Renca está dentro de la zona que cubre KINEUM y a los sectores del norte del cerro se llega rodeándolo, así que el horario se acuerda con anticipación y conviene dejar una referencia clara del pasaje. Las sesiones se hacen con el oxígeno puesto y con las indicaciones de su médico tratante: el kinesiólogo no cambia flujos ni medicamentos."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio en Renca",
                "seoDescription": "Kinesiología respiratoria a domicilio en Renca, a los dos lados del cerro: sesiones en casa y qué urgencia primaria está abierta a cada hora.",
                "keywords": [
                    "kinesiología respiratoria Renca",
                    "kinesiólogo respiratorio a domicilio Renca",
                    "kinesiología respiratoria niños Renca",
                    "kine respiratoria bebé Renca",
                    "kinesiólogo bronquitis a domicilio Renca",
                    "kinesiología respiratoria adulto mayor Renca"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Después de un ACV, la vuelta a Renca empieza con un viaje: el alta se da fuera de la comuna —el hospital de referencia del sector es el Félix Bulnes, en la vecina Cerro Navia— y hay que cruzar el Mapocho con una persona que todavía no controla bien un lado del cuerpo. En las casas de autoconstrucción, el peldaño de la entrada y el antejardín de un metro deciden si la silla de ruedas sale o se queda adentro, y como en muchos pasajes el auto no llega hasta la puerta, ese tramo corto se ensaya hasta que deje de depender de la suerte. En los blocks de los años sesenta a ochenta la escalera es la frontera: si no se puede bajar, la persona no vuelve a salir, así que se trabaja con un objetivo concreto y por etapas, cuando el equipo médico lo autoriza. En los condominios del borde del Mapocho se avisa en conserjería antes de subir. El plan sigue lo indicado por tu neurólogo. Si de golpe aparecen debilidad de un lado, la cara desviada o dificultad para hablar, llama al 131.",
                "faqsLocales": [
                    {
                        "q": "A mi papá le dan el alta tras un ACV y volvemos a Renca. ¿Qué conviene tener listo para la primera sesión en casa?",
                        "a": "La epicrisis, las indicaciones del neurólogo, la lista de medicamentos y, si los entregaron, los informes de la kinesiología que recibió hospitalizado. Con eso la evaluación inicial gratuita retoma lo que ya se hizo en el hospital en vez de partir de cero, y el plan respeta lo que indicó su equipo tratante."
                    },
                    {
                        "q": "Estamos en lista de espera por rehabilitación en el CESFAM. ¿Podemos avanzar mientras tanto en casa?",
                        "a": "Sí. La atención particular a domicilio es independiente de la red municipal y no reemplaza ni interfiere con el cupo que estás esperando; KINEUM no tiene convenio con los CESFAM ni con el SAR. Si después parte tu atención en el centro de salud, cuéntaselo al kinesiólogo y él ajusta el plan de casa para que no se dupliquen las cargas."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica a Domicilio en Renca",
                "seoDescription": "Rehabilitación neurológica a domicilio en Renca tras un ACV: el regreso a casa, el pasaje angosto y la escalera del block. Evaluación gratuita.",
                "keywords": [
                    "rehabilitación neurológica a domicilio Renca",
                    "kinesiólogo neurológico Renca",
                    "rehabilitación ACV en casa Renca",
                    "kinesiología Parkinson Renca",
                    "kinesiólogo a domicilio hemiplejia Renca",
                    "rehabilitación post ACV Renca"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "En Renca la pendiente no es un ejercicio opcional: las calles que trepan hacia el cerro son el camino de vuelta a la casa para quien vive en las faldas, y subirlas exige cuádriceps mientras bajarlas concentra el impacto en la rodilla y el tobillo. Por eso, en un esguince, un lumbago o un hombro que no deja dormir, la meta no es solo dejar de sentir dolor en reposo: es aguantar esa cuesta. La sesión no necesita un box con máquinas: estas lesiones suelen poder trabajarse igual de bien en la casa. Bastan un par de metros despejados junto a una pared, una silla firme y el peldaño del antejardín. La vuelta a la calle se arma por etapas: primero tramos peatonales como la Plaza Mayor de Renca o el Parque El Montijo, y solo al final las subidas cortas, probadas de a poco. Antes de todo eso hace falta un diagnóstico: si el golpe fue fuerte, la zona quedó deformada, no puedes apoyar el pie o el dolor no cede, lo que corresponde primero es una evaluación médica.",
                "faqsLocales": [
                    {
                        "q": "Me torcí el tobillo bajando por una calle en pendiente cerca del cerro. ¿Llamo al kinesiólogo o voy a urgencia?",
                        "a": "Si no puedes apoyar el pie, la zona se deformó o se hinchó mucho, primero necesitas evaluación médica y, si corresponde, una radiografía. Dentro de la comuna el SAR de Av. Balmaceda 4012 atiende urgencias las 24 horas y desde ahí te indican si hay que derivarte a otro centro; ante un golpe grave, llama al SAMU al 131. Con el diagnóstico en mano, la evaluación inicial gratuita define el plan a domicilio."
                    },
                    {
                        "q": "Tengo lumbago y en la casa hay poco espacio. ¿Igual se puede hacer ejercicio con carga?",
                        "a": "Habitualmente sí. Se trabaja con el peso del propio cuerpo, bandas elásticas, una silla firme o un escalón, y la carga se regula con series, repeticiones y ritmo más que con fierros. Si tu caso llega a necesitar cargas mayores, el kinesiólogo te lo dice y se ajusta el plan."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica a Domicilio en Renca",
                "seoDescription": "Kinesiología traumatológica a domicilio en Renca: esguinces, lumbago y hombro, con la vuelta a las subidas del cerro y a El Montijo.",
                "keywords": [
                    "kinesiología traumatológica Renca",
                    "kinesiólogo a domicilio esguince Renca",
                    "kinesiólogo lumbago Renca",
                    "rehabilitación de tobillo a domicilio Renca",
                    "kinesiólogo hombro doloroso Renca",
                    "kine traumatológica domicilio Renca"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Renca y Huamachuco | KINEUM",
            "description": "Kinesiología a domicilio en Renca: Huamachuco, Bicentenario, El Montijo y el borde del Mapocho. Evaluación inicial gratuita, lunes a domingo.",
            "keywords": [
                "kinesiólogo a domicilio Renca",
                "kinesiología a domicilio Renca",
                "kinesiólogo Renca",
                "kinesiología domiciliaria Renca",
                "rehabilitación a domicilio Renca",
                "kinesiólogo particular Renca",
                "kine a domicilio Huamachuco Renca"
            ]
        }
    },
    "lo-prado": {
        "centrosSalud": [
            {
                "nombre": "SAR Dr. Raúl Yazigi",
                "tipo": "Servicio de urgencia primaria (SAR)",
                "nota": "Urgencia primaria en Lo Prado; no funciona las 24 horas, confirma su horario antes de ir"
            },
            {
                "nombre": "SAPU Dr. Avendaño (CESFAM Dr. Carlos Avendaño)",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria en Lo Prado; horario parcial, conviene confirmarlo"
            },
            {
                "nombre": "SAPU Santa Anita (CESFAM Santa Anita)",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria en el sector Santa Anita; no atiende las 24 horas"
            },
            {
                "nombre": "CESFAM Dr. Raúl Yazigi",
                "tipo": "CESFAM",
                "nota": "Atención primaria y controles en horario hábil, sin urgencia nocturna"
            },
            {
                "nombre": "CESFAM Santa Anita",
                "tipo": "CESFAM",
                "nota": "CESFAM de la comuna, en el sector Santa Anita; consulta ahí si tu dirección está inscrita"
            },
            {
                "nombre": "CESFAM Dr. Carlos Avendaño",
                "tipo": "CESFAM",
                "nota": "Atención primaria y controles médicos de la comuna"
            },
            {
                "nombre": "CESFAM Pablo Neruda",
                "tipo": "CESFAM",
                "nota": "Atención primaria, útil para controles después de un alta"
            },
            {
                "nombre": "Hospital Clínico Félix Bulnes (Mapocho 7432)",
                "tipo": "Hospital público",
                "nota": "Está en Cerro Navia, no en Lo Prado. Urgencia 24 h adulto y pediátrica; es el hospital de referencia de la comuna"
            },
            {
                "nombre": "Clínica RedSalud Santiago (Alameda 4848)",
                "tipo": "Clínica privada",
                "nota": "Ubicada en Estación Central. Otra urgencia 24 h adulto y pediátrica; confirma la dirección antes de ir"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Lo Prado: villas, pasajes y red de atención primaria",
            "parrafos": [
                "Lo Prado se recorre rápido: son 6,7 km² casi sin pendientes, con villas de vivienda baja y conjuntos de pocos pisos. Para el kinesiólogo eso significa que la camilla y el equipamiento entran a nivel de calle en la mayoría de las casas. Lo que conviene avisar al agendar es el pasaje: en Lautaro, Villa Ecuador o Jardín Lo Prado muchas calles interiores son angostas y el auto queda a media cuadra de la reja. Y si vives en un departamento de Parque Residencial Alameda, dinos el piso, porque esos edificios suelen no tener ascensor.",
                "En Lo Prado la red de salud es de atención primaria: cuatro CESFAM para controles en horario hábil, más los SAPU y el SAR Dr. Raúl Yazigi para urgencia fuera de ese horario, con tramos que cambian y conviene confirmar antes de salir de la casa. El hospital de referencia queda cruzando a Cerro Navia, el Félix Bulnes. Por eso, ante una urgencia real, lo que corresponde es marcar el 131 y no esperar la sesión de kinesiología.",
                "Si vienes saliendo de una hospitalización, la continuidad se arma desde tu casa: el kinesiólogo trabaja con la epicrisis y la indicación médica que te entregaron, y ajusta el plan según lo que digan tus controles. KINEUM atiende de forma particular, sin convenio con hospitales ni clínicas, y entrega boleta de honorarios electrónica para tu reembolso."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En Lo Prado la vivienda de villas como Lautaro, Villa Kennedy o Villa Ecuador es mayoritariamente de baja altura y el acceso suele ser a nivel de calle. Para una persona mayor, muchas veces el obstáculo no es una escalera larga, sino el umbral de la reja, el desnivel hacia el patio y los metros que separan la puerta del lugar donde alcanza a llegar el auto en un pasaje angosto. Ahí entrenamos. La kinesiología geriátrica a domicilio parte evaluando cómo se levanta de la cama, cómo entra al baño y cómo sale hasta la reja, y desde eso se trabaja fuerza de piernas, equilibrio y una marcha que resista ese recorrido. En los conjuntos de pocos pisos de sectores como Parque Residencial Alameda, donde suele no haber ascensor, la escalera común entra en el plan tramo a tramo. Como la comuna es plana, cuando la condición lo permite las caminatas acompañadas por el pasaje pasan a ser parte del entrenamiento. Ante una caída con golpe en la cabeza, confusión o un dolor que no cede, corresponde evaluación médica; en una emergencia, llama al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en una casa de la Villa Kennedy y ya no se atreve a salir sola al pasaje, ¿pueden trabajar eso?",
                        "a": "Sí. Cuando su equilibrio lo permite, parte de la sesión se hace en el tramo real: el umbral de la reja y las primeras cuadras del pasaje, con el kinesiólogo al lado. Ahí se ajusta la técnica de paso, se evalúa si conviene un bastón y se define hasta dónde es razonable que llegue sola por ahora."
                    },
                    {
                        "q": "Vivimos en un departamento chico y sin ascensor en Parque Residencial Alameda, ¿dónde se hace la sesión?",
                        "a": "Donde haya espacio seguro: el pasillo para la marcha, el borde de la cama para practicar los traslados y el marco de una puerta como punto de apoyo. Si el dormitorio queda justo, se corre una silla y se trabaja en el living. La escalera común del edificio se suma cuando la evaluación lo permite, partiendo por unos pocos peldaños y no por el tramo completo, y ese mismo avance sirve para decidir cuándo puede volver a bajar a la calle por su cuenta."
                    }
                ],
                "seoTitle": "Kinesiología Geriátrica a Domicilio en Lo Prado",
                "seoDescription": "Kinesiología geriátrica a domicilio en Lo Prado: equilibrio, fuerza y prevención de caídas en casa. Evaluación inicial gratuita. WhatsApp +56 9 9967 9593.",
                "keywords": [
                    "kinesiología geriátrica a domicilio Lo Prado",
                    "kinesiólogo adulto mayor Lo Prado",
                    "rehabilitación adulto mayor a domicilio Lo Prado",
                    "prevención de caídas adulto mayor Lo Prado",
                    "kinesiólogo a domicilio Lo Prado",
                    "kinesiología adulto mayor Santiago poniente"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Cuando el alta llega desde el Hospital Clínico Félix Bulnes, hospital de referencia de Lo Prado que queda en Cerro Navia, o desde una clínica fuera de la comuna, lo más duro de las primeras semanas suele ser repetir ese viaje dos o tres veces por semana con muletas o con un brazo inmovilizado. La rehabilitación postquirúrgica a domicilio evita ese trayecto justo cuando moverse cuesta más. En la evaluación inicial gratuita se revisan tu epicrisis y la pauta de tu cirujano: restricciones de carga, rangos de movimiento permitidos y cuidados de la herida. Con eso se trabaja en tu casa movilidad, fuerza y marcha, y se practica lo que tu semana exige de verdad: salir por el antejardín, cruzar el pasaje hasta donde alguien puede estacionar y subir al auto para ir a tus controles. KINEUM atiende de forma particular y no tiene convenio con ese hospital ni con clínicas. Fiebre, enrojecimiento que avanza alrededor de la herida o dolor con hinchazón en la pantorrilla obligan a consultar; ante falta de aire repentina o dolor en el pecho, llama al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "Me operaron y el auto no llega hasta la puerta porque vivo en un pasaje angosto, ¿es problema para las sesiones?",
                        "a": "No. El kinesiólogo entra caminando con el equipamiento, así que basta con que nos indiques el pasaje y una referencia para ubicar la casa. Ese mismo tramo hasta donde se puede estacionar suele ser uno de los objetivos del plan, porque es el que vas a necesitar para tus controles."
                    },
                    {
                        "q": "Mi control queda en el Félix Bulnes, en Cerro Navia, y todavía ando con muletas. ¿Eso se practica?",
                        "a": "Sí, se ensaya en las sesiones previas al control: salir por el antejardín, recorrer el pasaje hasta donde el auto puede esperar y subir y bajar del vehículo sin cargar el lado operado. Si el kinesiólogo ve que alguna parte todavía no es segura, te dice qué ayuda técnica conviene o si necesitas que alguien te acompañe ese día."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica a Domicilio Lo Prado",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en Lo Prado: plan según tu alta, sin viajar a control con muletas. Evaluación inicial gratuita, lunes a domingo.",
                "keywords": [
                    "rehabilitación postquirúrgica a domicilio Lo Prado",
                    "kinesiólogo post operado Lo Prado",
                    "kinesiología después de operación Lo Prado",
                    "rehabilitación rodilla a domicilio Lo Prado",
                    "rehabilitación cadera a domicilio Lo Prado",
                    "kinesiólogo a domicilio Lo Prado"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En Lo Prado, lo primero que conviene tener resuelto en un cuadro respiratorio es el horario: la comuna tiene urgencia primaria en el SAR Dr. Raúl Yazigi y en los SAPU Dr. Avendaño y Santa Anita, pero ninguno funciona las 24 horas y los tramos publicados cambian. Confírmalos antes de necesitarlos y no salgas de noche dando por hecho que estarán abiertos; si están cerrados, la urgencia hospitalaria de referencia es el Hospital Clínico Félix Bulnes, en Cerro Navia. Con eso claro, la sesión en casa hace lo suyo: despeje de secreciones, trabajo del patrón respiratorio y uso correcto del inhalador con aerocámara cuando el médico lo indicó, además de enseñarte a reconocer en tu hijo o en el adulto a tu cargo las señales que obligan a consultar y no a esperar la próxima visita. Si respira muy rápido, se le hunden las costillas, tiene los labios morados o no logra alimentarse, llama al SAMU al 131. La kinesiología complementa el tratamiento médico y no lo reemplaza.",
                "faqsLocales": [
                    {
                        "q": "Es de madrugada y mi hijo respira con esfuerzo, ¿el SAR de Lo Prado está abierto?",
                        "a": "No se puede dar por hecho: el SAR Dr. Raúl Yazigi y los SAPU de la comuna atienden en horarios de tarde, noche y fin de semana, pero no las 24 horas y esos tramos cambian. Si ves señales de alarma, llama al SAMU al 131; la urgencia hospitalaria de referencia de la comuna, abierta las 24 horas, es el Félix Bulnes, en Cerro Navia."
                    },
                    {
                        "q": "Volvimos del SAR con indicación de kinesiología respiratoria, ¿se puede hacer la sesión el mismo día?",
                        "a": "Habitualmente sí, si el niño viene estable y con la indicación en mano; se coordina para unas horas después, cuando ya descansó y comió. Si llega muy decaído o con fiebre alta, el kinesiólogo puede preferir dejarla para el día siguiente y decírtelo al llegar, porque en ese estado el despeje de secreciones cansa más de lo que aporta."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio en Lo Prado",
                "seoDescription": "Kinesiología respiratoria a domicilio en Lo Prado para niños y adultos, con indicación médica. Sesiones en tu casa, de lunes a domingo, con hora acordada.",
                "keywords": [
                    "kinesiología respiratoria a domicilio Lo Prado",
                    "kinesiólogo respiratorio niños Lo Prado",
                    "kinesiología bronquial a domicilio Lo Prado",
                    "kinesiólogo respiratorio adulto Lo Prado",
                    "kine respiratoria domicilio Santiago poniente",
                    "kinesiólogo a domicilio Lo Prado"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Después de un ACV, el mes siguiente al alta suele ser el más frágil. En Lo Prado esa continuidad hay que armarla fuera de la comuna, porque la red local es de atención primaria y el hospital de referencia, el Félix Bulnes, queda en Cerro Navia: trasladar por Av. San Pablo a alguien que todavía no controla bien el tronco, y en silla de ruedas, se convierte en un operativo para toda la familia. La rehabilitación neurológica a domicilio permite sostener el trabajo en la casa mientras eso se ordena. El kinesiólogo parte de la epicrisis y de lo que indicó el neurólogo o el fisiatra, y entrena lo que la vivienda exige: pasar de la cama a la silla, girar en los pasillos angostos de una casa de villa y salir hasta la reja y por el pasaje hasta donde alcanza a llegar el auto. También se enseña a quien cuida a movilizar sin lastimarse la espalda. Los avances son graduales y distintos en cada persona. Si aparece pérdida súbita de fuerza, habla enredada o la cara desviada, llama de inmediato al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "Mi papá volvió del hospital en silla de ruedas y la casa tiene pasillos estrechos, ¿se puede rehabilitar igual?",
                        "a": "Sí, y justamente por eso conviene hacerlo en la casa: los giros, el paso por el pasillo y la transferencia a la cama se entrenan en el espacio real. Si algo no es maniobrable, el kinesiólogo te indica qué ajuste conviene evaluar, como cambiar la ubicación de la cama o despejar un mueble."
                    },
                    {
                        "q": "Vivimos en un pasaje donde el auto queda a media cuadra, ¿cómo lo sacamos en silla de ruedas cuando hay que ir al control?",
                        "a": "Ese tramo se ensaya en la sesión: la transferencia desde la cama a la silla, cómo tomar la silla para pasar el umbral de la reja y cómo se reparten el peso dos personas en el trayecto hasta el auto, para que nadie termine cargando todo con la espalda. Si hay un desnivel que hace la maniobra insegura, el kinesiólogo lo dice y propone otro punto de embarque o el apoyo de alguien más."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica a Domicilio en Lo Prado",
                "seoDescription": "Rehabilitación neurológica a domicilio en Lo Prado tras un ACV: traslados, equilibrio y marcha en tu propia casa. Evaluación inicial gratuita.",
                "keywords": [
                    "rehabilitación neurológica a domicilio Lo Prado",
                    "kinesiólogo ACV a domicilio Lo Prado",
                    "rehabilitación post ACV Lo Prado",
                    "kinesiología Parkinson a domicilio Lo Prado",
                    "kinesiólogo neurológico Lo Prado",
                    "kinesiólogo a domicilio Lo Prado"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Un esguince, un lumbago o un hombro doloroso cambian de tamaño según cómo te muevas, y en Lo Prado el desplazamiento diario casi siempre pasa por caminar hasta un paradero de Av. San Pablo o hasta una estación de Metro: San Pablo, que combina las Líneas 1 y 5, Lo Prado en la Línea 5, o Neptuno, Pajaritos y Las Rejas en el borde sur de la comuna. Esas cuadras, más las escaleras del acceso al Metro y el vagón lleno en hora punta, son la meta real del tratamiento y no un ejercicio de camilla. La kinesiología traumatológica a domicilio empieza por lo que duele —movilidad, control del dolor con ejercicio y fuerza— y después reconstruye ese trayecto por etapas: primero dentro de la casa, luego el pasaje, después la cuadra hasta el paradero y al final las escaleras de la estación. Como el terreno es plano, la progresión se mide en distancia y no en pendientes. Si hubo un golpe fuerte con deformidad, no puedes apoyar el pie o el dolor es muy intenso, primero hay que descartar una fractura con evaluación médica y radiografía.",
                "faqsLocales": [
                    {
                        "q": "Me torcí el tobillo y no puedo caminar hasta el Metro, ¿tengo que ir igual a un centro para tratarme?",
                        "a": "No. El kinesiólogo llega a tu casa con el equipamiento, así que el tratamiento parte sin que tengas que hacer ese trayecto. Volver a caminar hasta el paradero de San Pablo o hasta la estación se trabaja como objetivo del plan, por etapas y según cómo responda el tobillo."
                    },
                    {
                        "q": "¿Cómo sé que ya estoy en condiciones de volver a tomar el Metro en Lo Prado?",
                        "a": "Se fija contigo como criterio de alta y se mide en cosas concretas: caminar las cuadras hasta la estación sin que el dolor aumente al día siguiente, bajar la escalera del acceso alternando los pies en vez de peldaño por peldaño, y aguantar de pie en el vagón en hora punta. Cada lesión evoluciona distinto, así que eso se revisa sesión a sesión y no se compromete una fecha."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica a Domicilio Lo Prado",
                "seoDescription": "Kinesiología traumatológica a domicilio en Lo Prado: esguinces, lumbago y hombro doloroso, sin ir hasta el Metro. Sesiones de lunes a domingo.",
                "keywords": [
                    "kinesiología traumatológica a domicilio Lo Prado",
                    "kinesiólogo esguince tobillo Lo Prado",
                    "kinesiólogo lumbago a domicilio Lo Prado",
                    "kinesiología hombro a domicilio Lo Prado",
                    "kinesiólogo deportivo a domicilio Lo Prado",
                    "kinesiólogo a domicilio Lo Prado"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Lo Prado | KINEUM Chile",
            "description": "Kinesiología a domicilio en Lo Prado: villas, pasajes y el eje de Av. San Pablo. Sesiones en tu casa, lunes a domingo. WhatsApp +56 9 9967 9593.",
            "keywords": [
                "kinesiólogo a domicilio Lo Prado",
                "kinesiología a domicilio Lo Prado",
                "kinesiólogo Lo Prado",
                "kine a domicilio Lo Prado",
                "rehabilitación a domicilio Lo Prado",
                "kinesiólogo adulto mayor Lo Prado",
                "kinesiólogo a domicilio Santiago poniente"
            ]
        }
    },
    "pedro-aguirre-cerda": {
        "centrosSalud": [
            {
                "nombre": "SAR Dr. Amador Neghme (Llanquihue 6043, población Dávila)",
                "tipo": "Servicio de urgencia primaria (SAR)",
                "nota": "Urgencia primaria 24 h dentro de la comuna"
            },
            {
                "nombre": "CESFAM Padre Pierre Dubois (30 de Octubre 3169, población La Victoria)",
                "tipo": "CESFAM",
                "nota": "Atención primaria en La Victoria; no funciona como urgencia 24 h"
            },
            {
                "nombre": "CESFAM Dr. Amador Neghme Rodríguez (Alhué 2810, población Dávila)",
                "tipo": "CESFAM",
                "nota": "Atención primaria en el sector Dávila; confirma su horario antes de ir"
            },
            {
                "nombre": "CESFAM Dr. Edgardo Enríquez Frödden (Av. Clotario Blest 2650, Villa Los Aromos)",
                "tipo": "CESFAM",
                "nota": "Atención primaria en el sector de Villa Los Aromos"
            },
            {
                "nombre": "CESFAM Lo Valledor Norte (Cooperación 4661)",
                "tipo": "CESFAM",
                "nota": "Atención primaria en el sector de Lo Valledor Norte"
            },
            {
                "nombre": "CESFAM Dr. Miguel Enríquez Espinosa (Cooperación 6041)",
                "tipo": "CESFAM",
                "nota": "Atención primaria; confirma su horario antes de ir"
            },
            {
                "nombre": "Hospital Barros Luco Trudeau (Gran Avenida José Miguel Carrera 3204)",
                "tipo": "Hospital público",
                "nota": "Urgencia 24 h de adultos. Está en San Miguel, comuna vecina, sobre Gran Avenida"
            },
            {
                "nombre": "Hospital Dr. Exequiel González Cortés (Gran Avenida José Miguel Carrera 3300)",
                "tipo": "Hospital público",
                "nota": "Urgencia pediátrica 24/7. Está en San Miguel, comuna vecina, sobre Gran Avenida"
            },
            {
                "nombre": "COSAM Pedro Aguirre Cerda (Av. La Marina 2494)",
                "tipo": "Centro de salud mental",
                "nota": "Salud mental comunitaria, sin servicio de urgencia"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Pedro Aguirre Cerda: pasajes, casas de uno o dos pisos y a dónde ir si algo se complica",
            "parrafos": [
                "Pedro Aguirre Cerda es una comuna chica y plana, cruzada de norte a sur por la Autopista Central, que permite llegar desde el sector oriente sin pasar por el centro. Adentro, en cambio, manda el pasaje: en La Victoria, Dávila o Villa Sur hay direcciones interiores donde la numeración se repite y el auto queda a media cuadra. El kinesiólogo entra caminando con camilla y equipamiento portátil, y la sesión se arma en el living, el pasillo o el patio de una casa de uno o dos pisos.",
                "Si algo se complica durante el tratamiento, la kinesiología no es la vía. El SAR Dr. Amador Neghme, en Llanquihue 6043, es el punto de urgencia abierto las 24 horas dentro de la comuna; las urgencias hospitalarias de referencia quedan en Gran Avenida, en San Miguel: el Hospital Barros Luco Trudeau para adultos y el Hospital Dr. Exequiel González Cortés para niños. Ante una emergencia, llama al SAMU al 131.",
                "Para coordinar la visita ayuda decir por dónde se llega: si conviene entrar por la Autopista Central o por la Línea 6, en Lo Valledor o Presidente Pedro Aguirre Cerda, y qué esquina o unidad vecinal sirve de referencia cuando la dirección es de pasaje. A primera hora, el sector norponiente concentra camiones que entran y salen del mercado mayorista, así que ahí suele rendir más una hora algo más tarde. Trabajamos de forma particular, con boleta de honorarios electrónica para tu reembolso."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En Pedro Aguirre Cerda predomina la vivienda de origen social: casas de uno o dos pisos levantadas desde 1949 por programas estatales y por tomas de terreno entre 1950 y 1970, con piezas chicas, un peldaño en el acceso y puertas de baño angostas por donde un andador no siempre pasa. La kinesiología geriátrica a domicilio empieza midiendo eso: si la persona logra salir de la pieza, girar frente al lavamanos y cruzar el umbral hacia el patio. Sobre esa base entrenamos fuerza de piernas, equilibrio y los cambios de posición que más le cuestan durante el día. Cuando el kinesiólogo lo estima seguro, la práctica continúa afuera: el pasaje interior ofrece un tramo corto y sin tránsito de paso para ensayar la marcha acompañada, y más adelante puede extenderse hasta el Parque André Jarlán. Donde hay block sin ascensor, la escalera común se ordena por tramos, avanzando según la respuesta de cada persona. Si ocurre una caída con golpe en la cabeza, confusión o dolor que no cede, corresponde evaluación médica; ante una emergencia, llama al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "El baño de mi mamá es angosto y el andador no entra, ¿se puede hacer algo desde la kinesiología?",
                        "a": "Sí. En la evaluación inicial gratuita el kinesiólogo mide ese paso concreto y define si conviene entrenar el giro con apoyo en el marco, cambiar el sentido de entrada o reemplazar el andador por un bastón dentro del baño. Las modificaciones estructurales, como una barra fija, quedan como recomendación para la familia."
                    },
                    {
                        "q": "Mi papá lleva meses casi sin salir de la casa, ¿es realista que vuelva a caminar hasta el Parque André Jarlán?",
                        "a": "Depende de su estado y de cómo responda, así que no prometemos esa meta. Lo habitual es empezar dentro de la casa, seguir con el largo del pasaje acompañado y recién después evaluar trayectos más largos. Como la comuna no tiene pendientes, el terreno ayuda, pero el ritmo lo marca él."
                    }
                ],
                "seoTitle": "Kinesiología Geriátrica en Pedro Aguirre Cerda | KINEUM",
                "seoDescription": "Kinesiólogo a domicilio para adultos mayores en Pedro Aguirre Cerda: fuerza, equilibrio y marcha segura dentro de la casa y el pasaje.",
                "keywords": [
                    "kinesiólogo adulto mayor Pedro Aguirre Cerda",
                    "kinesiología geriátrica a domicilio Pedro Aguirre Cerda",
                    "kinesiólogo a domicilio adulto mayor La Victoria",
                    "rehabilitación adulto mayor Pedro Aguirre Cerda",
                    "prevención de caídas Pedro Aguirre Cerda",
                    "kinesiólogo a domicilio población Dávila"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Después de una operación de cadera, rodilla u hombro, las primeras semanas lo que más pesa no es el ejercicio sino el traslado. Desde Pedro Aguirre Cerda, los controles y la urgencia de adultos de referencia quedan en Gran Avenida, ya en San Miguel, y cada salida significa dejar el pasaje, subirte a un auto con muletas y repetir el trayecto de vuelta. Con la rehabilitación postquirúrgica a domicilio esos viajes quedan solo para las citas que tu médico pide. En la evaluación inicial gratuita leemos tu epicrisis y el protocolo del cirujano, te hayas operado donde te hayas operado, para saber cuánto peso puedes apoyar y qué movimientos están permitidos por ahora. Desde ahí entrenamos lo que tu casa te va a exigir mañana: levantarte de una cama baja, girar en un baño chico, cruzar el peldaño de la entrada. KINEUM es un servicio particular, sin convenio con hospitales ni clínicas. Fiebre, herida con secreción o una pantorrilla hinchada y dolorosa piden consulta médica pronta; si aparece falta de aire o dolor en el pecho, llama al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "¿Igual tengo que ir a los controles en Gran Avenida si hago la kinesiología en casa?",
                        "a": "Sí, los controles médicos los define tu cirujano y no los reemplazamos. Lo que sí se reduce es el resto de los traslados: las sesiones de kinesiología se hacen en tu casa, de lunes a domingo, y si un control coincide con la hora de la sesión, la movemos ese día."
                    },
                    {
                        "q": "Me operé en una clínica privada y quiero recuperar parte del gasto en mi Isapre, ¿cómo funciona?",
                        "a": "Contratas directamente con nosotros y recibes boleta de honorarios electrónica por cada sesión. Con esa boleta y la indicación médica pides reembolso en tu Isapre o en tu seguro complementario, según lo que cubra tu plan. No tenemos convenio con aseguradoras ni con la clínica donde te operaron."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica Pedro Aguirre Cerda | KINEUM",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en Pedro Aguirre Cerda: sesiones en tu casa después del alta, sin repetir traslados por Gran Avenida.",
                "keywords": [
                    "rehabilitación postquirúrgica a domicilio Pedro Aguirre Cerda",
                    "kinesiología post operatoria Pedro Aguirre Cerda",
                    "kinesiólogo después de una operación Pedro Aguirre Cerda",
                    "rehabilitación de rodilla a domicilio Pedro Aguirre Cerda",
                    "rehabilitación de cadera a domicilio Pedro Aguirre Cerda",
                    "kinesiólogo a domicilio post cirugía Villa Sur"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "Cuando hay un niño con bronquitis obstructiva o un adulto saliendo de una neumonía, la duda que más se repite no es qué ejercicios hacer, sino adónde ir si empeora de madrugada. En Pedro Aguirre Cerda la respuesta cambia según la hora: los CESFAM de la comuna, como el Padre Pierre Dubois en La Victoria o el de Lo Valledor Norte, funcionan en horario de atención primaria y conviene confirmarlo antes de salir; el SAR Dr. Amador Neghme, en Llanquihue 6043, es el punto de urgencia abierto las 24 horas dentro de la comuna, y la urgencia pediátrica de referencia es el Hospital Dr. Exequiel González Cortés, sobre Gran Avenida, en San Miguel. Ese mapa queda por escrito en la primera visita, junto con lo que obliga a consultar sin esperar: que respire más rápido de lo habitual, que se le marquen las costillas al inspirar, un tono azulado en los labios, quejido al exhalar o que deje de alimentarse. La sesión en casa se dedica al despeje de secreciones, al patrón respiratorio y al inhalador con aerocámara que indicó tu médico. Ante una emergencia, llama al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "Son las tres de la mañana y mi hijo respira con esfuerzo, ¿al SAR de la comuna o al Exequiel González Cortés?",
                        "a": "Si ves señales de alarma, llama al SAMU al 131. Si necesitas trasladarte, el SAR Dr. Amador Neghme (Llanquihue 6043) está abierto a esa hora dentro de la comuna y puede derivar; la urgencia pediátrica hospitalaria es la del Exequiel González Cortés, en Gran Avenida, San Miguel. Los CESFAM no atienden de madrugada."
                    },
                    {
                        "q": "Mi mamá usa oxígeno en casa y vive en un segundo piso sin ascensor, ¿la pueden atender ahí?",
                        "a": "Sí. El kinesiólogo sube con el equipamiento y la sesión se hace en su pieza o donde esté instalado el concentrador, sin moverla del departamento. Trabajamos con la indicación de su médico y coordinamos de lunes a domingo, porque evitarle la salida en invierno suele ser parte del beneficio."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria en Pedro Aguirre Cerda | KINEUM",
                "seoDescription": "Kinesiología respiratoria a domicilio en Pedro Aguirre Cerda: niños y adultos, con señales de alarma claras y sesiones de lunes a domingo.",
                "keywords": [
                    "kinesiología respiratoria a domicilio Pedro Aguirre Cerda",
                    "kinesiólogo respiratorio para niños Pedro Aguirre Cerda",
                    "kinesiología respiratoria pediátrica Pedro Aguirre Cerda",
                    "kinesiólogo a domicilio bronquitis Pedro Aguirre Cerda",
                    "kinesiología respiratoria adulto mayor Pedro Aguirre Cerda",
                    "urgencia pediátrica cerca de Pedro Aguirre Cerda"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Volver a casa después de un ACV plantea un problema concreto en las viviendas de Pedro Aguirre Cerda: pasillos estrechos, un baño donde una silla de ruedas no alcanza a girar y, en varios sectores, un desnivel en la puerta que separa el interior de la vereda. La rehabilitación neurológica a domicilio trabaja con esa casa tal como está. Partimos de las indicaciones del neurólogo o del fisiatra y entrenamos control de tronco, el paso de la cama a la silla, equilibrio sentado y de pie, y la marcha asistida en el espacio que haya. Más adelante, como el terreno no tiene pendientes, se pueden ensayar tramos acompañados hasta la esquina. Cuando el cuidado se reparte entre varios en la familia, acomodamos el horario para que todos vean la misma maniobra de movilización y aprendan a protegerse la espalda al hacerla. Los avances son graduales y distintos en cada caso. Si de golpe aparece debilidad en un lado del cuerpo, la boca desviada o dificultad para hablar, llama de inmediato al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "La silla de ruedas no da el giro en nuestro baño, ¿eso frena la rehabilitación?",
                        "a": "No, pero cambia el plan. El kinesiólogo evalúa si conviene entrenar la transferencia desde la silla a una banqueta en la puerta del baño, si sirve entrar de espalda o si por ahora es más seguro el aseo en la cama. Las adaptaciones que requieran obra quedan como recomendación para ustedes."
                    },
                    {
                        "q": "En la casa nos turnamos varios para cuidarlo y trabajamos en horarios distintos, ¿cómo se coordina?",
                        "a": "Acordamos el horario de la sesión pensando en quién puede estar presente, y atendemos de lunes a domingo, así que se puede repartir entre días. La idea es que cada persona que ayuda vea y practique la maniobra al menos una vez, porque cuando cada uno lo hace a su manera aumenta el riesgo para él y para quien lo levanta."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica en Pedro Aguirre Cerda | KINEUM",
                "seoDescription": "Rehabilitación neurológica a domicilio en Pedro Aguirre Cerda: traslados, equilibrio y marcha en casas chicas, con la familia que cuida.",
                "keywords": [
                    "rehabilitación neurológica a domicilio Pedro Aguirre Cerda",
                    "kinesiología neurológica Pedro Aguirre Cerda",
                    "rehabilitación de ACV a domicilio Pedro Aguirre Cerda",
                    "kinesiólogo para Parkinson Pedro Aguirre Cerda",
                    "kinesiólogo a domicilio silla de ruedas Pedro Aguirre Cerda",
                    "rehabilitación en casa después del alta Pedro Aguirre Cerda"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "En el borde norponiente de la comuna está el mercado mayorista Lo Valledor, que concentra movimiento de camiones y de carga desde la madrugada. Si tu jornada o tu rutina incluyen levantar peso desde el suelo, los motivos de consulta más frecuentes de la kinesiología traumatológica aparecen justamente ahí: lumbago, hombro doloroso, tendinopatías y esguinces. También llegan de la cancha y de quienes salen a correr aprovechando que aquí no hay subidas. En casa evaluamos la zona afectada y avanzamos con terapia manual y ejercicio progresivo; cuando el dolor cede, lo importante es ensayar el gesto que te lesionó, con objetos de un peso parecido al que mueves de verdad, porque estar sin molestias en reposo no significa estar listo para un turno completo. Como atendemos de lunes a domingo, la hora puede quedar al terminar la jornada o a media mañana. Si hay deformidad, no logras apoyar el pie o el dolor es muy intenso, primero necesitas evaluación médica con radiografía; la urgencia hospitalaria de adultos de referencia es la del Hospital Barros Luco Trudeau, en San Miguel, comuna vecina.",
                "faqsLocales": [
                    {
                        "q": "Descargo de madrugada en el sector de Lo Valledor y termino con la espalda y el hombro cargados, ¿a qué hora me pueden atender?",
                        "a": "La hora se fija contigo y atendemos de lunes a domingo, así que una sesión a media mañana, después del turno, es posible. Un punto aparte: si la lesión ocurrió mientras trabajabas, esa vía se resuelve por tu empleador y el organismo administrador que le corresponde; la kinesiología particular a domicilio se contrata por fuera de ese circuito."
                    },
                    {
                        "q": "¿Con qué señales sé que ya puedo volver a cargar peso como antes?",
                        "a": "Miramos hitos concretos, no fechas: que muevas la articulación en todo su rango sin dolor, que soportes cargas livianas repetidas con buena técnica, que aguantes el gesto completo varias veces seguidas y que al día siguiente no aumenten la rigidez ni la molestia. Recién ahí se sube al peso real, y de a poco."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica en Pedro Aguirre Cerda | KINEUM",
                "seoDescription": "Kinesiología traumatológica a domicilio en Pedro Aguirre Cerda: lumbago, hombro y esguinces, con vuelta progresiva a levantar peso.",
                "keywords": [
                    "kinesiología traumatológica a domicilio Pedro Aguirre Cerda",
                    "kinesiólogo para lumbago Pedro Aguirre Cerda",
                    "kinesiólogo esguince a domicilio Pedro Aguirre Cerda",
                    "kinesiólogo hombro doloroso Pedro Aguirre Cerda",
                    "kinesiología deportiva a domicilio Pedro Aguirre Cerda",
                    "kinesiólogo a domicilio Lo Valledor Norte"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Pedro Aguirre Cerda | KINEUM",
            "description": "Kinesiólogo a domicilio en Pedro Aguirre Cerda: sesiones en tu casa en La Victoria, Dávila o Lo Valledor Norte. Evaluación inicial gratuita.",
            "keywords": [
                "kinesiólogo a domicilio Pedro Aguirre Cerda",
                "kinesiología a domicilio Pedro Aguirre Cerda",
                "kinesiólogo Pedro Aguirre Cerda",
                "rehabilitación a domicilio Pedro Aguirre Cerda",
                "kinesiólogo a domicilio La Victoria",
                "kinesiólogo a domicilio población Dávila",
                "kinesiólogo a domicilio Lo Valledor Norte"
            ]
        }
    },
    "lo-espejo": {
        "centrosSalud": [
            {
                "nombre": "SAR Julio Acuña Pinzón (Servicio de Alta Resolutividad)",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria dentro de la comuna, en Av. Central Cardenal Raúl Silva Henríquez; atiende también a niños. Confirma su horario antes de ir"
            },
            {
                "nombre": "SAPU CESFAM Clara Estrella",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria municipal dentro de la comuna; no atiende las 24 horas, revisa el horario"
            },
            {
                "nombre": "CESFAM Clara Estrella",
                "tipo": "CESFAM",
                "nota": "Atención primaria en la comuna; no es servicio de urgencia"
            },
            {
                "nombre": "CESFAM Julio Acuña Pinzón",
                "tipo": "CESFAM",
                "nota": "Atención primaria en la comuna, junto al SAR del mismo nombre"
            },
            {
                "nombre": "CESFAM Dra. Mariela Salgado",
                "tipo": "CESFAM",
                "nota": "Atención primaria en la comuna: controles y derivaciones, no urgencia"
            },
            {
                "nombre": "CESFAM Pueblo Lo Espejo",
                "tipo": "CESFAM",
                "nota": "Atención primaria en el sector de Pueblo Lo Espejo"
            },
            {
                "nombre": "Hospital Barros Luco Trudeau",
                "tipo": "hospital público",
                "nota": "Hospital de referencia para adultos, en San Miguel (fuera de Lo Espejo). Urgencia 24 h de adultos"
            },
            {
                "nombre": "Hospital Dr. Exequiel González Cortés",
                "tipo": "hospital público",
                "nota": "Hospital pediátrico de referencia, en San Miguel (fuera de Lo Espejo). Urgencia 24 h para niños"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Lo Espejo: pasajes, soleras y urgencias fuera de la comuna",
            "parrafos": [
                "Lo Espejo es una comuna chica y plana: el acceso a las casas suele ser a nivel de calle. Predominan las viviendas de uno o dos pisos de origen SERVIU en José María Caro, Santa Adriana y Lo Valledor, más blocks de baja altura sin ascensor. Lo que define la sesión no es tanto el piso como el pasaje: veredas angostas, soleras altas y autos a ambos lados. Dinos por dónde se entra y dónde dejar el vehículo, para bajar la camilla sin dar vueltas.",
                "Dentro de la comuna la urgencia más a mano es el SAR Julio Acuña Pinzón, en Av. Central Cardenal Raúl Silva Henríquez, que también recibe niños; confirma su horario antes de salir. El SAPU del CESFAM Clara Estrella no atiende a toda hora. Los hospitales de referencia quedan fuera: el Barros Luco para adultos y el Exequiel González Cortés para niños, en San Miguel. Ante una emergencia, llama al SAMU al 131. KINEUM es particular e independiente, sin convenio con esos centros, y entrega boleta electrónica para el reembolso que permita tu plan.",
                "Como la comuna es sobre todo residencial y mucha gente trabaja fuera, las visitas se terminan fijando temprano en la mañana o de tarde-noche, cuando hay alguien que pueda abrir y acompañar; también atendemos sábado y domingo. Y como el control médico obliga a salir de Lo Espejo, la frecuencia de las sesiones en casa es lo que sostiene la rehabilitación entre una consulta y la siguiente."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En Lo Espejo la puerta de calle da casi directo al pasaje, y ese par de metros entre el umbral y la vereda es donde se juega la independencia de una persona mayor. El escalón de entrada, el antejardín corto y la solera alta obligan a cambios de nivel que casi nadie entrena, y cuando dejan de hacerse con seguridad, la salida al almacén o a la feria se va acortando sola. En la sesión trabajamos ese tramo concreto: pararse de la silla, cruzar el umbral, bajar la solera con apoyo y volver a subirla, con bastón si corresponde. También miramos lo que complica el regreso, como el pasaje con autos a ambos lados, que deja poco espacio para ir acompañada de frente en vez de en fila. Puertas adentro definimos dónde poner un apoyo firme para levantarse y cómo queda el recorrido al baño de noche. Si hay una caída con golpe en la cabeza, confusión o no logra levantarse, llama al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá se queda adentro porque le da miedo bajar la solera para salir al pasaje. ¿Eso se puede entrenar?",
                        "a": "Se entrena, y suele ser una de las primeras metas concretas. Medimos cuánto le cuesta ese cambio de nivel, vemos si le conviene un bastón y practicamos bajar y subir el escalón de su propia entrada, primero asistida y después sola si la evaluación lo respalda. Cuánto recupere depende de su estado de salud y de la constancia, así que no comprometemos un plazo. Si durante la práctica aparece dolor que no cede, falta de aire o mareo, se detiene y se consulta al médico."
                    },
                    {
                        "q": "El pasaje donde vivimos es angosto y siempre hay autos estacionados. ¿Igual pueden practicar la caminata ahí?",
                        "a": "Habitualmente sí, y conviene, porque ese es el terreno que usa todos los días. Elegimos el horario con menos movimiento, el kinesiólogo va a su lado y empezamos con tramos cortos hasta la esquina. Si la vereda está muy irregular, partimos dentro de la casa o en el antejardín y salimos después."
                    }
                ],
                "seoTitle": "Kinesiología Geriátrica a Domicilio en Lo Espejo",
                "seoDescription": "Kinesiólogo geriátrico a domicilio en Lo Espejo: fuerza, equilibrio y prevención de caídas en casas y blocks sin ascensor. Evaluación inicial gratuita.",
                "keywords": [
                    "kinesiología geriátrica a domicilio Lo Espejo",
                    "kinesiólogo adulto mayor Lo Espejo",
                    "rehabilitación adulto mayor a domicilio Lo Espejo",
                    "prevención de caídas adulto mayor Lo Espejo",
                    "kinesiólogo a domicilio José María Caro",
                    "kinesiología para ancianos en casa Santiago sur"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Si tu cirugía terminó con el alta en el Hospital Barros Luco Trudeau, en San Miguel, volver a Lo Espejo es solo el comienzo: después vienen los controles y, si la rehabilitación queda en otra comuna, cada sesión obliga a salir a Américo Vespucio o a la Autopista Central con muletas y acompañante. Hacerla en casa te ahorra ese ida y vuelta justo en las semanas en que menos puedes cargar peso. Antes de la primera visita conviene mirar la vivienda: si tiene segundo piso, lo razonable suele ser dejar la cama abajo mientras la escalera no sea segura; si es de un piso, el punto crítico es que el andador pase por la puerta del baño. También revisamos el escalón del antejardín, que vas a usar cada vez que salgas a control. El plan sigue tu epicrisis y las restricciones de carga que indicó tu cirujano. Fiebre, herida enrojecida o con secreción, o dolor con hinchazón en la pantorrilla: avisa a tu médico. Falta de aire repentina o dolor en el pecho: llama al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "Me operaron la cadera y me dieron el alta en el Barros Luco. ¿Ya no tengo que salir de Lo Espejo?",
                        "a": "A tus controles médicos sí tienes que ir: esos no se reemplazan. Lo que se evita es el traslado a cada sesión de kinesiología, que suele ser varias veces por semana. Trae la epicrisis y las indicaciones del cirujano a la evaluación inicial gratuita y el plan se arma respetando la carga que te autorizó."
                    },
                    {
                        "q": "Llego del alta en auto y mi pasaje es angosto. ¿Qué conviene tener resuelto antes?",
                        "a": "Dónde va a parar el auto y por qué puerta vas a entrar. En muchos pasajes hay vehículos a ambos lados y la bajada con muletas termina haciéndose en la calzada, así que conviene que alguien te espere afuera y que el trayecto hasta la puerta quede libre. Si hay escalón en el antejardín, que esa persona asista ese paso. Avísanos el mismo punto de entrada y bajamos la camilla y el equipo sin dar vueltas."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica a Domicilio Lo Espejo",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en Lo Espejo tras el alta: plan según las indicaciones de tu cirujano, sin viajar a controles de kinesiología.",
                "keywords": [
                    "rehabilitación postquirúrgica a domicilio Lo Espejo",
                    "kinesiólogo post operado Lo Espejo",
                    "kinesiología después de operación cadera Lo Espejo",
                    "rehabilitación rodilla operada a domicilio Lo Espejo",
                    "kinesiología tras alta Barros Luco",
                    "kinesiólogo a domicilio Santa Adriana"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "La kinesiología respiratoria se indica por un médico y complementa su tratamiento, y en Lo Espejo conviene planificarla junto con una decisión que es mejor tomar antes de necesitarla: a dónde ir si el cuadro se agrava. Dentro de la comuna, el SAR Julio Acuña Pinzón, en Av. Central Cardenal Raúl Silva Henríquez, atiende urgencia y recibe niños; confirma su horario antes de salir. Si hace falta urgencia hospitalaria, hay que salir de Lo Espejo: el Hospital Dr. Exequiel González Cortés para niños y el Barros Luco para adultos, ambos en San Miguel. Esa salida se hace mucho más fácil si está preparada: el carné de control, los exámenes recientes y la lista de medicamentos con dosis en una sola carpeta, el inhalador y la aerocámara en la misma bolsa y resuelto de antemano quién maneja o con qué se sale de madrugada desde el pasaje. En la visita dejamos ese plan por escrito y ajustamos el horario de la sesión a la hora en que hay alguien en casa. Ante una emergencia, llama al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "Si tengo que llevar a mi hijo a urgencia desde Lo Espejo, ¿qué debería tener listo?",
                        "a": "Una carpeta con el carné de control, los exámenes recientes y la lista de medicamentos con sus dosis, más el inhalador y la aerocámara. Dentro de la comuna, el SAR Julio Acuña Pinzón atiende urgencia y recibe niños; confirma su horario antes de salir. La urgencia pediátrica hospitalaria de referencia queda fuera de Lo Espejo, en el Exequiel González Cortés, en San Miguel, así que conviene tener decidido con qué salir. Si lo ves respirando con mucho esfuerzo o muy decaído, llama al SAMU al 131 en vez de esperar."
                    },
                    {
                        "q": "Trabajo todo el día y mi hijo queda con su abuela. ¿Se puede hacer la sesión sin que yo esté?",
                        "a": "Se puede, pero tiene que haber un adulto presente que aprenda lo que se hace, porque buena parte del resultado depende de lo que ocurre entre una visita y otra. Si quien queda a cargo va rotando, dejamos las indicaciones por escrito para que no se pierdan en el camino. También atendemos de tarde-noche y los fines de semana, así que se puede fijar la hora en la que sí estás tú."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio en Lo Espejo",
                "seoDescription": "Kinesiología respiratoria a domicilio en Lo Espejo para niños y adultos, con indicación médica. Atendemos de lunes a domingo, evaluación gratuita.",
                "keywords": [
                    "kinesiología respiratoria a domicilio Lo Espejo",
                    "kinesiólogo respiratorio niños Lo Espejo",
                    "kinesiología bronquial a domicilio Lo Espejo",
                    "urgencia pediátrica cerca de Lo Espejo",
                    "kinesiólogo respiratorio adulto mayor Lo Espejo",
                    "kinesiología respiratoria domicilio Santiago sur"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Tras un ACV, el alta de un adulto en este sector suele venir del Hospital Barros Luco Trudeau, y la casa a la que se vuelve suele ser de uno o dos pisos. Cuando es de un piso no hay escalera entre la pieza y el baño, pero las puertas interiores quedan justas para una silla de ruedas; cuando tiene segundo piso, lo primero que hay que resolver es dónde va a dormir mientras la escalera no sea segura. El trabajo a domicilio se arma sobre recorridos concretos: pasar de la cama a la silla, girar en un pasillo de vivienda SERVIU sin engancharse en el marco, entrar al baño y salir al antejardín. La solera del pasaje es el último tramo y el que más miedo da: lo practicamos entre dos personas, definiendo quién toma la silla adelante y quién atrás, para que no dependa de improvisar. Los hospitales de referencia están en San Miguel, así que cada control implica salir de la comuna y sostener la frecuencia en casa evita que la rehabilitación se corte. Si aparecen de golpe debilidad de un lado, cara desviada o dificultad para hablar, llama al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "A mi papá le dieron el alta en el Barros Luco después de un ACV. ¿Cómo seguimos en Lo Espejo?",
                        "a": "Junta la epicrisis, las indicaciones del neurólogo o fisiatra, los informes de kinesiología del hospital y la lista de medicamentos. Con eso, la evaluación inicial gratuita retoma el trabajo donde quedó, en su casa. Contratas directo con KINEUM, no hay convenio de por medio: la información del alta la traes tú y lo que registremos en cada sesión queda por escrito para que lo lleves al control."
                    },
                    {
                        "q": "La silla de ruedas no pasa bien por la puerta del baño y no podemos sacarla al pasaje por la solera. ¿Eso se puede resolver?",
                        "a": "Se puede mejorar bastante sin obras grandes: cambiar el sentido en que abre una puerta, retirar un mueble que roba ancho, definir desde qué lado hacer la transferencia y ensayar la bajada de la solera entre dos personas, con roles fijos. Si hace falta una rampa o barras de apoyo, te lo indicamos para que lo evalúen; nosotros no hacemos la instalación."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica a Domicilio en Lo Espejo",
                "seoDescription": "Rehabilitación neurológica a domicilio en Lo Espejo tras un ACV o con Parkinson: transferencias, marcha y apoyo a quien cuida, en tu propia casa.",
                "keywords": [
                    "rehabilitación neurológica a domicilio Lo Espejo",
                    "kinesiólogo después de ACV Lo Espejo",
                    "kinesiología Parkinson a domicilio Lo Espejo",
                    "rehabilitación post ACV en casa Santiago sur",
                    "kinesiólogo neurológico Lo Espejo",
                    "traslados y silla de ruedas kinesiología domicilio"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Un esguince, un lumbago o las secuelas de una fractura ya tratada se rehabilitan igual de bien en tu casa, y en Lo Espejo eso resuelve un problema concreto: la comuna no tiene estación de Metro propia, así que llegar a un centro significa micro con transbordo, o caminar hasta la estación Lo Espejo del Tren Nos, por Clotario Blest, algo poco razonable con el tobillo hinchado o la espalda bloqueada. En la sesión trabajamos terapia manual, carga progresiva y técnica con lo que hay a mano: una silla firme, el peldaño de la entrada como escalón de prueba, el patio. Cuando toca salir, el terreno manda: en los pasajes con autos estacionados a ambos lados se termina caminando por la calzada, esquivando espejos y portones, y la vereda irregular obliga a mirar el piso en vez de la pisada. Por eso las primeras salidas se hacen acompañado y a la hora de menos movimiento, y recién después se sube la distancia. Si hubo un golpe fuerte con deformidad, no puedes apoyar el pie o el dolor es muy intenso, primero necesitas evaluación médica y probablemente una radiografía.",
                "faqsLocales": [
                    {
                        "q": "Me torcí el tobillo y no tengo cómo llegar a un centro desde Lo Espejo. ¿Pueden venir igual?",
                        "a": "Sí, atendemos a domicilio en la comuna, pero el orden importa. Si no puedes apoyar el pie, hay deformidad o mucha hinchazón, primero necesitas evaluación médica para descartar una fractura: la urgencia primaria más cercana está en la comuna y la urgencia hospitalaria de adultos de referencia es el Barros Luco, en San Miguel. Con el diagnóstico, coordinamos la evaluación inicial gratuita en tu casa."
                    },
                    {
                        "q": "Trabajo parado todo el día y tengo lumbago. ¿Cuándo voy a poder volver a mi rutina normal?",
                        "a": "No hay una fecha garantizada: depende de la causa del dolor, de tu trabajo y de cómo respondas. Lo habitual es avanzar por metas concretas, como llegar caminando al paradero sin que aumente el dolor o cargar una bolsa de feria con buena técnica, y recién después sumar turnos completos. Si el dolor baja por la pierna con adormecimiento o pérdida de fuerza, hay que consultar al médico antes de seguir."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica a Domicilio Lo Espejo",
                "seoDescription": "Kinesiología traumatológica a domicilio en Lo Espejo: esguinces, lumbago y secuelas de fractura, sin cruzar la comuna en micro con dolor.",
                "keywords": [
                    "kinesiología traumatológica a domicilio Lo Espejo",
                    "kinesiólogo esguince tobillo Lo Espejo",
                    "kinesiología lumbago a domicilio Lo Espejo",
                    "rehabilitación de fractura en casa Lo Espejo",
                    "kinesiólogo a domicilio Lo Valledor",
                    "kinesiólogo traumatológico Santiago sur"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Lo Espejo | KINEUM Santiago",
            "description": "Kinesiología a domicilio en Lo Espejo: José María Caro, Santa Adriana, Clara Estrella y Lo Valledor. Evaluación inicial gratuita, lunes a domingo.",
            "keywords": [
                "kinesiólogo a domicilio Lo Espejo",
                "kinesiología a domicilio Lo Espejo",
                "kinesiólogo Lo Espejo",
                "kinesiología domicilio José María Caro",
                "kinesiólogo a domicilio Santa Adriana",
                "rehabilitación a domicilio Lo Espejo",
                "kinesiólogo particular Lo Espejo"
            ]
        }
    },
    "cerrillos": {
        "centrosSalud": [
            {
                "nombre": "CESFAM Dr. Norman Voullieme",
                "tipo": "CESFAM",
                "nota": "Atención primaria en Cerrillos, para controles y derivaciones; no es servicio de urgencia"
            },
            {
                "nombre": "SAPU Dr. Norman Voullieme (calle Salomón Sack)",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria en calle Salomón Sack; no funciona las 24 horas todos los días, confirma el horario vigente antes de ir"
            },
            {
                "nombre": "CESFAM Enfermera Sofía Pincheira (Av. Las Torres)",
                "tipo": "CESFAM",
                "nota": "Atención primaria en Av. Las Torres; no es servicio de urgencia"
            },
            {
                "nombre": "SAR Enfermera Sofía Pincheira (Av. Las Torres)",
                "tipo": "Servicio de urgencia primaria (SAR)",
                "nota": "Urgencia primaria de alta resolutividad en Cerrillos; no atiende las 24 horas todos los días, confirma el horario antes de ir"
            },
            {
                "nombre": "IntegraMédica Plaza Oeste (Av. Américo Vespucio 1501, Mallplaza Oeste)",
                "tipo": "Centro médico ambulatorio",
                "nota": "Consultas médicas y dentales dentro de Cerrillos; no tiene urgencia 24 horas"
            },
            {
                "nombre": "Hospital Clínico San Borja Arriarán",
                "tipo": "Hospital público",
                "nota": "Fuera de Cerrillos, en Santiago Centro: hospital de referencia de la red, con urgencia 24 h adulto y pediátrica"
            },
            {
                "nombre": "Hospital Clínico Metropolitano El Carmen Dr. Luis Valentín Ferrada",
                "tipo": "Hospital público",
                "nota": "Fuera de Cerrillos, en la comuna vecina de Maipú. Urgencia 24 h adulto y pediátrica"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Cerrillos: cómo llegamos y cómo entramos",
            "parrafos": [
                "Cerrillos es chica, así que fuera de hora punta el kinesiólogo cruza de Buzeta al entorno de Mallplaza Oeste en pocos minutos. Lo que conviene prever es el acceso: el tránsito de camiones del barrio industrial y de Camino a Melipilla mueve los tiempos, y en los condominios del sector del ex aeropuerto la conserjería pide aviso previo y muchas veces no hay estacionamiento de visita. Por eso la hora se fija contigo y se avisa quién llega.",
                "Adentro, el terreno plano juega a favor: practicar la marcha en la vereda no obliga a enfrentar pendientes. En las casas y blocks de la trama antigua sobra espacio para la camilla, aunque haya que subirla cuatro o cinco pisos; en los departamentos nuevos, de metraje acotado, basta despejar un par de metros junto a una silla firme.",
                "Cerrillos no tiene hospital: la urgencia dentro de la comuna es primaria, en el SAPU Dr. Norman Voullieme (calle Salomón Sack) y el SAR Enfermera Sofía Pincheira (Av. Las Torres), que no atienden 24 horas todos los días; conviene confirmar el horario antes de necesitarlo. Ante dolor en el pecho, falta de aire intensa o pérdida súbita de fuerza, llama al SAMU (131). Y si vienes de un alta, los papeles que te entregaron son lo único que viaja contigo desde un hospital de otra comuna: con ellos se arma el plan. KINEUM atiende de forma particular, sin convenio con ningún centro."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En los sectores antiguos de Cerrillos, como Lo Errázuriz, Villa México, Villa Suiza o Los Presidentes de Chile, buena parte de los departamentos está en blocks de cuatro o cinco pisos sin ascensor. Si vives en uno y bajar esa escalera empezó a dar miedo, lo habitual es salir menos, y salir menos suele costar fuerza y equilibrio en pocas semanas. El trabajo parte adentro, con ejercicios de fuerza de piernas y de pasar de sentado a de pie, y recién después se pasa a los peldaños reales del edificio, tramo por tramo y sin apuro. Como el terreno de la comuna no tiene pendientes, la meta siguiente puede ser concreta: llegar caminando hasta el almacén de la cuadra o hasta el paradero, acompañada y con la ayuda técnica que corresponda. En las casas de un piso de Buzeta o Villa Los Cerrillos miramos otras cosas: el escalón de la entrada, el desnivel hacia el patio y por dónde se camina de noche. Si hay una caída con golpe en la cabeza o la persona no logra levantarse, el primer llamado es al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "¿Cuántas sesiones necesita mi mamá para volver a bajar sola los cuatro pisos del block?",
                        "a": "No hay un número fijo y sería deshonesto darte uno: depende de su fuerza, su equilibrio, sus diagnósticos y de cómo responda semana a semana. En la evaluación inicial gratuita el kinesiólogo mira su escalera, define objetivos y propone una frecuencia, y desde ahí se reevalúa. Si algún día aparece mareo, dolor en el pecho o falta de aire, la práctica se detiene y corresponde que la vea su médico."
                    },
                    {
                        "q": "Si en Cerrillos no hay hospital, ¿dónde sigue mis controles mi papá?",
                        "a": "Sus controles habituales se ven en su centro de atención primaria, como el CESFAM Dr. Norman Voullieme o el CESFAM Enfermera Sofía Pincheira, o con su médico particular; ninguno de los dos es servicio de urgencia. KINEUM no tiene convenio con esos centros: trabajamos con las indicaciones que ustedes nos compartan y lo que observemos en las sesiones les sirve para comentarlo en el control."
                    }
                ],
                "seoTitle": "Kinesiología Geriátrica a Domicilio en Cerrillos",
                "seoDescription": "Kinesiólogo para adulto mayor a domicilio en Cerrillos: fuerza, equilibrio y la escalera del block, con evaluación inicial gratuita.",
                "keywords": [
                    "kinesiólogo adulto mayor Cerrillos",
                    "kinesiología geriátrica Cerrillos",
                    "kinesiólogo a domicilio Cerrillos",
                    "prevención de caídas Cerrillos",
                    "rehabilitación adulto mayor Cerrillos",
                    "kine tercera edad Cerrillos"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Cerrillos no tiene hospital dentro de la comuna, así que la cirugía y los controles quedan fuera de ella, sea en el sistema público o en una clínica privada. Volver a casa significa cruzar Américo Vespucio o entrar por la Autopista Central, y repetir ese viaje varias veces por semana justo cuando peor te mueves es lo que la rehabilitación en casa evita: los controles con tu cirujano siguen siendo donde te operaron, las sesiones no. El kinesiólogo trabaja con lo que te entregaron al alta, restricciones de carga, rangos permitidos y fechas de control, y arma el plan donde vives. En los departamentos de Ciudad Parque Bicentenario conviene resolver antes el acceso: dejar avisado en conserjería y saber si hay estacionamiento de visita, para no perder minutos en la reja. En los blocks de la trama antigua el primer objetivo suele ser la escalera, dentro de la carga que autorizó tu cirujano. Fiebre, una herida enrojecida o con secreción, o una pantorrilla hinchada y dolorosa son motivo de consulta médica; ante falta de aire repentina o dolor en el pecho, llama al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "Vivo en un condominio de Ciudad Parque Bicentenario y no hay estacionamiento de visitas. ¿Complica la atención?",
                        "a": "No. Se coordina la hora contigo y dejas avisado en conserjería el nombre del kinesiólogo; el equipo es portátil y entra sin problema en el ascensor, así que el estacionamiento no condiciona la sesión. Si el acceso del condominio pide algún registro previo, nos lo dices al agendar y se resuelve antes de la visita."
                    },
                    {
                        "q": "Me operan fuera de Cerrillos y me dan el alta un fin de semana. ¿Pueden empezar esa misma semana?",
                        "a": "Sí, siempre que tu cirujano lo autorice: atendemos de lunes a domingo y la evaluación inicial es gratuita. Como no existe convenio con hospitales ni clínicas, eres tú quien nos comparte la epicrisis y las indicaciones escritas; sin ese documento el kinesiólogo no puede saber qué carga tienes permitida y el plan no parte a ciegas."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica a Domicilio en Cerrillos",
                "seoDescription": "Kinesiólogo post operatorio a domicilio en Cerrillos: la rehabilitación en tu casa tras el alta, sin viajar a cada sesión. Evaluación gratuita.",
                "keywords": [
                    "kinesiólogo post operatorio Cerrillos",
                    "rehabilitación postquirúrgica Cerrillos",
                    "kinesiología a domicilio Cerrillos",
                    "rehabilitación prótesis de rodilla Cerrillos",
                    "kinesiólogo después de una operación Cerrillos",
                    "kine post alta Cerrillos"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En kinesiología respiratoria, lo más útil que queda después de la primera visita, además de la sesión, es saber exactamente a dónde ir si la cosa empeora, y en Cerrillos ese mapa hay que armarlo con anticipación. Dentro de la comuna la urgencia disponible es primaria: el SAPU Dr. Norman Voullieme, en calle Salomón Sack, y el SAR Enfermera Sofía Pincheira, en Av. Las Torres. Ninguno atiende las 24 horas todos los días y los horarios cambian, así que conviene confirmarlos hoy, con calma, y dejarlos anotados en el refrigerador. La urgencia hospitalaria 24 horas queda fuera de Cerrillos, y IntegraMédica Plaza Oeste, en Mallplaza Oeste, es un centro ambulatorio, no un servicio de urgencia. Respiración muy rápida, costillas que se hunden, labios morados, decaimiento marcado o un lactante que deja de alimentarse son motivo para llamar al SAMU (131) sin esperar la sesión. En casa se trabaja el despeje de secreciones, ejercicios respiratorios y el uso del inhalador con aerocámara, siempre con la indicación del médico que está viendo el caso.",
                "faqsLocales": [
                    {
                        "q": "¿A qué urgencia llevo a mi hijo si vivimos en Cerrillos?",
                        "a": "Dentro de la comuna hay urgencia primaria en el SAPU Dr. Norman Voullieme (calle Salomón Sack) y el SAR Enfermera Sofía Pincheira (Av. Las Torres); ninguno atiende las 24 horas todos los días, así que conviene tener el horario confirmado de antemano y anotado. Si ves señales de alarma, llama al SAMU (131) sin esperar: la urgencia hospitalaria 24 h queda fuera de la comuna."
                    },
                    {
                        "q": "¿En Mallplaza Oeste puedo llegar a una urgencia con mi hijo?",
                        "a": "No para una urgencia. IntegraMédica Plaza Oeste, en Av. Américo Vespucio 1501, es un centro médico y dental ambulatorio y no atiende urgencias 24 horas. Si tu hijo respira con esfuerzo, marca el 131 y describe lo que ves: ahí te orientan sobre a qué servicio ir y, si hace falta, lo trasladan."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio en Cerrillos",
                "seoDescription": "Kinesiología respiratoria a domicilio en Cerrillos: sesiones en casa y el mapa de urgencias de la comuna, con evaluación inicial gratuita.",
                "keywords": [
                    "kinesiología respiratoria Cerrillos",
                    "kinesiólogo respiratorio a domicilio Cerrillos",
                    "kine respiratoria niños Cerrillos",
                    "bronquitis obstructiva Cerrillos",
                    "urgencia pediátrica cerca de Cerrillos",
                    "kinesiólogo a domicilio Cerrillos"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Tras un ACV, o con un diagnóstico como Parkinson, lo que más pesa no es la primera semana sino que el trabajo no se corte. En Cerrillos el alta viene de un hospital de otra comuna, así que la continuidad depende de lo que ustedes traigan a casa: la epicrisis, la pauta del neurólogo o fisiatra y, si existen, los informes de la kinesiología recibida durante la hospitalización. Con eso el plan sigue donde quedó. El resto lo define el edificio. En un block de cuatro o cinco pisos sin ascensor, bajar una silla de ruedas exige al menos dos personas, así que primero se entrena todo lo de adentro: pasar de la cama a la silla, recorrer el pasillo, entrar al baño. En Ciudad Parque Bicentenario el problema cambia de forma: hay ascensor, pero puertas angostas, pasillos comunes largos y un estacionamiento subterráneo que conviene medir antes de planificar la primera salida en auto. Como el terreno es plano, llegar hasta la vereda es una meta realista cuando hay equilibrio suficiente. Ante debilidad súbita de un lado del cuerpo, cara desviada o dificultad para hablar, llama de inmediato al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "El alta se la dan en un hospital de otra comuna. ¿Cómo sigue la rehabilitación acá en Cerrillos?",
                        "a": "Con lo que les entreguen ese día: epicrisis, pauta del neurólogo o fisiatra y, si existen, los informes de kinesiología del hospital. Como KINEUM no tiene convenio con hospitales ni clínicas, ese material lo comparten ustedes en la evaluación inicial gratuita y el plan continúa desde ahí, en vez de empezar de nuevo."
                    },
                    {
                        "q": "El ascensor de nuestro edificio es chico para la silla de ruedas. ¿Eso se puede trabajar?",
                        "a": "Sí, y se mide antes de prometer nada: el kinesiólogo revisa el ancho de las puertas, el giro en el hall y el recorrido hasta el portón o el estacionamiento, y entrena ese trayecto paso a paso, además de enseñarle a quien cuida cómo asistirlo sin lesionarse la espalda. Si con esa silla el recorrido todavía no es seguro, te lo decimos con claridad."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica a Domicilio en Cerrillos",
                "seoDescription": "Rehabilitación neurológica a domicilio en Cerrillos tras un ACV: continuidad del alta y trabajo con quien cuida, en tu propia casa.",
                "keywords": [
                    "rehabilitación neurológica Cerrillos",
                    "kinesiólogo neurológico a domicilio Cerrillos",
                    "rehabilitación ACV Cerrillos",
                    "kinesiología Parkinson Cerrillos",
                    "kinesiólogo a domicilio Cerrillos",
                    "rehabilitación después del alta Cerrillos"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Un esguince de tobillo, un lumbago que no cede, un hombro que duele al levantar el brazo o las secuelas de una fractura ya tratada se pueden seguir en casa. Antes de partir hay un dato local que conviene tener claro: si tras un golpe hay deformidad, no puedes apoyar el pie o el dolor es intenso, primero necesitas evaluación médica. La urgencia que existe en Cerrillos es primaria, el SAR Enfermera Sofía Pincheira en Av. Las Torres y el SAPU Dr. Norman Voullieme en calle Salomón Sack, con horario que conviene confirmar; ahí pueden evaluarte y derivarte. La urgencia hospitalaria 24 horas queda fuera de la comuna y, ante una lesión grave, corresponde llamar al SAMU (131). Con el diagnóstico hecho, la sesión combina terapia manual, ejercicio progresivo y una pauta para los días sin kinesiólogo. La meta se define con tu rutina: si manejas o repartes por Camino a Melipilla y Américo Vespucio, se trabaja la espalda para las horas al volante y para subir y bajar de la cabina; y si sales a caminar, el terreno parejo deja medir el avance en cuadras en vez de en minutos.",
                "faqsLocales": [
                    {
                        "q": "Me torcí el tobillo y no sé si ir a urgencia o esperar. ¿Qué hay en Cerrillos?",
                        "a": "Si no puedes apoyar el pie, hay deformidad o el dolor es intenso, parte por una evaluación médica: dentro de la comuna está la urgencia primaria del SAR Enfermera Sofía Pincheira y del SAPU Dr. Norman Voullieme, con horario que conviene confirmar, y ahí pueden derivarte si hace falta. Ante una lesión grave, llama al SAMU (131). Con el diagnóstico en mano se agenda la evaluación inicial gratuita en tu casa."
                    },
                    {
                        "q": "Hago turnos en el sector logístico y llego tarde. ¿Atienden fuera del horario de oficina?",
                        "a": "Atendemos de lunes a domingo y la hora se acuerda contigo; la sesión dura cerca de 60 minutos. Como el tránsito de camiones por Camino a Melipilla y Américo Vespucio altera los tiempos de traslado, el horario se fija con anticipación. Si el dolor baja por la pierna con adormecimiento o pérdida de fuerza, consulta antes con un médico."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica a Domicilio en Cerrillos",
                "seoDescription": "Kinesiólogo traumatológico a domicilio en Cerrillos para esguinces, lumbago y hombro doloroso, con evaluación inicial gratuita.",
                "keywords": [
                    "kinesiólogo traumatológico Cerrillos",
                    "kinesiología traumatológica a domicilio Cerrillos",
                    "tratamiento de esguince Cerrillos",
                    "kinesiólogo lumbago Cerrillos",
                    "rehabilitación de fractura Cerrillos",
                    "kinesiólogo a domicilio Cerrillos"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Cerrillos | KINEUM",
            "description": "Kinesiólogo a domicilio en Cerrillos, de Lo Errázuriz a Ciudad Parque Bicentenario: subimos el equipo aunque no haya ascensor. Evaluación gratuita.",
            "keywords": [
                "kinesiólogo a domicilio Cerrillos",
                "kinesiología a domicilio Cerrillos",
                "kinesiólogo Cerrillos",
                "kine a domicilio Cerrillos",
                "rehabilitación a domicilio Cerrillos",
                "kinesiólogo Ciudad Parque Bicentenario",
                "kinesiólogo particular Cerrillos"
            ]
        }
    },
    "quinta-normal": {
        "centrosSalud": [
            {
                "nombre": "CESFAM Lo Franco",
                "tipo": "CESFAM",
                "nota": "Atención primaria dentro de la comuna; no es servicio de urgencia"
            },
            {
                "nombre": "CESFAM Garín",
                "tipo": "CESFAM",
                "nota": "Atención primaria dentro de la comuna; no es servicio de urgencia"
            },
            {
                "nombre": "CESFAM Andes",
                "tipo": "CESFAM",
                "nota": "Atención primaria dentro de la comuna; no es servicio de urgencia"
            },
            {
                "nombre": "SAPU Lo Franco (Carrascal 4459, junto al CESFAM Lo Franco)",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria en la comuna; no pudimos confirmar su horario, consúltalo antes de ir"
            },
            {
                "nombre": "SAPU Garín (Janequeo 5662)",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria en la comuna; no pudimos confirmar su horario, consúltalo antes de ir"
            },
            {
                "nombre": "CECOSF Plaza México",
                "tipo": "otro",
                "nota": "Centro comunitario de salud familiar; atención primaria, sin urgencia"
            },
            {
                "nombre": "Hospital San Juan de Dios (Av. Portales 3239)",
                "tipo": "hospital público",
                "nota": "Urgencia 24 h de adultos. Está en Santiago, cruzando el límite oriente de Quinta Normal"
            },
            {
                "nombre": "Hospital Clínico Félix Bulnes (Av. Mapocho 7432)",
                "tipo": "hospital público",
                "nota": "Urgencia 24 h adulto y pediátrica. Está en Cerro Navia, varios kilómetros al poniente siguiendo el eje Mapocho"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Quinta Normal: casas que dan a la vereda y urgencias fuera de la comuna",
            "parrafos": [
                "Quinta Normal se recorre por calles de trazado antiguo y angosto, con autos estacionados a ambos lados y viviendas de uno y dos pisos que abren directo a la vereda, sin antejardín. El kinesiólogo deja el auto donde alcanza, a veces media cuadra más allá, y entra a pie con la camilla; adentro, armarla suele pedir correr un mueble del living o del pasillo. Si vives cerca del eje Mapocho-Radal, donde avanzan las obras de la futura Línea 7, acordamos la llegada con margen por las calles intervenidas y los desvíos de buses.",
                "La comuna tiene atención primaria en los CESFAM Lo Franco, Garín y Andes, y dos servicios de urgencia primaria: el SAPU Lo Franco, en Carrascal 4459, y el SAPU Garín, en Janequeo 5662; no pudimos confirmar sus horarios, así que revísalos antes de salir. La urgencia 24 horas de adultos más próxima queda cruzando el límite oriente, en el Hospital San Juan de Dios (Av. Portales 3239). La urgencia 24 horas adulta y pediátrica que verificamos, el Hospital Félix Bulnes (Av. Mapocho 7432), está más lejos, en Cerro Navia. Ante una emergencia, llama al SAMU 131.",
                "Como esos hospitales quedan fuera de Quinta Normal, la continuidad tras un alta se resuelve mejor en tu casa y te ahorra dos o tres traslados por semana. Lleva tu epicrisis y las indicaciones de tu médico a la evaluación inicial gratuita. KINEUM es particular, sin convenio con hospitales ni isapres, y entrega boleta de honorarios electrónica para pedir reembolso según tu plan."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En Quinta Normal la puerta de calle suele abrir directo a la vereda: no hay antejardín que sirva de transición, así que una persona mayor pasa del pasillo de su casa al flujo de la calle en un paso, muchas veces con un peldaño de por medio y una reja que abre hacia afuera. Esa salida es el primer punto que miramos, junto con el tramo hasta el auto, que en estas cuadras casi siempre queda estacionado a media cuadra porque no hay dónde dejarlo más cerca. Con eso a la vista entrenamos lo que ese recorrido exige: potencia para incorporarse, estabilidad al girar en poco espacio y confianza para pisar veredas angostas de trazado antiguo, con losetas levantadas y raíces, que aquí complican más que cualquier pendiente. Si la condición acompaña, la meta puede ser volver a comprar sola en el Tropezón o llegar caminando hasta la Gruta de Lourdes. Cuando aparece un deterioro brusco o una caída con golpe en la cabeza, la evaluación médica va antes que cualquier ejercicio.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en el Tropezón y la puerta de la casa da justo a la vereda. ¿Se puede entrenar esa salida?",
                        "a": "Se puede, siempre que la evaluación diga que es seguro para ella. La sesión incluye el peldaño y la reja reales: abrirla hacia afuera sin perder el equilibrio, pisar la vereda, girar y devolverse. También vemos si falta un punto firme donde afirmarse y elegimos la hora en que la calle tiene menos movimiento."
                    },
                    {
                        "q": "No tenemos dónde estacionar frente a la casa, la calle está llena de autos a ambos lados. ¿Es un problema para la visita?",
                        "a": "No. El kinesiólogo deja el auto donde alcance, aunque sea a media cuadra, y entra caminando con la camilla y el equipo, que son portátiles. Lo que sí ayuda es dejar despejado un pasillo o un rincón del living: en estas casas antiguas lo escaso es el espacio libre adentro, no el acceso."
                    }
                ],
                "seoTitle": "Kinesiología Geriátrica a Domicilio en Quinta Normal",
                "seoDescription": "Kinesiólogo para adulto mayor a domicilio en Quinta Normal: salida a la vereda, equilibrio y prevención de caídas. Evaluación gratuita.",
                "keywords": [
                    "kinesiólogo adulto mayor Quinta Normal",
                    "kinesiología geriátrica a domicilio Quinta Normal",
                    "rehabilitación adulto mayor Quinta Normal",
                    "prevención de caídas Quinta Normal",
                    "kinesiólogo tercera edad Tropezón",
                    "kine domicilio adulto mayor Lo Franco"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Si te operaron de cadera, rodilla u hombro, es probable que hayas vuelto a Quinta Normal desde un hospital que queda fuera de la comuna: el Félix Bulnes, en Cerro Navia por el eje Mapocho, o el San Juan de Dios, en el borde oriente por Av. Portales. Los dos recintos con urgencia 24 horas están afuera, así que cada control implica salir. Las sesiones en tu casa sacan esos viajes de la ecuación justo cuando moverse cuesta más. En la evaluación inicial gratuita revisamos tu epicrisis y el límite de carga que fijó tu cirujano, y ensayamos lo que tu casa te va a exigir: el peldaño que da a la vereda, el pasillo angosto donde no caben dos personas y el tramo hasta el auto, que en estas calles rara vez queda frente a la puerta. KINEUM es particular y no tiene convenio con esos hospitales. Fiebre, herida enrojecida o con secreción, o dolor e hinchazón en la pantorrilla exigen consulta médica; ante falta de aire repentina o dolor en el pecho, llama al SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "Me operaron en el Hospital Félix Bulnes y vivo en Quinta Normal. ¿Cuándo puede ser la primera sesión en mi casa?",
                        "a": "Depende de lo que haya indicado tu cirujano. Con la epicrisis y las indicaciones de alta a la vista coordinamos la evaluación inicial gratuita, que es de lunes a domingo. KINEUM no tiene convenio con ese hospital: esa información nos la compartes tú directamente."
                    },
                    {
                        "q": "Mi dormitorio está en el segundo piso y la escalera de la casa es angosta y sin baranda continua. ¿Qué hago las primeras semanas?",
                        "a": "En muchos casos conviene instalar la cama abajo mientras dura la etapa más delicada, porque el primer piso de estas casas suele tener living o comedor donde cabe. Si igual hay que subir, practicamos el tramo contigo, con muletas o bastón y respetando el límite de carga del cirujano, y te indicamos dónde falta un punto de apoyo firme."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica a Domicilio Quinta Normal",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en Quinta Normal tras el alta: menos traslados fuera de la comuna. Evaluación inicial gratuita.",
                "keywords": [
                    "rehabilitación postquirúrgica Quinta Normal",
                    "kinesiólogo post operatorio Quinta Normal",
                    "kinesiología a domicilio después de operación Quinta Normal",
                    "rehabilitación prótesis de rodilla Quinta Normal",
                    "kinesiólogo a domicilio alta hospitalaria Quinta Normal",
                    "kine post operado Tropezón"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En Quinta Normal la pregunta que conviene dejar resuelta antes de la primera sesión es adónde ir de madrugada, porque la comuna tiene atención primaria pero ningún recinto con urgencia las 24 horas. Los SAPU Lo Franco (Carrascal 4459) y Garín (Janequeo 5662) son urgencia primaria y no pudimos confirmar su horario; habitualmente no funcionan toda la noche, así que consúltalo antes de salir. La urgencia 24 horas con atención pediátrica que sí verificamos es la del Hospital Félix Bulnes, en Av. Mapocho 7432, saliendo de la comuna hacia el poniente por el eje Mapocho: conviene tener pensado el trayecto, la dirección anotada y quién los lleva antes de necesitarlo. En la sesión trabajamos despeje de secreciones, ejercicios respiratorios y el uso del inhalador con aerocámara cuando el médico lo indicó, y en esa primera visita dejamos anotadas las señales que obligan a salir a urgencia sin esperar la sesión siguiente.",
                "faqsLocales": [
                    {
                        "q": "Es de madrugada y mi hijo respira con esfuerzo. ¿Lo llevo al SAPU Lo Franco?",
                        "a": "Si al desvestirlo ves que el pecho se le hunde bajo las costillas, si no alcanza a terminar una frase o una mamada, o si lo notas muy apagado, no te pongas a buscar horarios: llama al SAMU 131 o anda a una urgencia 24 h. La más cercana con atención pediátrica que verificamos es la del Hospital Félix Bulnes, en Cerro Navia. Los SAPU Lo Franco y Garín son urgencia primaria y no pudimos confirmar que atiendan toda la noche. La kinesiología no reemplaza esa atención."
                    },
                    {
                        "q": "Mi papá salió de alta con oxígeno en casa y vivimos cerca de Carrascal. ¿Pueden atenderlo ahí mismo?",
                        "a": "Sí, con la indicación de su médico, y sin mover el concentrador de lugar: basta un asiento firme donde quede cómodo y saber el flujo que le indicaron. Y deja resuelto el plan por si hay que salir: desde Carrascal o San Pablo, la urgencia 24 h de adultos más cercana es la del Hospital San Juan de Dios, cruzando a Av. Portales, y ante una emergencia se llama al SAMU 131."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio Quinta Normal",
                "seoDescription": "Kinesiología respiratoria a domicilio en Quinta Normal para niños y adultos, con las urgencias 24 h más cercanas claras.",
                "keywords": [
                    "kinesiología respiratoria a domicilio Quinta Normal",
                    "kinesiólogo respiratorio Quinta Normal",
                    "kinesiología respiratoria niños Quinta Normal",
                    "kine respiratoria domicilio Lo Franco",
                    "kinesiólogo bronquitis a domicilio Quinta Normal",
                    "urgencia pediátrica cerca de Quinta Normal"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Después de un ACV, el alta llega desde un hospital que no está en Quinta Normal, y la familia vuelve a una casa donde el espacio manda. La puerta de calle abre a la vereda sin ningún tramo de maniobra, así que entrar y salir en silla de ruedas se ensaya paso a paso: cómo se toma el peldaño, hacia dónde abre la reja y quién sostiene. Adentro, los pasillos de estas casas antiguas no permiten girar la silla en cualquier punto, por eso ordenamos un recorrido mínimo entre la cama, el baño y la puerta, y ese recorrido se entrena tal como está. Cuando hay patio, suele ser el único piso parejo y despejado de la vivienda, y ahí hacemos lo que necesita espacio. También preparamos a quien cuida para los traslados en pasillos estrechos, donde la espalda se resiente rápido, y para los viajes a controles que quedan fuera de la comuna. Si de un momento a otro se le cae un brazo, se le tuerce la boca o no le salen las palabras, marca 131.",
                "faqsLocales": [
                    {
                        "q": "A mi marido le dan el alta tras un ACV en el Hospital San Juan de Dios. ¿Cómo seguimos en Quinta Normal?",
                        "a": "La primera visita se hace en la casa y parte por el recorrido: por dónde entra la silla o el andador, si el peldaño de la vereda se puede tomar entre dos personas y en qué pieza va a dormir mientras no suba la escalera. Con eso definimos qué se entrena primero. Trae los informes que les entregaron al alta para no repetir lo que ya se trabajó allá."
                    },
                    {
                        "q": "La casa es antigua y los pasillos son angostos para la silla de ruedas. ¿Igual se puede rehabilitar acá?",
                        "a": "En la mayoría de los casos sí. Se despeja un solo recorrido, el que usa de verdad, y se practica ahí; si hay patio, se aprovecha como el espacio plano de la casa. Cuando conviene un ajuste, como correr un mueble, sacar una puerta de su marco o poner una baranda en el peldaño de entrada, te lo indicamos para que lo evalúen en familia."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica a Domicilio Quinta Normal",
                "seoDescription": "Rehabilitación neurológica a domicilio en Quinta Normal tras un ACV: traslados, silla de ruedas y apoyo a quien cuida en casa.",
                "keywords": [
                    "rehabilitación neurológica a domicilio Quinta Normal",
                    "kinesiólogo neurológico Quinta Normal",
                    "rehabilitación ACV a domicilio Quinta Normal",
                    "kinesiología Parkinson Quinta Normal",
                    "kinesiólogo a domicilio post ACV Quinta Normal",
                    "rehabilitación domiciliaria Garín"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "El Tropezón es el centro comercial de Quinta Normal, y alrededor de esas cuadras hay locales, talleres chicos y bodegas metidas entre las casas. Si atiendes de pie detrás de un mesón, si bajas mercadería en una calle angosta donde el camión queda en doble fila y hay que acarrear a pulso hasta la puerta, o si trabajas agachado en un taller, la molestia de espalda, el hombro que arde al levantar sobre la cabeza o el codo que se resiente rara vez vienen de un accidente único: vienen de repetir el mismo gesto. En la sesión, después de evaluar, reproducimos ese gesto con lo que hay en tu casa: la altura real desde la que tomas la caja, los metros que la llevas, cuántas veces al día y cómo alternas el peso cuando pasas horas parado. Sobre eso ajustamos carga y técnica. Si la lesión ocurrió trabajando, avisa primero a tu empleador para que te deriven por accidente laboral. Y si no logras cargar nada de peso o el dolor te despierta de noche, corresponde evaluación médica antes de seguir.",
                "faqsLocales": [
                    {
                        "q": "Me lesioné la espalda bajando mercadería en un local del Tropezón. ¿Me pueden atender ustedes?",
                        "a": "Si fue durante tu jornada, avísale primero a tu empleador: un accidente laboral se atiende por esa vía y no como consulta particular. Después, si igual quieres kinesiología particular a domicilio, la coordinamos una vez que tengas la evaluación médica y sepamos cuánto peso puedes mover."
                    },
                    {
                        "q": "Vivo por Radal y hay calles cortadas por las obras. ¿Alcanzan a llegar a la hora?",
                        "a": "Sí, pero acordamos la llegada con margen. En el eje Mapocho-Radal hay calles intervenidas y desvíos de buses por las obras de la futura Línea 7, así que al escribirnos cuéntanos por dónde se entra a tu cuadra y si ese día hay un tramo cerrado; con eso el kinesiólogo elige la ruta."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica a Domicilio Quinta Normal",
                "seoDescription": "Kinesiología traumatológica a domicilio en Quinta Normal: lumbago, hombro y vuelta al trabajo de pie o con carga. Sesiones de unos 60 minutos.",
                "keywords": [
                    "kinesiología traumatológica a domicilio Quinta Normal",
                    "kinesiólogo Quinta Normal esguince",
                    "kinesiólogo lumbago a domicilio Quinta Normal",
                    "rehabilitación de tobillo Quinta Normal",
                    "kine traumatológica Tropezón",
                    "kinesiólogo dolor de hombro Quinta Normal"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Quinta Normal | KINEUM",
            "description": "Kinesiología a domicilio en Quinta Normal: Tropezón, Lo Franco, Garín y Blanqueado. Evaluación inicial gratuita, lunes a domingo.",
            "keywords": [
                "kinesiólogo a domicilio Quinta Normal",
                "kinesiología a domicilio Quinta Normal",
                "kinesiólogo Quinta Normal",
                "rehabilitación a domicilio Quinta Normal",
                "kine a domicilio Quinta Normal",
                "kinesiólogo particular Quinta Normal",
                "kinesiología domiciliaria Tropezón"
            ]
        }
    },
    "estacion-central": {
        "centrosSalud": [
            {
                "nombre": "Clínica Bicentenario",
                "tipo": "clinica privada",
                "nota": "En Estación Central. Urgencia 24 h, adulto y pediátrica"
            },
            {
                "nombre": "SAPU San José de Chuchunco",
                "tipo": "servicio de urgencia primaria (SAPU)",
                "nota": "Funciona junto al CESFAM San José de Chuchunco. Urgencia primaria de menor complejidad; confirma el horario antes de ir"
            },
            {
                "nombre": "SAPU Padre Vicente Irarrázaval",
                "tipo": "servicio de urgencia primaria (SAPU)",
                "nota": "En el sector Los Nogales. Urgencia primaria de menor complejidad, no es una unidad pediátrica; confirma el horario antes de ir"
            },
            {
                "nombre": "CESFAM San José de Chuchunco",
                "tipo": "CESFAM",
                "nota": "Atención primaria en la comuna, no es servicio de urgencia"
            },
            {
                "nombre": "CESFAM Padre Vicente Irarrázaval (ex CESFAM Los Nogales)",
                "tipo": "CESFAM",
                "nota": "Atención primaria del sector Los Nogales; cambió de nombre, es el mismo centro de siempre"
            },
            {
                "nombre": "CESFAM Las Mercedes",
                "tipo": "CESFAM",
                "nota": "Atención primaria en la comuna, no es servicio de urgencia"
            },
            {
                "nombre": "Hospital San Juan de Dios",
                "tipo": "hospital publico",
                "nota": "Está en la comuna de Santiago, a pasos del límite norte de Estación Central. Urgencia 24 h de adultos"
            },
            {
                "nombre": "Hospital Clínico San Borja Arriarán",
                "tipo": "hospital publico",
                "nota": "Está en la comuna de Santiago; es el hospital de referencia de la red pública que cubre la comuna. Urgencia 24 h, adulto y pediátrica"
            }
        ],
        "hub": {
            "h2": "Blocks sin ascensor, pasarelas y torres del eje Alameda: cómo se atiende en casa",
            "parrafos": [
                "Estación Central es plana de punta a punta: lo que cambia de un punto a otro no es el terreno, es la vivienda. En las villas y poblaciones antiguas mandan los blocks de tres a cinco pisos sin ascensor; a los departamentos de Villa Portales se llega por pasarelas y pasillos exteriores; en sectores como Villa Francia o Los Nogales quedan casas de un piso con patio; y sobre el eje Alameda hay torres con departamentos pequeños y ascensores que comparten cientos de familias. El kinesiólogo llega con el equipamiento a cuestas y arma la sesión con el espacio que haya.",
                "Para la hora pesa más dónde estacionar que cuánto hay que manejar: junto a los terminales de buses, la Estación Alameda y el barrio Meiggs cuesta detenerse de día; hacia las villas interiores y San José de Chuchunco es más simple. El bloque horario se fija contigo antes, con agenda de lunes a domingo.",
                "Con el alta en la mano, desde el poniente de la comuna te ahorras el viaje de ida y vuelta por la Alameda para cada control. La primera visita no se cobra y sirve para leer tu epicrisis, ver cómo te mueves hoy y definir por dónde partir. KINEUM trabaja de forma particular y no está asociado a los centros que se nombran acá. Si algo se sale de lo esperado, la urgencia 24 h dentro de la comuna es la de la Clínica Bicentenario; el SAMU responde al 131."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "Si tu familiar vive en Villa Portales, el camino entre la puerta y la calle no es una escalera cerrada sino una pasarela y un pasillo exterior: un tramo largo, al aire libre, que exige más equilibrio que fuerza. Si vive en un block de las villas antiguas, lo que pesa son los peldaños y el pasamanos, cuando lo hay. El trabajo geriátrico en domicilio empieza por medir ese recorrido concreto, cuántos metros, cuántos escalones y dónde se apoya, y desde ahí se entrenan las piernas, el equilibrio y la forma de apoyarse en ese mismo trayecto. Dentro de la casa se revisan los riesgos de siempre, que en departamentos chicos suelen concentrarse en el paso al baño y en los muebles que estrechan el pasillo. La ventaja local es que acá no hay subidas: una vez en la vereda, aumentar la distancia caminada depende de la persona y no del terreno. Si hubo una caída y quedó con un golpe en la cabeza, desorientada o con dolor fuerte, eso lo ve primero un médico.",
                "faqsLocales": [
                    {
                        "q": "Vivimos en Villa Portales y la dirección es por block, no por calle, ¿cómo llegan?",
                        "a": "Con el número del block y una referencia de la pasarela o del acceso por donde se entra basta; indícalo al escribir al WhatsApp +56 9 9967 9593 y el kinesiólogo llega directo a la puerta. Ese mismo recorrido después sirve de entrenamiento, porque es el que tu familiar usa de verdad."
                    },
                    {
                        "q": "Mi mamá ya casi no sale del departamento, ¿igual sirve empezar?",
                        "a": "Suele ser justamente el punto de partida. Se trabaja primero pararse y moverse dentro de la casa, después el pasillo y recién al final la escalera o la pasarela. Las metas se fijan según cómo responda, sin prometer plazos."
                    }
                ],
                "seoTitle": "Kinesiología Geriátrica a Domicilio en Estación Central",
                "seoDescription": "Kinesiología geriátrica a domicilio en Estación Central: equilibrio, fuerza y el trayecto real desde el block o la pasarela. Evaluación gratuita.",
                "keywords": [
                    "kinesiología geriátrica a domicilio Estación Central",
                    "kinesiólogo adulto mayor Estación Central",
                    "prevención de caídas adulto mayor Estación Central",
                    "rehabilitación adulto mayor a domicilio Estación Central",
                    "kinesiólogo a domicilio Villa Portales",
                    "kinesiólogo a domicilio Los Nogales"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Después de una cirugía de rodilla, cadera, hombro o columna, las primeras semanas lo que más pesa es el traslado: tomar micro en la Alameda o cruzar el nudo de los terminales de buses para llegar a una sesión, con muletas y con dolor, termina cansando más que el ejercicio mismo. Atenderte en casa borra ese viaje. Si te operaron en la Clínica Bicentenario, dentro de la comuna, o en el Hospital San Juan de Dios o el San Borja Arriarán, ubicados en la comuna de Santiago, lo útil para la primera visita son los papeles del alta: hace falta saber qué se operó, qué autorizó el cirujano y cuánto peso puedes cargar. La progresión se arma dentro de ese margen y no fuera de él. Nombrar esos centros acá es solo para ubicarte: KINEUM es particular y no está ligado a ninguno. Si aparece fiebre, o la herida se pone roja o supura, consulta pronto con tu médico; si se te hincha y duele una pantorrilla, o de repente te falta el aire o te aprieta el pecho, eso es marcar 131.",
                "faqsLocales": [
                    {
                        "q": "Vivo en una torre del eje Alameda y el ascensor a veces queda en pana, ¿alcanzan a subir igual?",
                        "a": "Sí, el kinesiólogo sube por la escalera con el equipo. Avísanos si el ascensor está fuera de servicio para llegar con tiempo. Y si estás recién operado, esa escalera no la bajas tú: la sesión se hace arriba."
                    },
                    {
                        "q": "¿Tengo que conseguir una camilla o preparar algo especial?",
                        "a": "No tienes que aportar nada. El kinesiólogo llega con lo suyo y monta la camilla si el departamento lo permite; cuando no cabe, se trabaja igual sobre una cama firme o una silla, despejando un par de metros al empezar."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica en Casa, Estación Central",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en Estación Central: parte en casa tras el alta, sin cruzar la Alameda para cada control de rehabilitación.",
                "keywords": [
                    "rehabilitación postquirúrgica a domicilio Estación Central",
                    "kinesiología post operatoria Estación Central",
                    "kinesiólogo post operado a domicilio Estación Central",
                    "rehabilitación prótesis de rodilla Estación Central",
                    "kinesiología después de una operación Estación Central",
                    "kinesiólogo a domicilio Clínica Bicentenario alta"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En una torre del eje Alameda, sacar a un niño con una crisis obstructiva o a un adulto que se ahoga depende de un ascensor que comparten cientos de vecinos y que a veces hay que esperar. Que el kinesiólogo suba, en cambio, no depende de nadie. La sesión respiratoria en casa aborda el manejo de secreciones y el patrón ventilatorio con lo que haya indicado el médico, y aprovecha algo que un box no tiene: se mira la pieza donde la persona duerme, cómo se ventila y cuánta humedad hay, que en departamentos chicos y cerrados marcan diferencia. Hay señales que no admiten esperar la hora agendada: labios o uñas azulados, decaimiento que no cede, rechazo del alimento, costillas que se hunden con cada respiración o un ritmo respiratorio mucho más rápido de lo habitual. Frente a cualquiera de ellas, marca 131 o busca una urgencia 24 h. Ten anotada la dirección con torre, block o pasaje: es lo que la ambulancia necesita para no perder minutos en la entrada.",
                "faqsLocales": [
                    {
                        "q": "¿Dónde hay urgencia 24 h para niños sin salir de Estación Central?",
                        "a": "Dentro de la comuna, la urgencia 24 h de adultos y niños es la de la Clínica Bicentenario. En la red pública, el hospital de referencia que cubre la comuna es el San Borja Arriarán, en la comuna de Santiago. Los SAPU ven consultas de menor complejidad, no son unidades pediátricas y no funcionan a toda hora: confirma antes de salir. Si la situación es grave, marca 131."
                    },
                    {
                        "q": "Mi hijo se enferma todos los inviernos, ¿conviene dejar horas fijas por adelantado?",
                        "a": "Se coordina según lo que indique su médico. Lo habitual es concentrar las sesiones en los días del cuadro y no bloquear horas todo el invierno. La evaluación inicial gratuita sirve para ver su caso y enseñarles qué hacer entre visitas."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio en Estación Central",
                "seoDescription": "Kinesiología respiratoria a domicilio en Estación Central para niños y adultos, con indicación médica. Señales de alarma y dónde acudir de urgencia.",
                "keywords": [
                    "kinesiología respiratoria a domicilio Estación Central",
                    "kinesiólogo respiratorio niños Estación Central",
                    "KTR a domicilio Estación Central",
                    "kinesiología respiratoria infantil Estación Central",
                    "urgencia pediátrica Estación Central",
                    "kinesiólogo respiratorio adulto Estación Central"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "En las casas de un piso con patio que quedan en sectores como Villa Francia o Los Nogales, rehabilitarse tras un ACV o con Parkinson tiene una ventaja y una trampa. La ventaja: no hay escalera que separe a la persona de la calle, y el patio sirve de terreno de entrenamiento a pocos pasos de la cama. La trampa: el pasillo angosto, el umbral del baño y el desnivel hacia el patio son justo donde se pierde el equilibrio. El trabajo domiciliario ordena ese recorrido: pasar de la cama al asiento, girar en espacios estrechos, cruzar umbrales y sostener la marcha hasta afuera, con las indicaciones del neurólogo como marco. Otra parte de la hora es para quien cuida: cómo tomar a la persona, cómo frenar una pérdida de equilibrio y qué dos o tres ejercicios repetir los días sin visita. La recuperación no sigue un calendario fijo. Y si de un momento a otro se debilita un brazo, se tuerce la boca o cuesta hablar, eso es una emergencia: marca 131 de inmediato.",
                "faqsLocales": [
                    {
                        "q": "Mi papá anda en silla de ruedas y la casa tiene un desnivel hacia el patio, ¿se puede hacer algo sin meterse en obras?",
                        "a": "En general sí. Se define por dónde entra y sale, se practica esa maniobra con quien lo asiste y, si hace falta, se sugiere una rampa simple o un pasamanos. Son ajustes chicos, pensados para la casa que ya tienen."
                    },
                    {
                        "q": "¿Atienden en San José de Chuchunco, en el extremo poniente de la comuna?",
                        "a": "Sí, la cobertura llega a toda la comuna, ese sector incluido. Al coordinar por WhatsApp conviene dejar una referencia del pasaje, y se acuerda un bloque horario en el que el kinesiólogo pueda llegar sin apuro."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica a Domicilio en Estación Central",
                "seoDescription": "Rehabilitación neurológica a domicilio en Estación Central tras un ACV: transferencias, marcha dentro de la casa y apoyo a quien cuida a diario.",
                "keywords": [
                    "rehabilitación neurológica a domicilio Estación Central",
                    "kinesiología neurológica Estación Central",
                    "rehabilitación ACV a domicilio Estación Central",
                    "kinesiólogo Parkinson Estación Central",
                    "kinesiología a domicilio hemiplejia Estación Central",
                    "rehabilitación después del alta hospitalaria Estación Central"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Un esguince de tobillo, un lumbago que no cede, un hombro que duele al levantar el brazo o lo que quedó de una fractura ya tratada por el traumatólogo se rehabilitan igual de bien en tu casa. Según el caso, acá dos metas frecuentes son hacer la escalera del block completa, de ida y de vuelta, sin ir agarrado de la pared, y volver a caminar hasta el paradero o hasta la estación de Línea 1 que te quede más cerca, sea Las Rejas, Ecuador, San Alberto Hurtado o Universidad de Santiago: metas medibles. Si tu trabajo te exige cargar peso o pasar el turno completo de pie, dilo en la evaluación, porque ese gesto se entrena de a poco en vez de mandarte a reposo. Se combina terapia manual con ejercicio progresivo, usando bandas, tu propio peso o un peldaño. Y si tras un golpe el pie no soporta peso, el hueso se ve fuera de lugar o el dolor es insoportable, antes que cualquier ejercicio va una radiografía en un servicio de urgencia; dentro de la comuna, la urgencia 24 h es la de la Clínica Bicentenario.",
                "faqsLocales": [
                    {
                        "q": "Me torcí el tobillo en la escalera del block, ¿parto por el kinesiólogo?",
                        "a": "Si no puedes apoyar el pie, se ve deformado o está muy hinchado, primero una urgencia donde puedan tomar radiografía y descartar una fractura. Con ese diagnóstico en la mano, o si fue algo leve, la primera visita sin costo define el plan."
                    },
                    {
                        "q": "¿Cómo sé que voy mejorando entre una sesión y otra?",
                        "a": "Sirve fijar un tramo conocido, por ejemplo de tu casa al paradero o a la estación de Metro más cercana, y ver si lo haces con menos dolor y sin cojear. Ese tramo se usa de control y la distancia sube según cómo responda la lesión, sin fechas garantizadas."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica a Domicilio en Estación Central",
                "seoDescription": "Kinesiología traumatológica a domicilio en Estación Central: esguinces, lumbago y hombro, en sesiones de unos 60 minutos, de lunes a domingo.",
                "keywords": [
                    "kinesiología traumatológica a domicilio Estación Central",
                    "kinesiólogo esguince de tobillo Estación Central",
                    "kinesiología lumbago Estación Central",
                    "kinesiólogo hombro a domicilio Estación Central",
                    "rehabilitación de fractura a domicilio Estación Central",
                    "kinesiólogo a domicilio Las Rejas"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Estación Central | KINEUM",
            "description": "Kinesiólogo a domicilio en Estación Central: Villa Francia, Villa Portales, Los Nogales, Las Rejas y el eje Alameda. Evaluación inicial gratuita.",
            "keywords": [
                "kinesiólogo a domicilio Estación Central",
                "kinesiología a domicilio Estación Central",
                "kinesiólogo Estación Central",
                "kinesiología adulto mayor Estación Central",
                "rehabilitación a domicilio Estación Central",
                "kinesiólogo a domicilio Las Rejas",
                "kinesiólogo particular Estación Central"
            ]
        }
    },
    "san-miguel": {
        "centrosSalud": [
            {
                "nombre": "Hospital Barros Luco Trudeau",
                "tipo": "Hospital público",
                "nota": "Dentro de la comuna. Urgencia de adultos 24 h"
            },
            {
                "nombre": "Hospital Dr. Exequiel González Cortés",
                "tipo": "Hospital público pediátrico",
                "nota": "Dentro de la comuna. Urgencia pediátrica 24 h"
            },
            {
                "nombre": "SAR Comunal de San Miguel (Llico 567)",
                "tipo": "Servicio de urgencia primaria (SAR)",
                "nota": "Urgencia primaria comunal; no funciona las 24 horas, conviene confirmar su horario antes de ir"
            },
            {
                "nombre": "CESFAM Recreo (Varas Mena 785)",
                "tipo": "CESFAM",
                "nota": "Atención primaria de salud; no es servicio de urgencia"
            },
            {
                "nombre": "CESFAM Barros Luco (Ángel Guarello 1319)",
                "tipo": "CESFAM",
                "nota": "Atención primaria en el sector Lo Vial; no es servicio de urgencia"
            },
            {
                "nombre": "IntegraMédica San Miguel (El Llano Subercaseaux 3965)",
                "tipo": "Centro médico privado",
                "nota": "Consultas médicas y dentales particulares; no tiene urgencia 24 h"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en San Miguel: el alta queda a pocas cuadras",
            "parrafos": [
                "San Miguel cabe en unos diez kilómetros cuadrados y no tiene cerros, así que llegar con camilla y equipamiento no depende de subir pendientes. Lo que sí cambia la sesión es la vivienda: en las torres nuevas de Gran Avenida y El Llano Subercaseaux hay ascensor y conserjería, y conviene avisar en portería; en las casas antiguas del Barrio Atacama y las poblaciones históricas, con patio y calles angostas, se estaciona en la calle y el trabajo se arma en el living o el patio.",
                "Dentro de la comuna están el Hospital Barros Luco Trudeau, con urgencia de adultos las 24 horas, y el Hospital Dr. Exequiel González Cortés, pediátrico y también abierto todo el día. Ante una urgencia, como falta de aire, dolor en el pecho o pérdida súbita de fuerza, llama al SAMU al 131 o acude a una de esas urgencias: la kinesiología no reemplaza esa atención ni la evaluación de tu médico.",
                "Que esos hospitales queden a pocas cuadras explica algo frecuente aquí: muchas familias reciben el alta cerca de casa y quieren seguir la rehabilitación sin volver a moverse. Para la evaluación inicial gratuita basta tener a mano la epicrisis y las indicaciones médicas, porque el plan se arma a partir de ellas. KINEUM no forma parte de la red pública ni tiene acuerdo con esos hospitales: la atención se contrata de manera particular y directa contigo."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "El escalón que da a la vereda, el desnivel hacia el patio y una baldosa suelta en el pasillo son los lugares donde más se cae una persona mayor en las casas antiguas de El Llano, Los Molineros y las poblaciones históricas de San Miguel. La sesión parte ahí: se mide cómo camina, cómo se levanta de la silla y cómo toma los apoyos, y se entrena fuerza de piernas y equilibrio en ese recorrido real, no en un pasillo cualquiera. Después viene la calle. La comuna es plana y compacta, así que las primeras salidas cortas suelen llegar pronto, pero Gran Avenida es ancha y de tránsito rápido: cruzarla con bastón dentro del tiempo del semáforo se practica aparte y al comienzo acompañado, igual que llegar caminando hasta Lo Vial o Ciudad del Niño si todavía usa el Metro. Si hubo una caída con golpe en la cabeza, confusión o dolor intenso, la evaluación médica va primero.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en un departamento de Gran Avenida y desde una caída no quiere salir sola. ¿Se puede trabajar eso?",
                        "a": "Habitualmente sí, y el recorrido que se entrena es el suyo: del sillón a la puerta, el pasillo del piso, el hall y la vereda. Se avanza por tramos y se avisa en conserjería para poder usar el hall en la sesión. También se revisa si se marea al ponerse de pie, porque eso cambia el plan y a veces hay que comentarlo con su médico."
                    },
                    {
                        "q": "Mi papá va caminando a sus horas al CESFAM Barros Luco, pero llega agotado. ¿Se puede entrenar ese trayecto?",
                        "a": "Sí, y sirve como objetivo concreto. Se mide cuántas cuadras aguanta y a qué velocidad, se trabaja fuerza de piernas y se planifican pausas en el camino, con bastón si la evaluación lo aconseja. Mientras tanto, para los días de control conviene que vaya acompañado en vez de forzar el trayecto completo."
                    }
                ],
                "seoTitle": "Kinesiología Geriátrica a Domicilio en San Miguel",
                "seoDescription": "Kinesiólogo geriátrico a domicilio en San Miguel: equilibrio, marcha y prevención de caídas en casa. Evaluación inicial gratuita, lunes a domingo.",
                "keywords": [
                    "kinesiología geriátrica San Miguel",
                    "kinesiólogo adulto mayor a domicilio San Miguel",
                    "prevención de caídas adulto mayor San Miguel",
                    "rehabilitación adulto mayor a domicilio San Miguel",
                    "kinesiólogo geriátrico Gran Avenida",
                    "kine para adulto mayor en casa San Miguel"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Muchas operaciones de vecinos de San Miguel terminan con el alta del Hospital Barros Luco Trudeau, que está dentro de la comuna. Tener el control a pocas cuadras ayuda, pero no resuelve el día a día: las primeras semanas después de una cirugía de cadera, rodilla u hombro lo difícil es levantarse, entrar al baño y moverse en casa con las restricciones de carga que dejó el cirujano. Eso es lo que se trabaja en la sesión domiciliaria, a partir de tu epicrisis y de la pauta médica: rango de movimiento, fuerza, traslados y marcha con bastón, andador o muletas. La vivienda define el orden del plan. En una torre con ascensor, el primer objetivo suele ser llegar al hall y a la calle; en una casa de dos pisos con escalera angosta, conviene resolver dónde va a dormir mientras la escalera no sea segura. Esta es una atención particular que contratas tú: no hay vínculo con ese hospital ni con ningún otro centro. Fiebre, herida con secreción o dolor que aumenta de golpe requieren consulta médica pronta; ante falta de aire repentina o dolor en el pecho, SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "Me operaron y me dieron el alta en el Barros Luco. ¿Necesito una orden del hospital para que vayan a mi casa?",
                        "a": "No. La atención se contrata directamente contigo y no pasa por el hospital. Lo que sí conviene tener a mano es la epicrisis y las indicaciones del cirujano, porque el plan respeta las restricciones de carga y los rangos de movimiento que él autorizó."
                    },
                    {
                        "q": "Mi control postoperatorio es en el Barros Luco, a pocas cuadras. ¿Puedo ir caminando con el andador?",
                        "a": "Depende de la carga que te autorizaron y de cómo estés esa semana. Cuando el objetivo es realista, el trayecto se prepara por tramos dentro de la sesión, para saber cuántas cuadras aguantas y dónde hacer pausa. Si todavía no da, mejor ir en auto o acompañado: llegar exigido al control no aporta nada, y la Línea 2 del Metro tiene escaleras que conviene dejar para después."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica en Casa San Miguel",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en San Miguel tras el alta: rango, fuerza y marcha en casa. Evaluación inicial gratuita.",
                "keywords": [
                    "rehabilitación postquirúrgica San Miguel",
                    "kinesiología post operatoria a domicilio San Miguel",
                    "kinesiólogo después de operación San Miguel",
                    "rehabilitación prótesis de cadera a domicilio San Miguel",
                    "kinesiólogo post alta a domicilio San Miguel",
                    "kine postoperatorio en casa San Miguel"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "En San Miguel, el Hospital Dr. Exequiel González Cortés queda dentro de la comuna y su urgencia pediátrica funciona las 24 horas; para adultos, la urgencia del Hospital Barros Luco Trudeau también atiende todo el día. Eso cambia la conversación de la primera visita: en vez de recitar una lista de señales, se acuerda un umbral claro. Si al niño se le marcan las costillas al respirar o deja de tomar leche, se parte al Exequiel González Cortés, que está a pocas cuadras, y no se espera la sesión; si un adulto queda sin aire estando sentado y quieto, el Barros Luco atiende a cualquier hora. Ante una emergencia, SAMU 131. El SAR comunal de calle Llico 567 también recibe urgencia primaria, pero no es un servicio de 24 horas y conviene confirmar su horario antes de salir. Con eso resuelto, la sesión en casa se dedica a lo suyo: técnicas para despejar secreciones, patrón respiratorio y tolerancia al esfuerzo, siempre con la indicación médica que traes, y a que la familia aprenda a mirar la respiración entre una visita y otra.",
                "faqsLocales": [
                    {
                        "q": "A mi hijo le dieron el alta en el Exequiel González Cortés después de una neumonía. ¿Se puede seguir la kinesiología en casa?",
                        "a": "Sí, con la indicación de su pediatra. Se parte de la epicrisis y de lo que quedó indicado al alta, y las sesiones se hacen en la casa para no exponerlo a traslados mientras se recupera. Si vuelve a costarle respirar o se pone decaído, la urgencia pediátrica está a pocas cuadras y va antes que cualquier sesión."
                    },
                    {
                        "q": "Mi papá usa oxígeno en casa, en un departamento de Gran Avenida. ¿Pueden atenderlo ahí?",
                        "a": "Sí. Las sesiones se hacen en el departamento, con el oxígeno y los flujos que indicó su médico; el kinesiólogo no los modifica. Si el edificio tiene conserjería, avisa en portería para que la llegada sea directa. Ante falta de aire en reposo o confusión, urgencia o SAMU 131."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio en San Miguel",
                "seoDescription": "Kinesiología respiratoria a domicilio en San Miguel para niños y adultos. Despeje de secreciones y señales de alarma. Lunes a domingo.",
                "keywords": [
                    "kinesiología respiratoria San Miguel",
                    "kinesiólogo respiratorio a domicilio San Miguel",
                    "kinesiología respiratoria infantil San Miguel",
                    "kine respiratoria niños a domicilio San Miguel",
                    "kinesiología respiratoria post alta San Miguel",
                    "kinesiólogo respiratorio adulto mayor San Miguel"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Después de un ACV, muchas familias de San Miguel vuelven a casa desde el Hospital Barros Luco Trudeau, que queda en la misma comuna. La cercanía ayuda para los controles, pero la rehabilitación ocurre en la casa y casi siempre con la familia sosteniendo el día. Ahí apunta la sesión domiciliaria: continuar, a partir de la epicrisis y de las indicaciones del neurólogo, el control de tronco, los traslados, el equilibrio y la marcha, y enseñar a quien cuida a asistir sin lesionarse la espalda. También se aplica en enfermedades progresivas como el Parkinson. Esto es atención particular contratada por la familia; no existe ningún acuerdo con el hospital que dio el alta. La comuna agrega detalles concretos: en los barrios antiguos las calles son angostas y se estaciona en la calle, así que conviene planificar por dónde se sale con la silla de ruedas hasta el paradero o la estación de Metro. Los avances varían según cada persona y no hay plazos garantizados. Si aparece pérdida súbita de fuerza, dificultad para hablar o la cara desviada, llama de inmediato al SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "A mi esposo le dieron el alta tras un ACV y sigue con controles en el Barros Luco. ¿Cómo se coordinan las sesiones con esos controles?",
                        "a": "Se evita programarlas el mismo bloque horario, para que no llegue cansado al control ni al revés. Cuando vuelve con indicaciones nuevas del neurólogo, esas indicaciones se incorporan al plan en la sesión siguiente, y si cambian las restricciones se ajustan los ejercicios antes de continuar."
                    },
                    {
                        "q": "Mi mamá usa silla de ruedas y vivimos en una casa antigua con un escalón a la calle. ¿Se puede salir a sus controles?",
                        "a": "Habitualmente sí, con técnica. Se practica pasar el escalón inclinando la silla sobre las ruedas traseras y cómo tomarla sin cargar la espalda, y se define quién acompaña. Si el escalón es alto o la puerta es estrecha, evaluar una rampa portátil suele ser la solución más simple."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica a Domicilio San Miguel",
                "seoDescription": "Rehabilitación neurológica a domicilio en San Miguel tras un ACV: traslados, equilibrio y apoyo al cuidador. Evaluación inicial gratuita.",
                "keywords": [
                    "rehabilitación neurológica San Miguel",
                    "kinesiología neurológica a domicilio San Miguel",
                    "kinesiólogo para ACV a domicilio San Miguel",
                    "rehabilitación después de un ACV San Miguel",
                    "kinesiología Parkinson a domicilio San Miguel",
                    "terapia neurológica en casa San Miguel"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Un esguince, un lumbago, un hombro doloroso o la vuelta a moverse tras una fractura ya consolidada se pueden tratar en casa con kinesiología traumatológica. En San Miguel hay un objetivo funcional que se repite y que conviene entrenar en serio: volver a usar el Metro. La Línea 2 cruza la comuna con estaciones como El Llano, San Miguel, Lo Vial, Departamental y Ciudad del Niño, y para muchos vecinos recuperarse significa poder bajar la escalera de la estación con la mano en el pasamanos, pasar el torniquete con un brazo en cabestrillo, mantenerse de pie en el vagón cuando frena y después subir a un piso sin ascensor. Eso se practica por etapas: primero simulado en casa, con un peldaño y una silla firme, y luego en el trayecto real. La terapia manual y el ejercicio se hacen con lo que hay a mano, bandas elásticas, el peso del cuerpo y el patio si existe. Ante un golpe fuerte con deformidad, imposibilidad de apoyar el pie o dolor que no cede, primero hay que descartar una fractura con radiografía en una urgencia.",
                "faqsLocales": [
                    {
                        "q": "Vuelvo al trabajo con el brazo en cabestrillo y tomo el Metro en Departamental. ¿Cuándo puedo volver a viajar de pie?",
                        "a": "No hay una fecha fija: depende de tu lesión y de cómo respondas. Antes de intentarlo se entrena en casa el equilibrio de pie con frenadas simuladas y el agarre con el brazo sano, porque sujetarse con el lado lesionado es lo que suele hacer recaer. Mientras tanto, conviene viajar fuera de la hora peak y sentarse si puedes."
                    },
                    {
                        "q": "Me torcí el tobillo bajando la escalera del Metro. ¿Llamo primero al kinesiólogo?",
                        "a": "No si no puedes apoyar el pie, el tobillo se deformó o hay mucha hinchazón: eso se evalúa primero en una urgencia con radiografía, y la urgencia de adultos del Hospital Barros Luco está en la misma comuna. Si ya te vio un médico o la lesión es leve, la evaluación inicial gratuita define el plan y las cargas."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica a Domicilio San Miguel",
                "seoDescription": "Kinesiología traumatológica a domicilio en San Miguel: esguinces, lumbago y hombro doloroso. Evaluación inicial gratuita, lunes a domingo.",
                "keywords": [
                    "kinesiología traumatológica San Miguel",
                    "kinesiólogo a domicilio esguince San Miguel",
                    "kinesiología para lumbago San Miguel",
                    "rehabilitación de fractura a domicilio San Miguel",
                    "kinesiólogo hombro doloroso San Miguel",
                    "kinesiólogo a domicilio Gran Avenida"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en San Miguel, Gran Avenida",
            "description": "Kinesiología a domicilio en San Miguel: El Llano, Lo Vial, Ciudad del Niño y Departamental. Evaluación inicial gratuita, lunes a domingo.",
            "keywords": [
                "kinesiólogo a domicilio San Miguel",
                "kinesiología a domicilio San Miguel",
                "kinesiólogo San Miguel Santiago",
                "rehabilitación a domicilio San Miguel",
                "kinesiólogo Gran Avenida",
                "kinesiólogo El Llano Subercaseaux",
                "kine a domicilio San Miguel"
            ]
        }
    },
    "la-granja": {
        "centrosSalud": [
            {
                "nombre": "SUC La Granja (Servicio de Urgencia Comunal)",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Único servicio de urgencia de la comuna con atención continua. Si el paciente es un niño, confirma antes en el sitio municipal si lo atienden ahí."
            },
            {
                "nombre": "SAPU Padre Esteban Gumucio",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria municipal; los horarios cambian, confírmalos en el sitio de la municipalidad antes de ir."
            },
            {
                "nombre": "SAPU Granja Sur",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria municipal, sin atención continua; revisa el horario vigente antes de trasladarte."
            },
            {
                "nombre": "SAPU Malaquías Concha",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria municipal; no funciona todas las horas del día, verifica el horario antes de ir."
            },
            {
                "nombre": "CESFAM La Granja (Av. San Gregorio 028)",
                "tipo": "CESFAM",
                "nota": "Atención primaria municipal. Ahí se gestionan interconsultas y derivaciones; llévalas a la evaluación kinésica."
            },
            {
                "nombre": "CESFAM Padre Esteban Gumucio (Av. Padre Esteban Gumucio 0281)",
                "tipo": "CESFAM",
                "nota": "Atención primaria municipal. Si no sabes en qué centro te corresponde inscribirte, consúltalo antes de pedir hora."
            },
            {
                "nombre": "CESFAM Granja Sur (Sofía Eastman 10009)",
                "tipo": "CESFAM",
                "nota": "Atención primaria municipal. Sirve para renovar recetas y mantener los controles crónicos mientras haces la rehabilitación en casa."
            },
            {
                "nombre": "CESFAM Malaquías Concha (Av. Linares 0585)",
                "tipo": "CESFAM",
                "nota": "Atención primaria municipal. Pide ahí copia de tus informes y exámenes para tenerlos a mano en la primera sesión."
            },
            {
                "nombre": "Hospital Padre Hurtado (Esperanza 2150)",
                "tipo": "hospital publico",
                "nota": "Está en San Ramón, comuna vecina por el poniente. Urgencia 24 h de adultos y de niños."
            },
            {
                "nombre": "Complejo Asistencial Dr. Sótero del Río",
                "tipo": "hospital publico",
                "nota": "Está en Puente Alto, no es comuna vecina. Hospital base de la red a la que pertenece La Granja, con urgencia 24 h de adultos y de niños."
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en La Granja: acceso, urgencias y continuidad tras el alta",
            "parrafos": [
                "La comuna es chica y de trazado llano, así que el kinesiólogo llega con camilla plegable y equipamiento portátil sin mayor trámite. Lo que conviene avisar al coordinar es el último tramo: si tu casa da a un pasaje interior donde el auto no entra, si hay que subir una escalera común o si la entrada tiene peldaños. Con ese dato el kinesiólogo entra caminando con lo justo y la sesión empieza a la hora acordada, sin dar vueltas buscando la dirección.",
                "Dentro de La Granja la red de salud es municipal y de atención primaria: cuatro CESFAM, varios SAPU y el SUC La Granja, el único con atención continua. Los hospitales con urgencia de adultos y de niños quedan fuera de la comuna: el Hospital Padre Hurtado, en San Ramón, comuna vecina por el poniente, y el Complejo Asistencial Dr. Sótero del Río, en Puente Alto, hospital base de la red a la que pertenece La Granja. Ante dolor en el pecho, falta de aire o pérdida brusca de fuerza, llama al SAMU 131: la kinesiología no reemplaza esa atención.",
                "Si vuelves a casa después de una hospitalización, ten a mano la epicrisis y las indicaciones médicas para la evaluación inicial gratuita: con eso el kinesiólogo arma el plan y lo ajusta a tu vivienda. El pago es directo a KINEUM, sin convenios de por medio; la boleta electrónica que emitimos es el documento que tu Isapre o tu seguro complementario pide para evaluar un reembolso, según lo que cubra tu plan."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En La Granja hay personas mayores que llevan décadas en la misma población y se ubican por el nombre del barrio: el almacén de la esquina, la sede vecinal, el paradero de Santa Rosa. Cuando dejan de recorrer esas cuadras, la pérdida de fuerza avanza callada. La kinesiología geriátrica a domicilio parte mirando el recorrido real: cómo se levanta de la cama y del sillón, cómo llega desde su pieza hasta la puerta de calle —sea por un pasillo, un patio o unos peldaños— y qué tan firme se siente en el último tramo hasta la vereda. Sobre eso se trabaja fuerza de piernas, equilibrio y seguridad al caminar, con una meta concreta: volver sola al almacén, a la sede de la unidad vecinal o al Parque Brasil. También revisamos los puntos donde tropieza dentro de la casa y dejamos por escrito qué puede hacer quien la acompaña entre una visita y otra. Cuando la caída incluyó un golpe en la cabeza, confusión o vómitos, lo primero es la evaluación médica, no la sesión: el SUC La Granja es el único servicio comunal abierto de forma continua.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en la Población Yungay y ya casi no sale sola. ¿Se puede trabajar para que vuelva a caminar hasta el almacén?",
                        "a": "Sí. Se evalúa primero su fuerza, su equilibrio y cómo se desplaza, y el plan parte dentro de la casa antes de salir a la cuadra acompañada. La distancia se aumenta solo si al día siguiente no aparece más dolor ni fatiga. Cuánto recupera depende de cada persona: no hay plazos garantizados."
                    },
                    {
                        "q": "Vivimos en un pasaje interior de la población y el auto no alcanza a entrar. ¿Igual pueden atender a mi abuela?",
                        "a": "Sí. El kinesiólogo estaciona donde se pueda y entra caminando con la camilla y lo necesario para la sesión. Al coordinar, dinos el nombre de la población o villa, el pasaje y una referencia visible —la sede, el colegio, el almacén— y avísanos si la entrada tiene escalones."
                    }
                ],
                "seoTitle": "Kinesiología Geriátrica a Domicilio en La Granja",
                "seoDescription": "Kinesiología geriátrica a domicilio en La Granja: fuerza, equilibrio y caminata segura para tu adulto mayor, en su propia casa. Atendemos los 7 días.",
                "keywords": [
                    "kinesiología geriátrica La Granja",
                    "kinesiólogo adulto mayor La Granja",
                    "kinesiología a domicilio adulto mayor La Granja",
                    "rehabilitación adulto mayor La Granja",
                    "prevención de caídas La Granja",
                    "kinesiólogo para personas mayores La Granja"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Una operación de rodilla, cadera u hombro se resuelve fuera de La Granja: los centros de mayor complejidad de la red son el Hospital Padre Hurtado, en San Ramón, comuna vecina por el poniente, y el Complejo Asistencial Dr. Sótero del Río, en Puente Alto, hospital base de la red a la que pertenece la comuna. Tus controles seguirán allá, y esa es justamente la razón para no sumarle a la semana dos o tres viajes más por Vespucio o el Acceso Sur recién operado. En la rehabilitación postquirúrgica a domicilio el kinesiólogo lee tu epicrisis y la pauta del cirujano —cuánto peso puedes cargar, qué rangos están permitidos, cómo cuidar la herida— y desde ahí trabaja movilidad, fuerza y desplazamiento dentro de tu casa, con muletas o bastón si corresponde. Avisa a tu equipo médico si aparece fiebre, si la herida se pone roja o caliente, o si una pantorrilla se hincha y duele de un día para otro. Si falta el aire de golpe o aprieta el pecho, llama al SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "Me operan en el Hospital Padre Hurtado y vivo en La Granja. ¿Pueden atenderme apenas llegue a casa?",
                        "a": "Sí, con la autorización de tu cirujano. Atendemos de lunes a domingo y contratas el servicio de forma particular, sin intermediarios ni convenios. Ten lista la epicrisis y las indicaciones de alta: la evaluación inicial gratuita define con eso cuándo partir y con qué intensidad."
                    },
                    {
                        "q": "Mis controles quedan en Puente Alto y me cuesta moverme. ¿Eso se puede entrenar en las sesiones?",
                        "a": "Sí, y suele ser de las primeras metas. Se practica pararte, caminar los metros hasta el auto, entrar y salir de él y aguantar el viaje sentado sin que aumente el dolor. Mientras eso no sea seguro, conviene que vayas acompañado o coordinar un traslado; los controles médicos no se reemplazan."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica a Domicilio en La Granja",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en La Granja: sigue tu recuperación en casa, sin sumar viajes a otra comuna. Escríbenos por WhatsApp.",
                "keywords": [
                    "rehabilitación postquirúrgica La Granja",
                    "kinesiología post operatoria La Granja",
                    "kinesiólogo a domicilio después de operación La Granja",
                    "rehabilitación rodilla a domicilio La Granja",
                    "kinesiología post cirugía cadera La Granja",
                    "rehabilitación tras alta hospitalaria La Granja"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "La decisión difícil de un cuadro respiratorio no se toma en la sesión: se toma a las tres de la mañana, y en La Granja conviene tenerla resuelta antes. Dentro de la comuna la urgencia es municipal, con varios SAPU cuyos horarios cambian y un solo servicio de atención continua, el SUC La Granja; si el enfermo es un niño, confirma en el sitio de la municipalidad si ahí lo reciben, porque la urgencia pediátrica hospitalaria confirmada está fuera de la comuna y se llega por Vespucio. Deja esa dirección anotada en el refrigerador, junto al 131. En la primera visita acordamos qué mirar: en guaguas y niños, si respira apurado, si se le marcan las costillas al tomar aire, si se pone morado alrededor de los labios, si hace un quejido o si rechaza el pecho; en adultos, ahogo estando quieto o desorientación. Con eso resuelto, la sesión se dedica a lo suyo: despejar secreciones, ordenar la respiración y revisar cómo usas el inhalador que indicó tu médico.",
                "faqsLocales": [
                    {
                        "q": "¿A qué urgencia llevo a mi hijo si empeora de madrugada y vivimos en La Granja?",
                        "a": "Si ves señales de alarma, llama al SAMU 131 sin esperar. El único servicio comunal con atención continua es el SUC La Granja, y como los SAPU cambian de horario conviene revisarlos en el sitio municipal. La urgencia pediátrica hospitalaria confirmada queda fuera de la comuna: Hospital Padre Hurtado, en San Ramón, y Sótero del Río, en Puente Alto."
                    },
                    {
                        "q": "Mi papá usa oxígeno en casa y en nuestra villa las calles se parecen entre sí. ¿Eso lo ven ustedes?",
                        "a": "Sí. Parte de la sesión es dejar preparado el escenario de una urgencia: la dirección escrita con el nombre de la villa, el pasaje y una referencia visible, y el 131 a mano, para que una ambulancia no pierda minutos ubicando la casa. El trabajo respiratorio en sí se ajusta a lo que indicó su médico."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio en La Granja",
                "seoDescription": "Kinesiología respiratoria a domicilio en La Granja, niños y adultos: técnicas para secreciones y señales de alarma claras. Atendemos de lunes a domingo.",
                "keywords": [
                    "kinesiología respiratoria La Granja",
                    "kinesiólogo respiratorio a domicilio La Granja",
                    "kinesiología respiratoria niños La Granja",
                    "kine respiratoria domicilio La Granja",
                    "bronquitis niño kinesiólogo La Granja",
                    "urgencia pediátrica cerca de La Granja"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "El alta después de un ACV llega desde fuera de La Granja: en la red pública estos cuadros se resuelven en el Complejo Asistencial Dr. Sótero del Río, en Puente Alto, hospital base de la red a la que pertenece la comuna, o en el Hospital Padre Hurtado, en San Ramón, la comuna vecina por el poniente. La familia vuelve a la casa con una epicrisis, quizás un andador o una silla, y la sensación de que ahora todo depende de ella. La rehabilitación neurológica a domicilio retoma justo ahí: el kinesiólogo parte de lo indicado por el neurólogo y sigue con lo que quedó a medias —sentarse firme, pasar de la cama a la silla, recuperar equilibrio, volver a caminar— hasta donde el cuerpo permita. El Parkinson y otros cuadros de avance lento se abordan con la misma lógica. En casa se ordena el trayecto del día: por qué lado bajarse de la cama, qué despejar para pasar con andador o silla, cómo es el acceso hasta la calle en tu vivienda. Si aparece pérdida brusca de fuerza, habla enredada o boca desviada, llama al SAMU 131 sin esperar.",
                "faqsLocales": [
                    {
                        "q": "Los controles de mi papá quedan en Puente Alto y el viaje lo deja agotado. ¿Se puede trabajar eso en las sesiones?",
                        "a": "Sí. El traslado se entrena como cualquier otro objetivo: pararse, caminar hasta el auto, entrar y salir, tolerar el viaje sentado y recuperarse después. Se planifica en qué momento del día le rinde mejor y qué descansos necesita. Los controles no se reemplazan con kinesiología, pero sí se puede llegar a ellos en mejores condiciones."
                    },
                    {
                        "q": "Mi mamá quedó en silla de ruedas. ¿Pueden enseñarnos a sacarla a la calle en el barrio?",
                        "a": "Sí. Se practican los traslados y el paso por el umbral, sea que haya escalones, un pasillo común o un patio delantero, y luego salidas cortas por la vereda cuando su condición lo permite. Si el pasaje o la vereda están en mal estado, el kinesiólogo ayuda a definir el recorrido más seguro. Cuando varias personas la cuidan por turnos, conviene que todas la movilicen de la misma forma."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica a Domicilio en La Granja",
                "seoDescription": "Rehabilitación neurológica a domicilio en La Granja tras un ACV o con Parkinson: continuidad en casa y apoyo a quien cuida. Coordinamos en 24 horas.",
                "keywords": [
                    "rehabilitación neurológica La Granja",
                    "kinesiología neurológica a domicilio La Granja",
                    "rehabilitación ACV a domicilio La Granja",
                    "kinesiólogo Parkinson La Granja",
                    "kinesiología a domicilio postrado La Granja",
                    "rehabilitación tras alta neurológica La Granja"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Los motivos más repetidos —esguinces, lumbago, un hombro que no deja dormir, tendinopatías, secuelas de una fractura— se parecen en todas partes; lo que cambia es dónde tiene que volver a funcionar el cuerpo. En La Granja eso suele ser el trayecto a pie hasta las estaciones La Granja o Santa Rosa de la Línea 4A, la bicicleta por los tramos de ciclovía de la comuna o cargar las compras de vuelta a la casa. El kinesiólogo evalúa, aplica terapia manual y ejercicio, y sube la exigencia según cómo respondas: primero movilidad y fuerza puertas adentro, después vueltas a la manzana y al final el recorrido completo que necesitas hacer, incluida la posición sobre la bicicleta y los tramos donde compartes calzada con micros y autos. Como la comuna es chica, ese circuito de prueba queda a metros de tu puerta y lo puedes repetir sin depender de nadie. Cuando el golpe fue fuerte, el pie no aguanta peso, algo se ve fuera de lugar o el dolor no baja, corresponde primero una radiografía y evaluación médica; recién con ese diagnóstico parte la kinesiología.",
                "faqsLocales": [
                    {
                        "q": "Me caí de la bicicleta camino a la estación y me duele el hombro. ¿Empiezo con kinesiología?",
                        "a": "Todavía no. Si no puedes levantar el brazo, algo se ve deformado o el dolor es intenso, necesitas evaluación médica y probablemente una radiografía para descartar fractura. Con ese diagnóstico en mano, la evaluación inicial gratuita arma el plan y define en qué momento tiene sentido volver a pedalear."
                    },
                    {
                        "q": "¿Atienden en toda La Granja o solo en los sectores cercanos a Vespucio?",
                        "a": "En toda la comuna, desde Yungay y San Gregorio hasta el sector de Granja Sur. El kinesiólogo entra por Américo Vespucio o Av. Santa Rosa según dónde vivas. Al escribir al +56 9 9967 9593, indica el nombre de tu población o villa y una referencia cercana: con eso se fija el horario sin perder tiempo buscando la dirección."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica a Domicilio en La Granja",
                "seoDescription": "Kinesiología traumatológica a domicilio en La Granja: esguinces, lumbago y hombro doloroso tratados en tu casa. Agenda al +56 9 9967 9593.",
                "keywords": [
                    "kinesiología traumatológica La Granja",
                    "kinesiólogo a domicilio esguince La Granja",
                    "tratamiento lumbago a domicilio La Granja",
                    "kinesiólogo hombro doloroso La Granja",
                    "rehabilitación fractura a domicilio La Granja",
                    "kinesiólogo deportivo a domicilio La Granja"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en La Granja | KINEUM Santiago",
            "description": "Kinesiología a domicilio en La Granja: atendemos en tu población o villa, de lunes a domingo, con evaluación inicial gratuita. WhatsApp +56 9 9967 9593.",
            "keywords": [
                "kinesiólogo a domicilio La Granja",
                "kinesiología a domicilio La Granja",
                "kinesiólogo La Granja",
                "rehabilitación a domicilio La Granja",
                "kinesiólogo particular La Granja",
                "kine a domicilio La Granja",
                "kinesiólogo cerca de Metro La Granja"
            ]
        }
    },
    "la-cisterna": {
        "centrosSalud": [
            {
                "nombre": "CESFAM Santa Anselma",
                "tipo": "CESFAM",
                "nota": "Atención primaria en La Cisterna; en el mismo recinto funciona un SAPU (Santa Anselma 0377), cuyo horario vigente conviene confirmar antes de ir"
            },
            {
                "nombre": "SAR Santa Anselma (Brisas del Maipo 0515)",
                "tipo": "Servicio de urgencia primaria (SAR)",
                "nota": "Urgencia primaria en La Cisterna: tarde y noche en días hábiles; sábados, domingos y festivos, 24 h"
            },
            {
                "nombre": "CESFAM Dr. Eduardo Frei Montalva",
                "tipo": "CESFAM",
                "nota": "Atención primaria en La Cisterna, con SAPU; confirma su dirección y su horario vigente antes de ir"
            },
            {
                "nombre": "Clínica Ebenecer (Gran Avenida 8471, paradero 23)",
                "tipo": "Clínica privada",
                "nota": "Centro privado en La Cisterna; su material destaca urgencia dental y no se confirmó urgencia médica general"
            },
            {
                "nombre": "Hospital Dr. Exequiel González Cortés (Gran Avenida 3300)",
                "tipo": "Hospital público",
                "nota": "Ubicado en San Miguel. Urgencia pediátrica 24 h; es la que está verificada para el sector"
            },
            {
                "nombre": "Hospital Barros Luco Trudeau",
                "tipo": "Hospital público",
                "nota": "Ubicado en San Miguel. Urgencia de adultos 24 h; La Cisterna no tiene hospital propio"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en La Cisterna: los paraderos, la Intermodal y un alta que llega de San Miguel",
            "parrafos": [
                "Aquí la dirección se dice por paradero antes que por número. Del paradero 22, junto al templo San Juan Bosco, hacia el sur aparecen Nueva España y El Parrón; hacia el oriente de Gran Avenida quedan Santa Anselma y Brisas del Maipo. Cuando agendamos te pedimos ese dato, el paradero y la calle, porque ordena el recorrido del kinesiólogo mejor que cualquier mapa.",
                "La Estación Intermodal concentra el cambio entre las Líneas 2 y 4A y los buses que salen de la comuna. Para alguien que anda con bastón, con andador o con una rodilla recién operada, llegar hasta ahí y hacer el trasbordo entre la gente es un esfuerzo aparte del tratamiento; la sesión en casa lo evita, y volver al transporte se entrena cuando el plan lo permite. En los edificios nuevos junto a las estaciones y en Av. El Parrón preguntamos antes por el piso y el acceso; en las casas con antejardín casi siempre alcanzan el living o el patio.",
                "La comuna no tiene hospital propio, así que las altas llegan desde San Miguel por Gran Avenida: el Barros Luco en adultos y el Exequiel González Cortés en el caso de los niños. Ese viaje de vuelta suele ser lo más duro del día, y lo que viene después no debería repetirlo tres veces por semana. Muéstranos la epicrisis en la primera visita y el kinesiólogo parte desde ahí. Ante una urgencia, llama al SAMU (131)."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "En El Parrón, Santa Anselma y Nueva España abundan las casas con antejardín donde la misma familia lleva décadas. Ese trayecto corto (la cama, el pasillo, el antejardín, el portón y la vereda) es el circuito que entrenamos, porque es el que tu mamá o tu papá hace todos los días y el primero que deja de hacer cuando aparece el miedo. Miramos el desnivel de la entrada, el pestillo que obliga a soltar el apoyo y la luz del pasillo de noche. Como en la comuna no hay cuestas, la caminata se mide en tramos que aquí se entienden solos: llegar a la esquina, después al paradero siguiente de Gran Avenida y más adelante hasta el CESFAM Santa Anselma el día del control. Si vive en uno de los departamentos nuevos cerca del Metro, el plan cambia de escala: pasillo, ascensor o escalera, hall y salida a la vereda. Los avances son graduales y distintos en cada persona. Tras un golpe en la cabeza, o con dolor que no afloja pese al reposo, lo que corresponde primero es que la vea un médico.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive sola en una casa con antejardín en El Parrón y hace meses que no cruza el portón. ¿Eso se puede trabajar?",
                        "a": "Sí. Si es seguro para ella, buena parte de la sesión ocurre en su antejardín y en la vereda: el desnivel de la entrada, abrir el portón y caminar unos metros acompañada, primero hasta la reja del vecino y después hasta la esquina. Si conviene un pasamanos o más luz en el acceso te lo decimos, aunque la instalación la decide la familia."
                    },
                    {
                        "q": "¿La pueden llevar al control del CESFAM Santa Anselma?",
                        "a": "No. Atendemos kinesiología dentro del domicilio y no hacemos traslados ni acompañamiento a horas médicas. Lo que sí hacemos es entrenar la distancia y la resistencia que ese trayecto exige, y decirte con franqueza si todavía conviene que vaya acompañada."
                    }
                ],
                "seoTitle": "Kinesiólogo Adulto Mayor a Domicilio La Cisterna",
                "seoDescription": "Kinesiólogo a domicilio para adulto mayor en La Cisterna: fuerza, equilibrio y marcha en casas con antejardín. Evaluación inicial gratuita.",
                "keywords": [
                    "kinesiólogo adulto mayor La Cisterna",
                    "kinesiología geriátrica a domicilio La Cisterna",
                    "kine adulto mayor La Cisterna",
                    "prevención de caídas La Cisterna",
                    "rehabilitación adulto mayor en casa La Cisterna",
                    "kinesiólogo a domicilio El Parrón",
                    "fisioterapia geriátrica La Cisterna"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Después de una prótesis de rodilla o cadera, de un hombro o de una cirugía de columna, lo que más pesa en La Cisterna es la repetición del viaje: como la comuna no tiene hospital, los controles quedan pasado el límite de Av. Lo Ovalle, en San Miguel, y cada uno significa salir a Gran Avenida, esperar micro o Metro y volver con la zona operada recién movilizada, muchas veces en hora punta. Hacer la rehabilitación en casa saca ese trayecto justo de las semanas en que ni el peldaño del antejardín es trivial. Partimos por lo que el alta exige de inmediato donde vives: pasar de la cama al borde, llegar hasta el baño, cruzar la entrada y, si estás en un departamento del entorno del Metro, resolver el pasillo y el ascensor con bastón o muletas, siempre dentro de lo que autorizó tu cirujano. Si aparece fiebre, la herida cambia de aspecto o la pantorrilla se hincha y duele, consulta pronto; y si de pronto te falta el aire o aprieta el pecho, el llamado es al SAMU (131).",
                "faqsLocales": [
                    {
                        "q": "Me operan y me dan el alta en el Barros Luco. ¿Cuándo pueden venir a mi casa en La Cisterna?",
                        "a": "Escríbenos al +56 9 9967 9593 apenas tengas la fecha estimada del alta. La agenda corre de lunes a domingo; la primera visita depende del cupo y de que tu cirujano ya haya indicado kinesiología. La idea es que ese regreso por Gran Avenida sea el último traslado grande de las primeras semanas."
                    },
                    {
                        "q": "¿Sirve empezar en casa si igual tengo que ir a los controles fuera de la comuna?",
                        "a": "Sí, porque son cosas distintas: al control vas cada cierto tiempo y la rehabilitación necesita frecuencia. Además entrenamos justo lo que ese viaje exige, como pararte, recorrer el tramo hasta el paradero y subir y bajar del bus. Recibes boleta de honorarios electrónica y con ella pides el reembolso que te permita tu plan de Isapre o tu seguro complementario."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica a Domicilio La Cisterna",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en La Cisterna: te ahorras el viaje por Gran Avenida a cada sesión tras el alta. Evaluación gratuita.",
                "keywords": [
                    "rehabilitación postquirúrgica a domicilio La Cisterna",
                    "kinesiólogo post operatorio La Cisterna",
                    "kine post operatorio a domicilio La Cisterna",
                    "rehabilitación prótesis de rodilla La Cisterna",
                    "kinesiología después de operación de cadera La Cisterna",
                    "kinesiólogo post operatorio Gran Avenida",
                    "rehabilitación en casa tras el alta La Cisterna"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "Cuando en La Cisterna un niño amanece cargado o un adulto vuelve a casa después de una neumonía, la sesión se hace en su propia pieza y con indicación médica, y la primera visita incluye algo que aquí conviene tener resuelto de antemano: adónde ir si empeora de noche. Dentro de la comuna, el SAR Santa Anselma, en Brisas del Maipo 0515, abre tarde y noche en días hábiles, y sábados, domingos y festivos cubre las 24 horas; en el CESFAM Santa Anselma funciona además un SAPU cuyo horario vigente conviene confirmar. La urgencia pediátrica que está verificada para el sector queda en San Miguel, en el Hospital Dr. Exequiel González Cortés, sobre la misma Gran Avenida y abierta las 24 horas: unos minutos hacia el norte, no una expedición. Ese orden queda escrito en la primera visita, junto con las señales que obligan a llamar al SAMU (131) sin esperar la siguiente sesión. La kinesiología respiratoria acompaña el tratamiento médico y no lo reemplaza.",
                "faqsLocales": [
                    {
                        "q": "Es un martes en la noche y mi hijo respira con esfuerzo. ¿Alcanzo a algo dentro de La Cisterna?",
                        "a": "En días hábiles el SAR Santa Anselma atiende tarde y noche, no las 24 horas. En el mismo CESFAM Santa Anselma (Santa Anselma 0377) funciona además un SAPU que podría estar abierto a esa hora: confirma su horario vigente antes de salir. La urgencia pediátrica verificada para el sector es la del Hospital Exequiel González Cortés, en San Miguel, sobre Gran Avenida y abierta las 24 horas. Si lo ves morado o muy decaído, llama al SAMU (131)."
                    },
                    {
                        "q": "Mi papá usa oxígeno en casa, en Brisas del Maipo. ¿Pueden atenderlo ahí mismo?",
                        "a": "Sí, con la indicación de su médico tratante y trabajando con el equipo que ya tiene instalado. La sesión ocurre en su pieza y así se evita sacarlo a la calle. Si la falta de aire aumenta estando en reposo o lo notas confundido, eso se consulta de inmediato, sin esperar la siguiente sesión."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio en La Cisterna",
                "seoDescription": "Kinesiología respiratoria a domicilio en La Cisterna, con indicación médica, y dónde ir si empeora: SAR Santa Anselma o urgencia en San Miguel.",
                "keywords": [
                    "kinesiología respiratoria a domicilio La Cisterna",
                    "kine respiratorio La Cisterna",
                    "KTR a domicilio La Cisterna",
                    "kinesiólogo respiratorio niños La Cisterna",
                    "kinesiología respiratoria adulto mayor La Cisterna",
                    "kine respiratorio Santa Anselma",
                    "kinesiólogo a domicilio La Cisterna bronquitis"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Volver a casa después de un ACV cambia el mapa de la familia entera, y en La Cisterna eso tiene una forma concreta: los controles con el neurólogo o el fisiatra quedan fuera de la comuna, porque aquí no hay hospital, y lo que antes era caminar hasta el paradero de Gran Avenida pasa a ser un operativo de dos personas. Por eso el trabajo parte por el recorrido real dentro de una casa de un piso con antejardín: la cama, el paso hasta el baño, el desnivel de la entrada, el portón y la vereda, que es donde muchas familias quieren volver a llegar. También acompañamos enfermedades progresivas como el Parkinson. Nos guiamos por lo que indicó el equipo tratante al alta, por ejemplo tras una hospitalización en San Miguel; lo que observamos en las sesiones te sirve para el próximo control. Cada persona avanza a su ritmo y no corresponde prometer plazos. Si de un momento a otro se le cae un lado de la cara, no encuentra las palabras o pierde fuerza en un brazo, el llamado al SAMU (131) va antes que cualquier sesión.",
                "faqsLocales": [
                    {
                        "q": "A mi papá le dan el alta en San Miguel después de un ACV y vivimos en Santa Anselma. ¿Cómo sigue la rehabilitación acá?",
                        "a": "Con lo que les entreguen al alta: el informe y las indicaciones del equipo tratante. Nosotros no recibimos nada del hospital ni tenemos convenio con él, así que esos documentos nos los comparten ustedes. Con eso, la evaluación inicial gratuita define las metas de las primeras semanas en su casa."
                    },
                    {
                        "q": "Vivimos en una casa de un piso con antejardín y el portón da directo a la vereda. ¿Se puede usar andador ahí?",
                        "a": "Lo evaluamos en la primera visita: el desnivel de la entrada, el ancho del portón y el estado de la vereda. A veces basta cambiar el sentido del giro o correr un mueble, y otras conviene otra ayuda técnica o un apoyo fijo en el peldaño. Las adaptaciones de la casa las decide la familia; nosotros indicamos qué haría falta y entrenamos el recorrido tal como está hoy."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica a Domicilio La Cisterna",
                "seoDescription": "Rehabilitación neurológica a domicilio en La Cisterna: continuidad tras el alta y marcha dentro de tu propia casa. Evaluación inicial gratuita.",
                "keywords": [
                    "rehabilitación neurológica a domicilio La Cisterna",
                    "kinesiólogo neurológico La Cisterna",
                    "rehabilitación ACV a domicilio La Cisterna",
                    "kinesiología Parkinson La Cisterna",
                    "kine neurológico a domicilio La Cisterna",
                    "rehabilitación después del alta La Cisterna",
                    "kinesiólogo a domicilio Nueva España La Cisterna"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Un esguince, un lumbago o un hombro que no deja dormir se tratan igual de bien en tu casa que en un box, y en La Cisterna eso evita algo muy concreto: caminar cojeando hasta el paradero, tomar micro o Metro en Gran Avenida y repetir ese trayecto dos o tres veces por semana. En las casas de la comuna aprovechamos lo que ya está, como el peldaño del antejardín, una silla firme y el largo del patio; en los departamentos del entorno del Metro basta con despejar un rincón. La vuelta a tu rutina se planifica sobre el terreno que de verdad usas: el tramo de vereda hasta la esquina, la cuadra que separa un paradero del siguiente, llegar hasta la Estación Intermodal y cargar las bolsas de la compra de regreso a la casa, con pesos parecidos a los que levantas todos los días. Si el pie no soporta el peso, el tobillo quedó deformado o la molestia sigue igual horas después del golpe, lo primero es una radiografía que descarte fractura.",
                "faqsLocales": [
                    {
                        "q": "Me torcí el tobillo bajando del bus en la Intermodal de La Cisterna. ¿Parto con kinesiología o voy a urgencia?",
                        "a": "Si el pie no aguanta el peso, se ve deformado o la hinchazón crece rápido, lo primero es la evaluación médica con radiografía; dentro de la comuna la urgencia primaria más a mano es el SAR Santa Anselma, con horario acotado en días hábiles. Con el diagnóstico en la mano partimos en tu casa y te ahorras cruzar Gran Avenida a cada sesión."
                    },
                    {
                        "q": "Vuelvo con bolsas pesadas desde el paradero y me queda doliendo la espalda baja. ¿Eso se entrena?",
                        "a": "Sí. La técnica de carga y la fuerza que esa tarea exige son parte del plan: practicamos con bolsas de un peso parecido al que llevas de verdad, desde levantarlas del suelo hasta caminar la cuadra con ellas. Si el dolor baja a la pierna con hormigueo o pérdida de fuerza, primero te vamos a pedir una evaluación médica."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica a Domicilio La Cisterna",
                "seoDescription": "Kinesiología traumatológica a domicilio en La Cisterna: esguinces, lumbago y hombro doloroso sin viajar por Gran Avenida. Evaluación gratuita.",
                "keywords": [
                    "kinesiología traumatológica a domicilio La Cisterna",
                    "kinesiólogo traumatológico La Cisterna",
                    "kine esguince de tobillo La Cisterna",
                    "kinesiólogo lumbago a domicilio La Cisterna",
                    "rehabilitación de fractura en casa La Cisterna",
                    "kinesiólogo hombro doloroso La Cisterna",
                    "kine a domicilio La Cisterna dolor de espalda"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en La Cisterna | KINEUM",
            "description": "Kinesiología a domicilio en La Cisterna: El Parrón, Santa Anselma, Brisas del Maipo y el eje de Gran Avenida. Evaluación inicial gratuita, lunes a domingo.",
            "keywords": [
                "kinesiólogo a domicilio La Cisterna",
                "kinesiología a domicilio La Cisterna",
                "kine a domicilio La Cisterna",
                "kinesiólogo La Cisterna",
                "rehabilitación a domicilio La Cisterna",
                "kinesiólogo a domicilio La Cisterna isapre",
                "kine domicilio Gran Avenida"
            ]
        }
    },
    "san-ramon": {
        "centrosSalud": [
            {
                "nombre": "Hospital Padre Hurtado",
                "tipo": "Hospital público",
                "nota": "Dentro de San Ramón. Urgencia 24 h, adulto y pediátrica"
            },
            {
                "nombre": "SAR La Bandera (Av. La Bandera 9260)",
                "tipo": "Servicio de urgencia primaria (SAR)",
                "nota": "Urgencia primaria de alta resolutividad; confirma su horario por teléfono antes de ir"
            },
            {
                "nombre": "SAPU Gabriela Mistral (Aurora de Chile 9872)",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria municipal para consultas de menor complejidad; la municipalidad no publica su horario"
            },
            {
                "nombre": "SAPU Dr. Salvador Allende (Los Claveles 8082)",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria municipal; confirma horario por teléfono, no aparece publicado"
            },
            {
                "nombre": "CESFAM La Bandera, CESFAM Gabriela Mistral, CESFAM Dr. Salvador Allende y CECOSF Modelo",
                "tipo": "Atención primaria",
                "nota": "Los cuatro centros de atención primaria de la comuna: atienden por horario y no son servicios de urgencia"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en San Ramón: red pública cerca y el último tramo del pasaje a pie",
            "parrafos": [
                "La red de salud de San Ramón es enteramente pública —tres CESFAM, un CECOSF, el SAR de La Bandera y dos SAPU— y el Hospital Padre Hurtado está dentro de la comuna. Para la rehabilitación eso tiene una consecuencia concreta: cuando llega el alta después de una operación, un ACV o una neumonía, la continuidad puede empezar sin salir de la comuna. Ten a mano la epicrisis y las indicaciones médicas para la evaluación inicial gratuita. KINEUM atiende de forma particular, sin convenio con ese hospital ni con isapres.",
                "Adentro manda el tipo de vivienda. Predominan casas de uno y dos pisos ampliadas por la propia familia, con peldaños de altura despareja y umbrales marcados; también hay conjuntos de tres y cuatro pisos sin ascensor, donde la escalera decide si la persona sale o se queda encerrada. Esos accesos no frenan la sesión: son parte de lo que se entrena, porque son el recorrido de todos los días.",
                "Al agendar pedimos el número del pasaje y una referencia cercana, porque en varios sectores el vehículo llega hasta la calle y el resto se camina con la camilla plegable al hombro. La hora queda fija y atendemos de lunes a domingo; se coordina por WhatsApp al +56 9 9967 9593. Si algo se agrava antes de la sesión, no esperes: el SAMU es el 131."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "Muchas casas de San Ramón crecieron por partes: la familia fue ampliando con los años y el resultado son peldaños de altura despareja entre lo antiguo y lo nuevo, umbrales más marcados que el resto del piso y pasillos angostos. Para una persona mayor ese recorrido interno pesa más que cualquier ejercicio de sala. La kinesiología geriátrica a domicilio parte midiendo lo que hace todos los días: levantarse de la cama, cruzar el umbral, llegar al baño y volver. Si el baño quedó al otro extremo de la ampliación, ese trayecto nocturno es justamente lo que se entrena, junto con fuerza de piernas, equilibrio y reacción al desequilibrio. También se sugieren ajustes concretos, como un pasamano en el peldaño más alto o más luz en el trayecto que hace de noche. En los conjuntos de tres y cuatro pisos sin ascensor, el objetivo suele ser recuperar la escalera. Ante una caída con golpe en la cabeza, confusión o dolor que no cede, corresponde evaluación médica; si es grave, llama al SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá vive en un pasaje de La Bandera y el vehículo no se acerca a la puerta, ¿igual la atienden?",
                        "a": "Sí. El kinesiólogo deja el vehículo en la calle que sí da acceso y entra a pie; el equipo es portátil. Al escribir al +56 9 9967 9593 dinos el nombre de la villa, el pasaje y el paradero más cercano, y así llega directo a la hora acordada."
                    },
                    {
                        "q": "Vive en un tercer piso sin ascensor y hace meses que no baja, ¿puede volver a salir?",
                        "a": "Depende de su estado y no hay plazos garantizados. Se parte con fuerza y equilibrio dentro del departamento y, si la evaluación lo permite, se practican pocos peldaños acompañada, aumentando de a poco. Si en la escalera aparece dolor en el pecho, falta de aire o mareo, se detiene la práctica y corresponde consultar."
                    }
                ],
                "seoTitle": "Kinesiología Geriátrica a Domicilio en San Ramón",
                "seoDescription": "Kinesiología geriátrica a domicilio en San Ramón: equilibrio, fuerza y prevención de caídas en tu casa, sobre tus propios peldaños y umbrales.",
                "keywords": [
                    "kinesiología geriátrica San Ramón",
                    "kinesiólogo adulto mayor a domicilio San Ramón",
                    "prevención de caídas San Ramón",
                    "rehabilitación adulto mayor San Ramón",
                    "kinesiólogo domicilio La Bandera",
                    "kinesiología a domicilio adulto mayor zona sur"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "El Hospital Padre Hurtado está dentro de San Ramón, así que después de una cirugía de cadera, rodilla, hombro o columna el alta suele llegar sin que tengas que cruzar la ciudad para volver a tu casa. El trayecto que cuesta es el último: bajar del vehículo en la calle, entrar por el pasaje con muletas o andador y enfrentar el peldaño de la entrada o la escalera del conjunto cuando el cirujano solo autorizó carga parcial. La rehabilitación postquirúrgica a domicilio trabaja eso junto con rango de movimiento, fuerza y marcha. En la evaluación inicial gratuita se revisan tu epicrisis y la pauta del cirujano: restricciones de carga, rangos permitidos y cuidados de la herida. KINEUM atiende de forma particular y no tiene convenio con el hospital ni con isapres. Fiebre, herida enrojecida o con secreción y dolor que aumenta de golpe son motivo de consulta pronta; ante dolor e hinchazón en la pantorrilla, falta de aire repentina o dolor en el pecho, llama de inmediato al SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "Me operaron y me dieron el alta en el Hospital Padre Hurtado, ¿pueden seguir la rehabilitación en mi casa?",
                        "a": "Sí, siempre que tu cirujano haya indicado kinesiología. KINEUM no tiene convenio con el hospital: tú contratas directamente y compartes la epicrisis y las indicaciones del alta, que son la base del plan. Con eso se define en qué etapa partir y qué movimientos están restringidos por ahora."
                    },
                    {
                        "q": "En la entrada de mi casa hay un peldaño alto que hicimos nosotros y salgo con muletas, ¿qué hago mientras tanto?",
                        "a": "Mientras no lo domines, entra y sal acompañado. En las sesiones se practica ese peldaño con la técnica que corresponde y dentro de la carga que autorizó tu cirujano, y si no es seguro te lo decimos y sugerimos qué adaptación provisoria evaluar con la familia, como un pasamano firme."
                    }
                ],
                "seoTitle": "Rehabilitación Postquirúrgica a Domicilio en San Ramón",
                "seoDescription": "Rehabilitación postquirúrgica a domicilio en San Ramón tras el alta: movilidad, fuerza y escaleras del hogar, según la pauta de tu cirujano.",
                "keywords": [
                    "rehabilitación postquirúrgica San Ramón",
                    "kinesiología post operatoria a domicilio San Ramón",
                    "rehabilitación prótesis rodilla San Ramón",
                    "kinesiólogo después de operación San Ramón",
                    "kinesiología alta Hospital Padre Hurtado",
                    "rehabilitación a domicilio zona sur Santiago"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "San Ramón no tiene clínica con urgencia dentro de la comuna: la única urgencia pediátrica confirmada las 24 horas es la del Hospital Padre Hurtado, que está en la misma comuna. El SAR La Bandera, en Av. La Bandera 9260, y los SAPU Gabriela Mistral y Dr. Salvador Allende resuelven consultas de menor complejidad, pero la municipalidad publica sus direcciones y teléfonos sin horarios, así que conviene llamar y anotarlos hoy, no a las tres de la mañana con un niño que respira mal. Esa es la primera mitad del plan. La segunda ocurre en la casa: el kinesiólogo revisa cómo está respirando, ayuda a movilizar y eliminar secreciones, corrige la técnica del inhalador con aerocámara si el médico lo recetó y le enseña a la familia a notar si el cuadro cede entre una visita y otra. Todo con indicación médica previa. Respiración muy rápida, costillas que se hunden, labios morados, quejido o rechazo del alimento en niños, o falta de aire en reposo y confusión en adultos, no se esperan: SAMU 131 o urgencia.",
                "faqsLocales": [
                    {
                        "q": "Es de madrugada y mi hijo respira con esfuerzo, ¿al SAR La Bandera o al Hospital Padre Hurtado?",
                        "a": "Si hay señales de alarma, llama al SAMU 131. La urgencia pediátrica confirmada las 24 horas en la comuna es la del Hospital Padre Hurtado. El SAR La Bandera atiende urgencia primaria, pero no encontramos publicado su horario, así que confírmalo antes de necesitarlo. La kinesiología no reemplaza esa atención."
                    },
                    {
                        "q": "Mi papá usa oxígeno en la casa, ¿se puede hacer la sesión sin moverlo?",
                        "a": "Sí, y suele ser la mejor razón para atenderlo en su casa: no hay que trasladar el equipo ni exponerlo en una sala de espera. La sesión se hace en su cama o en una silla firme, con las indicaciones de su médico tratante a la vista y sin alterar el flujo de oxígeno que le prescribieron."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio en San Ramón",
                "seoDescription": "Kinesiología respiratoria a domicilio en San Ramón, niños y adultos con orden médica, y dónde acudir de urgencia dentro de la comuna.",
                "keywords": [
                    "kinesiología respiratoria San Ramón",
                    "kinesiólogo respiratorio a domicilio San Ramón",
                    "kinesiología respiratoria infantil San Ramón",
                    "bronquitis obstructiva niños San Ramón",
                    "kinesiología post neumonía a domicilio",
                    "urgencia pediátrica San Ramón"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Después de un ACV, la etapa difícil empieza al volver a casa, y en San Ramón eso tiene una particularidad: el Hospital Padre Hurtado queda en la misma comuna, pero llegar a los controles con una persona que quedó con un lado débil suele ser el verdadero obstáculo, sobre todo si la casa está en un pasaje angosto y hay que sacar la silla de ruedas hasta la calle. La rehabilitación neurológica a domicilio da continuidad al trabajo iniciado durante la hospitalización, a partir de la epicrisis y de lo que indiquen el neurólogo o el fisiatra. Se entrenan control de tronco, transferencias de la cama a la silla, equilibrio y marcha en el espacio real de la casa, incluidos los umbrales y el peldaño de la entrada. También se enseña a la familia y a quien cuida a asistir sin lesionarse la espalda. Los avances son graduales y distintos en cada persona. Si aparece pérdida súbita de fuerza, dificultad para hablar o la cara desviada, llama de inmediato al SAMU 131.",
                "faqsLocales": [
                    {
                        "q": "Mi papá volvió del hospital con un lado débil y la casa es de un piso, pero con desniveles de la ampliación, ¿por dónde parte la rehabilitación?",
                        "a": "Por el recorrido que él hace cada día: pasar de la cama a la silla, girar en el pasillo, cruzar el desnivel entre la construcción original y la ampliación. Antes de la primera visita pídenos qué llevar: bastan los papeles del alta y la lista de medicamentos, que muestran qué autorizó el equipo tratante. Esa información nos la entrega la familia, porque KINEUM no tiene convenio con ningún hospital."
                    },
                    {
                        "q": "La silla de ruedas apenas pasa por nuestro pasaje, ¿pueden enseñarnos a sacarla?",
                        "a": "Sí. Parte de las sesiones se dedica a las transferencias y al manejo de la silla en el acceso real de la casa: el peldaño de la entrada, el portón y el tramo hasta la calle. Si algún punto no es seguro, te lo decimos y sugerimos qué adaptación evaluar con la familia."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica a Domicilio en San Ramón",
                "seoDescription": "Rehabilitación neurológica a domicilio en San Ramón tras un ACV o con Parkinson: transferencias, marcha y apoyo a la familia en tu casa.",
                "keywords": [
                    "rehabilitación neurológica San Ramón",
                    "kinesiología ACV a domicilio San Ramón",
                    "kinesiólogo neurológico San Ramón",
                    "rehabilitación Parkinson a domicilio San Ramón",
                    "kinesiología después del alta hospitalaria San Ramón",
                    "kinesiólogo a domicilio zona sur Santiago"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "Un esguince, un lumbago o una fractura ya consolidada obligan a un trámite incómodo antes de cualquier tratamiento: salir. Desde muchas casas de San Ramón eso significa caminar el pasaje hasta la calle principal y tomar locomoción por Santa Rosa o La Bandera apoyado en muletas, y repetirlo en cada sesión. La kinesiología traumatológica a domicilio evita ese ida y vuelta. La primera pregunta es qué necesitas volver a hacer: subir el peldaño de la entrada, cargar peso, usar la escalera del conjunto si vives en un tercer o cuarto piso, volver al trabajo o retomar tus tareas del día. Sobre eso se arma el plan, con movilidad, fuerza progresiva y control del dolor al moverte, más ejercicios cortos para los días en que no hay visita. Un detalle local: dentro de la comuna no hay urgencia privada. Si hay deformidad, no puedes apoyar el pie o el dolor es muy intenso, la radiografía y la evaluación médica están en la urgencia del Hospital Padre Hurtado, y la kinesiología viene después.",
                "faqsLocales": [
                    {
                        "q": "Me torcí el tobillo y está muy hinchado, ¿dónde me pueden tomar una radiografía en San Ramón?",
                        "a": "Dentro de la comuna eso lo resuelve la urgencia del Hospital Padre Hurtado; no hay urgencia privada en San Ramón. El SAR y los SAPU son de menor complejidad y ni siquiera publican horario. Con el diagnóstico y la indicación médica en la mano, la kinesiología parte en tu casa."
                    },
                    {
                        "q": "Ya tengo horas de kinesiología en el CESFAM, ¿me sirve además la atención a domicilio?",
                        "a": "Son cosas distintas y no tienes que dejar tu control en el CESFAM. KINEUM es particular: la sesión dura alrededor de 60 minutos, es individual y se hace en tu casa. Coméntale a tu kinesiólogo del CESFAM lo que estás trabajando, para que los ejercicios de los dos lados apunten a lo mismo."
                    }
                ],
                "seoTitle": "Kinesiología Traumatológica a Domicilio en San Ramón",
                "seoDescription": "Kinesiología traumatológica a domicilio en San Ramón: esguinces, lumbago, hombro y fracturas en recuperación, tratados en tu casa.",
                "keywords": [
                    "kinesiología traumatológica San Ramón",
                    "kinesiólogo a domicilio esguince San Ramón",
                    "tratamiento lumbago a domicilio San Ramón",
                    "kinesiología deportiva San Ramón",
                    "rehabilitación fractura a domicilio San Ramón",
                    "kinesiólogo traumatológico zona sur Santiago"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en San Ramón | KINEUM",
            "description": "Kinesiólogo a domicilio en San Ramón: sesiones en tu casa, en La Bandera, Los Prunos o Barrio Modelo. Evaluación inicial gratuita, lunes a domingo.",
            "keywords": [
                "kinesiólogo a domicilio San Ramón",
                "kinesiología a domicilio San Ramón",
                "kinesiólogo San Ramón",
                "rehabilitación a domicilio San Ramón",
                "kinesiólogo particular San Ramón",
                "kinesiología adulto mayor San Ramón",
                "kinesiólogo a domicilio zona sur Santiago"
            ]
        }
    },
    "colina": {
        "centrosSalud": [
            {
                "nombre": "SAR Colina",
                "tipo": "Servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia pública 24 h en Colina, sobre el eje de la Carretera General San Martín; confirma la atención antes de ir"
            },
            {
                "nombre": "SAPU Esmeralda",
                "tipo": "Servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia general 24 h, en el CESFAM Esmeralda, km 31 de la Carretera General San Martín"
            },
            {
                "nombre": "CESFAM Colina, Alpatacal 540",
                "tipo": "CESFAM",
                "nota": "Atención primaria; no es servicio de urgencia, confirma su horario antes de ir"
            },
            {
                "nombre": "Centro Médico Chicureo de Clínica Alemana",
                "tipo": "Centro médico ambulatorio",
                "nota": "En el sector Chicureo; confirma horario y valores de su urgencia antes de ir"
            },
            {
                "nombre": "Centro Médico Chicureo de Clínica Las Condes",
                "tipo": "Centro médico ambulatorio",
                "nota": "En el sector Piedra Roja; confirma horario y valores de su urgencia antes de ir"
            },
            {
                "nombre": "Complejo Hospitalario San José",
                "tipo": "Hospital público",
                "nota": "Está en Independencia, no en Colina: es el hospital de referencia de la red norte, con urgencia 24 h"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Colina: casco urbano, condominios de Chicureo y parcelas del valle",
            "parrafos": [
                "En Colina casi no se atiende en edificios: aquí la sesión ocurre en casas. En el casco urbano y en Esmeralda predominan las casas pareadas con antejardín y un peldaño de acceso; en Chicureo, Piedra Roja y Chamisero, condominios de uno o dos pisos con acceso controlado; en Las Canteras, Liray o Peldehue, viviendas de parcela con caminos interiores sin numeración clara. La camilla y el equipamiento portátil entran por la puerta de la casa.",
                "La urgencia pública de 24 horas se concentra en el eje de la Carretera General San Martín: el SAR Colina y el SAPU Esmeralda. En el sector Chicureo hay urgencias privadas en los centros médicos de Clínica Alemana y de Clínica Las Condes; conviene confirmar horario y valores antes de ir. Ante una urgencia vital, marca 131 antes que cualquier sesión: la kinesiología acompaña el tratamiento médico, no lo sustituye.",
                "Colina no tiene hospital público propio en funcionamiento y su red de referencia es la red norte, con hospital en Independencia. Por eso, después de un alta, el control médico y la rehabilitación suelen quedar fuera de la comuna, a unos 30 kilómetros por la Autopista Los Libertadores o la Ruta 5 Norte, sin Metro que acerque. La continuidad se hace entonces en tu casa: el plan sigue las indicaciones de tu médico tratante y se ajusta a la dirección donde vives, sea un condominio con portería o un camino rural."
            ]
        },
        "especialidades": [],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Colina y Chicureo | KINEUM",
            "description": "Kinesiólogo a domicilio en Colina: casco urbano, Chicureo, Chamisero y sectores rurales. Evaluación inicial gratuita y visita con hora acordada.",
            "keywords": [
                "kinesiólogo a domicilio Colina",
                "kinesiología a domicilio Colina",
                "kinesiólogo a domicilio Chicureo",
                "kinesiólogo a domicilio Chamisero",
                "kinesiólogo Piedra Roja",
                "rehabilitación a domicilio Colina",
                "kinesiólogo adulto mayor Colina",
                "kinesiólogo post operatorio Colina"
            ]
        }
    },
    "el-bosque": {
        "centrosSalud": [
            {
                "nombre": "Hospital y CRS El Pino",
                "tipo": "Hospital público",
                "nota": "Está en San Bernardo, junto al límite de El Bosque, y es el hospital de referencia de la comuna. Urgencia 24 h adulto y pediátrica, con estación propia en la Línea 2"
            },
            {
                "nombre": "SAR Dra. Haydée López",
                "tipo": "Servicio de urgencia de alta resolución (SAR)",
                "nota": "Urgencia primaria dentro de la comuna. Confirma su horario antes de necesitarlo"
            },
            {
                "nombre": "SAPU Dr. Carlos Lorca Tobar",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria en horario acotado; confirma el horario antes de necesitarlo"
            },
            {
                "nombre": "SAPU Santa Laura",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria municipal en horario acotado; conviene confirmar hasta qué hora atiende"
            },
            {
                "nombre": "CESFAM Dr. Carlos Lorca Tobar",
                "tipo": "CESFAM",
                "nota": "Atención primaria municipal: controles médicos y derivaciones"
            },
            {
                "nombre": "CESFAM Dra. Haydée López",
                "tipo": "CESFAM",
                "nota": "Atención primaria municipal de la red comunal de salud"
            },
            {
                "nombre": "CESFAM Cóndores de Chile",
                "tipo": "CESFAM",
                "nota": "Atención primaria municipal para el sector Cóndores de Chile"
            },
            {
                "nombre": "CESFAM Mario Salcedo",
                "tipo": "CESFAM",
                "nota": "Atención primaria municipal de la red comunal de salud"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en El Bosque: Gran Avenida, la Base Aérea y el regreso desde El Pino",
            "parrafos": [
                "En El Bosque el terreno es plano y las cuadras son cortas, así que lo que estira los tiempos no son las subidas sino la Base Aérea: ocupa una porción grande de la comuna y obliga a rodearla, de modo que un trayecto corto en el mapa puede tomar bastante más. Por eso agendamos con hora fija y preguntamos antes cómo es tu vivienda: si hay escalones en la entrada, un pasaje angosto para estacionar o la pieza en el segundo piso, el kinesiólogo llega preparado para subir camilla y equipamiento.",
                "El hospital de referencia de la comuna, el Hospital y CRS El Pino, queda cruzando el límite en San Bernardo y tiene estación propia en la Línea 2, así que volver a casa después del alta es corto. Lo largo viene después: repetir la rehabilitación dos o tres veces por semana fuera de casa termina pesando. Acá seguimos el informe de alta y las indicaciones de tu médico tratante. KINEUM es un servicio particular y no forma parte de la red de ese hospital ni de ningún otro centro.",
                "Ante una urgencia, la kinesiología no es el camino: llama al SAMU al 131 o acude a la urgencia 24 horas de El Pino. Dentro de la comuna están el SAR Dra. Haydée López y los SAPU Carlos Lorca y Santa Laura, con horarios acotados que conviene confirmar antes de necesitarlos."
            ]
        },
        "especialidades": [
            {
                "slug": "kinesiologia-geriatrica",
                "introLocal": "Para una persona mayor en El Bosque, la meta suele ser concreta y tener nombre propio: volver a llegar sola al almacén de la esquina, al paradero de Gran Avenida o a la estación de metro que abrió en el barrio en 2023. Antes de eso hay que resolver lo de adentro, y por ahí partimos: cómo se levanta de la cama, si el baño tiene dónde afirmarse, si el escalón del antejardín se le hizo alto, si la luz del pasillo alcanza para levantarse de noche. En la evaluación inicial gratuita recorremos ese trayecto real, sea una casa o un departamento, y armamos un plan de fuerza de piernas, equilibrio y marcha sobre su propio piso. También pesa la logística: cuando el control queda al otro lado de la Base Aérea, el viaje al CESFAM toma más de lo que parece en el mapa, y eso cambia cómo dosificamos la semana. Si hubo una caída con golpe en la cabeza, confusión o un dolor que impide apoyar, la evaluación médica va primero.",
                "faqsLocales": [
                    {
                        "q": "Mi mamá quiere volver a llegar caminando hasta la estación Copa Lo Martínez. ¿Se puede poner eso como meta?",
                        "a": "Sí, si su condición lo permite, y se trabaja por tramos. Primero que se levante y camine segura dentro de la casa, después la distancia hasta la esquina y recién ahí el trayecto completo, con el kinesiólogo al lado. La escalera y el torniquete de la estación son un ejercicio aparte, porque exigen equilibrio con las manos ocupadas. El ritmo lo marca ella, no el calendario."
                    },
                    {
                        "q": "El control de mi papá quedó en un CESFAM al otro lado de la Base Aérea y el viaje lo agota. ¿Ustedes lo trasladan?",
                        "a": "No hacemos traslados. Lo que sí hacemos es entrenar lo que ese viaje le exige: pararse sin impulso, caminar con bastón, aguantar de pie la espera y subir y bajar del micro o del auto. Sus controles y medicamentos siguen a cargo de su equipo del CESFAM; nosotros aportamos la parte kinésica en tu casa, de lunes a domingo."
                    }
                ],
                "seoTitle": "Kinesiología Geriátrica a Domicilio en El Bosque",
                "seoDescription": "Kinesiólogo para adulto mayor a domicilio en El Bosque: fuerza, equilibrio y volver a caminar al paradero de Gran Avenida. Evaluación gratuita.",
                "keywords": [
                    "kinesiólogo adulto mayor El Bosque",
                    "kinesiología geriátrica a domicilio El Bosque",
                    "rehabilitación adulto mayor El Bosque",
                    "prevención de caídas El Bosque",
                    "kine tercera edad El Bosque",
                    "kinesiólogo a domicilio El Bosque"
                ]
            },
            {
                "slug": "rehabilitacion-postquirurgica",
                "introLocal": "Volver a El Bosque con puntos recientes cambia la escala de las cosas: el escalón de la entrada, el pasillo hasta el baño y la altura de tu propia cama pasan a ser el primer entrenamiento. Si el alta salió del Hospital y CRS El Pino, el regreso es corto, porque queda junto al límite con San Bernardo y la Línea 2 termina ahí mismo. Lo que cuesta sostener son las semanas siguientes: cada sesión fuera de casa significa bajar la escalera, esperar la micro y aguantar el trayecto de pie con una herida reciente. Atenderte en casa deja ese esfuerzo solo para lo que no se puede evitar, como el control con tu cirujano. El kinesiólogo llega con el protocolo que él dejó y avanza según esa pauta y tu evolución, sin saltarse etapas. Si aparece fiebre, la herida enrojecida o con secreción, o hinchazón y dolor en la pantorrilla, avisa a tu equipo tratante; ante falta de aire o dolor en el pecho, llama al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "Me operan en el Hospital El Pino. ¿Puedo dejar la kinesiología coordinada antes del alta?",
                        "a": "Sí. Escríbenos por WhatsApp al +56 9 9967 9593 con la fecha estimada de alta y dejamos agendada la evaluación inicial gratuita para tus primeros días en casa. Necesitamos la indicación de kinesiología de tu cirujano. KINEUM atiende de forma particular y no depende de ese hospital ni de ninguna clínica."
                    },
                    {
                        "q": "¿Cuánto se demoran en llegar a El Bosque la primera vez?",
                        "a": "El mismo día o al día siguiente, según la agenda, con hora fija y de lunes a domingo. Si tu casa queda al otro lado de la Base Aérea, el trayecto interno es más largo de lo que parece en el mapa: eso puede mover la hora del día que te ofrezcamos, no la fecha."
                    }
                ],
                "seoTitle": "Kinesiólogo Post Operatorio a Domicilio El Bosque",
                "seoDescription": "Rehabilitación post operatoria a domicilio en El Bosque tras el alta de El Pino: seguimos el protocolo de tu cirujano. Evaluación gratuita.",
                "keywords": [
                    "kinesiólogo post operatorio El Bosque",
                    "rehabilitación post cirugía a domicilio El Bosque",
                    "kinesiología después del alta El Bosque",
                    "kine prótesis de rodilla El Bosque",
                    "rehabilitación cadera operada El Bosque",
                    "kinesiólogo a domicilio El Bosque"
                ]
            },
            {
                "slug": "kinesiologia-respiratoria",
                "introLocal": "Cuando el pediatra indica kinesiterapia respiratoria en pleno invierno, lo último que quieres es sacar al niño de la casa dos o tres veces por semana. La sesión se hace en su pieza: técnicas para ayudar a movilizar secreciones, aseo nasal y explicación a los papás sobre qué mirar en las horas siguientes. Lo que conviene resolver antes, y no a las tres de la mañana, es a dónde ir si empeora. Dentro de El Bosque, el SAR Dra. Haydée López y los SAPU Carlos Lorca y Santa Laura funcionan en horarios acotados, así que averigua hoy cuál te queda cerca y hasta qué hora abre. Fuera de ese horario, la urgencia de 24 horas de referencia de la comuna, con atención pediátrica, es la del Hospital y CRS El Pino, junto al límite con San Bernardo y con estación propia en la Línea 2. Si el niño respira con esfuerzo evidente, se pone morado o deja de tomar líquidos, no esperes la sesión: anda a urgencia o llama al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "¿Me sirve la orden del médico del CESFAM de El Bosque para la kinesiología respiratoria?",
                        "a": "Sí. La kinesiterapia respiratoria se hace con indicación médica, y la del CESFAM vale igual que la de una consulta particular. Llévala a la evaluación inicial gratuita y definimos la frecuencia con esa indicación. Te entregamos boleta de honorarios electrónica, reembolsable en tu isapre o seguro complementario según tu plan."
                    },
                    {
                        "q": "Vivimos al otro lado de la Base Aérea y mi hijo quedó con mucha tos. ¿Llegan hasta allá?",
                        "a": "Sí, atendemos todos los sectores de la comuna. Rodear la base alarga el trayecto interno, por eso agendamos con hora fija y te confirmamos por WhatsApp al +56 9 9967 9593 antes de salir; la primera visita suele ser el mismo día o al día siguiente. Si mientras tanto respira con esfuerzo, no esperes la sesión y consulta en urgencia."
                    }
                ],
                "seoTitle": "Kinesiología Respiratoria a Domicilio en El Bosque",
                "seoDescription": "Kinesiología respiratoria a domicilio en El Bosque, en la pieza del paciente y con indicación médica. Niños y adultos, de lunes a domingo.",
                "keywords": [
                    "kinesiología respiratoria El Bosque",
                    "KTR a domicilio El Bosque",
                    "kinesiólogo respiratorio niños El Bosque",
                    "kine respiratorio bebé El Bosque",
                    "kinesiología bronquiolitis El Bosque",
                    "kinesiólogo a domicilio El Bosque"
                ]
            },
            {
                "slug": "rehabilitacion-neurologica",
                "introLocal": "Después de un ACV, o con un Parkinson que avanza, lo que define el resultado no es una sesión aislada sino sostener el trabajo durante meses. Ahí el traslado es el que gana: mover dos o tres veces por semana a alguien con debilidad de un lado del cuerpo significa micro o metro y un acompañante que falte al trabajo, y sostener esa logística durante meses es la parte más difícil del proceso. Si el alta salió del Hospital El Pino, que tiene la estación terminal de la Línea 2 en Padre Hurtado con Lo Blanco, la rehabilitación puede continuar en casa siguiendo las indicaciones del equipo tratante, sin ese viaje de vuelta cada semana. Entrenamos donde la persona tiene que volver a desenvolverse: el paso de la cama a la silla, la puerta del baño, el escalón de la entrada y el largo del pasaje hasta la reja. También formamos a quien cuida, porque entre visita y visita las repeticiones las hace la familia. Ante boca desviada, pérdida súbita de fuerza o dificultad para hablar, llama de inmediato al SAMU al 131.",
                "faqsLocales": [
                    {
                        "q": "Mi marido quedó con secuelas de un ACV y volvió a la casa desde El Pino. ¿Tiene sentido seguir la rehabilitación acá?",
                        "a": "Sí, y sostenerla es lo que más pesa. Partimos por las transferencias de cama a silla y al baño, que es el gesto que más se repite en el día, y por enseñarle a quien lo asiste cómo hacerlas sin lastimarse. Trabajamos con el informe de alta y las indicaciones de su médico; KINEUM es un servicio particular y no forma parte de la red del hospital."
                    },
                    {
                        "q": "¿Cuántas sesiones necesita una rehabilitación neurológica?",
                        "a": "No hay un número fijo. Es un proceso de meses con reevaluaciones periódicas, y el avance depende de cada caso y de las indicaciones del equipo médico. En la evaluación inicial gratuita te damos una estimación realista y los objetivos de las primeras semanas antes de que te comprometas con un plan."
                    }
                ],
                "seoTitle": "Rehabilitación Neurológica a Domicilio en El Bosque",
                "seoDescription": "Rehabilitación neurológica a domicilio en El Bosque: continuidad tras el alta, sin viajar cada semana. Entrenamos al cuidador. Evaluación gratuita.",
                "keywords": [
                    "rehabilitación neurológica El Bosque",
                    "neurorehabilitación a domicilio El Bosque",
                    "kinesiólogo ACV El Bosque",
                    "rehabilitación post ACV en casa El Bosque",
                    "kinesiología Parkinson El Bosque",
                    "kinesiólogo a domicilio El Bosque"
                ]
            },
            {
                "slug": "kinesiologia-traumatologica",
                "introLocal": "La pregunta de fondo en una lesión traumatológica no es cuánto duele hoy, sino qué dejaste de hacer por culpa del dolor. En El Bosque esa respuesta suele ser bien concreta: aguantar de pie el viaje en la Línea 2 hasta el trabajo, subir la escalera de la estación con el bolso al hombro, alcanzar el tren en Lo Blanco a la hora en que va lleno, o volver de un turno largo caminando desde el paradero de Gran Avenida. Sobre eso armamos el plan. La sesión parte por entender qué movimiento te falla y con cuánta carga, y sigue con movilidad, fuerza y control del gesto, usando el espacio y los apoyos que haya en tu casa; entre visita y visita queda una pauta corta que puedas hacer sin equipo. Ojo con una cosa: si el golpe dejó el hueso fuera de lugar, no logras cargar el pie o el dolor no baja con reposo, eso lo tiene que ver primero un médico, con radiografía. La urgencia de 24 horas de referencia de la comuna es la del Hospital y CRS El Pino.",
                "faqsLocales": [
                    {
                        "q": "Me torcí el tobillo bajando del micro en Gran Avenida. ¿Parto por urgencia o por kinesiología?",
                        "a": "Si no logras cargar el pie, el tobillo se ve deformado o el dolor no cede con reposo, primero un médico con radiografía; la urgencia de 24 horas de referencia acá es la del Hospital y CRS El Pino, junto al límite con San Bernardo. Descartada la fractura, empezamos el tratamiento en tu casa con la evaluación inicial gratuita."
                    },
                    {
                        "q": "Trabajo todo el día y llego tarde a El Bosque. ¿Atienden fuera del horario laboral o los fines de semana?",
                        "a": "Atendemos de lunes a domingo y la hora la coordinamos contigo por WhatsApp al +56 9 9967 9593. La primera visita suele ser el mismo día o al día siguiente, y después dejamos un día y una hora fijos, incluso de fin de semana, para que la rehabilitación no dependa de a qué hora saliste del turno."
                    }
                ],
                "seoTitle": "Kinesiólogo Traumatológico a Domicilio El Bosque",
                "seoDescription": "Kinesiólogo traumatológico a domicilio en El Bosque: esguinces, lumbago y dolor de hombro tratados en tu casa. Evaluación inicial gratuita.",
                "keywords": [
                    "kinesiólogo traumatológico El Bosque",
                    "kinesiología esguince de tobillo El Bosque",
                    "tratamiento lumbago a domicilio El Bosque",
                    "kine tendinitis hombro El Bosque",
                    "rehabilitación lesiones deportivas El Bosque",
                    "kinesiólogo a domicilio El Bosque"
                ]
            }
        ],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en El Bosque y Lo Blanco | KINEUM",
            "description": "Kinesiólogo a domicilio en El Bosque: Santa Elena, Lo Espina, Santa Laura y el eje Gran Avenida. Evaluación inicial gratuita, lunes a domingo.",
            "keywords": [
                "kinesiólogo a domicilio El Bosque",
                "kinesiología a domicilio El Bosque",
                "kinesiólogo El Bosque",
                "kine a domicilio Lo Blanco El Bosque",
                "rehabilitación a domicilio El Bosque",
                "kinesiólogo adulto mayor El Bosque",
                "kinesiología respiratoria El Bosque"
            ]
        }
    },
    "lampa": {
        "centrosSalud": [
            {
                "nombre": "SAPU Lampa",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria 24 h, adulto y pediátrica"
            },
            {
                "nombre": "CESFAM Dr. José Bauza Frau",
                "tipo": "CESFAM",
                "nota": "Atención primaria de la red comunal de Lampa; no es servicio de urgencia"
            },
            {
                "nombre": "CESFAM Batuco (Santa Elena 180, Batuco)",
                "tipo": "CESFAM",
                "nota": "Atención primaria propia de Batuco, a varios kilómetros del pueblo de Lampa"
            },
            {
                "nombre": "SUR Batuco (urgencia rural anexa al CESFAM Batuco)",
                "tipo": "Servicio de urgencia primaria (SUR)",
                "nota": "Opera fines de semana y festivos; no funciona las 24 h todos los días, conviene confirmar el horario antes de ir"
            },
            {
                "nombre": "CESFAM Juan Pablo II (Av. Cacique Colin 2049, Estación Colina)",
                "tipo": "CESFAM",
                "nota": "Atención primaria para el sector de Estación Colina"
            },
            {
                "nombre": "CECOSF Sol de Septiembre",
                "tipo": "Centro comunitario de salud familiar (CECOSF)",
                "nota": "Atención primaria de barrio; no atiende urgencias"
            },
            {
                "nombre": "SUA Colina (Servicio de Urgencia Avanzada)",
                "tipo": "Servicio de urgencia",
                "nota": "Está en la comuna vecina de Colina, no en Lampa; urgencia 24 h"
            },
            {
                "nombre": "Complejo Hospitalario San José",
                "tipo": "Hospital público",
                "nota": "Está en Independencia, fuera de la comuna; hospital de referencia de la red norte, urgencia 24 h"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Lampa: del pueblo a Valle Grande, Batuco y las parcelas",
            "parrafos": [
                "En Valle Grande y Larapinta la visita parte en la conserjería del condominio; en Chicauma o Estación Colina parte por una referencia del camino, porque muchas direcciones no se ubican por número. Ayuda el terreno: valle plano y entrada a nivel de calle, así que la camilla, el andador o la silla de ruedas no pelean con escaleras ni pendientes. Avísanos al agendar si hay conserje y si el último tramo es camino de tierra.",
                "La red propia es solo atención primaria: los CESFAM Dr. José Bauza Frau, Batuco y Juan Pablo II en Estación Colina, más el CECOSF Sol de Septiembre. Para urgencias, el SAPU Lampa atiende 24 horas a adultos y niños, y en Batuco funciona un servicio de urgencia rural anexo al CESFAM los fines de semana y festivos, conviene confirmar el horario. Lo de mayor complejidad queda fuera: el hospital de referencia de la red norte es el Complejo Hospitalario San José, en Independencia. En una emergencia grave, llama al SAMU al 131.",
                "Por lo mismo, un alta hospitalaria siempre llega desde fuera de la comuna y la continuidad se rearma acá: KINEUM atiende de forma particular, sin convenio con ninguno de esos centros. Como el regreso son 35 kilómetros por la Ruta 5 Norte, agrupamos las visitas en el eje Camino Lampa (G-16) entre el pueblo, Batuco y Estación Colina, en vez de bajar a Santiago por cada control."
            ]
        },
        "especialidades": [],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Lampa y Batuco | KINEUM",
            "description": "Kinesiólogo a domicilio en Lampa: Valle Grande, Larapinta, Batuco, Estación Colina y el pueblo. Evaluación inicial gratuita y visitas con hora fija.",
            "keywords": [
                "kinesiólogo a domicilio Lampa",
                "kinesiología a domicilio Lampa",
                "kine a domicilio Lampa",
                "kinesiólogo a domicilio Valle Grande",
                "kinesiólogo a domicilio Batuco",
                "kinesiólogo adulto mayor Lampa",
                "rehabilitación a domicilio Lampa",
                "kinesiólogo a domicilio Lampa isapre"
            ]
        }
    },
    "tiltil": {
        "centrosSalud": [
            {
                "nombre": "Hospital Comunitario de Tiltil",
                "tipo": "Hospital público",
                "nota": "Única urgencia de la comuna abierta las 24 horas, en el casco urbano"
            },
            {
                "nombre": "SUR Huertos Familiares (Servicio de Urgencia Rural)",
                "tipo": "Servicio de urgencia primaria",
                "nota": "Urgencia rural en el sector de Huertos Familiares; confirma su horario con el establecimiento antes de ir"
            },
            {
                "nombre": "CESFAM Huertos Familiares",
                "tipo": "CESFAM",
                "nota": "Atención primaria en Huertos Familiares; no es servicio de urgencia"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Til Til: caminos largos y casas de sitio",
            "parrafos": [
                "En Tiltil se atiende en casas de sitio, no en blocks: el kinesiólogo llega en auto hasta el portón y entra con la camilla sin escaleras ni ascensor, así que todo queda en un solo nivel. Lo que cambia la planificación son las distancias: entre el pueblo, Huertos Familiares, Polpaico, Rungue y los sectores altos como Caleu o Montenegro hay kilómetros de camino rural. Por eso la hora se acuerda por sector y conviene dar una referencia del camino al confirmar la visita.",
                "Conviene tener decidido a dónde ir si algo se complica: la única urgencia abierta las 24 horas es la del Hospital Comunitario de Tiltil, en el pueblo, y desde Caleu, Montenegro o Rungue el traslado toma su tiempo. Las postas rurales de Polpaico, Rungue, Montenegro y La Capilla de Caleu son puntos de atención rural, no de urgencia, y el horario del servicio de urgencia de Huertos Familiares conviene confirmarlo con el propio establecimiento. La kinesiología acompaña el tratamiento, no reemplaza al médico: ante una emergencia, el SAMU es el 131.",
                "Til Til está declarada zona de rezago y la oferta de salud especializada dentro de la comuna es acotada, así que la rehabilitación indicada al alta suele quedar a varios kilómetros de la casa. Llevarla al domicilio evita viajar a Santiago por la Ruta 5 Norte dos o tres veces por semana: el plan sigue las indicaciones del equipo que te atendió, aunque ese centro quede fuera de la comuna."
            ]
        },
        "especialidades": [],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Tiltil (Til Til) | KINEUM",
            "description": "Kinesiólogo a domicilio en Tiltil (Til Til): sesiones en tu casa en el pueblo, Polpaico, Huertos Familiares y Caleu. Evaluación inicial gratuita.",
            "keywords": [
                "kinesiólogo a domicilio Til Til",
                "kinesiólogo a domicilio Tiltil",
                "kinesiología a domicilio Til Til",
                "kinesiólogo a domicilio Polpaico",
                "kinesiólogo a domicilio Huertos Familiares",
                "rehabilitación a domicilio Tiltil",
                "kinesiología adulto mayor Til Til"
            ]
        }
    },
    "padre-hurtado": {
        "centrosSalud": [
            {
                "nombre": "CESFAM Juan Pablo II",
                "tipo": "CESFAM",
                "nota": "Centro de atención primaria municipal de la comuna; no es servicio de urgencia"
            },
            {
                "nombre": "SAPU de Padre Hurtado (adosado al CESFAM, San Alberto Hurtado 3295)",
                "tipo": "Servicio de urgencia primaria (SAPU/SAR)",
                "nota": "De lunes a viernes abre desde la tarde y atiende toda la noche hasta la mañana siguiente; sábados, domingos y festivos funciona continuado. No es urgencia de alta complejidad"
            },
            {
                "nombre": "Hospital de Talagante (Balmaceda 1458)",
                "tipo": "Hospital público",
                "nota": "Está en Talagante, no en Padre Hurtado. Urgencia 24 h adulto y pediátrica"
            },
            {
                "nombre": "Hospital El Carmen Dr. Luis Valentín Ferrada (Camino a Rinconada 1201)",
                "tipo": "Hospital público",
                "nota": "Está en Maipú, no en Padre Hurtado. Urgencia 24 h adulto y pediátrica"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Padre Hurtado: casas con patio y direcciones de campo",
            "parrafos": [
                "En Padre Hurtado predominan las casas de uno o dos pisos con antejardín, no las torres: el kinesiólogo entra con camilla y equipamiento sin escaleras comunes ni ascensor. Hacia el poniente y el sur buena parte del territorio es rural, y en las parcelas y caminos interiores la dirección se ubica por kilómetro o por una referencia antes que por número: déjanos ese dato al coordinar la hora.",
                "La comuna tiene un CESFAM con su SAPU adosado en el eje San Alberto Hurtado, y ningún hospital propio: la urgencia de alta complejidad queda a unos 25 km, en el Hospital de Talagante o en el Hospital El Carmen, en Maipú. El SAPU abre de lunes a viernes desde la tarde y atiende toda la noche hasta la mañana siguiente; sábados, domingos y festivos funciona continuado. Si de pronto pierdes fuerza en un lado, te falta el aire o sientes un dolor que aprieta el pecho, no esperes la sesión: marca el 131. La kinesiología complementa al médico, no lo reemplaza.",
                "Si la cirugía o la hospitalización fue fuera de la comuna, la rehabilitación posterior se puede hacer igual en tu casa. Cuando nos escribas, ten a mano el informe de alta y la pauta que te dejó el equipo tratante: con eso el kinesiólogo retoma el trabajo donde quedó, sin repetir cada semana el viaje por la Ruta 78. KINEUM llega por cuenta tuya, no derivado por un hospital, con boleta de honorarios reembolsable en tu Isapre o seguro complementario según tu plan."
            ]
        },
        "especialidades": [],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio Padre Hurtado y El Trebal | KINEUM",
            "description": "Kinesiólogo a domicilio en Padre Hurtado: llegamos al centro, Santa Rosa de Chena, El Trebal y a las parcelas del sector rural. Evaluación gratuita.",
            "keywords": [
                "kinesiólogo a domicilio Padre Hurtado",
                "kinesiología a domicilio Padre Hurtado",
                "kine a domicilio Padre Hurtado",
                "kinesiólogo Padre Hurtado",
                "rehabilitación a domicilio Padre Hurtado",
                "kinesiólogo particular Padre Hurtado",
                "kinesiólogo a domicilio Padre Hurtado isapre",
                "kine Padre Hurtado reembolso"
            ]
        }
    },
    "penaflor": {
        "centrosSalud": [
            {
                "nombre": "Hospital de Peñaflor",
                "tipo": "Hospital público",
                "nota": "Urgencia 24 h, adulto y pediátrica, dentro de la misma comuna"
            },
            {
                "nombre": "SAPU Peñaflor (en el CESFAM Peñaflor, Costa Rica 1000)",
                "tipo": "Servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria 24 h, los 7 días de la semana"
            },
            {
                "nombre": "CESFAM Peñaflor (Costa Rica 1000)",
                "tipo": "CESFAM",
                "nota": "Atención primaria; el SAPU funciona en el mismo recinto"
            },
            {
                "nombre": "CESFAM Monckeberg (La Concepción 73, sector Las Praderas)",
                "tipo": "CESFAM",
                "nota": "Atención primaria del sector Las Praderas y del sector de Malloco"
            },
            {
                "nombre": "SAPU Monckeberg",
                "tipo": "Servicio de urgencia primaria (SAPU/SAR)",
                "nota": "No es 24 h: días hábiles de 17:00 a 24:00; fines de semana y festivos de 8:00 a 24:00"
            },
            {
                "nombre": "Centro de Medicina Deportiva y Rehabilitación municipal (Av. Troncal 735)",
                "tipo": "Centro municipal de rehabilitación",
                "nota": "Atención ambulatoria de rehabilitación; no es un servicio de urgencia"
            },
            {
                "nombre": "Hospital de Talagante",
                "tipo": "Hospital público",
                "nota": "Urgencia 24 h, adulto y pediátrica; está en la comuna vecina de Talagante"
            }
        ],
        "hub": {
            "h2": "Peñaflor y Malloco: cómo se atiende en casa a 37 km del centro de Santiago",
            "parrafos": [
                "Peñaflor pertenece a la Provincia de Talagante, unos 37 kilómetros al suroeste del centro de Santiago: llegar es una salida a provincia por la Autopista del Sol o por el Camino a Melipilla vía Malloco. Dentro de la comuna el asunto se simplifica: el casco urbano, a la orilla del río Mapocho, no tiene pendientes que compliquen entrar con camilla y equipamiento, y predominan las viviendas de uno y dos pisos con patio, con condominios y parcelas hacia Malloco y los bordes. Suele sobrar espacio para trabajar en el living o en una pieza amplia.",
                "Si vives en una parcela o en un pasaje sin numeración clara, mándanos una referencia por WhatsApp antes de la visita: la Plaza de Armas, la Plaza de Malloco o el cerro La Virgen bastan para ubicarte. Y si prefieres salir de casa, el Centro de Medicina Deportiva y Rehabilitación municipal de Av. Troncal 735 atiende de forma ambulatoria.",
                "Ante falta de aire, dolor en el pecho o pérdida brusca de fuerza, eso no se maneja con ejercicios: marca 131 (SAMU). Peñaflor tiene dos urgencias abiertas las 24 horas sin salir de la comuna, el Hospital de Peñaflor y el SAPU del CESFAM de Costa Rica 1000; el SAPU Monckeberg, el del sector Las Praderas y Malloco, cierra a medianoche. Si vienes saliendo de una hospitalización, en la evaluación inicial gratuita revisamos tu epicrisis y lo indicado por tu médico tratante: KINEUM atiende de forma particular, sin convenio con ningún centro."
            ]
        },
        "especialidades": [],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Peñaflor y Malloco | KINEUM",
            "description": "Kinesiólogo a domicilio en Peñaflor y Malloco: atendemos El Trapiche, Las Praderas y el centro. Evaluación inicial gratuita y boleta reembolsable.",
            "keywords": [
                "kinesiólogo a domicilio Peñaflor",
                "kinesiología a domicilio Peñaflor",
                "kinesiólogo Peñaflor",
                "kinesiólogo a domicilio Malloco",
                "rehabilitación a domicilio Peñaflor",
                "kinesiólogo adulto mayor Peñaflor",
                "kinesiólogo a domicilio Provincia de Talagante"
            ]
        }
    },
    "talagante": {
        "centrosSalud": [
            {
                "nombre": "Hospital de Talagante (Hospital Provincial de Talagante, Balmaceda 1458)",
                "tipo": "Hospital público",
                "nota": "Urgencia abierta las 24 h, para personas de todas las edades"
            },
            {
                "nombre": "SAR María Eugenia Torres Miranda (Pasaje Quemchi 1075)",
                "tipo": "Servicio de urgencia primaria (SAR)",
                "nota": "Única urgencia de atención primaria abierta 24 h en la comuna"
            },
            {
                "nombre": "SAPU Dr. Alberto Allende Jones (Esmeralda 2049)",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria en horario parcial: confirma su horario antes de ir"
            },
            {
                "nombre": "SAPU E.U. Marcela Jacques Vargas (Francisco Chacón 750)",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Urgencia primaria en horario parcial: confirma su horario antes de ir"
            },
            {
                "nombre": "CESFAM Dr. Alberto Allende Jones (Esmeralda 2049 y Francisco Chacón 750)",
                "tipo": "CESFAM",
                "nota": "Atención primaria repartida en dos edificios; no es servicio de urgencia"
            },
            {
                "nombre": "CECOSF Los Presidentes (Villa Los Presidentes)",
                "tipo": "CESFAM",
                "nota": "Atención primaria del sector, sin urgencia"
            },
            {
                "nombre": "Centro de salud anexo CESFAM Claretianos (Av. 21 de Mayo 1696)",
                "tipo": "Centro de atención primaria",
                "nota": "Anexo del CESFAM para el sector norte del centro; no es urgencia"
            },
            {
                "nombre": "Posta Rural Aliro Cárcamo de Lonquén (Los Quillayes s/n, Lonquén)",
                "tipo": "Posta rural",
                "nota": "Referencia de salud del sector rural de Lonquén; no atiende 24 h"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Talagante: del casco antiguo a las parcelas de Lonquén",
            "parrafos": [
                "El casco antiguo, en torno a la plaza y a Bernardo O'Higgins, y las villas más nuevas como Los Presidentes o el sector Claretianos de Av. 21 de Mayo comparten algo: aquí se vive a nivel de calle. El kinesiólogo estaciona frente a la casa y entra directo, sin hall ni conserjería, y para ubicarse basta el eje Esmeralda–Francisco Chacón, donde funcionan los dos edificios del CESFAM.",
                "En Lonquén y El Pino Viejo el escenario es otro: parcelas, portones y cerros con pendiente que no aparecen en el casco urbano. Ahí conviene avisar quién abre el portón y dónde dejar el auto, porque el trecho entre la reja y la puerta suele ser largo. La referencia de salud del sector es la Posta Rural Aliro Cárcamo, en Los Quillayes, que no cubre las noches.",
                "El Hospital de Talagante, en Balmaceda 1458, es el hospital de referencia de la provincia: ahí se dan de alta también vecinos de El Monte, Isla de Maipo, Peñaflor y Padre Hurtado, con los controles citados en ese mismo recinto. Esos papeles son el punto de partida del trabajo en casa, y la evaluación inicial no tiene costo. KINEUM cobra de forma particular y funciona aparte de la red pública. Ten anotada la dirección del SAR de Pasaje Quemchi 1075: es el único recurso de atención primaria abierto de noche, porque los dos SAPU del CESFAM cierran. Si hay riesgo vital, el SAMU es el 131."
            ]
        },
        "especialidades": [],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Talagante y Lonquén",
            "description": "Kinesiólogo a domicilio en Talagante: sesiones en tu casa, en el casco urbano y en Lonquén. Evaluación inicial gratuita y atención de lunes a domingo.",
            "keywords": [
                "kinesiólogo a domicilio Talagante",
                "kinesiología a domicilio Talagante",
                "rehabilitación a domicilio Talagante",
                "kinesiólogo Talagante",
                "kinesiólogo a domicilio Lonquén",
                "kinesiología adulto mayor Talagante",
                "kinesiología respiratoria a domicilio Talagante",
                "rehabilitación postoperatoria a domicilio Talagante"
            ]
        }
    },
    "isla-de-maipo": {
        "centrosSalud": [
            {
                "nombre": "CESFAM Isla Centro",
                "tipo": "CESFAM",
                "nota": "Atención primaria en Isla Centro; tiene SAPU, confirma por teléfono el horario antes de ir."
            },
            {
                "nombre": "CESFAM La Islita",
                "tipo": "CESFAM",
                "nota": "Atención primaria para el sector de La Islita; también con SAPU, verifica si está operativo a la hora que lo necesitas."
            },
            {
                "nombre": "Hospital de Talagante",
                "tipo": "Hospital público",
                "nota": "Urgencia hospitalaria 24 h más cercana, en la comuna vecina de Talagante."
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Isla de Maipo: casas de uno o dos pisos y direcciones por camino",
            "parrafos": [
                "En Isla de Maipo casi todo ocurre a nivel de piso: predominan las casas de uno o dos pisos y las villas de Isla Centro y La Islita, y prácticamente no hay edificios con ascensor. Entrar con la camilla es directo, y se trabaja en la pieza que la familia despeje. Hacia Naltahua, La Villita o Arquería las direcciones se dan por camino y kilómetro más que por número: conviene mandar un punto de ubicación por WhatsApp y una referencia del portón.",
                "El terreno es mayormente plano, salvo al subir hacia el cerro Lonquén o la Puntilla, y en los sectores rurales el acceso suele ser por camino interior, muchas veces sin pavimento. Eso cambia los objetivos: en una parcela, recuperar autonomía puede significar volver a recorrer el trecho que separa la casa del camino y abrir el portón sin ayuda, algo que ningún box reproduce.",
                "Ante un síntoma que no espera, el número es el 131. En la comuna están los CESFAM Isla Centro y La Islita, con atención de urgencia primaria cuyo funcionamiento y horario conviene confirmar antes de salir; la urgencia hospitalaria más cercana queda fuera de la comuna, en Talagante. Como los controles después de un alta también obligan a salir a la carretera, el plan en casa se arma para no multiplicar esos viajes. No trabajamos con ningún centro: los papeles los traes tú, y la evaluación inicial gratuita parte de ellos."
            ]
        },
        "especialidades": [],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Isla de Maipo y Lonquén",
            "description": "Kinesiólogo a domicilio en Isla de Maipo: sesiones en tu casa o parcela, de Isla Centro y La Islita a Naltahua y Lonquén. Evaluación inicial gratuita.",
            "keywords": [
                "kinesiólogo a domicilio Isla de Maipo",
                "kinesiología a domicilio Isla de Maipo",
                "kinesiólogo Isla de Maipo",
                "rehabilitación a domicilio Isla de Maipo",
                "kinesiólogo a domicilio Naltahua",
                "kinesiología adulto mayor Isla de Maipo",
                "rehabilitación postoperatoria a domicilio Isla de Maipo",
                "kinesiólogo a domicilio Lonquén"
            ]
        }
    },
    "buin": {
        "centrosSalud": [
            {
                "nombre": "Hospital San Luis de Buin-Paine",
                "tipo": "hospital público",
                "nota": "Urgencia 24 h, adulto y pediátrica. Es el centro público de referencia de la comuna"
            },
            {
                "nombre": "Servicio de Urgencia Rural (SUR) de Buin",
                "tipo": "servicio de urgencia primaria",
                "nota": "Servicio de urgencia primaria de la red comunal. Confirma dirección y horario antes de ir; la urgencia que funciona las 24 horas es la del Hospital San Luis de Buin-Paine"
            }
        ],
        "hub": {
            "h2": "Kinesiólogo a domicilio en Buin: la dirección importa más que la comuna",
            "parrafos": [
                "Buin no se recorre como un barrio de Santiago. Entre el casco urbano, Alto Jahuel, Linderos y las parcelas de Viluco hay kilómetros de por medio, así que al escribirnos conviene indicar la localidad y una referencia clara: el cruce, el nombre del camino o el paradero, sobre todo si tu dirección no tiene numeración a la vista. Con ese dato la visita no se pierde buscando el acceso y el horario se confirma contigo antes de salir.",
                "El terreno juega a favor: Buin es plano, de valle, y aquí no hay ascensores ni pasillos estrechos; el equipo baja del auto a pocos metros de la puerta. En las parcelas hay que mirar otra cosa: tierra suelta, portones lejos de la casa y desniveles en el acceso, que conviene avisar para llegar preparados.",
                "Tras un alta en el Hospital San Luis de Buin-Paine, el problema suele ser el traslado: tu casa puede quedar a varios kilómetros del hospital y dependes de quién pueda llevarte. La sesión en tu domicilio evita ese viaje y sigue las indicaciones de tu médico tratante, sin reemplazarlas. KINEUM es un servicio particular, sin convenio con ese ni con ningún otro centro. Si aparece falta de aire, dolor en el pecho o dificultad repentina para hablar o mover un lado del cuerpo, la kinesiología no corresponde: llama al SAMU 131 o anda a la urgencia del hospital, que atiende las 24 horas."
            ]
        },
        "especialidades": [],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Buin, Linderos y Alto Jahuel",
            "description": "Kinesiología a domicilio en Buin: centro, Alto Jahuel, Linderos, Maipo y los sectores de parcelas. Evaluación inicial gratuita y boleta para tu Isapre.",
            "keywords": [
                "kinesiólogo a domicilio Buin",
                "kinesiología a domicilio Buin",
                "kinesiólogo Buin",
                "kinesiólogo a domicilio Alto Jahuel",
                "kinesiólogo a domicilio Linderos",
                "rehabilitación a domicilio Buin",
                "kinesiólogo particular Buin",
                "kinesiología adulto mayor Buin"
            ]
        }
    },
    "el-monte": {
        "centrosSalud": [
            {
                "nombre": "CESFAM El Monte (Av. Libertadores 531)",
                "tipo": "CESFAM",
                "nota": "Atención primaria de la comuna; no es servicio de urgencia hospitalaria."
            },
            {
                "nombre": "SAPU El Monte",
                "tipo": "Servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria, en el mismo recinto del CESFAM. Su horario cambia entre días hábiles y fin de semana: revísalo antes de ir."
            },
            {
                "nombre": "CECOSF Lo Chacón (Av. Los Plátanos 1214)",
                "tipo": "CESFAM",
                "nota": "Centro comunitario de salud familiar del sector Lo Chacón; atención primaria, sin urgencia."
            },
            {
                "nombre": "Hospital de Talagante",
                "tipo": "Hospital público",
                "nota": "Está en Talagante, comuna vecina, no en El Monte. Es la urgencia hospitalaria 24 h más cercana."
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en El Monte: del casco urbano a los caminos de parcelas",
            "parrafos": [
                "El Monte se ordena en dos realidades. En el casco urbano, alrededor de Plaza Independencia y Av. Libertadores, las calles están numeradas. En El Paico Alto, Chiñigüe y Lo Chacón la dirección se da por camino y kilómetro, así que al escribirnos conviene sumar un cruce o un portón como referencia. El valle entre el Mapocho y el Maipo es plano y no pone pendientes, pero sí distancias internas reales: por eso ordenamos las visitas por sector y no por hora.",
                "No hay Metro en la comuna ni en el resto de la provincia de Talagante, y el centro de Santiago queda a unos 45 km por la Autopista del Sol, con enlace en El Paico: ir a terapia significa auto o bus interurbano, y la sesión en casa ahorra ese viaje completo. Llegar con camilla y equipo suele ser simple, con acceso a nivel o por una sola escalera interior; en las villas nuevas de Lo Chacón y El Paico conviene despejar un espacio antes de la visita.",
                "La kinesiología complementa al médico y no reemplaza una urgencia. En El Monte lo disponible es atención primaria: el SAPU funciona en el mismo recinto del CESFAM y su horario es acotado en días hábiles. La urgencia hospitalaria 24 h más cercana queda fuera de la comuna, en Talagante, por el eje Talagante–Melipilla. Ante dolor en el pecho o pérdida súbita de fuerza, llama al SAMU 131. Si el alta viene del Hospital de Talagante, trae las indicaciones escritas: esa pauta define la frecuencia y los objetivos. KINEUM es un servicio particular e independiente."
            ]
        },
        "especialidades": [],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en El Monte | Evaluación gratis",
            "description": "Kinesiología a domicilio en El Monte: centro, El Paico, Lo Chacón y Chiñigüe. Evaluación inicial gratuita y sesiones de 60 minutos en tu casa.",
            "keywords": [
                "kinesiólogo a domicilio El Monte",
                "kinesiología a domicilio El Monte",
                "kinesiólogo El Monte",
                "rehabilitación a domicilio El Monte",
                "kinesiólogo a domicilio El Paico",
                "kinesiólogo a domicilio provincia de Talagante",
                "kinesiología adulto mayor El Monte",
                "kinesiología respiratoria a domicilio El Monte"
            ]
        }
    },
    "pirque": {
        "centrosSalud": [
            {
                "nombre": "CESFAM Dr. José Manuel Balmaceda",
                "tipo": "CESFAM",
                "nota": "Atención primaria en Av. Virginia Subercaseaux, con urgencia hasta medianoche; no es una urgencia 24 h"
            },
            {
                "nombre": "Consultorio Rural El Principal",
                "tipo": "Consultorio rural",
                "nota": "Atención primaria en el sector El Principal, en horario diurno"
            },
            {
                "nombre": "Posta de Salud Rural La Puntilla",
                "tipo": "Posta de salud rural",
                "nota": "Atención rural en horario diurno, en el sector La Puntilla"
            },
            {
                "nombre": "Posta de Salud Rural Santa Rita",
                "tipo": "Posta de salud rural",
                "nota": "Atención rural en horario diurno, en el sector Santa Rita"
            },
            {
                "nombre": "Posta de Salud Rural San Vicente",
                "tipo": "Posta de salud rural",
                "nota": "Atención rural en horario diurno, en el sector San Vicente"
            },
            {
                "nombre": "Hospital Dr. Sótero del Río",
                "tipo": "Hospital público",
                "nota": "Está en Puente Alto, comuna vecina (Av. Concha y Toro 3459), cruzando el puente: es la urgencia 24 h adulto y pediátrica más cercana a Pirque"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Pirque: parcelas, caminos interiores y la urgencia al otro lado del puente",
            "parrafos": [
                "Pirque es rural y extensa: 445,3 km² donde una dirección puede quedar lejos de la siguiente, entre viñas y caminos interiores hacia El Principal, Santa Rita, San Vicente y La Puntilla. El equipo entra en auto hasta el portón por el camino que corresponda y descarga ahí la camilla; ayuda que nos des una referencia, porque la numeración rural no siempre es fácil de ubicar.",
                "Predominan las casas en terreno propio y las parcelas, con trayectos largos desde el camino hasta la puerta; la caminata de práctica se hace dentro del mismo predio. Si la entrada tiene peldaños o el terreno es irregular, lo revisamos en la evaluación inicial gratuita. Hacia El Principal y Río Clarillo el piedemonte sube, así que la marcha en pendiente se entrena con lo que tienes afuera.",
                "La red comunal es de atención primaria, en horario diurno: el CESFAM Dr. José Manuel Balmaceda en Av. Virginia Subercaseaux, el consultorio rural El Principal y las postas de La Puntilla, Santa Rita y San Vicente; la urgencia del CESFAM atiende hasta medianoche y lo que pase después se resuelve cruzando el puente de Av. Concha y Toro, en el Hospital Dr. Sótero del Río de Puente Alto. Ante un cuadro grave, el 131 del SAMU va antes que cualquier traslado. Tras un alta allá, el plan continúa aquí con la epicrisis a la vista: KINEUM cobra de forma particular y no depende de ningún centro de la comuna."
            ]
        },
        "especialidades": [],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Pirque y El Principal | KINEUM",
            "description": "Kinesiología a domicilio en Pirque: El Principal, La Puntilla, Santa Rita y San Vicente. Evaluación inicial gratuita y boleta para tu reembolso.",
            "keywords": [
                "kinesiólogo a domicilio Pirque",
                "kinesiología a domicilio Pirque",
                "kinesiólogo Pirque",
                "kinesiólogo El Principal Pirque",
                "fisioterapia a domicilio Pirque",
                "rehabilitación a domicilio Pirque",
                "kinesiólogo adulto mayor Pirque",
                "kinesiología respiratoria Pirque"
            ]
        }
    },
    "san-jose-de-maipo": {
        "centrosSalud": [
            {
                "nombre": "Complejo Hospitalario San José de Maipo",
                "tipo": "hospital público",
                "nota": "Servicio de urgencia dentro de la comuna, para adultos y niños; el hospital no publica su horario, conviene confirmarlo antes de ir."
            },
            {
                "nombre": "Hospital Dr. Sótero del Río",
                "tipo": "hospital público",
                "nota": "Está en Puente Alto, bajando por la Ruta G-25: urgencia 24 h, adulto y pediátrica."
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en San José de Maipo: el Cajón, kilómetro a kilómetro",
            "parrafos": [
                "En San José de Maipo casi todos viven en casa: parcelas, sitios amplios y casas aisladas, casi sin blocks ni ascensores. El kinesiólogo rara vez enfrenta escaleras comunes, pero sí portones, antejardines largos y accesos en pendiente, porque muchas casas quedan sobre terrazas del río o en la ladera. La camilla y el equipamiento son portátiles: avísanos si el acceso desde el camino es largo o de tierra.",
                "Todo se ordena a lo largo de la Ruta G-25: desde el cruce de La Obra hasta San Gabriel, las localidades quedan separadas por kilómetros de camino y no hay Metro en la comuna. Bajar a un centro de rehabilitación en Santiago, a unos 48 km del pueblo, ocupa el día entero. KINEUM está ampliando su cobertura hacia el Cajón: primero confirmamos si llegamos a tu localidad.",
                "Y el alta casi nunca ocurre acá: se da bajando por la G-25, en Puente Alto o en Santiago, y volver dos o tres veces por semana a control repite ese viaje. La continuidad depende de que suba el kinesiólogo, con la epicrisis y las indicaciones que te entregaron al bajar. Trabajamos de manera particular, sin convenio con hospitales ni Isapres. Ante una urgencia, llama al SAMU 131: el Complejo Hospitalario San José de Maipo atiende urgencia en la comuna, adultos y niños, aunque no publica su horario; la otra queda en Puente Alto, en el Hospital Dr. Sótero del Río."
            ]
        },
        "especialidades": [],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en San José de Maipo y el Cajón",
            "description": "Ampliamos la cobertura al Cajón del Maipo: kinesiólogo a domicilio en San José de Maipo, La Obra y San Alfonso. Evaluación inicial gratuita, escríbenos.",
            "keywords": [
                "kinesiólogo a domicilio San José de Maipo",
                "kinesiología a domicilio Cajón del Maipo",
                "kinesiólogo San José de Maipo",
                "rehabilitación a domicilio San José de Maipo",
                "kinesiólogo a domicilio El Canelo",
                "kinesiólogo a domicilio San Alfonso",
                "kinesiología adulto mayor San José de Maipo"
            ]
        }
    },
    "paine": {
        "centrosSalud": [
            {
                "nombre": "CESFAM Dr. Miguel Solar",
                "tipo": "CESFAM",
                "nota": "Atención primaria en Paine centro; no es servicio de urgencia. Confirma el horario vigente"
            },
            {
                "nombre": "SAPU Paine (Av. General Baquedano 214)",
                "tipo": "Servicio de urgencia primaria (SAPU)",
                "nota": "Adosado al CESFAM Dr. Miguel Solar. Según la información municipal atiende de 17:30 a 08:00 en días hábiles y 24 horas continuas sábados, domingos y festivos; conviene confirmar el horario vigente"
            },
            {
                "nombre": "CESFAM Dr. Raúl Moya (Diego Portales s/n)",
                "tipo": "CESFAM",
                "nota": "Atención primaria en la localidad de Hospital, dentro de la comuna de Paine. Confirma el horario vigente"
            },
            {
                "nombre": "Servicio de Urgencia Rural (SUR) del CESFAM Dr. Raúl Moya",
                "tipo": "Servicio de urgencia primaria (SUR)",
                "nota": "Urgencia rural en la localidad de Hospital; su horario es limitado y conviene confirmarlo antes de necesitarlo"
            },
            {
                "nombre": "Posta de Salud Rural de Huelquén (Santa Filomena s/n)",
                "tipo": "Posta de salud rural",
                "nota": "Atención rural para el sector oriente de la comuna; su horario es limitado y conviene confirmarlo"
            },
            {
                "nombre": "Posta de Salud Rural de Chada (Camino Chada s/n)",
                "tipo": "Posta de salud rural",
                "nota": "Atención rural hacia el sector sur poniente, camino a Aculeo; su horario es limitado y conviene confirmarlo"
            },
            {
                "nombre": "Hospital San Luis de Buin-Paine",
                "tipo": "Hospital público",
                "nota": "Urgencia de adultos 24 h y la urgencia hospitalaria más cercana. Está en Buin, a unos 8 km del centro de Paine"
            },
            {
                "nombre": "Hospital Dr. Exequiel González Cortés",
                "tipo": "Hospital público",
                "nota": "Urgencia pediátrica 24 h de referencia de la red sur. Está en San Miguel, fuera de la comuna"
            },
            {
                "nombre": "Hospital y CRS El Pino",
                "tipo": "Hospital público",
                "nota": "Urgencia adulto y pediátrica 24 h. Está en San Bernardo, fuera de la comuna"
            }
        ],
        "hub": {
            "h2": "Kinesiólogo a domicilio en Paine: distancias largas y la urgencia en Buin",
            "parrafos": [
                "De Paine centro a Aculeo, a Rangue o a Champa hay varios kilómetros de camino, así que la hora se acuerda con anticipación. El kinesiólogo llega por la Ruta 5 Sur y toma después el camino interior que tú indiques; cuando el domicilio no tiene número visible, basta con dar un cruce o el nombre del camino.",
                "Predominan casas de uno o dos pisos, parcelas y condominios bajos, casi sin edificios con ascensor: la camilla habitualmente entra a nivel y la sesión se monta en el comedor o en el corredor techado. Para urgencias, el SAPU de Paine, adosado al CESFAM Dr. Miguel Solar en Av. General Baquedano 214, atiende de noche en días hábiles y de forma continua los fines de semana y festivos, según la información municipal; el servicio de urgencia rural del CESFAM Dr. Raúl Moya, en la localidad de Hospital, tiene horario acotado y conviene confirmarlo. La urgencia de 24 horas más cercana queda en Buin, a unos 8 km del centro de Paine. Ante falta de aire, dolor al pecho o un lado del cuerpo que deja de responder, marca el 131.",
                "Cuando el alta ocurre fuera de la comuna, en Buin o en un hospital de Santiago, la vuelta por la Ruta 5 Sur o en el tren ya es suficiente viaje. Ten a mano la epicrisis y lo que indicó tu médico: sobre eso se define el trabajo en la primera visita, que no tiene costo. KINEUM es un servicio particular, sin convenio con esos centros, y la boleta la presentas a tu Isapre o seguro según tu plan."
            ]
        },
        "especialidades": [],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Paine y Aculeo | KINEUM",
            "description": "Kinesiólogo a domicilio en Paine: Paine centro, Champa, Huelquén, Chada y Aculeo. Vamos a los sectores rurales con hora fija y evaluación gratuita.",
            "keywords": [
                "kinesiólogo a domicilio Paine",
                "kinesiología a domicilio Paine",
                "kine a domicilio Paine",
                "rehabilitación a domicilio Paine",
                "kinesiólogo a domicilio Aculeo",
                "kinesiólogo a domicilio Paine centro",
                "kinesiología a domicilio Champa",
                "kinesiólogo Paine reembolso isapre"
            ]
        }
    },
    "calera-de-tango": {
        "centrosSalud": [
            {
                "nombre": "CESFAM Calera de Tango",
                "tipo": "CESFAM",
                "nota": "En la comuna. Atención primaria; no es servicio de urgencia de 24 horas"
            },
            {
                "nombre": "Servicio de Urgencia Rural (SUR) de Calera de Tango",
                "tipo": "Servicio de urgencia primaria (SAPU/SAR)",
                "nota": "En la comuna. Funciona de noche en días hábiles y las 24 horas los fines de semana y festivos; confirma el horario antes de salir"
            },
            {
                "nombre": "Hospital y CRS El Pino",
                "tipo": "Hospital público",
                "nota": "En San Bernardo, fuera de la comuna. Urgencia 24 horas; es la más cercana por el oriente"
            },
            {
                "nombre": "Hospital San Luis de Buin y Paine",
                "tipo": "Hospital público",
                "nota": "En Buin, fuera de la comuna. Urgencia 24 horas"
            },
            {
                "nombre": "Hospital Dr. Exequiel González Cortés",
                "tipo": "Hospital público",
                "nota": "En San Miguel, fuera de la comuna. Hospital pediátrico de la red pública, a bastante distancia de Calera de Tango"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Calera de Tango: parcelas, caminos y distancias",
            "parrafos": [
                "Calera de Tango está a unos 26 kilómetros al sur del centro de Santiago y no tiene estación de metro: la más cercana, Hospital El Pino, está en San Bernardo. Rehabilitarse fuera significa un viaje completo por sesión; que el kinesiólogo llegue con camilla y equipamiento portátil convierte ese traslado en minutos de trabajo.",
                "Acá predominan las viviendas de uno o dos pisos, sin edificios con ascensor: pesa menos el trabajo de escalera que los traslados dentro de la casa y la marcha en terreno propio. En las parcelas, el trecho entre la reja y la puerta suele ser largo, y ese mismo recorrido puede servir de circuito de práctica cuando el kinesiólogo lo estima seguro; en la evaluación inicial gratuita se revisa antes de proponerlo. En el pueblo, San Ignacio o Bajos de San Agustín la hora se acuerda con anticipación.",
                "El Servicio de Urgencia Rural no atiende las 24 horas todos los días: funciona de noche en días hábiles y las 24 horas los fines de semana y festivos. Ante una emergencia, incluso con niños, llama al SAMU (131) o ve a la urgencia más cercana: ahí derivan si corresponde. Tras una hospitalización fuera de la comuna, cada control suma otro viaje: por eso la continuidad se arma en casa desde la primera semana, con las indicaciones del alta, las radiografías y las ayudas técnicas que trajiste. KINEUM atiende de forma particular, sin convenio con hospitales ni clínicas."
            ]
        },
        "especialidades": [],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Calera de Tango | KINEUM",
            "description": "Kinesiología a domicilio en Calera de Tango: San Ignacio, Bajos de San Agustín y Camino a Lonquén. Evaluación inicial gratuita, lunes a domingo.",
            "keywords": [
                "kinesiólogo a domicilio Calera de Tango",
                "kinesiología a domicilio Calera de Tango",
                "kine a domicilio Calera de Tango",
                "kinesiología domiciliaria Calera de Tango",
                "rehabilitación a domicilio Calera de Tango",
                "kinesiólogo adulto mayor Calera de Tango",
                "kinesiólogo post operatorio a domicilio Calera de Tango",
                "kinesiólogo a domicilio Bajos de San Agustín"
            ]
        }
    },
    "melipilla": {
        "centrosSalud": [
            {
                "nombre": "Hospital San José de Melipilla",
                "tipo": "hospital público",
                "nota": "Urgencia 24 h, adulto y pediátrica, dentro de la comuna. Confirma su dirección antes de salir."
            },
            {
                "nombre": "CESFAM Dr. Francisco Boris Soler (con SAPU)",
                "tipo": "servicio de urgencia primaria (SAPU/SAR)",
                "nota": "Urgencia primaria en Melipilla. No está informado que funcione las 24 horas: revisa el horario."
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Melipilla: del centro a Pomaire, Mallarauco y Puangue",
            "parrafos": [
                "Melipilla ocupa alrededor de 1.345 km²: la ciudad y el campo se atienden distinto. En el casco urbano —Villa El Portal, Padre Demetrio, Santa Nora— predominan las casas de uno o dos pisos y las villas de acceso plano, más que los edificios con ascensor: el kinesiólogo llega con camilla y equipo portátil y trabaja donde haya piso parejo, el corredor o el patio. Hacia el cerro Chololo la calle empina, y esa pendiente se usa para entrenar la marcha.",
                "En Pomaire, Bollenar, Mallarauco, Codigua o Puangue las casas están repartidas y la dirección se da por kilómetro o por una referencia del camino: antes de la primera visita acordamos el punto exacto y quién abre el portón. Sin Metro en la comuna, ese viaje al centro se hace en auto, bus interurbano o colectivo, y es justo el que te ahorras. Si vienes saliendo del Hospital San José, muestra la epicrisis y la pauta de tu médico en la primera evaluación, que no tiene costo. KINEUM no pertenece a la red de ese hospital; lo contratas directo.",
                "Si algo se agrava entre sesiones —fiebre, ahogo, dolor en el pecho o una caída con golpe—, con estas distancias marca 131 (SAMU) sin esperar. El Hospital San José de Melipilla tiene urgencia 24 horas para adultos y niños; confirma su dirección antes de salir. El SAPU del CESFAM Dr. Francisco Boris Soler ve urgencia primaria; no está informado que atienda toda la noche."
            ]
        },
        "especialidades": [],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Melipilla y Pomaire | KINEUM",
            "description": "Kinesiólogo a domicilio en Melipilla: sesiones en tu casa, en el casco urbano y en Pomaire o Mallarauco. Evaluación inicial gratuita, lunes a domingo.",
            "keywords": [
                "kinesiólogo a domicilio Melipilla",
                "kinesiología a domicilio Melipilla",
                "kine a domicilio Melipilla",
                "kinesiólogo a domicilio Pomaire",
                "kinesiólogo a domicilio Mallarauco",
                "kinesiólogo adulto mayor Melipilla",
                "kinesiología respiratoria a domicilio Melipilla",
                "rehabilitación a domicilio Melipilla"
            ]
        }
    },
    "curacavi": {
        "centrosSalud": [
            {
                "nombre": "Hospital de Curacaví (Hospital Dr. Mauricio Heyermann Cortés), Av. Ambrosio O'Higgins 500",
                "tipo": "Hospital público",
                "nota": "Es el servicio de urgencia de referencia de la comuna. El hospital no publica el horario de su unidad de emergencia, así que conviene confirmarlo antes de ir."
            },
            {
                "nombre": "CECOSF María Salas (sector Cerrillos)",
                "tipo": "Centro comunitario de salud familiar (CECOSF)",
                "nota": "Atención primaria en el sector Cerrillos, dentro de la red del Hospital de Curacaví. No es servicio de urgencia."
            },
            {
                "nombre": "CECOSF Valmi Aguirre",
                "tipo": "Centro comunitario de salud familiar (CECOSF)",
                "nota": "Atención primaria de la red del Hospital de Curacaví. No es servicio de urgencia."
            },
            {
                "nombre": "Hospital San José de Melipilla",
                "tipo": "Hospital público",
                "nota": "Está en Melipilla, fuera de la comuna. Es el hospital de mayor complejidad de la provincia."
            }
        ],
        "hub": {
            "h2": "Atenderse en casa en Curacaví: horarios, caminos y quién acompaña",
            "parrafos": [
                "De lunes a viernes Curacaví se vacía temprano: mucha gente cruza la cuesta Lo Prado rumbo a Santiago. Por eso preguntamos quién estará en la casa a la hora de la sesión: si el paciente pasa el día solo, conviene elegir un bloque en que lo acompañe alguien, porque parte del trabajo se le enseña a quien cuida.",
                "A Cuyuncaví, Patagüilla o Los Panguiles rara vez se llega por calle y número: se entra por caminos interiores como la G-76 y la dirección se explica por referencias, así que confirmamos la ruta antes de salir. En el casco urbano, junto a la Plaza Presidente Balmaceda, predominan las casas de un piso y habitualmente no hay ascensor ni escalera de por medio: basta despejar el comedor o la pieza para instalar la camilla.",
                "La urgencia de la comuna es una sola: el Hospital de Curacaví, en Avenida Ambrosio O'Higgins 500; como no publica su horario, conviene confirmarlo antes de ir. Ante una caída con golpe en la cabeza o un dolor que no cede, no esperes la sesión ni salgas por la Ruta 68 por cuenta propia: primero el SAMU, 131. Cuando el alta la dan fuera de la comuna, lo primero que llega a casa son los papeles: con ellos partimos, y los controles espaciados por la distancia se compensan trabajando entre una fecha y otra. Atendemos de forma particular, sin convenio con el hospital ni los CECOSF."
            ]
        },
        "especialidades": [],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Curacaví, RM | KINEUM",
            "description": "Kinesiología a domicilio en Curacaví: casco urbano y sectores rurales como Cuyuncaví. Evaluación inicial gratuita, boleta reembolsable en Isapre.",
            "keywords": [
                "kinesiólogo a domicilio Curacaví",
                "kinesiología a domicilio Curacaví",
                "kinesiólogo Curacaví",
                "rehabilitación a domicilio Curacaví",
                "kinesiólogo a domicilio Cuyuncaví",
                "kinesiología a domicilio sector rural Curacaví",
                "kinesiólogo particular Curacaví",
                "kinesiólogo a domicilio Provincia de Melipilla"
            ]
        }
    },
    "san-pedro": {
        "centrosSalud": [
            {
                "nombre": "CESFAM San Pedro",
                "tipo": "CESFAM",
                "nota": "Atiende urgencias las 24 horas, dentro de la comuna"
            },
            {
                "nombre": "Posta de Salud Rural de Loica",
                "tipo": "Posta de salud rural",
                "nota": "Atención primaria en el sector de Loica; no funciona como urgencia 24 h"
            },
            {
                "nombre": "Hospital San José de Melipilla",
                "tipo": "Hospital público",
                "nota": "Está en Melipilla, a 44 km del pueblo de San Pedro. Urgencia 24 h adulto y pediátrica"
            }
        ],
        "hub": {
            "h2": "Atenderse en casa en San Pedro: camino interior, portón y parcela",
            "parrafos": [
                "San Pedro es la única comuna 100% rural de la Región Metropolitana y eso se nota desde la dirección: fuera del pueblo y de Avenida Hermosilla, las casas se ubican por camino interior y portón más que por número. Predominan las viviendas de un piso en sitios y parcelas, así que en la mayoría de los casos la camilla y el equipamiento entran sin escaleras ni ascensores; avísanos si el acceso es de tierra o sube hacia los faldeos de la cordillera de la Costa.",
                "La zona es agrícola y famosa por la frutilla: el dolor de espalda, hombros o rodillas suele aparecer en adultos que pasan el día de pie en faenas de campo, y el plan se arma sobre esos gestos. La visita se coordina según agenda, habitualmente dentro de 24 a 48 horas, y cuando hay faenas con tránsito alternado en la Ruta 66 los tiempos pueden alargarse. Si en Loica o El Yali la señal es débil, deja un segundo número al agendar.",
                "Cuando el alta viene de Melipilla, por la Ruta G-60, la continuidad se coordina a distancia: mándanos una foto de la epicrisis por WhatsApp antes de la primera visita y el kinesiólogo llega con el plan armado. Dentro de la comuna, la urgencia que atiende las 24 horas es la del CESFAM San Pedro; en los sectores apartados el municipio ha entregado radios de comunicación para pedir ayuda donde no hay señal."
            ]
        },
        "especialidades": [],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en San Pedro, Melipilla",
            "description": "Kinesiólogo a domicilio en San Pedro, provincia de Melipilla: sesiones en tu casa o parcela, evaluación inicial gratuita y atención de lunes a domingo.",
            "keywords": [
                "kinesiólogo a domicilio San Pedro",
                "kinesiología a domicilio San Pedro Melipilla",
                "kinesiólogo a domicilio Loica",
                "kinesiólogo a domicilio Longovilo",
                "rehabilitación a domicilio San Pedro",
                "kinesiólogo rural Región Metropolitana",
                "kinesiólogo adulto mayor a domicilio San Pedro",
                "kinesiología a domicilio provincia de Melipilla"
            ]
        }
    },
    "alhue": {
        "centrosSalud": [
            {
                "nombre": "Servicio de Urgencia Rural (SUR) Villa Alhué",
                "tipo": "Servicio de urgencia primaria",
                "nota": "La urgencia más cercana dentro de la comuna, en Villa Alhué. El registro del MINSAL no detalla su horario: conviene confirmarlo antes de ir"
            },
            {
                "nombre": "CESFAM Villa Alhué (21 de Mayo 440)",
                "tipo": "CESFAM",
                "nota": "Atención primaria del casco urbano y puerta de entrada a la red pública local"
            },
            {
                "nombre": "CECOSF Hacienda Alhué",
                "tipo": "Centro comunitario de salud familiar",
                "nota": "Atención primaria de apoyo para el sector de Hacienda Alhué"
            },
            {
                "nombre": "Posta de Salud Rural El Asiento",
                "tipo": "Posta de salud rural",
                "nota": "Atención rural para el sector de El Asiento; no es un servicio de urgencia"
            },
            {
                "nombre": "Posta de Salud Rural Pichi",
                "tipo": "Posta de salud rural",
                "nota": "Atención rural para Pichi y los caseríos vecinos; no es un servicio de urgencia"
            },
            {
                "nombre": "Hospital San José de Melipilla",
                "tipo": "Hospital público",
                "nota": "Está en Melipilla, a unos 67 km de Villa Alhué. Urgencia hospitalaria 24 h y hospital de referencia de la comuna"
            },
            {
                "nombre": "SAR Elsa Romo Aravena",
                "tipo": "Servicio de urgencia primaria",
                "nota": "Urgencia primaria de alta resolutividad, también en Melipilla"
            },
            {
                "nombre": "Clínica Los Maitenes (Autopista del Sol km 70)",
                "tipo": "Clínica privada",
                "nota": "Clínica privada en Melipilla, a la orilla de la Autopista del Sol. Solo como referencia"
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en Alhué: caminos largos y casas de un piso",
            "parrafos": [
                "Acá la vivienda rara vez es el problema: predominan casas de un piso, parcelas y caseríos, así que la camilla entra por la puerta y el espacio suele sobrar para trabajar marcha o ejercicios de piso. Lo que pesa es la distancia. Entre Villa Alhué, El Asiento, Pichi o Carén median kilómetros de camino interior, con pendiente y tramos de ripio, y los sectores están repartidos en cinco distritos separados entre sí.",
                "La referencia local es el CESFAM de Villa Alhué, en 21 de Mayo 440, junto al Servicio de Urgencia Rural; hacia los sectores interiores están el CECOSF de Hacienda Alhué y las postas de El Asiento y Pichi. Como la red comunal es de baja complejidad, los cuadros graves terminan derivados al Hospital San José de Melipilla, a unos 67 km. Si alguien se cae en un camino sin vecinos cerca y no logra levantarse, no esperes la sesión: llama al SAMU al 131.",
                "Cuando el alta viene del hospital de Melipilla, el informe y las indicaciones médicas son lo que permite continuar el trabajo acá, con pautas para los días entre visita y visita, porque el control siguiente también queda a 67 km. KINEUM atiende de forma particular y sin convenio con ningún centro, y Alhué todavía no está entre las comunas que cubrimos: escribe al +56 9 9967 9593 para confirmar disponibilidad antes de agendar."
            ]
        },
        "especialidades": [],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en Alhué y Villa Alhué | KINEUM",
            "description": "Kinesiología a domicilio en Alhué, a 139 km de Santiago: Villa Alhué, El Asiento y los sectores interiores. Consulta disponibilidad antes de agendar.",
            "keywords": [
                "kinesiólogo a domicilio Alhué",
                "kinesiología a domicilio Alhué",
                "kinesiólogo Alhué",
                "kinesiólogo a domicilio Villa Alhué",
                "kine a domicilio Alhué",
                "rehabilitación a domicilio Alhué",
                "kinesiólogo adulto mayor Alhué",
                "kinesiólogo postoperatorio Alhué"
            ]
        }
    },
    "maria-pinto": {
        "centrosSalud": [
            {
                "nombre": "CESFAM Adriana Madrid de Costabal (con SAPU)",
                "tipo": "Centro de salud familiar con urgencia primaria",
                "nota": "Es la atención primaria de la comuna y cuenta con SAPU. Confirma su horario de urgencia antes de ir."
            },
            {
                "nombre": "Posta de Salud Rural Chorombo",
                "tipo": "Posta de salud rural",
                "nota": "Atención primaria en el sector de Chorombo; no tiene urgencia 24 h. Consulta su horario antes de trasladarte."
            },
            {
                "nombre": "Posta de Salud Rural Santa Emilia",
                "tipo": "Posta de salud rural",
                "nota": "Atención primaria para Santa Emilia y los sectores vecinos; no tiene urgencia 24 h."
            },
            {
                "nombre": "Posta de Salud Rural Las Mercedes",
                "tipo": "Posta de salud rural",
                "nota": "Atención primaria en Las Mercedes; no tiene urgencia 24 h."
            },
            {
                "nombre": "Hospital San José de Melipilla",
                "tipo": "Hospital público",
                "nota": "Queda en la comuna vecina de Melipilla (Av. Vicuña Mackenna 1268) y es la urgencia hospitalaria más cercana a María Pinto."
            }
        ],
        "hub": {
            "h2": "Kinesiología a domicilio en María Pinto cuando la casa queda en camino rural",
            "parrafos": [
                "María Pinto no se recorre por calles numeradas. La comuna tiene 23 localidades repartidas entre lomas y quebradas de la Cordillera de la Costa, y la dirección rara vez alcanza para llegar: acá la visita se agenda con hora convenida, la ruta por la que se entra —la G-730 hacia Chorombo, la G-76 hacia Bollenar— y algún hito cerca del portón.",
                "El tipo de vivienda manda en cómo se trabaja. Acá predominan las casas en sitio amplio, las parcelas y los hogares aislados en camino rural, no los departamentos con ascensor. El vehículo llega hasta el portón o el patio, y el equipo se instala donde haya piso parejo bajo techo: la pieza principal, un corredor o el galpón. Los recorridos que se entrenan son los de la casa de campo: el desnivel de la puerta, el trecho hasta el portón, la pendiente hacia el camino.",
                "La red local es el CESFAM Adriana Madrid de Costabal, con SAPU, más las postas rurales de Chorombo, Santa Emilia y Las Mercedes; la urgencia hospitalaria más cercana queda en el Hospital San José de Melipilla, comuna vecina. Confirma horarios antes de salir, y ante falta de aire, dolor en el pecho o pérdida súbita de fuerza llama al SAMU 131. Si el alta viene de Melipilla, el viaje de vuelta al campo ya cansó bastante: la primera visita se hace en la casa, con la indicación médica a la vista. La atención es particular, con boleta de honorarios electrónica."
            ]
        },
        "especialidades": [],
        "hubSeo": {
            "title": "Kinesiólogo a Domicilio en María Pinto, Melipilla",
            "description": "Kinesiología a domicilio en María Pinto: pueblo, Los Rulos, Santa Emilia e Ibacache. Evaluación inicial gratuita y visita coordinada en 24 a 48 horas.",
            "keywords": [
                "kinesiólogo a domicilio María Pinto",
                "kinesiología a domicilio María Pinto",
                "kine a domicilio María Pinto",
                "kinesiólogo María Pinto Melipilla",
                "rehabilitación a domicilio María Pinto",
                "kinesiólogo adulto mayor María Pinto",
                "kinesiólogo a domicilio María Pinto isapre",
                "kinesiología rural provincia de Melipilla"
            ]
        }
    }
}
