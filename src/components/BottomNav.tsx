import React from 'react';
import { ScreenId } from '../types';

interface BottomNavProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onOpenAction: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentScreen,
  onNavigate,
  onOpenAction
}) => {
  // Only display on main hub screens, not on full-screen modals like photo_viewer or slideshow
  const hiddenOn: ScreenId[] = ['photo_viewer', 'live_slideshow', 'create_collection', 'upload_sheet'];
  if (hiddenOn.includes(currentScreen)) return null;

  const isGalerie = currentScreen === 'collections_list' || currentScreen === 'album_detail' || currentScreen === 'empty_state';
  const isAudio = currentScreen === 'audio_guestbook';
  const isQr = currentScreen === 'qr_invite';

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 pointer-events-none pb-safe">
      <div className="px-4 pb-4 flex items-center justify-between max-w-md mx-auto w-full">
        {/* Floating Capsule Dock */}
        <nav
          aria-label="Navigation principale"
          className="pointer-events-auto h-15 bg-white/95 backdrop-blur-2xl rounded-full px-4 shadow-[0_8px_30px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.03)] border border-slate-100 flex items-center gap-1 sm:gap-3 flex-1 mr-3 justify-around"
        >
          {/* Tab 1: Galerie */}
          <button
            onClick={() => onNavigate('collections_list')}
            aria-label="Galerie"
            className={`flex flex-col items-center justify-center min-w-[52px] h-11 transition-all ${
              isGalerie ? 'text-black font-bold scale-105' : 'text-[#747878] hover:text-black font-medium'
            }`}
          >
            <span className={`material-symbols-outlined text-[22px] ${isGalerie ? 'fill-icon' : ''}`}>
              photo_library
            </span>
            <span className="text-[10px] mt-0.5 tracking-tight">Galerie</span>
          </button>

          {/* Tab 2: Audio / Livre d'or */}
          <button
            onClick={() => onNavigate('audio_guestbook')}
            aria-label="Livre d'or vocal"
            className={`flex flex-col items-center justify-center min-w-[52px] h-11 transition-all ${
              isAudio ? 'text-[#ae302a] font-bold scale-105' : 'text-[#747878] hover:text-[#ae302a] font-medium'
            }`}
          >
            <span className={`material-symbols-outlined text-[22px] ${isAudio ? 'fill-icon text-[#ae302a]' : ''}`}>
              mic
            </span>
            <span className="text-[10px] mt-0.5 tracking-tight">Audio</span>
          </button>

          {/* Tab 3: QR Code */}
          <button
            onClick={() => onNavigate('qr_invite')}
            aria-label="Inviter par QR Code"
            className={`flex flex-col items-center justify-center min-w-[52px] h-11 transition-all ${
              isQr ? 'text-black font-bold scale-105' : 'text-[#747878] hover:text-black font-medium'
            }`}
          >
            <span className={`material-symbols-outlined text-[22px] ${isQr ? 'fill-icon' : ''}`}>
              qr_code_scanner
            </span>
            <span className="text-[10px] mt-0.5 tracking-tight">QR Code</span>
          </button>

          {/* Tab 4: Diaporama Live */}
          <button
            onClick={() => onNavigate('live_slideshow')}
            aria-label="Diaporama direct"
            className="flex flex-col items-center justify-center min-w-[52px] h-11 text-[#747878] hover:text-[#ae302a] font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">slideshow</span>
            <span className="text-[10px] mt-0.5 tracking-tight">Direct</span>
          </button>
        </nav>

        {/* Pitch-Black Floating Action Button (+) */}
        <button
          onClick={onOpenAction}
          aria-label="Ajouter un souvenir ou créer une collection"
          className="pointer-events-auto w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:bg-neutral-800 active:scale-95 transition-all shrink-0"
        >
          <span className="material-symbols-outlined text-[26px]">add</span>
        </button>
      </div>
    </div>
  );
};
