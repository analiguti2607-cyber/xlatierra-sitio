/**
 * XLATIERRA · Receptor de datos del curso
 * --------------------------------------------------------------
 * Pega TODO este código en Apps Script (Extensiones > Apps Script)
 * desde la hoja de cálculo de la cuenta impactus.xa@gmail.com.
 * Sigue los pasos de INSTRUCCIONES.md.
 *
 * Crea automáticamente una pestaña por tipo de registro:
 *   inicio        -> perfil anónimo + autoevaluación inicial
 *   leccion       -> lección completada + valoración
 *   cuestionario  -> resultado del cuestionario final
 *   final         -> autoevaluación final + primer paso + plan de acción
 */

/* Solo si creaste el proyecto desde script.google.com (Opción B):
   pega aquí el ID de tu hoja. Si lo abriste desde la hoja, déjalo vacío. */
var ID_HOJA = "";

var TIPOS_PERMITIDOS = ["inicio", "leccion", "cuestionario", "final"];
var MAX_TEXTO = 1500;

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var datos = JSON.parse(e.postData.contents);
    var tipo = String(datos.tipo || "");
    if (TIPOS_PERMITIDOS.indexOf(tipo) === -1) {
      return ContentService.createTextOutput("tipo no permitido");
    }
    var libro = ID_HOJA ? SpreadsheetApp.openById(ID_HOJA) : SpreadsheetApp.getActiveSpreadsheet();
    var hoja = libro.getSheetByName(tipo) || libro.insertSheet(tipo);

    // Encabezados: se agregan solos si aparece un campo nuevo
    var encabezados = hoja.getLastRow() > 0
      ? hoja.getRange(1, 1, 1, hoja.getLastColumn()).getValues()[0]
      : [];
    Object.keys(datos).forEach(function (k) {
      if (encabezados.indexOf(k) === -1) encabezados.push(k);
    });
    hoja.getRange(1, 1, 1, encabezados.length).setValues([encabezados]).setFontWeight("bold");

    var fila = encabezados.map(function (k) { return limpiar(datos[k]); });
    hoja.appendRow(fila);
    return ContentService.createTextOutput("ok");
  } catch (err) {
    return ContentService.createTextOutput("error");
  } finally {
    lock.releaseLock();
  }
}

/* Evita que un texto se interprete como fórmula y limita su largo */
function limpiar(v) {
  if (v === undefined || v === null) return "";
  if (typeof v === "number" || typeof v === "boolean") return v;
  var s = String(v).slice(0, MAX_TEXTO);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

/* Prueba manual: en el editor, elige esta función y presiona «Ejecutar».
   Debe aparecer una fila de prueba en la pestaña «inicio». */
function prueba() {
  doPost({ postData: { contents: JSON.stringify({
    tipo: "inicio", participante: "prueba", fecha: new Date().toISOString(),
    curso: "Módulo 1", edad: "19–21", antes_1: 3
  }) } });
}
