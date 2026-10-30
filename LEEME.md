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
| `contenido.js` | **Textos del Módulo 1**: lecciones, actividades, cuestionario, recursos, referencias | **Sí, aquí cambias contenido** |
| `contenido-m2.js` | **Textos del Módulo 2**, fichas de especies y referencias | **Sí** |
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
