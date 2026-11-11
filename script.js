/* ============================================
   ROMAIN VERNAY — Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* -------- Hamburger Menu -------- */
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('nav-mobile');

  if (hamburger && navMobile) {
    navMobile.inert = true;
    document.documentElement.classList.add('mobile-nav-enabled');

    const setMobileMenu = (open) => {
      hamburger.classList.toggle('open', open);
      navMobile.classList.toggle('open', open);
      navMobile.inert = !open;
      hamburger.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('mobile-menu-open', open);
      if (open) navMobile.querySelector('a')?.focus();
    };
    hamburger.addEventListener('click', () => {
      const open = !navMobile.classList.contains('open');
      setMobileMenu(open);
      if (!open) hamburger.focus();
    });
    navMobile.querySelectorAll('.nav-mobile__link').forEach(link => {
      link.addEventListener('click', () => setMobileMenu(false));
    });
    document.addEventListener('keydown', (event) => {
      if (!navMobile.classList.contains('open')) return;
      const links = navMobile.querySelectorAll('a');
      const lastLink = links[links.length - 1];
      if (event.key === 'Tab') {
        if ((!event.shiftKey && document.activeElement === lastLink) ||
            (event.shiftKey && document.activeElement === links[0])) {
          event.preventDefault();
          hamburger.focus();
        } else if (document.activeElement === hamburger) {
          event.preventDefault();
          (event.shiftKey ? lastLink : links[0])?.focus();
        }
      }
      if (event.key === 'Escape') {
        setMobileMenu(false);
        hamburger.focus();
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900 && navMobile.classList.contains('open')) {
        setMobileMenu(false);
      }
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

    // Open external social profiles in a separate tab, with safe link attributes.
    const externalSocial = (selectors, url) => {
      document.querySelectorAll(selectors).forEach(el => {
        if (!url || url === '#') {
          el.hidden = true;
          return;
        }
        el.href = url;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
        el.removeAttribute('hidden');
      });
    };

    externalSocial('#footer-ig, #contact-ig', s.instagram);
    externalSocial('#footer-yt, #contact-yt', s.youtube);

    // Hide WhatsApp until the reserved username actually has an active contact URL.
    externalSocial('#contact-wa', s.whatsapp);
  }

  /* -------- Dynamic Media Rendering (from site-config.js) -------- */

  // Start the background video only when motion and data preferences allow it.
  const heroVideo = document.querySelector('.hero__video');
  const heroPlayback = document.querySelector('.hero__playback');
  if (heroVideo && heroPlayback && typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.heroMedia) {
    const { mobile, hevc, avc, poster } = SITE_CONFIG.heroMedia;
    heroVideo.poster = poster;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileViewport = window.matchMedia('(max-width: 768px)');
    const updatePlaybackButton = () => {
      const paused = heroVideo.paused;
      heroPlayback.setAttribute('aria-label', paused ? 'Play background video' : 'Pause background video');
      heroPlayback.firstElementChild.textContent = paused ? '▶' : 'Ⅱ';
    };
    const play = () => {
      if (!heroVideo.getAttribute('src')) {
        heroVideo.src = mobileViewport.matches ? mobile
          : heroVideo.canPlayType('video/mp4; codecs="hvc1"') ? hevc : avc;
      }
      heroVideo.play().catch(updatePlaybackButton);
    };

    heroVideo.addEventListener('play', updatePlaybackButton);
    heroVideo.addEventListener('pause', updatePlaybackButton);
    heroVideo.addEventListener('error', () => {
      if (heroVideo.getAttribute('src') === hevc) {
        heroVideo.src = avc;
        play();
      } else {
        heroVideo.removeAttribute('src');
        heroVideo.load();
        updatePlaybackButton();
      }
    });
    heroPlayback.addEventListener('click', () => {
      if (heroVideo.paused) play();
      else heroVideo.pause();
    });
    reducedMotion.addEventListener('change', () => {
      if (reducedMotion.matches) {
        heroVideo.pause();
        heroVideo.removeAttribute('src');
        heroVideo.load();
      }
    });

    heroPlayback.hidden = false;
    if (!reducedMotion.matches && !navigator.connection?.saveData) play();
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


  // Photography — scalable commissioned project cards.
  const clientProjectsGrid = document.getElementById('client-projects');
  if (clientProjectsGrid && typeof SITE_CONFIG !== 'undefined' && Array.isArray(SITE_CONFIG.clientProjects)) {
    clientProjectsGrid.innerHTML = '';
    SITE_CONFIG.clientProjects.forEach((project) => {
      const card = document.createElement('a');
      card.className = 'client-project';
      card.href = project.link;
      card.setAttribute('aria-label', 'View ' + project.title + ' photography project');
      const image = document.createElement('div');
      image.className = 'client-project__image';
      const img = document.createElement('img');
      img.src = project.cover;
      img.alt = project.alt || project.title;
      img.loading = 'lazy';
      img.decoding = 'async';
      const overlay = document.createElement('span');
      overlay.className = 'client-project__overlay';
      overlay.textContent = 'View Project ↗';
      image.append(img, overlay);
      const info = document.createElement('div');
      info.className = 'client-project__info';
      const labels = document.createElement('div');
      const title = document.createElement('h3');
      title.className = 'client-project__title';
      title.textContent = project.title;
      const meta = document.createElement('p');
      meta.className = 'client-project__meta';
      meta.textContent = [project.category, project.location].filter(Boolean).join(' · ');
      labels.append(title, meta);
      const action = document.createElement('span');
      action.className = 'client-project__action';
      action.textContent = 'View Project ↗';
      info.append(labels, action);
      card.append(image, info);
      clientProjectsGrid.appendChild(card);
    });
  }

  /* ============================================
     4. PHOTOGRAPHY — Editorial Masonry (2 Sections)
     ============================================ */

  const galleryLinks = [...document.querySelectorAll('.masonry a.masonry__item')];

  if (galleryLinks.length) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox?.showModal) {
      const lbPhotos = galleryLinks.map(link => ({ src: link.href, alt: link.querySelector('img').alt }));
      let lbIndex = 0;
      let imageRequest = 0;

      const lbImg = document.getElementById('lightbox-img');
      const lbCounter = document.getElementById('lightbox-counter');


      function openLightbox(index) {
        lbIndex = index;
        lightbox.classList.add('lightbox--open');
        lightbox.showModal();
        document.body.style.overflow = 'hidden';
        updateLightboxImage();
      }

      galleryLinks.forEach((link, index) => {
        link.setAttribute('aria-haspopup', 'dialog');
        link.addEventListener('click', event => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          event.preventDefault();
          openLightbox(index);
        });
      });

      function closeLightbox() {
        lightbox.close();
      }

      lightbox.addEventListener('close', () => {
        // Invalidate any pending image load before the next opening.
        imageRequest++;
        lightbox.classList.remove('lightbox--open', 'lightbox--loading', 'lightbox--error');
        lbImg.removeAttribute('src');
        lbImg.alt = '';
        document.body.style.overflow = '';
      });

      function updateLightboxImage() {
        const photo = lbPhotos[lbIndex];
        if (!photo) return;

        // Never show the previous picture while the new one is loading.
        const request = ++imageRequest;
        lightbox.classList.remove('lightbox--error');
        lightbox.classList.add('lightbox--loading');
        lbImg.removeAttribute('src');
        lbImg.alt = '';
        lbCounter.textContent = `${lbIndex + 1} / ${lbPhotos.length}`;

        const incoming = new Image();
        incoming.onload = () => {
          // Rapid next/previous taps must not show out-of-order images.
          if (request !== imageRequest || !lightbox.open) return;
          lbImg.alt = photo.alt || '';
          lbImg.src = photo.src;
          lightbox.classList.remove('lightbox--loading');
        };
        incoming.onerror = () => {
          if (request !== imageRequest || !lightbox.classList.contains('lightbox--open')) return;
          lightbox.classList.remove('lightbox--loading');
          lightbox.classList.add('lightbox--error');
          lbCounter.textContent = 'Image unavailable — try another photo';
        };
        incoming.src = photo.src;
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

      // Native-feeling photo navigation on touchscreens; ignore vertical scroll.
      let touchStart = null;
      lightbox.addEventListener('touchstart', (event) => {
        if (!lightbox.classList.contains('lightbox--open') || event.touches.length !== 1) {
          touchStart = null;
          return;
        }
        const touch = event.touches[0];
        touchStart = { x: touch.clientX, y: touch.clientY };
      }, { passive: true });
      lightbox.addEventListener('touchend', (event) => {
        if (!touchStart || !lightbox.classList.contains('lightbox--open') || event.changedTouches.length !== 1) {
          touchStart = null;
          return;
        }
        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - touchStart.x;
        const deltaY = touch.clientY - touchStart.y;
        touchStart = null;
        if (Math.abs(deltaX) >= 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
          if (deltaX < 0) lbNext();
          else lbPrev();
        }
      }, { passive: true });

      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });

      document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('lightbox--open')) return;
        if (e.key === 'ArrowLeft') lbPrev();
        if (e.key === 'ArrowRight') lbNext();
      });
    }
  }


  /* ============================================
     5. FILMMAKING — Cinematic Vertical Blocks
     ============================================ */
  const filmContainer = document.getElementById('film-projects-container');
  if (filmContainer && typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.filmProjects?.length) {

    filmContainer.innerHTML = '';

    SITE_CONFIG.filmProjects.forEach((project, i) => {
      const block = document.createElement('article');
      block.className = 'film-block reveal';
      block.id = `film-${i + 1}`;

      const isYouTubeFilm = project.mediaType === 'youtube' && project.link;

      // Build media HTML
      let mediaHTML = '';
      if (project.mediaType === 'video') {
        mediaHTML = `
          <video class="film-block__video" controls preload="metadata">
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
        ${project.link && project.mediaType !== 'video' ? `<a href="${project.link}" class="film-block__media-link"${isYouTubeFilm ? ` aria-label="Watch Film: ${project.title}"` : ''}>` : ''}
          <div class="film-block__media${isYouTubeFilm ? ' film-block__media--youtube' : ''}">
            ${mediaHTML}
            <div class="film-block__media-overlay"></div>
            <div class="film-block__play">
              <svg viewBox="0 0 24 24" width="48" height="48"><polygon points="6,3 20,12 6,21" fill="currentColor"/></svg>
            </div>
          </div>
        ${project.link && project.mediaType !== 'video' ? '</a>' : ''}
        <div class="film-block__info">
          <div class="film-block__info-inner">
            <h2 class="film-block__title">${project.title}</h2>
            <p class="film-block__meta">${project.meta}</p>
            <p class="film-block__description">${project.description || ''}</p>
            ${rolesHTML ? `<div class="film-block__roles">${rolesHTML}</div>` : ''}
            ${isYouTubeFilm ? `<div class="film-block__actions">
              <a class="btn btn--ghost" href="${project.link}">Watch Film</a>
              <a class="film-block__fallback" href="${project.link}" target="_blank" rel="noopener noreferrer">Open on YouTube</a>
            </div>` : ''}
          </div>
        </div>
      `;

      filmContainer.appendChild(block);
    });
  }


  document.querySelectorAll('.journey-scene__video').forEach(video => {
    const button = video.nextElementSibling;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let manuallyPaused = false;
    const updateButton = () => {
      button.setAttribute('aria-label', video.paused ? 'Play scene video' : 'Pause scene video');
      button.firstElementChild.textContent = video.paused ? '▶' : 'Ⅱ';
    };
    const play = () => video.play().catch(updateButton);
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    button.addEventListener('click', () => {
      manuallyPaused = !video.paused;
      if (manuallyPaused) video.pause();
      else play();
    });
    reducedMotion.addEventListener('change', () => {
      if (reducedMotion.matches) video.pause();
    });
    button.hidden = false;
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) video.pause();
        else if (!manuallyPaused && !reducedMotion.matches && !navigator.connection?.saveData) play();
      }, { threshold: 0.25 });
      observer.observe(video);
    }
  });

  /* ============================================
     7. VIDEO MODAL — YouTube Lightbox
     ============================================ */
  const videoModal = document.getElementById('video-modal');
  const videoModalWrapper = document.getElementById('video-modal-wrapper');
  const videoModalClose = document.getElementById('video-modal-close');

  if (videoModal?.showModal && videoModalWrapper) {

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
     * https://www.youtube.com/embed/[ID]?autoplay=0&rel=0&showinfo=0
     */
    function buildEmbedUrl(youtubeUrl) {
      const videoId = extractYouTubeId(youtubeUrl);
      if (!videoId) return null;
      return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&showinfo=0`;
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
      iframe.setAttribute('allow', 'encrypted-media; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('title', 'Video player');

      videoModalWrapper.innerHTML = '';
      videoModalWrapper.appendChild(iframe);
      videoModal.classList.add('video-modal--open');
      videoModal.showModal();
      document.body.style.overflow = 'hidden';
    }

    // Close the video modal and stop playback
    function closeVideoModal() {
      videoModal.close();
    }

    videoModal.addEventListener('close', () => {
      videoModal.classList.remove('video-modal--open');
      videoModalWrapper.replaceChildren();
      document.body.style.overflow = '';
    });

    // Close button
    videoModalClose.addEventListener('click', closeVideoModal);

    // Click outside video (on backdrop)
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });


    // Intercept clicks on YouTube links — event delegation on the whole document
    document.addEventListener('click', (e) => {
      // Find the closest anchor tag
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = e.target.closest('a[href]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      // Only portfolio films open in the player; social profile links open normally.
      if (!anchor.closest('.film-block, .showreel') || anchor.target === '_blank') return;
      if (isYouTubeUrl(href)) {
        e.preventDefault();
        e.stopPropagation();
        openVideoModal(href);
      }
    });
  }


  /* -------- Scroll Reveal (fade-in) -------- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('reveal-enabled');
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