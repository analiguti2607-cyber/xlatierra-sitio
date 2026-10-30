/* =====================================================================
   XLATIERRA · CONFIGURACIÓN
   Aquí van los datos que cambian poco. Edita solo lo que está entre comillas.
   ===================================================================== */
window.XLT_CONFIG = {

  /* Pega aquí la URL de tu Google Apps Script cuando la tengas
     (ver google-sheets/INSTRUCCIONES.md). Mientras esté vacía,
     el curso funciona igual pero no envía datos. */
  sheetsUrl: "https://script.google.com/macros/s/AKfycbyxmTRp_iQo9-z3ptuWtrWEZgEM1MdFIN-otSsvSXhyAZYa02HbkgP5Rugs2ciRu-9F/exec",

  /* Porcentaje mínimo para aprobar el cuestionario final (0.7 = 70%) */
  passScore: 0.7,

  /* Quién firma el certificado. La firma se toma de img/firma.png
     (si ese archivo no existe, el certificado sale sin firma, solo con el nombre). */
  certSigner: "Ana Cecilia Licéaga Gutiérrez",
  certSignerRole: "Fundadora de Xlatierra",

  /* Correo de contacto que se muestra en la página de privacidad del curso */
  contactEmail: "impactus.xa@gmail.com",

  /* Cambia este número si haces cambios grandes al curso y quieres que
     todos empiecen de cero (normalmente NO lo cambies). */
  storageVersion: "v2"
};
