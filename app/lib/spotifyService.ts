// eslint-disable-next-line max-len
export const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_client_id}&response_type=token&redirect_uri=${process.env.NEXT_PUBLIC_redirect_url}&scope=user-top-read`;

// getTopTracks(code: string, timeRange: string, type: string) {
//   let headers = new HttpHeaders();
//   headers = headers.set('Accept', 'application/json');
//   headers = headers.set('Content-Type', 'application/json');
//   headers = headers.set('Authorization', `Bearer ${code}`);
//   return this.http.get(`https://api.spotify.com/v1/me/top/${type}?time_range=${timeRange}&limit=50&offset=0`, { headers })
//    .pipe(take(1), map((res: any) => res.items || []));
// }

// getProfile(token: string) {
//   let headers = new HttpHeaders();
//   headers = headers.set('Accept', 'application/json');
//   headers = headers.set('Content-Type', 'application/json');
//   headers = headers.set('Authorization', `Bearer ${token}`);
//   return this.http.get('https://api.spotify.com/v1/me', { headers })
//     .pipe(
//       take(1),
//       tap((res) => console.log(res)),
//       map((profile: any) => ({ id: profile.id, name: profile.display_name })),
//     );
// }

// searchTrack(searchTerm: string, token: string) {
//   let headers = new HttpHeaders();
//   headers = headers.set('Accept', 'application/json');
//   headers = headers.set('Content-Type', 'application/json');
//   headers = headers.set('Authorization', `Bearer ${token}`);
//   return this.http.get(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, { headers })
//    .pipe(take(1), map((res: any) => res.tracks.items || []));
// }

// getPlaylist(id: string, token: string) {
//   let headers = new HttpHeaders();
//   headers = headers.set('Accept', 'application/json');
//   headers = headers.set('Content-Type', 'application/json');
//   headers = headers.set('Authorization', `Bearer ${token}`);
//   return this.http.get(`https://api.spotify.com/v1/playlists/${id}?limit=50`, { headers })
//     .pipe(
//       take(1),
//       tap((res) => console.log(res)),
//       map((data: any) => ({ name: data.name, contestants: data.tracks.items.map((i) => i.track) })),
//       tap((playlist) => console.log('TRACKS', playlist.contestants)),
//       map((playlist) => ({ name: playlist.name, contestants: this.tracksToContestants(playlist.contestants) })),
//     );
// }

// tracksToContestants(tracks: Track[]): Contestant[] {
//   return tracks.map((t) => {
//     const contestant: Contestant = {
//       countryCode: '',
//       countryName: '',
//       songTitle: t.name,
//       singer: t.artists[0].name,
//       points: 0,
//       spotifyData: [
//         {
//           trackId: t.id,
//           title: t.name,
//           singer: t.artists[0].name,
//           imageUrl: t.album.images[0].url,
//         },
//       ],
//     };
//     return contestant;
//   });
// }

// artistsToContestants(tracks: Track[]): Contestant[] {
//   return tracks.map((t) => {
//     const contestant: Contestant = {
//       countryCode: '',
//       countryName: '',
//       songTitle: t.name,
//       singer: null,
//       points: 0,
//       spotifyData: [
//         {
//           trackId: t.id,
//           title: t.name,
//           singer: null,
//           imageUrl: t.images[0].url,
//         },
//       ],
//     };
//     return contestant;
//   });
// }
