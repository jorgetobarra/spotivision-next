import axios from 'axios';
import { Contestant } from './models/contestant';
import { SpotifyTracksResponse, Track, SpotifyPlaylist } from './models/spotifyModels';

export const trackToContestant = (track: Track): Contestant => ({
  countryCode: '',
  countryName: '',
  songTitle: track.name,
  singer: track.artists[0].name,
  points: 0,
  spotifyData: [
    {
      trackId: track.id,
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
      title: track.name,
      singer: '',
      imageUrl: track.album.images[0].url,
    },
  ],
});

// eslint-disable-next-line max-len
export const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_client_id}&response_type=token&redirect_uri=${process.env.NEXT_PUBLIC_redirect_url}&scope=user-top-read`;

export const getTopTracks = async (token: string, timeRange: string) => {
  try {
    const response = await axios.get<SpotifyTracksResponse>('https://api.spotify.com/v1/me/top/tracks', {
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
    });
    return response.data.items || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProfile = async (token: string) => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const profile = response.data;
    return { id: profile.id, name: profile.display_name };
  } catch (error) {
    console.error(error);
    return null;
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
    return [];
  }
};

export const getPlaylist = async (id: string, token: string) => {
  try {
    const response = await axios.get<SpotifyPlaylist>(`https://api.spotify.com/v1/playlists/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: 50,
      },
    });
    return {
      name: response.data.name,
      contestants: response.data.tracks.items.map((item) => trackToContestant(item.track)),
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
