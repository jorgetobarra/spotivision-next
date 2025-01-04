import React from 'react';
import { toJpeg, toPng } from 'html-to-image';

export const useScreenshot = () => {
  const exportToPng = async (ref: React.MutableRefObject<HTMLElement>, name = 'exported-image') => {
    if (ref.current) {
      try {
        const dataUrl = await toPng(ref.current);
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = name + '.png';
        link.click();
      } catch (error) {
        console.error('Failed to export as PNG', error);
      }
    }
  };

  const exportToJpg = async (ref: React.MutableRefObject<HTMLElement>, name = 'exported-image') => {
    if (ref.current) {
      try {
        const dataUrl = await toJpeg(ref.current, { quality: 0.95 });
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = name + '.jpg';
        link.click();
      } catch (error) {
        console.error('Failed to export as JPG', error);
      }
    }
  };

  return { exportToPng, exportToJpg };
};
