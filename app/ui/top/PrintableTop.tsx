import { rubik } from '@/app/ui/fonts';
import React from 'react';
import { Contestant } from '../../lib/models/contestant';
import { Card } from './card';
import SpotivisionLogo from '../SpotivisionLogo';

export function PrintableTop({ topName, results, downloadRef }: {topName: string, results: Contestant[], downloadRef: React.MutableRefObject<HTMLDivElement | null>}) {
  return (
    <>
      <div className="fixed inset-0 bg-gray-100 -z-10" />
      <div
        id="printable-table"
        ref={downloadRef}
        className="w-[375px] h-[667px] bg-slate-50 p-4 fixed top-0 left-0 -z-20"
      >
        <div className="flex justify-end mt-1 mb-1">
          <SpotivisionLogo size="sm" color="text-green-400" />
        </div>
        <h1 className={`${rubik.className} text-2xl font-bold w-[100%] text-center mt-4 mb-4 text-black drop-shadow-[0_0.5px_10px_white]`}>{topName}</h1>
        {results.map((track, index) => (
          <Card key={track.spotifyData[0].trackId} track={track} position={index} print />
        ))}
        <p className={`${rubik.className} text-xs font-extralight w-[100%] text-right mt-1 mb-4 text-violet-100`}>by Jologe</p>
      </div>
    </>
  );
}
