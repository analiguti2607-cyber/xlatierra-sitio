/* =====================================================================
   XLATIERRA · CONTENIDO DEL MÓDULO 4
   «Cuidar cada gota: el agua en América Latina»
   ---------------------------------------------------------------------
   Mismas reglas que contenido.js, contenido-m2.js y contenido-m3.js.
   Bloque nuevo: order con seq:true = ordenar pasos de un proceso
   (sin barras ni valores); hint = texto de ayuda propio.
   Cada lección tiene refs:[...] con claves de la lista «refs» (al final).
   Datos revisados contra su fuente original y aprobados el 30/10/2026.
   Detalle en DATOS_EXTERNOS_APROBADOS.md
   ===================================================================== */

(function () {

window.XLT_CONTENT = {

course: {
  id: "m4",
  title: "Cuidar cada gota: el agua en América Latina",
  label: "Módulo 4",
  subtitle: "De dónde sale el agua que usas, por qué escasea y a quién le falta, qué dice la ley y qué soluciones ya funcionan en la región. Con datos verificados y acciones para tu casa, tu escuela y tu comunidad.",
  totalTime: "~2 h",
  heroGuide: "espiritu",
  certGuide: "espiritu",
  plan: ["r13a", "r13b", "r13c", "r13d"]
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
  {id:"u1", guide:"espiritu", title:"Unidad 1 · El agua que tenemos", desc:"Cómo cambió el ciclo del agua, de dónde sale el agua de tu ciudad y qué pasa con sequías e inundaciones."},
  {id:"u2", guide:"ajolote", title:"Unidad 2 · Glaciares y el agua del mundo", desc:"Los glaciares que se van, en los Andes y en México, y la diferencia entre tener agua y tener agua segura."},
  {id:"u3", guide:"jaguar", title:"Unidad 3 · Quién tiene agua y quién no", desc:"Por qué la falta de agua no le pega igual a todas las personas y qué derechos te respaldan."},
  {id:"u4", guide:"nutria", title:"Unidad 4 · Soluciones y tu acción", desc:"Cosechar lluvia, ciudades esponja, reúso, lo que nos enseña la naturaleza y tu plan."}
],

extras: [
  {icon:"🌿", title:"Refugio de líderes", href:"refugio.html", tag:"Para respirar",
   desc:"Respiración guiada, buenas noticias, música y mensajes de ánimo para seguir en el camino."}
],

lessons: [

/* ============================ UNIDAD 1 ============================ */
{ id:"l1", unit:"u1", title:"El ciclo del agua cambió", time:"8 min",
  refs:["ndc3","general"],
  blocks:[
  {t:"p", html:"El agua de la Tierra está siempre en movimiento: se evapora, forma nubes, cae como lluvia, corre por ríos, se filtra al subsuelo y vuelve a empezar. A eso le llamamos <strong>ciclo del agua</strong>."},
  {t:"order", seq:true, title:"Sigue el viaje del agua", q:"Ordena las etapas del ciclo del agua. Toca primero la que va al principio.",
   hint:"Toca primero la etapa con la que empieza el viaje.", unit:"",
   done:"El ciclo no tiene un inicio real: es un círculo. Lo que cambia con el calentamiento es la velocidad y la fuerza de cada etapa.",
   items:[
    {n:"El sol calienta mares, lagos y suelo, y el agua se evapora", icon:"☀️", v:5},
    {n:"El vapor sube, se enfría y forma nubes", icon:"☁️", v:4},
    {n:"Llueve o graniza", icon:"🌧️", v:3},
    {n:"El agua corre por la superficie hacia ríos y presas", icon:"🏞️", v:2},
    {n:"Parte del agua se filtra y recarga los acuíferos", icon:"🪨", v:1}
   ]},
  {t:"h", text:"Más calor, extremos más extremos"},
  {t:"p", html:"Cuando el planeta se calienta, <strong>se evapora más agua</strong> del suelo, de las plantas y de los cuerpos de agua. El resultado: lugares más secos por más tiempo y, cuando llueve, aguaceros más fuertes en menos tiempo. Menos agua en unos lugares y lluvias más intensas en otros."},
  {t:"p", html:"Quizá ya lo has notado donde vives: temporadas de calor cada vez más intensas y lluvias menos predecibles. Días de temperaturas muy altas y, cuando por fin llueve, tormentas que en poco tiempo inundan calles y complican moverse por la ciudad. El cambio climático no es algo lejano: también está transformando la vida diaria."},
  {t:"stats", items:[
    {n:"8–12%", l:"menos escorrentía superficial (el agua que corre por la superficie) en México a mitad y finales de siglo", s:"NDC 3.0 de México, citando al PINCC, 2025"},
    {n:"21%", l:"menos agua superficial disponible en promedio en México para 2050", s:"NDC 3.0 de México, citando al PINCC, 2025"},
    {n:"34%", l:"menos agua superficial disponible en promedio en México para 2100", s:"NDC 3.0 de México, citando al PINCC, 2025"}
  ]},
  {t:"note", kind:"info", title:"¿Qué es la escorrentía?", html:"Es el agua de lluvia que no se evapora ni se filtra, y que corre por el suelo hasta llegar a ríos, lagos y presas. Si baja la escorrentía, baja el agua que llega a esas fuentes."},
  {t:"reflect", id:"r1", q:"¿Cómo has notado que cambió la lluvia o el calor donde vives? Piensa en un ejemplo concreto."}
  ]},

{ id:"l2", unit:"u1", title:"De dónde sale el agua de tu ciudad", time:"9 min",
  refs:["eam2023","general"],
  blocks:[
  {t:"p", html:"Abres la llave y sale agua. Pero ¿de dónde viene? Muchas veces no lo sabemos con exactitud. Detrás de cada llave hay acuíferos, pozos, presas, tuberías y plantas de tratamiento que casi nunca vemos, y ecosistemas que hacen posible que el agua exista."},
  {t:"guess", q:"En México, ¿de dónde sale la mayor parte del agua para uso público (casas, escuelas, comercios)?",
   o:["De ríos y presas","Del subsuelo (acuíferos)","De la lluvia que se capta en techos"], a:1,
   e:"El <strong>56.7%</strong> del agua para abastecimiento público viene del subsuelo (CONAGUA, 2023). En el Valle de México, los pozos aportan el 68% del agua."},
  {t:"h", text:"Acuíferos: el agua que no ves"},
  {t:"p", html:"Un <strong>acuífero</strong> es una capa de roca, arena o grava bajo tierra que guarda agua, como una esponja. Se recarga con la lluvia que se filtra, pero muy despacio. México se divide en <strong>653 acuíferos</strong> para administrarlos."},
  {t:"stats", items:[
    {n:"111", l:"acuíferos de México están sobreexplotados: se les saca más agua de la que se recarga", s:"CONAGUA, Estadísticas del Agua en México 2023, p. 52 (actualización de 2020)"},
    {n:"447 hm³", l:"de agua entregó el Sistema Cutzamala en 2022: 276 a la Ciudad de México y 171 al Estado de México", s:"CONAGUA, 2023, p. 120"},
    {n:"17%", l:"del agua de la cuenca del Valle de México viene del Cutzamala; el 68% viene del subsuelo", s:"CONAGUA, 2023, p. 120"}
  ]},
  {t:"note", kind:"info", title:"¿Cuánto es un hectómetro cúbico?", html:"Un hm³ son mil millones de litros. Con 447 hm³ podrías llenar unas 179 mil albercas olímpicas."},
  {t:"order", seq:true, title:"Sigue tu gota", q:"Ordena el viaje de una gota de lluvia hasta tu casa y de regreso. Toca primero el inicio.",
   hint:"Toca primero el paso con el que empieza el viaje.", unit:"",
   done:"Cada paso necesita cuidado: si el acuífero se agota, si la tubería tiene fugas o si el agua usada no se trata, el viaje se rompe.",
   items:[
    {n:"Llueve en el bosque o en la montaña", icon:"🌧️", v:7},
    {n:"El agua se filtra y llega al acuífero", icon:"🪨", v:6},
    {n:"Un pozo la bombea a la superficie", icon:"⛽", v:5},
    {n:"Se potabiliza y se guarda en un tanque", icon:"🧪", v:4},
    {n:"Viaja por la red de tuberías hasta tu llave", icon:"🚰", v:3},
    {n:"Ya usada, se va por el drenaje", icon:"🕳️", v:2},
    {n:"Una planta de tratamiento la limpia (si existe)", icon:"♻️", v:1}
   ]},
  {t:"cta", icon:"🔎", title:"Busca el acuífero de tu municipio", html:"Entra al sitio de CONAGUA, busca «disponibilidad de acuíferos» y encuentra de qué acuífero depende tu comunidad, cuánta agua tiene disponible y si está sobreexplotado. Verlo en el mapa de tu territorio hace que el problema deje de ser abstracto.", href:"https://www.gob.mx/conagua", btn:"Ir a CONAGUA"},
  {t:"reflect", id:"r2", q:"¿Sabías de dónde viene el agua de tu casa? Si buscaste tu acuífero, ¿qué encontraste?"}
  ]},

{ id:"l3", unit:"u1", title:"Sequías e inundaciones en México", time:"9 min",
  refs:["ndc3","eam2023"],
  blocks:[
  {t:"p", html:"México puede estar seco e inundado <strong>en el mismo año</strong>: mientras unas regiones esperan la lluvia, otras sufren tormentas que desbordan ríos y calles."},
  {t:"guess", q:"En junio de 2024, ¿qué porcentaje de los municipios de México tenía algún grado de sequía?",
   o:["25%","50%","86%"], a:2, e:"El <strong>86%</strong> de los municipios tenía algún grado de sequía (NDC 3.0 de México)."},
  {t:"stats", items:[
    {n:"64%", l:"del territorio tuvo estrés hídrico en 2025; ahí vive cerca del 70% de la población", s:"NDC 3.0 de México"},
    {n:"2.8 millones", l:"de hectáreas de cultivo se perdieron por sequía entre 2018 y 2023, sobre todo maíz y frijol", s:"NDC 3.0 de México, con datos del SIAP"},
    {n:"15%", l:"del territorio está en estado crítico de disponibilidad de agua", s:"NDC 3.0 de México"},
    {n:"90%", l:"del territorio cubrió la sequía de 2011 a 2013", s:"CONAGUA, 2023, p. 36"}
  ]},
  {t:"h", text:"El Valle de México usa más agua de la que tiene"},
  {t:"p", html:"El <strong>grado de presión</strong> compara el agua que se usa con el agua que se renueva cada año. En el país, el promedio es de 19.5%. En la región Aguas del Valle de México es de <strong>128.6%</strong>: se usa más agua de la que la naturaleza repone (CONAGUA, 2023, p. 85). Por eso se sobreexplotan los acuíferos y se trae agua de otras cuencas."},
  {t:"deck", title:"¿Mito o realidad?", q:"Seguro has escuchado alguna de estas frases. Decide si es un <strong>mito</strong> o una <strong>realidad</strong>.",
   labels:["Mito","Realidad"], icons:["❌","✅"], win:"¡Perfecto! Ya tienes respuesta para esas frases.", retry:"Bien. Repasa las que fallaste.",
   cards:[
    {t:"El agua es un recurso renovable, así que nunca se va a acabar.", a:0, e:"El ciclo del agua sí la renueva, pero no al ritmo que la usamos. 111 acuíferos de México se vacían más rápido de lo que se recargan."},
    {t:"La lluvia siempre alcanza para recuperar lo que consumimos.", a:0, e:"En el Valle de México se usa 128.6% del agua que se renueva cada año. La lluvia no alcanza a reponerla."},
    {t:"La escasez de agua solo afecta a las comunidades rurales.", a:0, e:"El estrés hídrico abarca el 64% del territorio, donde vive cerca del 70% de la población, incluidas grandes ciudades."},
    {t:"Cerrar la llave mientras te cepillas los dientes basta para resolver la crisis del agua.", a:0, e:"Ayuda y es un buen hábito, pero la crisis también depende de cómo se reparte el agua, de las fugas, de la contaminación y del uso en el campo y la industria."},
    {t:"El agua embotellada siempre es más limpia y segura.", a:0, e:"No siempre. Además, depender de ella cuesta dinero y genera residuos. Lo justo es que el agua de la llave sea segura para todas las personas."},
    {t:"La sequía también hace que se pierdan cosechas y suba el precio de los alimentos.", a:1, e:"Entre 2018 y 2023 se perdieron más de 2.8 millones de hectáreas de cultivo por sequía en México."},
    {t:"Los problemas del agua son responsabilidad únicamente de las personas, no de las industrias ni de los gobiernos.", a:0, e:"Cada persona cuenta, pero las empresas, el campo y los gobiernos usan y deciden sobre la mayor parte del agua. Cuidarla es una responsabilidad compartida."}
   ]},
  {t:"reflect", id:"r3", q:"¿Qué frase sobre el agua has escuchado que ahora sabes que es un mito? ¿Qué responderías?"}
  ]},

/* ============================ UNIDAD 2 ============================ */
{ id:"l4", unit:"u2", title:"Los glaciares que se van", time:"9 min",
  refs:["ipcc2022","viviroli2020","c3unam2025","uv2025"],
  blocks:[
  {t:"p", html:"Un glaciar es una gran masa de hielo que se forma en lo alto de las montañas. Funciona como un <strong>tanque de agua congelada</strong>: en temporada seca se derrite poco a poco y alimenta ríos, campos y ciudades. Cuando se va, los ríos se vuelven impredecibles."},
  {t:"h", text:"En los Andes"},
  {t:"stats", items:[
    {n:"30% a +50%", l:"del área de sus glaciares han perdido los Andes desde los años ochenta por el calentamiento global", s:"IPCC, 2022, Grupo II, cap. 12, p. 1691"},
    {n:"1,500 millones", l:"de personas dependerán del agua de las montañas a mediados de este siglo", s:"Viviroli y colegas, 2020, Nature Sustainability"}
  ]},
  {t:"p", html:"El IPCC señala que las ciudades que dependen del deshielo <strong>ya tienen un suministro de agua muy variable</strong>. Al principio, el hielo que se derrite más rápido puede dar más agua; a largo plazo, sin glaciar, el agua de la temporada seca simplemente deja de llegar."},
  {t:"h", text:"En México también hay glaciares (por ahora)"},
  {t:"p", html:"Están en las cimas de los volcanes más altos. Su área total ya es <strong>menor a un kilómetro cuadrado</strong>, según el Instituto de Geofísica de la UNAM."},
  {t:"guess", q:"El Pico de Orizaba tenía 3 km² de glaciares en 1958. ¿Cuánto le queda hoy?",
   o:["Cerca de 2.5 km²","Cerca de 1.5 km²","Cerca de 0.37 km²"], a:2,
   e:"Le quedan cerca de <strong>0.37 km²</strong>, apenas una octava parte. El Glaciar Norte pasó de 0.46 a 0.37 km² solo entre 2019 y 2024 (Universidad Veracruzana)."},
  {t:"list", items:[
    "🏔️ <strong>Iztaccíhuatl</strong>: sus glaciares suman unos 0.11 km². Uno de ellos, el <strong>Ayoloco</strong>, desapareció en 2018; hoy una placa en la montaña lo recuerda.",
    "🌋 <strong>Pico de Orizaba</strong>: el Glaciar Norte pierde, en promedio, unos 24,500 m² de hielo al año desde 1958, como si cada año desaparecieran más de tres canchas de futbol."
  ]},
  {t:"note", kind:"info", title:"¿Cuándo desaparecerán?", html:"Hay estimaciones de pocos años, pero el equipo de la Universidad Veracruzana advierte que la fecha exacta no se puede pronosticar. Lo que sí es claro es la tendencia: se están yendo."},
  {t:"reflect", id:"r4", q:"¿Sabías que México tiene glaciares? ¿Qué se pierde, además de agua, cuando desaparece uno?"}
  ]},

{ id:"l5", unit:"u2", title:"Agua limpia y saneamiento en el mundo", time:"8 min",
  refs:["onu2026","jmp2025","ods2026","eam2023"],
  blocks:[
  {t:"p", html:"Tener agua no es lo mismo que tener <strong>agua segura</strong>. Y usarla no termina cuando se va por el drenaje: también importa que regrese limpia a los ríos."},
  {t:"stats", items:[
    {n:"2,100 millones", l:"de personas en el mundo no tienen agua potable gestionada de forma segura", s:"ONU-Agua, Informe Mundial sobre el Desarrollo de los Recursos Hídricos, 2026"},
    {n:"3,400 millones", l:"de personas no tenían saneamiento gestionado de forma segura en 2024", s:"OMS y UNICEF (JMP), 2025"},
    {n:"56%", l:"de las aguas residuales de los hogares del mundo se trató de forma segura en 2024", s:"ONU, Informe de los ODS 2026, objetivo 6"},
    {n:"66.7%", l:"del agua residual municipal recolectada en México se trató en 2022, en 2,774 plantas", s:"CONAGUA, 2023, p. 126"}
  ]},
  {t:"match", title:"¿Qué tanto acceso hay?", q:"Elige qué describe mejor cada situación.",
   eco:["🚰 Hay agua, pero no segura","💧 Agua segura","🚽 Saneamiento seguro"],
   done:"El derecho al agua incluye las tres cosas: agua suficiente, que sea segura y que el agua usada se maneje sin dañar la salud ni el ambiente.",
   items:[
    {n:"La llave da agua solo unas horas a la semana y a veces sale turbia.", icon:"🚱", a:0, e:"Hay agua, pero no está disponible cuando se necesita ni libre de contaminación."},
    {n:"El agua llega a tu casa todos los días y está libre de contaminación.", icon:"✅", a:1, e:"Agua segura: en casa, disponible cuando se necesita y sin contaminación."},
    {n:"El baño de tu casa se conecta a un drenaje que lleva el agua a una planta de tratamiento.", icon:"♻️", a:2, e:"Saneamiento seguro: los desechos se tratan y se manejan sin riesgo."},
    {n:"Tu familia acarrea agua de un pozo comunitario a 40 minutos de distancia.", icon:"🪣", a:0, e:"Hay agua, pero no en casa ni a la mano, y nadie garantiza su calidad."},
    {n:"El drenaje de la colonia descarga directo al río sin tratar.", icon:"🏞️", a:0, e:"Hay infraestructura, pero no es saneamiento seguro: el agua sucia contamina el río."}
   ]},
  {t:"p", html:"Quizá en tu casa a veces compran agua embotellada o usan un filtro para estar más seguros. Lo que para algunas personas es una precaución o una elección, para muchas otras es una <strong>necesidad diaria</strong> que cuesta tiempo, dinero y esfuerzo."},
  {t:"note", kind:"heart", title:"No lo normalicemos", html:"Es injusto que el acceso a agua limpia todavía dependa tanto del lugar donde nacemos y de los recursos que tenemos. Conseguir agua potable no debería ser un privilegio: <strong>es un derecho humano</strong>."},
  {t:"reflect", id:"r5", q:"¿Alguna vez has tenido que hervir, comprar o filtrar el agua? ¿Cómo sería hacerlo todos los días?"}
  ]},

/* ============================ UNIDAD 3 ============================ */
{ id:"l6", unit:"u3", title:"El agua también es desigual", time:"8 min",
  refs:["onu2026","eam2023","ndc3","unicefmx2026"],
  blocks:[
  {t:"p", html:"La falta de agua no le pega igual a todas las personas. Le pega más a <strong>mujeres, niñas, comunidades rurales e indígenas, y escuelas</strong>."},
  {t:"guess", q:"En el mundo, ¿cuántas horas al día dedican en total mujeres y niñas a recoger agua?",
   o:["25 millones","100 millones","250 millones"], a:2,
   e:"<strong>250 millones de horas cada día</strong> (ONU-Agua, 2026). Es tiempo que no se usa para estudiar, descansar, trabajar con un sueldo o jugar."},
  {t:"pick", id:"p6", q:"Si tuvieras de vuelta las horas que hoy se van en acarrear agua, ¿en qué las usarías?", o:[
    "Estudiar o terminar la escuela","Descansar y cuidar mi salud","Trabajar y ganar mi propio dinero","Jugar, hacer deporte o arte","Participar en mi comunidad"
  ]},
  {t:"stats", items:[
    {n:"2 de cada 3", l:"hogares del mundo sin agua en casa: las mujeres son las principales responsables de conseguirla", s:"Dato mundial, citado en CONAGUA, 2023, p. 215"},
    {n:"52.9%", l:"de las personas en pobreza extrema en zonas rurales de México son mujeres", s:"NDC 3.0 de México, con datos de CONEVAL"},
    {n:"22.2%", l:"de las escuelas de educación básica de México no tiene agua potable", s:"SEP, 2023, en UNICEF México y SEMARNAT, 2026"},
    {n:"25.5%", l:"de las escuelas de media superior de México no tiene agua potable", s:"SEP, 2023, en UNICEF México y SEMARNAT, 2026"}
  ]},
  {t:"h", text:"Sin agua, tampoco hay escuela"},
  {t:"p", html:"Hay escuelas que han tenido que suspender clases o cerrar por falta de agua. La crisis hídrica no solo afecta lo que hacemos en casa: también el acceso a la educación. Sin agua no hay higiene, alimentación ni bienestar dentro de la escuela. <strong>El acceso al agua es una condición para ejercer el derecho a la educación.</strong>"},
  {t:"reflect", id:"r6", q:"¿Tu escuela, o una que conozcas, ha tenido problemas de agua? ¿Qué pasaba con las clases?"}
  ]},

{ id:"l6b", unit:"u3", soon:true, title:"El agua y los pueblos indígenas", note:"La estamos construyendo con y desde las voces de los pueblos indígenas, con un mapa de sus territorios y sus formas de cuidar el agua"},

{ id:"l7", unit:"u3", title:"Tu derecho al agua", time:"10 min",
  refs:["onu64292","cpeum","lga2025","general"],
  blocks:[
  {t:"p", html:"El agua no es un favor ni un lujo: <strong>es un derecho</strong>. Y en México hay una ley nueva que te da herramientas concretas para defenderlo."},
  {t:"list", items:[
    "🌎 <strong>ONU, 2010</strong>: la Asamblea General reconoció el derecho humano al agua potable y al saneamiento (resolución 64/292).",
    "🇲🇽 <strong>Constitución, artículo 4.º</strong>: toda persona tiene derecho al agua para consumo personal y doméstico de forma suficiente, salubre, aceptable y asequible.",
    "📜 <strong>Ley General de Aguas</strong>: se publicó en el Diario Oficial de la Federación el 11 de diciembre de 2025."
  ]},
  {t:"h", text:"Lo que dice la Ley General de Aguas"},
  {t:"list", items:[
    "🚰 <strong>No te pueden cortar el agua por completo por falta de pago</strong>: siempre deben darte la cantidad mínima para el consumo humano básico (art. 9).",
    "🏠 <strong>El consumo humano y doméstico va primero</strong> al dar concesiones y permisos.",
    "🏘️ <strong>Reconoce los sistemas comunitarios de agua y saneamiento</strong>, que manejan las propias comunidades sin fines de lucro (art. 40).",
    "👩 <strong>Garantiza la participación paritaria de las mujeres</strong> en la gestión del agua (art. 15).",
    "🎒 <strong>La falta de agua en escuelas y hogares no debe impedir que niñas, niños y adolescentes ejerzan sus derechos</strong>, e incluye el acceso al agua para una menstruación digna (art. 15).",
    "⚖️ <strong><em>In dubio pro aqua</em></strong>: si hay duda, gana la interpretación que más proteja el derecho al agua (art. 6).",
    "🔒 Los derechos de las concesiones de agua ya no se pueden transmitir (vender o pasar) como antes."
  ]},
  {t:"match", title:"¿Qué derecho usas?", q:"Elige qué parte de la ley te respalda en cada caso.",
   eco:["🚰 Mínimo vital (art. 9)","🏘️ Sistemas comunitarios (art. 40)","👩 Mujeres, niñas y escuelas (art. 15)"],
   done:"Conocer el artículo exacto te ayuda a hacer una solicitud o una queja más fuerte.",
   items:[
    {n:"Tu familia se atrasó en el recibo y el organismo operador quiere cortar el agua por completo.", icon:"🧾", a:0, e:"No pueden dejarte sin la cantidad mínima para el consumo humano básico."},
    {n:"Tu comunidad rural administra su propio pozo y quiere que se reconozca su forma de organizarse.", icon:"🪣", a:1, e:"La ley reconoce los sistemas comunitarios de agua y saneamiento."},
    {n:"En tu escuela los baños no tienen agua y varias compañeras faltan cuando están menstruando.", icon:"🎒", a:2, e:"La ley pide garantizar agua para que la falta de ella no impida ejercer derechos, incluida una menstruación digna."},
    {n:"En el comité de agua de tu municipio solo participan hombres.", icon:"🗳️", a:2, e:"La ley garantiza la participación paritaria y sustantiva de las mujeres en la gestión del agua."}
   ]},
  {t:"h", text:"Lo más útil para ti"},
  {t:"p", html:"Lo más valioso de la ley es que reconoce que el acceso al agua <strong>no depende solo de decisiones individuales</strong>: es un derecho que las instituciones tienen la obligación de garantizar. Que el consumo humano vaya primero significa que nadie debería quedarse sin el agua necesaria para vivir con dignidad. Reconocer los sistemas comunitarios demuestra que las comunidades tienen conocimientos y derecho a participar. Y la participación de las mujeres importa porque, históricamente, han cargado con gran parte de conseguir y administrar el agua."},
  {t:"h", text:"Lo que todavía falta"},
  {t:"p", html:"El reto es que estos derechos no se queden solo escritos. Para que funcionen hacen falta:"},
  {t:"list", items:[
    "📣 <strong>Mecanismos claros de cumplimiento</strong>: saber dónde denunciar cuando se viola tu derecho al agua y qué consecuencias hay.",
    "🧑‍🤝‍🧑 <strong>Más participación juvenil</strong>: espacios reales para que niñas, niños y jóvenes intervengan en las decisiones sobre el agua.",
    "🔍 <strong>Información accesible</strong>: que cualquier persona pueda conocer la calidad del agua, los presupuestos y las decisiones de su municipio.",
    "🛠️ <strong>Garantías de implementación</strong>: recursos, infraestructura y seguimiento para que las comunidades puedan ejercer sus derechos."
  ]},
  {t:"note", kind:"act", title:"Balam te recuerda", html:"Puedes usar la Plataforma Nacional de Transparencia para pedir la calidad del agua o el presupuesto de tu organismo operador. Lo viste en el Módulo 3: tener información también es defender tu derecho."},
  {t:"reflect", id:"r7", q:"¿Qué parte de la ley te parece más útil para tu comunidad? ¿Qué crees que le falta?"}
  ]},

/* ============================ UNIDAD 4 ============================ */
{ id:"l8", unit:"u4", title:"Cosechar la lluvia", time:"8 min",
  refs:["sedema2023","cronica2024","lga2025","general"],
  blocks:[
  {t:"p", html:"En temporada de lluvias, millones de litros caen sobre los techos y se van directo al drenaje. ¿Y si los guardamos?"},
  {t:"p", html:"Un <strong>sistema de captación de agua de lluvia</strong> junta el agua que cae en el techo, la filtra y la guarda para usarla en la casa o la escuela. La Ley General de Aguas pide a los estados promover su instalación para uso doméstico."},
  {t:"order", seq:true, title:"Arma tu captador", q:"Ordena las partes de un captador de lluvia, desde donde cae el agua hasta donde la usas.",
   hint:"Toca primero la parte donde cae la lluvia.", unit:"",
   done:"El separador de primeras lluvias es clave: desecha el agua que lava el polvo y la suciedad del techo antes de guardar la limpia.",
   items:[
    {n:"Techo limpio donde cae la lluvia", icon:"🏠", v:5},
    {n:"Canaleta y bajante que la conducen", icon:"🛤️", v:4},
    {n:"Separador de primeras lluvias y filtro", icon:"🧹", v:3},
    {n:"Tinaco o cisterna que la guarda", icon:"🛢️", v:2},
    {n:"Uso: baño, lavar ropa, limpiar, regar", icon:"🧺", v:1}
   ]},
  {t:"h", text:"Lo que logró la Ciudad de México"},
  {t:"stats", items:[
    {n:"62,756", l:"sistemas instalados en hogares de 9 alcaldías al cierre de 2023 (programa Cosecha de Lluvia)", s:"SEDEMA, Evaluación interna 2023"},
    {n:"59% → 26%", l:"hogares preocupados por no tener agua suficiente, antes y después del sistema", s:"SEDEMA, Evaluación interna 2023, p. 46"},
    {n:"918 millones", l:"de litros al año puede captar una red de 2,338 sistemas en escuelas públicas, para 1.3 millones de personas", s:"SEDEMA, 2024, en La Crónica"}
  ]},
  {t:"p", html:"En los hogares, el agua cosechada se usa sobre todo para <strong>lavar ropa (84%)</strong>, <strong>el excusado (82.4%)</strong> y <strong>lavar el patio (79.6%)</strong>. Así se ahorra agua potable para beber y cocinar."},
  {t:"reflect", id:"r8", q:"¿Has visto un captador de lluvia? ¿Por qué crees que más casas o escuelas no lo tienen?"}
  ]},

{ id:"l9", unit:"u4", title:"Ciudades esponja", time:"8 min",
  refs:["pauta2025","caf2026","general"],
  blocks:[
  {t:"p", html:"Las ciudades cubrieron el suelo con concreto y mandan la lluvia al drenaje lo más rápido posible. Cuando llueve fuerte, el drenaje se satura y viene la inundación. Una <strong>ciudad esponja</strong> hace lo contrario: deja espacios para que el agua se detenga, se filtre y recargue el subsuelo."},
  {t:"h", text:"Un parque que se inunda a propósito"},
  {t:"p", html:"En Santiago de Chile, el <strong>Parque Inundable Víctor Jara</strong> recibe las crecidas del Zanjón de la Aguada. En días normales es un parque con áreas verdes para la comunidad; cuando llueve fuerte, sus canales y lagunas guardan el agua y protegen a los barrios. Lleva unos 3 km construidos y sigue creciendo por etapas."},
  {t:"deck", title:"Día seco o día de tormenta", q:"¿Qué hace el parque esponja en cada momento?",
   labels:["Día seco","Día de tormenta"], icons:["☀️","⛈️"], win:"¡Exacto! Un mismo espacio, dos funciones.", retry:"Bien. Repasa las que fallaste.",
   cards:[
    {t:"Niñas y niños juegan en el pasto y la gente camina por los senderos.", a:0, e:"La mayor parte del año es un parque normal."},
    {t:"Las lagunas y canales se llenan y guardan el agua que el drenaje no alcanza a llevarse.", a:1, e:"Así se evita que el agua inunde casas y calles."},
    {t:"Las plantas y el suelo filtran poco a poco el agua acumulada hacia el subsuelo.", a:1, e:"Después de la tormenta, el agua recarga el acuífero en lugar de perderse."},
    {t:"Hay sombra, aire más fresco y espacio para aves e insectos.", a:0, e:"Las áreas verdes también bajan el calor y dan hogar a la biodiversidad."}
   ]},
  {t:"h", text:"Una propuesta para Xochimilco"},
  {t:"p", html:"En la subcuenca de Xochimilco, el drenaje se lleva entre <strong>16 y 21 m³ de agua de lluvia por segundo</strong> que podrían aprovecharse. El <strong>Parque de Lluvia Solidaridad</strong>, en Tláhuac, es una propuesta de hidroparque diseñada para captar, limpiar e infiltrar esa lluvia (CAF, 2026). Todavía es un proyecto en papel: muestra lo que se podría hacer."},
  {t:"reflect", id:"r9", q:"¿Qué lugar de tu colonia o ciudad se inunda y podría convertirse en un parque esponja?"}
  ]},

{ id:"l10", unit:"u4", title:"Agua que se vuelve a usar", time:"7 min",
  refs:["weadapt","eam2023","general"],
  blocks:[
  {t:"p", html:"El agua que se va por el drenaje no es basura: <strong>es un recurso</strong>. Bien tratada, puede regar parques y cultivos, servir a la industria y, con la tecnología adecuada, incluso volver a ser agua potable."},
  {t:"stats", items:[
    {n:"1968", l:"año desde el que Windhoek, capital de Namibia, convierte agua residual en agua potable, en la planta Goreangab", s:"weADAPT"},
    {n:"66.7%", l:"del agua residual recolectada en México se trató en 2022", s:"CONAGUA, 2023, p. 126"}
  ]},
  {t:"p", html:"Windhoek está en una de las zonas más secas de África. Desde hace más de 50 años trata el agua residual con varios pasos de limpieza y la devuelve a la red de agua potable. Es uno de los ejemplos más antiguos del mundo."},
  {t:"deck", title:"¿Mito o realidad?", q:"Decide si cada frase sobre el agua tratada es un <strong>mito</strong> o una <strong>realidad</strong>.",
   labels:["Mito","Realidad"], icons:["❌","✅"], win:"¡Muy bien! Ya sabes separar el miedo de los datos.", retry:"Bien. Repasa las que fallaste.",
   cards:[
    {t:"El agua tratada siempre está sucia y no sirve para nada.", a:0, e:"Según el tratamiento, puede servir para riego, industria, limpieza y hasta para beber."},
    {t:"Hay una ciudad que lleva décadas tomando agua residual tratada.", a:1, e:"Windhoek, en Namibia, lo hace desde 1968."},
    {t:"Tratar el agua residual protege los ríos y la salud.", a:1, e:"El agua sin tratar contamina ríos, suelos y acuíferos, y transmite enfermedades."},
    {t:"Toda el agua residual de México ya se trata.", a:0, e:"En 2022 se trató el 66.7% de la que se recolecta; parte del agua usada ni siquiera llega al drenaje."}
   ]},
  {t:"reflect", id:"r10", q:"¿Para qué usarías el agua tratada en tu escuela o tu colonia?"}
  ]},

{ id:"l11", unit:"u4", title:"La naturaleza ya lo resolvió: humedales y niebla", time:"6 min",
  refs:["wwdr2018","wwdr2020","general"],
  blocks:[
  {t:"p", html:"La naturaleza lleva millones de años limpiando y atrapando agua. Observarla nos da ideas para nuestros propios retos."},
  {t:"h", text:"🌿 Los humedales limpian el agua"},
  {t:"p", html:"En un humedal, las plantas, el suelo y los microorganismos atrapan y descomponen la suciedad del agua. Los <strong>humedales artificiales</strong> copian ese proceso para tratar aguas residuales. La ONU los reconoce como una solución natural y rentable que da agua útil para riego y otros usos (ONU, 2018)."},
  {t:"h", text:"🌫️ Los bosques de niebla atrapan agua"},
  {t:"p", html:"En los bosques de niebla, las hojas y los musgos atrapan las gotitas de las nubes que pasan, y el agua escurre al suelo. Los <strong>atrapanieblas</strong> hacen lo mismo con mallas finas en lugares donde la niebla abunda. La ONU los considera una alternativa de bajo costo para zonas con mucha niebla (ONU, 2020). Se usan, por ejemplo, en partes de América del Sur."},
  {t:"match", title:"¿Qué copia cada idea?", q:"Relaciona cada solución con el ecosistema que imita.",
   eco:["🌾 Humedal","🌫️ Bosque de niebla","🌳 Bosque y suelo vivo"],
   done:"Copiar a la naturaleza no reemplaza cuidarla: si destruimos humedales y bosques, perdemos el modelo original.",
   items:[
    {n:"Plantas y grava que limpian el agua de una comunidad antes de devolverla al río.", icon:"🪴", a:0, e:"Es un humedal artificial."},
    {n:"Mallas en una colina que juntan las gotas de niebla en un tanque.", icon:"🕸️", a:1, e:"Es un atrapanieblas, como las hojas de un bosque de niebla."},
    {n:"Un parque con suelo sin pavimentar donde la lluvia se filtra al subsuelo.", icon:"🌱", a:2, e:"Imita al bosque, cuyo suelo funciona como esponja."}
   ]},
  {t:"reflect", id:"r11", q:"¿Qué ecosistema cerca de ti ayuda a cuidar el agua? ¿Está protegido?"}
  ]},

{ id:"l12", unit:"u4", title:"Qué puedes hacer tú", time:"9 min",
  refs:["unicefmx2026","lga2025","general"],
  blocks:[
  {t:"p", html:"Cuidar el agua va mucho más allá de cerrar la llave. Hay acciones en cuatro escalas, y todas cuentan:"},
  {t:"table", head:["Dónde","Qué puedes hacer"], rows:[
    ["🏠 Casa","Conoce de dónde viene tu agua; repara fugas; reusa el agua de lavar; si se puede, capta lluvia."],
    ["🎒 Escuela","Propón un captador de lluvia; revisa si tu escuela tiene agua potable; súmate al programa «Escuelas con Trayectoria Ambiental» (SEP y SEMARNAT, desde 2022)."],
    ["🏘️ Colonia","Mapea fugas con tus vecinos y pide su reparación; cuida ríos, barrancas y zonas donde se recarga el acuífero; apoya los sistemas comunitarios de agua."],
    ["🏛️ Municipio","Pide información sobre la calidad del agua y el presupuesto; participa en los espacios que reconoce la Ley General de Aguas; exige que se cumplan tus derechos."]
  ]},
  {t:"h", text:"Por dónde empezar"},
  {t:"p", html:"Empieza por algo cercano: <strong>observa qué sucede con el agua en tu casa, tu escuela o tu comunidad</strong>, infórmate y busca a otras personas que quieran actuar contigo. Conoce de dónde viene el agua que consumes, cuánta hay disponible en tu comunidad y qué problemas tiene su distribución. Después pueden impulsar acciones colectivas, como identificar fugas y pedir que se reparen, o cuidar ríos, lagos y otros ecosistemas. <strong>No necesitas resolver toda la crisis para generar un cambio.</strong>"},
  {t:"h", text:"Cuidado con cómo se habla del agua"},
  {t:"list", items:[
    "🚿 <strong>Culpar solo a los hogares</strong> por dejar la llave abierta, sin hablar del agua que usan la agricultura y la industria.",
    "🌧️ <strong>Decir que la escasez es solo falta de lluvia</strong>, cuando también influyen la sobreexplotación de acuíferos, la contaminación, las fugas y el reparto desigual.",
    "🙅 <strong>Poner toda la responsabilidad en quienes ni siquiera tienen agua</strong> todos los días."
  ]},
  {t:"note", kind:"info", title:"Responsabilidad compartida", html:"Cuidar el agua sí requiere cambios individuales, pero también exige responsabilidad de las empresas, los gobiernos y las instituciones."},
  {t:"read", items:[
    {title:"LCOY México en Instagram", url:"https://www.instagram.com/lcoy_mx/", desc:"La conferencia local de juventudes sobre cambio climático; reúne a colectivos como SDSN Youth México, Somos Rebeldía, GYBN México y SDG Student Hub.", lang:"ES"}
  ]},
  {t:"reflect", id:"r12", q:"¿Qué acción de agua has hecho o te gustaría hacer? ¿Con quién?"}
  ]},

{ id:"l13", unit:"u4", title:"Tu plan para cuidar cada gota", time:"8 min",
  refs:["general"],
  blocks:[
  {t:"p", html:"Llegaste al final del módulo. Ahora vamos a convertir lo que aprendiste en un primer paso real."},
  {t:"pick", id:"p13", q:"¿Cuál será tu primer paso?", o:[
    "Buscar de qué acuífero depende mi comunidad y contárselo a mi familia",
    "Revisar fugas en mi casa o escuela y pedir que se reparen",
    "Proponer un captador de lluvia en mi escuela",
    "Pedir información pública sobre la calidad del agua de mi municipio",
    "Organizar con otras personas una jornada para cuidar un río, una barranca o un humedal",
    "Hacer una publicación que explique de dónde viene el agua de mi ciudad, con un dato y una acción"
  ]},
  {t:"reflect", id:"r13a", q:"¿Qué vas a hacer, exactamente?"},
  {t:"reflect", id:"r13b", q:"¿Con quién lo vas a hacer?"},
  {t:"reflect", id:"r13c", q:"¿Cuándo?"},
  {t:"reflect", id:"r13d", q:"¿Cómo sabrás que lo lograste?"},
  {t:"commit", title:"Tu tarjeta de compromiso", q:"Convierte tu plan en una imagen para descargar y compartir. Ameyalli la firma contigo.",
   pick:"p13", what:"r13a", who:"r13b", when:"r13c", img:"img/pose-espiritu-gota.png", footer:"@x.latierra",
   options:["Buscar de qué acuífero depende mi comunidad y contárselo a mi familia","Revisar fugas en mi casa o escuela y pedir que se reparen","Proponer un captador de lluvia en mi escuela","Pedir información pública sobre la calidad del agua de mi municipio","Organizar con otras personas una jornada para cuidar un río, una barranca o un humedal","Hacer una publicación que explique de dónde viene el agua de mi ciudad, con un dato y una acción"]},
  {t:"h", text:"Antes de irte"},
  {t:"p", html:"Ojalá te lleves esto: <strong>el agua no es un recurso infinito ni está repartida de forma justa</strong>. Cuidarla va mucho más allá de cerrar la llave: implica proteger los ecosistemas, cuestionar cómo se gestiona y reconocer que el acceso al agua es un derecho, no un privilegio."},
  {t:"note", kind:"act", title:"Ameyalli te deja este mensaje", html:"El agua no es un recurso garantizado ni una responsabilidad que debas enfrentar en soledad: es un derecho y un bien común que tenemos que proteger. No importa si empiezas con una acción pequeña, si compartes lo que aprendiste o si cuestionas cómo se maneja el agua en tu comunidad. Lo importante es <strong>no ser indiferente</strong>. Infórmate, involúcrate y recuerda que cuidar el agua también es cuidar la vida, la dignidad y el futuro de otras personas."}
  ]}
],

/* ===================== CUESTIONARIO FINAL ===================== */
quiz: [
  {q:"¿Qué le pasa al ciclo del agua cuando el planeta se calienta?", o:["Se detiene","Se evapora más agua y los extremos (sequías y aguaceros) se vuelven más fuertes","Llueve igual en todas partes"], a:1},
  {q:"¿Qué es un acuífero?", o:["Una presa de concreto","Una capa bajo tierra que guarda agua, como una esponja","Un tipo de nube"], a:1},
  {q:"En México, ¿de dónde sale más de la mitad del agua para uso público?", o:["Del subsuelo (acuíferos)","Del mar","De la lluvia captada en techos"], a:0},
  {q:"¿Qué significa que un acuífero esté sobreexplotado?", o:["Que tiene demasiada agua","Que se le saca más agua de la que se recarga","Que está contaminado con basura"], a:1},
  {q:"En junio de 2024, ¿qué porcentaje de los municipios de México tenía algún grado de sequía?", o:["86%","20%","50%"], a:0},
  {q:"Un grado de presión de 128.6% en el Valle de México significa que…", o:["Sobra agua","Se usa más agua de la que se renueva cada año","El agua tiene mucha presión en la tubería"], a:1},
  {q:"¿Cuánta área de glaciares han perdido los Andes desde los años ochenta?", o:["Casi nada","De 30% a más de 50%","Toda"], a:1},
  {q:"¿Qué glaciar mexicano desapareció en 2018?", o:["El Ayoloco, en el Iztaccíhuatl","El Glaciar Norte del Pico de Orizaba","Ninguno"], a:0},
  {q:"¿Qué es el saneamiento seguro?", o:["Tener un baño cuyos desechos se tratan y manejan sin riesgo","Comprar agua embotellada","Lavar los platos con jabón"], a:0},
  {q:"¿Cuántas horas al día dedican en total mujeres y niñas en el mundo a recoger agua?", o:["250 millones","2 millones","25 mil"], a:0},
  {q:"Según la Ley General de Aguas, si una familia no paga el agua…", o:["Se le puede cortar por completo","No se le puede cortar por completo: debe recibir el mínimo para consumo humano básico","Debe comprar pipas"], a:1},
  {q:"¿Qué significa el principio «in dubio pro aqua»?", o:["Que el agua es de quien la paga","Que, si hay duda, gana la interpretación que más proteja el derecho al agua","Que se prohíbe el agua embotellada"], a:1},
  {q:"En el programa Cosecha de Lluvia de la CDMX, ¿qué pasó con los hogares preocupados por no tener agua suficiente?", o:["Subieron de 26% a 59%","Bajaron de 59% a 26%","No cambiaron"], a:1},
  {q:"¿Qué hace un parque esponja en un día de tormenta?", o:["Cierra sus puertas","Guarda e infiltra el agua para que no inunde calles y casas","Manda el agua más rápido al drenaje"], a:1},
  {q:"¿Qué ecosistema imitan los humedales artificiales?", o:["Los desiertos","Los humedales naturales, cuyas plantas, suelos y microorganismos limpian el agua","Los arrecifes"], a:1}
],

self: [
  "Sé de dónde viene el agua de mi ciudad y por qué escasea.",
  "Entiendo por qué la falta de agua afecta más a unas personas que a otras.",
  "Conozco mis derechos sobre el agua y cómo defenderlos.",
  "Sé qué soluciones existen y qué puedo hacer en mi casa, escuela y comunidad."
],

/* ===================== RECURSOS ===================== */
resources: [
  {cat:"Para investigar tu agua", items:[
    {title:"Comisión Nacional del Agua (CONAGUA)", url:"https://www.gob.mx/conagua", desc:"Busca la disponibilidad del acuífero de tu municipio y otros datos del agua.", lang:"ES"},
    {title:"Plataforma Nacional de Transparencia", url:"https://www.plataformadetransparencia.org.mx/", desc:"Pide información sobre la calidad del agua o el presupuesto de tu organismo operador.", lang:"ES"},
    {title:"Ley General de Aguas (DOF, 11 de diciembre de 2025)", url:"https://gaceta.diputados.gob.mx/PDF/66/2025/dic/DOF11DIC2025-LeyGralAguas.pdf", desc:"El texto completo de la ley.", lang:"ES"}
  ]},
  {cat:"Informes que usamos en este módulo", items:[
    {title:"Estadísticas del Agua en México 2023 (CONAGUA)", url:"https://agua.org.mx/wp-content/uploads/2024/10/EAM2023_f.pdf", desc:"Acuíferos, Cutzamala, grado de presión, tratamiento y más.", lang:"ES"},
    {title:"Evaluación interna del programa Cosecha de Lluvia 2023 (SEDEMA)", url:"https://sedema.cdmx.gob.mx/storage/app/media/CosechaDeLluvia/Evaluacion_interna_del_programa_social_Cosecha_de_Lluvia_2023.pdf", desc:"Resultados de la captación de lluvia en hogares de la CDMX.", lang:"ES"},
    {title:"La infancia y adolescencia frente al cambio climático en México (UNICEF y SEMARNAT, 2026)", url:"https://www.unicef.org/mexico/informes/infancia-y-adolescencia-cambio-climatico-mexico", desc:"Incluye datos de escuelas sin agua potable.", lang:"ES"},
    {title:"IPCC AR6, capítulo 12: Centro y Sudamérica", url:"https://www.ipcc.ch/report/ar6/wg2/downloads/report/IPCC_AR6_WGII_Chapter12.pdf", desc:"Impactos del cambio climático en la región, incluidos los glaciares.", lang:"EN"}
  ]},
  {cat:"Para cuidarte", items:[
    {title:"Refugio de líderes (Xlatierra)", url:"refugio.html", desc:"Respiración guiada, buenas noticias, música y mensajes de ánimo.", lang:"ES"}
  ]}
],

/* ===================== REFERENCIAS ===================== */
refsNote: "<strong>Cómo revisamos las fuentes.</strong> Cada dato numérico de este módulo se comparó con su fuente original. Las explicaciones del ciclo del agua, los captadores, las ciudades esponja y las acciones sugeridas son conocimiento general, explicado con nuestras palabras. Las leyes cambian: verifica siempre la versión más reciente.",
refs: {
  ndc3: {short:"NDC 3.0 de México", text:"Gobierno de México y SEMARNAT (2025). <em>Contribución Determinada a Nivel Nacional 3.0</em> (NDC 3.0). Págs. 34, 68, 82 y 92 del PDF; citan al PINCC (2025), SIAP y CONEVAL.", url:"https://www.gob.mx/semarnat"},
  eam2023: {short:"CONAGUA, 2023", text:"Comisión Nacional del Agua (2023). <em>Estadísticas del Agua en México 2023</em>. Págs. 23, 24, 36, 50, 52, 79, 85, 120, 126 y 215.", url:"https://agua.org.mx/wp-content/uploads/2024/10/EAM2023_f.pdf"},
  ipcc2022: {short:"IPCC, 2022", text:"Castellanos, E., Lemos, M. F., Astigarraga, L. et al. (2022). Central and South America. En <em>Climate Change 2022: Impacts, Adaptation and Vulnerability</em>. Contribución del Grupo de Trabajo II al Sexto Informe de Evaluación del IPCC, cap. 12, págs. 1691 y 1702.", url:"https://www.ipcc.ch/report/ar6/wg2/downloads/report/IPCC_AR6_WGII_Chapter12.pdf"},
  viviroli2020: {short:"Viviroli et al., 2020", text:"Viviroli, D., Kummu, M., Meybeck, M., Kallio, M. y Wada, Y. (2020). Increasing dependence of lowland populations on mountain water resources. <em>Nature Sustainability</em>, 3, 917-928. Consultado en el resumen de Mountain Research Initiative.", url:"https://mountainresearchinitiative.org/news/1-5-billion-people-will-depend-on-water-from-mountains/"},
  c3unam2025: {short:"C3 UNAM, 2025", text:"Centro de Ciencias de la Complejidad, UNAM (2025, 19 de enero). Nota sobre la charla de Hugo Delgado Granados (Instituto de Geofísica, UNAM) acerca de los glaciares mexicanos.", url:"https://www.c3.unam.mx/pdf/noticias/Noticia338.pdf"},
  uv2025: {short:"Universidad Veracruzana, 2025", text:"Universidad Veracruzana (2025, enero). Nota sobre el estudio de Víctor Soto (Centro de Ciencias de la Tierra) «Retraction status of Glaciar Norte of Pico de Orizaba, Mexico: Update to 2024», <em>Journal of South American Earth Sciences</em>.", url:"https://uv.mx/prensa/?p=150544"},
  onu2026: {short:"ONU-Agua, 2026", text:"ONU-Agua y UNESCO (2026). <em>Informe Mundial de las Naciones Unidas sobre el Desarrollo de los Recursos Hídricos 2026: Agua para todas las personas, igualdad de derechos y oportunidades</em>. Consultado en la nota de la Representación Permanente de España ante la UNESCO (19 de marzo de 2026).", url:"https://www.exteriores.gob.es/RepresentacionesPermanentes/unesco/es/Comunicacion/Noticias/Paginas/Articulos/La-crisis-mundial-del-agua-se-agrava-por-las-desigualdades-de-g%C3%A9nero-seg%C3%BAn-un-nuevo-informe-de-la-ONU.aspx"},
  jmp2025: {short:"OMS y UNICEF, 2025", text:"OMS y UNICEF, Programa Conjunto de Monitoreo (JMP) (2025). <em>Progress on household drinking water, sanitation and hygiene 2000–2024</em>. Consultado en UNICEF Data.", url:"https://data.unicef.org/topic/water-and-sanitation/sanitation/"},
  ods2026: {short:"ONU, Informe de los ODS 2026", text:"Naciones Unidas (2026). <em>The Sustainable Development Goals Report 2026, Extended Report</em>, objetivo 6, indicador 6.3.1.", url:"https://unstats.un.org/sdgs/report/2026/extended-report/Extended-Report-2026_Goal-6.pdf"},
  unicefmx2026: {short:"UNICEF México y SEMARNAT, 2026", text:"UNICEF México y SEMARNAT (2026). <em>La infancia y adolescencia frente al cambio climático en México</em>. Págs. 49, 78 y 131 del PDF.", url:"https://www.unicef.org/mexico/informes/infancia-y-adolescencia-cambio-climatico-mexico"},
  onu64292: {short:"ONU, 2010", text:"Asamblea General de las Naciones Unidas (2010, 28 de julio). Resolución A/RES/64/292: <em>El derecho humano al agua y el saneamiento</em>.", url:"https://digitallibrary.un.org/record/687002/files/A_RES_64_292-ES.pdf"},
  cpeum: {short:"Constitución, art. 4.º", text:"<em>Constitución Política de los Estados Unidos Mexicanos</em>, artículo 4.º, párrafo sobre el derecho al agua. Citado en la NDC 3.0 y en UNICEF México y SEMARNAT (2026).", url:"https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf"},
  lga2025: {short:"Ley General de Aguas, 2025", text:"Diario Oficial de la Federación (2025, 11 de diciembre). Decreto por el que se expide la <em>Ley General de Aguas</em> y se reforman diversas disposiciones de la Ley de Aguas Nacionales. LGA arts. 6, 9, 15, 34 y 40; LAN arts. 4 y 22.", url:"https://gaceta.diputados.gob.mx/PDF/66/2025/dic/DOF11DIC2025-LeyGralAguas.pdf"},
  sedema2023: {short:"SEDEMA, 2023", text:"Secretaría del Medio Ambiente de la Ciudad de México (2024). <em>Evaluación interna del programa social Cosecha de Lluvia 2023</em>. Págs. 5-6, 19 y 44-46.", url:"https://sedema.cdmx.gob.mx/storage/app/media/CosechaDeLluvia/Evaluacion_interna_del_programa_social_Cosecha_de_Lluvia_2023.pdf"},
  cronica2024: {short:"La Crónica, 2024", text:"Mayoral, G. (2024, 2 de agosto). Cosechadores de lluvia captarán 918 millones de litros de agua al año en escuelas públicas de la CDMX. <em>La Crónica de Hoy</em>. Datos de la SEDEMA.", url:"https://www.cronica.com.mx/metropoli/cosechadores-lluvia-captaran-918-millones-litros-agua-ano-escuelas-publicas-cdmx.html"},
  pauta2025: {short:"Pauta, 2025", text:"Pauta (2025, 18 de diciembre). Parque Intercomunal Inundable Víctor Jara: qué es y por qué se llama así.", url:"https://www.pauta.cl/ciudad/2025/12/18/parque-intercomunal-inundable-victor-jara-que-es-y-por-que-se-llama-asi.html"},
  caf2026: {short:"CAF, 2026", text:"CAF, Banco de Desarrollo de América Latina y el Caribe (2026). <em>Parque de Lluvia Solidaridad: sistema de hidroparques para la subcuenca de Xochimilco en la Ciudad de México</em>. Elaborado entre 2018 y 2019. Scioteca CAF.", url:"https://scioteca.caf.com"},
  weadapt: {short:"weADAPT", text:"weADAPT (s. f.). <em>Ensuring future water security through direct potable reuse in Windhoek, Namibia</em>.", url:"https://weadapt.org/?p=25260"},
  wwdr2018: {short:"ONU, 2018", text:"WWAP / ONU-Agua (2018). <em>Informe Mundial de las Naciones Unidas sobre el Desarrollo de los Recursos Hídricos 2018: Soluciones basadas en la naturaleza para la gestión del agua</em>. Resumen ejecutivo, p. 7.", url:"https://www.pseau.org/outils/ouvrages/unesco_soluciones_basadas_en_la_naturaleza_para_la_gestion_del_agua_resumen_ejecutivo_2018.pdf"},
  wwdr2020: {short:"ONU, 2020", text:"UNESCO y ONU-Agua (2020). <em>Informe Mundial de las Naciones Unidas sobre el Desarrollo de los Recursos Hídricos 2020: Agua y cambio climático</em>. Resumen ejecutivo, p. 3, y págs. 115-116. Copia de la CNDH.", url:"https://aguaysaneamiento.cndh.org.mx/Content/doc/Normatividad/Informe_Agua_Cambio_Climatico.pdf"},
  general: {short:"Conocimiento general", text:"<span class='ext-tag'>Conocimiento general</span> Explicaciones del ciclo del agua, los acuíferos, los captadores de lluvia, las ciudades esponja, los ecosistemas y las acciones sugeridas, con nuestras palabras. No vienen de un informe específico.", url:""}
}
};
})();
