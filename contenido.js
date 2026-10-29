/* =====================================================================
   XLATIERRA · CONTENIDO DEL CURSO
   ---------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar para cambiar textos,
   preguntas, lecturas o recursos. No toques app.js ni estilos.css.

   Reglas para editar sin romper nada:
   - Todo texto va entre comillas dobles "así".
   - Si necesitas comillas dentro de un texto, usa «estas».
   - No borres las comas al final de cada bloque.
   - Puedes usar <strong>negritas</strong> y <br> para saltos de línea.

   Marcas importantes:
   // APROBADO (fuente externa) -> dato que no viene de tu investigación de NotebookLM,
                     aprobado por Ana Ceci el 27/10/2026. Fuentes en DATOS_EXTERNOS_APROBADOS.md

   Tipos de bloque:
   p        párrafo                {t:"p", html:"..."}
   h        subtítulo              {t:"h", text:"..."}
   list     lista                  {t:"list", items:["...","..."]}
   answers  respuesta corta/larga  {t:"answers", short:"...", long:"<p>...</p>"}
   guess    ¡Adivina!              {t:"guess", q:"...", o:["a","b"], a:0, e:"explicación"}
            (a = número de la opción correcta, empezando en 0)
   stats    tarjetas de datos      {t:"stats", items:[{n:"86%", l:"...", s:"fuente"}]}
   table    tabla                  {t:"table", head:[...], rows:[[...],[...]]}
   note     recuadro               {t:"note", kind:"info|warn|heart|act", title:"...", html:"..."}
   reflect  pregunta para escribir {t:"reflect", id:"único", q:"..."}
   pick     elegir una opción      {t:"pick", id:"único", q:"...", o:["..."]}
   read     para profundizar       {t:"read", items:[{title:"...", url:"...", desc:"...", lang:"ES|EN"}]}
   land     saberes del territorio {t:"land", html:""}   (vacío = no se muestra)

   En «read» y «resources» puedes agregar videos con type:"video" y duracion:
   {title:"...", url:"...", desc:"...", lang:"ES", type:"video", dur:"10 min"}

   Cada unidad tiene un personaje guía (guide). Una lección puede usar otro
   con guide:"ajolote" (ver PERSONAJES abajo).
   ===================================================================== */

window.XLT_CONTENT = {

/* Actividades fuera de la ruta principal */
extras: [
  {icon:"🇲🇽", title:"Mapa de impactos en México", href:"mapa-mexico.html", tag:"Extra opcional",
   desc:"Sequía, costas, huracanes, campo y soluciones: lo que ya está pasando en el país, región por región."}
],

course: {
  id: "m1",
  title: "Introducción al cambio climático",
  label: "Módulo 1",
  subtitle: "Entiende qué está pasando con el clima, por qué, a quién le afecta más y qué puedes hacer. En español, con datos de México y América Latina y fuentes que puedes revisar.",
  totalTime: "~2 h"
},

/* ======================= PERSONAJES =======================
   Aparecen en el índice del curso (uno por unidad), al inicio de cada
   lección y en los retos. Para cambiar textos, edita aquí.
   Para cambiar una imagen, reemplaza el archivo en img/ con el mismo nombre. */
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
  {id:"u1", guide:"espiritu", title:"Unidad 1 · Lo básico", desc:"Qué es el cambio climático y cómo funciona."},
  {id:"u2", guide:"ajolote", title:"Unidad 2 · Las causas", desc:"Cómo sabemos que somos nosotros, y quién emite."},
  {id:"u3", guide:"jaguar", title:"Unidad 3 · Impactos y justicia", desc:"Lo que ya está pasando, y a quién le pega más."},
  {id:"u4", guide:"nutria", title:"Unidad 4 · Soluciones y acción", desc:"Cómo separar ciencia de mito, qué funciona y qué puedes hacer tú."}
],

lessons: [

/* ============================ UNIDAD 1 ============================ */
{ id:"l1", unit:"u1", title:"Bienvenida: ¿qué es el cambio climático?", time:"8 min",
  refs:["ipcc_wg1","ndc30","pincc","w3techs","unesco_gem","xlt_escritorio"],
  blocks:[
  {t:"p", html:"En 2023, las olas de calor obligaron a suspender clases en <strong>18 estados de México</strong>. Tal vez lo viviste: salones sofocantes, entrenamientos cancelados, el ventilador que no alcanza. No fue solo «un año caluroso». Fue una señal de algo más grande, y de eso trata este curso."},
  {t:"note", kind:"info", title:"Cómo funciona este curso", html:"Son <strong>15 lecciones</strong> en 4 unidades. En cada una encontrarás preguntas <strong>¡Adivina!</strong> (no te preocupes por fallar: equivocarse antes de leer la respuesta ayuda a recordar), una <strong>respuesta corta</strong> y una <strong>larga</strong> para que elijas qué tan profundo quieres ir, datos con su fuente, y lecturas para profundizar. Al final hay un cuestionario y, si lo apruebas, tu certificado."},
  {t:"guess", q:"Si mañana amanece helando en Toluca, ¿eso demuestra que el cambio climático no existe?",
   o:["Sí, si hace frío el planeta no se está calentando","No, un día frío habla del tiempo, no del clima","Depende de qué tan fuerte sea el frío"], a:1,
   e:"Un día frío es <strong>tiempo atmosférico</strong>: lo que pasa hoy. El <strong>clima</strong> es el promedio de muchos años. Lo veremos a fondo en la siguiente lección."},
  {t:"answers",
   short:"El cambio climático es el calentamiento rápido y duradero del planeta causado por actividades humanas. Al quemar carbón, petróleo y gas, y al talar bosques, llenamos la atmósfera de gases que atrapan calor, como una cobija extra. Eso cambia las lluvias e intensifica las olas de calor, las sequías y los huracanes.",
   long:"<p>El clima de la Tierra siempre ha variado, pero a lo largo de miles o millones de años. Lo que ocurre ahora es extraordinario por dos razones: <strong>lo causamos nosotros</strong> y <strong>ocurre a una velocidad sin precedentes</strong> en al menos los últimos 2,000 años.</p><p>Según el IPCC (el grupo de científicos que evalúa el clima para la ONU), el planeta ya se calentó alrededor de <strong>1.1 °C</strong> respecto a la época preindustrial (1850–1900), y todo ese calentamiento es resultado de la actividad humana.</p><p>1.1 °C suena poco, pero es un promedio de todo el planeta: océanos, polos, desiertos y ciudades. Un cambio así en el promedio significa extremos mucho más fuertes en lugares concretos, como tu ciudad.</p>"},
  {t:"stats", items:[
    {n:"1.1 °C", l:"calentamiento global respecto a 1850–1900", s:"IPCC AR6"},
    {n:"1.69 °C", l:"aumento de la temperatura media de México desde inicios del siglo XX (global: 1.23 °C)", s:"NDC 3.0 México / PINCC-UNAM"},
    {n:"18", l:"estados suspendieron clases por calor extremo en 2023", s:"NDC 3.0 México"}]},
  {t:"h", text:"¿Por qué aprenderlo en español?"},
  {t:"p", html:"Casi la mitad del contenido de internet está en inglés, y apenas alrededor del <strong>6%</strong> en español. En ciencia la brecha es mayor: se estima que solo cerca del <strong>0.5%</strong> de las publicaciones en ciencias naturales se escribe originalmente en español. Mucho conocimiento climático nos llega tarde, traducido o sin conectar con nuestra realidad."},
  {t:"p", html:"Y no basta con «haber oído del tema». En una encuesta de la UNESCO a 17,000 jóvenes de 166 países, el 90% dijo haber recibido información sobre cambio climático en la escuela, pero casi <strong>un tercio no sabía explicarlo</strong> y más del 40% solo lo entendía en términos muy generales. Este curso busca que tú sí puedas explicarlo, y hacer algo con eso."},
  {t:"reflect", id:"r1", q:"¿Recuerdas algún momento en que sentiste que el clima de tu ciudad estaba cambiando (calor, lluvias, agua, aire)? Descríbelo en dos o tres líneas."},
  {t:"read", items:[
    {title:"El cambio climático explicado", url:"https://www.youtube.com/watch?v=miEJI0XQiN4", desc:"El Robot de Platón (2016). Una explicación amena; algunos datos ya son de hace años.", lang:"ES", type:"video", dur:"10 min"},
    {title:"IPCC · Cambio climático 2021: Resumen para todos", url:"https://www.ipcc.ch/report/ar6/wg1/downloads/outreach/IPCC_AR6_WGI_SummaryForAll_Spanish.pdf", desc:"La versión más accesible del informe científico más importante del mundo.", lang:"ES"},
    {title:"IPCC en español", url:"https://www.ipcc.ch/languages-2/spanish/", desc:"Todos los materiales del IPCC disponibles en español.", lang:"ES"}]},
  {t:"land", html:""}
  ],
  sources:"IPCC AR6 GT1, Resumen para responsables de políticas (2021); Gobierno de México, NDC 3.0 (2025); PINCC-UNAM; W3Techs; UNESCO, Informe GEM; investigación de escritorio Xlatierra."
},

{ id:"l2", unit:"u1", title:"Clima y tiempo: no son lo mismo", time:"6 min",
  refs:["ipcc_wg1","ndc30","cook2017"],
  blocks:[
  {t:"p", html:"Esta confusión parece pequeña, pero es la puerta de entrada a muchísima desinformación. Vale la pena entenderla bien."},
  {t:"table", head:["","Tiempo atmosférico","Clima"], rows:[
    ["¿Qué describe?","El estado de la atmósfera en un lugar y momento: temperatura, humedad, lluvia, viento","El promedio, la variabilidad y la frecuencia de esas condiciones en un periodo largo"],
    ["Escala","Horas, días o semanas","Décadas o siglos (mínimo 30 años)"],
    ["Ejemplo","Un aguacero una tarde en tu ciudad","Cómo suelen ser las lluvias de tu ciudad si promedias 30 años"]]},
  {t:"answers",
   short:"El tiempo es lo que pasa hoy; el clima es lo que esperas en promedio a lo largo de décadas. Por eso un día frío o un invierno fuerte no desmienten el calentamiento global: es como juzgar todo un año escolar por un solo examen.",
   long:"<p>Las ciencias atmosféricas definen el clima a partir de un periodo de al menos <strong>30 años</strong>. Así se separan las variaciones normales de un día o un año de las tendencias reales.</p><p>Una técnica muy común de desinformación es la <strong>selección de datos a modo</strong> (en inglés, <em>cherry-picking</em>): mostrar solo un invierno muy frío, o una gráfica de pocos meses, para ocultar una tendencia de largo plazo. Cuando alguien te muestre un dato climático, la primera pregunta útil es: <strong>¿de cuántos años es?</strong></p>"},
  {t:"guess", q:"Si 2027 tuviera un invierno especialmente frío en el norte de México, ¿qué podríamos concluir?",
   o:["Que el calentamiento global se detuvo","Nada sobre el clima por sí solo: hay que ver la tendencia de décadas","Que los científicos se equivocaron"], a:1,
   e:"Un invierno es tiempo, no clima. La tendencia de largo plazo es la que importa, y esa sigue subiendo."},
  {t:"match", title:"¿Clima o tiempo?", q:"Ameyalli escuchó estas frases. Decide si cada una habla del <strong>tiempo</strong> (lo que pasa en horas o días) o del <strong>clima</strong> (lo típico a lo largo de décadas).",
   eco:["🌦️ Tiempo","📊 Clima"],
   done:"Truco para no confundirte: si la frase habla de hoy, ayer, mañana o «este» invierno, es tiempo. Si habla de lo que «suele» pasar o de tendencias de muchos años, es clima.",
   items:[
    {n:"«Mañana va a llover en Monterrey.»", icon:"☔", a:0, e:"Es un pronóstico de un día: tiempo."},
    {n:"«En la Ciudad de México, la temporada de lluvias suele ir de mayo a octubre.»", icon:"📅", a:1, e:"Describe lo que pasa normalmente año con año: clima."},
    {n:"«Hoy hay una ola de calor en Hermosillo.»", icon:"🥵", a:0, e:"Es lo que pasa hoy: tiempo. (Que las olas de calor sean más frecuentes con los años sí sería clima.)"},
    {n:"«Este invierno fue muy frío en Chihuahua.»", icon:"🥶", a:0, e:"Una sola temporada es tiempo. Por eso un invierno frío no desmiente el calentamiento."},
    {n:"«La temperatura promedio de México ha aumentado desde inicios del siglo XX.»", icon:"📈", a:1, e:"Es una tendencia de más de un siglo: clima."},
    {n:"«Ayer granizó en Puebla.»", icon:"🧊", a:0, e:"Un evento de un día: tiempo."},
    {n:"«En el norte de México predominan los climas secos.»", icon:"🌵", a:1, e:"Describe las condiciones típicas de una región: clima."},
    {n:"«Los veranos en Mérida suelen ser calurosos y húmedos.»", icon:"🌴", a:1, e:"«Suelen» es la palabra clave: lo típico es clima."}
   ]},
  {t:"h", text:"México se calienta más rápido"},
  {t:"stats", items:[
    {n:"3.2 °C", l:"por siglo: ritmo de calentamiento de México", s:"NDC 3.0 México"},
    {n:"2.0 °C", l:"por siglo: ritmo promedio mundial", s:"NDC 3.0 México"}]},
  {t:"guess", q:"¿México se calienta más rápido o más lento que el promedio mundial?",
   o:["Más lento","Igual","Más rápido"], a:2,
   e:"Más rápido. Por eso este no es un tema lejano «de los polos»: está pasando aquí."},
  {t:"note", kind:"act", title:"Mini reto: entrevista a tu familia", html:"Pregúntale a alguien mayor de tu familia: <strong>«¿El clima de aquí es igual que cuando tenías mi edad?»</strong>. Pregunta por el calor, las lluvias, el agua o las temporadas. Su memoria no es un dato científico, pero te ayuda a conectar las cifras con la vida real. Escribe lo que te contó abajo."},
  {t:"reflect", id:"r2", q:"¿Qué te contó tu familiar? (Si no puedes preguntar ahora, vuelve después.)"},
  {t:"land", html:""}
  ],
  sources:"IPCC AR6 GT1; Gobierno de México, NDC 3.0 (2025); Cook et al. (2017)."
},

{ id:"l3", unit:"u1", title:"El efecto invernadero: la cobija del planeta", time:"8 min",
  refs:["ipcc_wg1","ipcc_wg2_todos"],
  blocks:[
  {t:"guess", q:"¿De dónde viene casi toda la energía que calienta la Tierra?",
   o:["Del núcleo de la Tierra","Del Sol","De los volcanes"], a:1,
   e:"Del Sol. La pregunta interesante es: ¿por qué ese calor no se escapa de vuelta al espacio?"},
  {t:"h", text:"El camino de la energía, en tres pasos"},
  {t:"list", items:[
    "<strong>1. Entra:</strong> la luz del Sol atraviesa la atmósfera y calienta la superficie de la Tierra, el suelo y el mar.",
    "<strong>2. Sale:</strong> la superficie caliente devuelve esa energía hacia afuera como <strong>radiación infrarroja</strong>, una forma de calor que no podemos ver.",
    "<strong>3. Se atrapa:</strong> los gases de efecto invernadero absorben parte de esa radiación y la vuelven a emitir en todas direcciones, incluida de regreso hacia la superficie y la parte baja de la atmósfera."]},
  {t:"greenhouse", title:"La cobija del planeta", q:"Mueve el control para cambiar la cantidad de gases de efecto invernadero. Mira las flechas: las amarillas son la luz del Sol que entra, las punteadas son el calor que se escapa al espacio y las rojas, el calor que la cobija regresa a la superficie.",
   levels:[
    {short:"Sin gases", name:"Sin cobija", temp:"−18 °C", text:"Sin efecto invernadero, casi todo el calor se escaparía al espacio. La Tierra sería un planeta helado de unos −18 °C en promedio."},
    {short:"Natural", name:"La cobija natural", temp:"≈ 15 °C", text:"El efecto invernadero natural mantiene la Tierra unos 33 °C más caliente que sin él. Gracias a esta cobija existe la vida como la conocemos."},
    {short:"Hoy", name:"Hoy: una cobija más gruesa", temp:"+1.1 °C", text:"Desde el siglo XIX hemos agregado gases. Entra la misma energía del Sol, pero sale menos: el planeta ya está 1.1 °C más caliente que en la época preindustrial."},
    {short:"Más gases", name:"Si seguimos emitiendo", temp:"sube…", text:"Cada tonelada de CO₂ engrosa la cobija y se queda ahí durante siglos. Mientras sigamos sumando emisiones, la temperatura seguirá subiendo. Por eso hay que llegar a cero emisiones netas."}
   ]},
  {t:"answers",
   short:"Los gases de efecto invernadero funcionan como una cobija: dejan entrar la luz del Sol, pero atrapan parte del calor que la Tierra intenta soltar. Esa cobija es natural y necesaria. El problema es que, desde el siglo XIX, la hemos hecho mucho más gruesa.",
   long:"<p>Sin efecto invernadero, la temperatura media de la Tierra sería unos <strong>33 °C más fría</strong>, alrededor de <strong>−18 °C</strong>: un planeta congelado donde la vida como la conocemos no sería posible. Así que el efecto invernadero no es el villano.</p><p>El problema es el <strong>exceso</strong>. Desde el inicio de la industrialización hemos inyectado una cantidad constante de gases que rompe el equilibrio de energía del planeta: entra la misma energía del Sol, pero sale menos. Esa energía que se queda es la que calienta al planeta.</p>"},
  {t:"guess", q:"Sin efecto invernadero, ¿cómo sería la Tierra?",
   o:["Más o menos igual","Unos 33 °C más fría, cerca de −18 °C","Mucho más caliente"], a:1,
   e:"Sería un planeta helado. Necesitamos la cobija; lo que no necesitamos es que siga engrosándose."},
  {t:"guess", q:"De todo el calor extra que hemos atrapado, ¿a dónde va la mayor parte?",
   o:["A la atmósfera","A los océanos","Al hielo de los polos","A los continentes"], a:1,
   e:"Los océanos absorben alrededor del <strong>91%</strong>. La tierra, un 5%; el hielo, un 3%; y la atmósfera, apenas un 1%. El calor que sentimos en el aire es solo la punta del iceberg."},
  {t:"stats", items:[
    {n:"91%", l:"del calor extra lo absorben los océanos", s:"IPCC AR6"},
    {n:"1%", l:"se queda en la atmósfera", s:"IPCC AR6"},
    {n:"−18 °C", l:"temperatura media de la Tierra sin efecto invernadero", s:"IPCC AR6"}]},
  {t:"note", kind:"info", title:"Un mar que se calienta y se acidifica", html:"Al absorber calor y CO₂, el océano cambia. Las olas de calor marinas y la acidificación han provocado episodios de <strong>blanqueamiento masivo de corales</strong> en regiones tropicales, incluido el Caribe y México. Cuando los arrecifes se degradan, se pierde pesca y la protección natural de la costa frente a tormentas. Y la acidificación de la superficie del océano ya supera lo registrado en los últimos 2 millones de años."},
  {t:"reflect", id:"r3", q:"Explica el efecto invernadero con tus propias palabras, como si se lo contaras a alguien de 12 años."},
  {t:"read", items:[
    {title:"Cambio climático y efecto invernadero", url:"https://www.youtube.com/watch?v=F-ztU2l46z4", desc:"ONU-REDD Ecuador (2014). Explicación institucional del efecto invernadero.", lang:"ES", type:"video"},
    {title:"IPCC · Resumen para responsables de políticas (GT1) en español", url:"https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WG1_SPM_Spanish.pdf", desc:"Más técnico, pero es la fuente original de muchas cifras de este curso.", lang:"ES"},
    {title:"Climate Science · Efecto invernadero", url:"https://climatescience.org/es/advanced-greenhouse-effect", desc:"Curso interactivo gratuito en español para profundizar.", lang:"ES"}]},
  {t:"land", html:""}
  ],
  sources:"IPCC AR6 GT1 (2021); IPCC AR6 GT2, Resumen para todos (2022)."
},

{ id:"l4", unit:"u1", title:"Los gases que calientan", time:"8 min",
  refs:["ipcc_wg1"],
  blocks:[
  {t:"p", html:"No todos los gases de efecto invernadero son iguales. Se diferencian en tres cosas: <strong>cuánto calor atrapan</strong>, <strong>cuánto tiempo duran</strong> en la atmósfera y <strong>cuánto emitimos</strong>."},
  {t:"table", head:["Gas","¿De dónde sale?","Lo que hay que saber","Nivel en 2019"], rows:[
    ["Dióxido de carbono (CO₂)","Quemar carbón, petróleo y gas; deforestación; producción de cemento","El que más contribuye al calentamiento. Permanece siglos o milenios: cada tonelada se acumula","410 ppm: lo más alto en al menos 2 millones de años"],
    ["Metano (CH₄)","Ganadería, cultivo de arroz, basureros, fugas de petróleo y gas","Dura menos que el CO₂, pero recortarlo rápido enfría en el corto plazo y mejora el aire","1,866 ppb: lo más alto en al menos 800,000 años"],
    ["Óxido nitroso (N₂O)","Fertilizantes agrícolas, industria química","El tercero en importancia","332 ppb: lo más alto en al menos 800,000 años"]]},
  {t:"p", html:"<em>ppm = partes por millón; ppb = partes por mil millones. Son medidas de qué tan concentrado está un gas en el aire.</em>"},
  {t:"guess", q:"Desde 1750, ¿cuál de estos gases aumentó más en porcentaje?",
   o:["CO₂","Metano","Óxido nitroso"], a:1,
   e:"El <strong>metano</strong>, con un aumento de 156%. El CO₂ subió 47% y el óxido nitroso 23%. Pero ojo: el CO₂ sigue siendo el más importante porque emitimos muchísimo más y se acumula durante siglos."},
  {t:"stats", items:[
    {n:"+47%", l:"CO₂ desde 1750", s:"IPCC AR6"},
    {n:"+156%", l:"metano desde 1750", s:"IPCC AR6"},
    {n:"+23%", l:"óxido nitroso desde 1750", s:"IPCC AR6"}]},
  {t:"answers",
   short:"El CO₂ es como una deuda que no se borra: cada tonelada se suma a las anteriores y sigue calentando durante siglos. El metano es como un golpe fuerte pero corto: atrapa mucho calor, pero desaparece más rápido. Por eso se necesitan las dos cosas: llevar el CO₂ a cero y recortar el metano rápido.",
   long:"<p>Para detener el calentamiento, las emisiones netas de CO₂ tienen que llegar a cero, porque lo que ya emitimos sigue ahí. Mientras sigamos sumando, la temperatura sigue subiendo.</p><p>El metano es un contaminante «de vida corta»: dura menos tiempo en la atmósfera, así que reducir sus emisiones produce un efecto de enfriamiento relativamente rápido, y además mejora la calidad del aire. Es una de las palancas más veloces que tenemos.</p><p>Para comparar gases distintos, los científicos usan el <strong>CO₂ equivalente (CO₂e)</strong>: cuánto CO₂ causaría el mismo calentamiento que cierta cantidad de otro gas. Por eso verás cifras como «millones de toneladas de CO₂e».</p>"},
  /* APROBADO (fuente externa): potencial de calentamiento del metano (no está en tu investigación de NotebookLM) */
  {t:"guess", q:"Tonelada por tonelada, en un plazo de 100 años, ¿cuánto más calienta el metano que el CO₂?",
   o:["Lo mismo","Unas 2 veces","Unas 28 veces","Unas 1,000 veces"], a:2,
   e:"Alrededor de <strong>28 veces</strong> en un horizonte de 100 años. En un plazo de 20 años la diferencia es todavía mayor, porque el metano actúa fuerte al principio y luego se descompone."},
  {t:"reflect", id:"r4", q:"¿Cuál de las fuentes de estos gases ves más cerca de tu vida diaria (transporte, comida, basura, electricidad)?"},
  {t:"land", html:""}
  ],
  sources:"IPCC AR6 GT1, Resumen para responsables de políticas (2021) y capítulo 7. Potencial de calentamiento del metano: IPCC AR5/AR6."
},

/* ============================ UNIDAD 2 ============================ */
{ id:"l5", unit:"u2", title:"¿Cómo sabemos que somos nosotros?", time:"8 min",
  refs:["ipcc_wg1","vdlinden2017","cook2017"],
  blocks:[
  {t:"p", html:"«El clima siempre ha cambiado». Es cierto, y es una de las objeciones más comunes. Entonces, ¿cómo sabe la ciencia que esta vez la causa somos nosotros? Hay tres pruebas que se refuerzan entre sí."},
  {t:"guess", q:"Si los científicos simulan el clima de los últimos 170 años usando SOLO causas naturales (Sol y volcanes), ¿qué pasa con la temperatura?",
   o:["Sube igual que en la realidad","Se mantiene casi plana","Baja mucho"], a:1,
   e:"Se mantiene casi plana. Solo cuando se agregan las emisiones humanas, las simulaciones reproducen el calentamiento real de 1.1 °C."},
  {t:"h", text:"Las tres pruebas"},
  {t:"list", items:[
    "<strong>1. Los modelos (detección y atribución):</strong> supercomputadoras simulan el clima con las leyes de la física. Con solo factores naturales, no hay calentamiento. Con las emisiones humanas, sí, y coincide con lo observado.",
    "<strong>2. La velocidad:</strong> los cambios naturales del clima, como los cambios en la órbita de la Tierra, tardan decenas de miles de años. Las grandes erupciones volcánicas enfrían brevemente. El calentamiento actual no tiene paralelo en al menos 2,000 años.",
    "<strong>3. El momento:</strong> el aumento del CO₂ (47%), el metano (156%) y el óxido nitroso (23%) desde 1750 coincide con el inicio de la industrialización y el uso masivo de combustibles fósiles."]},
  {t:"answers",
   short:"El IPCC concluye que el 100% del calentamiento de 1.1 °C desde la era preindustrial se debe a la actividad humana. No es una opinión aislada: alrededor del 97% de las y los especialistas en ciencias del clima coincide.",
   long:"<p>Hay además una relación casi directa entre el CO₂ acumulado y la temperatura: según el IPCC, por cada 1,000 petagramos (miles de millones de toneladas) de carbono emitidos, el planeta se calienta entre 1.0 y 2.3 °C. Por eso la ciencia puede proyectar cuánto más se calentará el planeta según cuánto sigamos emitiendo.</p><p>Que el clima haya cambiado antes por causas naturales no significa que este cambio sea natural. Es como decir que porque los incendios forestales pueden empezar por rayos, ningún incendio puede ser provocado.</p>"},
  {t:"guess", q:"¿Qué porcentaje de especialistas en clima coincide en que el calentamiento actual lo causamos los humanos?",
   o:["Alrededor de 50%","Alrededor de 75%","Alrededor de 97%"], a:2,
   e:"Alrededor del <strong>97%</strong>."},
  {t:"note", kind:"warn", title:"El caso de la «Petición de Oregón»", html:"Durante años circuló una petición supuestamente firmada por más de 31,000 «científicos» que negaban el cambio climático causado por humanos. Al revisarla, se encontraron firmas falsas, incluso nombres de personajes de ficción, y <strong>menos del 1%</strong> de los firmantes tenía formación en ciencias atmosféricas. La investigación muestra que exponer a la gente a este tipo de desinformación puede bajar hasta <strong>9 puntos</strong> la percepción del consenso científico, aunque el consenso real no cambie."},
  {t:"reflect", id:"r5", q:"Si un amigo te dice «el clima siempre ha cambiado, esto es natural», ¿qué le responderías en dos frases?"},
  {t:"read", items:[
    {title:"Neutralizar la desinformación mediante la inoculación (Cook et al., 2017)", url:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0175799", desc:"El estudio sobre cómo protegernos de los argumentos engañosos.", lang:"EN"},
    {title:"Yale · Cómo «vacunar» al público contra la desinformación climática", url:"https://climatecommunication.yale.edu/publications/inoculate-public-misinformation-climate-change/", desc:"Resumen del estudio de van der Linden y colegas.", lang:"EN"}]},
  {t:"land", html:""}
  ],
  sources:"IPCC AR6 GT1 (2021); van der Linden et al. (2017), Global Challenges; Cook et al. (2017), PLOS ONE."
},

{ id:"l6", unit:"u2", title:"¿De dónde salen las emisiones?", time:"8 min",
  refs:["ipcc_wg1","ipcc_wg3","climatewatch","owid_food","ndc30"],
  blocks:[
  {t:"p", html:"Las principales fuentes de gases de efecto invernadero son la <strong>quema de combustibles fósiles</strong> (carbón, petróleo y gas) para producir energía y mover el transporte, la <strong>deforestación</strong> y el cambio de bosques a tierras agrícolas, los <strong>procesos industriales</strong> como la producción de cemento, y la agricultura intensiva."},
  {t:"guess", q:"A nivel mundial, ¿qué sector produce más gases de efecto invernadero?",
   o:["Agricultura","Energía","Basura y residuos","Procesos industriales"], a:1,
   e:"La <strong>energía</strong>. Incluye producir electricidad y calor, el transporte, la energía que usan fábricas y edificios, y las fugas de gas y petróleo."},
  /* APROBADO (fuente externa): porcentajes por sector (Climate Watch / WRI 2019) */
  {t:"table", head:["Sector","Qué incluye","Parte de las emisiones globales (2019)"], rows:[
    ["Energía","Electricidad, calor, transporte, edificios, industria que quema combustibles, fugas","~76%"],
    ["Agricultura y uso del suelo","Ganado, fertilizantes, arrozales, deforestación","~12%"],
    ["Procesos industriales","Reacciones químicas al fabricar cemento, químicos y otros materiales","~6%"],
    ["Residuos","Basureros y aguas residuales (sobre todo metano)","~3%"]]},
  /* PENDIENTE DE APROBACIÓN (fuente externa): reparto sectorial de la NDC 3.0, pág. 46 */
  {t:"order", title:"¿De dónde salen las emisiones de México?", q:"Ahora en México. Ordena estos sectores del que <strong>más</strong> emite al que <strong>menos</strong>. Toca primero el que creas que emite más.",
   unit:"%",
   items:[
    {n:"Transporte", icon:"🚗", v:23},
    {n:"Generación de electricidad", icon:"⚡", v:19},
    {n:"Industria", icon:"🏭", v:18},
    {n:"Agricultura y ganadería", icon:"🐄", v:17},
    {n:"Residuos", icon:"🗑️", v:9},
    {n:"Petróleo y gas", icon:"🛢️", v:8}
   ],
   done:"Fuente: Gobierno de México, NDC 3.0 (2025), pág. 46. Son los porcentajes con que se reparte el esfuerzo de reducción al 2030 según el peso de cada sector en el Inventario Nacional de Emisiones (datos preliminares de 2024). Uso de la tierra y silvicultura, y residencial y comercial, suman 3% cada uno."},
  {t:"answers",
   short:"La mayor parte de las emisiones viene de la energía que usamos para movernos, producir y vivir. Por eso cambiar cómo producimos y usamos la energía es la solución más grande, aunque no la única.",
   long:"<p>Cuando talamos un bosque para sembrar o criar ganado, el carbono que guardaban los árboles y el suelo regresa a la atmósfera. Los bosques y suelos sanos son <strong>sumideros de carbono</strong>: absorben más CO₂ del que liberan. Perderlos suma emisiones y quita una protección.</p><p>Los basureros también emiten: cuando la basura orgánica, como los restos de comida, se pudre sin oxígeno, produce metano.</p>"},
  /* APROBADO (fuente externa): peso de la deforestación en América Latina */
  {t:"note", kind:"info", title:"América Latina es diferente", html:"En el promedio mundial domina la energía. En nuestra región, la <strong>deforestación y la agricultura</strong> pesan mucho más que en el promedio global. Por eso, en América Latina, proteger bosques y selvas es política climática."},
  {t:"h", text:"Lo que comemos también cuenta"},
  /* APROBADO (fuente externa): sistema alimentario 26% y emisiones por kilo */
  {t:"p", html:"Producir, transportar, procesar y desperdiciar comida genera alrededor de una <strong>cuarta parte</strong> de las emisiones humanas. La mayoría ocurre en el campo y por el cambio de uso del suelo, no en el transporte."},
  {t:"guess", q:"¿Qué genera más emisiones por cada kilo producido?",
   o:["Frijol","Pollo","Carne de res"], a:2,
   e:"La carne de res puede emitir <strong>decenas de veces más</strong> por kilo que leguminosas como el frijol o las lentejas. Esto no se trata de culpar a nadie por lo que come: se trata de entender qué sistemas de producción pesan más."},
  {t:"reflect", id:"r6", q:"Piensa en tu día de ayer. Escribe tres actividades que crees que generaron emisiones (transporte, comida, electricidad, compras)."},
  {t:"read", items:[
    {title:"Climate Watch · Emisiones de gases de efecto invernadero por país y sector", url:"https://www.climatewatchdata.org/", desc:"Datos interactivos para explorar las emisiones de cualquier país, incluido México.", lang:"EN"},
    {title:"Our World in Data · Impactos ambientales de los alimentos", url:"https://ourworldindata.org/environmental-impacts-of-food", desc:"Gráficas sobre las emisiones de distintos alimentos.", lang:"EN"},
    {title:"Climate Science · Alimentación y agricultura", url:"https://climatescience.org/es/advanced-food-climate", desc:"Curso gratuito en español sobre comida y clima.", lang:"ES"}]},
  {t:"land", html:""}
  ],
  sources:"IPCC AR6 GT1 y GT3; Climate Watch / WRI, emisiones globales 2019; Poore y Nemecek (2018) vía Our World in Data."
},

{ id:"l7", unit:"u2", title:"¿Quién emite y cuánto?", time:"8 min",
  refs:["pnuma2025","owid_co2"],
  blocks:[
  {t:"p", html:"El cambio climático es global, pero la responsabilidad no está repartida por igual. Depende mucho de cómo lo midas: hoy, en toda la historia o por persona."},
  /* APROBADO (fuente externa): porcentajes por país (Our World in Data / Global Carbon Project) */
  {t:"guess", q:"Hoy, ¿qué país emite más CO₂ cada año?",
   o:["Estados Unidos","China","India","Brasil"], a:1,
   e:"<strong>China</strong>, con más de una cuarta parte de las emisiones anuales de CO₂, seguida de Estados Unidos."},
  {t:"guess", q:"Sumando TODA la historia, ¿qué país ha emitido más CO₂?",
   o:["China","Estados Unidos","India","Brasil"], a:1,
   e:"<strong>Estados Unidos</strong>, con alrededor de una cuarta parte de todo el CO₂ acumulado, seguido de Europa. Como el CO₂ se queda siglos, las emisiones históricas siguen calentando hoy."},
  {t:"h", text:"Tres formas de medir"},
  {t:"list", items:[
    "<strong>Emisiones anuales:</strong> cuánto emite un país hoy.",
    "<strong>Emisiones históricas:</strong> cuánto ha emitido desde la Revolución Industrial. Importa porque el CO₂ se acumula.",
    "<strong>Emisiones por persona:</strong> las emisiones de un país divididas entre su población. Un país con muchos habitantes puede emitir mucho en total pero poco por persona, y al revés."]},
  {t:"answers",
   short:"América Latina y el Caribe emiten entre el 6.7% y el 10% de los gases del mundo. Y la mitad más rica de los países emite la gran mayoría. Quien más contaminó no es quien más sufre.",
   long:"<p>Hay otra forma de medir: las <strong>emisiones por consumo</strong>. Si México importa un celular fabricado en otro país, las emisiones de fabricarlo se cuentan allá, aunque se use aquí. Medir por consumo asigna esas emisiones a quien compra. Así se ve que los estilos de vida de alto consumo pesan mucho.</p><p>Las desigualdades no son solo entre países: dentro de un mismo país, las personas con más ingresos suelen emitir mucho más que las de menos ingresos.</p>"},
  {t:"stats", items:[
    {n:"6.7–10%", l:"de las emisiones globales vienen de América Latina y el Caribe", s:"PNUMA / CEPAL"},
    {n:"86%", l:"del CO₂ lo emite la mitad más rica de los países del mundo", s:"Our World in Data"}]},
  {t:"reflect", id:"r7", q:"¿Crees que sería justo que todos los países redujeran sus emisiones por igual? ¿Por qué sí o por qué no?"},
  {t:"read", items:[
    {title:"Our World in Data · Emisiones de CO₂", url:"https://ourworldindata.org/co2-emissions", desc:"Explora las emisiones de México y otros países por año, por persona e históricas.", lang:"EN"},
    {title:"Climate Science · Causas del cambio climático", url:"https://climatescience.org/es/advanced-greenhouse-effect", desc:"La serie completa sobre causas, en español.", lang:"ES"}]},
  {t:"land", html:""}
  ],
  sources:"PNUMA FI, Financiamiento para la transición justa en ALC (2025); Our World in Data / Global Carbon Project."
},

/* ============================ UNIDAD 3 ============================ */
{ id:"l8", unit:"u3", title:"México en datos: lo que ya está pasando", time:"9 min",
  refs:["ndc30","inecc_atlas","pincc"],
  blocks:[
  {t:"p", html:"Los impactos del cambio climático en México están documentados por el propio Gobierno en su Contribución Determinada a Nivel Nacional (NDC 3.0, 2025), en el Atlas Nacional de Vulnerabilidad al Cambio Climático del INECC y en investigaciones del Programa de Investigación en Cambio Climático de la UNAM."},
  {t:"h", text:"Calor"},
  {t:"stats", items:[
    {n:"1.69 °C", l:"más caliente que a inicios del siglo XX", s:"NDC 3.0 México"},
    {n:"18", l:"estados suspendieron clases por calor (2023)", s:"NDC 3.0 México"}]},
  {t:"p", html:"El aumento de la temperatura está asociado a un mayor riesgo de mortalidad en el país. El calor no es solo incomodidad: afecta la salud, el estudio y el trabajo."},
  {t:"h", text:"Sequía y agua"},
  {t:"guess", q:"En junio de 2024, ¿qué porcentaje de los municipios de México tenía algún grado de sequía?",
   o:["Alrededor de 15%","Alrededor de 45%","Alrededor de 86%"], a:2,
   e:"<strong>86%</strong>. Desde la década de 2000, los días secos consecutivos al año pasaron de unos 70 a cerca de 80, con aumentos más fuertes en Baja California, Sonora, Sinaloa y Chihuahua."},
  {t:"stats", items:[
    {n:"64%", l:"del territorio con estrés hídrico (2025), donde vive cerca del 70% de la población", s:"NDC 3.0 México"},
    {n:"15%", l:"del territorio en estado crítico de disponibilidad de agua", s:"NDC 3.0 México"},
    {n:"−21%", l:"de agua superficial proyectada para 2050 (y −34% para 2100)", s:"NDC 3.0 México"}]},
  {t:"h", text:"Costas, huracanes y desplazamiento"},
  {t:"p", html:"México tiene más de 11,000 km de costa. En el Golfo de México, el nivel del mar sube <strong>44% más rápido</strong> que el promedio mundial, hasta 2.4 mm por año. Y los huracanes que se intensifican muy rápido, en cuestión de horas, como <strong>Otis en 2023</strong>, son más difíciles de anticipar y de evacuar."},
  {t:"stats", items:[
    {n:"984", l:"muertes por desastres hidrometeorológicos en 2023 (98% más que en 2022)", s:"NDC 3.0 México"},
    {n:"3 M+", l:"personas podrían ser desplazadas dentro de México por el clima hacia 2050", s:"NDC 3.0 México"}]},
  {t:"note", kind:"warn", title:"El Bosque, Tabasco", html:"En la comunidad costera de El Bosque, en Tabasco, la erosión y el avance del mar destruyeron de forma irreversible el territorio donde vivían las familias. No es una proyección: ya pasó."},
  {t:"reflect", id:"r8", q:"¿Cuál de estos impactos (calor, sequía, agua, costas, huracanes) afecta más a tu estado o ciudad? ¿Cómo lo notas?"},
  {t:"read", items:[
    {title:"5 revelaciones del informe de la ONU sobre cambio climático y qué dice sobre América Latina", url:"https://www.youtube.com/watch?v=4QEW0DHWIlg", desc:"BBC News Mundo (2021). Lo que dice el IPCC sobre nuestra región.", lang:"ES", type:"video"},
    {title:"PNUD · NDC 3.0 en América Latina y el Caribe", url:"https://climatepromise.undp.org/sites/default/files/research_report_document/UNDP_NDC%203.0%20en%20LAC-%20ambicio%CC%81n%2C%20inclusividad%20y%20ruta%20hacia%20la%20sostenibilidad_FINAL.pdf", desc:"Qué se están comprometiendo a hacer los países de la región, incluido México.", lang:"ES"}]},
  {t:"land", html:""}
  ],
  sources:"Gobierno de México, NDC 3.0 (2025); INECC, Atlas Nacional de Vulnerabilidad al Cambio Climático; PINCC-UNAM."
},

{ id:"l9", unit:"u3", title:"Salud, comida y bolsillo", time:"8 min",
  refs:["unicef_lac","ndc30","xlt_escritorio"],
  blocks:[
  {t:"p", html:"El cambio climático no es «solo ambiental». Se cuela en la salud, en lo que comemos y en la economía de las familias."},
  {t:"h", text:"Salud"},
  {t:"stats", items:[
    {n:"105 M", l:"niñas, niños y adolescentes en América Latina expuestos a alta contaminación del aire", s:"UNICEF"},
    {n:"115 M", l:"expuestos al dengue (y 85 M al zika)", s:"UNICEF"},
    {n:"45 M", l:"expuestos a olas de calor extremas", s:"UNICEF"}]},
  {t:"guess", q:"¿Por qué el cambio climático puede aumentar enfermedades como el dengue?",
   o:["Porque el calor y las lluvias cambian dónde viven los mosquitos","Porque el CO₂ es contagioso","No tiene ninguna relación"], a:0,
   e:"Temperaturas más altas y cambios en las lluvias modifican dónde y cuándo pueden vivir los mosquitos que transmiten estas enfermedades. Por eso millones de niñas, niños y jóvenes de la región están expuestos."},
  {t:"p", html:"También hay impactos en la <strong>salud mental</strong>: vivir desastres o perder la casa o los cultivos puede generar estrés, ansiedad, depresión o trastorno de estrés postraumático, sobre todo en niñas, niños y jóvenes con redes de apoyo débiles. Hablaremos de cómo cuidarnos en la lección 15."},
  {t:"h", text:"Comida y campo"},
  {t:"stats", items:[
    {n:"2.83 M ha", l:"agrícolas perdidas por sequía en México (2018–2023), sobre todo maíz y frijol", s:"NDC 3.0 México"},
    {n:"464 kcal", l:"menos de comida disponible por persona al día hacia fin de siglo, en un escenario de pérdidas agrícolas", s:"NDC 3.0 México"}]},
  {t:"h", text:"Economía"},
  {t:"guess", q:"En 2023, ¿cuánto costaron en México las pérdidas y daños directos por desastres hidrometeorológicos?",
   o:["Unos 900 millones de pesos","Unos 88,910 millones de pesos","Unos 9 millones de pesos"], a:1,
   e:"<strong>88,910 millones de pesos</strong>, el 0.3% del PIB. Y cada sequía histórica representa en promedio una pérdida de 26,752 millones de pesos para el sector primario, con Sinaloa, Jalisco, Michoacán, Estado de México y Guanajuato entre los más afectados."},
  {t:"stats", items:[
    {n:"25%", l:"del PIB de México de 2024: valor estimado de pérdidas acumuladas por el clima en 2024–2030", s:"NDC 3.0 México"}]},
  {t:"reflect", id:"r9", q:"¿Has notado cambios en los precios o la disponibilidad de algún alimento o del agua en tu casa? ¿Cuál?"},
  {t:"read", items:[
    {title:"Posición común de América Latina y el Caribe sobre clima y salud", url:"https://climateandhealthalliance.org/wp-content/uploads/2025/07/ES-Common-Position-of-Latin-America-and-the-Caribbean.pdf", desc:"Lo que piden profesionales de la salud de la región.", lang:"ES"},
    {title:"Climate Science · Consecuencias para las personas", url:"https://climatescience.org/es/advanced-consequences-climate-people", desc:"Curso gratuito en español sobre por qué el clima importa.", lang:"ES"}]},
  {t:"land", html:""}
  ],
  sources:"UNICEF, Cambio climático, degradación ambiental y niñez en movilidad en ALC; Gobierno de México, NDC 3.0 (2025); investigación de escritorio Xlatierra (salud mental)."
},

{ id:"l10", unit:"u3", guide:"ajolote", title:"Biodiversidad y puntos de no retorno", time:"9 min",
  refs:["ipcc_wg1","ipcc_wg2_todos","ipbes2019","xlt_m1"],
  blocks:[
  {t:"p", html:"La vida en el planeta también resiente el calentamiento: especies que se mueven, ecosistemas que se degradan y algunos sistemas que podrían cruzar umbrales de los que no hay regreso."},
  {t:"guess", q:"De las miles de especies estudiadas en el mundo, ¿cuántas ya cambiaron el lugar donde viven por el clima?",
   o:["Casi ninguna","Alrededor de la mitad","Todas"], a:1,
   e:"Alrededor del <strong>50%</strong>. En los océanos, las comunidades marinas se desplazan hacia los polos a una velocidad media de 59 km por década, buscando aguas más frías."},
  {t:"h", text:"Cuatro ejemplos de nuestra región y el mundo"},
  {t:"list", items:[
    "<strong>Corales y manglares (Caribe y México):</strong> el blanqueamiento de corales reduce la pesca y la protección de la costa. En el noroeste de México se perdieron <strong>1,817 hectáreas de manglares</strong> entre 2015 y 2020.",
    "<strong>La Amazonía:</strong> sequías severas (1998, 2005, 2010 y 2015–2016) y más calor causaron mortalidad de árboles. Algunas zonas pasaron de absorber carbono a emitir más del que absorben.",
    "<strong>Los Andes:</strong> las especies suben de altitud buscando frío. Las de las partes altas se quedan sin espacio a dónde ir, mientras plagas y mosquitos suben también.",
    "<strong>Extinción:</strong> la IPBES advierte que alrededor de <strong>1 millón de especies</strong> están en peligro por la actividad humana. El IPCC ya documentó la primera extinción de una especie atribuida al cambio climático: un evento extremo destruyó todo su hábitat en una isla."]},
  {t:"h", text:"¿Qué es un punto de no retorno?"},
  {t:"answers",
   short:"Imagina que empujas un vaso hacia el borde de una mesa. Se desliza poco a poco… hasta que cae. Y aunque dejes de empujar, no vuelve solo a la mesa. Algunos sistemas del planeta funcionan así: pasado cierto umbral, cambian por sí mismos durante siglos.",
   long:"<p>El IPCC identifica varios elementos del sistema terrestre que podrían cambiar de forma abrupta y prácticamente irreversible a escala humana:</p><p><strong>Mantos de hielo de Groenlandia y la Antártida Occidental:</strong> al derretirse, bajan de altura y quedan expuestos a aire más cálido, lo que acelera el deshielo. Incluso estabilizando el calentamiento en 1.5 °C, el nivel del mar seguiría subiendo de 2 a 3 metros en los próximos 2,000 años.</p><p><strong>La Amazonía:</strong> sequías, calor e incendios podrían transformar partes de la selva en ecosistemas más secos, tipo sabana, que emitirían carbono en lugar de absorberlo.</p><p><strong>Las corrientes del Atlántico (AMOC):</strong> el agua dulce del deshielo debilita este gran sistema de corrientes. El IPCC considera poco probable un colapso abrupto antes de 2100, pero si ocurriera cambiaría las lluvias tropicales y los monzones.</p><p>La ciencia <strong>no conoce el umbral exacto</strong> de cada uno. Esa incertidumbre es justamente la razón para no acercarnos al borde.</p>"},
  {t:"guess", q:"¿Por qué la Amazonía es un posible punto de no retorno?",
   o:["Porque podría pasar de absorber carbono a emitirlo","Porque se va a congelar","Porque está muy lejos"], a:0,
   e:"Si pierde demasiados árboles, la selva podría transformarse en sabana y convertirse en una fuente de carbono que amplifica el calentamiento por sí misma."},
  {t:"reflect", id:"r10", q:"¿Qué especie, paisaje o ecosistema de tu región te dolería perder? ¿Por qué?"},
  {t:"read", items:[
    {title:"El ajolote de Xochimilco, a punto de la extinción", url:"https://www.youtube.com/watch?v=JPDKZrPJjGk", desc:"UNAM Global (2019). Por qué el ajolote está en peligro y qué se hace para salvarlo.", lang:"ES", type:"video"},
    {title:"Por los humedales de Xochimilco", url:"https://ciencia.unam.mx/contenido/video/349/por-los-humedales-de-xochimilco", desc:"Ciencia UNAM (2022). Ajolotes, chinampas, aves migratorias y un proyecto de rescate con la comunidad.", lang:"ES", type:"video"},
    {title:"México: el ajolote pelea contra la extinción en Xochimilco", url:"https://es.mongabay.com/2019/02/mexico-ajolote-xochimilco-video/", desc:"Mongabay Latam (2019). Periodismo ambiental sobre la lucha por el ajolote.", lang:"ES", type:"video"},
    {title:"CONABIO · Ecosistemas de México", url:"https://www.youtube.com/watch?v=NAr27_PK0kw", desc:"Biodiversidad Mexicana – CONABIO (2011). Un recorrido por los ecosistemas del país.", lang:"ES", type:"video"},
    {title:"IPCC · Cómo el cambio climático afecta la vida en la Tierra (Resumen para todos)", url:"https://www.iai.int/administrador/assets/images/ckfinder/files/IPCC_AR6_WGII_ResumenParaTodos_Impactos%20(1).pdf", desc:"Impactos en ecosistemas y personas, explicados de forma sencilla.", lang:"ES"}]},
  {t:"land", html:""}
  ],
  sources:"IPCC AR6 GT1 y GT2 (2021–2022); IPBES (2019); estudios sobre manglares del noroeste de México (investigación Xlatierra, Módulo 1)."
},

{ id:"l11", unit:"u3", title:"Justicia climática: ¿quién paga?", time:"9 min",
  refs:["unicef_lac","pnuma2025","cidh2025","escazu","pnud_conexiones","xlt_escritorio"],
  blocks:[
  {t:"guess", q:"¿Qué porcentaje de las emisiones globales produce América Latina y el Caribe?",
   o:["Entre 6.7% y 10%","Alrededor de 25%","Alrededor de 40%"], a:0,
   e:"Menos de una décima parte. Y aun así es una de las regiones más golpeadas por desastres climáticos."},
  {t:"answers",
   short:"La justicia climática dice que el cambio climático es un problema ético y de derechos humanos: quienes menos han contaminado suelen sufrir los peores impactos, porque tienen menos recursos para protegerse.",
   long:"<p>Se apoya en tres pilares:</p><p><strong>1. Justicia distributiva:</strong> repartir de forma justa los costos del daño y los beneficios de las soluciones.<br><strong>2. Justicia procesal:</strong> que las comunidades afectadas, como jóvenes, pueblos indígenas y mujeres, participen en las decisiones.<br><strong>3. Justicia de reconocimiento:</strong> respetar los saberes locales y reconocer las desigualdades históricas que hacen a ciertos grupos más vulnerables.</p>"},
  {t:"h", text:"Las y los jóvenes, en la primera línea"},
  {t:"stats", items:[
    {n:"169 M", l:"niñas, niños y adolescentes en ALC con alto riesgo climático (4 de cada 5)", s:"UNICEF"},
    {n:"2.3 M", l:"desplazados por desastres climáticos en la región (2016–2021)", s:"UNICEF"},
    {n:"5.9–17.9 M", l:"niños y jóvenes podrían caer en pobreza por el clima hacia 2030", s:"UNICEF / CEPAL"},
    {n:"52%", l:"de las personas en pobreza en la región son menores de 25 años (~94 M)", s:"UNICEF / CEPAL"}]},
  {t:"note", kind:"warn", title:"Dos casos de nuestra región", html:"<strong>Dominica (Caribe):</strong> un país que casi no emite vio desplazada al <strong>76% de su niñez</strong> por huracanes entre 2016 y 2021. La justicia climática pide financiamiento internacional que no los endeude para reconstruir escuelas y viviendas resistentes.<br><br><strong>México:</strong> América Latina es la región más peligrosa del mundo para defender el medio ambiente. En 2023 fueron asesinadas <strong>18 personas defensoras ambientales</strong> en México. El <strong>Acuerdo de Escazú</strong> obliga a los países a garantizar el acceso a información ambiental, la participación ciudadana y la protección de quienes defienden su territorio."},
  {t:"h", text:"Vivirlo no es lo mismo que saber qué hacer"},
  {t:"p", html:"En la Reserva Chico Mendes, en la Amazonía brasileña, el 100% de los habitantes vive los impactos del cambio climático, pero el <strong>72.7%</strong> dice no saber cómo adaptarse. Sufrir los efectos no da por sí solo las herramientas para responder. Por eso la educación climática también es una cuestión de justicia."},
  {t:"stats", items:[
    {n:"67.3%", l:"de los hogares de América Latina tenía internet fijo en 2022 (OCDE: 91.1%)", s:"CEPAL / PNUD"},
    {n:"38%", l:"de los hogares rurales conectados, frente a 77% de los urbanos", s:"CEPAL / PNUD"}]},
  {t:"reflect", id:"r11", q:"En tu ciudad o comunidad, ¿quién crees que sufre más el calor, la falta de agua o las inundaciones? ¿Por qué?"},
  {t:"read", items:[
    {title:"CEPAL · Acuerdo de Escazú", url:"https://www.youtube.com/watch?v=djV934JKVNQ", desc:"Carlos Vives en colaboración con la CEPAL (2021). El acuerdo que protege a quienes defienden su territorio.", lang:"ES", type:"video"},
    {title:"UNICEF · Cambio climático, degradación ambiental y niñez en movilidad en ALC", url:"https://www.unicef.org/lac/en/media/48821/file/COTM%20-%20Cambio%20clim%C3%A1tico%20brief%20SP%20v5.1%20WEB.pdf.pdf", desc:"El informe de donde salen muchas cifras sobre niñez y juventud.", lang:"ES"},
    {title:"CIDH · Tercer informe sobre personas defensoras de derechos humanos en las Américas", url:"https://www.oas.org/es/cidh/informes/pdfs/2025/Tercer-informe-personas-defensoras-DDHH.pdf", desc:"Sobre la situación de quienes defienden su territorio.", lang:"ES"},
    {title:"PNUMA · Financiamiento para la transición justa en ALC", url:"https://www.unepfi.org/wordpress/wp-content/uploads/2025/11/Financiamiento-para-la-Transicion-Justa-en-America-Latia-y-el-Caribe.pdf", desc:"Cómo financiar un cambio que no deje a nadie atrás.", lang:"ES"}]},
  {t:"land", html:""}
  ],
  sources:"UNICEF ALC; CEPAL; PNUMA FI (2025); CIDH (2025); Acuerdo de Escazú; estudio en la Reserva Chico Mendes (investigación de escritorio Xlatierra); PNUD, Conexiones perdidas."
},

/* ============================ UNIDAD 4 ============================ */
{ id:"l12", unit:"u4", title:"Ciencia vs. desinformación: tu kit", time:"8 min",
  refs:["wef2024","cook2017","vdlinden2017","xlt_escritorio"],
  blocks:[
  {t:"p", html:"El Foro Económico Mundial ubicó a la <strong>desinformación</strong> como el mayor riesgo global de corto plazo en 2024. En clima, la desinformación no solo confunde: retrasa decisiones. La buena noticia es que se puede aprender a detectarla."},
  {t:"h", text:"Tu kit de 5 herramientas"},
  {t:"list", items:[
    "<strong>1. Busca el consenso:</strong> ¿qué dicen el IPCC u organismos científicos? Una opinión aislada no pesa lo mismo que miles de estudios.",
    "<strong>2. Detecta el falso equilibrio:</strong> desconfía cuando un tema científicamente resuelto se presenta como «polémica».",
    "<strong>3. Revisa credenciales:</strong> ¿quien habla es experto en clima o en otra cosa? Recuerda la Petición de Oregón.",
    "<strong>4. Ojo con los datos escogidos a modo:</strong> un invierno frío o una gráfica de pocos meses no muestran la tendencia. Pregunta siempre: ¿de cuántos años son estos datos?",
    "<strong>5. Triangula:</strong> confirma cifras en fuentes oficiales como IPCC, UNESCO, CEPAL, UNICEF, PNUMA o INECC."]},
  {t:"deck", title:"¿Mito o dato?", q:"Usa tu kit. Lee cada tarjeta y decide si es un <strong>dato</strong> respaldado por la ciencia o un <strong>mito</strong>.",
   labels:["Dato","Mito"], icons:["✅","❌"],
   cards:[
    {t:"La lluvia ácida causa el cambio climático.", a:1, e:"Son problemas distintos: la lluvia ácida es contaminación del aire que cae con la lluvia. En un estudio con universitarios de Veracruz, el 69.5% creía esta confusión."},
    {t:"Los océanos absorben alrededor del 91% del calor extra que hemos atrapado.", a:0, e:"Según el IPCC, el océano guarda la mayor parte; la atmósfera, apenas cerca de 1%."},
    {t:"El agujero en la capa de ozono es lo que calienta al planeta.", a:1, e:"El agujero de ozono deja pasar más radiación ultravioleta. El calentamiento lo causan los gases de efecto invernadero, que atrapan radiación infrarroja."},
    {t:"El clima siempre ha cambiado, así que el calentamiento actual es natural.", a:1, e:"Es cierto que el clima ha cambiado antes, pero el IPCC concluye que el calentamiento de 1.1 °C desde la era preindustrial se debe a la actividad humana."},
    {t:"México se calienta más rápido que el promedio mundial.", a:0, e:"México se calienta a un ritmo de 3.2 °C por siglo, frente a 2 °C del promedio mundial (NDC 3.0)."},
    {t:"Un invierno muy frío demuestra que el calentamiento global se detuvo.", a:1, e:"Un invierno es tiempo, no clima. Usar un dato corto para negar una tendencia de décadas es «escoger datos a modo»."},
    {t:"Alrededor del 97% de especialistas en clima coincide en que el calentamiento actual lo causamos los humanos.", a:0, e:"Es el consenso científico, documentado en varios estudios."},
    {t:"Para ser imparciales, los medios deben dar el mismo espacio a científicos y a negacionistas.", a:1, e:"Eso se llama falso equilibrio: presenta como debate 50/50 algo en lo que casi todos los especialistas coinciden."},
    {t:"Sin efecto invernadero, la Tierra sería un planeta helado de unos −18 °C.", a:0, e:"El efecto invernadero natural es necesario para la vida; el problema es el exceso de gases."},
    {t:"La «Petición de Oregón» demostró que miles de científicos del clima niegan el calentamiento.", a:1, e:"Tenía firmas falsas y menos del 1% de los firmantes tenía formación en ciencias atmosféricas."}
   ]},
  {t:"h", text:"Ponlo a prueba"},
  {t:"p", html:"<em>Los siguientes titulares son ejemplos inventados para practicar.</em>"},
  {t:"guess", q:"«¡Récord de frío en enero! Los científicos se equivocaron con el calentamiento global». ¿Qué herramienta te ayuda más?",
   o:["Revisar credenciales","Ojo con los datos escogidos a modo","Ninguna, es verdad"], a:1,
   e:"Un mes frío es tiempo, no clima. El titular usa un dato de corto plazo para negar una tendencia de décadas."},
  {t:"guess", q:"«Un ingeniero petrolero famoso asegura que el CO₂ no calienta el planeta». ¿Qué herramienta te ayuda más?",
   o:["Revisar credenciales y buscar el consenso","Triangular con un meme","Creerle porque es famoso"], a:0,
   e:"Ser famoso o experto en otra área no lo hace experto en clima. Y su afirmación contradice el consenso del IPCC."},
  {t:"reflect", id:"r12", q:"Busca una noticia o video sobre clima de esta semana y aplícale el kit. ¿Pasa la prueba? ¿Qué herramienta usaste?"},
  {t:"read", items:[
    {title:"LSE Grantham · ¿Qué son la información errónea y la desinformación climática?", url:"https://www.lse.ac.uk/granthaminstitute/explainers/what-are-climate-misinformation-and-disinformation/", desc:"Explicación clara de cómo funciona la desinformación climática.", lang:"EN"},
    {title:"Yale · Cómo «vacunar» al público contra la desinformación climática", url:"https://climatecommunication.yale.edu/publications/inoculate-public-misinformation-climate-change/", desc:"La investigación detrás de este kit.", lang:"EN"}]},
  {t:"land", html:""}
  ],
  sources:"Foro Económico Mundial, Global Risks Report 2024; Cook et al. (2017); van der Linden et al. (2017); estudios con universitarios en Veracruz y Baja California Sur (investigación de escritorio Xlatierra)."
},

{ id:"l13", unit:"u4", title:"El límite de 1.5 °C: ¿cuánto tiempo nos queda?", time:"8 min",
  refs:["ipcc_wg1","ipcc_wg3","ipcc_sr15","omm2024","paris"],
  blocks:[
  {t:"guess", q:"¿Qué significa el famoso límite de «1.5 °C»?",
   o:["La temperatura de un día caluroso","El aumento del promedio global de temperatura respecto a 1850–1900","La temperatura máxima permitida en México"], a:1,
   e:"Es el aumento del <strong>promedio del planeta</strong> respecto a la época preindustrial. Como ya vamos en 1.1 °C, el margen que queda es de unos 0.4 °C."},
  {t:"answers",
   short:"No es la temperatura de un día ni de una ciudad: es el promedio de todo el planeta. Ya vamos en 1.1 °C. Quedarnos cerca de 1.5 °C en lugar de 2 °C hace una diferencia enorme para millones de personas y especies.",
   long:"<p>El clima no cambia de forma lineal: cada medio grado adicional intensifica los impactos. Limitar el calentamiento a 1.5 °C en lugar de 2 °C:</p><p>• Reduce la proporción de personas expuestas a olas de calor extremo de <strong>37% a 14%</strong>.<br>• Reduce a la mitad la pérdida de hábitats de plantas y animales.<br>• Evita el colapso casi total de los arrecifes de coral.</p>"},
  {t:"h", text:"El presupuesto de carbono"},
  {t:"p", html:"Como hay una relación casi directa entre el CO₂ acumulado y la temperatura, la ciencia puede calcular cuánto CO₂ «nos queda» antes de pasar 1.5 °C. A inicios de 2020, ese presupuesto era de unas <strong>400 mil millones de toneladas</strong> de CO₂ para tener un 67% de probabilidad de no superarlo. Al ritmo reciente de emisiones, de unas 40 mil millones de toneladas al año, ese presupuesto se agota en alrededor de una década si no hay recortes fuertes."},
  {t:"guess", q:"Según el IPCC, ¿cuánto deben bajar las emisiones globales para 2030 para mantener 1.5 °C al alcance?",
   o:["Alrededor de 10%","Alrededor de 43%","Alrededor de 90%"], a:1,
   e:"Alrededor de <strong>43%</strong> respecto a los niveles de 2019 (y el CO₂, alrededor de 48%), y llegar a <strong>emisiones netas cero de CO₂</strong> hacia 2050."},
  {t:"stats", items:[
    {n:"2021–2040", l:"periodo en que es muy probable alcanzar o superar 1.5 °C en promedio, sobre todo en los años 2030", s:"IPCC AR6"},
    {n:"−43%", l:"gases de efecto invernadero para 2030 respecto a 2019 (CO₂: −48%)", s:"IPCC AR6 GT3"},
    {n:"2050", l:"emisiones netas cero", s:"IPCC AR6"}]},
  /* APROBADO (fuente externa): dato de la OMM sobre 2024 y Acuerdo de París */
  {t:"note", kind:"info", title:"Dato reciente", html:"La Organización Meteorológica Mundial reportó que <strong>2024</strong> fue el primer año calendario en superar 1.5 °C sobre la época preindustrial. Un solo año no significa haber cruzado el límite de largo plazo, que se mide en promedios de varias décadas, pero muestra qué tan cerca estamos."},
  {t:"note", kind:"info", title:"¿De dónde salió el 1.5 °C?", html:"En el <strong>Acuerdo de París</strong> (2015), casi todos los países del mundo se comprometieron a mantener el calentamiento muy por debajo de 2 °C y a hacer esfuerzos para limitarlo a 1.5 °C. Cada país presenta sus planes en documentos llamados <strong>NDC</strong> (Contribuciones Determinadas a Nivel Nacional), como la NDC 3.0 de México que hemos citado en este curso."},
  {t:"note", kind:"heart", title:"Sin alarmismo", html:"Pasar 1.5 °C no significa que «se acabó el mundo». El cambio climático no es todo o nada: <strong>1.6 °C es peor que 1.5 °C, pero mucho mejor que 1.7 °C o 2 °C</strong>. Cada tonelada de CO₂ que se evita hoy reduce riesgos reales mañana. Por eso nunca es tarde para actuar."},
  {t:"reflect", id:"r13", q:"¿Qué te genera saber que la década de 2030 es clave? ¿Preocupación, motivación, ambas? Escríbelo con honestidad."},
  {t:"read", items:[
    {title:"¿Es demasiado tarde para frenar el cambio climático? Bueno, es complicado", url:"https://www.youtube.com/watch?v=p1EJBEn3HuQ", desc:"En Pocas Palabras – Kurzgesagt (2021). Animación sobre por qué cada décima de grado cuenta.", lang:"ES", type:"video", dur:"10 min"},
    {title:"IPCC · Cómo garantizar un futuro habitable para todos (Resumen para todos)", url:"https://archive.iai.int/administrador/assets/images/ckfinder/files/IPCC_AR6_WGII_ResumenParaTodos_FuturoHabitable.pdf", desc:"Qué podemos hacer todavía, según la ciencia.", lang:"ES"},
    {title:"Climate Science · Política climática", url:"https://climatescience.org/es/advanced-global-climate-politics", desc:"Curso gratuito en español sobre cómo se negocia el clima entre países.", lang:"ES"}]},
  {t:"land", html:""}
  ],
  sources:"IPCC AR6 GT1 y Síntesis (2021–2023); IPCC SR1.5 (2018); OMM; CMNUCC, Acuerdo de París."
},

{ id:"l14", unit:"u4", title:"Soluciones: mitigar y adaptarnos", time:"9 min",
  refs:["ndc30","pnud_ndc_lac","ipcc_wg3","unicef_lac","xlt_m1","xlt_escritorio"],
  blocks:[
  {t:"p", html:"Frente al cambio climático hay dos tipos de respuesta, y necesitamos las dos:"},
  {t:"table", head:["","Mitigación","Adaptación"], rows:[
    ["¿Qué busca?","Reducir las emisiones para que el calentamiento no empeore","Prepararnos para los impactos que ya no podemos evitar"],
    ["Ejemplos","Energía renovable, proteger bosques y manglares, eficiencia, menos desperdicio","Escuelas y viviendas resistentes, sistemas de alerta, manejo del agua, planes de riesgo"]]},
  {t:"match", title:"¿Mitigar o adaptarnos?", q:"Lontra te reta: clasifica cada solución. ¿Reduce emisiones (<strong>mitigación</strong>) o nos prepara para los impactos (<strong>adaptación</strong>)?",
   eco:["🔻 Mitigación","🛡️ Adaptación"],
   done:"Necesitamos las dos: mitigar para que el problema no crezca y adaptarnos a lo que ya está pasando. Algunas soluciones, como los manglares, hacen las dos cosas.",
   items:[
    {n:"Instalar paneles solares en una escuela", icon:"☀️", a:0, e:"Produce electricidad sin quemar combustibles fósiles: reduce emisiones."},
    {n:"Un plan escolar ante inundaciones", icon:"🌊", a:1, e:"Prepara a la comunidad para un impacto: adaptación."},
    {n:"Proteger y restaurar manglares", icon:"🌿", a:0, e:"Guardan mucho carbono (carbono azul), así que es mitigación. ¡Y además protegen la costa de tormentas, que es adaptación! Hace las dos cosas."},
    {n:"Sistemas de alerta ante olas de calor", icon:"📢", a:1, e:"Avisan a tiempo para protegernos de un impacto: adaptación."},
    {n:"Mejorar la eficiencia energética de los edificios", icon:"💡", a:0, e:"Usar menos energía para lo mismo reduce emisiones."},
    {n:"Construir viviendas resistentes a huracanes", icon:"🏠", a:1, e:"Reduce el daño de un impacto: adaptación."},
    {n:"Economía circular: reparar, reusar y reciclar materiales", icon:"♻️", a:0, e:"Fabricar menos materiales nuevos evita emisiones."},
    {n:"Cuidar y manejar mejor el agua ante sequías", icon:"🚰", a:1, e:"Nos prepara para tener agua aunque llueva menos: adaptación."}
   ]},
  {t:"h", text:"Soluciones que ya funcionan en la región"},
  {t:"list", items:[
    "<strong>Manglares (carbono azul):</strong> almacenan de 3 a 5 veces más carbono por área que los bosques tropicales maduros y protegen la costa de tormentas. En México, evitar su deforestación y restaurarlos podría mitigar <strong>2.20 millones de toneladas de CO₂e al año</strong> para 2030. Jamaica, Bahamas y Panamá ya los incluyen en sus NDC. <em>Límite real:</em> no sustituyen la urgencia de descarbonizar la energía y el transporte.",
    "<strong>Energía renovable comunitaria:</strong> plantas solares con baterías en la Amazonía colombiana; una microcentral hidroeléctrica comunitaria en El Palero, República Dominicana, abastece a 300 familias; en México, sistemas de «hielo solar» para cooperativas pesqueras. A nivel global, las renovables podrían cerrar hasta el 55% de la brecha de emisiones. <em>Límite real:</em> sin inversión en redes, almacenamiento y una transición justa para trabajadores, no basta con «apagar fósiles y encender renovables».",
    "<strong>Eficiencia y economía circular:</strong> en México, la eficiencia energética podría mitigar 4.43 millones de toneladas de CO₂e al 2030 y la economía circular otros 3.74 millones. A nivel mundial, la economía circular en materiales pesados como cemento, acero y plástico puede reducir hasta 40% de sus emisiones. <em>Límite real:</em> no sirve si se usa para justificar el hiperconsumo."]},
  {t:"note", kind:"warn", title:"Cuidado con el greenwashing", html:"El <strong>greenwashing</strong> es presentar algo como «verde» o «sustentable» sin que lo sea, o exagerando su impacto. Una pista: si una solución promete resolverlo todo sin ningún costo ni cambio, desconfía. Las soluciones reales siempre tienen límites, y vale la pena conocerlos."},
  {t:"h", text:"Adaptarnos también es actuar"},
  {t:"list", items:[
    "México incluye a niñas, niños, adolescentes y jóvenes como población prioritaria en sus compromisos de adaptación (NDC 3.0).",
    "UNICEF apoyó en México manuales de reducción de riesgo de desastres para estudiantes y personal escolar.",
    "En Veracruz, investigaciones con docentes en zonas inundables muestran que capacitar al profesorado es una de las vías más efectivas para construir resiliencia en la comunidad.",
    "El Estado de México fue de los primeros territorios de América Latina en incorporar formalmente la educación sobre cambio climático en su currículo escolar."]},
  {t:"p", html:"El IPCC recuerda algo importante: la voluntad individual de cambiar se concreta cuando hay <strong>políticas públicas, leyes, infraestructura e instituciones</strong> que facilitan las opciones sostenibles. Por eso la acción climática no es solo personal: también es colectiva y política."},
  {t:"reflect", id:"r14", q:"Elige una solución de esta lección. ¿Cómo podría aplicarse en tu escuela, trabajo o colonia?"},
  {t:"read", items:[
    {title:"CONABIO · Manglares de México", url:"https://www.youtube.com/watch?v=PQNYItdkiV0", desc:"Biodiversidad Mexicana – CONABIO (2011). Qué son los manglares y por qué importan.", lang:"ES", type:"video"},
    {title:"UNICEF · Herramientas para la acción climática", url:"https://www.unicef.org/uruguay/media/11681/file/herramientas-para-la-accion-climatica-imprenta.pdf.pdf", desc:"Guía práctica pensada para niñas, niños y jóvenes.", lang:"ES"},
    {title:"Climate Science · Adaptación", url:"https://climatescience.org/es/advanced-what-is-adaptation", desc:"Curso gratuito en español sobre cómo prepararnos.", lang:"ES"},
    {title:"Climate Science · Innovación industrial", url:"https://climatescience.org/es/advanced-steel-climate", desc:"Cómo hacer edificios, ropa y otros productos de forma sostenible.", lang:"ES"}]},
  {t:"land", html:""}
  ],
  sources:"Gobierno de México, NDC 3.0 (2025); PNUD, NDC 3.0 en ALC; IPCC AR6 GT3 y Síntesis; UNICEF; investigación Xlatierra, Módulo 1 (soluciones) y de escritorio (Veracruz, EDOMEX)."
},

{ id:"l14b", unit:"u4", soon:true, title:"Saberes indígenas y cambio climático", note:"La estamos construyendo con y desde las voces de los pueblos indígenas"},

{ id:"l15", unit:"u4", title:"De la preocupación a la acción", time:"10 min",
  refs:["encuesta_xlt","unesco_gem","frontiers2025","xlt_escritorio"],
  blocks:[
  {t:"p", html:"Llegaste a la última lección. Ya sabes qué es el cambio climático, por qué ocurre, a quién afecta y qué soluciones existen. Ahora viene la pregunta que más nos importa en Xlatierra: <strong>¿y ahora qué hago yo?</strong>"},
  {t:"note", kind:"info", title:"No eres la única persona con esa pregunta", html:"En una encuesta de Xlatierra a 51 personas, la mayoría jóvenes (octubre de 2026), el <strong>59%</strong> dijo que la información sobre clima «le dice el problema pero no qué hacer», y el <strong>55%</strong> respondió que no sabe por dónde empezar. En encuestas de la UNESCO, más del 90% de las y los jóvenes pide una educación climática con más acciones prácticas."},
  {t:"h", text:"Saber no basta (y está bien)"},
  {t:"p", html:"La investigación muestra algo que quizá ya sentiste: <strong>saber más no siempre lleva a actuar</strong>. En una evaluación con universitarios de Baja California Sur, más del 80% coincidía en que la ciudadanía debe tomar medidas, pero solo entre el 7% y el 8% reciclaba de forma concreta. Se le llama la <strong>brecha entre actitud y acción</strong>."},
  {t:"guess", q:"Según la investigación, ¿qué ayuda más a pasar de la preocupación a la acción?",
   o:["Leer más datos alarmantes","Actuar en grupo y con metas concretas","Esperar a que el gobierno lo resuelva"], a:1,
   e:"El trabajo <strong>en grupo y con metas concretas</strong> construye <strong>autoeficacia</strong>: la convicción de «sí podemos hacer algo». Lo que más predice que alguien actúe no es cuánto sabe, sino qué tanto le preocupa el riesgo, sus valores y si siente que su acción cuenta."},
  {t:"stats", items:[
    {n:"Grande", l:"efecto de la educación climática en el conocimiento", s:"Meta-análisis, Frontiers in Education (2025)"},
    {n:"Moderado", l:"efecto en actitudes", s:"Meta-análisis, Frontiers in Education (2025)"},
    {n:"Menor", l:"efecto en la conducta, a menos que se acompañe de acción práctica", s:"Meta-análisis, Frontiers in Education (2025)"}]},
  {t:"note", kind:"heart", title:"Si esto te abruma, es normal", html:"Sentir ansiedad, tristeza, miedo o enojo frente al cambio climático es una respuesta razonable a un problema real. Algunas personas lo llaman <strong>ecoansiedad</strong>. Lo que recomienda la investigación:<br><br>• <strong>Nombra lo que sientes</strong> en lugar de ignorarlo. Hablarlo con alguien de confianza ayuda.<br>• <strong>Actúa con otras personas.</strong> La acción colectiva protege más que leer malas noticias en soledad.<br>• <strong>Cuida tus redes de apoyo:</strong> familia, amistades, grupos. Son un factor de protección.<br>• Si la angustia no te deja dormir, estudiar o vivir tu día, busca apoyo profesional. Pedir ayuda también es cuidarte."},
  {t:"h", text:"Tu acción, en dos niveles"},
  {t:"list", items:[
    "<strong>Personal:</strong> cambiar un hábito de transporte, comida o energía; explicarle a alguien lo que aprendiste; revisar lo que compartes en redes con tu kit contra la desinformación.",
    "<strong>Colectiva:</strong> unirte a un grupo o colectivo, proponer un proyecto en tu escuela o colonia, participar en consultas públicas, llevar el tema a tu salón, tu equipo o tu comunidad. Aquí es donde se mueven más toneladas."]},
  {t:"pick", id:"p15", q:"Elige tu primer paso para los próximos 7 días:", o:[
    "Explicarle a alguien qué es el cambio climático con lo que aprendí aquí",
    "Revisar una noticia o video sobre clima con el kit contra la desinformación",
    "Buscar un grupo, club o colectivo ambiental en mi escuela o ciudad",
    "Proponer un proyecto concreto en mi escuela, trabajo o colonia",
    "Cambiar un hábito de transporte, comida o energía"]},
  {t:"h", text:"Tu plan en cuatro preguntas"},
  {t:"reflect", id:"r15a", q:"¿Qué voy a hacer, exactamente?"},
  {t:"reflect", id:"r15b", q:"¿Con quién lo voy a hacer?"},
  {t:"reflect", id:"r15c", q:"¿Cuándo voy a dar el primer paso?"},
  {t:"reflect", id:"r15d", q:"¿Cómo sabré que funcionó?"},
  {t:"commit", title:"Tu tarjeta de compromiso", q:"Convierte tu plan en una imagen para descargar y compartir en tus redes. Lontra la firma contigo.",
   pick:"p15", what:"r15a", who:"r15b", when:"r15c", img:"img/pose-nutria-feliz.png", footer:"@x.latierra",
   options:["Explicarle a alguien qué es el cambio climático con lo que aprendí aquí","Revisar una noticia o video sobre clima con el kit contra la desinformación","Buscar un grupo, club o colectivo ambiental en mi escuela o ciudad","Proponer un proyecto concreto en mi escuela, trabajo o colonia","Cambiar un hábito de transporte, comida o energía"]},
  {t:"read", items:[
    {title:"#Futuristas · Cambio climático", url:"https://www.bancomundial.org/es/news/video/2021/09/15/futuristas-cambio-clim-tico", desc:"Banco Mundial con Vice (2021). Jóvenes de América Latina que ya están cambiando el futuro.", lang:"ES", type:"video", dur:"2 min"},
    {title:"PNUD · Juventudes por la Acción Climática (curso gratuito)", url:"https://www.learningfornature.org/es/courses/juventudes-por-la-accion-climatica-programa-de-formacion-para-jovenes-de-latinoamerica/", desc:"Formación en participación y negociación climática para jóvenes de América Latina.", lang:"ES"},
    {title:"Climate Science · Acción personal", url:"https://climatescience.org/es/advanced-sustainable-diet", desc:"Cosas concretas que puedes hacer en tu vida diaria.", lang:"ES"},
    {title:"UNICEF · Herramientas para la acción climática", url:"https://www.unicef.org/uruguay/media/11681/file/herramientas-para-la-accion-climatica-imprenta.pdf.pdf", desc:"Ideas y pasos para organizar acciones con otras personas.", lang:"ES"}]},
  {t:"land", html:""}
  ],
  sources:"Encuesta Xlatierra (n=51, octubre 2026); UNESCO, Informe GEM; Frontiers in Education (2025), meta-análisis; estudios con universitarios en Baja California Sur; literatura sobre autoeficacia y ecoansiedad (investigación de escritorio Xlatierra)."
}
],

/* ======================= CUESTIONARIO FINAL ======================= */
/* ===================== REFERENCIAS ===================== */
refsNote: "<strong>Cómo usamos las fuentes.</strong> Las cifras de este módulo vienen de la investigación de Xlatierra (Módulo 1) y de fuentes externas aprobadas. Cada lección muestra al final sus fuentes. Si encuentras un error, escríbenos.",
refs: {
  ipcc_wg1: {short:"IPCC AR6 GT1, 2021", text:"IPCC (2021). <em>Cambio climático 2021: Bases físicas. Resumen para responsables de políticas</em>. Contribución del Grupo de Trabajo I al Sexto Informe de Evaluación.", url:"https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WG1_SPM_Spanish.pdf"},
  ipcc_wg2_todos: {short:"IPCC AR6 GT2, 2022", text:"IPCC (2022). <em>Cambio climático 2022: Impactos, adaptación y vulnerabilidad. Resumen para todos</em>.", url:"https://www.iai.int/administrador/assets/images/ckfinder/files/IPCC_AR6_WGII_ResumenParaTodos_Impactos%20(1).pdf"},
  ipcc_wg3: {short:"IPCC AR6 GT3, 2022", text:"IPCC (2022). <em>Cambio climático 2022: Mitigación del cambio climático. Resumen para responsables de políticas</em> (sección C.1.1: −43% de GEI y −48% de CO₂ al 2030 respecto a 2019).", url:"https://www.ipcc.ch/report/ar6/wg3/"},
  ipcc_sr15: {short:"IPCC SR1.5, 2018", text:"IPCC (2018). <em>Calentamiento global de 1.5 °C</em>. Informe especial.", url:"https://www.ipcc.ch/sr15/"},
  ndc30: {short:"NDC 3.0 México, 2025", text:"Gobierno de México (2025). <em>Contribución Determinada a Nivel Nacional (NDC 3.0)</em>. Presentada a la CMNUCC.", url:"https://unfccc.int/sites/default/files/2025-11/NDC%203.0%20Me%CC%81xico_spanish.pdf"},
  pnud_ndc_lac: {short:"PNUD, NDC 3.0 en ALC", text:"PNUD. <em>NDC 3.0 en América Latina y el Caribe: ambición, inclusividad y ruta hacia la sostenibilidad</em>.", url:"https://climatepromise.undp.org/sites/default/files/research_report_document/UNDP_NDC%203.0%20en%20LAC-%20ambicio%CC%81n%2C%20inclusividad%20y%20ruta%20hacia%20la%20sostenibilidad_FINAL.pdf"},
  pincc: {short:"PINCC-UNAM", text:"Programa de Investigación en Cambio Climático, UNAM.", url:"https://www.pincc.unam.mx"},
  inecc_atlas: {short:"INECC", text:"INECC. <em>Atlas Nacional de Vulnerabilidad al Cambio Climático</em>.", url:""},
  w3techs: {short:"W3Techs", text:"W3Techs. <em>Usage statistics of content languages for websites</em>.", url:"https://w3techs.com/technologies/overview/content_language"},
  unesco_gem: {short:"UNESCO, Informe GEM", text:"UNESCO. <em>Informe de Seguimiento de la Educación en el Mundo (GEM)</em>.", url:"https://www.unesco.org/gem-report/es"},
  cook2017: {short:"Cook et al., 2017", text:"Cook, J., Lewandowsky, S. y Ecker, U. (2017). Neutralizing misinformation through inoculation. <em>PLOS ONE</em>, 12(5).", url:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0175799"},
  vdlinden2017: {short:"van der Linden et al., 2017", text:"van der Linden, S. et al. (2017). Inoculating the public against misinformation about climate change. <em>Global Challenges</em>. Resumen de Yale Program on Climate Change Communication.", url:"https://climatecommunication.yale.edu/publications/inoculate-public-misinformation-climate-change/"},
  climatewatch: {short:"Climate Watch / WRI", text:"Climate Watch / World Resources Institute. Emisiones globales de gases de efecto invernadero por sector, 2019.", url:"https://www.climatewatchdata.org/"},
  owid_food: {short:"Our World in Data (alimentos)", text:"Ritchie, H. y Roser, M. <em>Environmental impacts of food production</em>. Our World in Data, con datos de Poore y Nemecek (2018).", url:"https://ourworldindata.org/environmental-impacts-of-food"},
  owid_co2: {short:"Our World in Data (CO₂)", text:"Our World in Data / Global Carbon Project. <em>CO₂ emissions</em>.", url:"https://ourworldindata.org/co2-emissions"},
  pnuma2025: {short:"PNUMA FI, 2025", text:"PNUMA FI (2025). <em>Financiamiento para la transición justa en América Latina y el Caribe</em>.", url:"https://www.unepfi.org/wordpress/wp-content/uploads/2025/11/Financiamiento-para-la-Transicion-Justa-en-America-Latia-y-el-Caribe.pdf"},
  unicef_lac: {short:"UNICEF ALC", text:"UNICEF. <em>Cambio climático, degradación ambiental y niñez en movilidad en América Latina y el Caribe</em>.", url:"https://www.unicef.org/lac/en/media/48821/file/COTM%20-%20Cambio%20clim%C3%A1tico%20brief%20SP%20v5.1%20WEB.pdf.pdf"},
  cidh2025: {short:"CIDH, 2025", text:"CIDH (2025). <em>Tercer informe sobre la situación de las personas defensoras de derechos humanos en las Américas</em>.", url:"https://www.oas.org/es/cidh/informes/pdfs/2025/Tercer-informe-personas-defensoras-DDHH.pdf"},
  escazu: {short:"Acuerdo de Escazú", text:"CEPAL. <em>Acuerdo Regional sobre el Acceso a la Información, la Participación Pública y el Acceso a la Justicia en Asuntos Ambientales en América Latina y el Caribe</em> (Acuerdo de Escazú).", url:"https://www.cepal.org/es/acuerdodeescazu"},
  pnud_conexiones: {short:"PNUD / CEPAL", text:"PNUD. <em>Conexiones perdidas</em> (datos de conectividad de hogares en América Latina, con cifras de CEPAL).", url:""},
  ipbes2019: {short:"IPBES, 2019", text:"IPBES (2019). <em>Informe de la Evaluación Mundial sobre la Diversidad Biológica y los Servicios de los Ecosistemas</em>.", url:"https://www.ipbes.net/global-assessment"},
  wef2024: {short:"WEF, 2024", text:"Foro Económico Mundial (2024). <em>Global Risks Report 2024</em>.", url:"https://www.weforum.org/publications/global-risks-report-2024/"},
  omm2024: {short:"OMM", text:"Organización Meteorológica Mundial (2025). Confirmación de 2024 como el primer año calendario más de 1.5 °C sobre la era preindustrial.", url:"https://wmo.int"},
  paris: {short:"Acuerdo de París, 2015", text:"CMNUCC (2015). <em>Acuerdo de París</em>.", url:"https://unfccc.int/es/process-and-meetings/the-paris-agreement"},
  frontiers2025: {short:"Frontiers in Education, 2025", text:"Meta-análisis sobre los efectos de la educación climática en conocimiento, actitudes y conducta. <em>Frontiers in Education</em> (2025).", url:""},
  encuesta_xlt: {short:"Encuesta Xlatierra, 2026", text:"Xlatierra (2026). Encuesta a 51 personas, la mayoría jóvenes, octubre de 2026.", url:""},
  xlt_m1: {short:"Investigación Xlatierra, Módulo 1", text:"Investigación documental de Xlatierra para el Módulo 1 (NotebookLM), con las fuentes citadas en cada dato.", url:""},
  xlt_escritorio: {short:"Investigación de escritorio Xlatierra", text:"Investigación de escritorio de Xlatierra: estudios con universitarios de Veracruz y Baja California Sur, Reserva Chico Mendes, salud mental y ecoansiedad, brecha lingüística en ciencia.", url:""}
},

quiz: [
 {q:"¿Cuál es la diferencia entre tiempo y clima?", o:["Son lo mismo","El tiempo es lo de hoy; el clima es el promedio de al menos 30 años","El clima es lo de hoy; el tiempo es el promedio"], a:1},
 {q:"¿Cuánto se ha calentado el planeta respecto a 1850–1900?", o:["Alrededor de 0.3 °C","Alrededor de 1.1 °C","Alrededor de 3 °C"], a:1},
 {q:"Sin efecto invernadero, la Tierra sería…", o:["Más o menos igual","Un planeta helado, cerca de −18 °C","Más caliente"], a:1},
 {q:"¿Qué absorbe la mayor parte del calor extra atrapado?", o:["La atmósfera","Los océanos","El hielo"], a:1},
 {q:"¿Por qué el CO₂ es el gas más importante?", o:["Porque es venenoso","Porque emitimos muchísimo y permanece siglos acumulándose","Porque solo lo emiten los volcanes"], a:1},
 {q:"Si se simula el clima solo con causas naturales, la temperatura de los últimos 170 años…", o:["Sube igual que en la realidad","Se mantiene casi plana","Baja muchísimo"], a:1},
 {q:"A nivel mundial, ¿qué sector emite más gases de efecto invernadero?", o:["Energía","Residuos","Agricultura"], a:0},
 {q:"¿Qué porcentaje de las emisiones globales produce América Latina y el Caribe?", o:["Entre 6.7% y 10%","Alrededor de 30%","Más de la mitad"], a:0},
 {q:"¿México se calienta más rápido o más lento que el promedio mundial?", o:["Más lento","Más rápido","Igual"], a:1},
 {q:"¿Qué es un punto de no retorno?", o:["Una fecha en la que se acaba el mundo","Un umbral que, al cruzarse, hace que un sistema cambie por sí mismo durante siglos","Un tipo de gas"], a:1},
 {q:"¿Qué plantea la justicia climática?", o:["Que todos contaminamos igual","Que quienes menos emiten suelen sufrir más y deben participar en las decisiones","Que es solo un tema de animales"], a:1},
 {q:"Verdadero o falso: la lluvia ácida causa el cambio climático.", o:["Verdadero","Falso"], a:1},
 {q:"Presentar un tema científico resuelto como un debate 50/50 se llama…", o:["Falso equilibrio","Consenso","Triangulación"], a:0},
 {q:"Para mantener 1.5 °C al alcance, ¿cuánto deben bajar las emisiones globales para 2030?", o:["Alrededor de 10%","Alrededor de 43%","Alrededor de 90%"], a:1},
 {q:"Preparar a una escuela con un plan ante inundaciones es un ejemplo de…", o:["Mitigación","Adaptación","Greenwashing"], a:1}
],

/* ===================== AUTOEVALUACIÓN (antes/después) ===================== */
self: [
 "Me siento capaz de explicarle a alguien qué es el cambio climático.",
 "Entiendo cómo el cambio climático afecta a las y los jóvenes de mi región.",
 "Me siento capaz de identificar información climática confiable.",
 "Me siento capaz de tomar acción frente al cambio climático."
],

/* ======================= RECURSOS COMPLEMENTARIOS ======================= */
resources: [
 {cat:"Videos en español", items:[
   {title:"5 revelaciones del informe de la ONU sobre cambio climático y qué dice sobre América Latina", url:"https://www.youtube.com/watch?v=4QEW0DHWIlg", desc:"BBC News Mundo (2021). Lo que dice el IPCC sobre nuestra región.", lang:"ES", type:"video"},
   {title:"El cambio climático explicado", url:"https://www.youtube.com/watch?v=miEJI0XQiN4", desc:"El Robot de Platón (2016). Una explicación amena; algunos datos ya son de hace años.", lang:"ES", type:"video", dur:"10 min"},
   {title:"Cambio climático y efecto invernadero", url:"https://www.youtube.com/watch?v=F-ztU2l46z4", desc:"ONU-REDD Ecuador (2014). Explicación institucional del efecto invernadero.", lang:"ES", type:"video"},
   {title:"¿Es demasiado tarde para frenar el cambio climático? Bueno, es complicado", url:"https://www.youtube.com/watch?v=p1EJBEn3HuQ", desc:"En Pocas Palabras – Kurzgesagt (2021). Animación sobre por qué cada décima de grado cuenta.", lang:"ES", type:"video", dur:"10 min"},
   {title:"El ajolote de Xochimilco, a punto de la extinción", url:"https://www.youtube.com/watch?v=JPDKZrPJjGk", desc:"UNAM Global (2019). Por qué el ajolote está en peligro y qué se hace para salvarlo.", lang:"ES", type:"video"},
   {title:"Por los humedales de Xochimilco", url:"https://ciencia.unam.mx/contenido/video/349/por-los-humedales-de-xochimilco", desc:"Ciencia UNAM (2022). Ajolotes, chinampas, aves migratorias y un proyecto de rescate con la comunidad.", lang:"ES", type:"video"},
   {title:"México: el ajolote pelea contra la extinción en Xochimilco", url:"https://es.mongabay.com/2019/02/mexico-ajolote-xochimilco-video/", desc:"Mongabay Latam (2019). Periodismo ambiental sobre la lucha por el ajolote.", lang:"ES", type:"video"},
   {title:"CONABIO · Ecosistemas de México", url:"https://www.youtube.com/watch?v=NAr27_PK0kw", desc:"Biodiversidad Mexicana – CONABIO (2011). Un recorrido por los ecosistemas del país.", lang:"ES", type:"video"},
   {title:"CONABIO · Manglares de México", url:"https://www.youtube.com/watch?v=PQNYItdkiV0", desc:"Biodiversidad Mexicana – CONABIO (2011). Qué son los manglares y por qué importan.", lang:"ES", type:"video"},
   {title:"CEPAL · Acuerdo de Escazú", url:"https://www.youtube.com/watch?v=djV934JKVNQ", desc:"Carlos Vives en colaboración con la CEPAL (2021). El acuerdo que protege a quienes defienden su territorio.", lang:"ES", type:"video"},
   {title:"#Futuristas · Cambio climático", url:"https://www.bancomundial.org/es/news/video/2021/09/15/futuristas-cambio-clim-tico", desc:"Banco Mundial con Vice (2021). Jóvenes de América Latina que ya están cambiando el futuro.", lang:"ES", type:"video", dur:"2 min"}]},
 {cat:"Informes científicos en español", items:[
   {title:"IPCC · Cambio climático 2021: Resumen para todos", url:"https://www.ipcc.ch/report/ar6/wg1/downloads/outreach/IPCC_AR6_WGI_SummaryForAll_Spanish.pdf", desc:"La ciencia física del clima, en lenguaje accesible.", lang:"ES"},
   {title:"IPCC · Resumen para responsables de políticas (GT1)", url:"https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WG1_SPM_Spanish.pdf", desc:"La versión técnica oficial.", lang:"ES"},
   {title:"IPCC · Cómo el cambio climático afecta la vida en la Tierra", url:"https://www.iai.int/administrador/assets/images/ckfinder/files/IPCC_AR6_WGII_ResumenParaTodos_Impactos%20(1).pdf", desc:"Impactos en ecosistemas y personas.", lang:"ES"},
   {title:"IPCC · Cómo garantizar un futuro habitable para todos", url:"https://archive.iai.int/administrador/assets/images/ckfinder/files/IPCC_AR6_WGII_ResumenParaTodos_FuturoHabitable.pdf", desc:"Qué podemos hacer todavía.", lang:"ES"},
   {title:"IPCC en español", url:"https://www.ipcc.ch/languages-2/spanish/", desc:"Todos los materiales disponibles en español.", lang:"ES"}]},
 {cat:"Niñez, juventud y justicia en América Latina", items:[
   {title:"UNICEF · Cambio climático y niñez en movilidad en ALC", url:"https://www.unicef.org/lac/en/media/48821/file/COTM%20-%20Cambio%20clim%C3%A1tico%20brief%20SP%20v5.1%20WEB.pdf.pdf", desc:"Cifras sobre cómo afecta el clima a niñas, niños y jóvenes.", lang:"ES"},
   {title:"UNICEF · Herramientas para la acción climática", url:"https://www.unicef.org/uruguay/media/11681/file/herramientas-para-la-accion-climatica-imprenta.pdf.pdf", desc:"Guía práctica para organizar acciones.", lang:"ES"},
   {title:"CIDH · Personas defensoras de derechos humanos en las Américas", url:"https://www.oas.org/es/cidh/informes/pdfs/2025/Tercer-informe-personas-defensoras-DDHH.pdf", desc:"La situación de quienes defienden su territorio.", lang:"ES"},
   {title:"PNUMA · Financiamiento para la transición justa en ALC", url:"https://www.unepfi.org/wordpress/wp-content/uploads/2025/11/Financiamiento-para-la-Transicion-Justa-en-America-Latia-y-el-Caribe.pdf", desc:"Cómo financiar un cambio que no deje a nadie atrás.", lang:"ES"},
   {title:"PNUD · NDC 3.0 en América Latina y el Caribe", url:"https://climatepromise.undp.org/sites/default/files/research_report_document/UNDP_NDC%203.0%20en%20LAC-%20ambicio%CC%81n%2C%20inclusividad%20y%20ruta%20hacia%20la%20sostenibilidad_FINAL.pdf", desc:"Los compromisos climáticos de la región.", lang:"ES"},
   {title:"Posición común de ALC sobre clima y salud", url:"https://climateandhealthalliance.org/wp-content/uploads/2025/07/ES-Common-Position-of-Latin-America-and-the-Caribbean.pdf", desc:"La mirada de la salud pública regional.", lang:"ES"}]},
 {cat:"Desinformación y comunicación", items:[
   {title:"Yale · Cómo «vacunar» al público contra la desinformación", url:"https://climatecommunication.yale.edu/publications/inoculate-public-misinformation-climate-change/", desc:"La ciencia de la inoculación.", lang:"EN"},
   {title:"Cook et al. · Neutralizar la desinformación mediante la inoculación", url:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0175799", desc:"Estudio académico de acceso abierto.", lang:"EN"},
   {title:"LSE Grantham · Desinformación climática explicada", url:"https://www.lse.ac.uk/granthaminstitute/explainers/what-are-climate-misinformation-and-disinformation/", desc:"Qué es y cómo funciona.", lang:"EN"},
   {title:"Yale · Perspectivas de latinos en EE. UU. sobre el cambio climático", url:"https://climatecommunication.yale.edu/publications/perspectivas-de-latinos-en-ee-uu-sobre-el-cambio-climatico/", desc:"Qué piensan y sienten las comunidades latinas.", lang:"ES"}]},
 {cat:"Cursos gratuitos para seguir aprendiendo", items:[
   {title:"Climate Science · Causas del cambio climático", url:"https://climatescience.org/es/advanced-greenhouse-effect", desc:"Serie interactiva con certificado.", lang:"ES"},
   {title:"Climate Science · Por qué el clima importa", url:"https://climatescience.org/es/advanced-consequences-climate-people", desc:"Consecuencias para las personas.", lang:"ES"},
   {title:"Climate Science · Alimentación y agricultura", url:"https://climatescience.org/es/advanced-food-climate", desc:"Comida y clima.", lang:"ES"},
   {title:"Climate Science · Adaptación", url:"https://climatescience.org/es/advanced-what-is-adaptation", desc:"Cómo prepararnos.", lang:"ES"},
   {title:"Climate Science · Política climática", url:"https://climatescience.org/es/advanced-global-climate-politics", desc:"Lo que los gobiernos deberían hacer.", lang:"ES"},
   {title:"Climate Science · Economía climática", url:"https://climatescience.org/es/advanced-climate-economics", desc:"Resolver el cambio climático con economía.", lang:"ES"},
   {title:"PNUD · Juventudes por la Acción Climática", url:"https://www.learningfornature.org/es/courses/juventudes-por-la-accion-climatica-programa-de-formacion-para-jovenes-de-latinoamerica/", desc:"Participación y negociación para jóvenes de ALC.", lang:"ES"}]},
 {cat:"Datos para explorar", items:[
   {title:"Our World in Data · Emisiones de CO₂", url:"https://ourworldindata.org/co2-emissions", desc:"Gráficas interactivas por país.", lang:"EN"},
   {title:"Climate Watch", url:"https://www.climatewatchdata.org/", desc:"Emisiones por país y sector.", lang:"EN"},
   {title:"NASA · Signos vitales: dióxido de carbono", url:"https://climate.nasa.gov/vital-signs/carbon-dioxide/", desc:"La concentración de CO₂, actualizada.", lang:"EN"}]},
 {cat:"Para docentes y facilitadores", items:[
   {title:"UNESCO · Educación y cambio climático", url:"https://www.unesco.org/en/climate-change/education", desc:"Marcos y guías internacionales.", lang:"EN"},
   {title:"UNESCO · Greening Curriculum Guidance", url:"https://www.unesco.org/en/articles/greening-curriculum-guidance-teaching-and-learning-climate-action", desc:"El marco «cabeza, corazón y manos».", lang:"EN"},
   {title:"Caja del Clima (PNUD)", url:"https://climate-box.com/es/", desc:"Materiales interactivos para el aula.", lang:"ES"},
   {title:"Educaclima (Iberdrola)", url:"https://www.iberdrola.com/sostenibilidad/contra-cambio-climatico/concienciacion-medioambiental/educaclima", desc:"Recursos descargables para docentes.", lang:"ES"}]}
]
};
