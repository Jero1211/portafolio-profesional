---
name: Portafolio Profesional
description: Estación de ingeniería digital sobria y refinada en modo oscuro con acentos de Índigo Eléctrico (#6366F1) y Menta Esmeralda (#10B981)
colors:
  bg-base: "#0B0D13"
  bg-surface-1: "#11141D"
  bg-surface-2: "#181C28"
  bg-surface-3: "#222738"
  primary: "#6366F1"
  primary-dim: "rgba(99, 102, 241, 0.15)"
  secondary: "#10B981"
  secondary-dim: "rgba(16, 185, 129, 0.15)"
  text-primary: "#F8FAFC"
  text-secondary: "#CBD5E1"
  text-muted: "#94A3B8"
  border-subtle: "rgba(255, 255, 255, 0.08)"
  border-medium: "rgba(255, 255, 255, 0.14)"
  border-highlight: "rgba(99, 102, 241, 0.35)"
typography:
  display:
    fontFamily: "Archivo, -apple-system, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.2rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Archivo, -apple-system, sans-serif"
    fontSize: "clamp(1.5rem, 3.2vw, 2.1rem)"
    fontWeight: 700
    lineHeight: 1.25
  title:
    fontFamily: "Archivo, -apple-system, sans-serif"
    fontSize: "1.3rem"
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
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "10px 18px"
  button-tactile:
    backgroundColor: "{colors.bg-surface-2}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "10px 18px"
---

# Design System: Portafolio Profesional Jero

## Overview
Identidad visual técnica, sobria y sofisticada en modo oscuro obsidiana (`#0B0D13`), inspirada en la estética moderna de herramientas de ingeniería como Linear y Vercel. Incorpora acentos de precisión en Índigo Eléctrico (`#6366F1`) para interacciones primarias y Menta Esmeralda (`#10B981`) para estados activos, métricas y confirmaciones. Respalda el perfil de Jero como estudiante destacado de 6.º semestre que construye software real con rigor técnico y diseño pulido.

## Colors
- **Fondo Base (`--bg-base`):** `#0B0D13` - Negro obsidiana profundo que ancla toda la interfaz con elegancia.
- **Superficies (`--bg-surface-1`, `2`, `3`):** Escala de grises azulados fríos (`#11141D`, `#181C28`, `#222738`) para tarjetas y paneles modulares.
- **Acento Primario (`--accent-primary`):** `#6366F1` - Índigo Eléctrico para botones principales, bordes iluminados y navegación activa.
- **Acento Secundario (`--accent-secondary`):** `#10B981` - Menta Esmeralda para badges de disponibilidad, métricas operativas y estado en vivo.
- **Texto:** `#F8FAFC` (primario de alto contraste), `#CBD5E1` (secundario legible), `#94A3B8` (metadatos con ratio >5:1).

## Typography
- **Fuente Principal:** `Archivo` (Google Fonts) - Tipografía contemporánea con peso sólido y excelente legibilidad.
- **Fuente Técnica / Datos:** `JetBrains Mono` - Para métricas numéricas, tags tecnológicos, rutas de archivos y fragmentos de código.

## Layout
- **Contenedor Principal:** Máximo de `1180px` centrado con padding horizontal de `24px`.
- **Estructura Hero:** Titular personal y cercano ("Hola, soy Jero"), subtítulo que destaca la ingeniería real en 6.º semestre, y el módulo interactivo de demostración de proyectos.
- **Galería de Proyectos:** Grid balanceado con tarjetas de proyecto enriquecidas: badges de estado, descripción del impacto real, stack tecnológico nítido y botones directos a demos y GitHub.

## Elevation & Depth
- Sin halos decorativos de radio cero ni neones excesivos.
- Sombras realistas multidireccionales con desenfoque suave: `0 16px 40px rgba(0, 0, 0, 0.6)` para módulos elevados y `0 4px 14px rgba(0, 0, 0, 0.3)` para botones.

## Shapes
- Bordes nítidos de 1px (`rgba(255, 255, 255, 0.08)` a `0.14`).
- Radios consistentes: `4px` para tags técnicos, `8px` para tarjetas y botones, `14px` para contenedores y paneles.

## Do's and Don'ts
- **DO:** Mantener contraste WCAG AA superior a 4.5:1 en todos los textos funcionales.
- **DO:** Usar SVGs nítidos y vectoriales alineados en flujo con los títulos.
- **DON'T:** Añadir etiquetas "eyebrow" o "kickers" sobre los encabezados h1/h2.
- **DON'T:** Usar sombras de resplandor cromático artificial en fondos oscuros.
- **DON'T:** Usar degradados decorativos en el texto.
