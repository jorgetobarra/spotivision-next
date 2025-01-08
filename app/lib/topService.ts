import { getTopTracks, trackToContestant, getPlaylist } from './spotifyService';
import { Track } from './models/spotifyModels';
import { Contestant } from './models/contestant';

export const getUserTotalScores = async (token: string) => {
  const initialPunctuation = [0, 50, 100];
  const finalResults: Contestant[] = [];
  const promises: Promise<Track[]>[] = [];
  try {
    ['short_term', 'medium_term', 'long_term'].forEach((range) => {
      promises.push(getTopTracks(token, range));
    });
    const responses = await Promise.all(promises);
    responses.forEach((tracks, value) => {
      const contestants = tracks.map(trackToContestant);
      contestants.map((contestant) => {
        const tempContestant = contestant;
        const index = tracks.findIndex((track) => contestant.spotifyData.find(
          (spotifyData) => spotifyData.trackId === track.id
              || spotifyData.title === track.name,
        ));
        if (index !== -1) {
          let points = 50 - index;
          if (!tempContestant.points) {
            points += initialPunctuation[value];
            tempContestant.points = 0;
          }
          tempContestant.points += points;
        }
        return tempContestant;
      });
      contestants.forEach((contestant) => {
        const foundContestant = finalResults.find(
          (finalContestant) => finalContestant.spotifyData[0].trackId
            === contestant.spotifyData[0].trackId,
        );
        if (!foundContestant) {
          finalResults.push(contestant);
        } else {
          foundContestant.points += contestant?.points || 0;
        }
      });
    });
  } catch (error) {
    return { scores: [], isError: true };
  }

  return { scores: finalResults, isError: false };
};

export const getGenericScores = async (token: string) => {
  const userScores = await getUserTotalScores(token);
  if (userScores.isError) return { scores: [], isError: true };
  return {
    scores: userScores.scores.sort((a, b) => b.points - a.points).slice(0, 10),
    isError: false,
  };
};

export const getPlaylistScores = async (token: string, playlistId: string) => {
  try {
    const playlist = await getPlaylist(playlistId, token);
    const finalScores: Contestant[] = [];
    const userScores = await getUserTotalScores(token);
    playlist?.contestants.forEach((contestant) => {
      const foundContestant = userScores.scores.find(
        (userContestant) => userContestant.spotifyData[0].trackId
          === contestant.spotifyData[0].trackId,
      );
      if (foundContestant) {
        finalScores.push(foundContestant);
      }
    });
    return {
      scores: finalScores.sort((a, b) => b.points - a.points),
      isError: false,
    };
  } catch (error) {
    return { scores: [], isError: true };
  }
};
