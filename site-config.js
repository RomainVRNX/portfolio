/* ============================================
   ROMAIN VERNAY — Site Configuration
   ============================================
   
   🎬 CE FICHIER EST TON PANNEAU DE CONTRÔLE.
   
   Pour modifier un média (vidéo hero, photos, projets vidéo),
   il te suffit de modifier les valeurs ci-dessous.
   Le site s'adapte automatiquement, rien d'autre à toucher.
   
   ============================================ */

const SITE_CONFIG = {

  /* ─────────────────────────────────────────────
     1. VIDÉO HERO (page d'accueil)
     ─────────────────────────────────────────────
     Change le lien ci-dessous pour changer la vidéo.
     → Fichier local : "images/testhero.mp4"
     → URL externe  : "https://exemple.com/video.mp4"
  */
  heroVideo: "images/testhero.mp4",


  /* ─────────────────────────────────────────────
     2. PROJETS VIDÉO — Page d'accueil (Selected Work)
     ─────────────────────────────────────────────
     Ajoute ou retire un objet pour ajouter/retirer un projet.
     La grille s'adapte automatiquement.
     
     Champs :
       - title       : Titre du projet
       - tag         : Étiquette (Film, Photo, Documentary…)
       - meta        : Lieu · Date
       - thumbnail   : Chemin vers la miniature (dans images/)
       - link        : URL de destination (optionnel, "#" par défaut)
  */
  homeProjects: [
    {
      title: "Pull me out of this",
      tag: "Film",
      meta: "Philippines · Feb 2025",
      thumbnail: "images/project-moalboal.webp",
      link: "#"
    },
    {
      title: "Beauty of Vietnam",
      tag: "Film",
      meta: "Vietnam · April 2025",
      thumbnail: "images/project-cebu.webp",
      link: "#"
    },
    {
      title: "Family in Puglia",
      tag: "Photo",
      meta: "Puglia · June 2026",
      thumbnail: "images/project-vietnam.webp",
      link: "#"
    }
  ],


  /* ─────────────────────────────────────────────
     3. PROJETS FILMMAKING (page filmmaking.html)
     ─────────────────────────────────────────────
     Même principe : ajoute/retire un objet.
     
     Champs :
       - title       : Titre du film
       - tag         : Étiquette (Documentary, Travel Film, Short Film…)
       - meta        : Lieu · Année · Durée
       - thumbnail   : Chemin vers la miniature
       - link        : URL de destination (optionnel)
  */
  filmProjects: [
    {
      title: "Beneath Moalboal",
      tag: "Documentary",
      meta: "Cebu, Philippines · 2026 · 12 min",
      thumbnail: "images/film-moalboal.webp",
      link: "#"
    },
    {
      title: "Rivers of Light",
      tag: "Travel Film",
      meta: "Vietnam · 2025 · 8 min",
      thumbnail: "images/film-vietnam.webp",
      link: "#"
    },
    {
      title: "Sardine Run",
      tag: "Short Film",
      meta: "Moalboal · 2025 · 5 min",
      thumbnail: "images/film-sardines.webp",
      link: "#"
    }
  ],


  /* ─────────────────────────────────────────────
     4. SHOWREEL (page filmmaking.html)
     ─────────────────────────────────────────────
     Change la source et le poster de la showreel.
  */
  showreel: {
    video: "images/showreel.mp4",
    poster: "images/showreel-poster.webp"
  },


  /* ─────────────────────────────────────────────
     5. GALERIE UNDERWATER (page underwater-photo.html)
     ─────────────────────────────────────────────
     Ajoute ou retire un objet pour ajouter/retirer une photo.
     La grille masonry s'adapte automatiquement.
     
     Champs :
       - src    : Chemin vers l'image
       - alt    : Description de l'image (SEO + accessibilité)
       - size   : "normal", "tall" ou "wide" (optionnel, "normal" par défaut)
  */
  underwaterPhotos: [
    { src: "images/underwater-01.webp", alt: "Underwater photograph — Moalboal reef", size: "tall" },
    { src: "images/underwater-02.webp", alt: "Underwater photograph — Sardine run", size: "normal" },
    { src: "images/underwater-03.webp", alt: "Underwater photograph — Coral macro", size: "wide" },
    { src: "images/underwater-04.webp", alt: "Underwater photograph — Freediver silhouette", size: "tall" },
    { src: "images/underwater-05.webp", alt: "Underwater photograph — Turtle encounter", size: "normal" },
    { src: "images/underwater-06.webp", alt: "Underwater photograph — Blue hour deep", size: "wide" }
  ],


  /* ─────────────────────────────────────────────
     6. GALERIE EXPEDITION (page expedition-photo.html)
     ─────────────────────────────────────────────
     Structure en CARROUSELS par catégorie.
     
     → Pour ajouter une catégorie : ajoute un objet { title, photos: [...] }
     → Pour ajouter une photo     : ajoute un { src, alt } dans le tableau photos
     → Pour supprimer             : retire la ligne, c'est tout.
     
     Les carrousels se génèrent automatiquement.
  */
  expeditionCategories: [
    {
      title: "BIRDS",
      photos: [
        { src: "images/BIRDS/DSC04297.jpg", alt: "Wildlife — Photo 1" },
        { src: "images/BIRDS/DSC04317.jpg", alt: "Wildlife — Photo 2" },
        { src: "images/BIRDS/DSC05791.jpg", alt: "Wildlife — Photo 3" },
        { src: "images/BIRDS/DSC05813.jpg", alt: "Wildlife — Photo 4" },
        { src: "images/BIRDS/DSC05830.jpg", alt: "Wildlife — Photo 5" },
        { src: "images/BIRDS/DSC08200.jpg", alt: "Wildlife — Photo 6" },
        { src: "images/BIRDS/DSC08268.jpg", alt: "Wildlife — Photo 7" },
        { src: "images/BIRDS/DSC08461.jpg", alt: "Wildlife — Photo 8" },
        { src: "images/BIRDS/DSC08496.jpg", alt: "Wildlife — Photo 9" },
        { src: "images/BIRDS/DSC08556.jpg", alt: "Wildlife — Photo 10" },
        { src: "images/BIRDS/DSC08571.jpg", alt: "Wildlife — Photo 11" }
      ]
    },
    {
      title: "PUGLIA",
      photos: [
        { src: "images/PUGLIA/DSC01075.jpg", alt: "Puglia — Photo 1" },
        { src: "images/expedition-04.webp", alt: "Puglia — Photo 2" },
        { src: "images/expedition-05.webp", alt: "Puglia — Photo 3" },
        { src: "images/expedition-06.webp", alt: "Puglia — Photo 4" },
        { src: "images/expedition-01.webp", alt: "Puglia — Photo 5" },
        { src: "images/expedition-02.webp", alt: "Puglia — Photo 6" },
        { src: "images/expedition-03.webp", alt: "Puglia — Photo 7" },
        { src: "images/expedition-04.webp", alt: "Puglia — Photo 8" }
      ]
    },
    {
      title: "Sri Lanka",
      photos: [
        { src: "images/expedition-05.webp", alt: "Sri Lanka — Photo 1" },
        { src: "images/expedition-06.webp", alt: "Sri Lanka — Photo 2" },
        { src: "images/expedition-01.webp", alt: "Sri Lanka — Photo 3" },
        { src: "images/expedition-02.webp", alt: "Sri Lanka — Photo 4" },
        { src: "images/expedition-03.webp", alt: "Sri Lanka — Photo 5" },
        { src: "images/expedition-04.webp", alt: "Sri Lanka — Photo 6" },
        { src: "images/expedition-05.webp", alt: "Sri Lanka — Photo 7" },
        { src: "images/expedition-06.webp", alt: "Sri Lanka — Photo 8" }
      ]
    }
  ],


  /* ─────────────────────────────────────────────
     7. HERO — Texte d'identité (index.html)
     ─────────────────────────────────────────────
     Le petit texte au-dessus du titre Hero.
  */
  heroLabel: "Romain Vernay",


  /* ─────────────────────────────────────────────
     8. THE JOURNEY — Page Scrollytelling
     ─────────────────────────────────────────────
     Toute la page est générée depuis cette config.
     
     → Pour ajouter/retirer un bloc : ajoute/retire un objet dans scenes[].
     → Pour remplacer un placeholder : remplis mediaSrc avec le chemin.
     → mediaType : "image" ou "video"
     → reversed  : true = média à droite, texte à gauche
  */
  journey: {

    opening: {
      kicker: "The Journey",
      title: "How it all",
      titleEmphasis: "started."
    },

    scenes: [
      {
        title: "Before there were cameras...",
        text: "Before there were cameras, there was water. Long before filmmaking became a passion, I was already happiest with my head beneath the surface. Swimming pools, the sea, my first dives... the ocean has always felt like home.",
        mediaType: "image",
        mediaSrc: "images/PHOTO ROMAIN.jpg",
        mediaAlt: "Archive — childhood by the water",
        mediaLabel: "Photo — Archive",
        reversed: false
      },
      {
        title: "The best dive buddy",
        text: "My father introduced me to diving. Years later, we were still underwater together, laughing behind our masks. Looking back, those imperfect clips became some of my favorite memories.",
        mediaType: "video",
        mediaSrc: "images/padre.mp4",
        mediaAlt: "Raw GoPro footage — diving with dad",
        mediaLabel: "Video — Raw GoPro footage",
        reversed: false
      },
      {
        title: "A different chapter",
        text: "Life took me somewhere very different. The army became a huge part of who I am. It taught me discipline, resilience, and the importance of being someone people can rely on. But even then, the camera never stayed far away.",
        mediaType: "image",
        mediaSrc: "images/RCA.jpg",
        mediaAlt: "A different chapter — army years",
        mediaLabel: "Photo — Equipment / Army",
        reversed: true
      },
      {
        title: "Coming back to the ocean",
        text: "Every time I had the chance to travel, I found myself looking for the water again. Not because I had a plan. Because that\u2019s simply where I felt alive.",
        mediaType: "video",
        mediaSrc: "images/caledo.mp4",
        mediaAlt: "Coming back to the ocean",
        mediaLabel: "Video — Ocean / Travel",
        reversed: false
      },
      {
        title: "Today",
        text: "Today, I\u2019m building a life around the ocean. One story. One dive. One encounter at a time. I don\u2019t know exactly where this journey will lead. That\u2019s probably my favorite part.",
        mediaType: "image",
        mediaSrc: "",
        mediaAlt: "Today — building a life around the ocean",
        mediaLabel: "Photo — Gear / Behind the scenes",
        reversed: true
      }
    ],

    finale: {
      line1: "This isn\u2019t the destination.",
      line2: "It\u2019s simply where the story begins."
    },

    cta: {
      text: "Ready to create something together?",
      button: "Start your story",
      link: "contact.html"
    }

  }

};

