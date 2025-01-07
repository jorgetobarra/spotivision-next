import { rubik } from '@/app/ui/fonts';
import React from 'react';
import { Contestant } from '../../lib/models/contestant';
import { Card } from './card';
import SpotivisionLogo from '../SpotivisionLogo';

export function PrintableTop({
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
      <div className="fixed inset-0 -z-10 bg-gray-100" />
      <div
        id="printable-table"
        ref={downloadRef}
        className="fixed left-0 top-0 -z-20 h-[667px] w-[375px] bg-slate-50 p-4"
      >
        <div className="mb-1 mt-1 flex justify-end">
          <SpotivisionLogo size="sm" color="text-green-400" />
        </div>
        <h1
          className={`${rubik.className} mb-4 mt-4 w-[100%] text-center text-2xl font-bold text-black drop-shadow-[0_0.5px_10px_white]`}
        >
          {topName}
        </h1>
        {results.map((track, index) => (
          <Card
            key={track.spotifyData[0].trackId}
            track={track}
            position={index}
            print
          />
        ))}
        <p
          className={`${rubik.className} mb-4 mt-1 w-[100%] text-right text-xs font-extralight text-violet-100`}
        >
          by Jologe
        </p>
      </div>
    </>
  );
}
