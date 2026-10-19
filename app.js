/**
 * Portafolio Profesional - Interactive Logic
 * Vanilla JavaScript (ES6+), zero external dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  initSpecimenShowcase();
  initContactForm();
  initEmailCopy();
  initScrollSpy();
});

/**
 * Specimen Hardware Module - Interactive Project Switcher
 */
function initSpecimenShowcase() {
  const projectsData = [
    {
      title: 'SIS-TERREMOTO',
      filename: 'sis-terremoto-core.js',
      image: 'assets/projects/sis-terremoto-real.png',
      alt: 'Captura real de SIS-TERREMOTO - Centro de Operaciones Offline',
      badge: '100% OFFLINE READY',
      badgeClass: 'badge-emerald',
      statusPill: 'OFFLINE READY',
      description: 'Proyecto universitario para UniLasallista. Construido con JavaScript y apoyo de herramientas de IA para explorar la persistencia local y el registro de triaje START 100% offline ante emergencias.',
      tags: ['JavaScript', 'Persistencia Offline', 'Triaje START', 'Desarrollo con IA'],
      demoUrl: '#sis-terremoto',
      githubUrl: 'https://github.com/Jero1211/sis-terremoto'
    },
    {
      title: 'CaddiePro',
      filename: 'caddiepro-server.js',
      image: 'assets/projects/caddiepro-dashboard.png',
      alt: 'Captura real de CaddiePro - Dashboard Fundación Club Campestre',
      badge: 'NODE.JS + MONGODB',
      badgeClass: 'badge-indigo',
      statusPill: 'PRÁCTICA FULL-STACK',
      description: 'Aplicación web desarrollada para la Fundación Club Campestre. Utilicé Node.js, Express y MongoDB con apoyo de IA para la gestión de turnos, importación de Excel y reportes PDF.',
      tags: ['Node.js', 'Express', 'MongoDB', 'Lectura de Excel', 'Reportes PDF'],
      demoUrl: '#caddiepro',
      githubUrl: 'https://github.com/Jero1211/caddiepro-app-horarios'
    },
    {
      title: 'Turismo Medellín',
      filename: 'turismo-ai-planner.jsx',
      image: 'assets/projects/turismo-medellin.png',
      alt: 'Captura en vivo de Turismo Medellín - React + Asistente IA',
      badge: 'REACT + VITE LIVE',
      badgeClass: 'badge-cyan',
      statusPill: 'GITHUB PAGES LIVE',
      description: 'Plataforma web turística interactiva construida en React y Vite. Incluye planificador de rutas y asistente de viaje, publicada y funcional en GitHub Pages.',
      tags: ['React', 'Vite', 'Asistente IA', 'Planificador Rutas', 'GitHub Pages'],
      demoUrl: 'https://jero1211.github.io/Turismo',
      githubUrl: 'https://github.com/Jero1211/Turismo'
    },
    {
      title: 'CampusAudit PRO',
      filename: 'campus-audit-mobile.ts',
      image: 'assets/projects/campus-audit-real.png',
      alt: 'Captura real de CampusAudit PRO - Formulario de Auditoría en Campo',
      badge: 'IONIC + CAPACITOR',
      badgeClass: 'badge-yellow',
      statusPill: 'APP MÓVIL HÍBRIDA',
      description: 'Microapp móvil para auditorías en UniLasallista. Construida con Ionic y Capacitor con asistencia de IA para registrar inspecciones y persistir datos localmente en dispositivos móviles.',
      tags: ['Ionic', 'Capacitor', 'Angular', 'Persistencia Local', 'Desarrollo Móvil'],
      demoUrl: '#campus-audit',
      githubUrl: 'https://github.com/Jero1211/microapp-inspecciones'
    }
  ];

  const tabs = document.querySelectorAll('.project-tabs .tab-btn');
  const titleEl = document.getElementById('project-title');
  const descEl = document.getElementById('project-desc');
  const tagsEl = document.getElementById('project-tags');
  const filenameEl = document.getElementById('screen-filename');
  const statusPillEl = document.getElementById('screen-status-pill');
  const imgEl = document.getElementById('screen-mockup-img');
  const badgeOverlayEl = document.getElementById('screen-badge-overlay');
  const badgeTextEl = document.getElementById('screen-badge-text');
  const demoBtn = document.getElementById('project-demo-btn');
  const githubBtn = document.getElementById('project-github-btn');

  if (!tabs.length || !titleEl) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const index = parseInt(tab.getAttribute('data-index'), 10);
      const data = projectsData[index];
      if (!data) return;

      // Update active tab button
      tabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Update Project info
      titleEl.textContent = data.title;
      descEl.textContent = data.description;
      filenameEl.textContent = data.filename;

      if (statusPillEl && data.statusPill) {
        statusPillEl.textContent = data.statusPill;
      }

      // Smooth Image Switch with Cross-fade
      if (imgEl && data.image) {
        imgEl.classList.add('fade-out');
        setTimeout(() => {
          imgEl.src = data.image;
          imgEl.alt = data.alt;
          imgEl.classList.remove('fade-out');
        }, 150);
      }

      // Update Badge
      if (badgeTextEl && data.badge) {
        badgeTextEl.textContent = data.badge;
      }
      if (badgeOverlayEl && data.badgeClass) {
        badgeOverlayEl.className = 'screen-badge-overlay ' + data.badgeClass;
      }

      // Update Tags
      tagsEl.innerHTML = '';
      data.tags.forEach((tagText) => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tagText;
        tagsEl.appendChild(tag);
      });

      // Update Links
      demoBtn.setAttribute('href', data.demoUrl);
      githubBtn.setAttribute('href', data.githubUrl);
    });
  });
}

/**
 * Email Quick Copy with Visual Feedback
 */
function initEmailCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  const emailLink = document.getElementById('email-link');

  if (!copyBtn || !emailLink) return;

  copyBtn.addEventListener('click', async () => {
    const email = emailLink.textContent.trim();
    const copyText = copyBtn.querySelector('.copy-text');

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      const originalText = copyText.textContent;
      copyText.textContent = '¡Copiado!';
      copyBtn.style.borderColor = 'var(--status-green)';
      copyBtn.style.color = '#7ee787';

      setTimeout(() => {
        copyText.textContent = originalText;
        copyBtn.style.borderColor = '';
        copyBtn.style.color = '';
      }, 2000);
    } catch (err) {
      console.warn('Error al copiar correo:', err);
    }
  });
}

/**
 * Contact Form Client Validation & Feedback
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const nameInput = form.querySelector('#form-name');
    const emailInput = form.querySelector('#form-email');
    const subjectInput = form.querySelector('#form-subject');
    const messageInput = form.querySelector('#form-message');

    // Reset error states
    form.querySelectorAll('.form-group').forEach((g) => g.classList.remove('has-error'));

    // Validate Name
    if (!nameInput.value.trim()) {
      nameInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      subjectInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      messageInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    if (isValid) {
      const submitBtn = document.getElementById('form-submit-btn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Enviando mensaje...</span>';

      setTimeout(() => {
        feedback.className = 'form-feedback success';
        feedback.textContent = '¡Mensaje preparado con éxito! Gracias por comunicarte, te responderé en breve.';
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>Enviar Mensaje Directo</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        `;
      }, 700);
    }
  });
}

/**
 * ScrollSpy for Navigation Highlighting
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav .nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    },
    {
      rootMargin: '-30% 0px -70% 0px'
    }
  );

  sections.forEach((section) => observer.observe(section));
}
