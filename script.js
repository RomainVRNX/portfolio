/* ============================================
   ROMAIN VERNAY — Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* -------- Hamburger Menu -------- */
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('nav-mobile');

  if (hamburger && navMobile) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navMobile.classList.toggle('open');
    });

    navMobile.querySelectorAll('.nav-mobile__link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMobile.classList.remove('open');
      });
    });
  }

  /* -------- Header scroll effect -------- */
  const header = document.getElementById('header');
  if (header && !header.classList.contains('header--scrolled')) {
    const onScroll = () => {
      if (window.scrollY > 60) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* -------- Social Links Injection (from site-config.js) -------- */
  if (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.socials) {
    const s = SITE_CONFIG.socials;

    // Instagram buttons
    document.querySelectorAll('#footer-ig, #contact-ig').forEach(el => {
      el.setAttribute('href', s.instagram);
    });

    // YouTube buttons
    document.querySelectorAll('#footer-yt, #contact-yt').forEach(el => {
      el.setAttribute('href', s.youtube);
    });

    // WhatsApp button
    const waBtn = document.getElementById('contact-wa');
    if (waBtn) waBtn.setAttribute('href', s.whatsapp);
  }

  /* -------- Dynamic Media Rendering (from site-config.js) -------- */

  // 1. Hero Video (index.html)
  const heroVideo = document.querySelector('.hero__video');
  if (heroVideo && typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.heroVideo) {
    const source = heroVideo.querySelector('source');
    if (source) {
      source.setAttribute('src', SITE_CONFIG.heroVideo);
      heroVideo.load();
    }
  }

  // 2. Hero Label (index.html)
  const heroLabel = document.querySelector('.hero__label');
  if (heroLabel && typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.heroLabel) {
    heroLabel.textContent = SITE_CONFIG.heroLabel;
  }

  // 3. Home Projects — Selected Work (index.html)
  const workGrid = document.querySelector('#selected-work .work-grid');
  if (workGrid && typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.homeProjects) {
    workGrid.innerHTML = '';
    SITE_CONFIG.homeProjects.forEach((project, i) => {
      const delay = i < 4 ? ` reveal-d${i + 1}` : '';
      const card = document.createElement('article');
      card.className = `work-card reveal${delay}`;
      card.id = `work-${i + 1}`;
      card.innerHTML = `
        <a href="${project.link || '#'}" class="work-card__link" style="text-decoration:none;color:inherit;display:block;">
          <div class="work-card__thumb" style="background-image: url('${project.thumbnail}');">
            <div class="work-card__play">
              <svg viewBox="0 0 24 24"><polygon points="6,3 20,12 6,21"/></svg>
            </div>
          </div>
          <div class="work-card__body">
            <span class="work-card__tag">${project.tag}</span>
            <h3 class="work-card__title">${project.title}</h3>
            <p class="work-card__meta">${project.meta}</p>
          </div>
        </a>
      `;
      workGrid.appendChild(card);
    });
  }


  /* ============================================
     4. PHOTOGRAPHY — Editorial Masonry (2 Sections)
     ============================================ */

  // Helper: populate a masonry container from a flat photo array
  function buildEditorialMasonry(containerId, photos, allPhotos, globalOffset) {
    const container = document.getElementById(containerId);
    if (!container) return globalOffset;

    container.innerHTML = '';

    photos.forEach((photo, i) => {
      const sizeClass = photo.size && photo.size !== 'normal' ? ` masonry__item--${photo.size}` : '';
      const item = document.createElement('div');
      item.className = `masonry__item${sizeClass}`;
      item.id = `${containerId}-${i}`;
      item.innerHTML = `<img src="${photo.src}" alt="${photo.alt}" loading="lazy">`;

      const capturedIndex = globalOffset + i;
      item.addEventListener('click', () => {
        openLightbox(allPhotos, capturedIndex);
      });

      container.appendChild(item);
    });

    return globalOffset + photos.length;
  }

  // Check if we're on the photography page with editorial sections
  const masonryUnderwater = document.getElementById('masonry-underwater');
  const masonryExpeditions = document.getElementById('masonry-expeditions');

  if ((masonryUnderwater || masonryExpeditions) && typeof SITE_CONFIG !== 'undefined') {
    const uwPhotos = SITE_CONFIG.editorialUnderwater || [];
    const expPhotos = SITE_CONFIG.editorialExpeditions || [];
    const allPhotos = [...uwPhotos, ...expPhotos];

    let offset = 0;
    offset = buildEditorialMasonry('masonry-underwater', uwPhotos, allPhotos, offset);
    offset = buildEditorialMasonry('masonry-expeditions', expPhotos, allPhotos, offset);

    // --- Lightbox ---
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      let lbPhotos = [];
      let lbIndex = 0;

      const lbImg = document.getElementById('lightbox-img');
      const lbCounter = document.getElementById('lightbox-counter');

      window.openLightbox = function(photos, index) {
        lbPhotos = photos;
        lbIndex = index;
        updateLightboxImage();
        lightbox.classList.add('lightbox--open');
        document.body.style.overflow = 'hidden';
      };

      function closeLightbox() {
        lightbox.classList.remove('lightbox--open');
        document.body.style.overflow = '';
      }

      function updateLightboxImage() {
        const photo = lbPhotos[lbIndex];
        lbImg.setAttribute('src', photo.src);
        lbImg.setAttribute('alt', photo.alt);
        lbCounter.textContent = `${lbIndex + 1} / ${lbPhotos.length}`;
      }

      function lbPrev() {
        lbIndex = (lbIndex - 1 + lbPhotos.length) % lbPhotos.length;
        updateLightboxImage();
      }

      function lbNext() {
        lbIndex = (lbIndex + 1) % lbPhotos.length;
        updateLightboxImage();
      }

      document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
      document.getElementById('lightbox-prev').addEventListener('click', lbPrev);
      document.getElementById('lightbox-next').addEventListener('click', lbNext);

      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });

      document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('lightbox--open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') lbPrev();
        if (e.key === 'ArrowRight') lbNext();
      });
    }
  }


  /* ============================================
     5. FILMMAKING — Cinematic Vertical Blocks
     ============================================ */
  const filmContainer = document.getElementById('film-projects-container');
  if (filmContainer && typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.filmProjects) {

    filmContainer.innerHTML = '';

    SITE_CONFIG.filmProjects.forEach((project, i) => {
      const block = document.createElement('article');
      block.className = 'film-block reveal';
      block.id = `film-${i + 1}`;

      // Build media HTML
      let mediaHTML = '';
      if (project.mediaType === 'video') {
        mediaHTML = `
          <video class="film-block__video" controls preload="metadata" poster="${project.mediaSrc}">
            <source src="${project.mediaSrc}" type="video/mp4">
          </video>`;
      } else {
        mediaHTML = `<img src="${project.mediaSrc}" alt="${project.title}" class="film-block__img" loading="lazy">`;
      }

      // Build roles HTML
      const rolesHTML = project.roles
        ? project.roles.map(role => `<span class="film-block__role">${role}</span>`).join('')
        : '';

      block.innerHTML = `
        <a href="${project.link || '#'}" class="film-block__media-link">
          <div class="film-block__media">
            ${mediaHTML}
            <div class="film-block__media-overlay"></div>
            <div class="film-block__play">
              <svg viewBox="0 0 24 24" width="48" height="48"><polygon points="6,3 20,12 6,21" fill="currentColor"/></svg>
            </div>
          </div>
        </a>
        <div class="film-block__info">
          <div class="film-block__info-inner">
            <h2 class="film-block__title">${project.title}</h2>
            <p class="film-block__meta">${project.meta}</p>
            <p class="film-block__description">${project.description || ''}</p>
            <div class="film-block__roles">${rolesHTML}</div>
          </div>
        </div>
      `;

      filmContainer.appendChild(block);
    });
  }


  /* ============================================
     6. THE JOURNEY — Scrollytelling
     ============================================ */
  const journeyScenesContainer = document.getElementById('journey-scenes');
  if (journeyScenesContainer && typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.journey) {
    const j = SITE_CONFIG.journey;

    const openingEl = document.getElementById('journey-opening-content');
    if (openingEl && j.opening) {
      openingEl.innerHTML = `
        <p class="journey-opening__kicker">${j.opening.kicker}</p>
        <h1 class="journey-opening__title">${j.opening.title} <em>${j.opening.titleEmphasis}</em></h1>
        <div class="journey-opening__divider"></div>
      `;
    }

    journeyScenesContainer.innerHTML = '';
    j.scenes.forEach((scene, i) => {
      const section = document.createElement('section');
      
      // FORÇAGE DU QUINCONCE : Inversion une scène sur deux
      const isReverse = i % 2 !== 0;
      section.className = `journey-scene${isReverse ? ' journey-scene--reverse' : ''}`;
      section.id = `scene-${i + 1}`;

      let mediaHTML = '';
      if (scene.mediaSrc) {
        if (scene.mediaType === 'video') {
          mediaHTML = `<video class="journey-scene__video" autoplay loop muted playsinline>
            <source src="${scene.mediaSrc}" type="video/mp4">
          </video>`;
        } else {
          mediaHTML = `<img src="${scene.mediaSrc}" alt="${scene.mediaAlt || ''}" loading="lazy" class="journey-scene__img">`;
        }
      } else {
        const isVideo = scene.mediaType === 'video';
        const iconClass = scene.mediaIcon || (isVideo ? 'fa-video' : 'fa-image');
        const videoClass = isVideo ? ' journey-scene__placeholder--video' : '';
        mediaHTML = `<div class="journey-scene__placeholder${videoClass}" id="media-scene-${i + 1}">
          <i class="fa-solid ${iconClass}"></i>
          <span>${scene.mediaLabel || (isVideo ? 'Video' : 'Photo')}</span>
        </div>`;
      }

      section.innerHTML = `
        <div class="journey-scene__inner">
          <div class="journey-scene__media reveal">
            ${mediaHTML}
          </div>
          <div class="journey-scene__content reveal">
            <h2 class="journey-scene__title">${scene.title}</h2>
            <div class="journey-scene__line"></div>
            <p class="journey-scene__text">${scene.text}</p>
          </div>
        </div>
      `;

      journeyScenesContainer.appendChild(section);

      // AJOUT DE L'ANIMATION ENTRE LES CHAPITRES
      if (i < j.scenes.length - 1) {
        const separator = document.createElement('div');
        separator.className = 'scene-separator reveal';
        separator.innerHTML = `<div class="custom-scroll-line"></div>`;
        journeyScenesContainer.appendChild(separator);
      }
    });

    const finaleEl = document.getElementById('journey-finale-content');
    if (finaleEl && j.finale) {
      finaleEl.innerHTML = `
        <p class="journey-finale__line1">${j.finale.line1}</p>
        <p class="journey-finale__line2">${j.finale.line2}</p>
      `;
    }

    const ctaEl = document.getElementById('journey-cta');
    if (ctaEl && j.cta) {
      ctaEl.innerHTML = `
        <p class="contact-strip__text">${j.cta.text}</p>
        <a href="${j.cta.link}" class="btn btn--orange" id="cta-journey-contact">${j.cta.button}</a>
      `;
    }
  }

  /* ============================================
     7. VIDEO MODAL — YouTube Lightbox
     ============================================ */
  const videoModal = document.getElementById('video-modal');
  const videoModalWrapper = document.getElementById('video-modal-wrapper');
  const videoModalClose = document.getElementById('video-modal-close');

  if (videoModal && videoModalWrapper) {

    /**
     * Extract YouTube video ID from any URL format using Regex.
     * Supports:
     *   - https://www.youtube.com/watch?v=XXXXXXXXXXX
     *   - https://youtube.com/watch?v=XXXXXXXXXXX&t=120
     *   - https://youtu.be/XXXXXXXXXXX
     *   - https://www.youtube.com/embed/XXXXXXXXXXX
     *   - https://www.youtube.com/v/XXXXXXXXXXX
     *   - https://www.youtube.com/shorts/XXXXXXXXXXX
     * Returns the 11-char video ID, or null if not found.
     */
    function extractYouTubeId(url) {
      if (!url || typeof url !== 'string') return null;

      const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:[?&\s#]|$)/;
      const match = url.match(regex);
      return match ? match[1] : null;
    }

    /**
     * Build a secure YouTube embed URL from a raw YouTube link.
     * Extracts the video ID via regex, then constructs:
     * https://www.youtube.com/embed/[ID]?autoplay=1&rel=0&showinfo=0
     */
    function buildEmbedUrl(youtubeUrl) {
      const videoId = extractYouTubeId(youtubeUrl);
      if (!videoId) return null;
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0`;
    }

    // Check if a URL is a YouTube link
    function isYouTubeUrl(url) {
      return url && extractYouTubeId(url) !== null;
    }

    // Open the video modal with a YouTube URL
    function openVideoModal(youtubeUrl) {
      const embedUrl = buildEmbedUrl(youtubeUrl);
      if (!embedUrl) return;

      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', embedUrl);
      iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('title', 'Video player');

      videoModalWrapper.innerHTML = '';
      videoModalWrapper.appendChild(iframe);
      videoModal.classList.add('video-modal--open');
      document.body.style.overflow = 'hidden';
    }

    // Close the video modal and stop playback
    function closeVideoModal() {
      videoModal.classList.remove('video-modal--open');
      document.body.style.overflow = '';
      // Destroy iframe after transition to stop video immediately
      setTimeout(() => {
        videoModalWrapper.innerHTML = '';
      }, 350);
    }

    // Close button
    videoModalClose.addEventListener('click', closeVideoModal);

    // Click outside video (on backdrop)
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && videoModal.classList.contains('video-modal--open')) {
        closeVideoModal();
      }
    });

    // Intercept clicks on YouTube links — event delegation on the whole document
    document.addEventListener('click', (e) => {
      // Find the closest anchor tag
      const anchor = e.target.closest('a[href]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (isYouTubeUrl(href)) {
        e.preventDefault();
        e.stopPropagation();
        openVideoModal(href);
      }
    });
  }


  /* -------- Scroll Reveal (fade-in) -------- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

});