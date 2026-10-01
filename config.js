export const site = {
  name: 'Dra. Martha Laura Ramírez Montiel',
  // Número oficial confirmado en formato internacional, por ejemplo + seguido de dígitos. Vacío hasta validación.
  whatsapp: '',
  locations: [
    { name: 'Apan', place: 'Clínica San Pablo', address: 'Ocampo Norte 1, Centro, Apan, Hidalgo.', hours: 'Lunes a viernes: 9:00–13:00 y 15:30–18:30.', map: 'https://share.google/35H4PicDbCe8kNF3K' },
    { name: 'Texcoco', place: 'Hospital Manedic', address: 'Avenida Emiliano Zapata 207, Santa Úrsula, Texcoco, Estado de México, C.P. 56150.', hours: 'Viernes: 17:00–20:00.', map: 'https://maps.app.goo.gl/LCyxPgfi8zwk2e2Z7' },
    { name: 'Pachuca', place: 'Consultorio en Pachuca', address: 'Paseo de la Montaña 110B, colonia Ciudad de los Niños, C.P. 42070, Pachuca, Hidalgo.', hours: 'Martes y miércoles: 9:00–12:00.', map: 'https://maps.app.goo.gl/p6AYgjtAVpXP9WXs5' }
  ],
  appointmentNote: 'Atención con cita previa. Consulte disponibilidad para la sede de su preferencia.',
  unavailable: 'Contacto por WhatsApp próximamente',
  services: [
    ['Consulta ginecológica', 'Información sobre la consulta y cómo solicitar una valoración.'],
    ['Atención relacionada con VPH', 'Consulte los servicios de atención relacionados con el virus del papiloma humano.'],
    ['Papanicolaou y colposcopia', 'Información sobre la toma de muestra del cuello uterino y su revisión mediante colposcopia.'],
    ['Histeroscopia', 'Consulte información sobre el procedimiento que permite observar el interior del útero.'],
    ['Planificación familiar y consejería sexual', 'Información para solicitar una consulta sobre métodos de planificación familiar y consejería sexual.'],
    ['Menopausia y osteoporosis', 'Consulte la atención disponible para esta etapa y para la salud de los huesos.'],
    ['Trastornos menstruales', 'Información para solicitar una valoración relacionada con cambios en la menstruación.'],
    ['Vacunación contra VPH', 'Consulte disponibilidad e información sobre la vacunación contra el virus del papiloma humano.']
  ]
};
export function whatsappUrl(number, location) {
  if (!/^\+[1-9]\d{7,14}$/.test(number)) return null;
  const message = `Hola, quisiera solicitar información y disponibilidad para una cita con la ${site.name} en ${location}.`;
  return `https://wa.me/${number.slice(1)}?text=${encodeURIComponent(message)}`;
}
