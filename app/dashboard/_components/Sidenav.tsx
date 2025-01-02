import Link from 'next/link';
import NavLinks from '@/app/dashboard/_components/NavLinks';
import AcmeLogo from '@/app/ui/acme-logo';
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
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-green-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-full text-white">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block" />
        <div
          className={`flex h-[48px] w-full grow items-center justify-end gap-2 rounded-md
          bg-gray-50 p-3 text-sm font-medium hover:bg-gradient-to-r from-violet-300 to-blue-200 text-violet-400 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3`}
        >
          <div className="hidden md:block">Created with love, by Jologe</div>
          <div className="block md:hidden">by Jologe</div>
        </div>
        <form>
          <button
            type="button"
            className={`flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md
          bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3`}
            onClick={handleSignOut}
          >
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
