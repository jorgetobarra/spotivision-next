'use client';

import { useCookies } from 'react-cookie';

const spotifyTokenCookie = 'spotify_token';
export const useAuthentication = () => {
  const [cookies, setCookie] = useCookies([spotifyTokenCookie]);

  const storeSpotifyToken = (value: string, expiration: number = 3600) => setCookie(spotifyTokenCookie, value, {
    path: '/',
    maxAge: expiration, // Expires after 1hr
    sameSite: true,
  });

  const getSpotifyToken = () => cookies.spotify_token;

  return { storeSpotifyToken, getSpotifyToken };
};
