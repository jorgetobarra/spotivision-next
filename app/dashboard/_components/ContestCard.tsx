'use client';

import { GlobeAltIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';
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
  playlistId: string | null;
}) {
  const router = useRouter();
  const { getPlaylistImage } = usePlaylistImage();
  const [playlistImageSrc, setPlaylistImageSrc] = React.useState<string | null>(
    null,
  );

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
      className="rounded-xl bg-accentBg p-2 shadow-sm dark:bg-darkAccentBg"
      role="button"
      tabIndex={0}
      onClick={() => router.push(href)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          router.push(href);
        }
      }}
    >
      <div className="flex justify-center px-4 pb-2">
        <h3 className="ml-2 text-center text-lg font-medium text-text dark:text-darkText">
          {title}
        </h3>
      </div>
      {playlistImageSrc ? (
        <div className="flex justify-center rounded-xl bg-bg p-4 dark:bg-darkBg">
          <img
            src={playlistImageSrc}
            alt="Playlist cover"
            className="h-32 w-32 rounded-md"
          />
        </div>
      ) : (
        <div className="flex h-40 items-center justify-center rounded-xl bg-bg px-4 py-8 dark:bg-darkBg">
          <MusicalNoteIcon className="-rotate-15 h-8 w-8 text-text dark:text-darkText" />
          <GlobeAltIcon className="h-8 w-8 rotate-[15deg] text-text dark:text-darkText" />
        </div>
      )}
    </div>
  );
}
