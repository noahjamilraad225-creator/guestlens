import React from 'react';
import { ScreenId } from '../types';

interface EmptyStateScreenProps {
  onOpenCreate: () => void;
  onNavigate: (screen: ScreenId) => void;
}

export const EmptyStateScreen: React.FC<EmptyStateScreenProps> = ({
  onOpenCreate,
  onNavigate
}) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#F7F8FA] text-slate-900 font-sans antialiased justify-between">
      {/* Header bar */}
      <header className="w-full pt-3 px-6 z-20 flex-shrink-0">
        {/* App Navigation Bar */}
        <nav aria-label="Main Navigation" className="flex items-center justify-between mt-3 px-1">
          {/* User Profile Avatar Button */}
          <button
            onClick={() => onNavigate('collections_list')}
            aria-label="Profil utilisateur"
            className="w-10 h-10 rounded-full bg-white shadow-[0_3px_12px_rgba(0,0,0,0.05)] flex items-center justify-center p-0.5 border border-slate-100/60 active:scale-95 transition-transform"
            type="button"
          >
            <img
              alt="Avatar"
              className="w-full h-full object-cover rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAATrhF1Sa0TKo_kUHl5XW_lBeCqIC_TqM0kCSmtQhEEeVm0cbxnid019KT3Kr9PfIugL8DXCm-7mBIC4tfDUcCOLgft0Bz8R-1JdaD2qbtRpKhygzmCeWY01zlas2qdRo9kDygW258Wl_cAsWEP-T1XfeRqg1igxn4XuPKoK8p8mAwtuGi9LaihVSbbCkAl8Tc2wfO5-2QfCzgE5zaK5oyJQntR8JjRB1cmB12zaPPa_9xCi7IDiSpNw"
            />
          </button>

          {/* Search & Menu */}
          <div className="flex items-center space-x-2.5">
            <button
              onClick={() => onNavigate('collections_list')}
              aria-label="Rechercher"
              className="w-10 h-10 rounded-full bg-white shadow-[0_3px_12px_rgba(0,0,0,0.05)] flex items-center justify-center text-neutral-800 border border-slate-100/60 active:scale-95 transition-transform"
              type="button"
            >
              <svg className="w-[18px] h-[18px] stroke-[2.2] stroke-current fill-none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7"></circle>
                <line strokeLinecap="round" x1="16.5" x2="21" y1="16.5" y2="21"></line>
              </svg>
            </button>
            <button
              onClick={() => onNavigate('collections_list')}
              aria-label="Menu"
              className="w-10 h-10 rounded-full bg-white shadow-[0_3px_12px_rgba(0,0,0,0.05)] flex items-center justify-center text-neutral-800 border border-slate-100/60 active:scale-95 transition-transform"
              type="button"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  clipRule="evenodd"
                  d="M4 6.75h16a.75.75 0 010 1.5H4a.75.75 0 010-1.5zm3 4.5h10a.75.75 0 010 1.5H7a.75.75 0 010-1.5zm3 4.5h4a.75.75 0 010 1.5h-4a.75.75 0 010-1.5z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content Hero */}
      <main className="flex-1 flex flex-col justify-center items-center px-6 relative my-auto py-10">
        {/* Fan-Out Photo Stack Visual */}
        <div className="relative w-64 h-64 mb-7 flex items-center justify-center">
          {/* Left Rotated Background Photo */}
          <div className="absolute w-[152px] h-[188px] -left-1 top-2 rounded-[26px] overflow-hidden shadow-[0_18px_40px_-10px_rgba(0,0,0,0.16)] border-[3px] border-white transform -rotate-[9deg] z-0 transition duration-300">
            <img
              alt="Memories Left Landscape"
              className="w-full h-full object-cover brightness-95"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZW0e8lchJciisJIlJl_XDVjolvnF3obwq_qo2iYRdXukM8Cvqq9cDq_K6447DdnixO6vO2EPzCoZJ0AYxLs8ujFgF7YulwIUMuA4QvjQBripHG47Oi0hXlxEQRmoe6WHY6LZWu5Femg-SSlgI1bEbBaG5aXkqcaYwnlcck1zTPd15CxJTSoLK_YFLDKiyzLTrnF5LTkPnZfmhE_8KHP4UFHWywTyNKBhxpUxGS0r3T0bWKMj_GjMDgA"
            />
          </div>

          {/* Right Angled Background Photo */}
          <div className="absolute w-[148px] h-[188px] -right-1 top-6 rounded-[26px] overflow-hidden shadow-[0_18px_40px_-10px_rgba(0,0,0,0.16)] border-[3px] border-white transform rotate-[7deg] z-0 transition duration-300">
            <img
              alt="Memories Right Mountain"
              className="w-full h-full object-cover brightness-90"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0R_mpvPlNryn-plD4cry4tTI2YEX2BJtL4jg2mcCyGPP92g_-fnH0W1BDgQKJ4L2RtrZ6hGzgBBcLTcA7qCAJBv-58Tyincih-E-Srh-Jn5_qDrqVp_fFCCf2jspx_SnyQ_csPlb7P-2fN1MeVa4SJG2OKuWm-MVjxkqFRne0VWn7Ocsl_50tyQ5wVjCZ2_I4gQCIxoQvqloa4qXUZprQ8r6be5ILzgMWh2q5ErK8dSgoZIhwqTzLwg"
            />
          </div>

          {/* Center Front Foreground Photo */}
          <div className="relative w-[164px] h-[202px] rounded-[30px] overflow-hidden shadow-2xl border-[3.5px] border-white z-10 transform scale-100 hover:scale-[1.02] transition-transform duration-300">
            <img
              alt="Memories Hero Spotlight"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9X4D_eheIL7lTn2-u872pOcFTd6-9KhfRAPsk4KhjuP3hCNY2Nzd4DVFVJoRBqCPuEdBV4WNdvdpi2FxExTP9dCmnEsT7Lq2KdjwdtnnKxJujaK2MK4l3nlUsvLpV1Eq_jf7NTe-QGAqaYYAwEG5fCrt-4VUN0OU0xW8Y0cqpd19Liij1CQfnww7oIsjI1heVZuKduB6VNSoSSvAXo2MCGcZXS6zLcX5wjjbPzdoLnIouNpDqVbk-Og"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Typography Block */}
        <div className="text-center max-w-[290px] mb-6">
          <h1 className="text-[20px] font-bold text-neutral-900 tracking-tight leading-snug">
            Tout commence par une collection
          </h1>
          <p className="text-[14px] text-neutral-400 font-medium mt-1 leading-normal">
            Créez-en une pour commencer à partager vos souvenirs
          </p>
        </div>

        {/* Call to Action Button */}
        <button
          onClick={onOpenCreate}
          type="button"
          className="w-auto px-7 py-3.5 bg-[#1657D9] hover:bg-blue-700 text-white text-[14.5px] font-semibold rounded-full shadow-lg shadow-blue-500/25 active:scale-95 transition-all duration-150 tracking-tight"
        >
          Créer votre première collection
        </button>
      </main>

      {/* Floating Bottom Navigation */}
      <footer className="w-full px-6 pb-6 pt-2 z-20 flex-shrink-0">
        <div className="flex items-center justify-between max-w-[340px] mx-auto">
          {/* Dock Island Floating Capsule */}
          <nav
            aria-label="Bottom Dock"
            className="bg-white/95 backdrop-blur-md h-[54px] rounded-full px-5 py-2 shadow-[0_6px_20px_rgba(0,0,0,0.06)] border border-slate-100/80 flex items-center space-x-6"
          >
            {/* Tab 1: Collection Feed */}
            <button
              onClick={() => onNavigate('collections_list')}
              aria-label="Collections"
              className="text-neutral-900 flex items-center justify-center transition-opacity hover:opacity-80"
              type="button"
            >
              <svg className="w-6 h-6 stroke-[2.2] stroke-current fill-none" viewBox="0 0 24 24">
                <rect height="6" rx="2" strokeLinecap="round" width="14" x="5" y="4"></rect>
                <rect height="6" rx="2" strokeLinecap="round" width="14" x="5" y="14"></rect>
              </svg>
            </button>
            {/* Tab 2: Groups */}
            <button
              onClick={() => onNavigate('qr_invite')}
              aria-label="Groupes"
              className="text-neutral-400 hover:text-neutral-600 flex items-center justify-center transition-colors"
              type="button"
            >
              <svg className="w-6 h-6 stroke-[1.9] stroke-current fill-none" viewBox="0 0 24 24">
                <path d="M17 20v-1a4 4 0 00-4-4H5a4 4 0 00-4 4v1" strokeLinecap="round" strokeLinejoin="round"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 20v-1a4 4 0 00-3-3.87" strokeLinecap="round"></path>
                <path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round"></path>
              </svg>
            </button>
            {/* Tab 3: Souvenirs */}
            <button
              onClick={() => onNavigate('audio_guestbook')}
              aria-label="Souvenirs"
              className="text-neutral-400 hover:text-neutral-600 flex items-center justify-center transition-colors"
              type="button"
            >
              <svg className="w-6 h-6 stroke-[1.9] stroke-current fill-none" viewBox="0 0 24 24">
                <rect height="16" rx="4" strokeLinecap="round" width="16" x="4" y="4"></rect>
                <circle cx="9" cy="10" fill="currentColor" r="1"></circle>
                <line strokeLinecap="round" x1="13" x2="16" y1="10" y2="10"></line>
                <line strokeLinecap="round" x1="8" x2="16" y1="14" y2="14"></line>
              </svg>
            </button>
          </nav>

          {/* Floating Add Button */}
          <button
            onClick={onOpenCreate}
            aria-label="Ajouter une collection"
            className="w-[54px] h-[54px] bg-black text-white rounded-full flex items-center justify-center shadow-[0_8px_22px_rgba(0,0,0,0.22)] hover:bg-neutral-800 active:scale-90 transition-transform duration-150"
            type="button"
          >
            <svg className="w-6 h-6 stroke-[2.4] stroke-white fill-none" viewBox="0 0 24 24">
              <line strokeLinecap="round" x1="12" x2="12" y1="5" y2="19"></line>
              <line strokeLinecap="round" x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
          </button>
        </div>

        {/* Home Indicator */}
        <div className="w-32 h-[4px] bg-neutral-900 rounded-full mx-auto mt-4 mb-0.5 opacity-90"></div>
      </footer>
    </div>
  );
};
