import { rubik } from '@/app/ui/fonts';
import React from 'react';
import { Contestant } from '../../lib/models/contestant';
import { Card } from './card';
import StreamvisionLogo from '../StreamvisionLogo';

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
      <div className="fixed inset-0 -z-10 bg-bg dark:bg-darkBg" />
      <div
        id="printable-table"
        ref={downloadRef}
        className="fixed left-0 top-0 -z-20 h-[667px] w-[375px] bg-bg dark:bg-darkBg p-4"
      >
        <div className="mb-1 mt-1 flex justify-end">
          <StreamvisionLogo size="sm" color="primary-500" />
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
          created by Jologe
        </p>
      </div>
    </>
  );
}
