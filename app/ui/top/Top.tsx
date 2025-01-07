import React from 'react';
import { Contestant } from '../../lib/models/contestant';
import { Card } from './card';
import { PrintableTop } from './PrintableTop';

export function Top({
  topName,
  results,
  downloadRef,
}: {
  topName: string;
  results: Contestant[];
  downloadRef: React.MutableRefObject<HTMLDivElement | null>;
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
      </div>
      <PrintableTop
        topName={topName}
        results={results}
        downloadRef={downloadRef}
      />
    </>
  );
}
