/* =====================================================================
   XLATIERRA · DATOS DEL MAPA DE IMPACTOS EN MÉXICO (Módulo 1)
   Todas las cifras vienen de la investigación del Módulo 1 (contenido.js).
   Las coordenadas son aproximadas (centro de la región).
   ===================================================================== */
window.XLT_MAPMX = {
types: {
  calor:   {label:"Calor y sequía", icon:"☀️", color:"#c4572f"},
  agua:    {label:"Costas y huracanes", icon:"🌊", color:"#1f5f8b"},
  campo:   {label:"Campo y comida", icon:"🌽", color:"#a8802a"},
  eco:     {label:"Ecosistemas", icon:"🌿", color:"#3f7d3a"},
  sol:     {label:"Soluciones", icon:"💡", color:"#125d55"}
},
national: [
  {n:"1.69 °C", l:"más caliente que a inicios del siglo XX"},
  {n:"86%", l:"de los municipios con algún grado de sequía (junio de 2024)"},
  {n:"64%", l:"del territorio con estrés hídrico (2025)"},
  {n:"984", l:"muertes por desastres hidrometeorológicos (2023)"}
],
pts: [
 {id:"noroeste", type:"calor", name:"Más días secos en el noroeste", place:"Baja California, Sonora, Sinaloa y Chihuahua", lat:29.3, lng:-110.7, zoom:5,
  desc:"El norte y noroeste del país son de las zonas donde más se nota el aumento de días sin lluvia.",
  fact:"Desde la década de 2000, los días secos consecutivos al año pasaron de unos 70 a cerca de 80, con los aumentos más fuertes en Baja California, Sonora, Sinaloa y Chihuahua.",
  why:"Más días secos seguidos significan menos agua para las ciudades, el campo y los ecosistemas.", refs:["ndc30"], lesson:"l8"},
 {id:"campo", type:"campo", name:"Sequía y campo", place:"Sinaloa, Jalisco, Michoacán, Estado de México y Guanajuato", lat:20.4, lng:-102.6, zoom:6,
  desc:"Las sequías golpean a los estados que producen buena parte de la comida del país.",
  fact:"Cada sequía histórica representa en promedio una pérdida de 26,752 millones de pesos para el sector primario. Entre los estados más afectados están Sinaloa, Jalisco, Michoacán, Estado de México y Guanajuato. Entre 2018 y 2023 se perdieron 2.83 millones de hectáreas agrícolas por sequía, sobre todo de maíz y frijol.",
  why:"Lo que pasa en el campo llega a tu mesa y a los precios.", refs:["ndc30"], lesson:"l9"},
 {id:"manglares", type:"eco", name:"Manglares del noroeste", place:"Costa del noroeste de México", lat:23.0, lng:-106.2, zoom:6,
  desc:"Los manglares protegen la costa de tormentas, son guardería de peces y guardan mucho carbono.",
  fact:"En el noroeste de México se perdieron 1,817 hectáreas de manglares entre 2015 y 2020.",
  why:"Cada hectárea perdida es menos protección para la costa y más carbono liberado.", refs:["xlt_m1"], lesson:"l10"},
 {id:"acapulco", type:"agua", name:"Huracán Otis", place:"Acapulco, Guerrero", lat:16.85, lng:-99.88, zoom:8,
  desc:"En 2023, Otis se intensificó muy rápido, en cuestión de horas, antes de tocar tierra en Acapulco.",
  fact:"Los huracanes que se intensifican muy rápido, como Otis en 2023, son más difíciles de anticipar y de evacuar. En 2023 hubo 984 muertes por desastres hidrometeorológicos en México, 98% más que en 2022.",
  why:"Menos tiempo de aviso significa menos tiempo para protegerse.", refs:["ndc30"], lesson:"l8"},
 {id:"golfo", type:"agua", name:"El mar sube más rápido en el Golfo", place:"Golfo de México", lat:22.0, lng:-95.2, zoom:5,
  desc:"México tiene más de 11,000 km de costa, y el Golfo es una de las zonas más expuestas.",
  fact:"En el Golfo de México, el nivel del mar sube 44% más rápido que el promedio mundial, hasta 2.4 mm por año.",
  why:"Más erosión, inundaciones y salinización del agua en comunidades costeras.", refs:["ndc30"], lesson:"l8"},
 {id:"elbosque", type:"agua", name:"El Bosque, Tabasco", place:"Centla, Tabasco", lat:18.6, lng:-92.6, zoom:9,
  desc:"Una comunidad costera donde el avance del mar ya no es una proyección.",
  fact:"La erosión y el avance del mar destruyeron de forma irreversible el territorio donde vivían las familias de El Bosque. Hacia 2050, más de 3 millones de personas podrían ser desplazadas dentro de México por el clima.",
  why:"Muestra que el desplazamiento climático ya ocurre en México.", refs:["ndc30"], lesson:"l8"},
 {id:"caribe", type:"eco", name:"Corales del Caribe mexicano", place:"Quintana Roo", lat:20.6, lng:-87.1, zoom:7,
  desc:"El océano absorbe calor y CO₂, y los corales lo resienten.",
  fact:"Las olas de calor marinas y la acidificación han provocado episodios de blanqueamiento masivo de corales en regiones tropicales, incluido el Caribe y México. El océano absorbe alrededor del 91% del calor extra.",
  why:"Sin arrecifes sanos se pierde pesca y la protección natural de la costa.", refs:["ipcc_wg1","ipcc_wg2_todos"], lesson:"l3"},
 {id:"veracruz", type:"sol", name:"Docentes preparados ante inundaciones", place:"Veracruz", lat:19.4, lng:-96.6, zoom:7,
  desc:"Una solución de adaptación que empieza en el salón de clases.",
  fact:"Investigaciones con docentes en zonas inundables de Veracruz muestran que capacitar al profesorado es una de las vías más efectivas para construir resiliencia en la comunidad.",
  why:"La escuela puede ser el centro de la preparación de toda una comunidad.", refs:["xlt_escritorio"], lesson:"l14"},
 {id:"edomex", type:"sol", name:"Educación climática en la escuela", place:"Estado de México", lat:19.35, lng:-99.65, zoom:8,
  desc:"Llevar el tema al currículo es una forma de preparar a toda una generación.",
  fact:"El Estado de México fue de los primeros territorios de América Latina en incorporar formalmente la educación sobre cambio climático en su currículo escolar.",
  why:"Entender el problema es el primer paso para actuar.", refs:["xlt_escritorio"], lesson:"l14"}
]
};
