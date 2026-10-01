# AGENTS.md — Landing de la Dra. Martha Laura Ramírez Montiel

## Alcance

Estas instrucciones aplican a todo el repositorio `FeyoMx/mlrm`.
Construya una landing page completa en español para presentar la atención ginecológica de la doctora y recibir solicitudes de información o disponibilidad por WhatsApp en Apan, Texcoco y Pachuca.
Implemente y verifique el sitio; no entregue únicamente una propuesta. Esta tarea no incluye publicar, desplegar, lanzar anuncios ni integrar un agente de IA.

## Fuentes y decisiones

- Lea `README.md`, `tokens.json`, `design-system.json` y `Dra_Martha_Laura_Ramirez_Montiel_Brief_Plan.docx` antes de implementar. Inspeccione las imágenes disponibles.
- Respete instrucciones más específicas en subdirectorios y las instrucciones actuales del usuario.
- Para identidad visual, `README.md` y `tokens.json` prevalecen sobre la paleta antigua azul/teal del brief.
- Conserve los documentos y recursos originales. No elimine trabajo existente ni sobrescriba imágenes originales; cree variantes cuando sea necesario.
- No suponga que un dato recibido en el onboarding ya está aprobado para publicación. Documente contradicciones y pendientes.
- Continúe con decisiones rutinarias y reversibles; no detenga el trabajo por información que pueda configurarse después.

## Identidad visual

| Uso | Valor |
| --- | --- |
| Marca / rosa vino | `#8E3350` |
| Acento lavanda | `#7C5AA3` |
| Fondo marfil | `#FBF4EF` |
| Fondo rubor | `#F5DCE2` |
| Texto principal | `#2E1A2B` |
| Texto secundario | `#6B5563` |
| Superficie elevada | `#FFFFFF` |
| Bordes | `#E6D4D9` |

- Use Fraunces para titulares y Plus Jakarta Sans para texto funcional, con fallbacks apropiados.
- Reutilice los tokens de espaciado, radios y sombras del repositorio. Centralice valores en variables CSS o en el sistema existente.
- Diseñe una experiencia femenina, moderna, cálida y profesional: composición editorial, curvas suaves, espacios generosos y jerarquía clara.
- Evite una sucesión monótona de tarjetas iguales. Use lavanda como acento moderado y rosa vino para acciones principales.
- No use colores de estado para decorar mensajes clínicos ni publique datos pendientes como alertas internas.

## Imágenes y privacidad visual

- La doctora no desea mostrar su rostro. Conserve el recorte de la barbilla hacia abajo; no muestre ojos, nariz o boca ni reconstruya una cara.
- El usuario autorizó el recurso generado con IA y recortado para estas piezas. No lo describa como fotografía real de la doctora ni deduzca su identidad a partir de él.
- Use las versiones actualizadas en rosa vino, lavanda y marfil cuando estén disponibles. Inspeccione cada recurso; su nombre no garantiza que tenga la paleta correcta.
- Si solo hay imágenes antiguas, mantenga la paleta vigente del sitio y documente la sustitución pendiente. No invente rutas a recursos que no existen.
- No utilice fotos de stock de otras doctoras, imágenes clínicas, cuerpos ilustrados ni escenas que exploten inseguridades.
- El monograma ML es un recurso provisional, no un logotipo aprobado.
- Mantenga proporciones y recortes intencionales. No vuelva a recortar el banner si eso elimina información importante.
- Use texto HTML para el nombre y la información esencial; no dependa del texto incrustado en una imagen.

## Contenido y tono

- Trate a las pacientes de usted. Escriba frases breves, claras y cálidas, sin emojis en el contenido clínico.
- Explique procedimientos en lenguaje sencillo, sin diagnosticar, prescribir, prometer resultados ni afirmar superioridad.
- No invente cédulas, certificaciones, testimonios, reseñas, estadísticas, teléfono, correo, redes sociales o formas de pago.
- No publique experiencia profesional ni credenciales sin aprobación documentada.
- No publique promociones “solo mayo”, paquetes ambiguos o precios pendientes de validación. Mantenga esos datos como pendientes internos.
- No invente preparación para estudios, cobertura de seguros, políticas de cancelación ni instrucciones ante síntomas.
- NatalIA es una asistente administrativa de WhatsApp. No añada un chat simulado ni una integración de IA ficticia.

## Secciones requeridas

1. Encabezado con nombre de la doctora, navegación a Servicios, Sedes y Preguntas frecuentes, CTA y menú móvil accesible.
2. Hero con nombre completo, texto “Atención ginecológica con un trato cercano y profesional.”, referencia a las tres sedes y acciones “Solicitar disponibilidad” y “Conocer servicios”.
3. Servicios con descripciones administrativas sencillas: consulta ginecológica; atención relacionada con VPH; Papanicolaou y colposcopia; histeroscopia; planificación familiar y consejería sexual; menopausia y osteoporosis; trastornos menstruales; vacunación contra VPH.
4. Selector accesible de sedes con dirección, horarios y enlace al mapa.
5. Preguntas frecuentes sobre solicitud de cita, elección de sede, disponibilidad y consulta de servicios y costos.
6. Cierre con invitación cálida, selección de sede y CTA de WhatsApp.
7. Pie de página con nombre, sedes y aviso: “La información de este sitio es informativa y no sustituye una valoración médica.”

Añada enlaces legales únicamente si existen documentos reales. No cree enlaces vacíos ni redacte un aviso de privacidad como si sus datos legales estuvieran confirmados.

## Sedes: información recibida

### Apan

- Clínica San Pablo, Ocampo Norte 1, Centro, Apan, Hidalgo.
- Lunes a viernes: 9:00–13:00 y 15:30–18:30.
- Mapa: https://share.google/35H4PicDbCe8kNF3K

### Texcoco

- Hospital Manedic, Avenida Emiliano Zapata 207, Santa Úrsula, Texcoco, Estado de México, C.P. 56150.
- Viernes: 17:00–20:00.
- Mapa: https://maps.app.goo.gl/LCyxPgfi8zwk2e2Z7

### Pachuca

- Paseo de la Montaña 110B, colonia Ciudad de los Niños, C.P. 42070, Pachuca, Hidalgo.
- Martes y miércoles: 9:00–12:00.
- Mapa: https://maps.app.goo.gl/p6AYgjtAVpXP9WXs5

Muestre: “Atención con cita previa. Consulte disponibilidad para la sede de su preferencia.”
Los horarios recibidos se superponen entre sedes. Documente el pendiente de validación; no los transforme en espacios reservables ni deduzca disponibilidad real.

## WhatsApp y citas

- Centralice el teléfono oficial en una configuración editable y use únicamente un número confirmado en las fuentes o por el usuario.
- Si falta, deje su valor vacío; muestre “Contacto por WhatsApp próximamente” y no genere enlaces ficticios.
- Con número configurado, abra WhatsApp con texto codificado según la sede seleccionada: “Hola, quisiera solicitar información y disponibilidad para una cita con la Dra. Martha Laura Ramírez Montiel en [sede].”
- Valide el formato internacional del número sin inventar un prefijo. Todos los CTA deben usar la misma configuración y lógica.
- Solicitar una cita no significa confirmarla. No muestre agenda en tiempo real ni mensajes de “cita confirmada” sin una integración real.
- No recolecte síntomas, estudios, fotografías clínicas ni datos personales mediante formularios en esta tarea.

## Implementación

- Respete el stack existente. Si solo hay documentación y recursos, use HTML, CSS y JavaScript estáticos, sin dependencias innecesarias.
- Centralice sedes, contacto y textos reutilizables para evitar duplicación e inconsistencias.
- Diseñe desde 360 px, sin desplazamiento horizontal, con navegación cómoda en celular.
- Use HTML semántico, etiquetas accesibles, foco visible, navegación por teclado y contraste legible.
- Si implementa pestañas, aplique su patrón accesible completo; de lo contrario, prefiera botones o un selector nativo simple.
- Respete `prefers-reduced-motion`; use animaciones discretas.
- Optimice imágenes, reserve sus dimensiones y aplique carga diferida fuera del primer viewport.
- Incluya título, descripción, idioma español y metadatos Open Graph. No invente dominio, URL canónica ni URL pública de imágenes.
- No añada Meta Pixel, rastreadores, cookies de marketing, formularios médicos ni servicios externos innecesarios.
- No exponga secretos, claves o configuración privada en el frontend.
- El contenido visible debe hablar a pacientes; mantenga notas técnicas y validaciones pendientes en documentación interna.

## Verificación

Ejecute el sitio localmente y compruebe:

- Vista móvil de 360 px y escritorio, sin desbordamientos ni texto ilegible.
- Menú móvil y navegación entre secciones.
- Selector de sedes, direcciones, horarios y mapas correctos.
- CTA de WhatsApp con número configurado y estado alternativo sin número.
- Mensaje de WhatsApp correspondiente a la sede seleccionada.
- Navegación por teclado, foco visible y movimiento reducido.
- Imágenes sin rostro visible, sin deformación y sin recursos rotos.
- Ausencia de errores de consola y, si el stack lo requiere, compilación y comprobaciones existentes.

Corrija fallas relevantes antes de entregar. No añada pruebas que solo repliquen la implementación. Si no puede inspeccionar una vista o ejecutar una comprobación, indique la limitación con claridad.

## Documentación y entrega

- Actualice el README conservando la guía de identidad. Explique cómo iniciar el sitio, configurar WhatsApp y sustituir imágenes.
- Documente pendientes reales: contacto oficial, horarios superpuestos, aprobación de precios y credenciales, recursos visuales definitivos y documentos legales.
- Entregue un resumen breve de cambios, archivos modificados, comprobaciones realizadas y limitaciones.
- No publique, despliegue, lance anuncios ni modifique cuentas externas durante esta tarea. Prepare el sitio localmente para revisión.
