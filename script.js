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

  /* -------- Dynamic Media Rendering (from site-config.js) -------- */

  const heroVideo = document.querySelector('.hero__video');
  if (heroVideo && typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.heroVideo) {
    const source = heroVideo.querySelector('source');
    if (source) {
      source.setAttribute('src', SITE_CONFIG.heroVideo);
      heroVideo.load();
    }
  }

  const heroLabel = document.querySelector('.hero__label');
  if (heroLabel && typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.heroLabel) {
    heroLabel.textContent = SITE_CONFIG.heroLabel;
  }

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

  const filmGrid = document.querySelector('#film-projects .work-grid');
  if (filmGrid && typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.filmProjects) {
    filmGrid.innerHTML = '';
    SITE_CONFIG.filmProjects.forEach((project, i) => {
      const card = document.createElement('article');
      card.className = 'work-card';
      card.id = `film-${i + 1}`;
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
      filmGrid.appendChild(card);
    });
  }

  const showreelVideo = document.querySelector('.showreel__video');
  if (showreelVideo && typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.showreel) {
    const source = showreelVideo.querySelector('source');
    if (source) {
      source.setAttribute('src', SITE_CONFIG.showreel.video);
    }
    if (SITE_CONFIG.showreel.poster) {
      showreelVideo.setAttribute('poster', SITE_CONFIG.showreel.poster);
    }
    showreelVideo.load();
  }

  const uwGrid = document.querySelector('#gallery-underwater .masonry');
  if (uwGrid && typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.underwaterPhotos) {
    uwGrid.innerHTML = '';
    SITE_CONFIG.underwaterPhotos.forEach((photo, i) => {
      const sizeClass = photo.size && photo.size !== 'normal' ? ` masonry__item--${photo.size}` : '';
      const item = document.createElement('div');
      item.className = `masonry__item${sizeClass}`;
      item.id = `uw-photo-${i + 1}`;
      item.innerHTML = `<img src="${photo.src}" alt="${photo.alt}" loading="lazy">`;
      uwGrid.appendChild(item);
    });
  }

  const expContainer = document.getElementById('expedition-carousels');
  if (expContainer && typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.expeditionCategories) {
    expContainer.innerHTML = '';

    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
      <button class="lightbox__close" id="lightbox-close" aria-label="Close">✕</button>
      <button class="lightbox__nav lightbox__nav--prev" id="lightbox-prev" aria-label="Previous">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <img class="lightbox__img" id="lightbox-img" src="" alt="">
      <button class="lightbox__nav lightbox__nav--next" id="lightbox-next" aria-label="Next">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
      </button>
      <span class="lightbox__counter" id="lightbox-counter"></span>
    `;
    document.body.appendChild(lightbox);

    let lbPhotos = [];
    let lbIndex = 0;

    const lbImg = document.getElementById('lightbox-img');
    const lbCounter = document.getElementById('lightbox-counter');

    function openLightbox(photos, index) {
      lbPhotos = photos;
      lbIndex = index;
      updateLightboxImage();
      lightbox.classList.add('lightbox--open');
      document.body.style.overflow = 'hidden';
    }

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

    SITE_CONFIG.expeditionCategories.forEach((category, catIdx) => {
      const row = document.createElement('div');
      row.className = 'carousel-row reveal';
      row.id = `carousel-${catIdx}`;

      const title = document.createElement('h2');
      title.className = 'carousel-row__title';
      title.textContent = category.title;
      row.appendChild(title);

      const wrapper = document.createElement('div');
      wrapper.className = 'carousel-row__wrapper';

      const arrowL = document.createElement('button');
      arrowL.className = 'carousel-row__arrow carousel-row__arrow--left';
      arrowL.setAttribute('aria-label', 'Scroll left');
      arrowL.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>';

      const arrowR = document.createElement('button');
      arrowR.className = 'carousel-row__arrow carousel-row__arrow--right';
      arrowR.setAttribute('aria-label', 'Scroll right');
      arrowR.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>';

      const track = document.createElement('div');
      track.className = 'carousel-row__track';

      category.photos.forEach((photo, i) => {
        const item = document.createElement('div');
        item.className = 'carousel-row__item';
        item.id = `exp-${catIdx}-photo-${i + 1}`;
        item.innerHTML = `<img src="${photo.src}" alt="${photo.alt}" loading="lazy">`;

        item.addEventListener('click', () => {
          openLightbox(category.photos, i);
        });

        track.appendChild(item);
      });

      const scrollAmount = 450;
      arrowL.addEventListener('click', () => {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
      arrowR.addEventListener('click', () => {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });

      let isDown = false, startX, scrollLeft, hasDragged = false;
      track.addEventListener('mousedown', (e) => {
        isDown = true;
        hasDragged = false;
        track.classList.add('carousel-row__track--grabbing');
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
      });
      track.addEventListener('mouseleave', () => {
        isDown = false;
        track.classList.remove('carousel-row__track--grabbing');
      });
      track.addEventListener('mouseup', () => {
        isDown = false;
        track.classList.remove('carousel-row__track--grabbing');
      });
      track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 1.5;
        if (Math.abs(walk) > 5) hasDragged = true;
        track.scrollLeft = scrollLeft - walk;
      });
      track.addEventListener('click', (e) => {
        if (hasDragged) {
          e.stopPropagation();
          hasDragged = false;
        }
      }, true);

      const updateArrows = () => {
        const atStart = track.scrollLeft <= 10;
        const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 10;
        arrowL.classList.toggle('carousel-row__arrow--hidden', atStart);
        arrowR.classList.toggle('carousel-row__arrow--hidden', atEnd);
      };
      track.addEventListener('scroll', updateArrows, { passive: true });
      setTimeout(updateArrows, 100);

      wrapper.appendChild(arrowL);
      wrapper.appendChild(track);
      wrapper.appendChild(arrowR);
      row.appendChild(wrapper);
      expContainer.appendChild(row);
    });
  }

  // 7. Journey Page — Scrollytelling (the-journey.html)
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