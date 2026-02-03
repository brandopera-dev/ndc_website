import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  Camera,
  Clapperboard,
  Droplet,
  Network,
  Newspaper,
  Play,
  ShieldCheck,
  X,
} from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const Media = () => {
  const { t, language } = useI18n();
  const heroVideoId = "dQw4w9WgXcQ";

  const heroCards = [
    {
      title: "Contrôle qualité",
      subtitle: "Procédures & conformité",
      icon: ShieldCheck,
    },
    {
      title: "Disponibilité",
      subtitle: "Distribution continue",
      icon: Network,
    },
    {
      title: "Traçabilité",
      subtitle: "Suivi des volumes",
      icon: Droplet,
    },
  ];

  const videos = [
    {
      title: "Présentation de NDC Énergie",
      description:
        "Un aperçu de nos solutions énergétiques et de notre approche terrain.",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      title: "Sécurité & conformité sur site",
      description:
        "Focus sur la qualité, la traçabilité et la maîtrise des risques.",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      title: "Transport & transit : organisation des flux",
      description:
        "Planification, suivi et continuité opérationnelle sur les sites industriels.",
      youtubeId: "dQw4w9WgXcQ",
    },
  ];

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const activeVideo = videos[activeVideoIndex];
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [modalVideoId, setModalVideoId] = useState<string | null>(null);

  const openVideoModal = (youtubeId: string) => {
    setModalVideoId(youtubeId);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setModalVideoId(null);
  };

  // État pour le modal des images
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<{ src: string; alt: string; category?: string } | null>(null);

  const openImageModal = (image: { src: string; alt: string; category?: string }) => {
    setModalImage(image);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setModalImage(null);
  };

  // Catégories de la galerie
  const categories = language === "fr" ? [
    { id: "all", label: "Tout", icon: Camera },
    { id: "transport", label: "Transport", icon: Network },
    { id: "fuel", label: "Fuel Management", icon: Droplet },
    { id: "reseaux", label: "Réseaux", icon: ShieldCheck },
  ] : [
    { id: "all", label: "All", icon: Camera },
    { id: "transport", label: "Transport", icon: Network },
    { id: "fuel", label: "Fuel Management", icon: Droplet },
    { id: "reseaux", label: "Networks", icon: ShieldCheck },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const gallery = [
    // Transport
    { src: "/images/images_ndc/TRANSPORT/TR_1.webp", alt: "Flotte NDC", category: "transport" },
    { src: "/images/images_ndc/TRANSPORT/TR_2.webp", alt: "Camion citerne", category: "transport" },
    { src: "/images/images_ndc/TRANSPORT/TR_3.webp", alt: "Convoi routier", category: "transport" },
    { src: "/images/images_ndc/TRANSPORT/TR_4.webp", alt: "Livraison carburant", category: "transport" },
    { src: "/images/images_ndc/TRANSPORT/TR_5.webp", alt: "Transport sécurisé", category: "transport" },
    { src: "/images/images_ndc/TRANSPORT/TR_6.webp", alt: "Véhicules NDC", category: "transport" },
    { src: "/images/images_ndc/TRANSPORT/TR_7.webp", alt: "Opérations terrain", category: "transport" },
    { src: "/images/images_ndc/TRANSPORT/TR_8.webp", alt: "Logistique", category: "transport" },
    { src: "/images/images_ndc/TRANSPORT/TR_9.webp", alt: "Corridor transport", category: "transport" },
    { src: "/images/images_ndc/TRANSPORT/TR_10.webp", alt: "Transport hydrocarbures", category: "transport" },
    { src: "/images/images_ndc/CITERNE/C_1.webp", alt: "Citerne NDC", category: "transport" },
    { src: "/images/images_ndc/CITERNE/C_2.webp", alt: "Équipement citerne", category: "transport" },
    { src: "/images/images_ndc/CHAUFFEURS/CF-1.webp", alt: "Équipe chauffeurs", category: "transport" },
    { src: "/images/images_ndc/CHAUFFEURS/CF_2.webp", alt: "Chauffeurs professionnels", category: "transport" },
    { src: "/images/images_ndc/GARAGE/G_1.webp", alt: "Atelier maintenance", category: "transport" },
    { src: "/images/images_ndc/GARAGE/G_2.webp", alt: "Atelier maintenance", category: "transport" },
    { src: "/images/images_ndc/GARAGE/G_3.webp", alt: "Équipements garage", category: "transport" },
    // Fuel Management  
    { src: "/images/images_ndc/FUEL/1F.webp", alt: "Stockage hydrocarbures", category: "fuel" },
    { src: "/images/images_ndc/FUEL/2F.webp", alt: "Infrastructure de stockage", category: "fuel" },
    // { src: "/images/images_ndc/FUEL/3F.jpg", alt: "Installation cuves", category: "fuel" },
    { src: "/images/images_ndc/FUEL/6F.webp", alt: "Approvisionnement", category: "fuel" },
    { src: "/images/images_ndc/FUEL/1.webp", alt: "Dépôt carburant", category: "fuel" },
    { src: "/images/images_ndc/Bureaux/B-2.png", alt: "Équipements fuel", category: "fuel" },
    { src: "/images/images_ndc/FUEL/3.webp", alt: "Site de stockage", category: "fuel" },
    { src: "/images/images_ndc/FUEL/7.webp", alt: "Opérations fuel", category: "fuel" },
    { src: "/images/images_ndc/FUEL/13.webp", alt: "Maintenance équipements", category: "fuel" },
    { src: "/images/images_ndc/FUEL/14.webp", alt: "Contrôle qualité", category: "fuel" },
    { src: "/images/images_ndc/FUEL/16.webp", alt: "Équipements fuel", category: "fuel" },
    { src: "/images/images_ndc/FUEL/F-10.webp", alt: "Équipements fuel", category: "fuel" },
    { src: "/images/images_ndc/FUEL/F-8.webp", alt: "Équipements fuel", category: "fuel" },
    { src: "/images/images_ndc/FUEL/F-4.webp", alt: "Équipements fuel", category: "fuel" },
    { src: "/images/images_ndc/FUEL/20241214_182207.webp", alt: "Équipements fuel", category: "fuel" },
    { src: "/images/images_ndc/FUEL/F-7.webp", alt: "Équipements fuel", category: "fuel" },
    { src: "/images/images_ndc/FUEL/F-10.webp", alt: "Équipements fuel", category: "fuel" },

    // Réseaux de distribution
    { src: "/images/images_ndc/RESEAUX/NDC  de KATI101 copy.jpg", alt: "Station NDC Kati", category: "reseaux" },
    { src: "/images/images_ndc/RESEAUX/NDC  de KATI107 copy.jpg", alt: "Réseau distribution Kati", category: "reseaux" },
    { src: "/images/images_ndc/RESEAUX/NDC  de KATI131 1 copy.jpg", alt: "Point de distribution", category: "reseaux" },
    { src: "/images/images_ndc/RESEAUX/NDC  de KATI137 copy.jpg", alt: "Station-service NDC", category: "reseaux" },
    { src: "/images/images_ndc/RESEAUX/NDC  de KATI178 copy.jpg", alt: "Infrastructure station", category: "reseaux" },
    { src: "/images/images_ndc/RESEAUX/NDC  de KATI30 copy.jpg", alt: "Infrastructure station", category: "reseaux" },
    { src: "/images/images_ndc/RESEAUX/NDC-Lancement119-sm.jpg", alt: "Infrastructure station", category: "reseaux" },
    { src: "/images/images_ndc/Bureaux/B - 3.png", alt: "Infrastructure station", category: "reseaux" },
    { src: "/images/images_ndc/Bureaux/NDC--de-KATI206-sm.jpg", alt: "Infrastructure station", category: "reseaux" },
    
    // { src: "/images/images_ndc/RESEAUX/NDC Lancement142 copy.jpg", alt: "Inauguration station", category: "reseaux" },
    // Bureaux
    // { src: "/images/images_ndc/Bureaux/B-1.png", alt: "Siège NDC - Accueil", category: "bureaux" },
    // { src: "/images/images_ndc/Bureaux/B-2.png", alt: "Espace de travail", category: "bureaux" },
    // { src: "/images/images_ndc/Bureaux/B - 3.png", alt: "Salle de réunion", category: "bureaux" },
    // { src: "/images/images_ndc/Bureaux/B -4.png", alt: "Open space", category: "bureaux" },
    // { src: "/images/images_ndc/Bureaux/B - 8.png", alt: "Direction", category: "bureaux" },
    // { src: "/images/images_ndc/Bureaux/B - 9.png", alt: "Équipe bureaux", category: "bureaux" },
    // { src: "/images/images_ndc/Bureaux/B - 5.png", alt: "Salle conférence", category: "bureaux" },
    // Garage & Maintenance
    // { src: "/images/images_ndc/GARAGE/G-1.png", alt: "Atelier maintenance", category: "garage" },
    // { src: "/images/images_ndc/GARAGE/G - 2.png", alt: "Garage NDC", category: "garage" },
    // { src: "/images/images_ndc/GARAGE/G - 3.png", alt: "Équipements garage", category: "garage" },
    // Événements
    // { src: "/images/Social Media Size/NDC-Lancement103-sm.jpg", alt: "Cérémonie de lancement", category: "evenements" },
    // { src: "/images/Social Media Size/NDC-Lancement119-sm.jpg", alt: "Événement NDC", category: "evenements" },
    // { src: "/images/Social Media Size/NDC-Lancement130-sm.jpg", alt: "Partenaires NDC", category: "evenements" },
    // { src: "/images/Social Media Size/NDC--de-KATI101-sm.jpg", alt: "Inauguration Kati", category: "evenements" },
    // { src: "/images/Social Media Size/NDC--de-KATI134-sm.jpg", alt: "Événement terrain", category: "evenements" },
    // { src: "/images/Social Media Size/NDC--de-KATI181-sm.jpg", alt: "Célébration NDC", category: "evenements" },
  ];

  const filteredGallery = activeCategory === "all" 
    ? gallery 
    : gallery.filter(img => img.category === activeCategory);

  const   news = [
    {
      title: "NDC Énergie renforce ses capacités de distribution",
      date: "Janvier 2026",
      excerpt:
        "Déploiement de procédures et d'outils de traçabilité pour sécuriser la disponibilité des hydrocarbures sur site.",
    },
    {
      title: "Optimisation des flux logistiques sur sites industriels",
      date: "Décembre 2025",
      excerpt:
        "Amélioration de la planification des rotations et coordination opérationnelle continue pour réduire les retards.",
    },
    {
      title: "Qualité & conformité : nos standards opérationnels",
      date: "Novembre 2025",
      excerpt:
        "Mise en place de contrôles qualité, reporting et exploitation en continu pour des opérations fiables et conformes.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-black border-none overflow-hidden">
          <DialogTitle className="sr-only">Lecteur vidéo</DialogTitle>
          <button
            onClick={closeVideoModal}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {modalVideoId && (
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${modalVideoId}?autoplay=1&rel=0&modestbranding=1`}
                title="Vidéo NDC Énergie"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Image Modal */}
      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-black border-none overflow-hidden">
          <DialogTitle className="sr-only">Image en grand</DialogTitle>
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {modalImage && (
            <div className="relative">
              <img
                src={modalImage.src}
                alt={modalImage.alt}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      <section className="relative bg-[#1f1f1f] overflow-hidden ndc-swoosh-bg">
        <div className="relative pt-28 lg:pt-32 pb-14 lg:pb-20">
          <div className="absolute inset-0">
            {/* <div className="absolute inset-0 opacity-35">
              <iframe
                className="absolute inset-0 w-full h-full scale-[1.15] origin-center pointer-events-none"
                src={`https://www.youtube-nocookie.com/embed/${heroVideoId}?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=${heroVideoId}&modestbranding=1&rel=0`}
                title="NDC Énergie - Média"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div> */}
            <img
              src="/images/images_ndc/GARAGE/G_2.webp"
              alt="Industries et mines"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1f1f1f]/75 via-[#0a1628]/70 to-[#1f1f1f]/95" />
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(225,26,26,0.25),transparent_55%)]" /> */}
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur">
                  <span className="w-2 h-2 bg-[#e11a1a] rounded-full" />
                  {t("hero.media.badge")}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {language === "fr" ? (
                    <>
                      Immersion
                      <span className="text-[#e11a1a]"> terrain</span>
                      <br />
                      de NDC Énergie
                    </>
                  ) : (
                    <>
                      Field
                      <span className="text-[#e11a1a]"> immersion</span>
                      <br />
                      at NDC Energy
                    </>
                  )}
                </h1>

                <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl">
                  {t("hero.media.description")}
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <a href="#videos" className="w-full sm:w-auto">
                    <Button className="bg-[#e11a1a] hover:bg-red-700 text-white rounded-full px-6 py-3 font-semibold w-full sm:w-auto">
                      {t("hero.media.videosBtn")}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                  <a href="#galerie" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="border-white/25 text-white hover:bg-white/10 rounded-full px-6 py-3 font-semibold w-full sm:w-auto"
                    >
                      {t("hero.media.galleryBtn")}
                    </Button>
                  </a>
                </div>
              </div>

              {/* <div className="lg:col-span-5 lg:relative">
                <div className="lg:absolute lg:bottom-0 lg:right-0 w-full max-w-md">
                  <div className="rounded-3xl overflow-hidden border border-white/15 bg-black/25 backdrop-blur">
                    {heroCards.map((c, idx) => {
                      const Icon = c.icon;
                      const isLast = idx === heroCards.length - 1;
                      return (
                        <div
                          key={c.title}
                          className={`flex items-center gap-3 px-5 py-4 ${!isLast ? "border-b border-white/10" : ""}`}
                        >
                          <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white leading-tight">{c.title}</div>
                            <div className="text-xs text-white/75 mt-0.5">{c.subtitle}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
{/* 
      <section id="videos" className="py-16 bg-[#1f1f1f] ndc-swoosh-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#e11a1a] uppercase tracking-wider">
                <Clapperboard className="w-4 h-4" />
                Vidéos
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                Nos contenus vidéo
              </h2>
              <p className="text-white/75 mt-2 max-w-2xl">
                Une immersion dans nos opérations : infrastructure, distribution
                et logistique terrain.
              </p>
            </div>

            <Link to="/contact" className="hidden md:block">
              <Button
                className="bg-white text-[#1f1f1f] hover:bg-white/90 rounded-full"
                size="sm"
              >
                Proposer un contenu
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div 
                className="overflow-hidden border border-white/10 bg-black cursor-pointer group"
                onClick={() => openVideoModal(activeVideo.youtubeId)}
              >
                <div className="relative aspect-video"> 
                  <img
                    src={`https://i.ytimg.com/vi/${activeVideo.youtubeId}/maxresdefault.jpg`}
                    alt={activeVideo.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                   
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#e11a1a] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  
                  <div className="absolute inset-x-0 bottom-0 p-6 pointer-events-none bg-gradient-to-t from-black/80 to-transparent">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs text-white backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e11a1a]" />
                      Cliquer pour lire
                    </div>
                    <div className="mt-3 text-lg sm:text-xl font-bold text-white leading-tight">
                      {activeVideo.title}
                    </div>
                    <div className="mt-1 text-sm text-white/75 max-w-2xl">
                      {activeVideo.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="px-6 py-5 border-b border-white/10">
                  <div className="text-sm font-semibold text-white">
                    Playlist
                  </div>
                  <div className="text-xs text-white/70 mt-1">
                    Clique pour changer la vidéo
                  </div>
                </div>

                <div className="p-3">
                  {videos.map((v, idx) => {
                    const isActive = idx === activeVideoIndex;
                    return (
                      <button
                        key={v.title}
                        type="button"
                        onClick={() => {
                          setActiveVideoIndex(idx);
                          openVideoModal(v.youtubeId);
                        }}
                        className={`w-full text-left flex gap-3 rounded-2xl p-3 transition-colors ${
                          isActive ? "bg-white/10" : "hover:bg-white/5"
                        }`}
                      >
<div className="w-28 shrink-0">
                                        <div className="relative overflow-hidden border border-white/10 bg-black aspect-video group/thumb">
                                          <img
                                            src={`https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`}
                                            alt={v.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            loading="lazy"
                                          />
                                          {isActive && (
                                            <div className="absolute inset-0 ring-2 ring-[#e11a1a] ring-inset" />
                                          )}
                                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                                            <Play className="w-6 h-6 text-white" fill="white" />
                                          </div>
                                        </div>
                                      </div>

                        <div className="min-w-0">
                          <div
                            className={`text-sm font-semibold leading-snug ${isActive ? "text-white" : "text-white/90"}`}
                          >
                            {v.title}
                          </div>
                          <div className="text-xs text-white/70 mt-1 line-clamp-2">
                            {v.description}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 md:hidden">
                <Link to="/contact">
                  <Button
                    className="bg-white text-[#1f1f1f] hover:bg-white/90 rounded-full w-full"
                    size="sm"
                  >
                    Proposer un contenu
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="galerie" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e11a1a]/10 border border-[#e11a1a]/20 mb-4">
              <Camera className="w-4 h-4 text-[#e11a1a]" />
              <span className="text-[#e11a1a] text-sm font-semibold">{language === "fr" ? "Galerie photos" : "Photo gallery"}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {language === "fr" ? "Nos activités en images" : "Our activities in pictures"}
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              {language === "fr" 
                ? "Découvrez nos infrastructures, nos équipes et nos opérations sur le terrain à travers notre galerie photo."
                : "Discover our infrastructure, teams and field operations through our photo gallery."}
            </p>
          </div>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#e11a1a] text-white shadow-lg shadow-red-500/25"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Compteur */}
          <div className="text-center mb-8">
            <span className="text-gray-500 text-sm">
              {filteredGallery.length} photo{filteredGallery.length > 1 ? "s" : ""} 
              {activeCategory !== "all" && ` ${language === "fr" ? "dans" : "in"} "${categories.find(c => c.id === activeCategory)?.label}"`}
            </span>
          </div>

          {/* Grille d'images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGallery.map((img, index) => (
              <div 
                key={`${img.src}-${index}`} 
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div 
                  className={`relative overflow-hidden ${index === 0 ? "h-[300px] md:h-full" : "h-[200px] md:h-[250px]"}`}
                  onClick={() => openImageModal(img)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icône */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message si vide */}
          {filteredGallery.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">{language === "fr" ? "Aucune image dans cette catégorie" : "No images in this category"}</p>
            </div>
          )}
        </div>
      </section>

      {/* <section id="actualites" className="py-16 section-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#e11a1a] uppercase tracking-wider">
            <Newspaper className="w-4 h-4" />
            Actualités
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
            Blogs & news
          </h2>
          <p className="text-white/70 mt-2 max-w-2xl">
            Mises à jour, annonces et communications autour de NDC Énergie.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {news.map((n) => (
              <div
                key={n.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col"
              >
                <div className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                  {n.date}
                </div>
                <h3 className="mt-2 font-bold text-white text-lg leading-snug">
                  {n.title}
                </h3>
                <p className="text-white/70 text-sm mt-3 leading-relaxed flex-1">
                  {n.excerpt}
                </p>
                <div className="mt-6">
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      className="rounded-full border-white/20 text-white hover:bg-white/10"
                      size="sm"
                    >
                      En savoir plus
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Media;
