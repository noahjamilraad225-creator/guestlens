import React, { useState } from 'react';
import { Collection, MemoryItem, ScreenId } from '../types';

interface AlbumDetailScreenProps {
  collection: Collection;
  memories: MemoryItem[];
  onBack: () => void;
  onNavigate: (screen: ScreenId) => void;
  onSelectMemory: (mem: MemoryItem) => void;
  onOpenUpload: () => void;
}

export const AlbumDetailScreen: React.FC<AlbumDetailScreenProps> = ({
  collection,
  memories,
  onBack,
  onNavigate,
  onSelectMemory,
  onOpenUpload
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'photos' | 'videos' | 'audio'>('all');
  const [downloadToast, setDownloadToast] = useState(false);

  const filteredMemories = memories.filter((m) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'photos') return m.type === 'photo';
    if (activeFilter === 'videos') return m.type === 'video';
    if (activeFilter === 'audio') return m.type === 'audio';
    return true;
  });

  const handleDownloadAll = () => {
    setDownloadToast(true);
    setTimeout(() => setDownloadToast(false), 2500);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#faf9fe] text-[#1a1b1f] font-sans antialiased relative">
      {/* Header */}
      <header className="sticky top-0 w-full z-30 pt-safe bg-[#faf9fe]/90 backdrop-blur-xl border-b border-black/[0.03]">
        <div className="h-16 px-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={onBack}
              aria-label="Retour aux collections"
              className="w-10 h-10 rounded-full bg-white shadow-xs flex items-center justify-center text-[#1a1b1f] hover:bg-[#eeedf3] active:scale-95 transition-all border border-slate-100"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
            </button>
            <span className="text-[19px] font-bold tracking-tight text-[#1a1b1f]">
              Détail de l'album
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Options"
              className="w-10 h-10 rounded-full bg-white shadow-xs flex items-center justify-center text-[#1a1b1f] hover:bg-[#eeedf3] active:scale-95 transition-all border border-slate-100"
            >
              <span className="material-symbols-outlined text-[20px]">more_horiz</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-white text-[17px]">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-5 pt-3 pb-28">
        {/* Hero Stack Preview Card */}
        <div className="relative w-full rounded-2xl bg-[#fde8e5] p-3 shadow-[0_8px_30px_rgba(0,0,0,0.03)] overflow-hidden">
          <div className="grid grid-cols-3 gap-2 h-44 w-full">
            <div className="relative rounded-[20px] overflow-hidden shadow-xs">
              <img
                className="w-full h-full object-cover"
                src={collection.coverPhotos[0]}
                alt="Vue de Kyoto"
              />
            </div>
            <div className="relative rounded-[20px] overflow-hidden shadow-xs">
              <img
                className="w-full h-full object-cover"
                src={collection.coverPhotos[1] || collection.coverPhotos[0]}
                alt="Portes Torii"
              />
            </div>
            <div className="relative rounded-[20px] overflow-hidden shadow-xs">
              <img
                className="w-full h-full object-cover"
                src={collection.coverPhotos[2] || collection.coverPhotos[0]}
                alt="Mont Fuji"
              />
            </div>
          </div>

          {/* Frosted Bottom Overlay Pill inside Hero */}
          <div className="absolute bottom-3 inset-x-3 h-16 rounded-[22px] bg-white/85 backdrop-blur-xl flex items-center justify-between px-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#60de8c] animate-pulse"></span>
              <span className="text-[12px] font-semibold text-[#1a1b1f]">
                Synchro auto depuis 8 téléphones
              </span>
            </div>
            <button
              onClick={onOpenUpload}
              aria-label="Ajouter des photos"
              className="w-10 h-10 rounded-full bg-white text-black shadow-[0_2px_10px_rgba(0,0,0,0.08)] flex items-center justify-center active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
            </button>
          </div>
        </div>

        {/* Collection Meta & Description */}
        <div className="flex flex-col items-center text-center mt-4">
          <h1 className="text-[22px] font-bold text-[#1a1b1f] tracking-tight">
            {collection.title}
          </h1>
          <p className="text-[13px] text-[#444748] mt-1">
            {collection.dateRange} • {collection.memoryCount} souvenirs
          </p>

          {/* Guest Avatars & Contributors Pill */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center -space-x-2">
              {collection.contributors.slice(0, 3).map((contrib, idx) => (
                <div
                  key={contrib.id || idx}
                  className="w-7 h-7 rounded-full overflow-hidden shadow-xs bg-[#e9e7ed] border border-white"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={contrib.avatar}
                    alt={contrib.name}
                  />
                </div>
              ))}
              <div className="w-7 h-7 rounded-full bg-[#e9e7ed] border border-white flex items-center justify-center text-[#1a1b1f] text-[11px] font-semibold shadow-xs">
                +5
              </div>
            </div>
            <span className="text-[12px] text-[#444748] font-medium">8 contributeurs</span>
          </div>
        </div>

        {/* Interactive Action Pills Row */}
        <div className="flex items-center gap-2 overflow-x-auto py-2 mt-4 -mx-5 px-5 scrollbar-none">
          <button
            onClick={() => onNavigate('qr_invite')}
            className="shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white shadow-xs border border-slate-100 text-[#1a1b1f] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[18px] text-black">qr_code_2</span>
            <span className="text-[13px] font-semibold">Inviter par QR</span>
          </button>
          <button
            onClick={() => onNavigate('live_slideshow')}
            className="shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white shadow-xs border border-slate-100 text-[#1a1b1f] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[18px] text-[#ae302a]">slideshow</span>
            <span className="text-[13px] font-semibold">Diaporama</span>
          </button>
          <button
            onClick={handleDownloadAll}
            className="shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white shadow-xs border border-slate-100 text-[#1a1b1f] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[18px] text-[#444748]">download</span>
            <span className="text-[13px] font-semibold">Tout télécharger</span>
          </button>
          <button
            onClick={() => onNavigate('qr_invite')}
            aria-label="Accès album"
            className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-xs border border-slate-100 text-[#444748] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">lock_open</span>
          </button>
        </div>

        {/* Download toast notification */}
        {downloadToast && (
          <div className="my-2 p-2.5 rounded-full bg-black text-white text-xs text-center flex items-center justify-center gap-2 animate-fade-in shadow-lg">
            <span className="material-symbols-outlined text-[16px]">check_circle</span>
            <span>Archive ZIP prête : 50 photos et vidéos téléchargées !</span>
          </div>
        )}

        {/* Segmented Media Filter */}
        <div className="flex items-center p-1 rounded-full bg-[#e9e7ed] mt-4 shadow-inner">
          <button
            className={`flex-1 py-1.5 rounded-full text-center text-[12px] font-medium transition-all ${
              activeFilter === 'all'
                ? 'bg-white shadow-xs text-[#1a1b1f] font-bold'
                : 'text-[#444748] hover:text-[#1a1b1f]'
            }`}
            onClick={() => setActiveFilter('all')}
          >
            Tout (50)
          </button>
          <button
            className={`flex-1 py-1.5 rounded-full text-center text-[12px] font-medium transition-all ${
              activeFilter === 'photos'
                ? 'bg-white shadow-xs text-[#1a1b1f] font-bold'
                : 'text-[#444748] hover:text-[#1a1b1f]'
            }`}
            onClick={() => setActiveFilter('photos')}
          >
            Photos (42)
          </button>
          <button
            className={`flex-1 py-1.5 rounded-full text-center text-[12px] font-medium transition-all ${
              activeFilter === 'videos'
                ? 'bg-white shadow-xs text-[#1a1b1f] font-bold'
                : 'text-[#444748] hover:text-[#1a1b1f]'
            }`}
            onClick={() => setActiveFilter('videos')}
          >
            Vidéos (6)
          </button>
          <button
            className={`flex-1 py-1.5 rounded-full text-center text-[12px] font-medium transition-all ${
              activeFilter === 'audio'
                ? 'bg-white shadow-xs text-[#1a1b1f] font-bold'
                : 'text-[#444748] hover:text-[#1a1b1f]'
            }`}
            onClick={() => setActiveFilter('audio')}
          >
            Audio (2)
          </button>
        </div>

        {/* Live Sync Dynamic Indicator Banner */}
        <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#f4f3f8] mt-4 border border-slate-100">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#60de8c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#009851]"></span>
            </span>
            <span className="text-[12px] text-[#1a1b1f] font-semibold">
              Espace partagé sécurisé • Synchro live
            </span>
          </div>
          <span className="text-[11px] text-[#444748]">Mis à jour il y a 2 min</span>
        </div>

        {/* Staggered Memory Grid */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          {filteredMemories.map((mem, i) => {
            const heightClass =
              i === 0
                ? 'h-56'
                : i === 1
                ? 'h-44'
                : i === 2
                ? 'h-48'
                : i === 3
                ? 'h-60'
                : i === 4
                ? 'h-44'
                : 'h-52';

            return (
              <div
                key={mem.id}
                onClick={() => onSelectMemory(mem)}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-[0_4px_16px_rgba(0,0,0,0.03)] cursor-pointer border border-slate-100"
              >
                <div className={`relative ${heightClass} w-full`}>
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={mem.url}
                    alt={mem.caption || 'Souvenir'}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Top-Right Heart or Video Badge */}
                  {mem.type === 'video' ? (
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">play_arrow</span>
                      <span>{mem.duration || '0:42'}</span>
                    </div>
                  ) : mem.isLiked ? (
                    <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center text-black shadow-xs">
                      <span className="material-symbols-outlined text-[15px] fill-icon text-[#ae302a]">
                        favorite
                      </span>
                    </div>
                  ) : null}

                  {/* Category badge */}
                  {mem.category && (
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-[#1a1b1f] text-[11px] font-semibold">
                      {mem.category}
                    </div>
                  )}

                  {/* Bottom Caption and Comments Count */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
                    <span className="text-[12px] font-medium truncate drop-shadow-sm pr-1">
                      {mem.caption}
                    </span>
                    <div className="flex items-center gap-0.5 text-[11px] font-semibold shrink-0">
                      <span className="material-symbols-outlined text-[13px]">mode_comment</span>
                      <span>{mem.commentsCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
