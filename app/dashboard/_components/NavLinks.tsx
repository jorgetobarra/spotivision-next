'use client';

import { HomeIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { contestsLinks } from '../../lib/contestsList';

function NavLink({
  name,
  href,
  icon,
  image,
  className,
}: {
  name: string;
  href: string;
  icon: any;
  image: string | null;
  className: string;
}) {
  const pathname = usePathname();
  const LinkIcon = icon;
  return (
    <Link
      href={href}
      className={clsx(
        `flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm
      font-medium hover:bg-green-100 hover:text-green-700 md:flex-none md:justify-start md:p-2 md:px-3 ${className}`,
        {
          'bg-green-100 text-green-700': pathname === href,
        },
      )}
    >
      {image ? (
        <img src={image} alt={`${name}`} className="h-6 w-6" />
      ) : (
        <LinkIcon className="w-6" />
      )}
      <p className="hidden md:block">{name}</p>
    </Link>
  );
}

export default function NavLinks() {
  const links = [
    {
      name: 'Home',
      href: '/dashboard',
      icon: HomeIcon,
      image: null,
    },
    ...contestsLinks,
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.name}
          name={link.name}
          href={link.href}
          icon={link.icon}
          image={link.image}
          className="hidden md:flex"
        />
      ))}
      <NavLink
        name={links[0].name}
        href={links[0].href}
        icon={links[0].icon}
        image={links[0].image}
        className="flex md:hidden"
      />
    </>
  );
}
