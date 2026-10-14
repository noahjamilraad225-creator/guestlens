/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Collection, MemoryItem, ScreenId } from './types';
import { INITIAL_COLLECTIONS, JAPAN_MEMORIES } from './data/mockData';
import { BottomNav } from './components/BottomNav';
import { CollectionsListScreen } from './screens/CollectionsListScreen';
import { AlbumDetailScreen } from './screens/AlbumDetailScreen';
import { LiveSlideshowScreen } from './screens/LiveSlideshowScreen';
import { PhotoViewerScreen } from './screens/PhotoViewerScreen';
import { AudioGuestbookScreen } from './screens/AudioGuestbookScreen';
import { QrInviteScreen } from './screens/QrInviteScreen';
import { CreateCollectionModal } from './screens/CreateCollectionModal';
import { UploadSheetModal } from './screens/UploadSheetModal';
import { EmptyStateScreen } from './screens/EmptyStateScreen';

export default function App() {
  const [collections, setCollections] = useState<Collection[]>(INITIAL_COLLECTIONS);
  const [selectedCollection, setSelectedCollection] = useState<Collection>(INITIAL_COLLECTIONS[0]);
  const [memories, setMemories] = useState<MemoryItem[]>(JAPAN_MEMORIES);
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem>(JAPAN_MEMORIES[0]);

  // Current screen state
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('collections_list');
  const [history, setHistory] = useState<ScreenId[]>(['collections_list']);
  const [showQuickActionMenu, setShowQuickActionMenu] = useState(false);

  const navigateTo = (screen: ScreenId) => {
    setHistory((prev) => [...prev, screen]);
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (history.length > 1) {
      const nextHistory = [...history];
      nextHistory.pop(); // remove current
      const prevScreen = nextHistory[nextHistory.length - 1];
      setHistory(nextHistory);
      setCurrentScreen(prevScreen);
    } else {
      setCurrentScreen('collections_list');
    }
  };

  const handleSelectCollection = (col: Collection) => {
    setSelectedCollection(col);
    navigateTo('album_detail');
  };

  const handleSelectMemory = (mem: MemoryItem) => {
    setSelectedMemory(mem);
    navigateTo('photo_viewer');
  };

  const handleCreateCollection = (newCol: Collection) => {
    setCollections((prev) => [newCol, ...prev]);
    setSelectedCollection(newCol);
    navigateTo('album_detail');
  };

  const handleUploadSuccess = () => {
    const newMemory: MemoryItem = {
      id: `mem-${Date.now()}`,
      collectionId: selectedCollection.id,
      type: 'photo',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEOT7Mu-6MEBSVWnFjZBW_7x4sl5ClvtS661Jk956ez_WqFsjLuYzNqQTm1UXbbLDW13kxEz3LPhX0X5dFWT_bLNFkF5JCFkBIwCSnCkiu1hXaITegmtHdAyKnTHoNX3BD4CoxVh-etbj8js5W0dCAbAgmw3-TmsfNT6ao2D04vrOB2-rYloWBe-6NRa_ack0tNlPwO-mCQYd0Xo9a4St3k4dLra6gMFWSO4jYwwUOR-K_4nEpC3oavQ',
      author: 'Maya & Léo',
      timestamp: 'À l’instant',
      caption: 'Nouveau souvenir partagé ✨',
      likes: 1,
      commentsCount: 0,
      isLiked: true
    };
    setMemories((prev) => [newMemory, ...prev]);
    navigateTo('album_detail');
  };

  const handleOpenAction = () => {
    // If on collections list, prompt choice or open create; if inside album, open upload
    if (currentScreen === 'collections_list') {
      setShowQuickActionMenu(true);
    } else {
      navigateTo('upload_sheet');
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F1F5] flex justify-center text-[#1a1b1f] selection:bg-black selection:text-white antialiased">
      {/* Centered Mobile App Container */}
      <div className="w-full max-w-md min-h-screen bg-[#faf9fe] shadow-2xl relative flex flex-col overflow-x-hidden border-x border-slate-200/60">
        
        {/* Main Active Screen */}
        <div className="flex-1 flex flex-col">
          {currentScreen === 'collections_list' && (
            <CollectionsListScreen
              collections={collections}
              onSelectCollection={handleSelectCollection}
              onOpenCreate={() => navigateTo('create_collection')}
              onNavigate={navigateTo}
            />
          )}

          {currentScreen === 'album_detail' && (
            <AlbumDetailScreen
              collection={selectedCollection}
              memories={memories}
              onBack={handleBack}
              onNavigate={navigateTo}
              onSelectMemory={handleSelectMemory}
              onOpenUpload={() => navigateTo('upload_sheet')}
            />
          )}

          {currentScreen === 'live_slideshow' && (
            <LiveSlideshowScreen
              onBack={handleBack}
              onNavigate={navigateTo}
              onOpenUpload={() => navigateTo('upload_sheet')}
            />
          )}

          {currentScreen === 'photo_viewer' && (
            <PhotoViewerScreen
              memory={selectedMemory}
              onBack={handleBack}
              onNavigate={navigateTo}
            />
          )}

          {currentScreen === 'audio_guestbook' && (
            <AudioGuestbookScreen
              onBack={handleBack}
              onNavigate={navigateTo}
            />
          )}

          {currentScreen === 'qr_invite' && (
            <QrInviteScreen
              collection={selectedCollection}
              onBack={handleBack}
              onNavigate={navigateTo}
            />
          )}

          {currentScreen === 'create_collection' && (
            <CreateCollectionModal
              onClose={handleBack}
              onCreateCollection={handleCreateCollection}
              onNavigate={navigateTo}
            />
          )}

          {currentScreen === 'upload_sheet' && (
            <UploadSheetModal
              collection={selectedCollection}
              onClose={handleBack}
              onNavigate={navigateTo}
              onSuccess={handleUploadSuccess}
            />
          )}

          {currentScreen === 'empty_state' && (
            <EmptyStateScreen
              onOpenCreate={() => navigateTo('create_collection')}
              onNavigate={navigateTo}
            />
          )}
        </div>

        {/* Global Bottom Navigation Dock */}
        <BottomNav
          currentScreen={currentScreen}
          onNavigate={navigateTo}
          onOpenAction={handleOpenAction}
        />

        {/* Quick Action Sheet (when tapping + on home) */}
        {showQuickActionMenu && (
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end justify-center p-4"
            onClick={() => setShowQuickActionMenu(false)}
          >
            <div
              className="w-full max-w-sm bg-white rounded-3xl p-5 shadow-2xl flex flex-col gap-3 animate-slide-up border border-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-bold text-base text-[#1a1b1f]">Ajouter un élément</span>
                <button
                  onClick={() => setShowQuickActionMenu(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>

              <button
                onClick={() => {
                  setShowQuickActionMenu(false);
                  navigateTo('create_collection');
                }}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#faf9fe] hover:bg-slate-100 transition-colors text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">add_photo_alternate</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-[#1a1b1f]">Créer une nouvelle collection</span>
                  <span className="text-xs text-[#747878]">Voyage, mariage, anniversaire...</span>
                </div>
              </button>

              <button
                onClick={() => {
                  setShowQuickActionMenu(false);
                  navigateTo('upload_sheet');
                }}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#faf9fe] hover:bg-slate-100 transition-colors text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ae302a] text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">cloud_upload</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-[#1a1b1f]">Déposer dans {selectedCollection.title}</span>
                  <span className="text-xs text-[#747878]">Photos, vidéo ou note vocale</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
