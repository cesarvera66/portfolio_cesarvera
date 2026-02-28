/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
  "use strict";

  /**
   * Custom Cursor Animation
   */
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');

  if (cursorDot && cursorOutline) {
    window.addEventListener('mousemove', function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      // Animate dot instantly
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      // Animate outline with slight delay using CSS transition
      cursorOutline.style.left = `${posX}px`;
      cursorOutline.style.top = `${posY}px`;
    });

    // Add hover effect to all links, buttons, and triggers
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, .portfolio-wrap, .custom-modal-trigger');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorOutline.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        cursorOutline.classList.remove('cursor-hover');
      });
    });
  }

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function (direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);


  /**
   * Dynamic Project Modal Logic
   */
  const modal = document.getElementById('project-modal');
  if (modal) {
    const modalClose = document.querySelector('.custom-modal-close');
    const modalOverlay = document.querySelector('.custom-modal-overlay');

    // Modal Elements
    const mImg = document.getElementById('modal-img');
    const mTitle = document.getElementById('modal-title');
    const mDesc = document.getElementById('modal-desc');
    const mTags = document.getElementById('modal-tags');
    const mBtnView = document.getElementById('modal-btn-view');
    const mBtnGithub = document.getElementById('modal-btn-github');

    // Open Modal via Event Delegation
    document.body.addEventListener('click', function (e) {
      const trigger = e.target.closest('.custom-modal-trigger');
      if (trigger) {
        e.preventDefault();

        // 1. Get Data
        const title = trigger.getAttribute('data-title') || 'Project Details';
        const desc = trigger.getAttribute('data-desc') || '';
        const img = trigger.getAttribute('data-img') || '';
        const tags = trigger.getAttribute('data-tags') || '';
        const linkView = trigger.getAttribute('data-link-view') || '';
        const linkGithub = trigger.getAttribute('data-link-github') || '';

        // 2. Populate Modal
        mTitle.textContent = title;
        mDesc.innerHTML = desc; // Allows simple HTML like <br>
        mImg.src = img;
        mImg.alt = title;

        // Tags
        mTags.innerHTML = '';
        if (tags) {
          tags.split(',').forEach(tag => {
            const span = document.createElement('span');
            span.textContent = tag.trim();
            mTags.appendChild(span);
          });
        }

        // Action Buttons
        if (linkView) {
          mBtnView.href = linkView;
          mBtnView.style.display = 'inline-flex';
        } else {
          mBtnView.style.display = 'none';
        }

        if (linkGithub) {
          mBtnGithub.href = linkGithub;
          mBtnGithub.style.display = 'inline-flex';
        } else {
          mBtnGithub.style.display = 'none';
        }

        // 3. Show Modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
      }
    });

    // Close Modal
    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';

      // Clear iframe/video sources temporarily (optional, to stop playback)
      setTimeout(() => { mImg.src = ''; }, 400);
    };

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  /**
   * Resume Scroll Timeline Animation
   */
  const timelineLine = document.querySelector('.timeline-line-progress');
  const resumeSection = document.getElementById('resume');

  if (timelineLine && resumeSection) {
    document.addEventListener('scroll', () => {
      const rect = resumeSection.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Start filling when the top of the resume section is near the middle of the screen
      const startPoint = windowHeight * 0.6;

      if (sectionTop < startPoint) {
        // Calculate how much we've scrolled past the start point
        const scrolledPast = startPoint - sectionTop;
        // Map this to a percentage of the section height
        let progress = (scrolledPast / (sectionHeight - windowHeight * 0.3)) * 100;

        // Clamp between 0 and 100
        progress = Math.max(0, Math.min(100, progress));

        timelineLine.style.height = `${progress}%`;
      } else {
        timelineLine.style.height = '0%';
      }
    });
  }

})();

/* ====== Theme Toggle ====== */
const toggle = document.getElementById('themeToggle');
if (toggle) {
  const body = document.body;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-theme');
  }
  toggle.addEventListener('click', function () {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}
