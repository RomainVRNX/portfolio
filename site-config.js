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
     Mobile : MP4 léger H.264 (écran jusqu'à 768 px).
     Desktop : H.265 (HEVC), avec H.264 de secours.
     Chaque navigateur charge la source adaptée et utilise
     le poster si la vidéo ne peut pas démarrer.
  */
  heroMedia: {
    hevc: "images/hero-ocean-h265.mp4",
    avc: "images/hero-ocean-h264.mp4",
    mobile: "images/hero-ocean-mobile.mp4",
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
       - mediaType   : "image", "video" ou "youtube"
       - link        : URL de destination (optionnel)
  */
  filmProjects: [
    {
      title: "A Day at Sea with Dad",
      meta: "PERSONAL FILM · 2026",
      description: "A day at sea with my father, celebrating my birthday and capturing the first underwater images with my new camera housing. One last memory together before moving abroad.",
      mediaSrc: "images/a-day-at-sea-with-dad.jpg",
      mediaType: "youtube",
      link: "https://www.youtube.com/watch?v=F82lGq1P4YU"
    }
  ],

  /* ─────────────────────────────────────────────
     5. HERO — Texte d'identité (index.html)
     ─────────────────────────────────────────────
     Le petit texte au-dessus du titre Hero.
  */
  heroLabel: "Romain Vernay",


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
