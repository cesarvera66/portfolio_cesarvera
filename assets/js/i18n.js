/**
 * i18n Engine — Language Toggle EN / ES
 * Reads data-i18n attributes from the DOM and swaps text using translations.js
 */
(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────────────────────────
  let currentLang = localStorage.getItem('lang') || 'en';
  let typedInstance = null; // reference to restart typed.js on lang change

  // ── Apply translations ─────────────────────────────────────────────────────
  function applyLang(lang) {
    const t = translations[lang];
    if (!t) return;

    // Text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        // Use innerHTML to support &amp; entities in translations
        el.innerHTML = t[key];
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    // Typed.js — restart with new strings
    const typedEl = document.querySelector('.typed');
    if (typedEl) {
      // Destroy existing instance if present
      if (typedInstance) {
        typedInstance.destroy();
        typedEl.textContent = '';
      }
      const items = t['hero.typed'] || translations.en['hero.typed'];
      typedInstance = new Typed('.typed', {
        strings: items.split(',').map(s => s.trim()),
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }

    // Update html lang attribute & button label
    document.documentElement.lang = lang === 'en' ? 'en' : 'es';
    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.textContent = lang === 'en' ? 'ES' : 'EN';
      btn.title = lang === 'en' ? 'Cambiar a Español' : 'Switch to English';
    }

    currentLang = lang;
    localStorage.setItem('lang', lang);
  }

  // ── Button click handler ───────────────────────────────────────────────────
  function toggleLang() {
    applyLang(currentLang === 'en' ? 'es' : 'en');
  }

  // ── Init ───────────────────────────────────────────────────────────────────
  window.addEventListener('load', function () {
    const btn = document.getElementById('langToggle');
    if (btn) btn.addEventListener('click', toggleLang);

    // Apply saved language (or default EN) on page load
    applyLang(currentLang);
  });

})();
