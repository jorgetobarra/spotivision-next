'use client';

import React, { useEffect } from 'react';
import SideNav from '@/app/ui/dashboard/sidenav';
import { useRouter } from 'next/navigation';
import { useAuthentication } from '../lib/hooks/useAuthentication';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { getSpotifyToken } = useAuthentication();
  const router = useRouter();
  const token = getSpotifyToken();

  useEffect(() => {
    if (!token) {
      router.replace('/');
    }
  }, [router, token]);

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
