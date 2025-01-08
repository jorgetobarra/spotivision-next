import { rubik } from '@/app/ui/fonts';

export default function SpotivisionLogo({
  size = 'md',
  color = 'white',
  className,
}: {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}) {
  const textSizes = {
    sm: 'text-[12px] lg:text-[16px]',
    md: 'text-[24px] lg:text-[28px]',
    lg: 'text-[28px] lg:text-[36px]',
    xl: 'text-[32px] lg:text-[44px]',
  };

  const logoSizes = {
    sm: 'w-4 lg:w-6 h-4 lg:h-6',
    md: 'w-6 lg:w-8 h-6 lg:h-8',
    lg: 'w-10 lg:w-12 h-10 lg:h-12',
    xl: 'w-10 lg:w-16 h-10 lg:h-16',
  };

  return (
    <div
      className={`${rubik.className} flex flex-row items-center leading-none text-${color} ${className}`}
    >
      <img
        src="/SpotivisionLogo.svg"
        className={`${logoSizes[size]} ${
          color !== 'white' && `bg-${color}`
        } rounded-md`}
        alt="Spotivision logo"
      />
      <p className={`${textSizes[size]} pl-2`}>Spotivision</p>
    </div>
  );
}
