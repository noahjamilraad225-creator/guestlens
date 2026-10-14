import React, { useState, useEffect } from 'react';
import { AUDIO_GUESTBOOK_MESSAGES } from '../data/mockData';
import { ScreenId } from '../types';

interface AudioGuestbookScreenProps {
  onBack: () => void;
  onNavigate: (screen: ScreenId) => void;
}

export const AudioGuestbookScreen: React.FC<AudioGuestbookScreenProps> = ({
  onBack,
  onNavigate
}) => {
  const [isRecording, setIsRecording] = useState(true);
  const [seconds, setSeconds] = useState(46);
  const maxSeconds = 180;
  const [authorSignature, setAuthorSignature] = useState('Kenji & Sarah');
  const [playingMessageId, setPlayingMessageId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [replayActive, setReplayActive] = useState(false);

  // Live timer interval
  useEffect(() => {
    let interval: any = null;
    if (isRecording && seconds < maxSeconds) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording, seconds]);

  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const circumference = 339.292;
  const progress = seconds / maxSeconds;
  const strokeDashoffset = circumference - progress * circumference;

  const handleToggleRecord = () => {
    setIsRecording(!isRecording);
  };

  const handleRestart = () => {
    setSeconds(0);
    setIsRecording(true);
  };

  const handleReplay = () => {
    setReplayActive(true);
    setTimeout(() => setReplayActive(false), 2000);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1200);
  };

  const handlePlayMessage = (id: string) => {
    if (playingMessageId === id) {
      setPlayingMessageId(null);
    } else {
      setPlayingMessageId(id);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#faf9fe] text-[#1a1b1f] font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 w-full z-40 bg-[#faf9fe]/80 backdrop-blur-xl pt-safe shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="h-14 px-5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button
              onClick={onBack}
              aria-label="Retour"
              className="w-11 h-11 -ml-2 rounded-full flex items-center justify-center text-[#1a1b1f] active:bg-[#e9e7ed] transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">
                arrow_back_ios_new
              </span>
            </button>
            <h1 className="text-[17px] font-semibold text-[#1a1b1f] tracking-tight">
              Details Enregistrement Vocal
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-white text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-safe px-5 pt-3">
        {/* Intro */}
        <div className="pt-2 pb-4 flex flex-col gap-1">
          <div className="flex items-center gap-1 text-[#444748] text-[12px] font-medium">
            <span className="material-symbols-outlined text-[16px] text-[#ae302a]">mic</span>
            <span>Voyage au Japon • Événement partagé</span>
          </div>
          <p className="text-[14px] text-[#444748]">
            Immortalisez vos souvenirs partagés en laissant un message audio spontané.
          </p>
        </div>

        {/* Studio Souvenir Banner with circular polaroids */}
        <div className="mb-6">
          <div className="relative w-full overflow-hidden rounded-2xl bg-[#f4f3f8] shadow-xs p-4 flex items-center justify-between">
            <div className="flex flex-col z-10 max-w-[62%]">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#e3e2e7] text-[#1a1b1f] text-[11px] font-semibold w-fit mb-1">
                <span className="w-2 h-2 rounded-full bg-[#ae302a] animate-pulse"></span>
                Studio Souvenir
              </span>
              <h2 className="text-[18px] font-bold text-[#1a1b1f] tracking-tight mb-1">
                Laissez une note vocale
              </h2>
              <p className="text-[12px] text-[#444748] leading-snug">
                Partagez un éclat de rire, un vœu ou une anecdote de Kyoto.
              </p>
            </div>

            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute w-20 h-20 rounded-full overflow-hidden shadow-md -rotate-6 transform border-2 border-white">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuNL7vaXLZ75rcdRiBzape3Ur9Plttdgiyrn4zOM7UmwcDRvPdhtgvQ05azDSAGpmVYVEiKlahSy85Xub9pgALYoaZ4kuRfbznEONT5eBvCkZD1m1bC2RC1SBiPI_pJSkH8NN44PnvsIxWGfR_FdD9y8T2LNAraBayt-__UBZ6faGWTrza5TjbvkrIYyCV-RF5HlqmTD3LlNmi3W3X-XNZ2gop2HRlhLKdfUgWpSfPzVrbRJvUXgCAjQ"
                  alt="Amis au salon de thé"
                />
              </div>
              <div className="absolute right-0 bottom-0 w-12 h-12 rounded-full overflow-hidden shadow-lg rotate-12 transform border-2 border-white">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9ooLrXKpj_vY4KTdBlh4W_63PeqNGzf7Ond0aZhjj1zxm1r33cE9mLhe9D69KnGTcHmJpCDV2iYMUtqhtEhW-3Qvi2HkqXtoo3G3SWpaWIIQLZ6up63zazxY53kOzCXTaMbByIP21yiO3OobQaRgyEaaUBVpux3mDPNyXaHefib1PoTj5YiLyoXNpNZ3UMImJrPoFwY6nSPkAer5lYtgzkrd62pMyk-Z5kL5-Niunn83lS_2waJNZAw"
                  alt="Voyageurs souriants"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Circular Live Recorder Card */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-full bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col items-center relative overflow-hidden border border-slate-100">
            <div className="flex items-center justify-between w-full mb-3">
              <span className="text-[11px] font-bold text-[#444748] uppercase tracking-widest">
                En direct
              </span>
              <span className="text-[12px] font-medium text-[#444748] bg-[#f4f3f8] px-2.5 py-1 rounded-full">
                Max 03:00
              </span>
            </div>

            {/* Circular Ring Timer */}
            <div className="relative flex items-center justify-center my-3">
              <svg className="w-48 h-48 -rotate-90 transform" viewBox="0 0 120 120">
                <circle
                  className="stroke-[#e3e2e7]"
                  cx="60"
                  cy="60"
                  fill="none"
                  r="54"
                  strokeWidth="4"
                ></circle>
                <circle
                  className="stroke-[#ae302a] transition-all duration-300"
                  cx="60"
                  cy="60"
                  fill="none"
                  r="54"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  strokeWidth="4"
                ></circle>
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-[32px] font-bold text-[#1a1b1f] tracking-tight">
                  {formatTime(seconds)}
                </span>
                <span className="text-[11px] font-semibold text-[#ae302a] flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ae302a]"></span>
                  {isRecording ? 'En cours' : 'En pause'}
                </span>
              </div>
            </div>

            {/* Audio Waveform Animation Bars */}
            <div className="w-full h-12 flex items-center justify-center gap-1.5 px-4 mb-4">
              {[
                { h: 'h-3', active: false },
                { h: 'h-5', active: false },
                { h: 'h-8', active: true },
                { h: 'h-11', active: true },
                { h: 'h-6', active: true },
                { h: 'h-12', active: true },
                { h: 'h-9', active: true },
                { h: 'h-4', active: false },
                { h: 'h-10', active: true },
                { h: 'h-7', active: true },
                { h: 'h-3', active: false },
                { h: 'h-9', active: true },
                { h: 'h-11', active: true },
                { h: 'h-5', active: false },
                { h: 'h-2', active: false }
              ].map((bar, idx) => (
                <span
                  key={idx}
                  className={`w-1 rounded-full transition-all duration-150 ${
                    bar.active
                      ? isRecording
                        ? 'bg-[#ae302a] animate-pulse'
                        : 'bg-[#ae302a]'
                      : 'bg-black/20'
                  } ${bar.h}`}
                  style={{ animationDelay: `${idx * 80}ms` }}
                ></span>
              ))}
            </div>

            {/* Big Mic Button with Pulsing Wave */}
            <div className="relative flex items-center justify-center my-2">
              {isRecording && (
                <div className="absolute w-28 h-28 rounded-full bg-[#fc695d]/20 animate-ping"></div>
              )}
              <div className="absolute w-24 h-24 rounded-full bg-[#e9e7ed]/60"></div>
              <button
                onClick={handleToggleRecord}
                aria-label="Contrôle de l'enregistrement"
                className="relative z-10 w-20 h-20 rounded-full bg-black text-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.25)] active:scale-95 transition-transform"
              >
                <span className="material-symbols-outlined text-[34px] fill-icon">
                  {isRecording ? 'pause' : 'mic'}
                </span>
              </button>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-center gap-4 mt-4 w-full pt-2">
              <button
                onClick={handleReplay}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#f4f3f8] active:bg-[#e9e7ed] text-[#1a1b1f] text-[13px] font-semibold transition-colors ${
                  replayActive ? 'bg-[#e3e2e7]' : ''
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                <span>{replayActive ? 'Lecture...' : 'Réécouter'}</span>
              </button>
              <button
                onClick={handleRestart}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#f4f3f8] active:bg-[#e9e7ed] text-[#1a1b1f] text-[13px] font-semibold transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">replay</span>
                <span>Recommencer</span>
              </button>
            </div>
          </div>
        </div>

        {/* Author Signature Field */}
        <div className="mb-6 flex flex-col gap-1.5">
          <label className="text-[12px] font-semibold text-[#444748] px-1" htmlFor="signature">
            Votre prénom ou signature
          </label>
          <div className="relative flex items-center w-full">
            <span className="material-symbols-outlined absolute left-4 text-[20px] text-[#444748]">
              draw
            </span>
            <input
              id="signature"
              type="text"
              value={authorSignature}
              onChange={(e) => setAuthorSignature(e.target.value)}
              placeholder="Ex: Clara ou Lucas & Léa"
              className="w-full bg-white rounded-full pl-12 pr-4 py-3.5 text-[#1a1b1f] text-[14px] font-medium focus:outline-none focus:ring-1 focus:ring-black shadow-xs transition-colors border border-slate-100"
            />
          </div>
        </div>

        {/* Derniers messages (3) */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <h3 className="text-[17px] font-bold text-[#1a1b1f]">Derniers messages</h3>
              <span className="px-2 py-0.5 rounded-full bg-[#e9e7ed] text-[11px] font-bold text-[#444748]">
                {AUDIO_GUESTBOOK_MESSAGES.length}
              </span>
            </div>
            <span className="text-[12px] text-[#444748] font-medium">À écouter</span>
          </div>

          <div className="flex flex-col gap-2.5">
            {AUDIO_GUESTBOOK_MESSAGES.map((msg) => {
              const isPlayingThis = playingMessageId === msg.id;
              return (
                <div
                  key={msg.id}
                  className="bg-white rounded-2xl p-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-between border border-slate-100"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 shadow-sm bg-[#eeedf3]">
                      <img
                        className="w-full h-full object-cover"
                        src={msg.avatar}
                        alt={msg.author}
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[14px] font-bold text-[#1a1b1f] truncate">
                          {msg.author}
                        </span>
                        {msg.id === 'audio-1' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ae302a]"></span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-[#444748] text-[11px] font-medium">
                        <span className="material-symbols-outlined text-[14px]">timer</span>
                        <span>{msg.duration}</span>
                        <span>•</span>
                        <span>{msg.timestamp}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handlePlayMessage(msg.id)}
                    aria-label={`Lire le message de ${msg.author}`}
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ml-2 transition-all active:scale-95 ${
                      isPlayingThis
                        ? 'bg-black text-white shadow-sm'
                        : 'bg-[#f4f3f8] text-[#1a1b1f] hover:bg-[#e9e7ed]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {isPlayingThis ? 'pause' : 'play_arrow'}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Envoi */}
        <div className="pt-1 pb-6">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full h-14 rounded-full font-bold text-[17px] flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(0,0,0,0.18)] active:scale-[0.99] transition-all ${
              isSubmitted
                ? 'bg-[#00210d] text-[#009851]'
                : 'bg-black text-white hover:bg-neutral-800'
            }`}
          >
            {isSubmitting ? (
              <>
                <span className="material-symbols-outlined text-[20px] animate-spin">
                  progress_activity
                </span>
                <span>Envoi de votre souvenir...</span>
              </>
            ) : isSubmitted ? (
              <>
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                <span>Message déposé !</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[22px]">send</span>
                <span>Déposer dans le livre d'or</span>
              </>
            )}
          </button>
          <p className="text-[11px] text-center text-[#444748] font-medium mt-3">
            Vos messages sont préservés pour toujours dans la pellicule collective.
          </p>
        </div>
      </main>
    </div>
  );
};
