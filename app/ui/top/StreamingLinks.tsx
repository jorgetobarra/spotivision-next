import Link from 'next/link';
import { Contestant } from '../../lib/models/contestant';

export interface StreamingLinksProps {
  track: Contestant;
  onClick?: () => void;
}

export function StreamingLinks({ track, onClick }: StreamingLinksProps) {
  return (
    <Link
      href={track.spotifyData[0].trackLink}
      target="_blank"
      onClick={onClick}
    >
      <div className="mb-2 flex h-11 w-11 items-center justify-center self-center rounded-lg bg-primary-500 p-1 text-white shadow-md">
        <img
          src="/spotify/Primary_Logo_White_RGB.svg"
          alt="spotify link"
          className="w-6"
        />
      </div>
    </Link>
  );
}
