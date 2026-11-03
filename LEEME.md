# Sitio de Xlatierra · cómo publicarlo y editarlo

**Dirección del sitio:** https://analiguti2607-cyber.github.io/xlatierra-sitio/
Publicado gratis con **GitHub Pages** desde el repositorio `xlatierra-sitio` (rama `main`, carpeta raíz).

## Qué hay en esta carpeta
| Archivo | Para qué sirve | ¿Lo editas? |
|---|---|---|
| `index.html` | Página de inicio | Sí, para textos de la portada |
| `cursos.html` | Catálogo de cursos | Solo si agregas un módulo |
| `mapas.html` | Catálogo de mapas | Solo si agregas un mapa |
| `curso.html` | Página del Módulo 1 | No |
| `biodiversidad.html` | Página del Módulo 2 | No |
| `liderazgo.html` | Página del Módulo 3 | No |
| `contenido.js` | **Textos del Módulo 1**: lecciones, actividades, cuestionario, recursos, referencias | **Sí, aquí cambias contenido** |
| `contenido-m2.js` | **Textos del Módulo 2**, fichas de especies y referencias | **Sí** |
| `contenido-m3.js` | **Textos del Módulo 3** (liderazgo y acción climática juvenil) | **Sí** |
| `refugio.html` + `refugio-datos.js` | Refugio de líderes: buenas noticias, música, mensajes de ánimo, galería | Los contenidos, en `refugio-datos.js` |
| `proyectos.html` | Directorio de proyectos (próximamente) | Sí |
| `mapa.html` + `mapa-datos.js` | Mapa de biodiversidad de América Latina (Módulo 2) | Los datos, en `mapa-datos.js` |
| `mapa-mexico.html` + `mapa-mexico-datos.js` | Mapa de impactos en México (Módulo 1) | Los datos, en `mapa-mexico-datos.js` |
| `config.js` | URL de Google Sheets, nombre de quien firma el certificado, calificación mínima | Sí |
| `app.js`, `estilos.css`, `curso.css` | Funcionamiento y diseño | No |
| `img/` | Logos, personajes y poses. `firma.png` (opcional) es la firma del certificado | Puedes reemplazarlos con el mismo nombre |
| `google-sheets/` | Código e instrucciones para recibir datos | Sigue `INSTRUCCIONES.md` |
| `DATOS_EXTERNOS_APROBADOS.md` | Registro de datos externos, correcciones y pendientes de aprobación | No |
| `LICENSE.md` | Aviso de derechos de autor (todos los derechos reservados) | No |

## Cómo actualizar el sitio
1. En GitHub, entra al repositorio y usa **Add file → Upload files**.
2. Arrastra los archivos nuevos o modificados. Si un archivo va dentro de `img/`, primero entra a esa carpeta y súbelo ahí.
3. Escribe una nota corta en «Commit changes» y confirma.
4. En 1 o 2 minutos el sitio se actualiza solo. Es gratis: GitHub Pages no cobra por publicar.

Para ver si ya terminó de publicarse: pestaña **Actions** del repositorio (un círculo verde ✓ significa listo).

**Dominio propio (opcional):** si compras `xlatierra.org` o similar, se configura en
**Settings → Pages → Custom domain**. Verifica precios antes de comprar.

## Probar en tu computadora antes de publicar
Puedes abrir `index.html` con doble clic. Casi todo funciona; los mapas y la descarga del
certificado funcionan mejor ya publicados en internet.

## Editar el contenido
Abre `contenido.js` o `contenido-m2.js` con un editor de texto (mejor **Visual Studio Code**, gratis).
Las instrucciones están al inicio de cada archivo.

Después de editar:
1. Abre el sitio en tu computadora y revisa que la lección que cambiaste cargue.
2. Si ves «Cargando curso…» y no avanza, probablemente faltó una coma o unas comillas.
   Deshaz el último cambio o pídele ayuda a Claude pegando el pedazo que editaste.
3. Sube el archivo a GitHub.

## Importante sobre el avance de los alumnos
El avance se guarda en el navegador de cada persona y en esta dirección del sitio. Si cambia
de dispositivo, borra los datos del navegador o el sitio cambia de dirección, empieza de nuevo.
Para guardar el avance entre dispositivos haría falta un sistema de cuentas; se puede agregar
en una siguiente versión.


## Módulo 4 · Cuidar cada gota (30 oct 2026)
- Página: `agua.html` · contenido: `contenido-m4.js` (13 lecciones + l6b «El agua y los pueblos indígenas», próximamente).
- `app.js`: el juego «order» acepta `seq:true` (ordenar pasos, sin barras) y `hint`.
- Pendientes: testimonio para el módulo (proponerlo con UNICEF); mapa para la lección de pueblos indígenas; enlace exacto del visor de disponibilidad de acuíferos de CONAGUA (hoy la lección 2 enlaza a gob.mx/conagua).

## Actualización del 2 nov (hecha)
- Decisión: las respuestas de «Para pensar» NO se recolectan. Dejarlo explícito en la página de privacidad («Tus datos en este curso») y, si hace falta, en el aviso junto a cada pregunta (hoy dice «Escribe aquí. Se guarda en tu dispositivo.»).
- Decisión (2 nov): no citar «Investigación de escritorio Xlatierra» (`xlt_escritorio`) ni «Investigación documental Xlatierra / Módulo 1» (`xlt_m1`). Cada dato debe citar su fuente directa, como en los módulos 2 a 4. Afecta sobre todo a `contenido.js` (lecciones l1, l8, l9, l10, l11, l14, l15, sus textos «sources» y refsNote) y a `mapa-mexico-datos.js` (fichas que usan `xlt_escritorio` y la nota del encabezado). Hay que localizar el estudio original de cada dato (Veracruz, Baja California Sur, Reserva Chico Mendes, manglares del noroeste, ecoansiedad, etc.), verificarlo y pedir aprobación; si no se encuentra, quitar el dato.
- La «Encuesta Xlatierra (n=51)» (`encuesta_xlt`) se queda (confirmado por Ana Ceci el 2 nov).
- Tarjeta de compromiso (comentario del 2 nov, Módulo 1): aprovechar más el espacio de la tarjeta y, según la opción que elija la persona, mostrar un paso a paso para cumplirla. Propuesta: guía de 4 a 5 pasos por opción en la página (con enlaces útiles) y 3 pasos cortos dentro de la tarjeta descargable. Aplica a los 4 módulos. Escribir los pasos y pasarlos a aprobación antes de programar.

- HECHO (2 nov): privacidad aclarada; citas del Módulo 1 cambiadas a fuentes originales (ver DATOS_EXTERNOS_APROBADOS.md); invitaciones a los mapas en lecciones 8, 10 y 14 del Módulo 1 (el Módulo 2 ya invitaba en 2 lecciones); guías paso a paso por opción (`guias-accion.js`, pendientes de aprobación) y nueva tarjeta de compromiso en los 4 módulos (el Módulo 2 ahora también tiene tarjeta).
