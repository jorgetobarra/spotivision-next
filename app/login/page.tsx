'use client';

import { useEffect } from 'react';
import { authorizationUrl } from '../lib/spotifyService';
import { Loader } from '../ui/Loader';

export default function Login() {
  useEffect(() => {
    window.location.href = authorizationUrl;
  }, []);

  return (
    <div className="flex h-[100vh] w-[100vw] justify-center">
      <Loader />
    </div>
  );
}
