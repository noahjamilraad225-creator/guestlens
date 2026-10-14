import React, { useState } from 'react';
import { Collection, ScreenId } from '../types';

interface QrInviteScreenProps {
  collection: Collection;
  onBack: () => void;
  onNavigate: (screen: ScreenId) => void;
}

export const QrInviteScreen: React.FC<QrInviteScreenProps> = ({
  collection,
  onBack,
  onNavigate
}) => {
  const [copied, setCopied] = useState(false);
  const [moderationActive, setModerationActive] = useState(true);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);

  const inviteLink = `guestlens.app/c/${collection.code || 'japan-trip-2026'}`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleDownloadPdf = () => {
    setPdfDownloaded(true);
    setTimeout(() => {
      window.print?.();
      setPdfDownloaded(false);
    }, 400);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#faf9fe] text-[#1a1b1f] font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 w-full z-30 bg-[#faf9fe]/90 backdrop-blur-xl pt-safe border-b border-black/[0.03]">
        <div className="h-16 px-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[19px] font-bold text-[#1a1b1f] tracking-tight">
              Partage Qr Invite
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Rechercher"
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#444748] hover:text-[#1a1b1f] transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-white text-[17px]">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-5 pt-2 pb-28">
        {/* Navigation locale & Sous-titre */}
        <div className="flex items-center justify-between py-2 mb-2">
          <button
            onClick={onBack}
            aria-label="Retour"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1a1b1f] shadow-xs active:scale-95 transition-transform border border-slate-100"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <div className="flex flex-col items-center">
            <span className="text-[17px] font-bold text-[#1a1b1f]">
              Inviter les participants
            </span>
            <span className="text-[11px] text-[#444748] flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60de8c] inline-block animate-pulse"></span>
              {collection.title} • En direct
            </span>
          </div>
          <button
            onClick={() => alert("Scannez ce QR Code avec n'importe quel smartphone pour accéder instantanément à l'album sans installer d'application.")}
            aria-label="Aide"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#444748] shadow-xs active:scale-95 transition-transform border border-slate-100"
          >
            <span className="material-symbols-outlined text-[20px]">help_outline</span>
          </button>
        </div>

        {/* Carte Principale QR Code */}
        <section className="bg-white rounded-3xl p-6 shadow-[0_12px_36px_rgba(0,0,0,0.05),0_2px_8px_rgba(0,0,0,0.02)] flex flex-col items-center text-center relative overflow-hidden border border-slate-100">
          <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#ffdad6]/40 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full bg-[#e9e7ed]/60 blur-2xl pointer-events-none"></div>

          {/* Badge Zéro Friction */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4f3f8] text-[#444748] mb-4">
            <span className="material-symbols-outlined text-[15px] text-[#ae302a]">flash_on</span>
            <span className="text-[11px] font-bold tracking-wide uppercase">
              Accès Instantané Invités
            </span>
          </div>

          {/* QR Code Container */}
          <div className="relative p-4 rounded-2xl bg-[#faf9fe] shadow-[inset_0_2px_8px_rgba(0,0,0,0.03)] flex items-center justify-center mb-4 group border border-slate-100">
            <svg
              className="w-56 h-56 text-black"
              fill="currentColor"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="12" y="12" width="50" height="50" rx="14" fill="currentColor"></rect>
              <rect x="22" y="22" width="30" height="30" rx="8" fill="#ffffff"></rect>
              <rect x="28" y="28" width="18" height="18" rx="5" fill="currentColor"></rect>

              <rect x="138" y="12" width="50" height="50" rx="14" fill="currentColor"></rect>
              <rect x="148" y="22" width="30" height="30" rx="8" fill="#ffffff"></rect>
              <rect x="154" y="28" width="18" height="18" rx="5" fill="currentColor"></rect>

              <rect x="12" y="138" width="50" height="50" rx="14" fill="currentColor"></rect>
              <rect x="22" y="148" width="30" height="30" rx="8" fill="#ffffff"></rect>
              <rect x="28" y="154" width="18" height="18" rx="5" fill="currentColor"></rect>

              <rect x="74" y="14" width="10" height="10" rx="3"></rect>
              <rect x="90" y="14" width="10" height="10" rx="3"></rect>
              <rect x="114" y="14" width="10" height="10" rx="3"></rect>
              <rect x="74" y="30" width="22" height="10" rx="3"></rect>
              <rect x="106" y="30" width="18" height="10" rx="3"></rect>
              <rect x="74" y="46" width="10" height="18" rx="3"></rect>
              <rect x="94" y="46" width="30" height="10" rx="3"></rect>

              <rect x="14" y="74" width="10" height="20" rx="3"></rect>
              <rect x="32" y="74" width="18" height="10" rx="3"></rect>
              <rect x="58" y="74" width="10" height="10" rx="3"></rect>
              <rect x="138" y="74" width="20" height="10" rx="3"></rect>
              <rect x="166" y="74" width="18" height="18" rx="4"></rect>
              <rect x="14" y="102" width="20" height="10" rx="3"></rect>
              <rect x="42" y="92" width="26" height="10" rx="3"></rect>
              <rect x="42" y="110" width="10" height="18" rx="3"></rect>

              <rect x="74" y="138" width="18" height="10" rx="3"></rect>
              <rect x="100" y="138" width="10" height="22" rx="3"></rect>
              <rect x="120" y="138" width="18" height="10" rx="3"></rect>
              <rect x="148" y="138" width="10" height="18" rx="3"></rect>
              <rect x="166" y="138" width="20" height="10" rx="3"></rect>
              <rect x="74" y="156" width="18" height="30" rx="4"></rect>
              <rect x="120" y="156" width="20" height="10" rx="3"></rect>
              <rect x="150" y="164" width="14" height="22" rx="3"></rect>
              <rect x="172" y="156" width="14" height="14" rx="3"></rect>
              <rect x="100" y="168" width="12" height="18" rx="3"></rect>
              <rect x="120" y="174" width="22" height="12" rx="3"></rect>
              <rect x="172" y="178" width="14" height="8" rx="2"></rect>

              <circle cx="100" cy="100" r="26" fill="#ffffff"></circle>
            </svg>

            <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-black flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
              <span className="material-symbols-outlined text-white text-[22px] fill-icon">
                photo_camera
              </span>
            </div>
          </div>

          {/* Micro-argumentaire */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-2 mb-5">
            <span className="text-[13px] text-[#1a1b1f] font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-[#009851]">
                check_circle
              </span>
              Appareil photo direct
            </span>
            <span className="text-[#c4c7c7] text-[10px]">•</span>
            <span className="text-[13px] text-[#444748]">Aucun téléchargement</span>
            <span className="text-[#c4c7c7] text-[10px]">•</span>
            <span className="text-[13px] text-[#444748]">Zéro compte requis</span>
          </div>

          {/* Champ lien court avec copie */}
          <div className="w-full bg-[#f4f3f8] rounded-full px-3 py-1.5 flex items-center justify-between gap-2 border border-slate-100">
            <div className="flex items-center gap-2 min-w-0 pl-1">
              <span className="material-symbols-outlined text-[#747878] text-[18px]">link</span>
              <span className="text-[12px] text-[#1a1b1f] truncate font-semibold">
                {inviteLink}
              </span>
            </div>
            <button
              onClick={handleCopy}
              type="button"
              className={`shrink-0 px-3.5 py-1.5 rounded-full font-bold text-[12px] flex items-center gap-1 shadow-xs active:scale-95 transition-all ${
                copied
                  ? 'bg-[#00210d] text-[#009851]'
                  : 'bg-black text-white hover:bg-neutral-800'
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? 'Copié !' : 'Copier'}</span>
            </button>
          </div>
        </section>

        {/* Pilules d'actions rapides */}
        <div className="grid grid-cols-3 gap-3 mt-4 mb-6">
          <button
            onClick={() => {
              window.open(`https://api.whatsapp.com/send?text=Rejoins notre album photo GuestLens ici : https://${inviteLink}`);
            }}
            type="button"
            className="flex flex-col items-center justify-center gap-1 py-3 px-2 rounded-2xl bg-white text-[#1a1b1f] shadow-xs active:scale-95 transition-transform border border-slate-100"
          >
            <div className="w-9 h-9 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#1E9E4B]">
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </div>
            <span className="text-[12px] font-bold">WhatsApp</span>
          </button>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'GuestLens - Souvenirs Partagés',
                  text: 'Ajoute tes photos directement au diaporama !',
                  url: `https://${inviteLink}`
                }).catch(() => {});
              } else {
                handleCopy();
              }
            }}
            type="button"
            className="flex flex-col items-center justify-center gap-1 py-3 px-2 rounded-2xl bg-white text-[#1a1b1f] shadow-xs active:scale-95 transition-transform border border-slate-100"
          >
            <div className="w-9 h-9 rounded-full bg-[#e9e7ed] flex items-center justify-center text-[#1a1b1f]">
              <span className="material-symbols-outlined text-[20px]">share</span>
            </div>
            <span className="text-[12px] font-bold">AirDrop</span>
          </button>

          <button
            onClick={() => {
              alert("Le QR Code a été téléchargé !");
            }}
            type="button"
            className="flex flex-col items-center justify-center gap-1 py-3 px-2 rounded-2xl bg-white text-[#1a1b1f] shadow-xs active:scale-95 transition-transform border border-slate-100"
          >
            <div className="w-9 h-9 rounded-full bg-[#e9e7ed] flex items-center justify-center text-[#1a1b1f]">
              <span className="material-symbols-outlined text-[20px]">download</span>
            </div>
            <span className="text-[12px] font-bold">Enregistrer</span>
          </button>
        </div>

        {/* Bloc Chevalet Kit d'impression A6 */}
        <div className="bg-white rounded-3xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] mb-4 flex flex-col relative overflow-hidden border border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-[17px] font-bold text-[#1a1b1f] block">
                Kit d'impression pour tables
              </span>
              <span className="text-[13px] text-[#444748]">
                Prêt pour chevalets de table A6 et bar
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#e9e7ed] text-[11px] text-[#444748] font-bold">
              Format A6
            </span>
          </div>

          {/* Aperçu Visuel : Scène 3D Staggered du Chevalet */}
          <div className="relative w-full h-44 rounded-2xl bg-[#f4f3f8] flex items-center justify-center overflow-hidden mb-4">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 filter blur-xs"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_P4PtJcjDv6XQILLj06i5bkRn6-l_X-HZEcAdteqHytErqfSEI_Nw0WMd4S1BTuNnTKBHFrlSdXJ5vunYkiHOTbWLJn6CSF93nXoPW9-2cEE7hEmxu00qgJnL0RIhAjXkeA_iISwgYoCirn-XQosVfqSk8YdkVMaqswkBolaFgxNZ3ErOb3FoIYXKEawOn1Rgd9VyMQN9BmmwMC71zZTl6gh9OtH05BNV2rsR4a23JVAEMEbedPn3ng')`
              }}
            ></div>

            <div className="absolute w-28 h-36 bg-black/20 blur-xl translate-y-3"></div>

            <div className="relative w-28 h-36 bg-white rounded-md shadow-[0_10px_25px_rgba(0,0,0,0.12)] p-2.5 flex flex-col items-center text-center justify-between -rotate-2 transform transition-transform hover:rotate-0">
              <div className="w-full flex items-center justify-between">
                <span className="text-[6px] tracking-wider font-extrabold text-[#444748] uppercase">
                  GuestLens
                </span>
                <span className="material-symbols-outlined text-[8px] text-[#ae302a] fill-icon">
                  favorite
                </span>
              </div>

              <div className="w-14 h-14 bg-[#eeedf3] p-1 rounded flex items-center justify-center">
                <svg className="w-full h-full text-black" fill="currentColor" viewBox="0 0 100 100">
                  <rect x="5" y="5" width="28" height="28" rx="4"></rect>
                  <rect x="10" y="10" width="18" height="18" fill="#ffffff"></rect>
                  <rect x="14" y="14" width="10" height="10" rx="2"></rect>
                  <rect x="67" y="5" width="28" height="28" rx="4"></rect>
                  <rect x="72" y="10" width="18" height="18" fill="#ffffff"></rect>
                  <rect x="76" y="14" width="10" height="10" rx="2"></rect>
                  <rect x="5" y="67" width="28" height="28" rx="4"></rect>
                  <rect x="10" y="72" width="18" height="18" fill="#ffffff"></rect>
                  <rect x="14" y="76" width="10" height="10" rx="2"></rect>
                  <rect x="38" y="10" width="12" height="12" rx="2"></rect>
                  <rect x="38" y="38" width="24" height="24" rx="3"></rect>
                  <rect x="68" y="42" width="12" height="12" rx="2"></rect>
                  <rect x="42" y="68" width="14" height="14" rx="2"></rect>
                  <rect x="68" y="68" width="24" height="24" rx="2"></rect>
                </svg>
              </div>

              <div className="w-full">
                <p className="text-[7px] font-bold text-[#1a1b1f] leading-tight truncate">
                  Scannez &amp; Partagez
                </p>
                <p className="text-[5px] text-[#444748] mt-0.5 leading-none">
                  Vos photos en direct
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleDownloadPdf}
            type="button"
            className="w-full h-12 rounded-full bg-black text-white flex items-center justify-center gap-2 text-[14px] font-semibold shadow-[0_8px_24px_rgba(0,0,0,0.18)] active:scale-[0.98] transition-all hover:bg-neutral-800"
          >
            <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
            <span>
              {pdfDownloaded ? 'Impression en cours...' : "Télécharger le PDF d'impression (A6)"}
            </span>
          </button>
        </div>

        {/* Modération en direct */}
        <div className="bg-white rounded-3xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-between gap-4 border border-slate-100">
          <div className="flex items-start gap-3 min-w-0">
            <div className="w-9 h-9 rounded-full bg-[#e9e7ed] flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[20px] text-[#1a1b1f]">
                verified_user
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[16px] font-bold text-[#1a1b1f]">Modération en direct</span>
              <span className="text-[13px] text-[#444748] mt-0.5">
                {moderationActive
                  ? 'Validation requise avant diffusion publique'
                  : 'Photos publiées immédiatement dans la galerie'}
              </span>
            </div>
          </div>

          <button
            onClick={() => setModerationActive(!moderationActive)}
            aria-checked={moderationActive}
            role="switch"
            type="button"
            className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none p-0.5 ${
              moderationActive ? 'bg-black' : 'bg-[#e3e2e7]'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                moderationActive ? 'translate-x-5' : 'translate-x-0'
              }`}
            ></span>
          </button>
        </div>
      </main>
    </div>
  );
};
