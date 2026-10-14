import React, { useState } from 'react';
import { THEME_PALETTES } from '../data/mockData';
import { Collection, ScreenId } from '../types';

interface CreateCollectionModalProps {
  onClose: () => void;
  onCreateCollection: (newCol: Collection) => void;
  onNavigate: (screen: ScreenId) => void;
}

export const CreateCollectionModal: React.FC<CreateCollectionModalProps> = ({
  onClose,
  onCreateCollection,
  onNavigate
}) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('Kyoto, Japon');
  const [dateStr, setDateStr] = useState("Aujourd'hui • 29 Mars 2026");
  const [selectedTheme, setSelectedTheme] = useState(THEME_PALETTES[0]);
  const [instantAccess, setInstantAccess] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!title.trim()) {
      alert('Veuillez entrer un nom pour la collection.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);

      const newCol: Collection = {
        id: `col-${Date.now()}`,
        title: title.trim(),
        dateRange: dateStr,
        memoryCount: 3,
        contributorCount: 3,
        themeColor: selectedTheme.color,
        themeName: selectedTheme.label,
        location: location.trim(),
        isInstantAccess: instantAccess,
        code: title.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 10) || 'party26',
        qrUrl: `guestlens.app/c/${title.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 10) || 'new-trip'}`,
        coverPhotos: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAa-mkR5ishTmcKq8dTuV_FdgbztIubh-zC7GzC5W7sMFF7k_AKISY3_uoy4Sd-ZDqgA7JZRO791CZPpY1rCYtt00Yzs-pdMFGk5xNTIgZdNU1_l1-op79hB-XC3ilnnQrRpx5Sv2qiYKW_tIeeQZTKmtpTBksyOmpg-UfFQ04biB91evjpB2U3ViziWaY6CQZ6ZeLI0TWygS4bUNSZ3bqOcQhR2H6O7EwDbkZLkqRI4JUI-xhAWRzGCQ',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD6w4iAizzuCabeQuyE08Z1Ir2vac1XgFliYtQbwk2IwgMJsfYFUhsz7twTr1AamDWe0g6UtOoAFyE612t2ChEXoY5AnrvJWFXqln-49d2Tz4JaPSpfoJZDhkVk-0MAGRb21Dq_jOiM46LGq_t83Dp9s7HYgt-orFt2yG433zQTir1WJp6w3EudPhEGGmK0juMFhtS1cF0iKKCZ6hOQzGQueiDDjGfyl-qSWPW5cS6nbewuId0frxuNsQ',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDpOL1TN4mn5e-ml8sjf0nL_eDkB0gEKrOKTQB9JXk6S9WyUo1J3UtmnmWZhU3jJ0cHXvaY_ZgPwzsxk9IAsZb8R_LtP7yA6SHwzJ2RopOfEso33XNg_RsDE1C2DDKSpQXUFH0S50t0-xu4Ba7R7Z0xlB_MprTjWSP7A1PYp6WhJr-GX0dfkHm02vPKn3JoastBXr_B7KT2Tnycmqqo3xLENbShwhmRrOHP9cqf1fRQ4CmhYC0QyOSprQ'
        ],
        contributors: [
          {
            id: 'u1',
            name: 'Moi',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAATrhF1Sa0TKo_kUHl5XW_lBeCqIC_TqM0kCSmtQhEEeVm0cbxnid019KT3Kr9PfIugL8DXCm-7mBIC4tfDUcCOLgft0Bz8R-1JdaD2qbtRpKhygzmCeWY01zlas2qdRo9kDygW258Wl_cAsWEP-T1XfeRqg1igxn4XuPKoK8p8mAwtuGi9LaihVSbbCkAl8Tc2wfO5-2QfCzgE5zaK5oyJQntR8JjRB1cmB12zaPPa_9xCi7IDiSpNw'
          },
          {
            id: 'u2',
            name: 'AK',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHl_NLXIV_OX38qUfgPKbSOlqjZzeJvl6WVvOBnTUWmwKEaFCrA2FFMot80IiXLEODZ0fK-Lz0Kh8mFflaFgGd-dtXCWxIF3FF9RN8ulCoucf5grQs8g25I7Kq1KoPV-nDtvChPivfZzhJ1DBz79unsu5ygLt85Tcd5qdwUED3xAXTW8rCmW3En7Ojid62IAugfHkckSTT25FbJ_Gwucs53YZqXxAw7FeKp3LES3wQKTSKDhlHVSzSyA'
          },
          {
            id: 'u3',
            name: 'ML',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUn6tNNPj5ltbcn2yhW8kMt_3x3Pp1qLnQb1PmPrqus9IUnrwGPNVEi4_gFF88YZ6FqY3L_FUMYVS8n1a7R8-E2lHOBAXEI0q1QPNZZJeMa1xCmFW9Dx0reoDq7mN4bAZpDFOqxQ7Ycx5Q8Uh9xYT6J9Lh3X9GiP-OYXP9v43YAQ2TJLbvKqcRfRhcADVsE8dFdklG5Ak2-IFAHVare5W7VSuwzyiu802Udh1jBxcYYvkCqBlFoeQnTA'
          }
        ]
      };

      setTimeout(() => {
        onCreateCollection(newCol);
      }, 500);
    }, 700);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#faf9fe] text-[#1a1b1f] font-sans antialiased">
      {/* Top persistent bar */}
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
              Créer une collection
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

      {/* Main modal contents */}
      <main className="flex-1 px-5 pt-3 pb-safe">
        <div className="flex flex-col gap-y-5 pb-10">
          {/* Header Actions for Modal context */}
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="w-10 h-10 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex items-center justify-center text-[#1a1b1f] hover:bg-[#e9e7ed] transition-transform active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
            <span className="text-[17px] font-bold text-[#1a1b1f]">Nouvelle collection</span>
            <button
              onClick={() => handleSubmit()}
              className="px-3.5 py-1.5 rounded-full text-[#1865F2] text-[14px] font-bold hover:bg-[#e9e7ed] transition-colors active:scale-95"
            >
              Enregistrer
            </button>
          </div>

          {/* Cover Photo Staged Stack Preview */}
          <div className="w-full bg-white rounded-3xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col items-center relative overflow-hidden border border-slate-100">
            {/* Ambient Pastel Sheen Indicator */}
            <div
              className="absolute inset-0 transition-colors duration-500 pointer-events-none opacity-40"
              style={{ backgroundColor: selectedTheme.color }}
            ></div>

            {/* Playful Physical Staggered Photo Stack */}
            <div className="relative w-full h-44 flex items-center justify-center mt-2 mb-4">
              {/* Photo Left */}
              <div className="absolute w-28 h-36 rounded-2xl overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.08)] transform -rotate-6 -translate-x-12 -translate-y-1 transition-transform duration-300 hover:-rotate-12 bg-[#e9e7ed]">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa-mkR5ishTmcKq8dTuV_FdgbztIubh-zC7GzC5W7sMFF7k_AKISY3_uoy4Sd-ZDqgA7JZRO791CZPpY1rCYtt00Yzs-pdMFGk5xNTIgZdNU1_l1-op79hB-XC3ilnnQrRpx5Sv2qiYKW_tIeeQZTKmtpTBksyOmpg-UfFQ04biB91evjpB2U3ViziWaY6CQZ6ZeLI0TWygS4bUNSZ3bqOcQhR2H6O7EwDbkZLkqRI4JUI-xhAWRzGCQ"
                  alt="Terrasse méditerranéenne"
                />
              </div>

              {/* Photo Right */}
              <div className="absolute w-28 h-36 rounded-2xl overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.08)] transform rotate-6 translate-x-12 translate-y-1 transition-transform duration-300 hover:rotate-12 bg-[#e9e7ed]">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpOL1TN4mn5e-ml8sjf0nL_eDkB0gEKrOKTQB9JXk6S9WyUo1J3UtmnmWZhU3jJ0cHXvaY_ZgPwzsxk9IAsZb8R_LtP7yA6SHwzJ2RopOfEso33XNg_RsDE1C2DDKSpQXUFH0S50t0-xu4Ba7R7Z0xlB_MprTjWSP7A1PYp6WhJr-GX0dfkHm02vPKn3JoastBXr_B7KT2Tnycmqqo3xLENbShwhmRrOHP9cqf1fRQ4CmhYC0QyOSprQ"
                  alt="Road trip coucher de soleil"
                />
              </div>

              {/* Photo Center Hero */}
              <div className="relative z-10 w-32 h-40 rounded-2xl overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.12)] transform hover:scale-105 transition-transform duration-300 bg-[#e9e7ed] border-2 border-white">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6w4iAizzuCabeQuyE08Z1Ir2vac1XgFliYtQbwk2IwgMJsfYFUhsz7twTr1AamDWe0g6UtOoAFyE612t2ChEXoY5AnrvJWFXqln-49d2Tz4JaPSpfoJZDhkVk-0MAGRb21Dq_jOiM46LGq_t83Dp9s7HYgt-orFt2yG433zQTir1WJp6w3EudPhEGGmK0juMFhtS1cF0iKKCZ6hOQzGQueiDDjGfyl-qSWPW5cS6nbewuId0frxuNsQ"
                  alt="Amis au dîner"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2 flex justify-center">
                  <span className="text-[11px] font-semibold text-white px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md">
                    Couverture
                  </span>
                </div>
              </div>
            </div>

            {/* Select Cover Button */}
            <button
              type="button"
              className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f4f3f8] hover:bg-[#e9e7ed] text-[#1a1b1f] text-[12px] font-semibold transition-all active:scale-95 shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              <span>Choisir les photos de couverture</span>
            </button>
          </div>

          {/* Collection Form Fields */}
          <div className="flex flex-col gap-3">
            {/* Nom de la collection */}
            <div className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col gap-1 border border-slate-100">
              <label
                className="text-[11px] text-[#444748] font-bold uppercase tracking-wider"
                htmlFor="colName"
              >
                NOM DE LA COLLECTION
              </label>
              <input
                id="colName"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="ex. Été en Provence, Road trip..."
                className="w-full bg-transparent text-[#1a1b1f] text-[17px] font-bold placeholder:text-slate-400 focus:outline-none"
              />
            </div>

            {/* Date & Lieu */}
            <div className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col gap-3 border border-slate-100">
              {/* Date */}
              <div className="flex items-center justify-between cursor-pointer py-1">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-[#f4f3f8] flex items-center justify-center text-[#1a1b1f] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] text-[#444748] font-medium">Date</span>
                    <input
                      type="text"
                      value={dateStr}
                      onChange={(e) => setDateStr(e.target.value)}
                      className="bg-transparent text-[14px] font-semibold text-[#1a1b1f] outline-none"
                    />
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400 text-[20px]">
                  chevron_right
                </span>
              </div>

              <div className="h-[1px] w-full bg-[#f4f3f8]"></div>

              {/* Lieu */}
              <div className="flex items-center justify-between cursor-pointer py-1">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-[#f4f3f8] flex items-center justify-center text-[#1a1b1f] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] text-[#444748] font-medium">Lieu</span>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Ajouter un lieu (ex. Kyoto, Japon)"
                      className="bg-transparent text-[14px] font-semibold text-[#1a1b1f] outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400 text-[20px]">
                  chevron_right
                </span>
              </div>
            </div>

            {/* Nuance du thème */}
            <div className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col gap-3 border border-slate-100">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-[#444748] font-bold uppercase tracking-wider">
                  NUANCE DU THÈME
                </span>
                <span className="text-[13px] font-semibold text-[#1a1b1f]">
                  {selectedTheme.label}
                </span>
              </div>

              <div className="flex items-center justify-between px-1 pt-1">
                {THEME_PALETTES.map((palette) => {
                  const isSelected = selectedTheme.id === palette.id;
                  return (
                    <button
                      key={palette.id}
                      onClick={() => setSelectedTheme(palette)}
                      type="button"
                      style={{ backgroundColor: palette.color }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'scale-110 ring-2 ring-black shadow-md'
                          : 'hover:scale-105 shadow-xs'
                      }`}
                    >
                      {isSelected && (
                        <span className="material-symbols-outlined text-[18px] text-black">
                          check
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Accès invité instantané */}
            <div className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center justify-between gap-3 border border-slate-100">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-[#e8f1ff] text-[#1865F2] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">qr_code_scanner</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[16px] font-bold text-[#1a1b1f] truncate">
                    Accès invité instantané
                  </span>
                  <span className="text-[13px] text-[#444748] leading-tight">
                    Sans création de compte ni application via QR code
                  </span>
                </div>
              </div>

              {/* iOS Switch */}
              <button
                onClick={() => setInstantAccess(!instantAccess)}
                aria-checked={instantAccess}
                role="switch"
                type="button"
                className={`w-12 h-7 px-0.5 rounded-full flex items-center transition-colors shrink-0 focus:outline-none ${
                  instantAccess ? 'bg-[#1865F2]' : 'bg-[#e3e2e7]'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-200 ${
                    instantAccess ? 'translate-x-5' : 'translate-x-0'
                  }`}
                ></span>
              </button>
            </div>

            {/* Collaborateurs */}
            <div className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center justify-between border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#e3e2e7] flex items-center justify-center text-[#1a1b1f] text-[11px] font-bold">
                    Moi
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#ffd4cf] flex items-center justify-center text-[#1a1b1f] text-[11px] font-bold">
                    AK
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#d9e2ff] flex items-center justify-center text-[#1a1b1f] text-[11px] font-bold">
                    ML
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-[#1a1b1f]">Collaborateurs</span>
                  <span className="text-[13px] text-[#444748]">2 amis invités</span>
                </div>
              </div>
              <button
                onClick={() => alert("Lien d'invitation copié pour vos collaborateurs !")}
                aria-label="Ajouter un collaborateur"
                className="w-8 h-8 rounded-full bg-[#f4f3f8] flex items-center justify-center text-[#1a1b1f] active:scale-95 transition-transform hover:bg-[#e9e7ed]"
              >
                <span className="material-symbols-outlined text-[18px]">person_add</span>
              </button>
            </div>
          </div>

          {/* Primary Action Button (Vibrant Signature Blue) */}
          <div className="pt-2">
            <button
              onClick={() => handleSubmit()}
              disabled={isSubmitting}
              className={`w-full h-12 rounded-full font-bold text-[15px] shadow-[0_8px_24px_rgba(24,101,242,0.28)] flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                isDone
                  ? 'bg-[#009851] text-white'
                  : 'bg-[#1865F2] hover:bg-blue-600 text-white'
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined text-[20px] animate-spin">
                    progress_activity
                  </span>
                  <span>Création en cours...</span>
                </>
              ) : isDone ? (
                <>
                  <span className="material-symbols-outlined text-[20px]">check</span>
                  <span>Collection créée !</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span>Créer la collection</span>
                </>
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
