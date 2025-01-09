'use client';

import StreamvisionLogo from '@/app/ui/StreamvisionLogo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { contestsLinks } from './lib/contestsList';
import { useAuthentication } from './lib/hooks/useAuthentication';
import { AnimatedPhotoGallery } from './ui/Carousel';

const albumCovers: string[] = contestsLinks
  .map((link) => link.image || '')
  .filter((image) => !!image.length);

export default function Page() {
  const { getSpotifyToken } = useAuthentication();
  const token = getSpotifyToken();
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push('/dashboard');
    }
  }, [router, token]);

  return (
    <main className="flex min-h-screen flex-col bg-bg p-6 dark:bg-darkBg">
      <div className="align-items-center flex h-20 shrink-0 justify-center rounded-lg bg-primary-500 p-4 md:h-52">
        <StreamvisionLogo size="xl" />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-accentBg px-6 py-10 dark:bg-darkAccentBg md:w-3/5 md:px-20">
          <p className="text-xl text-text dark:text-darkText md:text-3xl md:leading-normal">
            <strong>Welcome to Streamvision.</strong>
            <br />
            This app will create your top of the songs for Benidorm Fest,
            Eurovision, and other music competitions based on what you listen to
            on
            {' '}
            <a
              href="https://open.spotify.com/"
              target="blank"
              className="text-primary-500"
            >
              Spotify
            </a>
            .
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-primary-500 px-6 py-3 text-sm font-medium
            text-white transition-colors hover:bg-primary-400 md:text-base"
          >
            <span>Log in with Spotify</span>
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center rounded-lg bg-accentBg p-6 dark:bg-darkAccentBg md:w-2/5">
          <AnimatedPhotoGallery imagesUrls={albumCovers} />
        </div>
      </div>
    </main>
  );
}
