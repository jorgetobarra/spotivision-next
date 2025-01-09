import { rubik } from '@/app/ui/fonts';
import { Contestant } from '../../lib/models/contestant';

const usualClassNames = {
  container: `${rubik.className} flex items-center justify-center p-1 max-w-[720px] w-[80%] self-center bg-primary-500 text-white rounded-lg shadow-md mb-2`,
  position: 'text-xl font-bold mx-2 w-[1.3rem]',
  image: 'w-8 h-8 rounded-md mr-2',
  songInfo: 'flex flex-col w-[60%]',
  songTitle: 'text-sm font-semibold truncate',
  singer: 'text-xs truncate',
  points: 'text-xs font-semibold ml-4 mr-1 ml-auto self-end',
};

const printClassNames = {
  container: `${rubik.className} flex items-center p-1 bg-primary-500 text-white rounded-lg mb-2`,
  position: 'text-xl font-semibold mx-2 w-[1.3rem]',
  image: 'w-8 h-8 rounded-md mr-2',
  songInfo: 'flex flex-col max-w-[13rem]',
  songTitle: 'text-sm font-semibold truncate',
  singer: 'text-xs truncate',
  points: 'text-xs font-semibold ml-2 mr-1 ml-auto self-end',
};

export interface CardProps {
  track: Contestant;
  position: number;
  print?: boolean;
}

const points = [12, 10, 8, 7, 6, 5, 4, 3, 2, 1];

export function Card({ track, position, print }: CardProps) {
  const classNames = print ? printClassNames : usualClassNames;
  // const [isLinksDropdownOpen, setIsLinksDropdownOpen] = React.useState(false);

  return (
    <>
      <div className={classNames.container}>
        <h1 className={classNames.position}>{points[position]}</h1>
        <img
          src={track.spotifyData[0].imageUrl}
          alt={track.songTitle}
          className={classNames.image}
        />
        <div className={classNames.songInfo}>
          <p className={classNames.songTitle}>{track.songTitle}</p>
          <p className={classNames.singer}>{track.singer}</p>
        </div>
        <h1 className={classNames.points}>
          {track.points}
          p
        </h1>
      </div>
      {/* {!print && <DropdownLinks track={track} open={isLinksDropdownOpen} />} */}
    </>
  );
}
