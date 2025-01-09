import { Card } from '@/app/dashboard/_components/ContestCard';
import { rubik } from '@/app/ui/fonts';
import { contestsLinks } from '../../lib/contestsList';

export default async function Page() {
  return (
    <main>
      <h1
        className={`${rubik.className} mb-4 text-xl text-text dark:text-darkText md:text-2xl`}
      >
        Select a contest to create your top
      </h1>
      <h2
        className={`${rubik.className} md:text-md mb-4 text-sm font-light text-text dark:text-darkText`}
      >
        Your top will be based on the times you listened to the songs of the
        selected contest.
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contestsLinks.map((link) => (
          <Card
            key={link.name}
            href={link.href}
            title={link.name}
            playlistId={link.playlistId}
          />
        ))}
      </div>
    </main>
  );
}
