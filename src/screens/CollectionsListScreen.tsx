import React from 'react';
import { Collection, ScreenId } from '../types';

interface CollectionsListScreenProps {
  collections: Collection[];
  onSelectCollection: (col: Collection) => void;
  onOpenCreate: () => void;
  onNavigate: (screen: ScreenId) => void;
}

export const CollectionsListScreen: React.FC<CollectionsListScreenProps> = ({
  collections,
  onSelectCollection,
  onOpenCreate,
  onNavigate
}) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#faf9fe] text-[#1a1b1f] font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 w-full z-30 pt-safe bg-[#faf9fe]/90 backdrop-blur-xl border-b border-black/[0.03]">
        <div className="h-16 px-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#e3e2e7] flex items-center justify-center text-[#1a1b1f]">
              <span className="material-symbols-outlined text-[22px]">account_circle</span>
            </div>
            <span className="text-[19px] font-bold tracking-tight text-[#1a1b1f]">
              Souvenirs partagés
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('empty_state')}
              aria-label="Voir l'état initial"
              title="Voir l'état initial sans collection"
              className="px-2.5 py-1 text-[11px] font-semibold text-[#444748] bg-white rounded-full border border-slate-200/80 hover:bg-slate-50 transition-colors"
            >
              Démo vide
            </button>
            <button
              aria-label="Rechercher"
              className="w-10 h-10 rounded-full bg-white shadow-xs flex items-center justify-center text-[#1a1b1f] hover:bg-[#eeedf3] active:scale-95 transition-all border border-slate-100"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>
            <button
              aria-label="Menu"
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
      <main className="flex-1 px-5 pt-4 pb-28">
        <div className="flex flex-col gap-6">
          {collections.map((col, idx) => {
            const isFirst = idx === 0;
            return (
              <article
                key={col.id}
                onClick={() => onSelectCollection(col)}
                className="flex flex-col items-center w-full group cursor-pointer"
              >
                {/* Media Header Showcase */}
                <div
                  className={`relative w-full h-44 rounded-2xl overflow-hidden p-2 flex items-end justify-center transition-all ${
                    isFirst ? 'bg-[#ffdad6]/60' : 'bg-[#e3e2e7]/70'
                  }`}
                >
                  {/* Background Layered Multi-Photos */}
                  <div className="absolute inset-x-2 top-2 bottom-6 flex items-center justify-between gap-1.5 px-1">
                    {/* Photo 1 */}
                    <div className="w-1/3 h-full rounded-xl overflow-hidden shadow-sm transform -rotate-1 scale-95 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-100">
                      <img
                        className="w-full h-full object-cover"
                        src={col.coverPhotos[0]}
                        alt="Photo 1"
                        loading="lazy"
                      />
                    </div>
                    {/* Photo 2 (Center Hero) */}
                    <div className="w-1/3 h-full rounded-xl overflow-hidden shadow-md z-10 scale-105">
                      <img
                        className="w-full h-full object-cover"
                        src={col.coverPhotos[1] || col.coverPhotos[0]}
                        alt="Photo 2"
                        loading="lazy"
                      />
                    </div>
                    {/* Photo 3 */}
                    <div className="w-1/3 h-full rounded-xl overflow-hidden shadow-sm transform rotate-2 scale-95 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-100">
                      <img
                        className="w-full h-full object-cover"
                        src={col.coverPhotos[2] || col.coverPhotos[0]}
                        alt="Photo 3"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Frosted Glass Pill Overlay with Add Action */}
                  <div
                    className={`relative z-20 w-full h-20 rounded-2xl backdrop-blur-xl flex items-center justify-end px-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ${
                      isFirst ? 'bg-[#ffb4ab]/50' : 'bg-[#eeedf3]/70'
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCollection(col);
                        onNavigate('upload_sheet');
                      }}
                      aria-label={`Ajouter un souvenir à ${col.title}`}
                      className="w-9 h-9 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#1a1b1f] hover:scale-110 active:scale-95 transition-transform"
                    >
                      <span className="material-symbols-outlined text-[20px]">add</span>
                    </button>
                  </div>
                </div>

                {/* Card Typography & Members Stack */}
                <div className="flex flex-col items-center text-center mt-3">
                  <h2 className="text-[19px] font-bold text-[#1a1b1f] tracking-tight group-hover:text-black">
                    {col.title}
                  </h2>
                  <p className="text-[12px] text-[#444748] font-medium mt-0.5">
                    {col.dateRange} • {col.memoryCount} souvenirs
                  </p>

                  {/* Overlapping Avatar Cluster */}
                  <div className="flex items-center mt-2.5">
                    <div className="flex -space-x-2 overflow-hidden items-center">
                      {col.contributors.slice(0, 3).map((contrib, i) => (
                        <div
                          key={contrib.id || i}
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-[#faf9fe] bg-[#e9e7ed] overflow-hidden"
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={contrib.avatar}
                            alt={contrib.name}
                          />
                        </div>
                      ))}
                    </div>
                    <span className="text-[11px] text-[#444748] ml-2 font-medium">
                      +{col.contributorCount - 3 > 0 ? col.contributorCount - 3 : 4}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
};
