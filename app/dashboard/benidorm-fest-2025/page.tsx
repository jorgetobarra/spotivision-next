'use client';

import React, { Suspense } from 'react';
import { useAuthentication } from '../../lib/hooks/useAuthentication';
import { Contestant } from '../../lib/models/contestant';
import { getGenericScores } from '../../lib/topService';
import { useScreenshot } from '../../lib/useScreenshot';
import { Card } from '../../ui/top/card';
import { RevenueChartSkeleton } from '../../ui/skeletons';

export default function Page() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [results, setResults] = React.useState<Contestant[]>([]);
  const { exportToPng } = useScreenshot();
  const { getSpotifyToken } = useAuthentication();
  const token = getSpotifyToken();

  const mockTrack = {
    countryCode: 'SE',
    countryName: 'Sweden',
    songTitle: 'Euphoria',
    // songTitle: 'EuphoriaEuphoriaEuphoriaEuphoriaEuphoriaEuphoriaEuphoriaEuphoriaEuphoriaEuphoriaEuphoria',
    singer: 'Loreen',
    spotifyData: [
      {
        trackId: '1',
        title: 'Euphoria',
        singer: 'Loreen',
        imageUrl: 'https://th.bing.com/th/id/OIP.j16a16S5-iMuC85MxV75LQHaHa?rs=1&pid=ImgDetMain',
      },
    ],
    points: 100,
    checked: true,
  };

  const mockTracks = [
    mockTrack, mockTrack, mockTrack, mockTrack, mockTrack,
    mockTrack, mockTrack, mockTrack, mockTrack, mockTrack,
  ];

  const handleDownload = async () => {
    if (ref?.current) {
      ref.current.hidden = false;
      await exportToPng(ref);
      ref.current.hidden = true;
    }
  };

  async function fetchData() {
    if (results?.length) return;
    console.log('fetching');
    const res = await getGenericScores(token);
    // const res = await getPlaylistScores(token, '1G9e7rMXjXUnU17uK9WefP');
    // const res = await getPlaylistScores(token, '337QzVZknW5O61N67qpaOv');
    setResults(res.slice(0, 10));
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Suspense fallback={<RevenueChartSkeleton />}>
      {/* TODO: for the suspense to work, children have to be independent components with the api calls inside them */}
      <button
        type="button"
        onClick={handleDownload}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2
         focus:ring-green-600 focus:ring-opacity-50 shadow-sm m-4"
      >
        Download your top
      </button>
      <div>
        {results.map((track, index) => (
          <Card key={track.spotifyData[0].trackId} track={track} position={index} />
        ))}
      </div>
      <div className="fixed inset-0 bg-gray-100 -z-10" />
      <div
        id="printable-table"
        ref={ref}
        className="w-[375px] h-[667px] bg-blue-100 p-4"
      >
        <h1 className="text-2xl font-bold w-[100%] text-center mt-4 mb-1">BendiormFest 2025</h1>
        <h2 className="text-xl font-semibold w-[100%] text-right mt-1 mb-4">Spotivision</h2>
        {/* TODO: Convert to independent component */}
        {results.map((track, index) => (
          <Card key={track.spotifyData[0].trackId} track={track} position={index} print />
        ))}
      </div>
    </Suspense>
  );
}
