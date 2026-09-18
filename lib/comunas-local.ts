// Contenido local único por comuna (centros de salud verificados, bloque del hub
// y texto por especialidad). Reduce el texto compartido entre /{especialidad}-{comuna}.

export interface CentroSalud {
    nombre: string
    tipo: string
    nota: string
}

export interface ComunaLocal {
    centrosSalud: CentroSalud[]
    hub: { h2: string; parrafos: string[] }
    especialidades: { slug: string; introLocal: string; faqsLocales: { q: string; a: string }[] }[]
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
    }
}
