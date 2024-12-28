export default class Contestant {
  countryCode: string;

  countryName: string;

  songTitle: string;

  singer: string;

  spotifyData: Array<{
        trackId: string;
        title: string;
        singer: string;
        imageUrl: string;
    }>;

  points?: number;

  checked?: boolean;

  constructor(
    songTitle: string,
    singer: string,
    trackId: string,
    title: string,
    spotifySinger: string,
    imageUrl: string,
    points?: number,
    checked?: boolean,
    countryCode?: string,
    countryName?: string,
  ) {
    this.songTitle = songTitle;
    this.singer = singer;
    this.points = points;
    this.checked = checked;
    this.spotifyData = [{
      trackId,
      title,
      singer: spotifySinger,
      imageUrl,
    }];
    this.countryCode = countryCode || '';
    this.countryName = countryName || '';
  }
}
