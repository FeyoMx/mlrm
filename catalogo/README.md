# Catálogo informativo / preparación de feed Meta

**Estado:** PENDIENTE de subir las dos imágenes. No importar todavía a Commerce Manager.

Este repositorio usa `assets/` como directorio público de estáticos, NO `public/catalogo/` para despliegues. GitHub Pages copia `assets/` a `https://feyomx.github.io/mlrm/assets/`; la web del dominio principal está en un VPS y se actualiza manualmente.

## Imágenes por colocar en `assets/catalogo/`

- `costos-consulta-dra-martha-laura-ramirez-montiel.png`: costos de primera consulta y subsecuente.
- `paquete-papanicolaou-colposcopia-consulta-dra-martha-laura-ramirez-montiel.png`: paquete Papanicolaou + Colposcopia + Consulta.

Las imágenes originales se encuentran en los artefactos del chat de ChatGPT correspondiente al catálogo de la doctora, pero **no se han publicado en este repositorio**.

## Feed para Meta

`meta-feed-PENDIENTE.csv` contiene solo tres servicios y usa precios regulares. Los descuentos por pago en efectivo se describen en texto; no se representan como `sale_price` general porque solo aplican bajo esa condición.

Para que los `image_link` funcionen, publicar primero los dos PNG y verificar HTTP 200 y tipo de contenido `image/png` en GitHub Pages.

**Restricción:** las políticas comerciales de Meta restringen la comercialización de servicios médicos y artículos de salud; completar el feed no garantiza aprobación para el catálogo de WhatsApp.

## Publicación VPS (separada)

El dominio `https://draramirezmontiel.fmxaiflows.online/` se sirve desde `/opt/mlrm/public` en VPS, contenedor `mlrm-landing`. Subir al repositorio no lo despliega. Si se desea servir las mismas imágenes desde ese dominio, sincronizar `assets/catalogo/` al volumen web tras respaldo y validar enlaces.
