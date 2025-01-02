import React from 'react';
import { Contestant } from '../../lib/models/contestant';
import { Card } from '../top/card';
import { PrintableTop } from './PrintableTop';

export function Top({ topName, results, downloadRef }: {topName: string, results: Contestant[], downloadRef: React.MutableRefObject<HTMLDivElement | null>}) {
  return (
    <>
      <div>
        {results.map((track, index) => (
          <Card key={track.spotifyData[0].trackId} track={track} position={index} />
        ))}
      </div>
      <div className="fixed inset-0 bg-gray-100 -z-10" />
      <PrintableTop topName={topName} results={results} downloadRef={downloadRef} />
    </>
  );
}
