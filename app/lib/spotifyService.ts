import axios from 'axios';
import { isBefore, subHours } from 'date-fns';
import { Contestant } from './models/contestant';
import {
  SpotifyPlaylist,
  SpotifyTracksResponse,
  Track,
} from './models/spotifyModels';

const TOP_TRACKS_KEY = 'topTracks';
const PROFILE_KEY = 'profile';
const PLAYLIST_KEY = 'playlist';
const CreateTopTracksKey = (timeRange: string) => `${TOP_TRACKS_KEY}-${timeRange}`;
const CreatePlaylistKey = (playlist: string) => `${PLAYLIST_KEY}-${playlist}`;

export const trackToContestant = (track: Track): Contestant => ({
  countryCode: '',
  countryName: '',
  songTitle: track.name,
  singer: track.artists[0].name,
  points: 0,
  spotifyData: [
    {
      trackId: track.id,
      trackLink: track.external_urls.spotify,
      title: track.name,
      singer: track.artists[0].name,
      imageUrl: track.album.images[0].url,
    },
  ],
});

export const artistsToContestants = (track: Track): Contestant => ({
  countryCode: '',
  countryName: '',
  songTitle: track.name,
  singer: '',
  points: 0,
  spotifyData: [
    {
      trackId: track.id,
      trackLink: track.external_urls.spotify,
      title: track.name,
      singer: '',
      imageUrl: track.album.images[0].url,
    },
  ],
});

// eslint-disable-next-line max-len
export const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_client_id}&response_type=token&redirect_uri=${process.env.NEXT_PUBLIC_redirect_url}&scope=user-top-read`;

interface TopTracksCache {
  tracks: Track[];
  storedAt: Date;
}
export const getTopTracks = async (token: string, timeRange: string) => {
  try {
    if (CreateTopTracksKey(timeRange) in sessionStorage) {
      const cache = JSON.parse(
        sessionStorage.getItem(CreateTopTracksKey(timeRange)) || '{}',
      ) as TopTracksCache;
      if (
        cache.tracks?.length
        && cache.storedAt
        && isBefore(cache.storedAt, subHours(new Date(), 1))
      ) {
        return cache.tracks;
      }
    }
    const response = await axios.get<SpotifyTracksResponse>(
      'https://api.spotify.com/v1/me/top/tracks',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        params: {
          time_range: timeRange,
          limit: 50,
          offset: 0,
        },
      },
    );
    sessionStorage.setItem(
      CreateTopTracksKey(timeRange),
      JSON.stringify({
        tracks: response.data.items,
        storedAt: new Date(),
      } as TopTracksCache),
    );
    return response.data.items || [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

interface ProfileCache {
  data: {
    id: string;
    name: string;
  };
  storedAt: Date;
}

export const getProfile = async (token: string) => {
  try {
    if (PROFILE_KEY in sessionStorage) {
      const cache = JSON.parse(
        sessionStorage.getItem(PROFILE_KEY) || '{}',
      ) as ProfileCache;
      if (
        cache.data
        && cache.storedAt
        && isBefore(cache.storedAt, subHours(new Date(), 1))
      ) {
        return cache.data;
      }
    }

    const response = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const profile = response.data;
    const result = { id: profile.id, name: profile.display_name };
    sessionStorage.setItem(
      PROFILE_KEY,
      JSON.stringify({ data: result, storedAt: new Date() } as ProfileCache),
    );
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const searchTrack = async (searchTerm: string, token: string) => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchTerm,
        type: 'track',
      },
    });
    return response.data.tracks.items || [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

interface PlaylistCache {
  data: {
    name: string;
    imageSrc: string;
    contestants: Contestant[];
  };
  storedAt: Date;
}
export const getPlaylist = async (id: string, token: string) => {
  try {
    if (CreatePlaylistKey(id) in sessionStorage) {
      const cache = JSON.parse(
        sessionStorage.getItem(CreatePlaylistKey(id)) || '{}',
      ) as PlaylistCache;
      if (
        cache.data
        && cache.storedAt
        && isBefore(cache.storedAt, subHours(new Date(), 1))
      ) {
        return cache.data;
      }
    }
    const response = await axios.get<SpotifyPlaylist>(
      `https://api.spotify.com/v1/playlists/${id}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        params: {},
      },
    );
    const result = {
      name: response.data.name,
      imageSrc: response.data.images[0].url,
      contestants: response.data.tracks.items.map((item) => trackToContestant(item.track)),
    };
    sessionStorage.setItem(
      CreatePlaylistKey(id),
      JSON.stringify({ data: result, storedAt: new Date() } as PlaylistCache),
    );
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
