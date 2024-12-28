'use client';

import { useEffect } from 'react';
import { authorizationUrl } from '../lib/spotifyService';

export default function Login() {
  useEffect(() => {
    window.location.href = authorizationUrl;
  }, []);

  return (
    <div>
      Hi, login.
    </div>
  );
}
