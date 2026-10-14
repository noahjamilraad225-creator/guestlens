export interface Contributor {
  id: string;
  name: string;
  avatar: string;
}

export interface MemoryItem {
  id: string;
  collectionId: string;
  type: 'photo' | 'video' | 'audio' | 'text';
  url: string;
  author: string;
  authorAvatar?: string;
  timestamp: string;
  caption?: string;
  tag?: string;
  category?: string;
  location?: string;
  likes: number;
  commentsCount: number;
  duration?: string;
  isLiked?: boolean;
}

export interface AudioMessage {
  id: string;
  author: string;
  avatar: string;
  duration: string;
  timestamp: string;
  waveformData?: number[];
  isPlaying?: boolean;
}

export interface Collection {
  id: string;
  title: string;
  dateRange: string;
  memoryCount: number;
  contributorCount: number;
  themeColor: string;
  themeName: string;
  coverPhotos: string[];
  contributors: Contributor[];
  location?: string;
  isInstantAccess: boolean;
  moderationEnabled?: boolean;
  code: string;
  qrUrl: string;
}

export type ScreenId =
  | 'collections_list'      // Screen 6 (Souvenirs partagés)
  | 'album_detail'          // Screen 7 (Détail de l'album)
  | 'live_slideshow'        // Screen 1 (Diaporama en direct / projection)
  | 'photo_viewer'          // Screen 2 (Visionneuse immersive Gion)
  | 'audio_guestbook'       // Screen 3 (Details Enregistrement Vocal)
  | 'qr_invite'             // Screen 4 (Partage QR Invite & Kit A6)
  | 'create_collection'     // Screen 5 (Créer une collection)
  | 'upload_sheet'          // Screen 8 (Faire tourner dans la pièce / Contribution)
  | 'empty_state';          // Screen 9 (Tout commence par une collection)
