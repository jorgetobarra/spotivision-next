'use client';

import { useEffect } from 'react';
import { authorizationUrl } from '../lib/spotifyService';
import { LoaderPage } from '../ui/LoaderPage';

export default function Login() {
  useEffect(() => {
    window.location.href = authorizationUrl;
  }, []);

  return <LoaderPage />;
}
