/* =====================================================================
   XLATIERRA · CONTENIDO DEL MÓDULO 3
   «Liderazgo y acción climática juvenil»
   ---------------------------------------------------------------------
   Mismas reglas que contenido.js y contenido-m2.js.
   Cada lección tiene refs:[...] con claves de la lista «refs» (al final).
   «general» = conocimiento general o metodológico que no viene de un
   informe específico.
   ===================================================================== */

(function () {

window.XLT_CONTENT = {

course: {
  id: "m3",
  title: "Liderazgo y acción climática juvenil",
  label: "Módulo 3",
  subtitle: "Pasa de la preocupación a la acción: conoce tus derechos, elige una causa, arma un plan, habla con quien decide y cuídate en el camino. Con herramientas prácticas y ejemplos de jóvenes de América Latina.",
  totalTime: "~2 h",
  heroGuide: "nutria",
  certGuide: "nutria",
  plan: ["r14a", "r14b", "r14c", "r14d"]
},

characters: {
  espiritu: {name:"Ameyalli", role:"El espíritu del agua · guía de la aventura", verb:"Descubrir", img:"img/personaje-espiritu.png",
             poses:{feliz:"img/pose-espiritu-feliz.png", pensativo:"img/pose-espiritu-pensativo.png"},
             origin:"Los manantiales: el agua que brota de la tierra y alimenta ríos, humedales y cenotes",
             quote:"¡Cada descubrimiento nos acerca a un planeta mejor!"},
  ajolote:  {name:"Axo", role:"El ajolote experto en entender problemas", verb:"Comprender", img:"img/personaje-ajolote.png",
             poses:{feliz:"img/pose-ajolote-feliz.png", pensativo:"img/pose-ajolote-pensativo.png"},
             origin:"Los humedales de Xochimilco (ajolote, Ambystoma mexicanum)",
             quote:"¡Para cambiar algo, primero hay que entenderlo!"},
  jaguar:   {name:"Balam", role:"El jaguar guardián de los ecosistemas", verb:"Proteger", img:"img/personaje-jaguar.png",
             poses:{feliz:"img/pose-jaguar-feliz.png", pensativo:"img/pose-jaguar-pensativo.png"},
             origin:"La Selva Maya (jaguar, Panthera onca)",
             quote:"¡Tu voz también protege!"},
  nutria:   {name:"Lontra", role:"La nutria exploradora y solucionadora", verb:"Actuar", img:"img/personaje-nutria.png",
             poses:{feliz:"img/pose-nutria-feliz.png", pensativo:"img/pose-nutria-pensativo.png"},
             origin:"Los ríos de México (nutria de río neotropical, Lontra longicaudis)",
             quote:"¡Menos quedarnos con la duda y más ponernos en acción!"}
},

units: [
  {id:"u1", guide:"espiritu", title:"Unidad 1 · Tu voz cuenta", desc:"Por qué la juventud importa, qué derechos la respaldan y dónde se decide."},
  {id:"u2", guide:"ajolote", title:"Unidad 2 · Del problema al proyecto", desc:"Elegir una causa, entenderla, saber quién es quién y armar un plan."},
  {id:"u3", guide:"jaguar", title:"Unidad 3 · Hacer que pase", desc:"Comunicar, hablar con autoridades, pedir información y sumar aliados."},
  {id:"u4", guide:"nutria", title:"Unidad 4 · Seguir actuando", desc:"La acción juvenil sí funciona, lo que nos enseña la naturaleza, cómo cuidarnos y tu plan."}
],

extras: [
  {icon:"🌿", title:"Refugio de líderes", href:"refugio.html", tag:"Para respirar",
   desc:"Respiración guiada, buenas noticias, música y mensajes de ánimo para seguir en el camino."}
],

lessons: [

/* ============================ UNIDAD 1 ============================ */
{ id:"l1", unit:"u1", title:"La generación que puede cambiar el rumbo", time:"8 min",
  refs:["unicefmx2026","unicefLAC","general"],
  blocks:[
  {t:"p", html:"El cambio climático no es algo lejano. Ya está en la vida diaria de América Latina:"},
  {t:"list", items:[
    "💧 <strong>Sequías y falta de agua</strong> que obligan a las familias a cambiar sus actividades de todos los días.",
    "🥵 <strong>Olas de calor</strong> que afectan la salud, la concentración y el rendimiento en la escuela.",
    "🌊 <strong>Inundaciones</strong> que destruyen viviendas, interrumpen clases y golpean más a las comunidades vulnerables.",
    "🌽 <strong>Pérdida de cosechas</strong> y alimentos más caros, que pegan directo en la economía familiar.",
    "🔥 <strong>Contaminación del aire e incendios forestales</strong> que dañan la salud de niñas, niños y jóvenes.",
    "🏞️ <strong>Comunidades indígenas y rurales</strong> que pierden sus territorios, sus recursos naturales y sus formas tradicionales de vida."
  ]},
  {t:"stats", items:[
    {n:"71%", l:"de adolescentes en México percibe que su comunidad enfrenta escasez de agua por el cambio climático", s:"Consulta piloto de U-Report, en UNICEF México y SEMARNAT, 2026, p. 68"},
    {n:"82%", l:"identifica que su comunidad está expuesta a sequías, incendios forestales o calor extremo", s:"UNICEF México y SEMARNAT, 2026, p. 68"},
    {n:"80%", l:"de las personas desplazadas por desastres climáticos son mujeres y niñas", s:"UNICEF LAC, De las palabras a la acción, p. 39"}
  ]},
  {t:"note", kind:"info", title:"Sobre estos datos", html:"La consulta de U-Report fue un piloto de 2024: el propio informe aclara que no es una muestra representativa, pero coincide con lo que documentan otros estudios."},
  {t:"h", text:"Quienes menos lo causaron, más lo viven"},
  {t:"p", html:"Las niñas, niños y adolescentes están entre quienes enfrentan más riesgos por la crisis climática y, al mismo tiempo, quienes menos contribuyeron a causarla. Además, el mismo estudio señala que el <strong>80%</strong> de los cargos de decisión climática los ocupan hombres. Es decir: las personas más afectadas casi nunca están en la mesa donde se decide."},
  {t:"p", html:"Por eso UNICEF México y la SEMARNAT recomiendan <strong>dejar de ver a la infancia y la juventud solo como beneficiarias</strong> y empezar a integrarlas como actores clave de la transformación climática."},
  {t:"deck", title:"¿Mito o realidad?", q:"Seguro has escuchado alguna de estas frases. Decide si es un <strong>mito</strong> o una <strong>realidad</strong>.",
   labels:["Mito","Realidad"], icons:["❌","✅"], win:"¡Perfecto! Ya tienes respuesta para esas frases.", retry:"Bien. Repasa las que fallaste.",
   cards:[
    {t:"Aún eres joven y no entiendes cómo funciona el mundo.", a:0, e:"Entender el mundo no depende de la edad, sino de informarte y preguntar. Muchas decisiones que hoy se toman las vas a vivir tú por más tiempo que nadie."},
    {t:"Esos problemas les tocará solucionarlos a ustedes después.", a:0, e:"El cambio climático ya está pasando, y la juventud ya está actuando hoy, no en el futuro."},
    {t:"Las acciones individuales son inútiles.", a:0, e:"Solas no bastan, pero cuentan: inspiran a otras personas y son el primer paso de las acciones colectivas, que son las que cambian las reglas."},
    {t:"Los jóvenes no tienen experiencia, por eso su opinión no pesa.", a:0, e:"En Costa Rica, jóvenes participaron en la actualización de la meta climática del país y lograron que se incluyeran compromisos sobre empoderamiento climático (lo verás en la lección 12)."},
    {t:"En Colombia, 25 niñas, niños, adolescentes y jóvenes demandaron al Estado y la Corte Suprema reconoció a la Amazonía como sujeto de derechos.", a:1, e:"Pasó en 2018: la sentencia STC4360-2018 ordenó un plan contra la deforestación."},
    {t:"En América Latina existe un tratado que te da derecho a saber qué pasa con el ambiente en tu territorio y a participar en las decisiones.", a:1, e:"Es el Acuerdo de Escazú. Lo verás en la siguiente lección."}
   ]},
  {t:"note", kind:"heart", title:"Lo que nos llevamos", html:"<strong>Nunca eres demasiado joven para transformar tu realidad.</strong> Somos demasiado importantes y tenemos demasiado valor como para dejar que otras personas decidan nuestro futuro sin nuestra participación."},
  {t:"reflect", id:"r1", q:"¿Qué frase de esas has escuchado tú? ¿Qué le responderías ahora?"}
  ]},

{ id:"l2", unit:"u1", title:"Tus derechos para participar", time:"9 min",
  refs:["escazu","delfino2021","paris","glasgowACE","lgcc","general"],
  blocks:[
  {t:"p", html:"Participar en las decisiones ambientales no es un favor que te hacen: <strong>es un derecho</strong>. Y está escrito en acuerdos internacionales y en la ley."},
  {t:"h", text:"El Acuerdo de Escazú"},
  {t:"p", html:"Es el primer tratado ambiental de América Latina y el Caribe. Se adoptó en Escazú, Costa Rica, el <strong>4 de marzo de 2018</strong> y entró en vigor el <strong>22 de abril de 2021</strong>, al sumar 11 ratificaciones. <strong>México es parte.</strong>"},
  {t:"p", html:"Escazú no es solo un tratado para proteger el medio ambiente: también es una herramienta para defender nuestros derechos humanos. Te reconoce tres derechos clave:"},
  {t:"list", items:[
    "📄 <strong>Saber</strong>: acceder a la información sobre lo que sucede en tu territorio.",
    "🗣️ <strong>Participar</strong>: opinar en las decisiones que afectan tu futuro, desde el principio.",
    "⚖️ <strong>Exigir justicia</strong>: reclamar cuando tus derechos ambientales no se respetan."
  ]},
  {t:"p", html:"Además, su <strong>artículo 9</strong> obliga a los países a proteger a las personas que defienden el medio ambiente."},
  {t:"h", text:"El Acuerdo de París y la ACE"},
  {t:"p", html:"El <strong>artículo 12 del Acuerdo de París</strong> pide a los países cooperar para mejorar la educación, la formación, la sensibilización, la participación del público y el acceso a la información sobre el clima. A eso, la ONU le llama <strong>Acción para el Empoderamiento Climático (ACE)</strong>. En 2021 se aprobó un programa de trabajo de 10 años para impulsarla, que tiene su revisión intermedia en 2026."},
  {t:"h", text:"En México: la Ley General de Cambio Climático"},
  {t:"p", html:"Su <strong>artículo 109</strong> dice que los tres órdenes de gobierno deben promover la participación corresponsable de la sociedad en la planeación, ejecución y vigilancia de la política de cambio climático. Es decir, también te toca vigilar que se cumpla."},
  {t:"match", title:"¿Qué derecho usas?", q:"Elige qué derecho de Escazú estás usando en cada situación.",
   eco:["📄 Saber","🗣️ Participar","⚖️ Justicia"],
   done:"Los tres derechos se apoyan entre sí: sin información no puedes participar bien, y sin justicia la participación se queda en el papel.",
   items:[
    {n:"Pides al municipio el estudio de impacto ambiental de una obra junto al río de tu colonia.", icon:"🏗️", a:0, e:"Pedir documentos es ejercer tu derecho a la información."},
    {n:"Vas a la consulta pública de un nuevo plan de áreas verdes y dejas tus propuestas.", icon:"🌳", a:1, e:"Opinar en un proceso de decisión es participar."},
    {n:"Tu comunidad presenta una denuncia porque una empresa descarga aguas residuales al río.", icon:"🏭", a:2, e:"Reclamar ante una autoridad cuando se viola la ley es acceso a la justicia."},
    {n:"Preguntas de dónde viene el agua de tu colonia y por qué hay tantos cortes.", icon:"💧", a:0, e:"Es una solicitud de información."},
    {n:"Tu grupo juvenil pide hablar en la sesión de cabildo sobre el plan de residuos.", icon:"🎤", a:1, e:"Es participación en la toma de decisiones."},
    {n:"Una autoridad se niega a darte información pública y presentas un recurso para que te la entreguen.", icon:"📨", a:2, e:"Defender tu derecho cuando te lo niegan también es acceso a la justicia."}
   ]},
  {t:"note", kind:"act", title:"Lo más importante", html:"<strong>No tienes que esperar a ser experta o experto, adulto o funcionario para involucrarte.</strong> Tienes derecho a saber qué sucede en tu territorio, a participar en las decisiones que afectan tu futuro y a exigir justicia cuando tus derechos ambientales no se respetan."}
  ]},

{ id:"l3", unit:"u1", title:"Dónde se decide y cómo entrar", time:"9 min",
  refs:["unfcccYouth","youngo2022","unicefLAC","general"],
  blocks:[
  {t:"p", html:"Las decisiones sobre el clima se toman en muchos niveles: tu escuela, tu municipio, tu país y la ONU. En todos hay lugar para la juventud."},
  {t:"h", text:"En la ONU: YOUNGO y la COY"},
  {t:"p", html:"<strong>YOUNGO</strong> es la circunscripción oficial de niñas, niños y jóvenes ante la Convención de la ONU sobre el Cambio Climático. Desde ahí, jóvenes de todo el mundo dan seguimiento a las negociaciones, preparan propuestas y hablan con las delegaciones de los países. El secretariado de la Convención le dio un estatus provisional antes de la COP15 (2009) y se confirmó en 2011."},
  {t:"p", html:"Antes de cada COP se hace la <strong>Conferencia de la Juventud (COY)</strong>, donde jóvenes de todo el mundo se preparan y juntan sus demandas. Ocurre año con año desde la COP11, en 2005."},
  {t:"h", text:"En tu país y tu región: LCOY y RCOY"},
  {t:"p", html:"Las <strong>Conferencias Locales de la Juventud sobre Cambio Climático (LCOY)</strong> son espacios organizados por y para jóvenes, donde aprenden, intercambian experiencias y construyen propuestas frente a la crisis climática. Forman parte del proceso internacional de YOUNGO y se conectan con las conferencias regionales (RCOY) y la global (COY)."},
  {t:"p", html:"Pero una LCOY no es solo un evento: es una oportunidad para identificar los problemas de tu comunidad, construir soluciones colectivas y llevarlas a donde se toman las decisiones. En una LCOY se puede:"},
  {t:"list", items:[
    "Construir declaraciones y propuestas de política climática desde la mirada joven.",
    "Conectar con otras personas jóvenes, organizaciones, comunidades y activistas.",
    "Desarrollar habilidades de liderazgo, negociación e incidencia.",
    "Llevar las preocupaciones y propuestas locales a conversaciones regionales e internacionales."
  ]},
  {t:"p", html:"En América Latina, la <strong>cumbre regional de juventudes (RCOY LAC)</strong> nació en mayo de 2021. Su declaración reunió a más de 600 jóvenes y su petición pasó de 40,000 firmas."},
  {t:"match", title:"De tu colonia a la ONU", q:"¿En qué nivel está cada espacio?",
   eco:["🏘️ Local","🇲🇽 Nacional","🌎 Regional","🌐 Mundial"],
   done:"No tienes que empezar en la ONU. Lo local es donde más rápido se ven los cambios, y desde ahí se conecta con todo lo demás.",
   items:[
    {n:"El club ambiental de tu escuela", icon:"🏫", a:0, e:"Es tu espacio más cercano."},
    {n:"Una sesión de cabildo de tu municipio", icon:"🏛️", a:0, e:"El municipio es el gobierno más cercano a tu colonia."},
    {n:"La LCOY de tu país", icon:"🎤", a:1, e:"Las conferencias locales suelen organizarse a nivel país."},
    {n:"La RCOY de Latinoamérica y el Caribe", icon:"🌎", a:2, e:"Reúne a juventudes de toda la región."},
    {n:"La COY y la COP de la ONU", icon:"🌐", a:3, e:"Es el espacio mundial de negociación."}
   ]},
  {t:"h", text:"Cómo sumarte"},
  {t:"p", html:"No necesitas experiencia previa ni pertenecer a una organización. Puedes participar en las convocatorias de la LCOY de tu país, integrarte a los equipos que la organizan, asistir a talleres, aportar propuestas o empezar una iniciativa en tu propia comunidad. Y si en tu zona no hay espacios así, también puedes crearlos."},
  {t:"p", html:"Algunos lugares para empezar:"},
  {t:"list", items:[
    "<strong>LCOY México y las cumbres climáticas juveniles</strong>: para conocer a otras juventudes, participar en diálogos y construir propuestas. Sus convocatorias se publican en <a href='https://www.instagram.com/lcoy_mx/' target='_blank' rel='noopener'>@lcoy_mx</a>.",
    "<strong>RCOY Latinoamérica</strong>: conecta organizaciones y juventudes de distintos países para fortalecer capacidades y construir propuestas regionales. Síguela en <a href='https://www.instagram.com/rcoylatam/' target='_blank' rel='noopener'>@rcoylatam</a>.",
    "<strong>U-Report México (UNICEF)</strong>: una plataforma para expresar tu opinión, responder consultas y hacer visibles las preocupaciones de adolescentes y jóvenes.",
    "<strong>YOUNGO</strong>: para acercarte a la incidencia climática internacional.",
    "<strong>Colectivos ambientales</strong> universitarios y comunitarios: de educación ambiental, reforestación, defensa del territorio, justicia climática o conservación.",
    "<strong>Instituto Mexicano de la Juventud (IMJUVE)</strong>: convocatorias, programas y oportunidades de participación juvenil.",
    "<strong>Fridays For Future</strong>: un movimiento internacional con presencia en muchos países, donde puedes sumarte a acciones climáticas."
  ]},
  {t:"read", items:[
    {title:"LCOY México en Instagram", url:"https://www.instagram.com/lcoy_mx/", desc:"Convocatorias de la Conferencia Local de la Juventud sobre Cambio Climático en México.", lang:"ES"},
    {title:"RCOY Latinoamérica en Instagram", url:"https://www.instagram.com/rcoylatam/", desc:"La cumbre regional de juventudes de Latinoamérica y el Caribe.", lang:"ES"},
    {title:"U-Report México (UNICEF)", url:"https://mexico.ureport.in/", desc:"Opina, responde consultas y haz visibles las preocupaciones de las juventudes.", lang:"ES"},
    {title:"YOUNGO (ONU Cambio Climático)", url:"https://unfccc.int/es/node/10605", desc:"Qué es la Conferencia de la Juventud y cómo se conecta con YOUNGO.", lang:"ES"},
    {title:"Instituto Mexicano de la Juventud", url:"https://www.gob.mx/imjuve", desc:"Programas y convocatorias para jóvenes en México.", lang:"ES"},
    {title:"Fridays For Future", url:"https://fridaysforfuture.org", desc:"El movimiento climático juvenil internacional.", lang:"EN"}
  ]},
  {t:"note", kind:"act", title:"Lontra te dice", html:"Lo más importante es entender que no necesitas esperar a tener un cargo o un reconocimiento para empezar a participar."}
  ]},

{ id:"l3b", unit:"u1", soon:true, title:"Participación y saberes de las juventudes indígenas", note:"La estamos construyendo con y desde las voces de las juventudes indígenas"},

/* ============================ UNIDAD 2 ============================ */
{ id:"l4", unit:"u2", title:"Elige tu causa", time:"8 min",
  refs:["unicefmx2026","general"],
  blocks:[
  {t:"p", html:"La crisis climática y ambiental no es algo lejano: está en lo que vives todos los días. El primer paso para actuar es elegir <strong>una</strong> causa que te importe y que puedas atender desde donde estás."},
  {t:"h", text:"Problemas que seguro reconoces"},
  {t:"table", head:["En colonias y comunidades","En las escuelas","En las ciudades"], rows:[
    ["Escasez de agua y cortes frecuentes","Desperdicio de agua y electricidad","Contaminación del aire por vehículos e industrias"],
    ["Basura acumulada y sin separar","Exceso de plásticos de un solo uso","Islas de calor por exceso de concreto y falta de vegetación"],
    ["Ríos, barrancas y cuerpos de agua contaminados","Falta de áreas verdes y de sombra","Transporte público insuficiente y dependencia del auto"],
    ["Pérdida de áreas verdes y tala","Poca educación ambiental y mala separación de residuos","Pérdida de biodiversidad por la expansión urbana"],
    ["Inundaciones por drenajes saturados","Olas de calor que dificultan aprender","Manejo inadecuado de residuos"],
    ["Quema de basura","—","Lluvias extremas, sequías y olas de calor"]
  ]},
  {t:"guess", q:"En la consulta piloto de U-Report (2024), ¿qué porcentaje de adolescentes en México dijo haber sentido más ansiedad por el cambio climático?",
   o:["16%","46%","76%"], a:2, e:"Fue el <strong>76%</strong> (UNICEF México y SEMARNAT, 2026, p. 68). Elegir una causa y actuar en grupo es una de las mejores formas de convertir esa preocupación en energía."},
  {t:"h", text:"¿Cómo elegir?"},
  {t:"p", html:"Hazte tres preguntas:"},
  {t:"list", items:[
    "❤️ <strong>¿Me mueve?</strong> Vas a dedicarle tiempo; que sea algo que de verdad te importe.",
    "📍 <strong>¿Está cerca?</strong> Que puedas verlo, medirlo y trabajar con la gente que lo vive.",
    "🎯 <strong>¿Puedo influir?</strong> Empieza por algo que esté a tu alcance. Los problemas enormes se atacan por partes."
  ]},
  {t:"p", html:"Luego conviértelo en un <strong>objetivo concreto</strong>: qué quieres que cambie, dónde, cuánto y para cuándo. No es lo mismo «cuidar el agua» que «lograr que mi escuela repare sus fugas antes de que termine el semestre»."},
  {t:"pick", id:"p4", q:"¿Qué causa te mueve más hoy?", o:[
    "El agua: escasez, cortes o contaminación",
    "La basura y los residuos",
    "Las áreas verdes, los árboles y la biodiversidad",
    "El calor y el aire que respiramos",
    "La movilidad y el transporte",
    "Otra (escríbela abajo)"
  ]},
  {t:"reflect", id:"r4", q:"Escribe tu causa como objetivo concreto: ¿qué quieres que cambie, dónde y para cuándo?"},
  {t:"note", kind:"heart", title:"Si todo parece demasiado grande", html:"No tienes que resolver la crisis climática sola o solo. A veces pensamos que, como no podemos solucionar un problema global, nuestras acciones no valen; pero los cambios colectivos empiezan cuando alguien decide involucrarse. No se trata de que una persona salve el planeta, sino de que muchas reconozcan que pueden transformar su entorno: organizarse en su escuela, recuperar un espacio público, cuidar un área verde o exigir mejores condiciones para su comunidad. No necesitas cambiar el mundo en un día, pero sí puedes empezar a cambiar el lugar donde vives. Y nunca subestimes lo que puede lograr una comunidad cuando deja de sentirse sola y empieza a trabajar unida."}
  ]},

{ id:"l5", unit:"u2", title:"Entiende el problema: el árbol", time:"9 min",
  refs:["cepalMML","general"],
  blocks:[
  {t:"p", html:"Para solucionar un problema, primero necesitamos entender <strong>por qué existe</strong> y <strong>a quién está afectando</strong>. Una herramienta muy usada en proyectos sociales y ambientales de la región es el <strong>árbol de problemas</strong>, que propone la CEPAL en su metodología del marco lógico."},
  {t:"list", items:[
    "🌳 <strong>Tronco</strong>: el problema central.",
    "🌱 <strong>Raíces</strong>: sus causas.",
    "🍃 <strong>Ramas</strong>: sus efectos."
  ]},
  {t:"h", text:"Un ejemplo de toda la región: el agua en las ciudades"},
  {t:"p", html:"Muchas comunidades urbanas de América Latina tienen cortes de agua, suministro irregular, dificultades para conseguir agua potable y desigualdad en cómo se reparte. Aunque las causas cambian de lugar a lugar, una persona joven de México, Colombia, Chile, Perú o cualquier otro país de la región puede reconocerlo en su comunidad."},
  {t:"p", html:"<strong>Problema central (tronco):</strong> acceso insuficiente y desigual al agua potable en las comunidades."},
  {t:"match", title:"Arma el árbol", q:"¿Cada tarjeta es una causa (raíz) o un efecto (rama) del problema?",
   eco:["🌱 Causa","🍃 Efecto"],
   done:"Los problemas ambientales no existen aislados: están conectados con la salud, la educación, la economía y la justicia social.",
   items:[
    {n:"Sobreexplotación de las fuentes de agua", icon:"⛲", a:0, e:"Se saca más agua de la que se recupera: es una causa."},
    {n:"Problemas de higiene y salud", icon:"🩺", a:1, e:"Es una consecuencia de no tener agua suficiente."},
    {n:"Fugas y falta de mantenimiento de la red", icon:"🔧", a:0, e:"El agua se pierde antes de llegar: causa."},
    {n:"Familias que gastan más dinero para conseguir agua", icon:"💸", a:1, e:"Es un efecto en la economía familiar."},
    {n:"Contaminación de ríos, lagos y acuíferos", icon:"🏭", a:0, e:"Reduce el agua disponible: causa."},
    {n:"Clases y actividades diarias interrumpidas", icon:"🏫", a:1, e:"Es un efecto en la vida cotidiana."},
    {n:"Crecimiento urbano desordenado", icon:"🏙️", a:0, e:"Aumenta la demanda donde no hay infraestructura: causa."},
    {n:"Conflictos por el acceso al agua", icon:"⚡", a:1, e:"Es un efecto social del problema."},
    {n:"Sequías y cambios en los patrones de lluvia", icon:"☀️", a:0, e:"El cambio climático también es una de las raíces."},
    {n:"Más desigualdad entre comunidades", icon:"⚖️", a:1, e:"Unas colonias tienen agua y otras no: es un efecto."}
   ]},
  {t:"h", text:"Ahora, voltéalo: el árbol de objetivos"},
  {t:"p", html:"El siguiente paso es reescribir todo en positivo. Las causas se vuelven <strong>medios</strong> (lo que vas a hacer) y los efectos se vuelven <strong>fines</strong> (lo que vas a lograr)."},
  {t:"table", head:["","Árbol de problemas","Árbol de objetivos"], rows:[
    ["🌱 Raíces","Fugas, contaminación, sobreexplotación, reparto desigual","Mejorar la infraestructura, reducir fugas, proteger las fuentes de agua y promover un reparto justo"],
    ["🌳 Tronco","Acceso insuficiente y desigual al agua potable","Acceso suficiente y equitativo al agua potable"],
    ["🍃 Ramas","Problemas de salud, gastos, desigualdad","Mejor salud, menos desigualdad y más bienestar comunitario"]
  ]},
  {t:"reflect", id:"r5", q:"Piensa en tu causa: escribe el problema central, dos causas y dos efectos."}
  ]},

{ id:"l6", unit:"u2", title:"Quién es quién: mapa de actores", time:"8 min",
  refs:["cepalMML","general"],
  blocks:[
  {t:"p", html:"Ningún problema existe en el vacío: hay personas e instituciones que deciden, que se benefician, que se afectan o que pueden ayudar. Hacer un <strong>mapa de actores</strong> te ayuda a saber con quién hablar primero."},
  {t:"p", html:"Para cada actor, pregúntate:"},
  {t:"list", items:[
    "🎯 <strong>¿Cómo le afecta tu propuesta?</strong> ¿Gana o pierde algo?",
    "🧭 <strong>¿Qué postura tiene?</strong> A favor, en contra o sin opinión todavía. Las posturas pueden cambiar.",
    "💪 <strong>¿Cuánta influencia tiene?</strong> Dinero, contactos, poder de decisión o capacidad de convencer a otras personas.",
    "🤝 <strong>¿Qué le importa?</strong> Si entiendes sus intereses, puedes encontrar algo en común."
  ]},
  {t:"note", kind:"info", title:"No te olvides de ti", html:"Ponte también en el mapa. Puede que pienses que tu grupo tiene poca influencia, pero una comunidad organizada y bien informada tiene mucha más fuerza de la que parece."},
  {t:"h", text:"Aliados que no esperabas"},
  {t:"p", html:"A veces pensamos que para impulsar un proyecto ambiental solo podemos acercarnos a organizaciones ecologistas o al gobierno, pero muchas veces los aliados más importantes están mucho más cerca:"},
  {t:"list", items:[
    "👩‍🏫 <strong>Docentes y directivos</strong>: pueden facilitar espacios, conectar con estudiantes y convertir una idea en un proyecto educativo.",
    "🏪 <strong>Comercios y negocios locales</strong>: pueden apoyar con materiales, donaciones, difusión o cambios en sus propias prácticas.",
    "🎓 <strong>Universidades</strong>: ofrecen conocimiento técnico, laboratorios, voluntariado, asesoría y redes.",
    "🌾 <strong>Ejidos y comunidades rurales</strong>: tienen conocimientos fundamentales sobre el territorio, el agua y la biodiversidad.",
    "⛪ <strong>Comunidades religiosas</strong>: cuentan con redes y capacidad de organización.",
    "🏘️ <strong>Vecinas, vecinos y asociaciones de colonos</strong>: conocen los problemas locales y ayudan a construir soluciones.",
    "🧺 <strong>Pequeñas empresas y productores</strong>: pueden impulsar formas de producir y consumir más sostenibles.",
    "🏛️ <strong>Autoridades locales</strong>: pueden facilitar permisos, infraestructura y continuidad."
  ]},
  {t:"p", html:"No todos los aliados necesitan compartir exactamente tus ideas: basta con que compartan el interés por mejorar su comunidad."},
  {t:"match", title:"Mapa de un caso", q:"Tu grupo quiere recuperar el río contaminado de tu colonia. ¿Cómo es más probable que esté cada actor al inicio?",
   eco:["🤝 Aliado probable","🧭 Por convencer","🚧 Posible oposición"],
   done:"En la vida real depende del contexto, y las posturas cambian. Por eso el mapa se actualiza conforme avanzas.",
   items:[
    {n:"Vecinas y vecinos que viven junto al río", icon:"🏘️", a:0, e:"Son quienes más sufren el problema: suelen apoyar."},
    {n:"El área de medio ambiente del municipio", icon:"🏛️", a:1, e:"Tiene la responsabilidad, pero quizá también otras prioridades. Hay que llegar con datos y propuestas."},
    {n:"Una fábrica que descarga aguas residuales al río", icon:"🏭", a:2, e:"Cambiar le cuesta dinero, al menos al principio. Aun así, vale la pena buscar puntos en común."},
    {n:"Una universidad cercana", icon:"🎓", a:0, e:"Puede ayudar a medir la calidad del agua y darle respaldo técnico al proyecto."},
    {n:"Comercios de la zona", icon:"🏪", a:1, e:"Un río limpio puede atraer clientes; hay que mostrarles qué ganan."}
   ]},
  {t:"h", text:"Cómo acercarte a quien no piensa igual"},
  {t:"p", html:"Primero, <strong>escucha antes de intentar convencer</strong>. No todas las personas viven los problemas ambientales desde la misma realidad, y eso no significa que no puedan encontrar puntos en común."},
  {t:"p", html:"En lugar de empezar señalando lo que alguien hace mal, trata de entender qué le preocupa, qué necesita y cómo se relaciona con el problema. Hablar del ahorro de agua desde la economía familiar, por ejemplo, puede abrir una conversación más cercana que empezar con estadísticas del clima."},
  {t:"p", html:"Evita asumir que tienes todas las respuestas: la experiencia de un comerciante, de una agricultora o de una persona mayor puede aportarte conocimientos que no vas a encontrar en un libro."},
  {t:"note", kind:"act", title:"La clave", html:"No busques ganar una discusión: <strong>busca construir una alianza</strong>. A veces el primer paso para transformar una comunidad no es convencer a alguien de pensar como tú, sino encontrar algo que puedan mejorar juntos, aunque tengan razones diferentes para hacerlo."}
  ]},

{ id:"l7", unit:"u2", title:"Tu plan en una hoja", time:"9 min",
  refs:["cepalMML","general"],
  blocks:[
  {t:"p", html:"Ya tienes una causa, entiendes el problema y sabes quién es quién. Ahora toca convertirlo en un plan. No tiene que ser perfecto ni largo: <strong>una hoja bien pensada vale más que un documento que nadie lee</strong>."},
  {t:"h", text:"1. ¿Qué cambio quieres?"},
  {t:"p", html:"Define tu meta a <strong>corto</strong> (unas semanas), <strong>mediano</strong> (unos meses) y <strong>largo plazo</strong> (un año o más). Que sea concreta y que puedas saber si la lograste."},
  {t:"h", text:"2. ¿Quién tiene que cambiar y qué?"},
  {t:"p", html:"Casi todo cambio pasa por tres momentos: que la gente <strong>sepa</strong> del problema, que <strong>le importe</strong> y que <strong>haga</strong> algo distinto. No todas las personas están en el mismo momento, así que piensa qué necesita cada grupo:"},
  {t:"list", items:[
    "👥 <strong>Quienes tienen que cambiar</strong> su forma de actuar (por ejemplo, tus compañeros de escuela).",
    "🗣️ <strong>Quienes influyen en ellos</strong>: profes, familias, amistades, personas que admiran.",
    "🏛️ <strong>Quienes pueden decidir o poner reglas</strong>: la dirección de la escuela, el municipio, una secretaría."
  ]},
  {t:"note", kind:"info", title:"Un consejo", html:"Empieza con acciones fáciles. Hacer algo pequeño, como apagar juntos las luces del salón, ayuda a que a la gente le empiece a importar. Y si alguien recae en sus viejos hábitos, es normal: planéalo desde el inicio y acompáñalo."},
  {t:"h", text:"3. Actividades, responsables y fechas"},
  {t:"table", head:["Actividad","Responsable","Fecha","¿Cómo sabremos que funcionó?"], rows:[
    ["Diagnóstico de fugas en la escuela","Equipo de 3 personas","Semana 1","Lista de fugas con fotos"],
    ["Presentar los resultados a la dirección","Quien coordina","Semana 3","Reunión hecha y acuerdos escritos"],
    ["Campaña en redes y periódico mural","Equipo de comunicación","Semanas 3 a 6","Personas que participaron o compartieron"]
  ]},
  {t:"p", html:"Esta forma de unir actividades, resultados e indicadores viene de la metodología del marco lógico de la CEPAL, que se usa en proyectos de toda la región."},
  {t:"reflect", id:"r7a", q:"Tu meta: ¿qué quieres lograr y para cuándo?"},
  {t:"reflect", id:"r7b", q:"Tres actividades para lograrlo, con quién se encarga de cada una."},
  {t:"reflect", id:"r7c", q:"¿Cómo vas a saber que vas avanzando? (por ejemplo: número de personas, acuerdos firmados, kilos de residuos separados)"},
  {t:"note", kind:"act", title:"¿Quieres ir más a fondo?", html:"Si tu proyecto crece, puedes usar la matriz completa del marco lógico de la CEPAL, que agrega supuestos y medios de verificación. Está en los recursos del módulo."}
  ]},

/* ============================ UNIDAD 3 ============================ */
{ id:"l8", unit:"u3", title:"Comunica para mover, no para asustar", time:"9 min",
  refs:["unicefmx2026","general"],
  blocks:[
  {t:"p", html:"Comunicar bien un problema puede hacer que más personas se sumen. Comunicarlo mal puede hacer que la gente se paralice o deje de escuchar."},
  {t:"h", text:"Errores que vale la pena evitar"},
  {t:"list", items:[
    "😔 <strong>Hacer sentir culpable a la audiencia</strong>: responsabilizar a las personas por sus hábitos sin explicar las causas de fondo.",
    "🧪 <strong>Usar demasiado lenguaje técnico</strong> sin traducirlo a ejemplos cotidianos.",
    "🌪️ <strong>Comunicar solo desde la tragedia</strong>: mostrar incendios e inundaciones sin explicar qué se puede hacer.",
    "🌍 <strong>Dar soluciones demasiado generales</strong>, como «hay que cuidar el planeta», sin decir por dónde empezar.",
    "📍 <strong>No conectar con lo local</strong>: mensajes globales que ignoran las realidades de cada comunidad.",
    "🔁 <strong>Hablar siempre entre las mismas personas</strong>, sin llegar a quienes todavía no están involucrados.",
    "📈 <strong>Confundir alcance con impacto</strong>: miles de reproducciones no significan que alguien aprendió o decidió actuar.",
    "🎙️ <strong>Hablar solo por ti cuando representas a otros</strong>: si vas a un foro en nombre de tu grupo o tu comunidad, lleva la opinión de la mayor cantidad de jóvenes posible y di de dónde viene."
  ]},
  {t:"h", text:"Lo que sí funciona"},
  {t:"list", items:[
    "🧩 <strong>Un dato, una historia y una acción</strong>: algo que se entienda, algo que se sienta y algo que se pueda hacer.",
    "👀 <strong>Mostrar que muchas personas ya lo hacen</strong>: tendemos a hacer lo que vemos hacer a los demás.",
    "⭐ <strong>Que lo reconozca alguien con influencia</strong> en tu comunidad: una maestra, un deportista, una creadora de contenido local.",
    "🎯 <strong>Pensar en quién te escucha</strong>: el mismo mensaje no funciona igual para tus amistades, tu familia o tu municipio."
  ]},
  {t:"table", head:["Plataforma","Formatos que funcionan"], rows:[
    ["TikTok","Videos cortos, historias, tendencias adaptadas y explicaciones sencillas"],
    ["Instagram","Reels, carruseles educativos, infografías, historias y encuestas"],
    ["YouTube","Videos explicativos, entrevistas, documentales cortos y testimonios"],
    ["WhatsApp","Infografías para compartir, materiales descargables, grupos y convocatorias"],
    ["Spotify","Podcasts y conversaciones con jóvenes que trabajan en sus comunidades"]
  ]},
  {t:"p", html:"Algunos formatos que vale la pena impulsar: historias de jóvenes que están resolviendo problemas en sus comunidades, videos de mitos y realidades, carruseles que expliquen lo complejo de forma sencilla, retos colectivos para escuelas y colonias, testimonios de comunidades indígenas, rurales y urbanas, y contenido interactivo para participar, no solo para mirar."},
  {t:"deck", title:"¿Mueve o paraliza?", q:"Lee cada mensaje. ¿Invita a actuar o hace que la gente se sienta sin salida?",
   labels:["Mueve a actuar","Paraliza"], icons:["💪","😶"], win:"¡Perfecto! Sabes reconocer un mensaje que mueve.", retry:"Bien. Repasa las que fallaste.",
   cards:[
    {t:"Ya es demasiado tarde, el planeta no tiene solución.", a:1, e:"Es falso y desanima. Cada décima de grado que se evita importa, y hay soluciones en marcha."},
    {t:"En nuestra colonia se pierde agua por fugas. Este sábado las mapeamos juntos: trae tu celular.", a:0, e:"Tiene un problema local, una acción concreta y una invitación."},
    {t:"Si usas popote eres parte del problema.", a:1, e:"Culpa a la persona sin explicar las causas de fondo ni ofrecer una alternativa."},
    {t:"300 estudiantes ya separan su basura en la escuela. ¿Te sumas esta semana?", a:0, e:"Muestra que muchas personas ya lo hacen e invita a sumarse."},
    {t:"El forzamiento radiativo antropogénico supera los umbrales de estabilidad.", a:1, e:"Demasiado técnico: casi nadie lo entiende ni sabe qué hacer con eso."},
    {t:"Este árbol nos da sombra a la salida de la escuela. Ayúdanos a pedir que no lo talen: firma aquí.", a:0, e:"Conecta con algo cercano y querido, y da un paso fácil."}
   ]},
  {t:"note", kind:"heart", title:"Algo importante", html:"No tratemos a las juventudes latinoamericanas como una audiencia a la que solo hay que enseñarle cosas. También son creadoras de conocimiento, tienen experiencias propias y pueden enseñar muchísimo."}
  ]},

{ id:"l9", unit:"u3", title:"Habla con quien decide", time:"10 min",
  refs:["general"],
  blocks:[
  {t:"p", html:"No necesitas ser una persona experta ni tener un cargo importante para acercarte a una autoridad. <strong>Tienes derecho</strong> a expresar las necesidades de tu comunidad y a proponer soluciones."},
  {t:"h", text:"Antes de la reunión"},
  {t:"list", items:[
    "🔎 <strong>Investiga quién es</strong>: su cargo y sus responsabilidades. No todas las autoridades pueden resolver los mismos problemas.",
    "📋 <strong>Lleva una propuesta clara</strong>: ¿qué problema identificaron?, ¿a quién afecta?, ¿qué solución proponen?",
    "📸 <strong>Prepara datos, fotos o testimonios</strong> que muestren que el problema existe.",
    "🎯 <strong>Define qué necesitas</strong> de esa reunión: apoyo económico, permisos, materiales, difusión o simplemente un primer contacto.",
    "🧭 <strong>Piensa qué le importa a esa persona</strong> y qué podría ganar con tu propuesta. Ten claro también qué es lo mínimo que tu grupo aceptaría.",
    "👥 <strong>Si van en equipo</strong>, repartan responsabilidades para que todas y todos participen."
  ]},
  {t:"h", text:"Durante la reunión"},
  {t:"list", items:[
    "👕 Vístete cómodo, limpio y presentable. No necesitas ropa formal ni gastar dinero para demostrar profesionalismo.",
    "🗣️ Habla con respeto, claridad y seguridad. Firme, pero sin agresividad.",
    "🧩 Empieza por los puntos en los que es más fácil estar de acuerdo.",
    "👂 Escucha las respuestas y toma notas.",
    "📅 Haz preguntas concretas y pide acuerdos con fechas y responsables.",
    "🙏 Agradece el tiempo, sin importar el resultado."
  ]},
  {t:"h", text:"Qué evitar"},
  {t:"list", items:[
    "Llegar sin conocer el problema o sin una propuesta.",
    "Prometer resultados que todavía no puedes garantizar.",
    "Convertir la reunión en una confrontación personal.",
    "Aceptar compromisos vagos como «después lo revisamos» sin fijar un siguiente paso.",
    "Pensar que, por ser joven, debes hablar menos o dejar que otras personas representen tus ideas."
  ]},
  {t:"deck", title:"¿Suma o resta?", q:"Estas son actitudes en una reunión con una autoridad. ¿Ayudan a construir un acuerdo o lo complican?",
   labels:["Suma","Resta"], icons:["➕","➖"], win:"¡Perfecto! Llegas lista o listo para tu reunión.", retry:"Bien. Repasa las que fallaste.",
   cards:[
    {t:"Compartir la información que tienes y preguntar qué necesita la otra parte.", a:0, e:"Buscar beneficios para ambas partes hace más grande el pastel para todos."},
    {t:"Negarte a escuchar hasta que acepten todas tus demandas.", a:1, e:"Cerrarse a cualquier acuerdo suele terminar sin nada."},
    {t:"Llevar dos o tres propuestas distintas, todas sencillas.", a:0, e:"Da opciones y facilita que digan que sí a alguna."},
    {t:"Exagerar los datos para que suene más grave.", a:1, e:"Si te descubren, pierdes credibilidad. Los datos verificables son tu mejor herramienta."},
    {t:"Proponer que tu grupo ayude con una parte del trabajo.", a:0, e:"Muestra disposición para colaborar, no solo para pedir."},
    {t:"Irte sin fecha ni responsable para el siguiente paso.", a:1, e:"Sin un siguiente paso concreto, el tema se pierde."}
   ]},
  {t:"h", text:"Tu propuesta en 30 segundos"},
  {t:"p", html:"A veces tendrás muy poco tiempo para hablar. Prepara tu propuesta en tres frases y practícala en voz alta con un cronómetro:"},
  {t:"reflect", id:"r9a", q:"1. El problema: ¿qué está pasando y dónde?"},
  {t:"reflect", id:"r9b", q:"2. Por qué importa: ¿a quién afecta y cómo?"},
  {t:"reflect", id:"r9c", q:"3. Tu propuesta: ¿qué pides, concretamente, y qué ofrece tu grupo?"},
  {t:"h", text:"¿Y si no responden?"},
  {t:"p", html:"Que una autoridad no responda no significa que tu iniciativa tenga que detenerse. Puedes:"},
  {t:"list", items:[
    "📧 <strong>Dar seguimiento formal</strong>: un correo o mensaje que recuerde la solicitud, la fecha de la reunión y los acuerdos pendientes.",
    "🗂️ <strong>Documentarlo todo</strong>: guarda correos, oficios, fotos, solicitudes y respuestas.",
    "🔀 <strong>Buscar otros canales</strong>: otras áreas de gobierno, representantes comunitarios, universidades u organizaciones.",
    "👥 <strong>Involucrar a la comunidad</strong>: reunir firmas, organizar encuentros vecinales o presentar el problema en colectivo.",
    "📨 <strong>Usar los mecanismos de participación</strong>: solicitudes de información, audiencias, consultas o denuncias, según tu país y municipio.",
    "📣 <strong>Hacerlo visible</strong> en medios y redes, con información verificable y sin exponer innecesariamente a nadie.",
    "🌱 <strong>No abandonar el proyecto</strong>: algunas soluciones pueden empezar en la comunidad mientras llega el apoyo institucional."
  ]},
  {t:"p", html:"Aprende a distinguir entre una autoridad que no tiene la facultad de resolver tu problema, una que necesita más información y una que simplemente no está dando seguimiento."},
  {t:"note", kind:"act", title:"Lo que Balam quiere que recuerdes", html:"No llegues solo a pedir ayuda: llega con conocimiento de tu comunidad, propuestas y disposición para trabajar en conjunto. Una reunión sin respuesta no es el final de una iniciativa. La participación ciudadana requiere persistencia, organización y trabajo colectivo. Las autoridades tienen responsabilidades, y las juventudes tienen derecho a exigir que se cumplan."}
  ]},

{ id:"l10", unit:"u3", title:"Pide información pública", time:"9 min",
  refs:["fundar2026","lgcc","general"],
  blocks:[
  {t:"p", html:"No se puede transformar lo que no conocemos. Pedir información al gobierno te permite entender qué está pasando en tu comunidad, saber quién es responsable y construir propuestas basadas en evidencia. <strong>Es un derecho</strong>, y en México se ejerce a través de la Plataforma Nacional de Transparencia."},
  {t:"h", text:"Lo que cambió en 2025"},
  {t:"list", items:[
    "📜 El 20 de marzo de 2025 se publicó la nueva Ley General de Transparencia.",
    "🏛️ El INAI desapareció. Sus funciones federales pasaron a «Transparencia para el Pueblo», de la Secretaría Anticorrupción y Buen Gobierno.",
    "💻 La Plataforma Nacional de Transparencia sigue funcionando.",
    "🔒 Los motivos para reservar información pasaron de 13 a 17, y ahora hay unas 270 autoridades responsables en el país. Por eso es más importante que nunca pedir con precisión."
  ]},
  {t:"h", text:"Qué puedes pedir"},
  {t:"table", head:["Tema","Ejemplos de preguntas"], rows:[
    ["💧 Agua","¿De dónde viene el agua de mi colonia? ¿Cada cuánto hay cortes y por qué? ¿Qué calidad tiene? ¿Cuántas fugas se reportan y cuántas se reparan?"],
    ["🗑️ Residuos y contaminación","¿Cuánta basura genera el municipio y dónde termina? ¿Qué programas de reciclaje hay? ¿Qué mediciones de calidad del aire existen?"],
    ["🌳 Áreas verdes y biodiversidad","¿Cuántas áreas verdes públicas hay y cómo se mantienen? ¿Qué zonas naturales están amenazadas por el crecimiento urbano?"],
    ["⚠️ Riesgos climáticos","¿Qué zonas son más vulnerables a inundaciones, sequías u olas de calor? ¿Hay mapas de riesgo y planes de protección civil?"],
    ["💰 Presupuesto y decisiones","¿Cuánto presupuesto se destina a la protección ambiental? ¿Qué proyectos ambientales están planeados? ¿Cómo pueden participar las juventudes?"]
  ]},
  {t:"note", kind:"info", title:"Pide documentos, no opiniones", html:"No te quedes en preguntas generales. Pide datos concretos: mapas, estudios, presupuestos, reportes y documentos públicos. Mientras más precisa sea tu solicitud, más difícil es que te respondan con evasivas."},
  {t:"h", text:"Paso a paso"},
  {t:"list", items:[
    "1️⃣ Entra a la Plataforma Nacional de Transparencia y crea tu cuenta.",
    "2️⃣ Ve a «Solicitudes» y elige «Acceso a la información».",
    "3️⃣ Elige la institución: federal (como SEMARNAT o CONAGUA), de tu estado o de tu municipio.",
    "4️⃣ Describe con precisión el documento o los datos que quieres. Si puedes, pídelos en formato abierto, como una hoja de cálculo.",
    "5️⃣ Elige recibir la respuesta por la misma plataforma, que es gratis.",
    "6️⃣ Guarda tu número de folio y revisa la fecha límite de respuesta.",
    "7️⃣ Si la respuesta está incompleta o te la niegan, tienes 15 días para presentar un recurso de revisión."
  ]},
  {t:"cta", icon:"🔍", title:"Plataforma Nacional de Transparencia", html:"Donde se hacen las solicitudes de información pública en México.", href:"https://www.plataformadetransparencia.org.mx/", btn:"Ir", ext:true},
  {t:"guess", q:"Si una autoridad te niega información o te da una respuesta incompleta, ¿cuánto tiempo tienes para presentar un recurso de revisión?",
   o:["3 días","15 días","6 meses"], a:1, e:"Tienes <strong>15 días</strong> (Fundar, 2026). Por eso conviene revisar tus respuestas en cuanto lleguen."},
  {t:"reflect", id:"r10", q:"Escribe tu primera solicitud: ¿a qué institución se la mandarías y qué le pedirías exactamente?"},
  {t:"note", kind:"act", title:"Lontra te dice", html:"Tener acceso a la información ambiental también es una forma de ejercer tus derechos y defender a tu comunidad."}
  ]},

{ id:"l11", unit:"u3", title:"Suma aliados y haz crecer tu grupo", time:"8 min",
  refs:["general"],
  blocks:[
  {t:"p", html:"Nadie cambia las cosas en soledad. Los grandes cambios vienen de grupos que se organizan, crecen y se sostienen en el tiempo."},
  {t:"h", text:"Dos formas de moverse, mejor juntas"},
  {t:"table", head:["","Movilización masiva","Organización con estructura"], rows:[
    ["Qué logra","Cambia la opinión pública: hace que mucha gente hable del tema","Logra cambios concretos en reglas, presupuestos o políticas"],
    ["Cómo crece","Con acciones visibles que atraen a mucha gente rápido","Formando liderazgos y equipos con tareas claras"],
    ["Su riesgo","Se desinfla rápido si no hay a dónde invitar a quienes llegan","Crece lento y puede volverse cerrada"]
  ]},
  {t:"p", html:"La clave está en combinarlas: usa las acciones visibles para atraer gente, y ten lista una estructura para recibirla, formarla y darle algo que hacer."},
  {t:"h", text:"Lo que no le puede faltar a tu grupo"},
  {t:"list", items:[
    "🎯 <strong>Un propósito compartido</strong>: que todas y todos sepan qué buscan.",
    "📖 <strong>Una historia que los una</strong>: cómo explican quiénes son y por qué hacen lo que hacen.",
    "🎨 <strong>Una identidad reconocible</strong>: nombre, imagen y forma de hablar.",
    "🧑‍🤝‍🧑 <strong>Roles claros</strong>, para que el trabajo no caiga siempre en las mismas personas.",
    "📋 <strong>Actividades fáciles de repetir</strong>, con instrucciones que cualquiera pueda seguir.",
    "🌱 <strong>Una forma de recibir y formar</strong> a quienes se suman."
  ]},
  {t:"match", title:"¿Qué rol es?", q:"Elige qué rol del equipo hace cada tarea.",
   eco:["👋 Bienvenida","📱 Redes","🤝 Vinculación","💰 Recursos"],
   done:"Al principio una persona puede tener varios roles. Lo importante es que estén claros y que se roten.",
   items:[
    {n:"Escribirle a quien se acaba de unir y explicarle cómo participar", icon:"✉️", a:0, e:"Recibir bien a la gente evita que se vaya."},
    {n:"Publicar la convocatoria de la jornada de limpieza", icon:"📢", a:1, e:"Es comunicación en redes."},
    {n:"Pedir una reunión con el área de medio ambiente del municipio", icon:"🏛️", a:2, e:"Es relación con instituciones."},
    {n:"Conseguir que un negocio local done bolsas y guantes", icon:"🧤", a:3, e:"Es conseguir recursos."},
    {n:"Responder los mensajes de quienes preguntan cómo sumarse", icon:"💬", a:0, e:"También es bienvenida."},
    {n:"Buscar una convocatoria que financie proyectos juveniles", icon:"🔎", a:3, e:"Es búsqueda de recursos."}
   ]},
  {t:"h", text:"¿Qué tipo de apoyo necesitas?"},
  {t:"list", items:[
    "🧠 <strong>Conocimiento</strong>: universidades, especialistas, organizaciones con experiencia.",
    "💰 <strong>Dinero o materiales</strong>: convocatorias, fondos, negocios locales.",
    "📣 <strong>Difusión</strong>: medios locales, creadores de contenido, escuelas.",
    "🏠 <strong>Espacio</strong>: salones, parques, centros comunitarios."
  ]},
  {t:"reflect", id:"r11", q:"Si hoy empezaras tu grupo: ¿qué tres personas invitarías primero y qué rol tendría cada una?"},
  {t:"cta", icon:"🗺️", title:"Explora proyectos de la región", html:"Pronto, un directorio de iniciativas para sumarte o inspirarte.", href:"proyectos.html", btn:"Ver"}
  ]},

/* ============================ UNIDAD 4 ============================ */
{ id:"l12", unit:"u4", title:"La acción juvenil sí funciona", time:"10 min",
  refs:["smithsonian2021","unicefLAC","anla2018","primicias2023","general"],
  blocks:[
  {t:"h", text:"Sara: de una conferencia local a la meta climática de su país"},
  {t:"p", html:"Sara Cognuck creció en Peñas Blancas, en el Pacífico de Costa Rica, rodeada de naturaleza. Se convirtió en promotora y coordinadora de la <strong>LCOY de Costa Rica</strong>, parte de YOUNGO, y lideró la participación de las juventudes en la actualización de la <strong>NDC</strong>, el plan climático que cada país presenta ante la ONU."},
  {t:"p", html:"Gracias a ese proceso se integraron compromisos sobre <strong>empoderamiento climático</strong>, y el gobierno se comprometió a crear un mecanismo para que la participación juvenil sea permanente. Las juventudes también participaron en el Plan Nacional de Adaptación. Además, Sara cofundó la Red Costarricense de Juventudes y Cambio Climático."},
  {t:"stats", items:[
    {n:"70", l:"adolescentes y jóvenes participaron en la LCOY Costa Rica 2019", s:"UNICEF LAC, De las palabras a la acción, p. 28"},
    {n:"357+", l:"personas respondieron la encuesta juvenil que alimentó las propuestas", s:"UNICEF LAC, De las palabras a la acción, p. 28"}
  ]},
  {t:"p", html:"Su historia muestra el camino completo de este módulo: <strong>empezar en un espacio local, organizarse y terminar influyendo en las decisiones de un país.</strong>"},
  {t:"h", text:"Más logros de jóvenes en América Latina"},
  {t:"table", head:["País","Qué lograron","Cómo"], rows:[
    ["🇨🇴 Colombia","La Corte Suprema reconoció a la Amazonía colombiana como sujeto de derechos y ordenó un plan contra la deforestación (2018)","Demanda de 25 niñas, niños, adolescentes y jóvenes"],
    ["🇪🇨 Ecuador","Propuestas juveniles presentadas a la Comisión de Biodiversidad de la Asamblea Nacional para la Ley Orgánica de Cambio Climático","Cumbre nacional de 40 jóvenes con el Ministerio del Ambiente y UNICEF"],
    ["🇪🇨 Ecuador","El 58.95% votó por dejar el petróleo bajo tierra en el Yasuní-ITT (2023)","Consulta popular"],
    ["🇨🇴 Colombia","Medidores de calidad del aire de bajo costo (125 USD) para que la ciudadanía monitoree","Ciencia ciudadana con el proyecto Nuevos Aires"],
    ["🌎 Caribe","Campaña sobre clima y salud con jóvenes embajadores","Red juvenil de la campaña HEY"]
  ]},
  {t:"guess", q:"¿Cuántas niñas, niños, adolescentes y jóvenes presentaron la demanda que llevó a reconocer a la Amazonía colombiana como sujeto de derechos?",
   o:["3","25","2,500"], a:1, e:"Fueron <strong>25</strong>. No hacen falta multitudes para lograr un cambio histórico: hace falta organización, información y persistencia."},
  {t:"note", kind:"act", title:"Y tú también puedes", html:"Ninguna de estas historias empezó con un gran presupuesto o con personas famosas. Empezaron con jóvenes que se informaron, se organizaron y no se rindieron."},
  {t:"cta", icon:"🌿", title:"Más buenas noticias en el Refugio de líderes", html:"Logros, especies que regresan y noticias que dan esperanza, siempre con su fuente.", href:"refugio.html#noticias", btn:"Ver"}
  ]},

{ id:"l12b", unit:"u4", title:"La naturaleza ya lo resolvió: liderar por turnos", time:"5 min",
  refs:["portugal2014","voelkl2015"],
  blocks:[
  {t:"p", html:"La naturaleza lleva millones de años resolviendo problemas. Observarla nos da ideas para nuestros propios retos, también para la forma en que nos organizamos."},
  {t:"h", text:"🌿 El problema"},
  {t:"p", html:"Las aves migratorias recorren distancias enormes. Volar cansa, y volar al frente cansa más, porque nadie te ayuda a cortar el aire."},
  {t:"h", text:"🐦 Cómo lo resuelven los ibis"},
  {t:"p", html:"Los ibis vuelan en <strong>formación en V</strong>. Un estudio publicado en <em>Nature</em> en 2014 encontró que cada ave se coloca y sincroniza su aleteo para aprovechar el aire que sube detrás de la que va adelante, lo que les ahorra esfuerzo."},
  {t:"p", html:"Y hay algo más: un estudio de 2015 en <em>PNAS</em> observó que los ibis <strong>se turnan para ir al frente</strong>. Cambian de posición con frecuencia, y el tiempo que cada uno pasa adelante es parecido al que pasa atrás, aprovechando el esfuerzo del otro."},
  {t:"guess", q:"Según el estudio de 2015, ¿cómo se reparten los ibis el trabajo de ir adelante?",
   o:["Siempre lidera el ave más fuerte","Se turnan, y el tiempo adelante es parecido al tiempo atrás","Lideran solo las aves más jóvenes"], a:1, e:"Se turnan con frecuencia, y cada ave pasa al frente un tiempo parecido al que pasa detrás. Los autores lo interpretan como cooperación, aunque aclaran que un solo estudio no lo prueba del todo."},
  {t:"h", text:"🤝 Lo que nos enseña"},
  {t:"list", items:[
    "🔄 <strong>Rota los liderazgos</strong>: que no sean siempre las mismas personas quienes hablan, organizan o cargan con todo.",
    "🪶 <strong>Aprovecha el impulso de tu grupo</strong>: cuando vas atrás, descansas gracias al esfuerzo de otras personas, y luego te toca devolverlo.",
    "🧭 <strong>Volar juntos llega más lejos</strong>: un grupo que se reparte el esfuerzo aguanta el viaje completo."
  ]},
  {t:"reflect", id:"r12b", q:"En tu grupo, escuela o familia, ¿quién carga siempre con la parte más pesada? ¿Cómo podrían turnarse?"}
  ]},

{ id:"l13", unit:"u4", title:"Cuidarnos para seguir", time:"9 min",
  refs:["unicefmx2026","unicefLAC","globalwitness2025","cemda2025","escazu","paho2024","general"],
  blocks:[
  {t:"p", html:"Actuar por el planeta también puede cansar, preocupar o doler. Cuidarte no es un lujo ni algo que se hace cuando sobra tiempo: <strong>tu cuerpo y tu mente son tu principal herramienta</strong>."},
  {t:"h", text:"La ecoansiedad es real"},
  {t:"p", html:"La <strong>ecoansiedad</strong> es una reacción emocional fuerte, como miedo, preocupación, angustia o sensación de impotencia, frente a los efectos del cambio climático. Es una respuesta comprensible ante una crisis real, y conviene atenderla cuando afecta tu bienestar o tu vida diaria."},
  {t:"stats", items:[
    {n:"71%", l:"de casi 1,500 jóvenes de 15 a 35 años en América Latina y el Caribe dijo haber sentido ecoansiedad", s:"Encuesta de la RCOY LAC, en UNICEF LAC, p. 35"},
    {n:"76%", l:"de adolescentes en la consulta piloto de U-Report en México sintió más ansiedad por el cambio climático", s:"UNICEF México y SEMARNAT, 2026, p. 68"}
  ]},
  {t:"h", text:"Cuidarnos en colectivo"},
  {t:"list", items:[
    "👂 <strong>Escucha activa y espacios seguros</strong>: que todas las personas puedan decir cómo se sienten y compartir sus preocupaciones sin ser juzgadas.",
    "⚖️ <strong>Repartir responsabilidades</strong>: que no sean siempre las mismas personas quienes organizan, resuelven problemas o cargan con todo.",
    "🛑 <strong>Respetar los límites</strong>: estudiar, trabajar, descansar y atender la vida personal también son prioridades. Nadie debe sentirse culpable por necesitar una pausa.",
    "🎉 <strong>Celebrar los pequeños logros</strong>: agradecer el trabajo de cada integrante y reconocer que no todo tiene que ser enorme para ser importante.",
    "🤲 <strong>Acompañarse entre pares</strong>: redes donde se pueda pedir ayuda, compartir conocimientos y apoyarse en los momentos difíciles.",
    "💬 <strong>Resolver conflictos con diálogo</strong>: expresar desacuerdos sin ataques personales y construir acuerdos colectivos.",
    "🤝 <strong>Evitar la competencia interna</strong>: el objetivo no es acumular reconocimientos individuales, sino fortalecer el trabajo de toda la comunidad.",
    "🌮 <strong>Convivir fuera del activismo</strong>: momentos divertidos y amistades que no dependan solo del trabajo."
  ]},
  {t:"note", kind:"heart", title:"Algo que vale la pena recordar", html:"El cuidado colectivo no es una actividad extra que se hace cuando sobra tiempo: debe ser parte de cómo organizamos nuestros proyectos desde el principio."},
  {t:"h", text:"Defender el ambiente con seguridad"},
  {t:"p", html:"En algunos lugares, defender el territorio tiene riesgos. Saberlo no es para asustarte, sino para que te cuides y sepas que existen leyes y redes que te respaldan."},
  {t:"stats", items:[
    {n:"85%", l:"de los asesinatos de personas defensoras del ambiente en el mundo en 2025 ocurrieron en América Latina", s:"Global Witness, 2026"},
    {n:"135", l:"eventos de agresión contra personas defensoras ambientales registró CEMDA en México en 2025; la defensa del agua fue la más afectada", s:"CEMDA, Informe 2025"}
  ]},
  {t:"list", items:[
    "🛡️ El <strong>artículo 9 del Acuerdo de Escazú</strong> obliga a los países a proteger a quienes defienden el ambiente.",
    "🧑‍🤝‍🧑 <strong>No actúes en soledad</strong>: hazlo en grupo y acompañado de organizaciones con experiencia en derechos humanos.",
    "🔐 <strong>Cuida tu información</strong>: contraseñas seguras, y piensa bien qué datos personales publicas.",
    "🗺️ <strong>Antes de una acción en campo</strong>, platiquen qué riesgos hay y qué harán si algo sale mal."
  ]},
  {t:"note", kind:"warn", title:"Si sientes que ya no puedes más", html:"Busca ayuda. En México, la <strong>Línea de la Vida</strong> atiende gratis las 24 horas: <strong>800 911 2000</strong>. En una emergencia, llama al <strong>911</strong>."},
  {t:"cta", icon:"🌿", title:"Ve al Refugio de líderes", html:"Respiración guiada, pausas de autocuidado, mensajes de ánimo y buenas noticias.", href:"refugio.html", btn:"Entrar"},
  {t:"reflect", id:"r13", q:"¿Qué práctica de cuidado quieres llevar a tu grupo, o a tu vida, a partir de hoy?"}
  ]},

{ id:"l14", unit:"u4", title:"Tu plan de acción", time:"9 min",
  refs:["general"],
  blocks:[
  {t:"p", html:"Llegaste al final del módulo. Ahora vamos a convertir todo lo que aprendiste en un primer paso real."},
  {t:"pick", id:"p14", q:"¿Cuál será tu primer paso?", o:[
    "Invitar a dos o tres personas a formar un grupo para trabajar una causa de mi comunidad",
    "Hacer el árbol de problemas de mi causa con mi grupo o con mi familia",
    "Enviar mi primera solicitud de información pública sobre un tema ambiental de mi zona",
    "Pedir una reunión con una autoridad de mi escuela o municipio para presentar una propuesta",
    "Sumarme a una LCOY, un colectivo ambiental o una convocatoria juvenil",
    "Crear una publicación o un video que invite a actuar, con un dato, una historia y una acción"
  ]},
  {t:"reflect", id:"r14a", q:"¿Qué vas a hacer, exactamente?"},
  {t:"reflect", id:"r14b", q:"¿Con quién lo vas a hacer?"},
  {t:"reflect", id:"r14c", q:"¿Cuándo?"},
  {t:"reflect", id:"r14d", q:"¿Cómo sabrás que lo lograste?"},
  {t:"commit", title:"Tu tarjeta de compromiso", q:"Convierte tu plan en una imagen para descargar y compartir. Lontra la firma contigo.",
   pick:"p14", what:"r14a", who:"r14b", when:"r14c", img:"img/pose-nutria-feliz.png", footer:"@x.latierra",
   options:["Invitar a dos o tres personas a formar un grupo para trabajar una causa de mi comunidad","Hacer el árbol de problemas de mi causa con mi grupo o con mi familia","Enviar mi primera solicitud de información pública sobre un tema ambiental de mi zona","Pedir una reunión con una autoridad de mi escuela o municipio para presentar una propuesta","Sumarme a una LCOY, un colectivo ambiental o una convocatoria juvenil","Crear una publicación o un video que invite a actuar, con un dato, una historia y una acción"]},
  {t:"h", text:"Antes de irte"},
  {t:"p", html:"Entender el mundo es el primer paso para transformarlo, pero el conocimiento cobra verdadero sentido cuando lo compartimos y lo convertimos en acción. Después de aprender sobre cambio climático, biodiversidad y acción colectiva, ojalá te quedes con esto: <strong>todo está conectado</strong>. Nuestra relación con la naturaleza, nuestras comunidades y las decisiones que tomamos todos los días."},
  {t:"p", html:"No hace falta que termines siendo una persona experta ni que tengas todas las respuestas. Ojalá termines con más preguntas, con una mirada más crítica, con la confianza de que tu voz importa y, sobre todo, con ganas de involucrarte. No necesitas esperar a tener un cargo, una organización o grandes recursos para empezar: puedes hacerlo desde tu escuela, tu colonia o tu comunidad, sumando tus conocimientos y trabajando con otras personas."},
  {t:"note", kind:"act", title:"Lontra te deja este mensaje", html:"No heredamos un planeta con problemas que debemos resolver en soledad: compartimos un mundo que tenemos la oportunidad y la responsabilidad de transformar juntos. <strong>Aprende, cuestiona, conecta y actúa.</strong> Tu voz importa, tu comunidad importa, y lo que hagas hoy puede cambiar lo que viene mañana."}
  ]}
],

/* ===================== CUESTIONARIO FINAL ===================== */
quiz: [
  {q:"¿Qué tres derechos de acceso reconoce el Acuerdo de Escazú?", o:["Información, participación y justicia en asuntos ambientales","Voto, salud y educación","Trabajo, vivienda y transporte"], a:0},
  {q:"¿Cuándo entró en vigor el Acuerdo de Escazú?", o:["En 1992","El 22 de abril de 2021","En 2030"], a:1},
  {q:"¿Qué tema trata el artículo 9 del Acuerdo de Escazú?", o:["Las tarifas de agua","La protección de las personas defensoras del ambiente","Las emisiones de los autos"], a:1},
  {q:"El artículo 12 del Acuerdo de París y la Acción para el Empoderamiento Climático (ACE) buscan mejorar…", o:["La educación, la participación y el acceso a la información sobre el clima","La producción de petróleo","El comercio internacional"], a:0},
  {q:"¿Qué es YOUNGO?", o:["Una empresa de energía","La circunscripción oficial de niñas, niños y jóvenes ante la Convención de la ONU sobre el Cambio Climático","Un partido político"], a:1},
  {q:"Una LCOY es…", o:["Una conferencia local organizada por y para jóvenes sobre cambio climático","Una ley de cambio climático","Una oficina de gobierno"], a:0},
  {q:"En un árbol de problemas, las raíces representan…", o:["Los efectos","Las causas","Las soluciones"], a:1},
  {q:"Al convertir el árbol de problemas en árbol de objetivos, las causas se vuelven…", o:["Medios: lo que vas a hacer","Más problemas","Opiniones"], a:0},
  {q:"En un mapa de actores, ¿qué es lo más útil para encontrar puntos en común con quien no piensa igual?", o:["Señalar lo que hace mal","Entender qué le preocupa y qué podría ganar","Ignorarlo"], a:1},
  {q:"¿Cuál de estos mensajes invita más a actuar?", o:["«Ya es demasiado tarde»","«Este sábado mapeamos las fugas de la colonia: trae tu celular»","«Si usas popote eres parte del problema»"], a:1},
  {q:"Antes de una reunión con una autoridad, lo más importante es…", o:["Llevar ropa formal y cara","Saber qué puede resolver esa persona y llevar una propuesta clara","Llegar sin avisar"], a:1},
  {q:"Si una autoridad no responde, ¿qué conviene hacer?", o:["Abandonar el proyecto","Dar seguimiento formal, documentarlo todo y buscar otros canales","Esperar sin hacer nada"], a:1},
  {q:"¿Dónde se hacen las solicitudes de información pública en México?", o:["En la Plataforma Nacional de Transparencia","En una oficina de correos","En redes sociales"], a:0},
  {q:"¿Qué enseñan los ibis que se turnan al frente de la formación en V?", o:["Que siempre debe liderar la misma persona","Que rotar el liderazgo reparte el esfuerzo y ayuda al grupo a llegar más lejos","Que es mejor volar en soledad"], a:1},
  {q:"Según la encuesta de la RCOY LAC, ¿qué porcentaje de jóvenes de la región dijo haber sentido ecoansiedad?", o:["7%","71%","17%"], a:1}
],

self: [
  "Conozco mis derechos para participar en las decisiones ambientales.",
  "Sé cómo convertir un problema de mi comunidad en un plan de acción.",
  "Me siento capaz de hablar con una autoridad o pedir información pública.",
  "Sé cómo cuidarme y cuidar a mi grupo mientras actuamos."
],

/* ===================== RECURSOS ===================== */
resources: [
  {cat:"Para participar", items:[
    {title:"Plataforma Nacional de Transparencia", url:"https://www.plataformadetransparencia.org.mx/", desc:"Haz solicitudes de información pública en México.", lang:"ES"},
    {title:"LCOY México en Instagram", url:"https://www.instagram.com/lcoy_mx/", desc:"Convocatorias de la conferencia local de juventudes sobre cambio climático.", lang:"ES"},
    {title:"RCOY Latinoamérica en Instagram", url:"https://www.instagram.com/rcoylatam/", desc:"La cumbre regional de juventudes de Latinoamérica y el Caribe.", lang:"ES"},
    {title:"U-Report México (UNICEF)", url:"https://mexico.ureport.in/", desc:"Opina y responde consultas para jóvenes.", lang:"ES"},
    {title:"Conferencia de la Juventud y YOUNGO (ONU Cambio Climático)", url:"https://unfccc.int/es/node/10605", desc:"Cómo participan las juventudes en las negociaciones climáticas.", lang:"ES"},
    {title:"Instituto Mexicano de la Juventud", url:"https://www.gob.mx/imjuve", desc:"Programas y convocatorias para jóvenes.", lang:"ES"},
    {title:"Fridays For Future", url:"https://fridaysforfuture.org", desc:"El movimiento climático juvenil internacional.", lang:"EN"}
  ]},
  {cat:"Para planear y organizarte", items:[
    {title:"Metodología del marco lógico (CEPAL)", url:"https://www.cepal.org/es/publicaciones/5607-metodologia-marco-logico-la-planificacion-seguimiento-la-evaluacion-proyectos", desc:"La guía completa para planear, dar seguimiento y evaluar proyectos.", lang:"ES"},
    {title:"De las palabras a la acción (UNICEF LAC)", url:"https://www.unicef.org/lac/media/40426/file/De-las-palabras-a-la-accion.pdf", desc:"Experiencias de jóvenes de América Latina y el Caribe en la acción climática.", lang:"ES"}
  ]},
  {cat:"Informes que usamos en este módulo", items:[
    {title:"La infancia y adolescencia frente al cambio climático en México (UNICEF y SEMARNAT, 2026)", url:"https://www.unicef.org/mexico/informes/infancia-y-adolescencia-cambio-climatico-mexico", desc:"Cómo afecta el cambio climático a niñas, niños y adolescentes en México.", lang:"ES"},
    {title:"El nuevo modelo de acceso a la información pública en México (Fundar, 2026)", url:"https://fundar.org.mx/wp-content/uploads/2026/03/Nuevo-modelo-de-transparencia-23032026.pdf", desc:"Qué cambió con la reforma de transparencia de 2025.", lang:"ES"},
    {title:"Informe sobre personas defensoras ambientales 2025 (CEMDA)", url:"https://cemda.org.mx/wp-content/uploads/2026/04/Informe-Defensores-2025_Web_260415_173954.pdf", desc:"La situación de quienes defienden el ambiente en México.", lang:"ES"}
  ]},
  {cat:"Para cuidarte", items:[
    {title:"Refugio de líderes (Xlatierra)", url:"refugio.html", desc:"Respiración guiada, buenas noticias, música y mensajes de ánimo.", lang:"ES"}
  ]}
],

/* ===================== REFERENCIAS ===================== */
refsNote: "<strong>Cómo revisamos las fuentes.</strong> Cada dato numérico de este módulo se comparó con su fuente original. Las herramientas de planeación, comunicación y organización son conocimiento metodológico general, explicado con nuestras palabras. Las leyes y procedimientos de transparencia cambian: verifica siempre la versión más reciente.",
refs: {
  unicefmx2026: {short:"UNICEF México y SEMARNAT, 2026", text:"UNICEF México y SEMARNAT (2026). <em>La infancia y adolescencia frente al cambio climático en México</em>. Elaborado por Ecopolíticas S.C. Glosario (p. 12), Recuadro 1 sobre la consulta piloto de U-Report 2024 (p. 68) y recomendaciones (p. 95).", url:"https://www.unicef.org/mexico/informes/infancia-y-adolescencia-cambio-climatico-mexico"},
  unicefLAC: {short:"UNICEF LAC", text:"UNICEF Oficina Regional para América Latina y el Caribe (s. f.). <em>De las palabras a la acción</em>. Experiencias de acción climática juvenil. Págs. 17, 23, 27-29, 32, 35-37 y 39.", url:"https://www.unicef.org/lac/media/40426/file/De-las-palabras-a-la-accion.pdf"},
  escazu: {short:"Acuerdo de Escazú, 2018", text:"CEPAL (2018). <em>Acuerdo Regional sobre el Acceso a la Información, la Participación Pública y el Acceso a la Justicia en Asuntos Ambientales en América Latina y el Caribe</em> (Acuerdo de Escazú), artículo 9.", url:"https://www.cepal.org/es/acuerdodeescazu"},
  delfino2021: {short:"Delfino.cr, 2021", text:"Delfino.cr (2021, enero). <em>Acuerdo de Escazú: Argentina y México depositan su respectivo instrumento de ratificación</em>.", url:"https://delfino.cr/2021/01/acuerdo-de-escazu-argentina-y-mexico-depositan-su-respectivo-instrumento-de-ratificacion"},
  paris: {short:"Acuerdo de París, 2015", text:"Naciones Unidas (2015). <em>Acuerdo de París</em>, artículo 12.", url:"https://unfccc.int/sites/default/files/spanish_paris_agreement.pdf"},
  glasgowACE: {short:"CMNUCC, 2021", text:"CMNUCC (2021). Decisión sobre el <em>Programa de trabajo de Glasgow sobre la Acción para el Empoderamiento Climático</em>, párrafos 4 y 11.", url:"https://unfccc.int/sites/default/files/resource/cop26_auv_3b_Glasgow_WP.pdf"},
  lgcc: {short:"LGCC, art. 109", text:"Cámara de Diputados (2012, con reformas). <em>Ley General de Cambio Climático</em>, artículo 109 (Título Octavo, Participación social).", url:"https://www.diputados.gob.mx/LeyesBiblio/pdf/LGCC.pdf"},
  unfcccYouth: {short:"CMNUCC, participación juvenil", text:"Secretaría de la CMNUCC (s. f.). <em>Youth participation in the UNFCCC negotiations</em>.", url:"https://unfccc.int/sites/default/files/youth_participation_in_the_unfccc_negotiations.pdf"},
  youngo2022: {short:"YOUNGO, 2022", text:"YOUNGO (2022). <em>Introduction to YOUNGO</em>. Presentación publicada por la CMNUCC.", url:"https://unfccc.int/sites/default/files/resource/Introduction%20to%20YOUNGO%202022.pdf"},
  cepalMML: {short:"CEPAL, Ortegón et al., 2005", text:"Ortegón, E., Pacheco, J. F. y Prieto, A. (2005). <em>Metodología del marco lógico para la planificación, el seguimiento y la evaluación de proyectos y programas</em>. CEPAL, Serie Manuales 42.", url:"https://www.cepal.org/es/publicaciones/5607-metodologia-marco-logico-la-planificacion-seguimiento-la-evaluacion-proyectos"},
  fundar2026: {short:"Fundar, 2026", text:"Fundar, Centro de Análisis e Investigación (2026, marzo). <em>El nuevo modelo de acceso a la información pública en México</em>.", url:"https://fundar.org.mx/wp-content/uploads/2026/03/Nuevo-modelo-de-transparencia-23032026.pdf"},
  smithsonian2021: {short:"Smithsonian, 2021", text:"Smithsonian Magazine (2021, 2 de agosto). <em>Nature & Nurture: How Costa Rica's Environmentalism Shaped Sara Cognuck Into a Climate Leader</em>. Earth Optimism.", url:"https://www.smithsonianmag.com/blogs/earth-optimism/2021/08/02/meet-sara-cognuck/"},
  anla2018: {short:"Corte Suprema de Colombia, 2018", text:"Corte Suprema de Justicia de Colombia (2018, 5 de abril). Sentencia STC4360-2018. Consultada en el sitio de la ANLA.", url:"https://www.anla.gov.co/wanla/eureka/jurisprudencia/sentencias/sentencia-stc4360-2018-de-la-corte-suprema-de-justicia-la-amazonia-colombiana-como-entidad-sujeto-de-derechos"},
  primicias2023: {short:"Primicias, 2023", text:"Primicias (2023, agosto). <em>CNE proclama resultados de primera vuelta presidencial y consulta del Yasuní</em>.", url:"https://primicias.ec/noticias/elecciones-presidenciales-2023/cne-resultados-definitivos-elecciones-yasuni"},
  portugal2014: {short:"Portugal et al., 2014", text:"Portugal, S. J., Hubel, T. Y., Fritz, J., Heese, S., Trobe, D., Voelkl, B., Hailes, S., Wilson, A. M. y Usherwood, J. R. (2014). Upwash exploitation and downwash avoidance by flap phasing in ibis formation flight. <em>Nature</em>, 505, 399-402. Consultado en el comunicado de prensa.", url:"https://www.eurekalert.org/pub_releases/2014-01/eaps-ntr011614.php"},
  voelkl2015: {short:"Voelkl et al., 2015", text:"Voelkl, B., Portugal, S. J., Unsöld, M., Usherwood, J. R., Wilson, A. M. y Fritz, J. (2015). Matching times of leading and following suggest cooperation through direct reciprocity during V-formation flight in ibis. <em>PNAS</em>, 112(7), 2115-2120.", url:"https://sjportugal.com/wp-content/uploads/2013/06/voelkl-et-al-2015-pnas.pdf"},
  globalwitness2025: {short:"Global Witness, 2026", text:"Global Witness (2026, septiembre). <em>En 2025, al menos 124 personas defensoras del territorio y el ambiente fueron asesinadas en el mundo</em>. Comunicado.", url:"https://globalwitness.org/es/press-releases/en-2025-al-menos-124-personas-defensoras-del-territorio-y-el-ambiente-fueron-asesinadas-en-el-mundo/"},
  cemda2025: {short:"CEMDA, 2026", text:"Centro Mexicano de Derecho Ambiental (2026, abril). <em>Informe sobre la situación de las personas y comunidades defensoras de los derechos humanos ambientales en México 2025</em>. Págs. 9-10 y 45.", url:"https://cemda.org.mx/wp-content/uploads/2026/04/Informe-Defensores-2025_Web_260415_173954.pdf"},
  paho2024: {short:"OPS, 2024", text:"OPS/OMS (2024, 18 de junio). <em>Celebran 25 años de la Línea de la Vida</em>. Número y gratuidad confirmados en NoticiasGobierno (2026).", url:"https://www.paho.org/es/noticias/18-6-2024-celebran-25-anos-linea-vida"},
  general: {short:"Conocimiento general", text:"<span class='ext-tag'>Conocimiento general</span> Herramientas de planeación, comunicación, negociación, organización y cuidado colectivo explicadas con nuestras palabras a partir de prácticas comunes en proyectos sociales y ambientales. No vienen de un informe específico.", url:""}
}
};
})();
