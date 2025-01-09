import Link from 'next/link';
import NavLinks from '@/app/dashboard/_components/NavLinks';
import StreamvisionLogo from '@/app/ui/StreamvisionLogo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useAuthentication } from '../../lib/hooks/useAuthentication';

export default function SideNav() {
  const { removeSpotifyToken } = useAuthentication();
  const router = useRouter();

  const handleSignOut = () => {
    removeSpotifyToken();
    router.push('/');
  };

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-primary-600 p-4 md:h-40"
        href="/dashboard"
      >
        <div className="flex w-full justify-center text-white">
          <StreamvisionLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-accentBg dark:bg-darkAccentBg md:block" />
        <div
          className={`flex h-[48px] w-full grow items-center justify-end gap-2 rounded-md
          bg-accentBg from-violet-300 to-blue-200 p-3 text-xs font-light text-violet-300 hover:bg-gradient-to-r hover:text-white dark:bg-darkAccentBg md:flex-none md:justify-start md:p-2 md:px-3`}
        >
          <div className="">Created with love, by Jologe</div>
          {/* <div className="block md:hidden">by Jologe</div> */}
        </div>
        <form>
          <button
            type="button"
            className={`flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md
          bg-accentBg p-3 text-sm font-medium hover:bg-sky-100 hover:text-primary-600 dark:bg-darkAccentBg md:flex-none md:justify-start md:p-2 md:px-3`}
            onClick={handleSignOut}
          >
            <PowerIcon className="w-6 text-text dark:text-darkText" />
            <div className="hidden text-text dark:text-darkText md:block">
              Sign Out
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
