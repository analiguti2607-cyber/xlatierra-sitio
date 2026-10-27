# Sitio de Xlatierra · cómo publicarlo y editarlo

## Qué hay en esta carpeta
| Archivo | Para qué sirve | ¿Lo editas? |
|---|---|---|
| `index.html` | Página de inicio | Sí, para completar lo marcado en amarillo |
| `curso.html` | Página del curso | No |
| `contenido.js` | **Todos los textos del curso**: lecciones, preguntas, lecturas, recursos, cuestionario | **Sí, aquí cambias contenido** |
| `config.js` | URL de Google Sheets, firma del certificado, calificación mínima | Sí |
| `app.js`, `estilos.css`, `curso.css` | Funcionamiento y diseño | No |
| `img/` | Logos | Puedes reemplazarlos con el mismo nombre |
| `google-sheets/` | Código e instrucciones para recibir datos | Sigue `INSTRUCCIONES.md` |
| `DATOS_EXTERNOS_APROBADOS.md` | Registro de los datos que no vienen de tu investigación, con su fuente | No |

## Publicar gratis en Netlify (sin programar)
1. Entra a **app.netlify.com/drop** (puedes crear cuenta gratis con tu correo).
2. Arrastra la carpeta **xlatierra-sitio** completa a la página.
3. En segundos te da un link público, algo como `nombre-al-azar.netlify.app`.
4. En **Site configuration → Change site name** puedes cambiarlo a algo como `xlatierra.netlify.app` (si está libre).
5. **Para actualizar:** en tu sitio de Netlify, pestaña **Deploys**, arrastra de nuevo la carpeta completa.

**Dominio propio (opcional):** si compras `xlatierra.org` o similar, en Netlify ve a
**Domain management → Add a domain** y sigue los pasos. Verifica precios antes de comprar.

## Probar en tu computadora antes de publicar
Puedes abrir `index.html` con doble clic. Todo funciona, salvo que en algunos navegadores
la descarga del certificado solo funciona ya publicado en internet.

## Editar el contenido
Abre `contenido.js` con cualquier editor de texto (en Windows, el Bloc de notas sirve;
mejor aún, **Visual Studio Code**, gratis). Las instrucciones están al inicio del archivo.

Después de editar:
1. Abre el sitio en tu computadora y revisa que la lección que cambiaste cargue.
2. Si ves «Cargando curso…» y no avanza, probablemente faltó una coma o unas comillas.
   Deshaz el último cambio o pídele ayuda a Claude pegando el pedazo que editaste.
3. Vuelve a subir la carpeta a Netlify.

## Importante sobre el avance de los alumnos
El avance se guarda en el navegador de cada persona. Si cambia de dispositivo o borra
los datos del navegador, empieza de nuevo. Para guardar el avance entre dispositivos
haría falta un sistema de cuentas (por ejemplo, Memberstack o Supabase); se puede
agregar en una siguiente versión.
