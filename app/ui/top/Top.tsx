import React from 'react';
import { Contestant } from '../../lib/models/contestant';
import { Card } from '../top/card';
import { PrintableTop } from './PrintableTop';

export function Top({ topName, results, downloadRef }: {topName: string, results: Contestant[], downloadRef: React.MutableRefObject<HTMLDivElement | null>}) {
  return (
    <>
      <div className='flex flex-col items-stretch max-w-[1280px] w-[100%]'>
        {results.map((track, index) => (
          <Card key={track.spotifyData[0].trackId} track={track} position={index} />
        ))}
      </div>
      <PrintableTop topName={topName} results={results} downloadRef={downloadRef} />
    </>
  );
}
