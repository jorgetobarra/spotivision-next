'use client';

import React from 'react';

interface CarouselProps {
  imagesUrls: string[];
}

export function AnimatedPhotoGallery({ imagesUrls }: CarouselProps) {
  const allUrls = imagesUrls
    .slice(0, 9)
    .concat(new Array(9 - imagesUrls.length).fill(''))
    .map((url, index) => ({
      id: url.substring(url.lastIndexOf('/') + 1) || index,
      url,
    }));

  const [urls, setUrls] = React.useState(allUrls);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setUrls((prevUrls) => {
        const newUrls = [...prevUrls];
        const index1 = Math.floor(Math.random() * newUrls.length);
        const index2 = Math.floor(Math.random() * newUrls.length);
        const index3 = Math.floor(Math.random() * newUrls.length);
        const index4 = Math.floor(Math.random() * newUrls.length);
        [newUrls[index1], newUrls[index2]] = [newUrls[index2], newUrls[index1]];
        [newUrls[index3], newUrls[index4]] = [newUrls[index4], newUrls[index3]];
        return newUrls;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4">
      {urls.map((url, index) => (url.url ? (
        <img
          key={url.id}
          src={url.url}
          alt={`carousel-${index}`}
          className="rounded-md"
        />
      ) : (
        <div key={url.id} className="rounded-md bg-bg dark:bg-darkBg" />
      )))}
    </div>
  );
}
