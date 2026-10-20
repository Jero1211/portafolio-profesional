# Jero &bull; Portafolio Profesional

> **Desarrollador Web & Móvil en Formación**  
> Estudiante de 6.º semestre de Ingeniería de Software &bull; Corporación Universitaria Lasallista (UniLasallista)  
> Medellín, Colombia &bull; [GitHub: @Jero1211](https://github.com/Jero1211) &bull; Correo: `aztracto8@gmail.com`  
> 🌐 **Sitio Web en Producción:** [https://jero1211.github.io/portafolio-profesional/](https://jero1211.github.io/portafolio-profesional/)

![HTML5](https://img.shields.io/badge/HTML5-Sem%C3%A1ntico-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Moderno-1572B6?style=flat-square&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-brightgreen?style=flat-square&logo=github)
![Rendimiento](https://img.shields.io/badge/Lighthouse-95%2B-brightgreen?style=flat-square)

---

## 📌 Sobre el Portafolio &amp; Rúbrica de Evaluación

Este repositorio contiene el código fuente de mi **Portafolio Profesional**, estructurado bajo los lineamientos académicos de la asignatura de **Desarrollo Web (Parcial 2 - Prof. Néstor Vélez Vargas)** en UniLasallista, integrando el framework responsive **Bootstrap 5** y dando cumplimiento a todas las secciones exigidas:

1. **Información Personal:** Perfil, ubicación y canales de contacto directo.
2. **Estudios Realizados:** Formación superior universitaria, educación media y autoformación.
3. **Proyectos:** SIS-TERREMOTO, Turismo Medellín, CaddiePro y CampusAudit PRO.
4. **Lenguajes de Programación:** JavaScript ES6+, TypeScript, HTML5/CSS3 y SQL.
5. **Áreas de Interés Profesional:** Frontend Web, Móvil Híbrido, Backend/APIs e IA Aplicada.

---

## 🚀 Proyectos Prácticos Destacados

El portafolio incluye un módulo interactivo en el Hero y una galería detallada que enlaza a mis cuatro proyectos principales:

### 1. [SIS-TERREMOTO &bull; Centro de Operaciones Offline](https://github.com/Jero1211/sis-terremoto)
- **Descripción:** Sistema táctico de evacuación y triaje médico **START** para emergencias sísmicas en UniLasallista. Diseñado bajo arquitectura **100% Offline-First** para operar sin internet ni redes celulares.
- **Tecnologías:** JavaScript Vanilla, Persistencia LocalStorage, SheetJS (Excel), Web Audio API, Node.js y Cloudflare Tunnel.

### 2. [Turismo Medellín &bull; MDE Explora](https://github.com/Jero1211/Turismo) *(Demo en vivo disponible)*
- **Descripción:** Plataforma web interactiva para descubrir atractivos culturales y naturales de Medellín, con planificador dinámico de rutas y asistente virtual integrado.
- **Tecnologías:** React 19, Vite, React Router 7, Lucide Icons y despliegue en **GitHub Pages**.
- **Enlace Demo:** [jero1211.github.io/Turismo](https://jero1211.github.io/Turismo/)

### 3. [CaddiePro &bull; Horarios y Becarios](https://github.com/Jero1211/caddiepro-app-horarios)
- **Descripción:** Plataforma web Full-Stack desarrollada para apoyar la gestión, asignación de turnos y control de asistencia de la **Fundación Club Campestre de Medellín y Llanogrande**.
- **Tecnologías:** Node.js, Express, MongoDB, Mongoose, importación de Excel (`xlsx`), generación de reportes en PDF y suite de pruebas en Postman.

### 4. [CampusAudit PRO &bull; MicroApp](https://github.com/Jero1211/microapp-inspecciones)
- **Descripción:** Microapp móvil híbrida para el registro de inspecciones técnicas de aulas y laboratorios en UniLasallista, con clasificación por criticidad y empaquetado para Android.
- **Tecnologías:** Ionic 9, Angular, Capacitor 8, TypeScript y persistencia local offline con `@capacitor/preferences`.

---

## 🛠️ Decisiones de Arquitectura del Portafolio

1. **Cero Dependencias Externas:** Construido 100% con HTML5 semántico, CSS3 moderno (Custom Properties, Flexbox, CSS Grid) y JavaScript ES6+ modular. Cero frameworks pesados para garantizar una velocidad de carga instantánea.
2. **Módulo de Hardware Virtual (Interactive Specimen):** Visor en el Hero que permite alternar fluidamente entre los proyectos con transiciones suaves de imágenes y sincronización de metadatos.
3. **Accesibilidad y Contraste WCAG AA:** Esquema oscuro (*dark mode*) de alto contraste basado en acentos **Electric Indigo (#6366F1)** y **Mint Emerald (#10B981)**.
4. **Diseño Mobile-First & Responsivo:** Adaptación completa a pantallas de celulares, tablets y monitores ultrawide.
5. **Formulario Interactivo con Copiado Rápido:** Canales de contacto directos con botón interactivo para copiar el correo electrónico al portapapeles.

---

## 📁 Estructura del Repositorio

```text
├── assets/
│   └── projects/               # Capturas reales de pantalla de los 4 proyectos
│       ├── caddiepro-dashboard.png
│       ├── campus-audit-real.png
│       ├── sis-terremoto-real.png
│       └── turismo-medellin.png
├── app.js                      # Lógica interactiva del visor de proyectos y formulario
├── index.html                  # Estructura semántica completa del sitio
├── styles.css                  # Sistema de diseño, variables CSS y animaciones
├── .gitignore                  # Exclusiones de Git
└── README.md                   # Documentación del portafolio
```

---

## 💻 Visualización y Ejecución Local

No requiere ningún proceso de instalación previo. Puedes clonar y abrirlo de dos formas:

### Opción 1: Abrir directamente en el navegador
Haz doble clic sobre el archivo `index.html` o usa la extensión **Live Server** de Visual Studio Code.

### Opción 2: Iniciar servidor local ligero (Node.js o Python)
```bash
# Con Python:
python -m http.server 8080

# Con Node.js (npx serve):
npx -y serve .
```
Abre tu navegador en `http://localhost:8080` para explorarlo.

---

## 📬 Contacto y Redes

- **Desarrollador:** Jero
- **GitHub:** [@Jero1211](https://github.com/Jero1211)
- **Correo Electrónico:** [aztracto8@gmail.com](mailto:aztracto8@gmail.com)
- **Ubicación:** Medellín, Antioquia, Colombia
- **Disponibilidad:** Abierto a prácticas universitarias y oportunidades como desarrollador web/móvil junior.
