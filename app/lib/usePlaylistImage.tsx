'use client';

import { useState } from 'react';
import { getPlaylist } from './spotifyService';
import { useAuthentication } from './hooks/useAuthentication';

export const usePlaylistImage = () => {
  const [imagesSrc, setImagesSrc] = useState<Record<string, string> | null>(
    null,
  );
  const { getSpotifyToken } = useAuthentication();

  const getPlaylistImage = async (id: string) => {
    if (imagesSrc?.[id]) return imagesSrc[id];
    const token = getSpotifyToken();
    if (!token) return null;
    const playlist = await getPlaylist(id, token);
    if (!playlist) return null;
    const image = playlist.imageSrc;
    setImagesSrc((prev) => ({ ...prev, [id]: image }));
    return image;
  };

  return { getPlaylistImage };
};
