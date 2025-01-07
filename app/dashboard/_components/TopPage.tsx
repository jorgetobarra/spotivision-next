'use client';

import React from 'react';
import { useAuthentication } from '../../lib/hooks/useAuthentication';
import { Contestant } from '../../lib/models/contestant';
import { getGenericScores, getPlaylistScores } from '../../lib/topService';
import { useScreenshot } from '../../lib/useScreenshot';
import { Top } from '../../ui/top/Top';

export function TopPage({
  topName,
  playlist,
}: {
  topName: string;
  playlist?: string;
}) {
  const downloadRef = React.useRef<HTMLDivElement | null>(null);
  const [results, setResults] = React.useState<Contestant[]>([]);
  const { exportToPng } = useScreenshot();
  const { getSpotifyToken } = useAuthentication();
  const token = getSpotifyToken();

  const handleDownload = async () => {
    if (downloadRef?.current) {
      downloadRef.current.hidden = false;
      // @ts-expect-error - ref.current is not null, idk why
      await exportToPng(downloadRef, `${topName} Spotivision top`);
      downloadRef.current.hidden = true;
    } else {
      console.error('Ref is null', downloadRef);
    }
  };

  async function fetchData() {
    if (results?.length) return;

    let res: Contestant[] = [];
    if (playlist) {
      res = await getPlaylistScores(token, playlist);
    } else {
      res = await getGenericScores(token);
    }
    setResults(res.slice(0, 10));
  }

  React.useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-[100%] items-center justify-items-center">
      <button
        type="button"
        onClick={handleDownload}
        className="m-4 rounded bg-green-500 px-4 py-2 text-white shadow-sm hover:bg-green-700
         focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
      >
        Download your top
      </button>
      <Top topName={topName} results={results} downloadRef={downloadRef} />
    </div>
  );
}
