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
     2. PROJETS — Page d'accueil (Selected Work)
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
      tag: "Short Film",
      meta: "Philippines · Feb 2025",
      thumbnail: "images/videophyt.jpg",
      link: "https://www.youtube.com/watch?v=78xQUpdfYx8"
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
     3. EDITORIAL UNDERWATER (photography.html — section 1)
     ─────────────────────────────────────────────
     Curation ultra-stricte : uniquement les meilleures images sous-marines.
     Chaque image est sélectionnée manuellement.
     
     Champs :
       - src  : Chemin vers l'image
       - alt  : Description (SEO + accessibilité)
       - size : "normal", "tall" ou "wide" (contrôle le rythme visuel de la grille)
  */
  editorialUnderwater: [
    { src: "images/underwater-01.webp", alt: "Underwater — Moalboal reef", size: "tall" },
    { src: "images/underwater-02.webp", alt: "Underwater — Sardine run", size: "normal" },
    { src: "images/underwater-03.webp", alt: "Underwater — Coral macro", size: "wide" },
    { src: "images/underwater-04.webp", alt: "Underwater — Freediver silhouette", size: "tall" },
    { src: "images/underwater-05.webp", alt: "Underwater — Turtle encounter", size: "normal" },
    { src: "images/underwater-06.webp", alt: "Underwater — Blue hour deep", size: "wide" }
  ],


  /* ─────────────────────────────────────────────
     3b. EDITORIAL EXPEDITIONS & TRAVEL (photography.html — section 2)
     ─────────────────────────────────────────────
     Travail terrestre : paysages, portraits, culture.
     Sélection restreinte et pointue.
  */
  editorialExpeditions: [
    { src: "images/PUGLIA/DSC01075.jpg", alt: "Puglia — Coastal village", size: "wide" },
    { src: "images/SRI LANKA/DSC04388.jpg", alt: "Sri Lanka — Landscape", size: "normal" },
    { src: "images/TREK/DSC07207.jpg", alt: "Trek — Summit", size: "tall" },
    { src: "images/PUGLIA/DSC01214.jpg", alt: "Puglia — Olive groves", size: "normal" },
    { src: "images/SRI LANKA/DSC04562.jpg", alt: "Sri Lanka — Tea plantation", size: "tall" },
    { src: "images/BIRDS/DSC04297.jpg", alt: "Wildlife — Bird portrait", size: "normal" },
    { src: "images/TREK/DJI_0315.jpg", alt: "Trek — Aerial view", size: "wide" },
    { src: "images/SRI LANKA/DSC05130.jpg", alt: "Sri Lanka — Train", size: "tall" },
    { src: "images/PUGLIA/DSC01346.jpg", alt: "Puglia — Streets", size: "normal" },
    { src: "images/BIRDS/DSC05813.jpg", alt: "Wildlife — Bird perching", size: "wide" }
  ],


  /* ─────────────────────────────────────────────
     4. PROJETS FILMMAKING (page filmmaking.html)
     ─────────────────────────────────────────────
     Design cinématographique : un grand bloc vertical par projet.
     
     Champs :
       - title       : Titre du film
       - meta        : Lieu · Année
       - description : Courte description du projet
       - roles       : Tableau de rôles (ex: ["Filmmaking", "Underwater", "Editing"])
       - mediaSrc    : Chemin vers la miniature ou vidéo
       - mediaType   : "image" ou "video"
       - link        : URL de destination (optionnel)
  */
  filmProjects: [
    {
      title: "Beneath Moalboal",
      meta: "Cebu, Philippines · 2026",
      description: "A short documentary exploring the underwater world of Moalboal — sardine runs, coral gardens, and the freedivers who call this place home.",
      roles: ["Filmmaking", "Underwater", "Editing"],
      mediaSrc: "images/film-moalboal.webp",
      mediaType: "image",
      link: "#"
    },
    {
      title: "Rivers of Light",
      meta: "Vietnam · 2025",
      description: "A cinematic travel film through the rivers, rice paddies, and hidden valleys of northern Vietnam. Shot over three weeks on a motorbike.",
      roles: ["Filmmaking", "Editing", "Color Grading"],
      mediaSrc: "images/film-vietnam.webp",
      mediaType: "image",
      link: "#"
    },
    {
      title: "Sardine Run",
      meta: "Moalboal · 2025",
      description: "A short film capturing the mesmerizing sardine run of Moalboal — millions of sardines swirling in synchronized chaos just meters from the shore.",
      roles: ["Filmmaking", "Underwater"],
      mediaSrc: "images/film-sardines.webp",
      mediaType: "image",
      link: "#"
    }
  ],


  /* ─────────────────────────────────────────────
     5. HERO — Texte d'identité (index.html)
     ─────────────────────────────────────────────
     Le petit texte au-dessus du titre Hero.
  */
  heroLabel: "Romain Vernay",


  /* ─────────────────────────────────────────────
     6. THE JOURNEY — Page Scrollytelling
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
        mediaSrc: "images/rca-army.jpg",
        mediaAlt: "A different chapter — army years",
        mediaLabel: "Photo — Equipment / Army",
        reversed: true
      },
      {
        title: "Coming back to the ocean",
        text: "Every time I had the chance to travel, I found myself looking for the water again. Not because I had a plan. Because that’s simply where I felt alive.",
        mediaType: "video",
        mediaSrc: "images/caledo.mp4",
        mediaAlt: "Coming back to the ocean",
        mediaLabel: "Video — Ocean / Travel",
        reversed: false
      },
      {
        title: "Today",
        text: "Today, I’m building a life around the ocean. One story. One dive. One encounter at a time. I don’t know exactly where this journey will lead. That’s probably my favorite part.",
        mediaType: "image",
        mediaSrc: "",
        mediaAlt: "Today — building a life around the ocean",
        mediaLabel: "Photo — Gear / Behind the scenes",
        reversed: true
      }
    ],

    finale: {
      line1: "This isn’t the destination.",
      line2: "It’s simply where the story begins."
    },

    cta: {
      text: "Ready to create something together?",
      button: "Start your story",
      link: "contact.html"
    }

  },


  /* ─────────────────────────────────────────────
     7. RÉSEAUX SOCIAUX
     ─────────────────────────────────────────────
     Liens centralisés. Modifie ici, tout le site
     se met à jour automatiquement.
  */
  socials: {
    instagram: "https://www.instagram.com/romain.vny/",
    youtube: "https://www.youtube.com/@romainvny",
    whatsapp: "#" // En attente du lien wa.me
  }

};
