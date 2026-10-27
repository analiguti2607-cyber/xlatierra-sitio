# Conectar el curso con Google Sheets

Los datos llegarán a una hoja de cálculo de la cuenta **impactus.xa@gmail.com**.
Estos pasos los tiene que hacer **quien tenga acceso a esa cuenta**, porque Google
solo deja crear la conexión desde dentro de la cuenta dueña de la hoja.
Toma unos 10 minutos y es gratis.

## 1. Crear la hoja
1. Inicia sesión en Google con **impactus.xa@gmail.com**.
2. Entra a sheets.google.com y crea una hoja en blanco.
3. Ponle nombre, por ejemplo: **Xlatierra · Datos del curso**.

## 2. Pegar el código
1. En la hoja, ve al menú **Extensiones → Apps Script**.
2. Borra lo que aparece en el editor (`function myFunction() {}`).
3. Abre el archivo `Codigo.gs` de esta carpeta, copia **todo** y pégalo.
4. Presiona el ícono de guardar (💾).

## 3. Probar que funciona (opcional, recomendado)
1. Arriba del editor, en la lista de funciones, elige **prueba**.
2. Presiona **Ejecutar**.
3. Google pedirá permisos: **Revisar permisos → elige la cuenta → Configuración avanzada → Ir a … (no seguro) → Permitir**.
   Esto aparece porque el código lo escribiste tú y Google no lo ha «verificado»; es normal.
4. Regresa a la hoja: debe haber una pestaña **inicio** con una fila de prueba. Puedes borrar esa fila.

## 4. Publicarlo como aplicación web
1. En Apps Script, botón azul **Implementar → Nueva implementación**.
2. En el engrane ⚙️ junto a «Seleccionar tipo», elige **Aplicación web**.
3. Configura:
   - **Ejecutar como:** Yo (impactus.xa@gmail.com)
   - **Quién tiene acceso:** Cualquier usuario
4. Presiona **Implementar** y autoriza si te lo pide.
5. Copia la **URL de la aplicación web** (termina en `/exec`).

## 5. Pegar la URL en el curso
1. Abre el archivo `config.js` del sitio.
2. Pega la URL entre las comillas de `sheetsUrl`:
   ```js
   sheetsUrl: "https://script.google.com/macros/s/XXXXXXXX/exec",
   ```
3. Guarda y vuelve a subir el sitio a Netlify (ver `LEEME.md`).

## Qué vas a recibir
Una pestaña por tipo de registro, todo **anónimo** (sin nombres ni correos):

| Pestaña | Cuándo llega | Qué contiene |
|---|---|---|
| `inicio` | Al empezar el curso | Edad, ocupación, lugar (opcionales) y autoevaluación inicial (1–5) |
| `leccion` | Al completar cada lección | Lección, valoración, aciertos en «¡Adivina!» |
| `cuestionario` | Cada intento del cuestionario | Puntaje, si aprobó, número de intento |
| `final` | Al terminar | Autoevaluación antes y después, primer paso elegido y plan de acción |

Solo se envían datos de quienes marcan la casilla de consentimiento al inicio.
La columna `participante` es un código al azar que permite unir los registros
de una misma persona sin saber quién es.

## Si Apps Script dice «No se puede abrir el archivo en estos momentos»
Casi siempre pasa porque tienes **varias cuentas de Google abiertas** en el navegador
y Apps Script se abre con otra cuenta que no es dueña de la hoja.

**Opción A (la más fácil):** abre una **ventana de incógnito**, inicia sesión **solo**
con impactus.xa@gmail.com, abre la hoja y ve a **Extensiones → Apps Script**.

**Opción B (si la A no funciona):**
1. En la hoja, copia su **ID**: es la parte de la dirección entre `/d/` y `/edit`.
   Ejemplo: en `docs.google.com/spreadsheets/d/1AbC123xyz/edit`, el ID es `1AbC123xyz`.
2. Entra a **script.google.com** (con la sesión de impactus.xa@gmail.com) → **Nuevo proyecto**.
3. Pega el código de `Codigo.gs` y escribe el ID entre las comillas de `var ID_HOJA = "";`.
4. Guarda y sigue desde el paso 3 de estas instrucciones.

## Si algo no funciona
- **No llegan datos:** revisa que la URL en `config.js` termine en `/exec` y que
  «Quién tiene acceso» sea «Cualquier usuario».
- **Cambié el código de Apps Script:** ve a **Implementar → Administrar implementaciones →
  ✏️ Editar → Versión: Nueva versión → Implementar**. Así la URL no cambia.
- **No tengo acceso a esa cuenta:** cualquier cuenta de Google sirve; solo repite
  los pasos con la cuenta que sí puedas usar.

## Alternativa si no se puede usar Google
Servicios como **Formspree** o **Tally** reciben datos de formularios y los mandan
por correo o los exportan a hoja de cálculo, pero sus planes gratuitos tienen
límites de envíos al mes. Si lo necesitas, se puede adaptar el curso.
