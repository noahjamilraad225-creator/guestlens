import React, { useState, useEffect } from 'react';
import { SLIDESHOW_ITEMS } from '../data/mockData';
import { ScreenId } from '../types';

interface LiveSlideshowScreenProps {
  onBack: () => void;
  onNavigate: (screen: ScreenId) => void;
  onOpenUpload: () => void;
}

export const LiveSlideshowScreen: React.FC<LiveSlideshowScreenProps> = ({
  onBack,
  onNavigate,
  onOpenUpload
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState<number>(5000);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(48);
  const [isFading, setIsFading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Slideshow auto-advance
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % SLIDESHOW_ITEMS.length);
        setIsFading(false);
      }, 300);
    }, speed);

    return () => clearInterval(interval);
  }, [isPlaying, speed]);

  const currentSlide = SLIDESHOW_ITEMS[currentIndex];

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#faf9fe] text-[#1a1b1f] font-sans antialiased">
      {/* Header bar */}
      <header className="sticky top-0 w-full z-40 pt-safe bg-[#faf9fe]/80 backdrop-blur-xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            aria-label="Retour"
            className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-black hover:bg-[#eeedf3] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-xl px-3 py-1.5 rounded-full shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ae302a] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ae302a]"></span>
            </span>
            <span className="text-[11px] text-[#1a1b1f] uppercase tracking-wider font-bold">
              En direct
            </span>
            <span className="text-[#c4c7c7] text-[11px]">•</span>
            <span className="text-[11px] text-[#444748] font-medium">50 souvenirs</span>
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center space-x-1.5">
          <button
            onClick={() => onNavigate('qr_invite')}
            aria-label="Diffuser via AirPlay"
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1a1b1f] shadow-sm active:scale-95 transition-transform hover:bg-slate-100"
            title="Partager"
          >
            <span className="material-symbols-outlined text-[20px]">airplay</span>
          </button>
          <button
            onClick={handleToggleFullscreen}
            aria-label="Mode plein écran"
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1a1b1f] shadow-sm active:scale-95 transition-transform hover:bg-slate-100"
            title={isFullscreen ? 'Quitter plein écran' : 'Plein écran'}
          >
            <span className="material-symbols-outlined text-[20px]">
              {isFullscreen ? 'fullscreen_exit' : 'fullscreen'}
            </span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 px-4 pb-12 flex flex-col space-y-5">
        {/* Scène Principale : Photo en Vedette & Cartouche Émotion */}
        <section className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl bg-[#e3e2e7] transition-all duration-700">
          <img
            src={currentSlide.url}
            alt="Souvenir en vedette"
            className={`w-full h-full object-cover transition-opacity duration-300 ease-out ${
              isFading ? 'opacity-40' : 'opacity-100'
            }`}
          />

          {/* Scrim dégradé pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none"></div>

          {/* Capsule Auteur Flottante sur le média */}
          <div className="absolute top-4 left-4 flex items-center space-x-1.5 bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
            <div className="w-5 h-5 rounded-full overflow-hidden bg-[#e9e7ed] flex items-center justify-center text-[#1a1b1f]">
              <span className="material-symbols-outlined text-[13px]">person</span>
            </div>
            <p className="text-[12px] text-[#1a1b1f] font-semibold">
              Ajouté par {currentSlide.author}
            </p>
            <span className="text-[#c4c7c7] text-[10px]">•</span>
            <span className="text-[11px] text-[#444748]">{currentSlide.timestamp}</span>
          </div>

          {/* Déclencheur tactile d'appréciation instantanée */}
          <button
            onClick={handleLike}
            className={`absolute bottom-5 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#ae302a] shadow-lg active:scale-90 transition-all ${
              isLiked ? 'scale-110' : ''
            }`}
          >
            <span
              className={`material-symbols-outlined text-[24px] ${
                isLiked ? 'fill-icon' : ''
              }`}
            >
              favorite
            </span>
          </button>

          {/* Légende contextuelle & Émotion */}
          <div className="absolute bottom-5 left-4 right-20 pointer-events-none">
            <p className="text-[17px] text-white font-medium leading-snug drop-shadow-sm line-clamp-2">
              {currentSlide.caption}
            </p>
            <div className="flex items-center space-x-1 mt-1 text-white/80">
              <span className="material-symbols-outlined text-[14px]">photo_camera</span>
              <span className="text-[11px] font-medium">{currentSlide.badgeText}</span>
            </div>
          </div>
        </section>

        {/* Flux des Dernières Prises : Vignettes Polaroïd décalées */}
        <section className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center space-x-1.5">
              <span className="material-symbols-outlined text-[18px] text-[#ae302a]">flare</span>
              <h2 className="text-[14px] text-[#1a1b1f] font-bold tracking-tight">
                Dernières captures des invités
              </h2>
            </div>
            <span className="text-[11px] text-[#444748] font-medium">Flux instantané</span>
          </div>

          {/* Carrousel horizontal à défilement tactile */}
          <div className="flex space-x-3 overflow-x-auto pb-2 pt-1 -mx-4 px-4 scrollbar-none snap-x">
            {/* Vignette 1 (Léo) */}
            <article
              onClick={() => {
                setCurrentIndex(1);
              }}
              className="flex-shrink-0 w-36 snap-start flex flex-col space-y-1.5 group cursor-pointer"
            >
              <div className="relative w-36 h-44 rounded-xl overflow-hidden shadow-sm bg-[#e9e7ed] transition-transform duration-300 group-hover:scale-102 -rotate-1">
                <img
                  src={SLIDESHOW_ITEMS[1].url}
                  alt="Capture par Léo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1.5 inset-x-1.5 bg-white/85 backdrop-blur-md px-1.5 py-1 rounded text-center">
                  <span className="text-[11px] text-[#1a1b1f] truncate block font-semibold">
                    Léo B.
                  </span>
                </div>
              </div>
              <span className="text-[11px] text-[#444748] text-center">Il y a 38s</span>
            </article>

            {/* Vignette 2 (Camille) */}
            <article
              onClick={() => {
                setCurrentIndex(2);
              }}
              className="flex-shrink-0 w-36 snap-start flex flex-col space-y-1.5 group cursor-pointer"
            >
              <div className="relative w-36 h-44 rounded-xl overflow-hidden shadow-sm bg-[#e9e7ed] transition-transform duration-300 group-hover:scale-102 rotate-1">
                <img
                  src={SLIDESHOW_ITEMS[2].url}
                  alt="Capture par Camille"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1.5 inset-x-1.5 bg-white/85 backdrop-blur-md px-1.5 py-1 rounded text-center">
                  <span className="text-[11px] text-[#1a1b1f] truncate block font-semibold">
                    Camille R.
                  </span>
                </div>
              </div>
              <span className="text-[11px] text-[#444748] text-center">Il y a 1 min</span>
            </article>

            {/* Vignette 3 (Julien) */}
            <article
              onClick={() => {
                setCurrentIndex(3);
              }}
              className="flex-shrink-0 w-36 snap-start flex flex-col space-y-1.5 group cursor-pointer"
            >
              <div className="relative w-36 h-44 rounded-xl overflow-hidden shadow-sm bg-[#e9e7ed] transition-transform duration-300 group-hover:scale-102 -rotate-2">
                <img
                  src={SLIDESHOW_ITEMS[3].url}
                  alt="Capture par Julien"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1.5 inset-x-1.5 bg-white/85 backdrop-blur-md px-1.5 py-1 rounded text-center">
                  <span className="text-[11px] text-[#1a1b1f] truncate block font-semibold">
                    Julien T.
                  </span>
                </div>
              </div>
              <span className="text-[11px] text-[#444748] text-center">Il y a 2 min</span>
            </article>

            {/* Carte d'invitation au partage rapide */}
            <div
              onClick={onOpenUpload}
              className="flex-shrink-0 w-36 h-44 rounded-xl bg-[#f4f3f8] flex flex-col items-center justify-center text-center p-3 space-y-1.5 snap-start cursor-pointer hover:bg-[#e9e7ed] transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#e3e2e7] flex items-center justify-center text-black shadow-sm">
                <span className="material-symbols-outlined text-[20px]">add_a_photo</span>
              </div>
              <p className="text-[12px] text-[#1a1b1f] font-bold">Votre tour !</p>
              <p className="text-[10px] text-[#444748] leading-tight">
                Scannez le QR code pour publier
              </p>
            </div>
          </div>
        </section>

        {/* Station de Contrôle Inférieure Flottante */}
        <aside className="w-full bg-white/95 backdrop-blur-2xl rounded-2xl p-3.5 shadow-md space-y-3.5 border border-slate-100">
          {/* Ligne de pilotage Diaporama */}
          <div className="flex items-center justify-between">
            {/* Lecture / Pause */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handleTogglePlay}
                aria-label="Mettre en pause ou relancer le diaporama"
                className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center shadow-md active:scale-95 transition-transform"
              >
                <span className="material-symbols-outlined text-[22px]">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>
              <div className="flex flex-col">
                <span className="text-[13px] text-[#1a1b1f] font-bold">
                  {isPlaying ? 'Diaporama actif' : 'En pause'}
                </span>
                <span className="text-[11px] text-[#444748]">Transition en continu</span>
              </div>
            </div>

            {/* Sélecteur de vitesse d'affichage */}
            <div
              aria-label="Vitesse de défilement"
              className="flex items-center bg-[#e9e7ed] p-1 rounded-full space-x-1"
            >
              <button
                onClick={() => setSpeed(3000)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all ${
                  speed === 3000
                    ? 'bg-white text-black shadow-sm'
                    : 'text-[#444748] hover:text-black'
                }`}
              >
                3s
              </button>
              <button
                onClick={() => setSpeed(5000)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all ${
                  speed === 5000
                    ? 'bg-white text-black shadow-sm'
                    : 'text-[#444748] hover:text-black'
                }`}
              >
                5s
              </button>
              <button
                onClick={() => setSpeed(10000)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all ${
                  speed === 10000
                    ? 'bg-white text-black shadow-sm'
                    : 'text-[#444748] hover:text-black'
                }`}
              >
                10s
              </button>
            </div>
          </div>

          {/* Barre d'accès spectateur avec Mini-QR Code intégré */}
          <div
            onClick={() => onNavigate('qr_invite')}
            className="flex items-center justify-between bg-[#f4f3f8] p-2.5 rounded-xl cursor-pointer hover:bg-[#eeedf3] transition-colors"
          >
            <div className="flex items-center space-x-3">
              {/* Rendu vectoriel ultra-léger d'un QR code stylisé */}
              <div className="w-12 h-12 bg-white p-1 rounded-lg shadow-sm flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-full h-full text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect height="7" width="7" x="3" y="3"></rect>
                  <rect height="7" width="7" x="14" y="3"></rect>
                  <rect height="7" width="7" x="14" y="14"></rect>
                  <rect height="7" width="7" x="3" y="14"></rect>
                  <line x1="7" x2="7.01" y1="7" y2="7"></line>
                  <line x1="17" x2="17.01" y1="7" y2="7"></line>
                  <line x1="7" x2="7.01" y1="17" y2="17"></line>
                  <line x1="17" x2="17.01" y1="17" y2="17"></line>
                </svg>
              </div>
              <div className="flex flex-col">
                <p className="text-[13px] text-[#1a1b1f] font-bold">Partager un souvenir</p>
                <p className="text-[11px] text-[#444748]">
                  Visez l'écran ou ouvrez{' '}
                  <span className="font-semibold text-[#1a1b1f]">guestlens.co/soir</span>
                </p>
              </div>
            </div>

            {/* Badge Sans Appli */}
            <div className="px-2.5 py-1 bg-[#7efba6] text-[#00210d] rounded-full flex items-center space-x-1 shadow-xs">
              <span className="material-symbols-outlined text-[14px]">bolt</span>
              <span className="text-[11px] font-bold">Sans appli</span>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};
