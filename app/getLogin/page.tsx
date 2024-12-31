'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthentication } from '../lib/hooks/useAuthentication';

export default function GetLogin() {
  const { storeSpotifyToken } = useAuthentication();
  const router = useRouter();

  useEffect(() => {
    const myUrl = new URL(window.location.href);
    const result = myUrl.hash.substring(1).split('&').reduce((res, item) => {
      const parts = item.split('=');
      // eslint-disable-next-line prefer-destructuring
      res[parts[0]] = parts[1];
      return res;
    }, {} as any);

    if (!result.access_token) {
      router.push('/login');
      return;
    }

    storeSpotifyToken(result.access_token, result.expires_in);
    router.push('/');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: Set a loader here
  return (
    <div>
      Hi, getLogin.
    </div>
  );
}
