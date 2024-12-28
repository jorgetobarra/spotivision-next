import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { rubik } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${rubik.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-8 w-8 rotate-[15deg]" />
      <p className="text-[28px]">Spotivision</p>
    </div>
  );
}
