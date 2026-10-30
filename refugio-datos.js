/* =====================================================================
   XLATIERRA · CONTENIDO DEL REFUGIO DE LÍDERES
   ---------------------------------------------------------------------
   Aquí agregas noticias, música, obras, victorias y mensajes de ánimo.
   Reglas:
   - Cada noticia lleva su fuente (fuente + url). Sin fuente, no se publica.
   - Las obras, textos y victorias que manda la comunidad llegan a tu
     Google Sheets. Solo copia aquí las que revisaste y tienen permiso.
   - Si te equivocas con una coma, la sección no carga: revisa comas y comillas.
   ===================================================================== */
window.XLT_REFUGIO = {

  /* ---------- MÚSICA (Spotify) ----------
     Pega el enlace normal de Spotify (Compartir > Copiar enlace).
     Ej.: "https://open.spotify.com/playlist/XXXXXXXX"
     Quien tenga sesión iniciada en Spotify escucha las canciones completas;
     sin sesión, Spotify solo deja escuchar un fragmento. */
  playlist: "",
  cancionMes: {
    spotify: "https://open.spotify.com/track/3T07pNAEVr9adeIG9i1ex4",   // «Color esperanza», Diego Torres
    porQue: "Para estrenar el Refugio con un clásico que nos recuerda que la esperanza también se elige, todos los días, y que se contagia."
  },

  /* ---------- LA BUENA DE LA SEMANA ----------
     Cámbiala cada semana. "fecha" es la fecha de la fuente. */
  semana: {
    titulo: "La capa de ozono se está recuperando",
    texto: "Casi el 99% de las sustancias prohibidas que dañaban la capa de ozono ya se eliminaron gracias al Protocolo de Montreal. Si se mantienen las políticas actuales, el ozono volvería a sus valores de 1980 alrededor de 2040 en casi todo el mundo, 2045 en el Ártico y 2066 en la Antártida. Prueba de que, cuando el mundo se pone de acuerdo, funciona.",
    lugar: "Mundo",
    fecha: "Enero de 2023",
    fuente: "Organización Meteorológica Mundial (OMM)",
    url: "https://wmo.int/node/20737"
  },

  /* ---------- MURO DE BUENAS NOTICIAS ---------- */
  noticias: [
    {icono:"⚖️", titulo:"La Amazonía colombiana, sujeto de derechos",
     texto:"Tras la demanda de 25 niñas, niños, adolescentes y jóvenes, la Corte Suprema de Colombia reconoció a la Amazonía como sujeto de derechos y ordenó un plan contra la deforestación.",
     lugar:"Colombia", fecha:"Abril de 2018", fuente:"ANLA, sentencia STC4360-2018",
     url:"https://www.anla.gov.co/wanla/eureka/jurisprudencia/sentencias/sentencia-stc4360-2018-de-la-corte-suprema-de-justicia-la-amazonia-colombiana-como-entidad-sujeto-de-derechos"},
    {icono:"🗳️", titulo:"Ecuador votó por dejar el petróleo bajo tierra en el Yasuní",
     texto:"En una consulta popular, el 58.95% votó por mantener indefinidamente el crudo bajo tierra en el Yasuní-ITT, una de las zonas con más vida del planeta.",
     lugar:"Ecuador", fecha:"Agosto de 2023", fuente:"Primicias",
     url:"https://primicias.ec/noticias/elecciones-presidenciales-2023/cne-resultados-definitivos-elecciones-yasuni"},
    {icono:"🌎", titulo:"El Acuerdo de Escazú está vigente",
     texto:"El primer tratado ambiental de América Latina y el Caribe entró en vigor el 22 de abril de 2021, Día de la Tierra. Garantiza tu derecho a la información, a participar y a la justicia ambiental.",
     lugar:"América Latina y el Caribe", fecha:"Abril de 2021", fuente:"Delfino.cr",
     url:"https://delfino.cr/2021/01/acuerdo-de-escazu-argentina-y-mexico-depositan-su-respectivo-instrumento-de-ratificacion"}
  ],

  /* ---------- VOLVIERON: especies que regresan ---------- */
  volvieron: [
    {icono:"🐺", especie:"Lobo mexicano", lugar:"Chihuahua, México",
     texto:"Estuvo a punto de desaparecer: su recuperación empezó con solo siete ejemplares. Desde 2011 se han hecho 13 liberaciones en México y ya nacieron al menos 9 camadas en libertad.",
     fecha:"Abril de 2020", fuente:"PNUD México", url:"https://www.undp.org/es/node/291371"},
    {icono:"🦜", especie:"Guacamaya roja", lugar:"Los Tuxtlas, Veracruz, México",
     texto:"Las primeras guacamayas llegaron a Catemaco en 2014 para volver a poblar la región. En 2018 nació el primer polluelo en vida silvestre, al que llamaron Huentli.",
     fecha:"Mayo de 2019", fuente:"Mongabay Latam", url:"https://es.mongabay.com/2019/05/mexico-guacamaya-roja-regresa-de-la-extincion/"}
  ],

  /* ---------- CONVERSATORIO EN LÍNEA ----------
     Cuando tengas fecha, llena estos campos. Si "fecha" está vacía,
     aparece como «próximamente». */
  conversatorio: {
    fecha: "",              // Ej.: "Jueves 26 de noviembre, 6:00 p. m. (hora de CDMX)"
    tema: "",
    plataforma: "",         // Ej.: "Zoom" o "Google Meet"
    registro: ""            // enlace para registrarse
  },

  /* ---------- CONCURSO DE DIBUJO ---------- */
  concurso: {
    tema: "",               // Ej.: "El lugar de tu ciudad que quieres proteger"
    cierre: "",             // Ej.: "30 de noviembre"
    premio: ""              // opcional
  },

  /* ---------- GALERÍA DE ARTE (aprobadas) ----------
     {titulo, autor, pais, img:"img/galeria/archivo.jpg", nota} */
  galeria: [],

  /* ---------- POEMAS Y TEXTOS (aprobados) ----------
     {titulo, autor, pais, texto} */
  textos: [],

  /* ---------- MURO DE VICTORIAS (aprobadas) ----------
     {autor, pais, texto} */
  victorias: [],

  /* ---------- BOTÓN «NECESITO ÁNIMO» ----------
     g = personaje: espiritu, ajolote, jaguar, nutria */
  animo: [
    {g:"nutria", t:"No tienes que salvar el mundo hoy. Solo dar el siguiente paso. Y ya lo estás dando."},
    {g:"nutria", t:"Descansar también es parte de la lucha. Un río que corre todo el tiempo también necesita remansos."},
    {g:"nutria", t:"Hoy hiciste algo, aunque sea pequeño. Celébralo. Los pequeños logros también construyen futuros."},
    {g:"nutria", t:"El miedo y la valentía pueden viajar juntos. No esperes a dejar de sentir miedo para actuar."},
    {g:"nutria", t:"El mundo no se arregla con personas perfectas, sino con personas que no se rinden."},
    {g:"nutria", t:"Si hoy no pudiste, mañana es otro río. Aquí te esperamos."},
    {g:"nutria", t:"Rodéate de gente que te recuerde por qué empezaste. Y sé esa persona para alguien más."},
    {g:"nutria", t:"Lo que hagas hoy puede cambiar lo que viene mañana. Y mañana se construye entre muchas manos."},
    {g:"nutria", t:"Menos quedarnos con la duda y más ponernos en acción. ¿Cuál es tu primer paso de hoy?"},
    {g:"nutria", t:"Una idea pequeña que sí haces vale más que un plan enorme que se queda en el cajón."},
    {g:"nutria", t:"¿Te equivocaste? Perfecto: ya sabes algo que antes no sabías. Ajusta y sigue nadando."},
    {g:"nutria", t:"Hay nutrias que duermen tomadas de la mano para que la corriente no las separe. Busca a tu gente y no se suelten."},
    {g:"nutria", t:"Hoy no tienes que hacerlo todo. Solo hazlo con ganas."},
    {g:"nutria", t:"Las grandes cosas empiezan con alguien que dice: «¿y si lo intentamos?». Hoy puedes ser tú."},
    {g:"nutria", t:"Jugar, reír y disfrutar también son formas de resistir. No pierdas la alegría en el camino."},
    {g:"nutria", t:"Tu energía es valiosa: ponla donde sí puedes cambiar algo."},
    {g:"nutria", t:"Cada vez que alguien se suma, el río crece. Gracias por sumarte."},
    {g:"nutria", t:"No esperes el momento perfecto. Ese momento lo construyes tú, empezando."},
    {g:"nutria", t:"Si sientes que vas lento, recuerda: lento también es avanzar."},
    {g:"nutria", t:"Haz una lista de lo que ya lograste este mes. Te vas a sorprender."},
    {g:"nutria", t:"Pide ayuda sin pena. Hasta la nutria más hábil nada mejor en grupo."},
    {g:"nutria", t:"Celebra a las personas que te acompañan. Los logros siempre son compartidos."},
    {g:"nutria", t:"Hoy es un buen día para invitar a alguien más a cuidar lo que amas."},
    {g:"ajolote", t:"Yo me regenero, ¿sabías? Tú también puedes empezar de nuevo las veces que haga falta."},
    {g:"ajolote", t:"Lo que sientes tiene sentido: te importa el mundo. Eso no es debilidad, es tu brújula."},
    {g:"ajolote", t:"No necesitas tener todas las respuestas. Hacerte las preguntas correctas ya es empezar."},
    {g:"ajolote", t:"Tu comunidad te necesita entera, no agotada. Cuídate como cuidarías a quien más quieres."},
    {g:"ajolote", t:"Ser joven no te hace menos capaz. Te da una mirada que el mundo necesita con urgencia."},
    {g:"ajolote", t:"Tus raíces son fuertes: vienes de pueblos que han cuidado esta tierra por siglos."},
    {g:"ajolote", t:"Está bien no estar bien. Pide ayuda: eso también es liderazgo."},
    {g:"ajolote", t:"Aprende, cuestiona, conecta y actúa. Y cuando lo necesites, vuelve al Refugio."},
    {g:"ajolote", t:"Hacer preguntas no es no saber: es empezar a entender. Sigue preguntando."},
    {g:"ajolote", t:"Cada cosa que aprendes es una herramienta más en tu mochila. Hoy ya llevas más que ayer."},
    {g:"ajolote", t:"Entender un problema es la mitad de resolverlo. Y tú ya estás en eso."},
    {g:"ajolote", t:"Cuando todo parezca enredado, empieza por una sola pregunta: ¿qué puedo hacer yo, aquí, hoy?"},
    {g:"ajolote", t:"Tu curiosidad es un superpoder. No dejes que nadie te la apague."},
    {g:"ajolote", t:"No tienes que ser experta ni experto para opinar sobre tu propio futuro."},
    {g:"ajolote", t:"Leer, escuchar y aprender también es actuar. Las buenas decisiones empiezan así."},
    {g:"ajolote", t:"Cambiar de opinión cuando aprendes algo nuevo no es debilidad, es inteligencia."},
    {g:"ajolote", t:"Equivocarse es parte de aprender. Regenerarse, también."},
    {g:"ajolote", t:"Hoy, regálate un rato sin pantallas. Tu mente también necesita agua fresca."},
    {g:"ajolote", t:"La ciencia nos dice qué está pasando, y también qué funciona. Hay más soluciones de las que crees."},
    {g:"ajolote", t:"Tus preguntas pueden abrirle los ojos a alguien más. Compártelas."},
    {g:"ajolote", t:"Lo que aprendes hoy, mañana lo puedes enseñar. Así crece el conocimiento: de mano en mano."},
    {g:"ajolote", t:"Sentirte pequeño frente a un problema enorme es normal. Pero los problemas enormes se resuelven entre muchas personas."},
    {g:"ajolote", t:"Si hoy no entiendes algo, no pasa nada. Mañana lo vuelves a intentar, con más calma."},
    {g:"jaguar", t:"Tu voz es más fuerte de lo que crees. Nadie más puede decir lo que tú tienes que decir."},
    {g:"jaguar", t:"Hay miles de jóvenes en América Latina sintiendo lo mismo que tú. No estás sola, no estás solo."},
    {g:"jaguar", t:"La selva no crece en un día, pero crece. Y lo que tú siembras, también."},
    {g:"jaguar", t:"Eres parte de una generación que ya está cambiando las reglas del juego. Lo vemos todos los días."},
    {g:"jaguar", t:"Proteger lo que amas es de las cosas más valientes que alguien puede hacer."},
    {g:"jaguar", t:"Una persona inspira a otra, y esa a otra más. Así empiezan los movimientos."},
    {g:"jaguar", t:"Tu territorio te conoce. Tu comunidad te escucha. Tu voz importa."},
    {g:"jaguar", t:"El jaguar no ruge todo el tiempo: elige cuándo. Guarda tu energía para lo que de verdad importa."},
    {g:"jaguar", t:"Defender tu territorio es defender tu historia, tu familia y tu futuro."},
    {g:"jaguar", t:"La valentía no es no tener miedo: es cuidar lo que amas aunque tengas miedo."},
    {g:"jaguar", t:"Cuidar también es poner límites: a quien destruye y a lo que te agota."},
    {g:"jaguar", t:"Tu comunidad tiene una fuerza que ningún problema puede ignorar cuando se une."},
    {g:"jaguar", t:"Hay personas que llevan generaciones protegiendo los bosques. Caminas sobre sus huellas."},
    {g:"jaguar", t:"Tu voz no tiene que ser la más fuerte; tiene que ser la tuya."},
    {g:"jaguar", t:"Cuando dudes, mira lo que proteges: un río, un árbol, tu gente. Ahí está tu fuerza."},
    {g:"jaguar", t:"Nunca eres demasiado joven para transformar tu realidad."},
    {g:"jaguar", t:"Lo que hoy cuidas, mañana alguien lo va a disfrutar gracias a ti."},
    {g:"jaguar", t:"Ser guardiana o guardián no es pelear en soledad: es cuidar en manada."},
    {g:"jaguar", t:"Tu dignidad no se negocia, y la de la Tierra tampoco."},
    {g:"jaguar", t:"Las raíces más profundas sostienen los árboles más altos. Cuida las tuyas."},
    {g:"jaguar", t:"No necesitas permiso para empezar a cuidar lo que amas."},
    {g:"espiritu", t:"El agua no se rinde ante la piedra: la rodea, la moldea y sigue su camino. Tú también."},
    {g:"espiritu", t:"Cada gota cuenta. Ninguna lluvia empezó con un aguacero."},
    {g:"espiritu", t:"Respira. El planeta lleva millones de años reinventándose, y tú eres parte de su próxima versión."},
    {g:"espiritu", t:"Si hoy pesa mucho, comparte la carga. Para eso existen las redes, las de verdad."},
    {g:"espiritu", t:"La esperanza no es esperar: es hacer. Y tú ya estás haciendo."},
    {g:"espiritu", t:"Mira a tu alrededor: hay algo vivo y hermoso cerca de ti. Por eso hacemos lo que hacemos."},
    {g:"espiritu", t:"Los manantiales nacen en silencio y alimentan ríos enteros. Lo que haces sin que nadie te vea también cuenta."},
    {g:"espiritu", t:"Detente un momento. Escucha el viento, un pájaro, tu respiración. El mundo sigue lleno de vida."},
    {g:"espiritu", t:"Hoy descubre algo hermoso cerca de ti y guárdalo en tu memoria. Eso es lo que defendemos."},
    {g:"espiritu", t:"El agua siempre encuentra el camino. A veces rodea, a veces espera, pero llega."},
    {g:"espiritu", t:"Inhala esperanza, exhala lo que no puedes controlar."},
    {g:"espiritu", t:"Cada amanecer es una oportunidad nueva de cuidar el mundo y de cuidarte."},
    {g:"espiritu", t:"No todo depende de ti, pero algo sí. Empieza por ese algo."},
    {g:"espiritu", t:"La naturaleza se recupera cuando le damos espacio. Tú también."},
    {g:"espiritu", t:"Como el agua que se vuelve nube y regresa en lluvia, tu energía también vuelve. Descansa."},
    {g:"espiritu", t:"Eres parte de la naturaleza, no estás fuera de ella. Cuidarte también es cuidarla."},
    {g:"espiritu", t:"Asombrarte también es un acto de esperanza. No pierdas la capacidad de maravillarte."},
    {g:"espiritu", t:"Un río se forma con miles de gotas que deciden ir en la misma dirección."},
    {g:"espiritu", t:"Hoy agradece algo que te da la Tierra. La gratitud también da fuerza."}
  ]
};
