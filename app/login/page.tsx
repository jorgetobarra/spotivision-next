'use client';

import { useEffect } from 'react';
import { authorizationUrl } from '../lib/spotifyService';

export default function Login() {
  useEffect(() => {
    window.location.href = authorizationUrl;
  }, []);

  // TODO: Set a loader here
  return (
    <div>
      Hi, login.
    </div>
  );
}
