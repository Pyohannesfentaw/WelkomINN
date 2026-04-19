/**
 * WELKOMME-INN — i18n Language System
 * ─────────────────────────────────────────────────────────────
 * Zero dependencies. Vanilla JS only.
 *
 * HOW IT WORKS
 * ────────────
 * 1. HTML elements carry a data-i18n="key" attribute.
 *    The system reads each key, looks it up in window.translations,
 *    and sets the element's innerHTML.
 *
 * 2. For form inputs that need placeholder text:
 *    data-i18n-placeholder="key"
 *
 * 3. For aria-label attributes (accessibility):
 *    data-i18n-aria="key"
 *
 * 4. The active language is saved in localStorage so the user's
 *    choice persists across page loads.
 *
 * 5. If a key is missing in the chosen language, it falls back
 *    to English automatically.
 *
 * 6. A custom DOM event ("langchange") is dispatched after every
 *    language switch. Other scripts (e.g. main.js for testimonials)
 *    can listen for it to re-render dynamic content.
 *
 * WORDPRESS NOTE
 * ──────────────
 * When converting to a WordPress theme, enqueue this file with
 * wp_enqueue_script() AFTER translations.js and BEFORE main.js.
 * The window.translations object replaces the need for any plugin.
 *
 * SCALING TIP
 * ───────────
 * When translations.js gets large, split into per-language files:
 *   i18n/en.js, i18n/pt.js, i18n/es.js
 * Each file sets window.translations[lang] = { ... }.
 * Load them all before this file runs.
 */

(function () {
  'use strict';

  /* ── Config ─────────────────────────────────────────────── */
  const SUPPORTED = ['en', 'pt', 'es'];
  const DEFAULT   = 'en';
  const STORE_KEY = 'wi_lang';       // localStorage key

  /* ── Core helper: look up a translation key ─────────────── */
  function t(key, lang) {
    const strings = window.translations;
    if (!strings) return key;

    // Try requested language first, fall back to English, then key itself
    return strings[lang]?.[key]
        || strings[DEFAULT]?.[key]
        || key;
  }

  /* ── Apply all translations to the DOM ──────────────────── */
  function applyTranslations(lang) {

    // 1. innerHTML text content  →  data-i18n="key"
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      el.innerHTML = t(key, lang);
    });

    // 2. Placeholder attributes  →  data-i18n-placeholder="key"
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', t(key, lang));
    });

    // 3. Aria-label attributes   →  data-i18n-aria="key"
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', t(key, lang));
    });
  }

  /* ── Update the active state on language buttons ─────────── */
  function updateButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang);
    });
  }

  /* ── Public: switch language ─────────────────────────────── */
  function setLanguage(lang) {
    // Sanitise — fall back to default if unsupported
    if (!SUPPORTED.includes(lang)) lang = DEFAULT;

    // Persist choice
    localStorage.setItem(STORE_KEY, lang);

    // Update <html lang="…">
    document.documentElement.setAttribute('lang', lang);

    // Translate everything
    applyTranslations(lang);

    // Highlight active button
    updateButtons(lang);

    // Notify other scripts (e.g. testimonial carousel in main.js)
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  /* ── Get current language ────────────────────────────────── */
  function getCurrentLang() {
    var stored = localStorage.getItem(STORE_KEY);
    return SUPPORTED.includes(stored) ? stored : DEFAULT;
  }

  /* ── Expose helpers for other scripts ───────────────────── */
  window.i18n = {
    setLanguage:    setLanguage,
    getCurrentLang: getCurrentLang,
    t:              function (key) { return t(key, getCurrentLang()); }
  };

  /* ── Init: wire up buttons + apply saved language ────────── */
  function init() {
    // Attach click handlers to language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(btn.getAttribute('data-lang'));
      });
    });

    // Load and apply the saved (or default) language
    setLanguage(getCurrentLang());
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init(); // DOM already ready (script loaded with defer/async)
  }

})();
