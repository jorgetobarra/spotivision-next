import {
  DocumentDuplicateIcon,
  UserGroupIcon,
  MusicalNoteIcon,
} from '@heroicons/react/24/outline';

export const contestsLinks = [
  {
    name: 'Benidorm Fest 2025',
    href: '/dashboard/benidorm-fest-2025',
    icon: DocumentDuplicateIcon,
    playlistId: '7KxVXjZYpeHDTdnSudz5VP',
    image:
      'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c46820c348ab9596a90a1382e',
  },
  {
    name: 'All Benidorm Fests',
    href: '/dashboard/all-benidorm-fests',
    icon: UserGroupIcon,
    playlistId: '337QzVZknW5O61N67qpaOv',
    image:
      'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84b30b6ef807d53488c90354af',
  },
  {
    name: 'Your Top Songs',
    href: '/dashboard/your-top-songs',
    icon: MusicalNoteIcon,
    playlistId: null,
    image: null,
  },
] as const;
