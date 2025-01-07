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
    playlistId: '1G9e7rMXjXUnU17uK9WefP',
    image:
      'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8440d575bec461f1f595017ef6',
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
