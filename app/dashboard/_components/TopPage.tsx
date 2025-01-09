'use client';

import { ArrowDownIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useAuthentication } from '../../lib/hooks/useAuthentication';
import { Contestant } from '../../lib/models/contestant';
import { getGenericScores, getPlaylistScores } from '../../lib/topService';
import { useScreenshot } from '../../lib/useScreenshot';
import { LoaderPage } from '../../ui/LoaderPage';
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
  const [isFetchError, setIsFetchError] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const { exportToPng } = useScreenshot();
  const { getSpotifyToken } = useAuthentication();
  const token = getSpotifyToken();

  const handleDownload = async () => {
    if (downloadRef?.current) {
      downloadRef.current.hidden = false;
      // @ts-expect-error - ref.current is not null, idk why
      await exportToPng(downloadRef, `${topName} Streamvision top`);
      downloadRef.current.hidden = true;
    } else {
      console.error('Ref is null', downloadRef);
    }
  };

  async function fetchData() {
    if (results?.length) return;
    setIsLoading(true);
    let res;
    if (playlist) {
      res = await getPlaylistScores(token, playlist);
    } else {
      res = await getGenericScores(token);
    }
    setResults(res.scores?.slice(0, 10) || []);
    setIsFetchError(res.isError);
    setIsLoading(false);
  }

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-[100%] flex-col justify-items-center">
      { isLoading && (
        // TODO: Change for a skeleton
        <LoaderPage />
      )}
      {!isLoading && (
      <>
        {!isFetchError && !!results?.length && (
        <button
          type="button"
          onClick={handleDownload}
          className="m-4 flex items-center justify-center gap-2 rounded bg-primary-500 hover:bg-primary-600 px-4
         py-2 text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-opacity-50"
        >
          <ArrowDownIcon className="w-5" />
          Download your top
        </button>
        )}
        <Top
          topName={topName}
          results={results}
          downloadRef={downloadRef}
          isError={isFetchError}
        />
      </>
      )}
    </div>
  );
}
