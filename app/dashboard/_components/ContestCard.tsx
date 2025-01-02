'use client';

import {
  GlobeAltIcon,
  MusicalNoteIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import React from 'react';
import { usePlaylistImage } from '../../lib/usePlaylistImage';

export function Card({
  title,
  href,
  playlistId,
}: {
  title: string;
  href: string;
  playlistId?: string;
}) {
  const router = useRouter();
  const { getPlaylistImage } = usePlaylistImage();
  const [playlistImageSrc, setPlaylistImageSrc] = React.useState<string | null>(null);

  const setPlaylistData = (id: string) => {
    getPlaylistImage(id).then((image) => {
      setPlaylistImageSrc(image);
    });
  };

  React.useEffect(() => {
    if (playlistId) {
      setPlaylistData(playlistId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="rounded-xl bg-gray-50 p-2 shadow-sm"
      role="button"
      tabIndex={0}
      onClick={() => router.push(href)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          router.push(href);
        }
      }}
    >
      <div className="flex px-4 pb-2 justify-center">
        <h3 className="ml-2 text-lg text-center font-medium">{title}</h3>
      </div>
      {playlistImageSrc
        ? (
          <div
            className="rounded-xl bg-white p-4 flex justify-center"
          >
            <img src={playlistImageSrc} alt="Playlist cover" className="w-32 h-32 rounded-md" />
          </div>
        )
        : (
          <div className="rounded-xl bg-white px-4 py-8 flex justify-center items-center h-40">
            <MusicalNoteIcon className="h-8 w-8 -rotate-15" />
            <GlobeAltIcon className="h-8 w-8 rotate-[15deg]" />
          </div>
        )}
    </div>
  );
}
