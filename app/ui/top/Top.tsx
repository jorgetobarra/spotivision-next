import React from 'react';
import { Contestant } from '../../lib/models/contestant';
import { Card } from './card';
import { PrintableTop } from './PrintableTop';

export function Top({
  topName,
  results,
  downloadRef,
  isError,
}: {
  topName: string;
  results: Contestant[];
  downloadRef: React.MutableRefObject<HTMLDivElement | null>;
  isError?: boolean;
}) {
  return (
    <>
      <div className="flex w-[100%] max-w-[1280px] flex-col items-stretch">
        {results.map((track, index) => (
          <Card
            key={track.spotifyData[0].trackId}
            track={track}
            position={index}
          />
        ))}
        {!results.length && !isError && (
          <p className="mt-16 w-full text-center text-slate-500">
            There seems to be no data for this top. Try another one!
          </p>
        )}
        {/* TODO: Add contact me page when it exists */}
        {isError && (
          <p className="mt-16 w-full text-center text-subText dark:text-darkSubText">
            There seems to be an error in the Spotify login. Please try again
            later.
          </p>
        )}
      </div>
      <PrintableTop
        topName={topName}
        results={results}
        downloadRef={downloadRef}
      />
    </>
  );
}
