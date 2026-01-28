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

const Media = () => {
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
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  const openImageModal = (image: { src: string; alt: string }) => {
    setModalImage(image);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setModalImage(null);
  };

  const gallery = [
    // Images Social Media Size - Lancement
    { src: "/images/Social Media Size/NDC-Lancement103-sm.jpg", alt: "Lancement NDC - Cérémonie" },
    { src: "/images/storage-tanks-petroleum-products.jpg", alt: "Infrastructures de stockage" },
    { src: "/images/Social Media Size/NDC-Lancement113-sm.jpg", alt: "Lancement NDC - Équipe" },
    { src: "/images/high-angle-view-industry-factory.jpg", alt: "Opérations industrielles" },
    { src: "/images/Social Media Size/NDC-Lancement119-sm.jpg", alt: "Lancement NDC - Événement" },
    { src: "/images/vehicles-coal-mine-view.jpg", alt: "Logistique sur site" },
    { src: "/images/Social Media Size/NDC-Lancement124-sm.jpg", alt: "Lancement NDC - Inauguration" },
    { src: "/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg", alt: "Transport & transit" },
    { src: "/images/Social Media Size/NDC-Lancement130-sm.jpg", alt: "Lancement NDC - Partenaires" },
    { src: "/images/Social Media Size/NDC-Lancement142-sm.jpg", alt: "Lancement NDC - Célébration" },
    { src: "/images/Social Media Size/NDC-Lancement148-sm.jpg", alt: "Lancement NDC - Discours" },
    // Images Social Media Size - Kati
    { src: "/images/Social Media Size/NDC--de-KATI101-sm.jpg", alt: "Opérations terrain - Kati" },
    { src: "/images/storage-tanks-petroleum-products.jpg", alt: "Stockage & distribution" },
    { src: "/images/Social Media Size/NDC--de-KATI107-sm.jpg", alt: "Infrastructure NDC" },
    { src: "/images/Social Media Size/NDC--de-KATI121-sm.jpg", alt: "Équipe opérationnelle" },
    { src: "/images/high-angle-view-industry-factory.jpg", alt: "Infrastructures industrielles" },
    { src: "/images/Social Media Size/NDC--de-KATI131-1-sm.jpg", alt: "Logistique sur site" },
    { src: "/images/Social Media Size/NDC--de-KATI133-sm.jpg", alt: "Distribution hydrocarbures" },
    { src: "/images/Social Media Size/NDC--de-KATI134-sm.jpg", alt: "Transport sécurisé" },
    { src: "/images/vehicles-coal-mine-view.jpg", alt: "Convois sécurisés" },
    { src: "/images/Social Media Size/NDC--de-KATI137-sm.jpg", alt: "Contrôle qualité" },
    { src: "/images/Social Media Size/NDC--de-KATI152-sm.jpg", alt: "Installations NDC" },
    { src: "/images/Social Media Size/NDC--de-KATI178-sm.jpg", alt: "Opérations de stockage" },
    { src: "/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg", alt: "Transport minier" },
    { src: "/images/Social Media Size/NDC--de-KATI181-sm.jpg", alt: "Flotte NDC" },
    { src: "/images/Social Media Size/NDC--de-KATI187-sm.jpg", alt: "Équipements terrain" },
    { src: "/images/Social Media Size/NDC--de-KATI198-sm.jpg", alt: "Coordination opérationnelle" },
    { src: "/images/Social Media Size/NDC--de-KATI199-sm.jpg", alt: "Service client" },
    { src: "/images/Social Media Size/NDC--de-KATI202-sm.jpg", alt: "Partenariat industriel" },
    { src: "/images/Social Media Size/NDC--de-KATI204-sm.jpg", alt: "Conformité & sécurité" },
    { src: "/images/Social Media Size/NDC--de-KATI206-sm.jpg", alt: "Solutions énergétiques" },
    { src: "/images/Social Media Size/NDC--de-KATI216-sm.jpg", alt: "Expertise logistique" },
    { src: "/images/Social Media Size/NDC--de-KATI30-sm.jpg", alt: "Transport & transit" },
    { src: "/images/Social Media Size/NDC--de-KATI55-sm.jpg", alt: "Fuel Management" },
    { src: "/images/Social Media Size/NDC--de-KATI80-sm.jpg", alt: "Réseaux de distribution" },
    { src: "/images/Social Media Size/NDC--de-KATI92-sm.jpg", alt: "Infrastructure de stockage" },
    { src: "/images/Social Media Size/NDC--de-KATI19-sm.jpg", alt: "Opérations quotidiennes" },
    { src: "/images/Social Media Size/1NDC--de-KATI134-sm.jpg", alt: "Livraison sécurisée" },
  ];

  const news = [
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
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-semibold">{modalImage.alt}</p>
              </div>
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
              src="/images/high-angle-view-industry-factory.jpg"
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
                  MÉDIA
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Immersion
                  <span className="text-[#e11a1a]"> terrain</span>
                  <br />
                  de NDC Énergie
                </h1>

                <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl">
                  Vidéos grande nature, images et actualités : découvrez nos
                  infrastructures, nos opérations et les équipes qui font
                  avancer vos sites.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <a href="#videos" className="w-full sm:w-auto">
                    <Button className="bg-[#e11a1a] hover:bg-red-700 text-white rounded-full px-6 py-3 font-semibold w-full sm:w-auto">
                      Voir les vidéos
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                  <a href="#galerie" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      className="border-white/25 text-white hover:bg-white/10 rounded-full px-6 py-3 font-semibold w-full sm:w-auto"
                    >
                      Explorer la galerie
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
                  {/* Thumbnail au lieu de l'iframe */}
                  <img
                    src={`https://i.ytimg.com/vi/${activeVideo.youtubeId}/maxresdefault.jpg`}
                    alt={activeVideo.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay avec bouton play */}
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
      </section>

      <section id="galerie" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#e11a1a] uppercase tracking-wider">
            <Camera className="w-4 h-4" />
            Galerie
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
            Images terrain
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Infrastructures, distribution, opérations et transport.
          </p>

          <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {gallery.map((img) => (
              <div key={img.alt} className="mb-6 break-inside-avoid">
                <div 
                  className="group overflow-hidden border border-gray-200 bg-white cursor-pointer"
                  onClick={() => openImageModal(img)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                      <div className="text-sm font-semibold text-white">
                        {img.alt}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="actualites" className="py-16 section-dark">
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
      </section>

      <Footer />
    </div>
  );
};

export default Media;
