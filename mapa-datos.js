/* =====================================================================
   XLATIERRA · DATOS DEL MAPA INTERACTIVO
   Cada ecosistema tiene: nombre, tipo, coordenadas aproximadas (centro de la
   región, NO límites exactos), países, descripción, dato clave con fuente,
   % transformado según IPBES (si existe), especies, amenaza y lección.
   Las claves de «refs» son las mismas de contenido-m2.js.
   Lo marcado como general:true es conocimiento general (pendiente de revisión).
   ===================================================================== */
window.XLT_MAP = {
types: {
  bosque: {label:"Selvas y bosques", icon:"🌳", color:"#3f7d3a"},
  agua:   {label:"Agua dulce", icon:"💧", color:"#2f7fa3"},
  mar:    {label:"Mares y costas", icon:"🌊", color:"#1f5f8b"},
  montana:{label:"Montañas, pastizales y zonas secas", icon:"⛰️", color:"#b86544"}
},
/* Países megadiversos de América Latina (Mittermeier et al., 1997; IPBES, 2018) */
megadiverse: ["Mexico","Colombia","Ecuador","Peru","Brazil","Venezuela"],
megaNames: {Mexico:"México", Colombia:"Colombia", Ecuador:"Ecuador", Peru:"Perú", Brazil:"Brasil", Venezuela:"Venezuela"},

eco: [
 {id:"xochimilco", name:"Humedales de Xochimilco", type:"agua", lat:19.262, lng:-99.09, zoom:11,
  countries:"México (Ciudad de México)",
  desc:"Canales, chinampas y humedales al sur de la Ciudad de México. Son lo que queda del gran sistema de lagos del Valle de México y el último hogar silvestre del ajolote.",
  fact:{text:"El ajolote está «En peligro crítico» (UICN) y «En peligro de extinción» (NOM-059). Sus amenazas: aguas residuales, carpas y tilapias, y extracción.", refs:["pace2018"]},
  species:[{sp:"ajolote"},{n:"Chinampas", sci:"sistema agrícola tradicional", icon:"🌽", general:true}],
  threat:"Contaminación del agua, especies invasoras y crecimiento urbano.", lesson:"l3"},

 {id:"cuatrocienegas", name:"Cuatro Ciénegas", type:"agua", lat:26.95, lng:-102.07, zoom:8,
  countries:"México (Coahuila)",
  desc:"Un oasis en pleno desierto chihuahuense: pozas y humedales de agua clara rodeados de dunas. Es famoso entre biólogos por sus especies endémicas.",
  fact:{text:"La tortuga de bisagra de Coahuila (<em>Terrapene coahuila</em>), que solo vive aquí, está en la categoría «En peligro de extinción» de la NOM-059 desde la modificación de 2019.", refs:["nom059_2019"]},
  species:[{n:"Tortuga de bisagra de Coahuila", sci:"Terrapene coahuila", icon:"🐢"},{n:"Estromatolitos", sci:"estructuras formadas por microorganismos", icon:"🪨", general:true}],
  threat:"La extracción de agua para agricultura puede secar las pozas. (Conocimiento general.)", lesson:"l5", general:true},

 {id:"golfo", name:"Alto Golfo de California", type:"mar", lat:31.0, lng:-114.4, zoom:7,
  countries:"México (Baja California y Sonora)",
  desc:"El norte del Golfo de California, entre la península de Baja California y Sonora. Es el único lugar del mundo donde vive la vaquita marina.",
  fact:{text:"En el monitoreo de 2025 se estimaron entre 7 y 10 vaquitas, incluidas crías.", refs:["vaquita2025"]},
  species:[{sp:"vaquita"},{n:"Totoaba", sci:"Totoaba macdonaldi", icon:"🐟", general:true}],
  threat:"Redes de enmalle, muchas ilegales, usadas para pescar totoaba.", lesson:"l10"},

 {id:"bosqueseco", name:"Bosque tropical seco del Pacífico", type:"bosque", lat:19.4, lng:-104.9, zoom:6,
  countries:"México y Centroamérica (vertiente del Pacífico)",
  desc:"Bosques que pierden sus hojas en la temporada seca y reverdecen con las lluvias. Se extienden por la costa del Pacífico de México y Centroamérica.",
  fact:{text:"La IPBES calcula que 72% del bosque tropical seco de Mesoamérica (y 66% del Caribe) se ha transformado.", refs:["ipbes2018"]},
  loss:72,
  species:[{n:"Jaguar", sci:"Panthera onca", icon:"🐆", sp:"jaguar"}],
  threat:"Conversión a agricultura, ganadería y desarrollos turísticos.", lesson:"l4"},

 {id:"selvamaya", name:"Selva Maya", type:"bosque", lat:17.9, lng:-89.7, zoom:6,
  countries:"México (Campeche, Quintana Roo, Chiapas), Guatemala y Belice",
  desc:"El gran macizo de selva de la península de Yucatán y el norte de Centroamérica. Es el hogar de Balam y escenario de experiencias de manejo forestal comunitario.",
  fact:{text:"El tercer Censo Nacional del Jaguar (2025) estimó 5,326 jaguares en México.", refs:["jaguar2025"]},
  species:[{sp:"jaguar"},{n:"Saraguato yucateco", sci:"Alouatta pigra", icon:"🐒", general:true},{n:"Tucán pico canoa", sci:"Ramphastos sulfuratus", icon:"🐦", general:true}],
  threat:"Deforestación para ganadería y agricultura, incendios y fragmentación.", lesson:"l6"},

 {id:"arrecife", name:"Arrecifes del Caribe mesoamericano", type:"mar", lat:17.6, lng:-87.6, zoom:6,
  countries:"México, Belice, Guatemala y Honduras",
  desc:"Una cadena de arrecifes de coral frente a la costa del Caribe, desde la península de Yucatán hasta Honduras.",
  fact:{text:"En los arrecifes del Caribe, la cobertura de coral pasó de cerca de 50% a cerca de 10% en tres décadas.", refs:["gardner2003"]},
  species:[{sp:"carey"}],
  threat:"Calentamiento del mar y blanqueamiento, contaminación y presión turística.", lesson:"l9"},

 {id:"amazonia", name:"Amazonía", type:"bosque", photo:"delfin", lat:-4.5, lng:-62.5, zoom:4,
  countries:"Brasil, Bolivia, Colombia, Ecuador, Guyana, Perú, Surinam, Venezuela y Guayana Francesa",
  desc:"El bosque tropical más grande del planeta, atravesado por el río Amazonas y sus afluentes. Regula las lluvias de buena parte de Sudamérica.",
  fact:{text:"Ya se ha deforestado entre 14 y 17%. Un punto de inflexión podría llegar si se destruye entre 20 y 25%.", refs:["wwf2024"]},
  loss:17,
  species:[{sp:"jaguar"},{sp:"delfin"}],
  threat:"Deforestación, incendios, minería y sequías extremas por el cambio climático.", lesson:"l9"},

 {id:"paramo", name:"Páramos y bosques andinos", type:"montana", lat:3.0, lng:-76.0, zoom:5,
  countries:"Venezuela, Colombia, Ecuador y Perú",
  desc:"Ecosistemas de alta montaña por encima del bosque, con pastos, arbustos y plantas en roseta. Funcionan como esponjas que guardan y liberan agua para ciudades enteras.",
  fact:{text:"El oso andino, que vive en estos bosques y páramos, es el único oso nativo de Sudamérica y está clasificado como «Vulnerable».", refs:["wlt_oso"]},
  species:[{sp:"oso"},{n:"Frailejones", sci:"Espeletia spp.", icon:"🌿", general:true}],
  threat:"Avance de la agricultura y la ganadería, minería y calentamiento que empuja a las especies hacia las cumbres.", lesson:"l9", general:true},

 {id:"galapagos", name:"Islas Galápagos", type:"mar", lat:-0.6, lng:-90.4, zoom:7,
  countries:"Ecuador",
  desc:"Un archipiélago volcánico en el océano Pacífico, a unos 1,000 km de la costa de Ecuador, famoso por sus especies que no existen en ningún otro lugar.",
  fact:{text:"Las Galápagos tienen especies endémicas como sus tortugas gigantes y la iguana marina. (Conocimiento general.)", refs:["general"]},
  species:[{n:"Tortugas gigantes de Galápagos", sci:"Chelonoidis spp.", icon:"🐢", general:true},{n:"Iguana marina", sci:"Amblyrhynchus cristatus", icon:"🦎", general:true}],
  threat:"Especies invasoras, turismo y cambios en el océano. (Conocimiento general.)", lesson:"l5", general:true},

 {id:"pantanal", name:"Pantanal", type:"agua", lat:-17.8, lng:-57.2, zoom:6,
  countries:"Brasil, Bolivia y Paraguay",
  desc:"Una de las planicies inundables más grandes del mundo. En la temporada de lluvias gran parte se cubre de agua y en la seca quedan lagunas llenas de vida.",
  fact:{text:"Entre 1976 y 2008, el Pantanal perdió alrededor de 12% de su superficie, según la IPBES.", refs:["ipbes2018"]},
  loss:12,
  species:[{sp:"jaguar"},{n:"Yacaré", sci:"Caiman yacare", icon:"🐊", general:true}],
  threat:"Expansión ganadera y agrícola, incendios y cambios en los ríos.", lesson:"l4"},

 {id:"cerrado", name:"Cerrado", type:"montana", lat:-14.5, lng:-47.5, zoom:5,
  countries:"Brasil (principalmente)",
  desc:"Una gran sabana tropical con pastos, arbustos y árboles de corteza gruesa, adaptados al fuego. Ahí nacen ríos importantes de Sudamérica.",
  fact:{text:"La IPBES calcula que la mitad (50%) del Cerrado se ha transformado. Además, 74% de las nuevas tierras agrícolas del noreste de Brasil en 2013 vino del Cerrado.", refs:["ipbes2018","ipbes2018prensa"]},
  loss:50,
  species:[{n:"Lobo de crin", sci:"Chrysocyon brachyurus", icon:"🐺", general:true},{n:"Ñandú", sci:"Rhea americana", icon:"🐦", general:true}],
  threat:"Expansión de la frontera agrícola (soya, ganadería).", lesson:"l4"},

 {id:"atlantica", name:"Selva Atlántica", type:"bosque", lat:-22.8, lng:-44.5, zoom:5,
  countries:"Brasil, Paraguay y Argentina",
  desc:"Bosques tropicales y subtropicales a lo largo de la costa atlántica de Brasil y hacia el interior. Hoy quedan sobre todo fragmentos.",
  fact:{text:"Es el ecosistema más transformado de la tabla de la IPBES: 88%.", refs:["ipbes2018"]},
  loss:88,
  species:[{n:"Tití león dorado", sci:"Leontopithecus rosalia", icon:"🐒", general:true},{n:"Jaguar (yaguareté)", sci:"Panthera onca", icon:"🐆", sp:"jaguar"}],
  threat:"Siglos de deforestación por agricultura y ciudades; hoy, fragmentación.", lesson:"l4"},

 {id:"chaco", name:"Gran Chaco seco", type:"bosque", lat:-22.8, lng:-61.5, zoom:5,
  countries:"Argentina, Bolivia y Paraguay",
  desc:"Uno de los bosques secos más extensos de Sudamérica, con quebrachos, matorrales espinosos y temperaturas extremas.",
  fact:{text:"La IPBES calcula que 34% del Chaco seco se ha transformado.", refs:["ipbes2018"]},
  loss:34,
  species:[{n:"Pecarí del Chaco (taguá)", sci:"Catagonus wagneri", icon:"🐗", general:true},{n:"Quebracho colorado", sci:"Schinopsis spp.", icon:"🌳", general:true}],
  threat:"Desmonte acelerado para soya y ganadería.", lesson:"l4"},

 {id:"pampas", name:"Pastizales del Río de la Plata (Pampas)", type:"montana", lat:-34.8, lng:-60.5, zoom:5,
  countries:"Argentina, Uruguay y Brasil",
  desc:"Llanuras de pastizales templados, muy fértiles, que se extienden alrededor del Río de la Plata.",
  fact:{text:"La IPBES calcula que 70% de estos pastizales se ha transformado.", refs:["ipbes2018"]},
  loss:70,
  species:[{n:"Venado de las pampas", sci:"Ozotoceros bezoarticus", icon:"🦌", general:true},{n:"Ñandú", sci:"Rhea americana", icon:"🐦", general:true}],
  threat:"Agricultura intensiva y ganadería.", lesson:"l4"},

 {id:"patagonia", name:"Patagonia", type:"montana", lat:-47.5, lng:-71.0, zoom:4,
  countries:"Argentina y Chile",
  desc:"El extremo sur del continente: estepas frías, bosques templados, lagos y grandes campos de hielo y glaciares.",
  fact:{text:"El guanaco, pariente silvestre de la llama, y el huemul, un venado de los Andes del sur, viven aquí. (Conocimiento general.)", refs:["general"]},
  species:[{n:"Guanaco", sci:"Lama guanicoe", icon:"🦙", general:true},{n:"Huemul", sci:"Hippocamelus bisulcus", icon:"🦌", general:true}],
  threat:"Sobrepastoreo, especies invasoras y retroceso de glaciares. (Conocimiento general.)", lesson:"l9", general:true}
],

/* Reto «¿Dónde vive?»: cada especie con las respuestas válidas */
game: [
 {n:"Ajolote", icon:"🦎", ok:["xochimilco"], hint:"Un humedal del sur de una gran ciudad."},
 {n:"Vaquita marina", icon:"🐋", ok:["golfo"], hint:"Solo vive en un mar de México."},
 {n:"Delfín rosado", icon:"🐬", ok:["amazonia"], hint:"Ríos del bosque tropical más grande del mundo."},
 {n:"Oso andino", icon:"🐻", ok:["paramo"], hint:"Montañas de Sudamérica."},
 {n:"Tortuga carey", icon:"🐢", ok:["arrecife"], hint:"Arrecifes de coral del Caribe."},
 {n:"Guanaco", icon:"🦙", ok:["patagonia"], hint:"El sur frío del continente."},
 {n:"Tortuga de bisagra de Coahuila", icon:"🐢", ok:["cuatrocienegas"], hint:"Un oasis en el desierto."},
 {n:"Jaguar", icon:"🐆", ok:["selvamaya","amazonia","pantanal","bosqueseco","atlantica"], hint:"Tiene varias respuestas correctas: es el felino más grande de América."}
]
};
