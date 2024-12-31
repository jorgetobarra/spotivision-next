import React from 'react';
import { toJpeg, toPng } from 'html-to-image';
import { Card } from '../ui/top/card';
import { Contestant } from './models/contestant';

const mockTrack = {
  countryCode: 'SE',
  countryName: 'Sweden',
  songTitle: 'Euphoria',
  singer: 'Loreen',
  spotifyData: [
    {
      trackId: '1',
      title: 'Euphoria',
      singer: 'Loreen',
      imageUrl: 'https://th.bing.com/th/id/OIP.j16a16S5-iMuC85MxV75LQHaHa?rs=1&pid=ImgDetMain',
    },
  ],
  points: 100,
  checked: true,
};

function PrintableCard({ track, ref }: { track: Contestant, ref: React.MutableRefObject<HTMLDivElement> }) {
  return (
    <div id="printable-table" className="w-[375px] h-[667px] bg-blue-100 p-12 " ref={ref}>
      <Card track={track} />
      <Card track={track} />
      <Card track={track} />
      <Card track={track} />
      <Card track={track} />
    </div>
  );
}

export const useScreenshot = () => {
  const exportToPng = async (ref: React.MutableRefObject<HTMLElement>) => {
    if (ref.current) {
      try {
        const dataUrl = await toPng(ref.current);
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'exported-image.png';
        link.click();
      } catch (error) {
        console.error('Failed to export as PNG', error);
      }
    }
  };

  const exportToJpg = async (ref: React.MutableRefObject<HTMLElement>) => {
    if (ref.current) {
      try {
        const dataUrl = await toJpeg(ref.current, { quality: 0.95 });
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'exported-image.jpg';
        link.click();
      } catch (error) {
        console.error('Failed to export as JPG', error);
      }
    }
  };

  return { exportToPng, exportToJpg };
};
