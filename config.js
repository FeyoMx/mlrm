export const site = {
  name: 'Dra. Martha Laura Ramírez Montiel',
  // Número y código de país confirmados por el usuario el 11 de octubre de 2026.
  whatsapp: '+527711249845',
  locations: [
    { name: 'Apan', place: 'Clínica San Pablo', address: 'Ocampo Norte 1, Centro, Apan, Hidalgo.', hours: 'Lunes a viernes: 9:00–13:00 y 15:30–18:30.', map: 'https://share.google/35H4PicDbCe8kNF3K' },
    { name: 'Texcoco', place: 'Hospital Manedic', address: 'Avenida Emiliano Zapata 207, Santa Úrsula, Texcoco, Estado de México, C.P. 56150.', hours: 'Viernes: 17:00–20:00.', map: 'https://maps.app.goo.gl/LCyxPgfi8zwk2e2Z7' },
    { name: 'Pachuca', place: 'Consultorio en Pachuca', address: 'Paseo de la Montaña 110B, colonia Ciudad de los Niños, C.P. 42070, Pachuca, Hidalgo.', hours: 'Martes y miércoles: 9:00–12:00.', map: 'https://maps.app.goo.gl/p6AYgjtAVpXP9WXs5' }
  ],
  appointmentNote: 'Atención con cita previa. Consulte disponibilidad para la sede de su preferencia.',
  unavailable: 'Contacto por WhatsApp próximamente',
  services: [
    ['Consulta ginecológica', 'Información sobre la consulta y cómo solicitar una valoración.'],
    ['Seguimiento del embarazo y control prenatal', 'Consulte información y disponibilidad para el seguimiento de su embarazo.'],
    ['Consulta preconcepcional', 'Valoración y orientación antes del embarazo.'],
    ['Atención y seguimiento posparto', 'Información para solicitar una consulta de seguimiento después del parto.'],
    ['Atención de partos y cesáreas', 'Consulte información sobre la atención de partos y cesáreas.'],
    ['Ultrasonido obstétrico', 'Consulte los detalles y la disponibilidad del estudio durante el embarazo.'],
    ['Infecciones vaginales y de transmisión sexual', 'Información para solicitar una valoración y atención de infecciones vaginales y de transmisión sexual.'],
    ['Atención relacionada con VPH', 'Consulte los servicios de atención relacionados con el virus del papiloma humano.'],
    ['Papanicolaou y colposcopia', 'Información sobre la toma de muestra del cuello uterino y su revisión mediante colposcopia.'],
    ['Histeroscopia', 'Consulte información sobre el procedimiento que permite observar el interior del útero.'],
    ['Síndrome de ovario poliquístico y quistes de ovario', 'Información para solicitar una valoración y atención del síndrome de ovario poliquístico y de quistes de ovario.'],
    ['Miomas uterinos y endometriosis', 'Información para solicitar una valoración y atención de miomas uterinos y endometriosis.'],
    ['Trastornos menstruales', 'Información para solicitar una valoración relacionada con cambios en la menstruación.'],
    ['Dolor pélvico y molestias durante las relaciones sexuales', 'Información para solicitar una valoración de dolor pélvico o molestias durante las relaciones sexuales.'],
    ['Valoración inicial de fertilidad', 'Información para solicitar una valoración inicial de fertilidad y dificultad para lograr un embarazo.'],
    ['Planificación familiar y consejería sexual', 'Información para solicitar una consulta sobre métodos de planificación familiar y consejería sexual.'],
    ['Colocación y retiro de DIU e implante anticonceptivo', 'Consulte información y disponibilidad para la colocación o el retiro de estos métodos anticonceptivos.'],
    ['Cirugía ginecológica', 'Consulte información sobre los procedimientos y la disponibilidad de atención.'],
    ['Menopausia y osteoporosis', 'Consulte la atención disponible para esta etapa y para la salud de los huesos.'],
    ['Vacunación contra VPH', 'Existencias y condiciones de aplicación sujetas a confirmación. Consulte información sobre la vacunación contra el virus del papiloma humano.'],
    ['Interpretación de ultrasonidos de mamas y mastografías', 'Durante la consulta se interpretan los estudios que usted lleve consigo. Estos estudios se realizan en laboratorio o centro de diagnóstico por un médico radiólogo.']
  ]
};
export function whatsappUrl(number, location) {
  if (!/^\+[1-9]\d{7,14}$/.test(number)) return null;
  const message = `Hola, quisiera solicitar información y disponibilidad para una cita con la ${site.name} en ${location}.`;
  return `https://wa.me/${number.slice(1)}?text=${encodeURIComponent(message)}`;
}
