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

En Windows también puede ejecutar `powershell -ExecutionPolicy Bypass -File .\iniciar.ps1`. El script detecta un Python funcional (incluido el runtime local de Codex cuando existe), sirve este repositorio y mantiene la terminal abierta hasta presionar Ctrl+C. Para otro puerto use `-Puerto 8001` y abra http://127.0.0.1:8001. Abrir `index.html` directamente como archivo no sustituye el servidor: la página carga módulos JavaScript mediante HTTP.

Diagnóstico del 12 de octubre de 2026: el Python 3.13 del sistema falló al localizar su instalación; el servidor ejecutado dentro del aislamiento tampoco fue accesible desde el navegador. Con Python 3.12 del runtime y ejecución local fuera del aislamiento, la landing abrió correctamente en el puerto 8001 y mostró los 21 servicios.

### Archivos

- `index.html`: contenido semántico, SEO, navegación y estructura.
- `styles.css`: identidad centralizada en variables CSS y diseño responsive.
- `config.js`: sedes, servicios, textos comunes y contacto.
- `app.js`: menú móvil, selección sincronizada y enlaces de WhatsApp.
- `assets/portada.webp`: versión optimizada de la portada autorizada; originales conservados.

### Catálogo de servicios

El catálogo de `config.js` contiene los 21 servicios solicitados por el usuario el 12 de octubre de 2026, sin duplicados. Se añadieron 13 a los 8 existentes, conservando el diseño y las descripciones administrativas. La vacunación contra VPH indica que las existencias y condiciones de aplicación están sujetas a confirmación. La interpretación de ultrasonidos de mamas y mastografías se ofrece durante la consulta para estudios que la paciente lleve consigo; su realización corresponde a un médico radiólogo en laboratorio o centro de diagnóstico. La disponibilidad de cada servicio se consulta por WhatsApp; no se atribuye disponibilidad específica a una sede.

Verificación de esta actualización: módulo ejecutado con Node.js, 21 servicios únicos, mensajes de WhatsApp correspondientes a las tres sedes y contacto vacío sin enlace; `git diff --check` correcto. La revisión visual móvil y de escritorio de esta actualización quedó pendiente: el navegador integrado no pudo conectar al servidor local (timeout) y la comprobación HTTP desde Node.js recibió `EACCES`.

### WhatsApp

El usuario confirmó el número oficial de WhatsApp Business y su código de país (México) el 11 de octubre de 2026: `+527711249845`. Está configurado en `config.js`. Para cambiar `whatsapp`, use exclusivamente un número oficial confirmado: `+` y entre 8 y 15 dígitos, incluyendo el código de país, sin espacios ni guiones. No se deduce ni añade prefijo. Un valor vacío o inválido muestra “Contacto por WhatsApp próximamente” y no genera enlace. Todos los CTA comparten la función `whatsappUrl` y la sede seleccionada. Una solicitud no confirma una cita. No se recopilan datos personales ni clínicos.

### Imágenes

La portada autorizada fue generada con IA y no se presenta como fotografía real de la doctora. Conserva todo su contenido y no muestra ojos, nariz ni boca. Sus detalles usan vino, lavanda y marfil; el uniforme sigue azul. Queda pendiente un recurso definitivo con la identidad plenamente aprobada. No se usa el monograma provisional como logotipo. Para sustituir la portada, cree una nueva variante WebP en `assets`, actualice `src`, las dimensiones intrínsecas y el texto alternativo en `index.html`; conserve los originales y no reconstruya el rostro. Se carga la portada en el hero; no hay imágenes adicionales fuera de él.

### Decisiones y pendientes internos

- Confirmar responsables y horarios de atención de WhatsApp; el número oficial ya está confirmado.
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

### Despliegue con GitHub Pages

El flujo `.github/workflows/pages.yml` prepara únicamente `index.html`, `styles.css`, `app.js`, `config.js` y `assets/` como artefacto público; no incluye README, brief, AGENTS ni imágenes originales. Se ejecuta al cambiar archivos del sitio en `main` o manualmente desde Actions. Usa el entorno `github-pages` y requiere configurar Pages con origen GitHub Actions.

Intento del 1 de octubre de 2026: GitHub rechazó habilitar Pages (HTTP 422) porque el plan actual no admite Pages para este repositorio privado. El sitio no se desplegó. Se requiere un plan compatible o autorización expresa para cambiar la visibilidad del repositorio; hacerlo público también expondría documentos internos e historial. La autorización posterior del usuario permitió hacer público el repositorio y habilitar Pages. URL asignada: https://feyomx.github.io/mlrm/.

