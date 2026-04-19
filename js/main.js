/* ============================================================
   WELKOMME-INN — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── SCROLL PROGRESS BAR ─────────────────────────────────── */
  const progressBar = document.getElementById('scroll-progress');
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (scrollTop / docHeight * 100) + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });

  /* ── HEADER SCROLL STATE ─────────────────────────────────── */
  const header = document.getElementById('header');
  function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', updateHeader, { passive: true });

  /* ── MOBILE MENU ─────────────────────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay    = document.getElementById('mobileOverlay');

  function openMenu() {
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
    overlay.style.display = 'block';
    requestAnimationFrame(() => overlay.classList.add('open'));
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { overlay.style.display = 'none'; }, 300);
  }

  hamburger.addEventListener('click', openMenu);
  overlay.addEventListener('click', closeMenu);
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* ── SMOOTH SCROLL ───────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--header-h')) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── SCROLL SPY (active nav links) ──────────────────────── */
  const navLinks  = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections  = Array.from(navLinks)
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  function updateActiveNav() {
    const scrollY = window.scrollY + 100;
    let current = null;
    sections.forEach(section => {
      if (section.offsetTop <= scrollY) current = section.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  /* ── REVEAL ON SCROLL ────────────────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ── STATS COUNTER ───────────────────────────────────────── */
  function animateCounter(el, target, suffix, duration = 1400) {
    let start = 0;
    const step = timestamp => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('[data-count]').forEach(el => {
        animateCounter(el, +el.dataset.count, el.dataset.suffix || '');
      });
      statsObserver.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  const statsStrip = document.querySelector('.stats-strip');
  if (statsStrip) statsObserver.observe(statsStrip);

  /* ── RATING BARS ─────────────────────────────────────────── */
  const barsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.rb-fill[data-width]').forEach(bar => {
        setTimeout(() => { bar.style.width = bar.dataset.width; }, 200);
      });
      barsObserver.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  const ratingBox = document.querySelector('.rating-box');
  if (ratingBox) barsObserver.observe(ratingBox);

  /* ── TESTIMONIAL CAROUSEL ────────────────────────────────── */
  function getTestimonials() {
    const lang = localStorage.getItem('wi_lang') || 'en';
    return window.translations?.[lang]?.testimonials
        || window.translations?.en?.testimonials
        || [];
  }

  let currentIdx = 0;
  let autoAdvance;

  const quoteEl   = document.getElementById('testimonialQuote');
  const starsEl   = document.getElementById('testimonialStars');
  const nameEl    = document.getElementById('testimonialName');
  const locEl     = document.getElementById('testimonialLoc');
  const roleEl    = document.getElementById('testimonialRole');
  const avatarEl  = document.getElementById('testimonialAvatar');
  const dotsEl    = document.getElementById('testimonialDots');

  function renderStars(n) {
    return Array.from({ length: 5 }, (_, i) =>
      `<svg viewBox="0 0 24 24" fill="${i < n ? '#111' : 'none'}" stroke="#111" stroke-width="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>`
    ).join('');
  }

  function buildDots() {
    if (!dotsEl) return;
    const items = getTestimonials();
    dotsEl.innerHTML = items.map((_, i) =>
      `<span class="t-dot ${i === 0 ? 'active' : ''}" data-idx="${i}"></span>`
    ).join('');
    dotsEl.querySelectorAll('.t-dot').forEach(dot => {
      dot.addEventListener('click', () => showTestimonial(+dot.dataset.idx));
    });
  }

  function showTestimonial(idx, animated = true) {
    const items = getTestimonials();
    const item = items[idx];
    if (!item) return;
    if (animated && quoteEl) {
      quoteEl.style.opacity = '0';
      quoteEl.style.transform = 'translateY(10px)';
    }
    setTimeout(() => {
      if (starsEl)  starsEl.innerHTML     = renderStars(item.stars);
      if (quoteEl)  quoteEl.textContent   = item.quote;
      if (nameEl)   nameEl.textContent    = item.name;
      if (locEl)    locEl.textContent     = item.loc;
      if (roleEl)   roleEl.textContent    = item.role;
      if (avatarEl) {
        avatarEl.style.background = item.color;
        avatarEl.textContent      = item.name.charAt(0);
      }
      if (quoteEl) {
        quoteEl.style.transition = 'opacity 0.4s, transform 0.4s';
        quoteEl.style.opacity    = '1';
        quoteEl.style.transform  = 'translateY(0)';
      }
      dotsEl?.querySelectorAll('.t-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === idx);
      });
    }, animated ? 150 : 0);

    currentIdx = idx;
    resetAutoAdvance();
  }

  function nextTestimonial() {
    showTestimonial((currentIdx + 1) % getTestimonials().length);
  }
  function prevTestimonial() {
    showTestimonial((currentIdx - 1 + getTestimonials().length) % getTestimonials().length);
  }

  function resetAutoAdvance() {
    clearInterval(autoAdvance);
    autoAdvance = setInterval(nextTestimonial, 6000);
  }

  document.getElementById('prevReview')?.addEventListener('click', prevTestimonial);
  document.getElementById('nextReview')?.addEventListener('click', nextTestimonial);

  document.addEventListener('langchange', () => {
    buildDots();
    showTestimonial(0, false);
  });

  buildDots();
  showTestimonial(0, false);

  /* ── FAQ ACCORDION ───────────────────────────────────────── */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // close all
      document.querySelectorAll('.faq-item.open').forEach(open => {
        open.classList.remove('open');
        open.querySelector('.faq-answer').style.maxHeight = '0';
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ── CONTACT FORM VALIDATION ─────────────────────────────── */
  const form        = document.getElementById('contactForm');
  const formWrap    = document.querySelector('.contact-form-inner');
  const formSuccess = document.querySelector('.form-success');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function setError(group, msg) {
    group.classList.add('has-error');
    const field = group.querySelector('input, select, textarea');
    if (field) field.classList.add('error');
    const errEl = group.querySelector('.error-msg');
    if (errEl) errEl.textContent = msg;
  }
  function clearError(group) {
    group.classList.remove('has-error');
    const field = group.querySelector('input, select, textarea');
    if (field) field.classList.remove('error');
  }

  // Live clear on input
  form?.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => clearError(field.closest('.form-group')));
  });

  form?.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    const nameGroup  = form.querySelector('[data-field="name"]');
    const emailGroup = form.querySelector('[data-field="email"]');
    const msgGroup   = form.querySelector('[data-field="message"]');

    const nameVal  = form.querySelector('#fname')?.value.trim();
    const emailVal = form.querySelector('#femail')?.value.trim();
    const msgVal   = form.querySelector('#fmessage')?.value.trim();

    clearError(nameGroup); clearError(emailGroup); clearError(msgGroup);

    if (!nameVal) { setError(nameGroup, 'Please enter your name.'); valid = false; }
    if (!emailVal) { setError(emailGroup, 'Please enter your email address.'); valid = false; }
    else if (!validateEmail(emailVal)) { setError(emailGroup, 'Please enter a valid email address.'); valid = false; }
    if (!msgVal) { setError(msgGroup, 'Please tell us a bit about your property or question.'); valid = false; }

    if (!valid) return;

    // Simulate submission
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Sending…';
    btn.disabled    = true;

    setTimeout(() => {
      if (formWrap)    formWrap.style.display    = 'none';
      if (formSuccess) formSuccess.style.display = 'block';
    }, 1200);
  });

  /* ── HERO PARALLAX (GSAP ScrollTrigger) ─────────────────── */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Subtle zoom-in on load (scale 1.06 → 1 over 6s)
    gsap.from('.hero-image', {
      scale: 1.06,
      duration: 6,
      ease: 'power2.out'
    });

    // Scroll parallax: image moves UP slower than the page scrolls,
    // so the visible hero area is always fully covered — no gap on scroll up or down.
    gsap.to('.hero-image', {
      yPercent: 15,   // move image DOWN 15% as hero exits upward — gap stays off-screen
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2      // slight lag for a silky feel
      }
    });
  }

  /* ── BACK TO TOP ─────────────────────────────────────────── */
  const backTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    backTop?.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

});
