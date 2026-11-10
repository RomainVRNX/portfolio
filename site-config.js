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
     1. HERO — Vidéos & poster
     ─────────────────────────────────────────────
     Déposer les trois fichiers dans images/.
     Le navigateur essaie H.265 (HEVC) si compatible,
     puis H.264 (AVC). Le poster reste affiché
     tant que la vidéo ne peut pas être lue.
  */
  heroMedia: {
    hevc: "images/hero-ocean-h265.mp4",
    avc: "images/hero-ocean-h264.mp4",
    poster: "images/hero-poster.webp"
  },


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
      title: "Ocean & Wildlife",
      tag: "Underwater Photography",
      meta: "Moalboal, Philippines",
      thumbnail: "images/ocean/DSC04487.webp",
      link: "photography.html#editorial-underwater"
    },
    {
      title: "Second Home",
      tag: "Hospitality · Client Project",
      meta: "Moalboal, Philippines",
      thumbnail: "images/second-home/HIGHRES-1outside-hero.webp",
      link: "second-home.html"
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
    { src: "images/ocean/DSC04487.webp", thumb: "images/ocean/thumbs/DSC04487.webp", alt: "Diver silhouetted beneath sunlit blue water", size: "wide" },
    { src: "images/ocean/DSC04383.webp", thumb: "images/ocean/thumbs/DSC04383.webp", alt: "Colorful nudibranch close-up", size: "normal" },
    { src: "images/ocean/DSC04808.webp", thumb: "images/ocean/thumbs/DSC04808.webp", alt: "Sea turtle swimming beneath rippled sunlight", size: "wide" },
    { src: "images/ocean/DSC04626.webp", thumb: "images/ocean/thumbs/DSC04626.webp", alt: "Scuba diver underwater close-up", size: "normal" },
    { src: "images/ocean/DSC04016.webp", thumb: "images/ocean/thumbs/DSC04016.webp", alt: "Golden branching corals in shallow tropical water", size: "wide" },
    { src: "images/ocean/DSC04253-2.webp", thumb: "images/ocean/thumbs/DSC04253-2.webp", alt: "Octopus camouflaged on the seabed", size: "normal" },
    { src: "images/ocean/DSC04656.webp", thumb: "images/ocean/thumbs/DSC04656.webp", alt: "Sea turtle resting against the reef", size: "normal" },
    { src: "images/ocean/DSC04885.webp", thumb: "images/ocean/thumbs/DSC04885.webp", alt: "Scorpionfish among colorful coral", size: "normal" },
    { src: "images/ocean/DSC04059.webp", thumb: "images/ocean/thumbs/DSC04059.webp", alt: "Soft coral formation and reef fish", size: "wide" },
    { src: "images/ocean/DSC04331.webp", thumb: "images/ocean/thumbs/DSC04331.webp", alt: "Sea turtle resting on sandy seabed", size: "normal" },
    { src: "images/ocean/DSC04959.webp", thumb: "images/ocean/thumbs/DSC04959.webp", alt: "White nudibranch on reef", size: "normal" },
    { src: "images/ocean/DSC03013.webp", thumb: "images/ocean/thumbs/DSC03013.webp", alt: "Scuba diver over a coral reef", size: "normal" },
    { src: "images/ocean/DSC04926.webp", thumb: "images/ocean/thumbs/DSC04926.webp", alt: "Orange frogfish on reef", size: "normal" },
    { src: "images/ocean/DSC04872.webp", thumb: "images/ocean/thumbs/DSC04872.webp", alt: "Sea turtle swimming through open blue water", size: "wide" },
    { src: "images/ocean/DSC04457.webp", thumb: "images/ocean/thumbs/DSC04457.webp", alt: "Moray eel emerging from the reef", size: "normal" },
    { src: "images/ocean/DSC04339.webp", thumb: "images/ocean/thumbs/DSC04339.webp", alt: "Sea turtle viewed from above", size: "normal" },
    { src: "images/ocean/DSC04776.webp", thumb: "images/ocean/thumbs/DSC04776.webp", alt: "Sea turtle in open blue water", size: "wide" },
    { src: "images/ocean/DSC04860.webp", thumb: "images/ocean/thumbs/DSC04860.webp", alt: "Sea turtle swimming toward the surface", size: "wide" },  ],

  /* ─────────────────────────────────────────────
     3b. EDITORIAL EXPEDITIONS & TRAVEL (photography.html — section 2)
     ─────────────────────────────────────────────
     Travail terrestre : paysages, portraits, culture.
     Sélection restreinte et pointue.
  */
  editorialExpeditions: [
    { src: "images/DSC09957.jpg", alt: "Vietnam - Child Portrait", size: "normal" },
    { src: "images/dr_ph3.jpg", alt: "Philippines - Drone", size: "tall" },
    { src: "images/TREK/DSC07630.jpg", alt: "Milky way", size: "normal" },
    { src: "images/DSC00814.jpg", alt: "Thailand", size: "tall" },
    { src: "images/DSC00459.jpg", alt: "Muay Thai", size: "tall" },
    { src: "images/BIRDS/DSC04297.jpg", alt: "Wildlife — Bird portrait", size: "normal" },
    { src: "images/TREK/DJI_0315.jpg", alt: "Trek — Aerial view", size: "wide" },
    { src: "images/DJI_0314.jpg", alt: "Vietnam - Ninh Binh", size: "tall" },
    { src: "images/PUGLIA/DSC01214.jpg", alt: "Puglia — Fisherman", size: "normal" },
    { src: "images/BIRDS/DSC08496.jpg", alt: "Wildlife", size: "wide" }
  ],


  /* CLIENT WORK — add one object for each future commissioned project. */
  clientProjects: [
    {
      title: "Second Home",
      category: "Hospitality Photography",
      location: "Moalboal, Philippines",
      cover: "images/second-home/HIGHRES-1outside-hero.webp",
      alt: "Second Home swimming pool illuminated at night",
      link: "second-home.html"
    }
  ],

  /* 
     SECOND HOME — selected commissioned hospitality photography.
     Full-resolution WebP and lightweight thumbnails live in images/second-home/.
  */
  secondHomePhotos: [
    { src: "images/second-home/HIGHRES-swimming1unicorn.webp", thumb: "images/second-home/thumbs/HIGHRES-swimming1unicorn.webp", alt: "Second Home swimming pool in daylight", size: "normal" },
    { src: "images/second-home/HIGHRES-private-1hero.webp", thumb: "images/second-home/thumbs/HIGHRES-private-1hero.webp", alt: "Private double bedroom", size: "normal" },
    { src: "images/second-home/HIGHRES-common1(1).webp", thumb: "images/second-home/thumbs/HIGHRES-common1(1).webp", alt: "Entrance hall with Cebu mural", size: "normal" },
    { src: "images/second-home/HIGHRES-1outside-hero.webp", thumb: "images/second-home/thumbs/HIGHRES-1outside-hero.webp", alt: "Second Home illuminated swimming pool at night", size: "wide" },
    { src: "images/second-home/HIGHRES-8dorm1hero.webp", thumb: "images/second-home/thumbs/HIGHRES-8dorm1hero.webp", alt: "Shared dormitory accommodation", size: "normal" },
    { src: "images/second-home/HIGHRES-showerwc(1).webp", thumb: "images/second-home/thumbs/HIGHRES-showerwc(1).webp", alt: "Shared washbasin area", size: "normal" },
    { src: "images/second-home/HIGHRES-outside5.webp", thumb: "images/second-home/thumbs/HIGHRES-outside5.webp", alt: "Games area with pool table", size: "normal" },
    { src: "images/second-home/HIGHRES-privatend2.webp", thumb: "images/second-home/thumbs/HIGHRES-privatend2.webp", alt: "Private room furnishings and amenities", size: "normal" },
    { src: "images/second-home/HIGHRES-daytime-entry.webp", thumb: "images/second-home/thumbs/HIGHRES-daytime-entry.webp", alt: "Second Home hostel exterior in daylight", size: "wide" },  ],


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
  filmProjects: [],

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
        mediaSrc: "images/diving-ro.jpg",
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
