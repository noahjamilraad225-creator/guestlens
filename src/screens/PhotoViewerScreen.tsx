import React, { useState } from 'react';
import { FILMSTRIP_PHOTOS } from '../data/mockData';
import { MemoryItem, ScreenId } from '../types';

interface PhotoViewerScreenProps {
  memory?: MemoryItem;
  onBack: () => void;
  onNavigate: (screen: ScreenId) => void;
}

export const PhotoViewerScreen: React.FC<PhotoViewerScreenProps> = ({
  memory,
  onBack,
  onNavigate
}) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(3); // Gion Kyoto
  const [isLiked, setIsLiked] = useState(true);
  const [likeCount, setLikeCount] = useState(24);
  const [showHeartBurst, setShowHeartBurst] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentsList, setCommentsList] = useState([
    { author: 'Léo B.', text: 'L’ambiance nocturne est juste magique ! 🏮', time: 'Il y a 12 min' },
    { author: 'Maya L.', text: 'Quelle prise de vue incroyable Camille ✨', time: 'Il y a 8 min' },
    { author: 'Julien T.', text: 'Les reflets sur les pavés mouillés... pépite.', time: 'Il y a 5 min' }
  ]);
  const [newComment, setNewComment] = useState('');

  const currentPhoto = FILMSTRIP_PHOTOS[activePhotoIdx];

  const triggerHeartBurst = () => {
    setShowHeartBurst(true);
    setTimeout(() => setShowHeartBurst(false), 550);
  };

  const handleToggleLike = () => {
    if (!isLiked) {
      setLikeCount((prev) => prev + 1);
      setIsLiked(true);
      triggerHeartBurst();
    } else {
      setLikeCount((prev) => prev - 1);
      setIsLiked(false);
    }
  };

  const handleDoubleTap = () => {
    if (!isLiked) {
      handleToggleLike();
    } else {
      triggerHeartBurst();
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setCommentsList((prev) => [
      ...prev,
      { author: 'Moi', text: newComment.trim(), time: 'À l’instant' }
    ]);
    setNewComment('');
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-black text-[#1a1b1f] font-sans antialiased select-none overflow-hidden relative">
      {/* Zone d'affichage Photo Immersive */}
      <div className="relative w-full aspect-[9/16] max-h-[820px] rounded-b-[32px] overflow-hidden bg-black shadow-2xl mx-auto">
        {/* Image principale */}
        <img
          src={currentPhoto.url}
          alt={currentPhoto.title}
          onClick={handleDoubleTap}
          className="w-full h-full object-cover transition-all duration-500 ease-out cursor-pointer"
        />

        {/* Gradient de contraste supérieur et inférieur */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-transparent via-45% to-black/85"></div>

        {/* Double tap heart micro-animation target */}
        <div
          className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out z-30 ${
            showHeartBurst ? 'opacity-100 scale-125' : 'opacity-0 scale-50'
          }`}
        >
          <span className="material-symbols-outlined text-[#fc695d] text-[96px] drop-shadow-2xl fill-icon animate-pulse">
            favorite
          </span>
        </div>

        {/* Barre d'en-tête flottante */}
        <div className="absolute top-4 inset-x-3 flex items-center justify-between z-20 pt-safe">
          {/* Bouton retour & Informations Auteur */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onBack}
              aria-label="Retour"
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-black shadow-sm active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[22px]">chevron_left</span>
            </button>
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUn6tNNPj5ltbcn2yhW8kMt_3x3Pp1qLnQb1PmPrqus9IUnrwGPNVEi4_gFF88YZ6FqY3L_FUMYVS8n1a7R8-E2lHOBAXEI0q1QPNZZJeMa1xCmFW9Dx0reoDq7mN4bAZpDFOqxQ7Ycx5Q8Uh9xYT6J9Lh3X9GiP-OYXP9v43YAQ2TJLbvKqcRfRhcADVsE8dFdklG5Ak2-IFAHVare5W7VSuwzyiu802Udh1jBxcYYvkCqBlFoeQnTA"
                alt="Camille M."
                className="w-7 h-7 rounded-full object-cover"
              />
              <div className="flex flex-col pr-1">
                <span className="text-[12px] text-[#1a1b1f] font-bold leading-tight">
                  Camille M.
                </span>
                <span className="text-[10px] leading-tight text-[#444748]">Il y a 15 min</span>
              </div>
            </div>
          </div>

          {/* Actions de droite : Favori rapide & Options */}
          <div className="flex items-center space-x-1.5">
            <button
              onClick={handleToggleLike}
              aria-label="Ajouter aux favoris"
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center active:scale-90 transition-transform shadow-sm"
            >
              <span
                className={`material-symbols-outlined text-[20px] ${
                  isLiked ? 'text-[#ae302a] fill-icon' : 'text-black'
                }`}
              >
                favorite
              </span>
            </button>
            <button
              onClick={() => onNavigate('live_slideshow')}
              aria-label="Options de la photo"
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-black active:scale-90 transition-transform shadow-sm"
              title="Lancer le diaporama"
            >
              <span className="material-symbols-outlined text-[20px]">slideshow</span>
            </button>
          </div>
        </div>

        {/* Tag d'album & Géolocalisation */}
        <div className="absolute top-20 left-4 z-10 flex flex-col space-y-1">
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md text-white w-fit shadow-xs">
            <span className="material-symbols-outlined text-[14px]">auto_stories</span>
            <span className="text-[11px] font-semibold tracking-wide">Voyage au Japon</span>
          </div>
          <div className="flex items-center space-x-1 px-3 py-0.5 rounded-full bg-black/30 backdrop-blur-md text-white/90 w-fit">
            <span className="material-symbols-outlined text-[12px]">location_on</span>
            <span className="text-[11px] font-medium">Ruelle de Gion, Kyoto</span>
          </div>
        </div>

        {/* Filmstrip miniature & Barre d'actions intégrées en bas */}
        <div className="absolute bottom-4 inset-x-3 flex flex-col space-y-3 z-20">
          {/* Filmstrip horizontal */}
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-center justify-between px-1 text-white/90">
              <span className="text-[11px] uppercase tracking-wider font-bold">
                Dans cette collection
              </span>
              <span className="text-[11px] font-medium">
                Photo {activePhotoIdx + 1} sur {FILMSTRIP_PHOTOS.length}
              </span>
            </div>

            <div className="flex items-center space-x-2 overflow-x-auto py-1 scrollbar-none px-0.5">
              {FILMSTRIP_PHOTOS.map((photo, idx) => {
                const isActive = idx === activePhotoIdx;
                return (
                  <button
                    key={photo.id}
                    onClick={() => setActivePhotoIdx(idx)}
                    type="button"
                    className={`flex-shrink-0 relative rounded-xl overflow-hidden transition-all duration-200 active:scale-95 shadow-sm ${
                      isActive
                        ? 'w-14 h-18 ring-2 ring-white scale-105 opacity-100'
                        : 'w-12 h-16 opacity-65 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dock d'actions flottant translucide */}
          <div className="w-full bg-white/90 backdrop-blur-xl rounded-full px-3 py-2 flex items-center justify-between shadow-2xl border border-white/20">
            {/* J'aime */}
            <button
              onClick={handleToggleLike}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors active:scale-95 text-[#1a1b1f]"
            >
              <span
                className={`material-symbols-outlined text-[20px] ${
                  isLiked ? 'text-[#ae302a] fill-icon' : 'text-[#444748]'
                }`}
              >
                favorite
              </span>
              <span className="text-[13px] font-bold text-[#1a1b1f]">{likeCount}</span>
            </button>

            {/* Commentaires */}
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors active:scale-95 text-[#1a1b1f]"
            >
              <span className="material-symbols-outlined text-[20px] text-[#444748]">
                chat_bubble
              </span>
              <span className="text-[13px] font-semibold text-[#1a1b1f]">
                {commentsList.length}
              </span>
            </button>

            {/* Télécharger HD */}
            <button
              onClick={() => {
                const a = document.createElement('a');
                a.href = currentPhoto.url;
                a.target = '_blank';
                a.download = `${currentPhoto.title}.jpg`;
                a.click();
              }}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors active:scale-95 text-[#1a1b1f]"
            >
              <span className="material-symbols-outlined text-[20px] text-[#444748]">
                arrow_downward
              </span>
              <span className="text-[11px] font-bold tracking-wide text-[#1a1b1f]">HD</span>
            </button>

            {/* Partager */}
            <button
              onClick={() => onNavigate('qr_invite')}
              aria-label="Partager la photo"
              className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center shadow-md active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined text-[18px]">share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Commentaires Modal Bottom Sheet */}
      {showComments && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end justify-center">
          <div className="w-full max-w-md bg-white rounded-t-3xl p-5 shadow-2xl flex flex-col max-h-[65vh] animate-slide-up">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                <span className="font-bold text-base">Commentaires ({commentsList.length})</span>
              </div>
              <button
                onClick={() => setShowComments(false)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-3 space-y-3">
              {commentsList.map((c, i) => (
                <div key={i} className="flex flex-col bg-slate-50 p-2.5 rounded-xl">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span className="font-semibold text-slate-900">{c.author}</span>
                    <span>{c.time}</span>
                  </div>
                  <p className="text-sm text-slate-800">{c.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleAddComment} className="pt-2 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ajouter un mot doux..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1 bg-slate-100 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-black"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
