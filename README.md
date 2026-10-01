Usa este sistema para diseñar todo lo que lleve el nombre de la Dra. Martha Ramírez: el sitio web, la página de Facebook, los mensajes de NatalIA por WhatsApp, las piezas de Meta Ads y cualquier material impreso para las tres sedes (Apan, Texcoco y Pachuca). Todavía no existe logotipo ni activo de marca previo: escribe el nombre en `h1` hasta que la doctora apruebe uno. La paleta rosa vino, lavanda y marfil sustituye la dirección provisional azul/teal del brief inicial, por petición expresa de un look femenino y moderno. Paleta y marca siguen pendientes de aprobación de la doctora.

## Tono y voz

Escribe siempre de "usted", el registro que las pacientes esperan de una especialista. Prefiere frases breves y cálidas al tono clínico, y explica el procedimiento en lenguaje llano antes de nombrarlo: "revisión del cuello uterino (colposcopia)". NatalIA y cualquier copy de marketing nunca diagnostican, recetan ni prometen resultados; ante un síntoma, derivan a una persona. Comunica las alertas rojas ("sangrado abundante", "dolor abdominal intenso") con calma y claridad, nunca con alarmismo. No uses emojis en copy clínico ni en WhatsApp; uno solo, cálido, es aceptable en captions informales de Instagram. Ejemplo de copy: "Atención ginecológica con la Dra. Martha Laura Ramírez Montiel en Texcoco. Consulte horarios y solicite disponibilidad por WhatsApp."

## Color

Usa `surface` como fondo de página y `surface-raised` para tarjetas, formularios y el panel de chat. Pon títulos y cuerpo en `ink` sobre ambos; usa `ink-muted` solo para texto secundario. Reserva `brand` para el nombre de la doctora, los botones primarios ("Agendar por WhatsApp"), los links y el anillo de foco (sólido, 2px, `brand`); el texto sobre un relleno `brand` va en `ink-inverse`. Usa `brand-tint` como fondo suave tras promociones, precios y el selector de sede, nunca como color de texto. Usa `accent` con moderación, en CTAs secundarios y detalles puntuales: es el contrapunto lavanda, no un segundo primario. `success` confirma que se recibió una solicitud de cita. `warning` marca datos pendientes de validar solo en vistas internas, nunca frente a pacientes. `danger` se reserva para el escalamiento de NatalIA ante alertas rojas y siempre lleva texto claro. `border` es solo decorativo.

## Tipografía

Usa `h1` a `h3` (Fraunces) para titulares: su serif suave aporta calidez y elegancia sin depender del rosa. Usa `body`, `body-sm`, `label` y `caption` (Plus Jakarta Sans) para todo lo funcional, de modo que precios, horarios y direcciones se lean bien en el teléfono. Escribe `label` en mayúsculas para botones, navegación y etiquetas; nunca para frases largas. Carga ambas familias desde Google Fonts.

## Espaciado, radios y sombras

Construye con `space-1` a `space-5`, sin valores intermedios. Redondea botones, chips y campos con `radius-sm`; tarjetas, tiles de servicio y burbujas de chat con `radius-md`; y reserva `radius-lg` para paneles hero, banners y recortes de foto. Esa curva generosa es la forma distintiva de la marca. Usa `shadow-sm` para tarjetas y botones en reposo, y `shadow-md` solo en elementos flotantes como el botón de WhatsApp o un modal.

## Imágenes

Usa únicamente fotografías reales y autorizadas de la doctora y sus consultorios. No uses stock, ilustraciones de cuerpos, "antes y después" dramatizados ni nada que explote la inseguridad de una paciente. Recorta retratos e interiores con `radius-lg` y mantén una luz cálida y natural entre las tres sedes para que se lean como una sola práctica.

## Iconografía

Aún no hay set de iconos. Mientras tanto, nombra servicios y sedes con texto en `label`. Si se añade un set, que sea de línea de un solo grosor y esquinas redondeadas, en `ink` o `brand`, sin mezclar iconos rellenos.

## Landing local (implementación)

Abra una terminal en este repositorio y ejecute `python -m http.server 8000 --bind 127.0.0.1`. Visite http://127.0.0.1:8000. No requiere instalación ni compilación. `preview.html` conserva la muestra original del sistema visual.

### Archivos

- `index.html`: contenido semántico, SEO, navegación y estructura.
- `styles.css`: identidad centralizada en variables CSS y diseño responsive.
- `config.js`: sedes, servicios, textos comunes y contacto.
- `app.js`: menú móvil, selección sincronizada y enlaces de WhatsApp.
- `assets/portada.webp`: versión optimizada de la portada autorizada; originales conservados.

### WhatsApp

En `config.js`, sustituya el valor vacío de `whatsapp` exclusivamente por el número oficial confirmado: `+` y entre 8 y 15 dígitos, incluyendo el código de país, sin espacios ni guiones. No se deduce ni añade prefijo. Un valor vacío o inválido muestra “Contacto por WhatsApp próximamente” y no genera enlace. Todos los CTA comparten la función `whatsappUrl` y la sede seleccionada. Una solicitud no confirma una cita. No se recopilan datos personales ni clínicos.

### Imágenes

La portada autorizada fue generada con IA y no se presenta como fotografía real de la doctora. Conserva todo su contenido y no muestra ojos, nariz ni boca. Sus detalles usan vino, lavanda y marfil; el uniforme sigue azul. Queda pendiente un recurso definitivo con la identidad plenamente aprobada. No se usa el monograma provisional como logotipo. Para sustituir la portada, cree una nueva variante WebP en `assets`, actualice `src`, las dimensiones intrínsecas y el texto alternativo en `index.html`; conserve los originales y no reconstruya el rostro. Se carga la portada en el hero; no hay imágenes adicionales fuera de él.

### Decisiones y pendientes internos

- Confirmar el número oficial de WhatsApp y responsables de atención.
- Validar horarios: Apan se superpone con Pachuca los martes y miércoles y con Texcoco los viernes. Se muestran los horarios recibidos con cita previa, sin agenda ni espacios reservables.
- Aprobar precios y componentes de paquetes; aclarar la promoción de mayo y su año. Ninguno se publica.
- Verificar y aprobar credenciales y experiencia; no se publican afirmaciones del onboarding.
- Aprobar identidad y recursos visuales definitivos. La autorización expresa del usuario para el recurso generado y sin rostro prevalece sobre la guía anterior que pedía solo fotografías reales.
- Recibir documentos legales reales y datos confirmados antes de añadir enlaces. No se ha inventado aviso de privacidad.
- El brief incluía Facebook, publicidad y NatalIA; esta implementación se limita al sitio local, sin publicación, rastreadores ni integración de IA.
- Google Fonts carga las familias indicadas por la guía; si no hay conexión, se usan Georgia y fuentes del sistema. No hay otros recursos remotos necesarios para renderizar la página.

### Verificación realizada

- Sitio servido localmente con Python e inspeccionado en navegador integrado a 360 × 800 y 1440 × 1000; sin desbordamiento horizontal.
- Menú móvil y navegación a Sedes, selectores sincronizados, contenido de las tres sedes y enlaces de mapa conforme a las fuentes.
- Navegación por Tab con foco sólido visible y apertura de preguntas frecuentes.
- CTA sin teléfono sin enlaces; verificación temporal de todos los CTA con número de prueba, retirado después. Mensajes codificados comprobados para las tres sedes y formatos inválidos rechazados.
- Imagen completa sin rostro visible, proporciones originales, carga correcta; WebP de 83 KB aproximadamente.
- Sin errores ni advertencias de consola durante la revisión. `git diff --check` sin errores.
- Movimiento reducido implementado mediante media query; su activación por preferencia del sistema no se emuló en el navegador disponible. Los destinos externos de mapas y WhatsApp no se abrieron ni se enviaron mensajes.
