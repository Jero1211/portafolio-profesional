---
name: Portafolio Profesional
description: Estación de ingeniería digital de precisión en modo oscuro con acentos cian y cobre
colors:
  bg-base: "#07090E"
  bg-surface-1: "#0D1117"
  bg-surface-2: "#161B22"
  bg-surface-3: "#21262D"
  primary: "#00F0FF"
  primary-dim: "rgba(0, 240, 255, 0.15)"
  secondary: "#E58B35"
  secondary-dim: "rgba(229, 139, 53, 0.15)"
  text-primary: "#F0F6FC"
  text-secondary: "#B1BAC4"
  text-muted: "#8C96A3"
  border-subtle: "rgba(255, 255, 255, 0.08)"
  border-medium: "rgba(255, 255, 255, 0.16)"
  border-highlight: "rgba(0, 240, 255, 0.35)"
typography:
  display:
    fontFamily: "Archivo, -apple-system, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.4rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo, -apple-system, sans-serif"
    fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)"
    fontWeight: 800
    lineHeight: 1.2
  title:
    fontFamily: "Archivo, -apple-system, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
  body:
    fontFamily: "Archivo, -apple-system, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.6
  code:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.85rem"
rounded:
  sm: "4px"
  md: "8px"
  lg: "14px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "72px"
  "4xl": "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg-base}"
    rounded: "{rounded.md}"
    padding: "10px 18px"
  button-tactile:
    backgroundColor: "{colors.bg-surface-2}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "10px 18px"
---

# Design System: Portafolio Profesional

## Overview
Identidad visual de alta ingeniería en modo oscuro obsidiana (`#07090E`), inspirada en instrumentación de hardware de precisión y placas de circuitos con trazas lógicas en cian (`#00F0FF`) y acentos de cobre (`#E58B35`). Rechaza las plantillas genéricas de portafolio y los clichés de IA (sin kickers encima de títulos, sin halos de resplandor falsos, sin degradados en texto) en favor de contrastes limpios WCAG AA, tipografía asertiva y jerarquía funcional.

## Colors
- **Fondo Base (`--bg-base`):** `#07090E` - Negro obsidiana profundo que ancla toda la interfaz.
- **Superficies (`--bg-surface-1`, `2`, `3`):** Escala de grises azulados fríos (`#0D1117`, `#161B22`, `#21262D`) para tarjetas y paneles modulares.
- **Acento Primario (`--accent-cyan`):** `#00F0FF` - Cian eléctrico para interactivos activos, enlaces prioritarios y datos dinámicos.
- **Acento Secundario (`--accent-copper`):** `#E58B35` - Cobre técnico cálido para métricas de hardware y estados complementarios.
- **Texto:** `#F0F6FC` (primario de alto contraste), `#B1BAC4` (secundario legible), `#8C96A3` (metadatos con ratio >5:1).

## Typography
- **Fuente Principal:** `Archivo` (Google Fonts) - Grotesque autoritario y contemporáneo con pesos desde 400 hasta 800.
- **Fuente Técnica / Datos:** `JetBrains Mono` - Para nombres de archivos, métricas numéricas, tags y bloques de código.

## Layout
- **Contenedor Principal:** Máximo de `1180px` centrado con padding horizontal de `24px`.
- **Estructura Asimétrica:** La sección hero presenta el módulo de hardware central con trazas laterales. La sección de proyectos utiliza una tarjeta principal de ancho completo y tarjetas secundarias compactas para romper la monotonía de cuadrículas idénticas.

## Elevation & Depth
- Sin halos decorativos de radio cero ni neones artificiales.
- Sombras realistas multidireccionales con desenfoque suave: `0 16px 44px rgba(0, 0, 0, 0.7)` para módulos elevados y `0 4px 14px rgba(0, 0, 0, 0.4)` para botones.

## Shapes
- Bordes nítidos de 1px (`rgba(255, 255, 255, 0.08)` a `0.16`).
- Radios consistentes: `4px` para tags y detalles mecánicos, `8px` para tarjetas y botones, `14px` para paneles grandes y módulos.

## Components
- **Módulo Specimen Central:** Marco con tornillos en las esquinas, pantalla interactiva simulada a 60 FPS con selector de proyectos por pestañas.
- **Botones Táctiles:** Elevación sutil al hacer hover (`translateY(-1px)`) con bordes iluminados y anillo de foco visible (`:focus-visible`).
- **Formulario de Contacto:** Entradas con foco en cian, validación visual en tiempo real y mensaje de confirmación accesible.

## Do's and Don'ts
- **DO:** Mantener contraste WCAG AA superior a 4.5:1 en todos los textos funcionales.
- **DO:** Usar SVGs nítidos y vectoriales alineados en flujo con los títulos.
- **DON'T:** Añadir etiquetas "eyebrow" o "kickers" sobre los encabezados h1/h2.
- **DON'T:** Usar sombras de resplandor cromático artificial en fondos oscuros.
- **DON'T:** Usar degradados decorativos en el texto.
