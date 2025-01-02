import React from 'react';
import { Contestant } from '../../lib/models/contestant';
import { Card } from '../top/card';

export function PrintableTop({ topName, results, downloadRef }: {topName: string, results: Contestant[], downloadRef: React.MutableRefObject<HTMLDivElement | null>}) {
  return (
    <div
      id="printable-table"
      ref={downloadRef}
      className="w-[375px] h-[667px] bg-blue-100 p-4"
    >
      <h1 className="text-2xl font-bold w-[100%] text-center mt-4 mb-1">{topName}</h1>
      <h2 className="text-xl font-semibold w-[100%] text-right mt-1 mb-4">Spotivision</h2>
      {results.map((track, index) => (
        <Card key={track.spotifyData[0].trackId} track={track} position={index} print />
      ))}
    </div>
  );
}
