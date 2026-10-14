import React, { useState } from 'react';
import { Collection, ScreenId } from '../types';

interface UploadSheetModalProps {
  collection: Collection;
  onClose: () => void;
  onNavigate: (screen: ScreenId) => void;
  onSuccess: () => void;
}

export const UploadSheetModal: React.FC<UploadSheetModalProps> = ({
  collection,
  onClose,
  onNavigate,
  onSuccess
}) => {
  const [copied, setCopied] = useState(false);
  const [guestName, setGuestName] = useState('Maya & Léo');
  const [selectedCategory, setSelectedCategory] = useState<'photos' | 'video' | 'audio' | 'text'>('photos');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const inviteShortLink = `guestlens.app/c/${collection.code || 'japan26'}`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(inviteShortLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 1200);
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#faf9fe] text-[#1a1b1f] font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 w-full z-40 pt-safe bg-[#faf9fe]/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.02)]">
        <div className="h-16 px-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              aria-label="Retour"
              className="w-11 h-11 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex items-center justify-center text-[#1a1b1f] hover:bg-[#e9e7ed] transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
            </button>
            <span className="text-[19px] font-semibold text-[#1a1b1f] tracking-tight">
              Détail de l'album
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Options"
              className="w-11 h-11 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex items-center justify-center text-[#1a1b1f] hover:bg-[#e9e7ed] transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">more_horiz</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-white text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Sheet Container */}
      <main className="flex-1 px-5 pb-10">
        {/* Drag handle line */}
        <div className="flex justify-center pt-2 pb-3">
          <div className="w-10 h-1 rounded-full bg-[#dad9df]"></div>
        </div>

        {/* Event Context Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e9e7ed] text-[#1a1b1f]">
            <span className="w-2 h-2 rounded-full bg-[#60de8c] animate-pulse"></span>
            <span className="text-[12px] font-semibold">{collection.title}</span>
            <span className="text-slate-400 text-[10px]">•</span>
            <span className="text-[11px] text-[#444748]">Aucun compte requis</span>
          </div>

          <div className="flex items-center -space-x-1.5">
            <div className="w-6 h-6 rounded-full bg-white overflow-hidden shadow-xs border border-white">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASQGqRCi-_d1gtbiV1O4-B52ocUPH38wWXBmswPX5QsRVXtad_V5qiPXSpeMQBuAeUS4dw2uyEC4nzxm9NT2euTncZbk3fUtrgC27iWAhHZGSLPqHBPSCpIF6VOg7r45XVAamhV6AQw8RTGlMYhLGID6mzFrVbsrGATX7VX-Tad40CorasK0sC0k7QyIh3paa0rsK37ehgmObn1cpg8JGIEXVMzGYx6GprowbqgzyH26uSdXfXMf0Gxw"
                alt="Avatar 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-6 h-6 rounded-full bg-white overflow-hidden shadow-xs border border-white">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQBmrxIQFPxp_1GFZhvijlhNZ6Q84qKaiDsTPnDa4w3n9PfMkQ0-jMLUwsVjxevoGevkh1PsZG0q4KObqb95Zxi1uIDewEDQOoRgoENlcHGIrx0vwIi2elDdi-fu_3M2FoNd74O9FykwD6pYLZrEZqqNlOuVusfo2fKatdwdQmsEq-XwwASzyQZDtIdBp6pL52DQCrPj2JjYUszrKPxEUQ8iSfsuSBSAgXzUEKcYMPwqS_10tP2a4lvQ"
                alt="Avatar 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-6 h-6 rounded-full bg-[#ffdad6] flex items-center justify-center text-[10px] font-bold text-[#410002] border border-white">
              +14
            </div>
          </div>
        </div>

        {/* QR & Quick Access Card */}
        <div className="w-full rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] mb-5 border border-slate-100">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              {/* Stylized QR Code Tile */}
              <div
                onClick={() => onNavigate('qr_invite')}
                className="relative w-14 h-14 rounded-xl bg-[#f4f3f8] p-2 flex items-center justify-center flex-shrink-0 shadow-inner cursor-pointer hover:bg-[#e9e7ed] transition-colors"
              >
                <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v2h-4v-2zm-4 0h2v4h-2v-4zm2 4h4v2h-4v-2zm2-2h2v2h-2v-2zm-6-2h2v2h-2v-2zm0 4h2v2h-2v-2z"></path>
                </svg>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-xs">
                  <span className="material-symbols-outlined text-[13px] text-black fill-icon">
                    qr_code_scanner
                  </span>
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-[10px] text-[#444748] font-bold uppercase tracking-wider">
                  FAIRE TOURNER DANS LA PIÈCE
                </span>
                <span className="text-[16px] font-bold text-[#1a1b1f] truncate">
                  {inviteShortLink}
                </span>
                <span className="text-[12px] text-[#444748] mt-0.5">
                  Les invités ajoutent instantanément leurs photos sans filtre
                </span>
              </div>
            </div>

            <button
              onClick={handleCopy}
              aria-label="Copier le lien"
              className="h-9 px-3 rounded-full bg-[#eeedf3] hover:bg-[#e3e2e7] flex items-center gap-1.5 text-[#1a1b1f] active:scale-95 transition-all shrink-0"
            >
              <span className="material-symbols-outlined text-[16px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span className="text-[12px] font-bold">{copied ? 'Copié !' : 'Copier'}</span>
            </button>
          </div>
        </div>

        {/* Upload Categories Grid */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2.5 px-0.5">
            <span className="text-[14px] font-bold text-[#1a1b1f]">
              Choisissez votre contribution
            </span>
            <span className="text-[11px] text-[#444748] font-medium">Synchro instantanée</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {/* 1. Photos */}
            <button
              onClick={() => setSelectedCategory('photos')}
              className={`relative flex flex-col items-start p-3.5 rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.02)] text-left active:scale-[0.98] transition-all group overflow-hidden border ${
                selectedCategory === 'photos'
                  ? 'ring-2 ring-black border-transparent'
                  : 'border-slate-100'
              }`}
            >
              <div className="w-9 h-9 rounded-full bg-[#e9e7ed] flex items-center justify-center text-black mb-3 group-hover:bg-black group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px] fill-icon">
                  photo_library
                </span>
              </div>
              <span className="text-[16px] font-bold text-[#1a1b1f]">Photos</span>
              <span className="inline-flex mt-1 px-2 py-0.5 rounded-full bg-[#f4f3f8] text-[11px] font-semibold text-[#444748]">
                Jusqu'à 50 clichés
              </span>
            </button>

            {/* 2. Video */}
            <button
              onClick={() => setSelectedCategory('video')}
              className={`relative flex flex-col items-start p-3.5 rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.02)] text-left active:scale-[0.98] transition-all group overflow-hidden border ${
                selectedCategory === 'video'
                  ? 'ring-2 ring-black border-transparent'
                  : 'border-slate-100'
              }`}
            >
              <div className="w-9 h-9 rounded-full bg-[#ffdad6] flex items-center justify-center text-[#ae302a] mb-3 group-hover:bg-[#ae302a] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px] fill-icon">videocam</span>
              </div>
              <span className="text-[16px] font-bold text-[#1a1b1f]">Extrait vidéo</span>
              <span className="inline-flex mt-1 px-2 py-0.5 rounded-full bg-[#f4f3f8] text-[11px] font-semibold text-[#444748]">
                HD jusqu'à 60s
              </span>
            </button>

            {/* 3. Audio Note */}
            <button
              onClick={() => {
                setSelectedCategory('audio');
                onNavigate('audio_guestbook');
              }}
              className={`relative flex flex-col items-start p-3.5 rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.02)] text-left active:scale-[0.98] transition-all group overflow-hidden border ${
                selectedCategory === 'audio'
                  ? 'ring-2 ring-black border-transparent'
                  : 'border-slate-100'
              }`}
            >
              <div className="w-9 h-9 rounded-full bg-[#e9e7ed] flex items-center justify-center text-black mb-3 group-hover:bg-black group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">graphic_eq</span>
              </div>
              <span className="text-[16px] font-bold text-[#1a1b1f]">Note vocale</span>
              <span className="inline-flex mt-1 px-2 py-0.5 rounded-full bg-[#f4f3f8] text-[11px] font-semibold text-[#444748]">
                Message audio en onde
              </span>
            </button>

            {/* 4. Message Livre d'or */}
            <button
              onClick={() => setSelectedCategory('text')}
              className={`relative flex flex-col items-start p-3.5 rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.02)] text-left active:scale-[0.98] transition-all group overflow-hidden border ${
                selectedCategory === 'text'
                  ? 'ring-2 ring-black border-transparent'
                  : 'border-slate-100'
              }`}
            >
              <div className="w-9 h-9 rounded-full bg-[#e9e7ed] flex items-center justify-center text-black mb-3 group-hover:bg-black group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">edit_note</span>
              </div>
              <span className="text-[16px] font-bold text-[#1a1b1f]">Message</span>
              <span className="inline-flex mt-1 px-2 py-0.5 rounded-full bg-[#f4f3f8] text-[11px] font-semibold text-[#444748]">
                Mot pour le livre d'or
              </span>
            </button>
          </div>
        </div>

        {/* Selected Media Tray & Progress */}
        <div className="w-full rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] mb-5 border border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-black text-[18px]">
                cloud_upload
              </span>
              <span className="text-[14px] font-bold text-[#1a1b1f]">File prête</span>
            </div>
            <span className="text-[12px] font-semibold text-[#444748]">82% envoyé (4/5)</span>
          </div>

          {/* Micro Progress Bar */}
          <div className="w-full h-1.5 bg-[#eeedf3] rounded-full overflow-hidden mb-4">
            <div className="h-full bg-black rounded-full" style={{ width: '82%' }}></div>
          </div>

          {/* Thumbnails with Stagger and Selection Badges */}
          <div className="grid grid-cols-4 gap-2.5">
            {/* Thumbnail 1 */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-[#eeedf3] shadow-xs">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEOT7Mu-6MEBSVWnFjZBW_7x4sl5ClvtS661Jk956ez_WqFsjLuYzNqQTm1UXbbLDW13kxEz3LPhX0X5dFWT_bLNFkF5JCFkBIwCSnCkiu1hXaITegmtHdAyKnTHoNX3BD4CoxVh-etbj8js5W0dCAbAgmw3-TmsfNT6ao2D04vrOB2-rYloWBe-6NRa_ack0tNlPwO-mCQYd0Xo9a4St3k4dLra6gMFWSO4jYwwUOR-K_4nEpC3oavQ"
                alt="Temple Erable"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black text-white flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-[13px]">check</span>
              </div>
            </div>

            {/* Thumbnail 2 */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-[#eeedf3] shadow-xs">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxzaPmkDgK6ZKMRGvqhOA_jIfoZhadlisaYQbmRDw7kjrq59WSwgLTvXqkxj8WI4AYtDfXSTTbv8lJ9CA0MHpqfdhiGZDYKM_kaw5_Yrz3fW-V_WOy3M-e_BluD_4maYJMpFz61vRg0_eh4OJH-2dlJfiLXIr3c4vtMlU4dFW7UMC0Fn1Y6rUllGtKxMv1xp_T70l1O4Rq-6S9bKoNSHrWIyR17J8kx-HXz7SFgb2PclVByzB8b-jRSg"
                alt="Torii Inari"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black text-white flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-[13px]">check</span>
              </div>
            </div>

            {/* Thumbnail 3 */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-[#eeedf3] shadow-xs">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVj2utzaZBYDwwS-gNExJAftw9VldNpXrMphpHjpTLn-b5IswN4FCE_MttXemyJcVwVa_LsNtQtq5ESSHcyIE5Kj06F6ua5mgwHpozSWgsJiKJxwmyw1yLB9wzYiBkVF2X2ZHK8ahVYMLZkBLefYimIJ1MjqVQDLNxSgWeibA3M-64grQNUfbKVI4t1mqp9-oHBYMju_bCo2uPoZgm_vHMHstIp0tJu9BVsB5eCJOrSkbzYvjQUa-vjw"
                alt="Mont Fuji"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black text-white flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-[13px]">check</span>
              </div>
            </div>

            {/* Thumbnail 4 (Active Uploading Spinner) */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-[#eeedf3] shadow-xs flex items-center justify-center">
              <img
                className="w-full h-full object-cover filter blur-xs brightness-75"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNLbWwLyEP9hneJjwkUDksQNbVzl6nb-5lLfdFf2Im-FILR4dDdRWG1ItPZ-4hoVuUTVWK_jyw9N7jlPftAHKUUzlXSJS9wgfkx083sHJzJIN38czYnRCNnm7gsvcJFchJtRRHRalDFirEtLlBcEWNbmBJ_GltWTTT2x92rsnoagX6O3uhf9tk2hfiaZQr_UTjYvEsd8VHj83jEM5vYTcrdh5Y-xPtr_GOj2OJDRzHQK-kgjmdpE7o-Q"
                alt="Shibuya nuit"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Name Input */}
        <div className="w-full rounded-2xl bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] mb-5 border border-slate-100">
          <label className="block text-[12px] font-semibold text-[#444748] mb-1.5" htmlFor="guestName">
            Votre signature (facultatif)
          </label>
          <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#f4f3f8]">
            <span className="material-symbols-outlined text-[#747878] text-[18px]">
              sentiment_satisfied
            </span>
            <input
              id="guestName"
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="ex. Maya & Léo"
              className="w-full bg-transparent text-[#1a1b1f] text-[14px] outline-none font-medium placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Primary Action CTA */}
        <div className="w-full flex flex-col gap-2.5">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full h-14 rounded-full font-bold text-[17px] flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(0,0,0,0.18)] active:scale-[0.98] transition-all ${
              isSuccess
                ? 'bg-[#00210d] text-[#009851]'
                : 'bg-black text-white hover:bg-neutral-800'
            }`}
          >
            {isSubmitting ? (
              <>
                <span className="material-symbols-outlined text-[20px] animate-spin">
                  progress_activity
                </span>
                <span>Publication en direct...</span>
              </>
            ) : isSuccess ? (
              <>
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                <span>Souvenirs ajoutés !</span>
              </>
            ) : (
              <>
                <span>Partager dans la collection</span>
                <span className="material-symbols-outlined text-[20px]">north_east</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-1.5 text-[#444748] text-[11px] font-medium py-1">
            <span className="material-symbols-outlined text-[15px] text-[#009851]">lock_open</span>
            <span>Transfert sécurisé • Conservé en résolution originale</span>
          </div>
        </div>
      </main>
    </div>
  );
};
