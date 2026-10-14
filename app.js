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
      description: 'Sistema táctico de respuesta rápida ante sismos con arquitectura 100% Offline-First, triaje médico START, censo en tiempo real y georreferenciación para rescate.',
      tags: ['Arquitectura Offline', 'Triaje START', 'Cloudflare Tunnel', 'Resiliencia Táctica'],
      demoUrl: '#proyectos',
      githubUrl: 'https://github.com/Jero1211',
      metrics: {
        nodes: '100% Offline',
        paint: '0.12s',
        score: 'Resiliencia: Crítica'
      },
      bars: ['85%', '95%', '100%', '90%', '75%', '92%', '98%']
    },
    {
      title: 'CaddiePro',
      filename: 'caddiepro-server.js',
      description: 'Plataforma Full-Stack para la Fundación Club Campestre: gestión de horarios de caddies y becarios, importación de Excel, reportes PDF y API REST en Node.js.',
      tags: ['Node.js', 'Express', 'MongoDB', 'PDF Engine', 'Excel Importer'],
      demoUrl: '#proyectos',
      githubUrl: 'https://github.com/Jero1211/caddiepro-app-horarios',
      metrics: {
        nodes: 'Full-Stack',
        paint: '0.24s',
        score: 'API REST 60 req/s'
      },
      bars: ['60%', '75%', '85%', '95%', '70%', '80%', '90%']
    },
    {
      title: 'Turismo Medellín',
      filename: 'turismo-medellin.jsx',
      description: 'Plataforma web interactiva para la exploración y recomendación turística de Medellín. Desarrollada en React 19, Vite y React Router, desplegada en GitHub Pages.',
      tags: ['React 19', 'Vite', 'React Router', 'Lucide Icons', 'GitHub Pages'],
      demoUrl: 'https://jero1211.github.io/Turismo',
      githubUrl: 'https://github.com/Jero1211/Turismo',
      metrics: {
        nodes: 'React 19 SPA',
        paint: '0.18s',
        score: 'Lighthouse: 100/100'
      },
      bars: ['70%', '85%', '65%', '92%', '88%', '95%', '100%']
    }
  ];

  const tabs = document.querySelectorAll('.project-tabs .tab-btn');
  const titleEl = document.getElementById('project-title');
  const descEl = document.getElementById('project-desc');
  const tagsEl = document.getElementById('project-tags');
  const filenameEl = document.getElementById('screen-filename');
  const barsEl = document.querySelectorAll('.sim-chart-area .bar');
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

      // Animate Bar heights
      barsEl.forEach((bar, i) => {
        if (data.bars[i]) {
          bar.style.setProperty('--height', data.bars[i]);
        }
      });
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
