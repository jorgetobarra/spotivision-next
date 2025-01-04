'use client';

import { useEffect } from 'react';
import { authorizationUrl } from '../lib/spotifyService';
import { Loader } from '../ui/Loader';

export default function Login() {
  useEffect(() => {
    window.location.href = authorizationUrl;
  }, []);

  return (
    <div className="flex justify-center w-[100vw] h-[100vh]">
      <Loader />
    </div>
  );
}
