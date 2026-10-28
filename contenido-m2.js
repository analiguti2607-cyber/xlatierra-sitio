/* =====================================================================
   XLATIERRA · CONTENIDO DEL MÓDULO 2
   «Conocer para proteger: biodiversidad de América Latina»
   ---------------------------------------------------------------------
   Mismas reglas que contenido.js (Módulo 1). Bloques nuevos:
   fig      foto real con crédito  {t:"fig", src, alt, cap, credit, license, link}
   species  ficha de Axo           {t:"species", sp:"ajolote"}   (ver species abajo)
   cta      botón grande           {t:"cta", icon, title, html, href, btn}
   match    ¿Quién vive aquí?      {t:"match", title, q, eco:[...], items:[{n, sci, icon, a, e}]}
   web      La red de la vida      {t:"web", ...}
   Cada lección tiene refs:[...] con claves de la lista «refs» (al final).

   Marcas:
   // VERIFICADO -> dato revisado contra su fuente original (28/10/2026)
   // GENERAL    -> conocimiento general de biología/ecología; no viene de un
                    informe específico. Pendiente de revisión de Ana Ceci y CONABIO.
   Detalle completo en DATOS_EXTERNOS_APROBADOS.md
   ===================================================================== */

(function () {
var CM = "https://commons.wikimedia.org/wiki/";
function photo(file, credit, license, cap, alt) {
  return { src: CM + "Special:FilePath/" + encodeURIComponent(file) + "?width=900", link: CM + "File:" + encodeURIComponent(file),
           credit: credit, license: license, cap: cap || "", alt: alt || cap || "" };
}
var PH = {
  jaguar: photo("Jaguar_(Panthera_onca_palustris)_male_Three_Brothers_River_2.jpg", "Charles J. Sharp", "CC BY-SA 4.0", "Jaguar macho en el río Tres Hermanos, Pantanal (Brasil).", "Jaguar recostado a la orilla de un río"),
  ajolote: photo("Ambystoma_mexicanum_1zz.jpg", "David J. Stang", "CC BY-SA 4.0", "Ajolote (<em>Ambystoma mexicanum</em>) en un acuario.", "Ajolote visto de frente"),
  inia: photo("Inia_geoffrensis_boliviensis_9274062.jpg", "Ramon y Suzanne Vargas (vía iNaturalist)", "CC BY-SA 4.0", "Delfín de río boliviano (<em>Inia geoffrensis boliviensis</em>), pariente cercano del delfín rosado.", "Delfín de río asomándose del agua"),
  vaquita: photo("Vaquita6_Olson_NOAA.jpg", "Paula Olson / NOAA", "Dominio público", "Dos vaquitas marinas en el Alto Golfo de California.", "Dos vaquitas marinas nadando en la superficie"),
  quetzal: photo("Resplendent_Quetzal_male_-_Cloud_Forest_in_Costa_Rica.jpg", "Francesco Veronesi", "CC BY-SA 2.0", "Quetzal macho en un bosque de niebla de Costa Rica.", "Quetzal macho posado en una rama")
};
window.XLT_PHOTOS = PH;

window.XLT_CONTENT = {

course: {
  id: "m2",
  title: "Conocer para proteger: biodiversidad de América Latina",
  label: "Módulo 2",
  subtitle: "Descubre por qué América Latina es una de las regiones con más vida del planeta, qué la amenaza y qué podemos hacer para cuidarla. En español, con datos de toda la región y fuentes que puedes revisar.",
  totalTime: "~2 h",
  heroGuide: "ajolote",
  certGuide: "ajolote",
  plan: ["r13a", "r13b", "r13c", "r13d"]
},

characters: {
  espiritu: {name:"Ameyalli", role:"El espíritu del agua · guía de la aventura", verb:"Descubrir", img:"img/personaje-espiritu.png",
             poses:{feliz:"img/pose-espiritu-feliz.png", pensativo:"img/pose-espiritu-pensativo.png"},
             origin:"Los manantiales: el agua que brota de la tierra y alimenta ríos, humedales y cenotes",
             quote:"¡Cada descubrimiento nos acerca a un planeta mejor!"},
  ajolote:  {name:"Axo", role:"El ajolote experto en biodiversidad", verb:"Comprender", img:"img/personaje-ajolote.png",
             poses:{feliz:"img/pose-ajolote-feliz.png", pensativo:"img/pose-ajolote-pensativo.png"},
             origin:"Los humedales de Xochimilco (ajolote, Ambystoma mexicanum)",
             quote:"¡Mira todo lo que podemos aprender de la naturaleza!"},
  jaguar:   {name:"Balam", role:"El jaguar guardián de los ecosistemas", verb:"Proteger", img:"img/personaje-jaguar.png",
             poses:{feliz:"img/pose-jaguar-feliz.png", pensativo:"img/pose-jaguar-pensativo.png"},
             origin:"La Selva Maya (jaguar, Panthera onca)",
             quote:"¡Proteger la naturaleza también es nuestra responsabilidad!"},
  nutria:   {name:"Lontra", role:"La nutria exploradora y solucionadora", verb:"Actuar", img:"img/personaje-nutria.png",
             poses:{feliz:"img/pose-nutria-feliz.png", pensativo:"img/pose-nutria-pensativo.png"},
             origin:"Los ríos de México (nutria de río neotropical, Lontra longicaudis)",
             quote:"¡Menos quedarnos con la duda y más ponernos en acción!"}
},

units: [
  {id:"u1", guide:"espiritu", title:"Unidad 1 · ¿Qué es la biodiversidad?", desc:"Los tres niveles de la vida y por qué nuestra región es tan rica."},
  {id:"u2", guide:"ajolote", title:"Unidad 2 · Cómo funciona la vida", desc:"Ecosistemas, quién vive dónde, redes de alimentación y lo que la naturaleza nos da."},
  {id:"u3", guide:"jaguar", title:"Unidad 3 · Lo que la amenaza", desc:"Las causas de la pérdida, el cambio climático y las especies en riesgo."},
  {id:"u4", guide:"nutria", title:"Unidad 4 · Cómo la protegemos", desc:"Pueblos indígenas, áreas protegidas, ciencia ciudadana y tu plan de acción."}
],

/* Actividades fuera de la ruta principal (no cuentan para el certificado) */
extras: [
  {icon:"🗺️", title:"Mapa interactivo de la biodiversidad", href:"mapa.html", tag:"Extra opcional",
   desc:"Recorre 15 ecosistemas de México a la Patagonia, juega «¿Dónde vive?» y descubre los países megadiversos."},
  {icon:"🦎", title:"Galería: las fichas de Axo", href:"#fichas", tag:"Galería",
   desc:"Todas las especies del módulo en un solo lugar, con su categoría de riesgo y sus fuentes."}
],

lessons: [

/* ============================ UNIDAD 1 ============================ */
{ id:"l1", unit:"u1", title:"¿Qué es la biodiversidad?", time:"9 min",
  refs:["cdb1992","conabio_contexto","general"],
  blocks:[
  {t:"p", html:"Piensa en el último lugar con naturaleza que visitaste: un parque, un río, la milpa de tu familia, una playa. Ahora imagina que pudieras ver <strong>todo</strong> lo que vive ahí: los árboles, los insectos bajo las hojas, los hongos en el suelo, las bacterias en el agua y también las diferencias entre un árbol y otro de la misma especie. Todo eso junto tiene un nombre: <strong>biodiversidad</strong>."},
  {t:"h", text:"La definición oficial"},
  {t:"p", html:"El <strong>Convenio sobre la Diversidad Biológica</strong> (CDB), el acuerdo internacional que firmaron los países en la Cumbre de la Tierra de Río de Janeiro en 1992, la define así en su artículo 2: «la variabilidad de organismos vivos de cualquier fuente […] comprende la diversidad dentro de cada especie, entre las especies y de los ecosistemas»."},
  {t:"p", html:"En palabras sencillas: la biodiversidad no es solo «cuántos animales hay». Es la <strong>variedad de la vida en tres niveles</strong> que están conectados entre sí."},
  {t:"table", head:["Nivel","Qué es","Un ejemplo de América Latina"], rows:[
    ["🧬 Genético","Las diferencias dentro de una misma especie: no hay dos mazorcas, dos jaguares o dos personas iguales.","Las muchas variedades de maíz nativo, papa o frijol que han cuidado comunidades campesinas e indígenas durante generaciones."],
    ["🐾 De especies","La variedad de especies distintas que viven en un lugar.","México alberga entre el 10 y el 12% de las especies conocidas del mundo (CONABIO)."],
    ["🌎 De ecosistemas","La variedad de lugares donde la vida se organiza: selvas, desiertos, manglares, arrecifes, páramos.","En un mismo país puedes pasar de un desierto a una selva o a un arrecife de coral."]
  ]},
  {t:"guess", q:"¿Cuál de estos es un ejemplo de diversidad GENÉTICA?",
   o:["Que en una región haya selva, manglar y arrecife","Que existan muchas variedades distintas de maíz nativo","Que en un bosque vivan jaguares, tucanes y monos"], a:1,
   e:"Las variedades de maíz son todas de la misma especie, pero tienen diferencias en sus genes: color, tamaño, resistencia a la sequía. La opción 1 es diversidad de ecosistemas y la 3, de especies."},
  {t:"h", text:"¿Por qué importa la diversidad genética?"},
  {t:"answers", short:"Porque la variedad dentro de una especie le da opciones para adaptarse a enfermedades, plagas o a un clima que cambia.",
   long:"<p>Si todas las plantas de un cultivo fueran genéticamente iguales, una sola plaga podría acabar con todas. Cuando hay variedad, es más probable que algunas resistan. Por eso las semillas nativas que guardan las comunidades son un tesoro: son opciones de adaptación para el futuro.</p><p>Lo mismo pasa con los animales silvestres: una población pequeña y aislada pierde variedad genética y se vuelve más frágil.</p><p class='hint'>Esta explicación es conocimiento general de biología; no viene de un informe específico.</p>"},
  {t:"note", kind:"info", title:"Los tres niveles están conectados", html:"Si un ecosistema desaparece, se pierden las especies que viven ahí. Si una especie queda con muy pocos individuos, pierde diversidad genética. Cuidar un nivel ayuda a cuidar los otros dos."},
  {t:"land", html:""},
  {t:"reflect", id:"r1", q:"Piensa en un lugar de tu comunidad. ¿Qué ejemplo de cada nivel (genético, especies, ecosistemas) puedes encontrar ahí?"}
  ]},

{ id:"l2", unit:"u1", title:"América Latina: una potencia de vida", time:"9 min",
  refs:["ipbes2018","mittermeier1997","conabio_contexto","general"],
  blocks:[
  {t:"p", html:"Hay un grupo pequeño de países que, juntos, concentran la mayor parte de la vida conocida del planeta. Se les llama <strong>países megadiversos</strong>. Según la CONABIO, son <strong>17</strong> y albergan alrededor del <strong>70% de la diversidad biológica</strong> del mundo."},
  {t:"stats", items:[
    {n:"7 de 17", l:"de los países con más biodiversidad del mundo están en el continente americano", s:"IPBES, 2018"},
    {n:"40%", l:"de la capacidad de los ecosistemas del planeta para producir materiales naturales y absorber residuos está en las Américas", s:"IPBES, 2018"},
    {n:"13%", l:"de la población mundial vive en las Américas", s:"IPBES, 2018"}
  ]},
  {t:"p", html:"De esos siete países del continente, <strong>seis son latinoamericanos</strong>: <strong>Brasil, Colombia, Ecuador, México, Perú y Venezuela</strong> (el séptimo es Estados Unidos). Esta lista viene del estudio de Mittermeier y colaboradores (1997), que es el que suele usarse para hablar de los 17 países megadiversos."},
  {t:"guess", q:"¿Cuántos de los 17 países megadiversos del mundo son latinoamericanos?",
   o:["2","4","6","10"], a:2,
   e:"Seis: Brasil, Colombia, Ecuador, México, Perú y Venezuela. Con Estados Unidos, el continente americano suma 7 de 17, como reporta la evaluación de la IPBES."},
  {t:"h", text:"¿Por qué hay tanta vida aquí?"},
  {t:"p", html:"No hay una sola razón. Se juntan varias:"},
  {t:"list", items:[
    "<strong>Estamos en los trópicos.</strong> Gran parte de la región recibe mucha luz y calor todo el año, y en general los trópicos tienen más especies que las zonas frías.",
    "<strong>Montañas que crean «muchos mundos» en poco espacio.</strong> Los Andes, las Sierras Madre o el Eje Neovolcánico hacen que en pocos kilómetros cambien la altura, la temperatura y la lluvia. Cada franja tiene sus propias especies.",
    "<strong>Puntos de encuentro.</strong> En México y Centroamérica se mezclan especies que llegaron del norte (de climas templados) con especies del sur (de climas tropicales).",
    "<strong>Una historia muy larga.</strong> Millones de años de cambios en el clima y en la geografía permitieron que surgieran muchas especies que solo viven aquí (endémicas)."
  ]},
  {t:"note", kind:"info", title:"¿De dónde sale esta explicación?", html:"Estas cuatro razones son conocimiento general de biogeografía. Las fuentes del módulo las mencionan de forma general, pero no las detallan. Por eso las marcamos para revisión."},
  {t:"cta", icon:"🗺️", title:"Mira los países megadiversos en el mapa", html:"Actividad extra opcional: activa la capa «Países megadiversos» y recorre los ecosistemas de la región.", href:"mapa.html#megadiversos", btn:"Abrir mapa"},
  {t:"reflect", id:"r2", q:"¿Sabías que tu país (o tu región) es parte de una de las zonas con más vida del planeta? ¿Cómo cambia eso la forma en que ves tu territorio?"}
  ]},

{ id:"l3", unit:"u1", title:"México megadiverso y el caso del ajolote", time:"10 min",
  refs:["conabio_contexto","llorente2008","pace2018","general"],
  blocks:[
  {t:"p", html:"México es uno de los 17 países megadiversos. La CONABIO, la institución del gobierno mexicano que reúne el conocimiento sobre la biodiversidad del país, estima que en México vive <strong>entre el 10 y el 12% de las especies conocidas</strong> del mundo."},
  {t:"stats", items:[
    {n:"2.º", l:"lugar mundial en reptiles (975 especies)", s:"CONABIO, con datos de Llorente-Bousquets y Ocegueda, 2008"},
    {n:"3.er", l:"lugar mundial en mamíferos (587 especies)", s:"CONABIO, con datos de Llorente-Bousquets y Ocegueda, 2008"},
    {n:"5.º", l:"lugar mundial en anfibios (430 especies)", s:"CONABIO, con datos de Llorente-Bousquets y Ocegueda, 2008"},
    {n:"+23 mil", l:"especies de plantas vasculares; unas 11,600 solo existen en México", s:"CONABIO"}
  ]},
  {t:"note", kind:"warn", title:"Ojo: los rankings cambian según la fuente", html:"Mientras investigábamos encontramos documentos oficiales que dan lugares distintos (por ejemplo, uno dice que México es 1.º en reptiles). Pasa porque cada estudio usa años y métodos diferentes, y porque se siguen describiendo especies nuevas. Aquí usamos la cifra publicada por la CONABIO. <strong>Pensar críticamente también es preguntar: ¿de qué año es este dato y quién lo calculó?</strong>"},
  {t:"guess", q:"Según la CONABIO, ¿en qué lugar del mundo está México por número de especies de reptiles?",
   o:["1.º","2.º","5.º","11.º"], a:1,
   e:"Segundo lugar, con 975 especies. El 11.º lugar corresponde a las aves (más de 1,100 especies)."},
  {t:"h", text:"El caso del ajolote"},
  {t:"p", html:"El ajolote (<em>Ambystoma mexicanum</em>) es una salamandra que solo existe en México. Según el Programa de Acción para la Conservación de la Especie (PACE) publicado por la SEMARNAT y la CONANP en 2018, se cree que antes vivía en buena parte del Valle de México. <strong>Hoy en vida silvestre se encuentra en canales y humedales del sur de la Ciudad de México</strong>, sobre todo en Xochimilco."},
  {t:"species", sp:"ajolote"},
  {t:"p", html:"El mismo PACE explica sus principales amenazas: canales <strong>contaminados por aguas residuales y basura</strong>, <strong>peces exóticos como carpas y tilapias</strong> (que no son de ahí y compiten con él o se comen sus huevos y crías) y la <strong>extracción</strong> de ejemplares para consumo."},
  {t:"answers", short:"El ajolote es un símbolo cultural enorme, pero eso no lo ha salvado: su hábitat sigue degradándose.",
   long:"<p>El ajolote aparece en billetes, peluches, murales y hasta en videojuegos. Esa fama ayuda a que la gente lo conozca, pero <strong>conocer no es lo mismo que proteger</strong>. Un ajolote en una pecera no ayuda a que existan ajolotes en Xochimilco: lo que necesita es agua limpia, canales sin especies invasoras y que las chinampas sigan vivas.</p><p>Esa es la idea de este módulo: <strong>conocer para proteger</strong>.</p>"},
  {t:"land", html:""},
  {t:"reflect", id:"r3", q:"¿Qué especie de tu región es muy famosa pero quizá está en riesgo? ¿Qué sabes de su hábitat?"}
  ]},

/* ============================ UNIDAD 2 ============================ */
{ id:"l4", unit:"u2", title:"Los grandes ecosistemas de América Latina", time:"9 min",
  refs:["ipbes2018","birdlife2023","wlt_oso","general"],
  blocks:[
  {t:"p", html:"Un <strong>ecosistema</strong> es el conjunto de seres vivos de un lugar y su relación con el agua, el suelo, el aire y el clima. Para entender América Latina, Axo agrupa sus ecosistemas en cuatro grandes familias:"},
  {t:"table", head:["Familia","Ejemplos"], rows:[
    ["🌳 Selvas y bosques","Amazonía, Selva Maya, Selva Atlántica, bosques secos tropicales, bosques de niebla"],
    ["💧 Agua dulce","Ríos como el Amazonas y el Orinoco, humedales como el Pantanal, lagos y canales como Xochimilco"],
    ["🌊 Mares y costas","Arrecifes de coral del Caribe, manglares, el Golfo de California, las Islas Galápagos"],
    ["⛰️ Montañas, pastizales y zonas secas","Páramos andinos, Cerrado, Chaco, Pampas, Patagonia, desiertos del norte de México"]
  ]},
  {t:"h", text:"¿Cuánto hemos transformado?"},
  {t:"p", html:"La evaluación de la <strong>IPBES</strong> (la plataforma científica de la ONU sobre biodiversidad) calculó cuánto de algunos ecosistemas de la región se ha convertido a otros usos, como agricultura, ganadería o ciudades, desde la llegada de los europeos:"},
  {t:"table", head:["Ecosistema","Dónde está","Transformado"], rows:[
    ["Selva Atlántica","Brasil, Paraguay, Argentina","<strong>88%</strong>"],
    ["Bosque tropical seco","Mesoamérica","<strong>72%</strong>"],
    ["Pastizales del Río de la Plata","Argentina, Uruguay, Brasil","<strong>70%</strong>"],
    ["Bosque tropical seco","Caribe","<strong>66%</strong>"],
    ["Sabana del Cerrado","Brasil","<strong>50%</strong>"],
    ["Chaco seco","Argentina, Bolivia, Paraguay","<strong>34%</strong>"],
    ["Selva amazónica","9 países de Sudamérica","<strong>17%</strong>"]
  ]},
  {t:"p", html:"<small class='hint'>Fuente: IPBES (2018), resumen para responsables de políticas de la evaluación de las Américas. Los países de cada ecosistema son conocimiento geográfico general.</small>"},
  {t:"guess", q:"¿Cuál de estos ecosistemas ha perdido la mayor parte de su superficie original?",
   o:["La Amazonía","La Selva Atlántica","El Chaco seco"], a:1,
   e:"La Selva Atlántica: 88% transformado. Mucha gente piensa en la Amazonía primero, pero la IPBES calcula 17% para ella. Eso no significa que la Amazonía esté a salvo: lo verás en la lección 9."},
  {t:"h", text:"Dos habitantes de bosques de montaña"},
  {t:"species", sp:"quetzal"},
  {t:"species", sp:"oso"},
  {t:"cta", icon:"🗺️", title:"Recorre estos ecosistemas en el mapa", html:"15 lugares de México a la Patagonia, con sus especies y datos. Actividad extra opcional.", href:"mapa.html", btn:"Explorar"},
  {t:"reflect", id:"r4", q:"¿En cuál de las cuatro familias de ecosistemas vives tú? ¿Ha cambiado ese lugar en los últimos años?"}
  ]},

{ id:"l5", unit:"u2", title:"¿Quién vive aquí?", time:"9 min",
  refs:["ipbes2018","general"],
  blocks:[
  {t:"p", html:"Cada especie necesita condiciones particulares para vivir: cierta temperatura, cierto tipo de agua, cierta comida. Al lugar donde encuentra todo eso le llamamos su <strong>hábitat</strong>."},
  {t:"p", html:"Algunas especies pueden vivir en muchos ecosistemas distintos. Otras son <strong>endémicas</strong>: solo existen en un lugar del planeta. El ajolote y la vaquita marina, por ejemplo, son endémicos de México."},
  {t:"match", title:"¿Quién vive aquí?", q:"Axo armó este reto: elige el tipo de ecosistema donde vive cada especie. Algunas pueden moverse entre varios, así que elige donde es más característica.",
   eco:["Selvas y bosques","Agua dulce","Mares y costas","Montañas, pastizales o zonas secas"],
   done:"Ahora ya sabes que conocer el hábitat de una especie es el primer paso para protegerla: si el hábitat desaparece, la especie también.",
   items:[
    {n:"Delfín rosado", sci:"Inia geoffrensis", icon:"🐬", a:1, e:"Vive en ríos y lagos de las cuencas del Amazonas y el Orinoco. Es un delfín de agua dulce."},
    {n:"Vaquita marina", sci:"Phocoena sinus", icon:"🐋", a:2, e:"Solo vive en el norte del Golfo de California, en México. Es endémica de ese mar."},
    {n:"Oso andino", sci:"Tremarctos ornatus", icon:"🐻", a:3, e:"Vive en los Andes, de Venezuela al norte de Argentina, en bosques de montaña y páramos."},
    {n:"Ajolote", sci:"Ambystoma mexicanum", icon:"🦎", a:1, e:"Vive en canales y humedales de agua dulce del sur del Valle de México, como Xochimilco."},
    {n:"Mono saraguato", sci:"Alouatta spp.", icon:"🐒", a:0, e:"Vive en las copas de los árboles de selvas de México y Centroamérica."},
    {n:"Tortuga carey", sci:"Eretmochelys imbricata", icon:"🐢", a:2, e:"Vive en mares tropicales y es típica de los arrecifes de coral, como los del Caribe."},
    {n:"Guanaco", sci:"Lama guanicoe", icon:"🦙", a:3, e:"Es pariente silvestre de la llama. Vive en estepas, pastizales y montañas de Sudamérica, como la Patagonia."},
    {n:"Ñandú", sci:"Rhea americana", icon:"🐦", a:3, e:"Es un ave grande que no vuela. Vive en pastizales y sabanas de Sudamérica, como las Pampas y el Cerrado."}
   ]},
  {t:"note", kind:"info", title:"¿De dónde salen estas respuestas?", html:"Los lugares donde vive cada especie son conocimiento general de zoología. El ajolote, la vaquita y el oso andino están respaldados por las fuentes de las lecciones 3, 4 y 10."},
  {t:"h", text:"Una especie, un territorio"},
  {t:"p", html:"Cuando una especie es endémica de un lugar pequeño, todo su futuro depende de ese lugar. Si los canales de Xochimilco se degradan, no hay otro sitio silvestre donde el ajolote pueda vivir. Por eso las especies endémicas suelen estar entre las más vulnerables."},
  {t:"reflect", id:"r5", q:"Busca (o recuerda) una especie que viva cerca de donde estás. ¿Es endémica de tu país o vive en muchos lugares?"}
  ]},

{ id:"l6", unit:"u2", title:"La red de la vida", time:"10 min",
  refs:["quigley2017","jaguar2025","general"],
  blocks:[
  {t:"p", html:"Ninguna especie vive sola. Unas se comen a otras, algunas dispersan semillas, otras polinizan flores. Todas esas relaciones forman una <strong>red</strong>. Si quitas un hilo, se mueven todos los demás."},
  {t:"p", html:"Balam viene de la <strong>Selva Maya</strong>, el gran bosque que comparten México, Guatemala y Belice. El jaguar es el felino más grande de América y el tercero más grande del mundo, después del tigre y el león. Es un <strong>depredador tope</strong>: casi nada lo caza a él."},
  {t:"web", title:"La red de la vida en la Selva Maya", q:"Este es un modelo <strong>simplificado</strong> de quién se alimenta de quién. Las flechas van de la comida hacia quien la come. Toca cada integrante y luego quita al jaguar para ver qué pasa.",
   removeLabel:"🐆 Quitar al jaguar",
   nodes:[
    {id:"ramon", name:"Ramón y frutos", sci:"Brosimum alicastrum", icon:"🌳", lvl:1, x:300, y:370, role:"Productor", eats:"Hace su propio alimento con la luz del sol (fotosíntesis). Sus frutos y semillas alimentan a muchos animales."},
    {id:"tepez", name:"Tepezcuintle", sci:"Cuniculus paca", icon:"🐹", lvl:2, x:85, y:220, role:"Herbívoro", eats:"Come frutos caídos, semillas y brotes. Lo caza el jaguar."},
    {id:"venado", name:"Venado", sci:"Odocoileus virginianus", icon:"🦌", lvl:2, x:200, y:220, role:"Herbívoro", eats:"Come hojas, brotes y frutos. Lo caza el jaguar."},
    {id:"pecari", name:"Pecarí", sci:"Dicotyles tajacu", icon:"🐗", lvl:2, x:315, y:220, role:"Omnívoro", eats:"Come raíces, frutos, semillas e insectos. Lo caza el jaguar."},
    {id:"sara", name:"Saraguato", sci:"Alouatta pigra", icon:"🐒", lvl:2, x:430, y:220, role:"Herbívoro", eats:"Come hojas jóvenes, flores y frutos en las copas de los árboles."},
    {id:"tucan", name:"Tucán", sci:"Ramphastos sulfuratus", icon:"🐦", lvl:2, x:535, y:220, role:"Frugívoro", eats:"Come sobre todo frutos y dispersa sus semillas al volar."},
    {id:"jaguar", name:"Jaguar", sci:"Panthera onca", icon:"🐆", lvl:3, x:200, y:65, role:"Depredador tope", eats:"Caza mamíferos medianos y grandes, como venados, pecaríes y tepezcuintles."}
   ],
   links:[["ramon","tepez"],["ramon","venado"],["ramon","pecari"],["ramon","sara"],["ramon","tucan"],["tepez","jaguar"],["venado","jaguar"],["pecari","jaguar"]],
   remove:"jaguar",
   cascade:[
    {up:["tepez","venado","pecari"], text:"Sin su depredador, las poblaciones de venados, pecaríes y tepezcuintles <strong>crecen</strong>."},
    {down:["ramon"], text:"Hay más bocas comiendo semillas, frutos caídos y plántulas. <strong>Menos árboles jóvenes</strong> logran crecer."},
    {down:["sara","tucan"], text:"Con el tiempo hay menos árboles nuevos, y los monos y tucanes que dependen de sus hojas y frutos <strong>también lo resienten</strong>."}
   ],
   done:"💡 A esto se le llama <strong>cascada trófica</strong>: un cambio arriba de la red baja «en cascada» y afecta a todos. Es un <strong>modelo simplificado</strong> basado en ecología general; en la selva real hay muchas más especies y relaciones."},
  {t:"species", sp:"jaguar"},
  {t:"guess", q:"¿Qué es una cascada trófica?",
   o:["Una cascada de agua en la selva","Una cadena de efectos que empieza cuando cambia una especie de la red alimentaria","La migración de animales por el cambio climático"], a:1,
   e:"Exacto: cuando una especie desaparece o cambia mucho (como un depredador tope), el efecto se transmite a las especies que come y, a través de ellas, a las plantas."},
  {t:"note", kind:"heart", title:"Por qué cuidar al jaguar cuida a muchos más", html:"Un jaguar necesita territorios grandes y bien conservados. Si protegemos suficiente selva para que vivan jaguares, protegemos también a miles de especies que comparten ese espacio. Por eso a veces se le llama <strong>especie paraguas</strong> (concepto de ecología general)."},
  {t:"reflect", id:"r6", q:"Piensa en tu ciudad o comunidad como una red. ¿Qué «especie» o elemento, si desapareciera, causaría una cascada de efectos?"}
  ]},

{ id:"l7", unit:"u2", title:"Lo que la naturaleza nos da", time:"9 min",
  refs:["ipbes2018","ipbes2018prensa","general"],
  blocks:[
  {t:"p", html:"La comida que comes, el agua que tomas, el aire, muchas medicinas, la madera, hasta el paisaje que te inspira: todo viene, de una u otra forma, de la naturaleza. La IPBES llama a esto <strong>contribuciones de la naturaleza a las personas</strong>."},
  {t:"table", head:["Tipo","Ejemplos"], rows:[
    ["🍽️ Materiales","Alimentos, agua, madera, fibras, medicinas"],
    ["🛡️ De regulación","Polinización, regulación del clima, purificación del agua, protección contra inundaciones y tormentas"],
    ["💛 No materiales","Identidad, aprendizaje, inspiración, espiritualidad, sentido de pertenencia"]
  ]},
  {t:"stats", items:[
    {n:"+24 billones","l":"de dólares al año: valor estimado de las contribuciones de los ecosistemas terrestres de las Américas, similar al PIB de toda la región", s:"IPBES, 2018"},
    {n:"65%", l:"de estas contribuciones están disminuyendo; 21% disminuyen fuertemente", s:"IPBES, 2018"},
    {n:"+50%", l:"de la población de las Américas enfrenta problemas de seguridad hídrica", s:"IPBES, 2018"}
  ]},
  {t:"note", kind:"info", title:"¿Billones en español?", html:"En español, un <strong>billón</strong> es un millón de millones (1,000,000,000,000). En inglés eso se dice «trillion». Ojo cuando leas noticias traducidas."},
  {t:"guess", q:"Según la IPBES, ¿qué está pasando con la mayoría de las contribuciones de la naturaleza en las Américas?",
   o:["Están aumentando","Se mantienen estables","Casi dos tercios están disminuyendo"], a:2,
   e:"El 65% está disminuyendo. Es decir, la naturaleza nos está dando cada vez menos de lo que necesitamos."},
  {t:"h", text:"La naturaleza también es cultura"},
  {t:"p", html:"La misma evaluación señala que <strong>más del 60% de las lenguas y culturas</strong> asociadas a la naturaleza en las Américas están en dificultades o en peligro. Cuando un ecosistema se pierde, también se pierden palabras, recetas, cantos y conocimientos que solo existían ahí. A esta unión entre naturaleza y cultura se le llama <strong>diversidad biocultural</strong>."},
  {t:"answers", short:"Porque la mayoría de lo que valoramos depende de ecosistemas sanos, aunque no aparezca en ningún precio.",
   long:"<p>Cuando compramos un aguacate no pagamos por las abejas que lo polinizaron, ni por el bosque que recargó el acuífero del que salió el agua de riego. Como esas contribuciones «no cuestan», es fácil destruirlas sin darnos cuenta.</p><p>Calcular su valor en dinero (como hace la IPBES) es una forma de hacerlas visibles. Pero muchas cosas —como la identidad de un pueblo con su río— no se pueden poner en dólares.</p>"},
  {t:"land", html:""},
  {t:"reflect", id:"r7", q:"Elige algo que usaste hoy (comida, agua, ropa). ¿Qué ecosistema o especie hizo posible que lo tuvieras?"}
  ]},

/* ============================ UNIDAD 3 ============================ */
{ id:"l8", unit:"u3", title:"¿Por qué se está perdiendo?", time:"9 min",
  refs:["ipbes2018","ipbes2018prensa","wwf2024"],
  blocks:[
  {t:"p", html:"La biodiversidad no se pierde «sola». La ciencia identifica causas concretas, que la IPBES llama <strong>impulsores</strong>. Hay dos tipos:"},
  {t:"table", head:["Impulsores directos (lo que daña de forma inmediata)","Impulsores indirectos (lo que está detrás)"], rows:[
    ["🚜 <strong>Cambio de uso del suelo</strong>: convertir selvas, pastizales o humedales en campos agrícolas, potreros o ciudades. Es la causa principal.","📈 Crecimiento de la economía y del consumo"],
    ["🎣 <strong>Sobreexplotación</strong>: pescar, cazar o talar más rápido de lo que la naturaleza se recupera.","👥 Crecimiento de la población"],
    ["🐟 <strong>Especies invasoras</strong>: como las carpas y tilapias en Xochimilco.","🌐 Comercio global: lo que se produce en un lugar se consume muy lejos"],
    ["🧪 <strong>Contaminación</strong> del agua, el suelo y el aire.","🏛️ Gobernanza débil y desigualdad"],
    ["🌡️ <strong>Cambio climático</strong>, que agrava todos los demás.",""]
  ]},
  {t:"stats", items:[
    {n:"22.8%", l:"de la huella ecológica mundial la generan las Américas, con solo el 13% de la población", s:"IPBES, 2018"},
    {n:"~31%", l:"más pequeñas son hoy las poblaciones de especies por área que cuando llegaron los europeos", s:"IPBES, 2018"},
    {n:"40%", l:"podría llegar esa pérdida en 2050 si seguimos igual", s:"IPBES, 2018"}
  ]},
  {t:"h", text:"El Índice Planeta Vivo"},
  {t:"p", html:"Cada dos años, el WWF y la Sociedad Zoológica de Londres publican el <strong>Índice Planeta Vivo</strong>. En 2024 analizaron casi <strong>35,000 tendencias de poblaciones</strong> de <strong>5,495 especies</strong> de anfibios, aves, peces, mamíferos y reptiles entre 1970 y 2020."},
  {t:"stats", items:[
    {n:"-95%", l:"América Latina y el Caribe: la mayor caída de todas las regiones del mundo", s:"WWF, Informe Planeta Vivo 2024"},
    {n:"-73%", l:"promedio mundial", s:"WWF, Informe Planeta Vivo 2024"},
    {n:"-85%", l:"poblaciones de agua dulce, las más afectadas (terrestres -69%, marinas -56%)", s:"WWF, Informe Planeta Vivo 2024"}
  ]},
  {t:"guess", q:"Si el índice de América Latina cayó 95%, ¿qué significa?",
   o:["Que desapareció el 95% de los animales de la región","Que, en promedio, el tamaño de las poblaciones de vertebrados monitoreadas se redujo 95%","Que se extinguió el 95% de las especies"], a:1,
   e:"El índice mide el <strong>cambio promedio en el tamaño de las poblaciones</strong> que se monitorean, no el número total de animales ni de especies extintas. Aun así, es una señal de alarma enorme. Leer bien un dato es parte de entenderlo."},
  {t:"note", kind:"info", title:"Comparado con otras regiones", html:"Según el mismo informe: África -76%, Asia-Pacífico -60%, Norteamérica -39% y Europa y Asia Central -35%. La principal amenaza en todas es la pérdida y degradación de hábitats, impulsada sobre todo por el sistema alimentario."},
  {t:"reflect", id:"r8", q:"¿Cuál de los impulsores directos ves más cerca de donde vives? Describe un ejemplo."}
  ]},

{ id:"l9", unit:"u3", title:"Cambio climático y biodiversidad", time:"10 min",
  refs:["ipbes2018","wwf2024","gardner2003","mongabay2024","general"],
  blocks:[
  {t:"p", html:"En el Módulo 1 viste cómo el cambio climático está calentando el planeta. Ahora vamos a ver qué le hace a la vida. La IPBES advierte que, si seguimos igual, <strong>el cambio climático será el impulsor de pérdida de biodiversidad que más rápido crezca hacia 2050</strong>, hasta igualar al cambio de uso del suelo."},
  {t:"h", text:"1. La Amazonía y su punto de no retorno"},
  {t:"p", html:"El Informe Planeta Vivo 2024 explica que la deforestación y el cambio climático están reduciendo las lluvias en la Amazonía. Se estima que ya se ha deforestado <strong>entre 14 y 17%</strong> de la selva, y que un <strong>punto de inflexión</strong> podría llegar si se destruye <strong>entre 20 y 25%</strong>. Pasado ese punto, partes de la selva podrían dejar de tener las condiciones para seguir siendo selva."},
  {t:"guess", q:"¿Cuánta deforestación podría llevar a la Amazonía a un punto de no retorno, según el WWF?",
   o:["Entre 5 y 10%","Entre 20 y 25%","Más de 70%"], a:1,
   e:"Entre 20 y 25%. Y ya se perdió entre 14 y 17%. El margen es pequeño."},
  {t:"h", text:"2. Ríos que hierven"},
  {t:"p", html:"En septiembre y octubre de 2023, durante una sequía histórica, el agua del lago Tefé, en la Amazonía de Brasil, superó los <strong>40 °C</strong>. Investigadores del Instituto Mamirauá recolectaron <strong>209 cadáveres de delfines de río</strong>, la mayoría delfines rosados. Lo describieron como un evento de mortalidad sin precedentes."},
  {t:"species", sp:"delfin"},
  {t:"h", text:"3. Arrecifes que pierden su color"},
  {t:"p", html:"Los corales son muy sensibles al calor del agua: cuando se calienta demasiado, se «blanquean» y pueden morir. Un estudio publicado en <em>Science</em> en 2003 encontró que la cobertura de coral en los arrecifes del Caribe había pasado de cerca de <strong>50%</strong> a cerca de <strong>10%</strong> en tres décadas. Esa pérdida tiene muchas causas, y el calentamiento del mar es una de las más preocupantes."},
  {t:"species", sp:"carey"},
  {t:"h", text:"4. Especies que suben la montaña"},
  {t:"p", html:"Cuando el clima se calienta, muchas especies de montaña se desplazan hacia zonas más altas y frías. El problema: <strong>la montaña se acaba</strong>. Las especies de las cumbres, como las de los páramos andinos, pueden quedarse sin a dónde ir. <span class='hint'>(Conocimiento general de ecología.)</span>"},
  {t:"note", kind:"warn", title:"Una amenaza que multiplica las demás", html:"El cambio climático casi nunca actúa solo. Un río contaminado y con poca agua sufre más una ola de calor. Una selva fragmentada se seca más rápido. Por eso proteger los ecosistemas también nos ayuda a adaptarnos al cambio climático."},
  {t:"reflect", id:"r9", q:"¿Has notado algún cambio en la naturaleza de tu región que podría estar relacionado con el clima (lluvias, calor, plantas que florecen antes, animales que ya no ves)?"}
  ]},

{ id:"l10", unit:"u3", title:"¿Quién está en riesgo?", time:"9 min",
  refs:["iucn2012","nom059","nom059_2019","ipbes2018","pace2018","quigley2017","cruz2017","vaquita2025","excelsior2026","adn40_2019"],
  blocks:[
  {t:"p", html:"Para saber qué especies necesitan más ayuda, hay sistemas que las clasifican según su riesgo de desaparecer. Los dos que más usamos en México son la <strong>Lista Roja de la UICN</strong> (mundial) y la <strong>NOM-059-SEMARNAT-2010</strong> (nacional)."},
  {t:"table", head:["Lista Roja de la UICN (todo el mundo)","NOM-059 (solo México, es ley)"], rows:[
    ["<strong>CR</strong> En peligro crítico","<strong>E</strong> Probablemente extinta en el medio silvestre"],
    ["<strong>EN</strong> En peligro","<strong>P</strong> En peligro de extinción"],
    ["<strong>VU</strong> Vulnerable","<strong>A</strong> Amenazada"],
    ["<strong>NT</strong> Casi amenazada","<strong>Pr</strong> Sujeta a protección especial"],
    ["<strong>LC</strong> Preocupación menor",""]
  ]},
  {t:"p", html:"La UICN evalúa a cada especie <strong>en todo el planeta</strong>. La NOM-059 mira solo a las poblaciones <strong>dentro de México</strong> y es obligatoria: por ejemplo, traficar con especies de esta lista es delito. Según un conteo publicado en 2026, la norma incluye a <strong>más de 2,600 especies</strong> en alguna categoría de riesgo, y la CONABIO prepara una actualización."},
  {t:"table", head:["Especie","UICN","NOM-059","¿Por qué?"], rows:[
    ["Ajolote","CR","P","Solo vive en Xochimilco y alrededores; si se pierde ahí, se pierde del mundo."],
    ["Vaquita marina","CR","P","Solo vive en el Alto Golfo de California."],
    ["Jaguar","NT","P","En el mundo aún tiene poblaciones grandes (como en la Amazonía), pero en México sus poblaciones están más reducidas y fragmentadas."],
    ["Nutria de río neotropical","NT","A","Vive en ríos de México a Sudamérica; depende de ríos limpios."],
    ["Lobo mexicano","—","P","En 2019 pasó de «probablemente extinto en el medio silvestre» a «en peligro», gracias a reintroducciones."]
  ]},
  {t:"guess", q:"¿Por qué el jaguar tiene una categoría distinta en la UICN (NT) que en la NOM-059 (P)?",
   o:["Porque una de las dos listas está equivocada","Porque la UICN evalúa toda su área en América y la NOM-059 solo la situación en México","Porque el jaguar ya no vive en México"], a:1,
   e:"Las dos pueden ser correctas al mismo tiempo: miran escalas distintas. Una especie puede estar relativamente bien en el continente y en peligro dentro de un país."},
  {t:"species", sp:"vaquita"},
  {t:"species", sp:"nutria"},
  {t:"stats", items:[{n:"~1/4", l:"de las 14,000 especies evaluadas en las Américas se considera en alto riesgo de extinción", s:"IPBES, 2018"}]},
  {t:"reflect", id:"r10", q:"Busca en Enciclovida (enciclovida.mx) una especie de tu estado. ¿Está en la NOM-059? ¿En qué categoría?"}
  ]},

/* ============================ UNIDAD 4 ============================ */
{ id:"l11", unit:"u4", title:"Guardianes del bosque", time:"9 min",
  refs:["faofilac2021","faofilac2021prensa","ipbes2018prensa"],
  blocks:[
  {t:"p", html:"En 2021, la FAO y el FILAC (el Fondo para el Desarrollo de los Pueblos Indígenas de América Latina y el Caribe) revisaron <strong>más de 300 estudios</strong> publicados en dos décadas. Su conclusión: <strong>los pueblos indígenas y tribales son, en general, los mejores guardianes de los bosques de la región</strong>."},
  {t:"stats", items:[
    {n:"320–380 millones", l:"de hectáreas de bosque están bajo gobernanza comunitaria indígena y tribal", s:"FAO y FILAC, 2021"},
    {n:"~1/3", l:"del carbono guardado en los bosques de América Latina y el Caribe está en sus territorios (14% del carbono de los bosques tropicales del mundo)", s:"FAO y FILAC, 2021"},
    {n:"45%", l:"de los bosques intactos de la cuenca amazónica está en territorios indígenas", s:"FAO y FILAC, 2021"}
  ]},
  {t:"h", text:"La comparación que lo dice todo"},
  {t:"p", html:"Entre 2003 y 2016, en la cuenca amazónica:"},
  {t:"table", head:["Tipo de territorio","Carbono perdido de sus bosques"], rows:[
    ["Territorios indígenas","<strong>menos de 0.3%</strong>"],
    ["Áreas protegidas sin población indígena","0.6%"],
    ["Otras tierras","<strong>3.6%</strong>"]
  ]},
  {t:"p", html:"Aunque los territorios indígenas cubren el <strong>28%</strong> de la cuenca, generaron solo el <strong>2.6%</strong> de sus emisiones brutas de carbono. Además, entre 2000 y 2016 los bosques intactos disminuyeron <strong>4.9%</strong> en áreas indígenas, frente a <strong>11.2%</strong> en otras áreas."},
  {t:"guess", q:"Entre 2000 y 2012, en territorios indígenas con títulos de propiedad colectiva en Bolivia, Brasil y Colombia, la deforestación fue…",
   o:["Igual que fuera de ellos","Entre 2 y 2.8 veces menor que fuera de ellos","El doble que fuera de ellos"], a:1,
   e:"Fue 2.8 veces menor en Bolivia, 2.5 en Brasil y 2 en Colombia. Así se evitaron entre 42.8 y 59.7 millones de toneladas de CO₂ al año, como sacar de circulación entre 9 y 12.6 millones de vehículos durante un año."},
  {t:"note", kind:"warn", title:"Pero las presiones crecen", html:"El mismo informe advierte que entre 2016 y 2018 la deforestación en territorios indígenas de Brasil <strong>aumentó 150%</strong>. Las comunidades enfrentan presiones de minería, ganadería, tala ilegal y, muchas veces, violencia contra quienes defienden su territorio."},
  {t:"h", text:"¿Qué propone el informe?"},
  {t:"list", items:["Reforzar los derechos territoriales colectivos.","Compensar a las comunidades por los servicios ambientales que dan.","Facilitar el manejo forestal comunitario.","Revitalizar las culturas y los conocimientos tradicionales.","Apoyar a las organizaciones indígenas y tribales, reconociendo el papel de jóvenes y mujeres."]},
  {t:"note", kind:"heart", title:"Respeto, no romantización", html:"Reconocer el papel de los pueblos indígenas no significa idealizarlos ni hablar por ellos. Significa respetar sus derechos, su territorio y su derecho a decidir. En la siguiente lección (próximamente) escucharemos directamente sus saberes."},
  {t:"reflect", id:"r11", q:"¿Qué pueblos indígenas viven o vivieron en tu región? ¿Qué sabes de su relación con la tierra y el agua?"}
  ]},

{ id:"l11b", unit:"u4", soon:true, title:"Saberes indígenas y biodiversidad", note:"La estamos construyendo con y desde las voces de los pueblos indígenas"},

{ id:"l12", unit:"u4", title:"Proteger el 30%: áreas protegidas y conectividad", time:"9 min",
  refs:["kmgbf2022","ipbes2018prensa","faofilac2021","general"],
  blocks:[
  {t:"p", html:"En diciembre de 2022, en la COP15 del Convenio sobre la Diversidad Biológica, casi todos los países del mundo aprobaron el <strong>Marco Mundial de Biodiversidad de Kunming-Montreal</strong>. Tiene una visión para 2050, «vivir en armonía con la naturaleza», <strong>4 objetivos</strong> y <strong>23 metas</strong> para 2030."},
  {t:"h", text:"La meta 3, conocida como «30×30»"},
  {t:"note", kind:"info", title:"Meta 3, en palabras sencillas", html:"Que para <strong>2030</strong> al menos el <strong>30%</strong> de las zonas terrestres, de aguas continentales, costeras y marinas del planeta esté conservado y gestionado de forma eficaz. Debe hacerse con <strong>áreas protegidas</strong> y <strong>otras medidas eficaces de conservación basadas en áreas</strong> (OMEC), bien conectadas, gobernadas de forma equitativa y <strong>reconociendo los derechos de los pueblos indígenas y las comunidades locales</strong>, incluidos sus territorios tradicionales."},
  {t:"guess", q:"¿Qué significa «30×30»?",
   o:["Plantar 30 árboles por persona en 30 años","Conservar al menos el 30% de la tierra, las aguas continentales y el mar para 2030","Reducir 30% las emisiones en 30 países"], a:1,
   e:"Es la meta 3 del Marco Kunming-Montreal: al menos 30% conservado para 2030, con respeto a los derechos de pueblos indígenas y comunidades locales."},
  {t:"h", text:"Áreas protegidas: necesarias, pero no suficientes"},
  {t:"p", html:"Un área natural protegida es un territorio con reglas para conservar su naturaleza. Funcionan mejor cuando tienen presupuesto, vigilancia y el apoyo de quienes viven ahí. La IPBES encontró que entre 1970 y 2010 aumentaron 17% las áreas clave para la biodiversidad protegidas en las Américas, pero <strong>menos del 20%</strong> de ellas están protegidas."},
  {t:"p", html:"Y aquí se juntan las lecciones: según la FAO y el FILAC, <strong>casi la mitad (47%)</strong> del área que ocupan los pueblos indígenas en la región también está designada como área protegida. Proteger la naturaleza y proteger los derechos de los pueblos van de la mano."},
  {t:"h", text:"Corredores: que la vida pueda moverse"},
  {t:"p", html:"Un área protegida aislada es como una isla: los animales no pueden salir a buscar pareja, alimento o un clima más fresco. Los <strong>corredores biológicos</strong> son franjas de paisaje —bosques, ríos, parcelas bien manejadas— que conectan áreas naturales. Son clave para especies que recorren grandes distancias, como el jaguar. <span class='hint'>(Definición de ecología general; las fuentes del módulo hablan de «sistemas bien conectados» sin definir el término.)</span>"},
  {t:"note", kind:"act", title:"Lontra pregunta: ¿y yo qué tengo que ver?", html:"Mucho. Las metas globales se cumplen con decisiones locales: un municipio que protege un humedal, un ejido que maneja su bosque, jóvenes que limpian un río y vigilan que no se rellene. ¿Hay un área natural protegida cerca de ti? Búscala en el sitio de la CONANP o en el mapa de este módulo."},
  {t:"reflect", id:"r12", q:"Si pudieras proponer proteger un lugar de tu región, ¿cuál sería y por qué?"}
  ]},

{ id:"l13", unit:"u4", title:"Ciencia ciudadana y tu plan de acción", time:"10 min",
  refs:["naturalista","faofilac2021","general"],
  blocks:[
  {t:"p", html:"No necesitas ser bióloga o biólogo para ayudar a la ciencia. La <strong>ciencia ciudadana</strong> es cuando personas de cualquier edad y profesión recolectan datos que sirven para investigar. Con un celular puedes registrar las plantas, animales y hongos que ves."},
  {t:"h", text:"NaturaLista: la red que usa México"},
  {t:"p", html:"<strong>NaturaLista</strong> es la plataforma de ciencia ciudadana de la CONABIO, parte de la red internacional iNaturalist. Funciona así:"},
  {t:"list", items:[
    "📸 <strong>Observas</strong>: tomas una foto (o grabas un sonido) de un ser vivo silvestre.",
    "📍 <strong>Registras</strong>: la app guarda dónde y cuándo lo viste.",
    "🤝 <strong>La comunidad identifica</strong>: otras personas, incluidas especialistas, ayudan a saber qué especie es.",
    "🔬 <strong>Se vuelve dato científico</strong>: cuando hay acuerdo en la identificación, la observación alcanza el «grado de investigación» y puede usarse en estudios."
  ]},
  {t:"note", kind:"info", title:"Sobre esta explicación", html:"El funcionamiento de NaturaLista lo describimos con información general de la propia plataforma (naturalista.mx). Las fuentes del módulo respaldan algo más amplio: la FAO y el FILAC señalan que el <strong>monitoreo participativo</strong> hecho por comunidades puede generar datos confiables y de alta calidad."},
  {t:"cta", icon:"🔍", title:"Entra a NaturaLista", html:"Crea tu cuenta gratis y mira qué se ha observado cerca de ti.", href:"https://www.naturalista.mx", btn:"Ir", ext:true},
  {t:"h", text:"Tu plan de acción"},
  {t:"p", html:"Llegaste al final del módulo. Ahora conviertamos lo que aprendiste en algo concreto. Lontra te ayuda:"},
  {t:"pick", id:"p13", q:"¿Cuál será tu primer paso?", o:[
    "Registrar al menos 5 observaciones de seres vivos de mi colonia o comunidad en NaturaLista",
    "Visitar un área natural protegida, humedal o parque cercano y aprender qué especies viven ahí",
    "Compartir una ficha de Axo con mi familia o amistades y platicar sobre esa especie",
    "Sumarme a una limpieza de río, playa o humedal, o a una jornada de reforestación con especies nativas",
    "Investigar si en mi municipio hay un área protegida o un proyecto comunitario de conservación y cómo apoyarlo"
  ]},
  {t:"reflect", id:"r13a", q:"¿Qué vas a hacer, exactamente?"},
  {t:"reflect", id:"r13b", q:"¿Con quién lo vas a hacer?"},
  {t:"reflect", id:"r13c", q:"¿Cuándo?"},
  {t:"reflect", id:"r13d", q:"¿Cómo sabrás que lo lograste?"},
  {t:"note", kind:"act", title:"Lontra te reta", html:"Haz tu primer paso en las próximas dos semanas y cuéntanos en Instagram (@x.latierra). Una acción pequeña y real vale más que una enorme que nunca empieza."}
  ]}
],

/* ======================= FICHAS DE AXO ======================= */
species: {
  ajolote: {name:"Ajolote", sci:"Ambystoma mexicanum", icon:"🦎", photo:PH.ajolote,
    iucn:{c:"CR", l:"En peligro crítico", src:"PACE Ambystoma (SEMARNAT/CONANP, 2018)"}, nom:{c:"P", l:"En peligro de extinción", src:"PACE Ambystoma (SEMARNAT/CONANP, 2018)"},
    where:"Endémico de México. En vida silvestre vive en canales y humedales del sur del Valle de México, sobre todo en Xochimilco.",
    fact:"Conserva toda su vida rasgos de su etapa de larva, como sus branquias externas en forma de plumas. (Conocimiento general de biología.)",
    threat:"Contaminación de los canales por aguas residuales y basura, peces exóticos como carpas y tilapias, y extracción para consumo.",
    hope:"Desde 2018 existe un Programa de Acción para la Conservación de la Especie (PACE) para los ajolotes de México.",
    refs:["pace2018"]},
  jaguar: {name:"Jaguar", sci:"Panthera onca", icon:"🐆", photo:PH.jaguar,
    iucn:{c:"NT", l:"Casi amenazado", src:"Quigley et al., 2017"}, nom:{c:"P", l:"En peligro de extinción", src:"NOM-059-SEMARNAT-2010"},
    where:"Del norte de México al norte de Argentina: selvas, bosques, humedales como el Pantanal y matorrales.",
    fact:"Es el felino más grande de América y el tercero del mundo, después del tigre y el león.",
    threat:"Pérdida y fragmentación de su hábitat, cacería y conflictos con la ganadería.",
    hope:"El tercer Censo Nacional del Jaguar (2025) estimó 5,326 jaguares en México, más que en el censo de 2018.",
    refs:["quigley2017","jaguar2025","nom059"]},
  delfin: {name:"Delfín rosado", sci:"Inia geoffrensis", icon:"🐬", photo:PH.inia,
    iucn:{c:"EN", l:"En peligro", src:"UICN, citado por Mongabay (2024)"},
    where:"Ríos y lagos de las cuencas del Amazonas y el Orinoco, en Sudamérica.",
    fact:"Es un delfín de agua dulce. Su color rosado es más intenso en los adultos. (Conocimiento general.)",
    threat:"Sequías y agua sobrecalentada por el cambio climático, redes de pesca y contaminación de los ríos.",
    hope:"",
    refs:["mongabay2024"]},
  vaquita: {name:"Vaquita marina", sci:"Phocoena sinus", icon:"🐋", photo:PH.vaquita,
    iucn:{c:"CR", l:"En peligro crítico", src:"UICN"}, nom:{c:"P", l:"En peligro de extinción", src:"NOM-059-SEMARNAT-2010"},
    where:"Endémica de México: solo vive en el Alto Golfo de California.",
    fact:"Es el cetáceo (grupo de ballenas, delfines y marsopas) más pequeño y más amenazado del mundo.",
    threat:"Queda atrapada en redes de enmalle, muchas de ellas ilegales y usadas para pescar totoaba.",
    hope:"En el monitoreo de 2025 se estimaron entre 7 y 10 vaquitas, incluidas crías.",
    refs:["vaquita2025","nom059"]},
  quetzal: {name:"Quetzal", sci:"Pharomachrus mocinno", icon:"🐦", photo:PH.quetzal,
    iucn:{c:"NT", l:"Casi amenazado", src:"BirdLife International, 2023"},
    where:"Bosques de niebla de montaña, del sur de México (Oaxaca y Chiapas) al oeste de Panamá.",
    fact:"Los machos tienen plumas de la cola que pueden ser más largas que su cuerpo. (Conocimiento general.)",
    threat:"La pérdida de bosques de niebla. (Conocimiento general.)",
    hope:"",
    refs:["birdlife2023"]},
  oso: {name:"Oso andino o de anteojos", sci:"Tremarctos ornatus", icon:"🐻",
    iucn:{c:"VU", l:"Vulnerable", src:"World Land Trust / UICN"},
    where:"Los Andes, del oeste de Venezuela, por Colombia, Ecuador, Perú y Bolivia, hasta el noroeste de Argentina.",
    fact:"Es el único oso nativo de Sudamérica. Sus manchas alrededor de los ojos son distintas en cada individuo.",
    threat:"Pérdida de hábitat, conflictos con agricultores que lo matan cuando entra a sus milpas y cacería ilegal.",
    hope:"",
    refs:["wlt_oso"]},
  nutria: {name:"Nutria de río neotropical", sci:"Lontra longicaudis", icon:"🦦",
    iucn:{c:"NT", l:"Casi amenazada", src:"Rheingantz y Trinca, 2015"}, nom:{c:"A", l:"Amenazada", src:"NOM-059-SEMARNAT-2010, citado en Cruz García et al., 2017"},
    where:"Ríos, arroyos y lagunas de México, Centroamérica y Sudamérica. (Distribución: conocimiento general.)",
    fact:"Es la especie de Lontra, nuestra guía de la Unidad 4. Necesita ríos limpios y con vegetación en sus orillas.",
    threat:"Contaminación del agua y pérdida de la vegetación de las orillas de los ríos. (Conocimiento general.)",
    hope:"",
    refs:["cruz2017"]},
  carey: {name:"Tortuga carey", sci:"Eretmochelys imbricata", icon:"🐢",
    iucn:{c:"CR", l:"En peligro crítico", src:"UICN (Mortimer y Donnelly, 2008)"},
    where:"Mares tropicales de todo el mundo; en América Latina es típica de los arrecifes del Caribe.",
    fact:"Su pico afilado le permite alimentarse en los recovecos de los arrecifes. (Conocimiento general.)",
    threat:"Históricamente, el comercio de su caparazón; hoy también la degradación de arrecifes y playas de anidación. (Conocimiento general.)",
    hope:"",
    refs:["iucn_carey"]}
},

/* ===================== CUESTIONARIO FINAL ===================== */
quiz: [
  {q:"Según el Convenio sobre la Diversidad Biológica, la biodiversidad incluye la diversidad…", o:["Solo de animales y plantas","Dentro de cada especie, entre las especies y de los ecosistemas","Solo de ecosistemas protegidos"], a:1},
  {q:"¿Cuántos de los 17 países megadiversos están en América Latina?", o:["3","6","9"], a:1},
  {q:"Según la CONABIO, ¿qué porcentaje de las especies conocidas del mundo vive en México?", o:["Entre 1 y 2%","Entre 10 y 12%","Más de 40%"], a:1},
  {q:"¿Cuál es hoy el hábitat silvestre principal del ajolote?", o:["Los ríos de la Amazonía","Los canales y humedales de Xochimilco","Los cenotes de Yucatán"], a:1},
  {q:"¿Qué ecosistema ha sido transformado en 88%, según la IPBES?", o:["La Selva Atlántica","La Amazonía","La Patagonia"], a:0},
  {q:"Una especie endémica es la que…", o:["Vive en muchos países","Solo existe de forma natural en un lugar del planeta","Está extinta"], a:1},
  {q:"Si desaparece el jaguar de la Selva Maya, lo más probable es que…", o:["No pase nada","Aumenten los herbívoros y se afecte la regeneración de la selva","Aumenten los jaguares de otros lugares"], a:1},
  {q:"Según la IPBES, ¿qué porcentaje de las contribuciones de la naturaleza en las Américas está disminuyendo?", o:["10%","35%","65%"], a:2},
  {q:"¿Cuál es la principal causa directa de pérdida de biodiversidad en la región?", o:["El cambio de uso del suelo","Los volcanes","El turismo"], a:0},
  {q:"El Índice Planeta Vivo 2024 reporta para América Latina y el Caribe un descenso promedio de…", o:["35%","73%","95%"], a:2},
  {q:"Según el WWF, ¿con cuánta deforestación podría llegar la Amazonía a un punto de no retorno?", o:["5–10%","20–25%","60–70%"], a:1},
  {q:"El jaguar es «Casi amenazado» en la UICN pero «En peligro» en la NOM-059 porque…", o:["Una lista tiene un error","La UICN evalúa su situación mundial y la NOM-059 solo en México","La NOM-059 es más antigua"], a:1},
  {q:"Entre 2003 y 2016 en la Amazonía, ¿dónde se perdió MENOS carbono de los bosques?", o:["En territorios indígenas","En tierras sin protección","En zonas urbanas"], a:0},
  {q:"La meta «30×30» del Marco Kunming-Montreal busca…", o:["Conservar al menos 30% de la tierra, aguas continentales y mar para 2030","Prohibir la pesca en 30 países","Plantar 30 millones de árboles"], a:0},
  {q:"En NaturaLista, una observación se vuelve útil para la ciencia cuando…", o:["Tiene muchos likes","La comunidad está de acuerdo en la identificación y alcanza «grado de investigación»","La sube una persona famosa"], a:1}
],

self: [
  "Puedo explicar qué es la biodiversidad y sus tres niveles.",
  "Sé por qué América Latina es una de las regiones con más biodiversidad del mundo.",
  "Puedo nombrar las principales causas de pérdida de biodiversidad.",
  "Sé qué acciones concretas puedo hacer para proteger la biodiversidad de mi territorio."
],

/* ===================== RECURSOS ===================== */
resources: [
  {cat:"Para explorar especies cerca de ti", items:[
    {title:"NaturaLista (CONABIO)", url:"https://www.naturalista.mx", desc:"Registra lo que observas y descubre qué especies viven en tu zona.", lang:"ES"},
    {title:"Enciclovida (CONABIO)", url:"https://enciclovida.mx", desc:"Fichas de especies de México, con su categoría en la NOM-059 y la UICN.", lang:"ES"},
    {title:"Biodiversidad Mexicana (CONABIO)", url:"https://www.biodiversidad.gob.mx", desc:"El portal de conocimiento sobre la biodiversidad del país.", lang:"ES"}
  ]},
  {cat:"Informes que usamos en este módulo", items:[
    {title:"Informe Planeta Vivo 2024 · Resumen (WWF)", url:"https://wwfes.awsassets.panda.org/downloads/informe-planeta-vivo-ipv2024-resumen.pdf", desc:"El estado de las poblaciones de fauna silvestre del mundo.", lang:"ES"},
    {title:"Evaluación de la IPBES para las Américas · comunicado (2018)", url:"https://files.ipbes.net/ipbes-web-prod-public-files/downloads/20180323_ipbes6_media_release_regional_assessments_es_0.pdf", desc:"Los hallazgos principales de la evaluación científica de la región.", lang:"ES"},
    {title:"Los pueblos indígenas y tribales y la gobernanza de los bosques (FAO y FILAC, 2021)", url:"https://doi.org/10.4060/cb2953es", desc:"La evidencia sobre el papel de los pueblos indígenas en la conservación.", lang:"ES"},
    {title:"Guía de la Meta 3 del Marco Kunming-Montreal (UICN)", url:"https://iucn.org/sites/default/files/2024-06/meta-3-guia-final-es.pdf", desc:"Qué significa la meta 30×30 y cómo se aplica.", lang:"ES"}
  ]},
  {cat:"Listas de especies en riesgo", items:[
    {title:"Lista Roja de la UICN", url:"https://www.iucnredlist.org", desc:"La evaluación mundial del riesgo de extinción de las especies.", lang:"EN"},
    {title:"PACE Ambystoma (SEMARNAT/CONANP, 2018)", url:"https://www.amphibianark.org/fileadmin/uploads/aark/Conservation_Plans/PACE-Ambystoma2018.pdf", desc:"El programa de conservación de los ajolotes de México.", lang:"ES"}
  ]}
],

/* ===================== REFERENCIAS ===================== */
refsNote: "<strong>Cómo revisamos las fuentes.</strong> Cada dato numérico de este módulo se comparó con su fuente original (no con resúmenes). Lo que viene de conocimiento general de biología o ecología está marcado como tal en la lección y será revisado por especialistas. Las categorías de riesgo de las especies cambian: verifica siempre la versión más reciente.",
refs: {
  cdb1992: {short:"CDB, 1992", text:"Naciones Unidas (1992). <em>Convenio sobre la Diversidad Biológica</em>, artículo 2.", url:"https://www.cbd.int/doc/legal/cbd-es.pdf"},
  kmgbf2022: {short:"CDB, 2022", text:"Convenio sobre la Diversidad Biológica (2022). Decisión 15/4. <em>Marco Mundial de Biodiversidad de Kunming-Montreal</em>. Meta 3. Consultado en la guía de la UICN (2024).", url:"https://iucn.org/sites/default/files/2024-06/meta-3-guia-final-es.pdf"},
  ipbes2018: {short:"IPBES, 2018", text:"IPBES (2018). <em>Resumen para los responsables de formular políticas del informe de evaluación regional sobre la diversidad biológica y los servicios de los ecosistemas para las Américas</em>. Rice, J., Seixas, C. S., Zaccagnini, M. E. et al. (eds.). Secretaría de la IPBES, Bonn. Mensajes clave A1, A4 y B2; sección B.", url:"https://www.ipbes.net/assessment-reports/americas"},
  ipbes2018prensa: {short:"IPBES, 2018 (comunicado)", text:"IPBES (2018, 23 de marzo). <em>Comunicado de prensa: evaluaciones regionales de biodiversidad y servicios de los ecosistemas</em>.", url:"https://files.ipbes.net/ipbes-web-prod-public-files/downloads/20180323_ipbes6_media_release_regional_assessments_es_0.pdf"},
  wwf2024: {short:"WWF, 2024", text:"WWF (2024). <em>Informe Planeta Vivo 2024: Un sistema en peligro</em>. Resumen en español. WWF, Gland, Suiza.", url:"https://wwfes.awsassets.panda.org/downloads/informe-planeta-vivo-ipv2024-resumen.pdf"},
  faofilac2021: {short:"FAO y FILAC, 2021", text:"FAO y FILAC (2021). <em>Los pueblos indígenas y tribales y la gobernanza de los bosques. Una oportunidad para la acción climática en América Latina y el Caribe</em>. Santiago, FAO. Págs. 47, 48, 54, 71 y 89 (edición en inglés).", url:"https://doi.org/10.4060/cb2953es"},
  faofilac2021prensa: {short:"FAO, 2021 (comunicado)", text:"FAO (2021, 25 de marzo). <em>New UN report shows evidence that Indigenous and Tribal Peoples are the best guardians of the forests of Latin America and the Caribbean</em>. Oficina Regional de la FAO para América Latina y el Caribe.", url:"https://www.fao.org/americas/news/news-detail/New-UN-report-shows-evidence-that-Indigenous-and-Tribal-Peoples-are-the-best-guardians-of-the-forests-of-Latin-America-and-the-Caribbean"},
  conabio_contexto: {short:"CONABIO", text:"CONABIO (s. f.). <em>Contexto</em>. Programa Nacional de Restauración, Biodiversidad Mexicana. Con datos de Llorente-Bousquets y Ocegueda (2008), Sarukhán et al. (2009) y Villaseñor (2016).", url:"https://www.biodiversidad.gob.mx/pais/programanacionalderestauracion/contexto"},
  llorente2008: {short:"Llorente-Bousquets y Ocegueda, 2008", text:"Llorente-Bousquets, J. y Ocegueda, S. (2008). Estado del conocimiento de la biota. En <em>Capital natural de México, vol. I: Conocimiento actual de la biodiversidad</em>. CONABIO, México.", url:""},
  mittermeier1997: {short:"Mittermeier et al., 1997", text:"Mittermeier, R. A., Robles Gil, P. y Mittermeier, C. G. (1997). <em>Megadiversidad: los países biológicamente más ricos del mundo</em>. CEMEX, México. (Lista de los 17 países; el total y el 70% los reporta CONABIO.)", url:""},
  pace2018: {short:"SEMARNAT/CONANP, 2018", text:"SEMARNAT y CONANP (2018). <em>Programa de Acción para la Conservación de las Especies: Ambystoma spp.</em> Primera edición. Pág. 39.", url:"https://www.amphibianark.org/fileadmin/uploads/aark/Conservation_Plans/PACE-Ambystoma2018.pdf"},
  nom059: {short:"NOM-059-SEMARNAT-2010", text:"SEMARNAT (2010). <em>NOM-059-SEMARNAT-2010, Protección ambiental – Especies nativas de México de flora y fauna silvestres – Categorías de riesgo</em>. Diario Oficial de la Federación, 30 de diciembre de 2010.", url:"https://dof.gob.mx/normasOficiales/9498/semarnat/semarnat.html"},
  nom059_2019: {short:"DOF, 2019", text:"SEMARNAT (2019). Modificación del Anexo Normativo III, Lista de especies en riesgo, de la NOM-059-SEMARNAT-2010. Diario Oficial de la Federación, 14 de noviembre de 2019.", url:"https://sidof.segob.gob.mx/notas/5578808"},
  adn40_2019: {short:"ADN40, 2019", text:"ADN40 (2019, 17 de noviembre). <em>Lobo mexicano deja categoría de extinto</em>.", url:"https://www.adn40.mx/noticia/mexico/notas/2019-11-17-14-25/lobo-mexicano-deja-categoria-de-extinto/"},
  excelsior2026: {short:"Excélsior, 2026", text:"Méndez, E. (2026, 5 de junio). <em>Día Mundial del Medio Ambiente: en México peligran más de 2 mil 600 especies</em>. Excélsior.", url:"https://www.excelsior.com.mx/nacional/dia-mundial-medio-ambiente-mexico-peligran-mas-2-mil-600-especies"},
  iucn2012: {short:"UICN, 2012", text:"UICN (2012). <em>Categorías y Criterios de la Lista Roja de la UICN: Versión 3.1</em>. Segunda edición. Gland, Suiza.", url:"https://www.iucnredlist.org/resources/categories-and-criteria"},
  quigley2017: {short:"Quigley et al., 2017", text:"Quigley, H., Foster, R., Petracca, L., Payan, E., Salom, R. y Harmsen, B. (2017). <em>Panthera onca</em>. The IUCN Red List of Threatened Species 2017: e.T15953A123791436.", url:"https://www.iucnredlist.org/species/15953/123791436"},
  jaguar2025: {short:"Xataka, 2026", text:"Xataka México (2026, 18 de septiembre). <em>México reportó un aumento en la población de jaguares; aun así continúan en peligro de extinción</em>. Sobre el tercer Censo Nacional del Jaguar de la Alianza Nacional para la Conservación del Jaguar.", url:"https://www.xataka.com.mx/ecologia-y-naturaleza/mexico-reporto-aumento-poblacion-jaguares-asi-continuan-peligro-extincion"},
  vaquita2025: {short:"Sea Shepherd y SEMARNAT, 2025", text:"Sea Shepherd Conservation Society (2025, 28 de octubre). <em>Results of the 2025 vaquita monitoring effort</em> (comunicado conjunto sobre la conservación de la vaquita marina).", url:"https://seashepherd.org/2025/10/28/results-of-the-2025-vaquita-monitoring-effort/"},
  cruz2017: {short:"Cruz García et al., 2017", text:"Cruz García, F., Contreras Balderas, A. J., Nava Castillo, R. y Gallo Reynoso, J. P. (2017). Hábitat y abundancia de la nutria neotropical. <em>THERYA</em>, 8(2), 123-130. Cita a Rheingantz y Trinca (2015), Lista Roja de la UICN.", url:"https://therya.mastozoologiamexicana.com/index.php/THERYA/article/download/470/html_294?inline=1"},
  birdlife2023: {short:"BirdLife International, 2023", text:"BirdLife International (2023). <em>Pharomachrus mocinno</em>. The IUCN Red List of Threatened Species 2023.", url:"https://datazone.birdlife.org/species/factsheet/resplendent-quetzal-pharomachrus-mocinno"},
  wlt_oso: {short:"World Land Trust", text:"World Land Trust (s. f.). <em>Spectacled bear</em>. Ficha de especie.", url:"https://www.worldlandtrust.org/species/spectacled-bear/"},
  iucn_carey: {short:"UICN, 2008", text:"Mortimer, J. A. y Donnelly, M. (2008). <em>Eretmochelys imbricata</em>. The IUCN Red List of Threatened Species 2008. (Pendiente de verificación directa en el sitio de la UICN.)", url:"https://www.iucnredlist.org/species/8005/12881238"},
  mongabay2024: {short:"Mongabay, 2024", text:"Mongabay (2024, diciembre). <em>The uncertain future of Amazon river dolphins amid historic drought</em>. Con datos del Instituto Mamirauá y el ICMBio.", url:"https://news.mongabay.com/2024/12/the-uncertain-future-of-amazon-river-dolphins-amid-historic-drought/"},
  gardner2003: {short:"Gardner et al., 2003", text:"Gardner, T. A., Côté, I. M., Gill, J. A., Grant, A. y Watkinson, A. R. (2003). Long-term region-wide declines in Caribbean corals. <em>Science</em>, 301(5635), 958-960.", url:"https://doi.org/10.1126/science.1086050"},
  naturalista: {short:"NaturaLista", text:"CONABIO (s. f.). <em>NaturaLista</em>. Plataforma de ciencia ciudadana, parte de la red iNaturalist.", url:"https://www.naturalista.mx"},
  general: {short:"Conocimiento general", text:"<span class='ext-tag'>Conocimiento general</span> Explicaciones de biología, ecología y geografía que no vienen de un informe específico (por ejemplo, la cascada trófica o qué es un corredor biológico). Están marcadas en cada lección y quedan sujetas a la revisión de especialistas.", url:""}
}
};
})();
