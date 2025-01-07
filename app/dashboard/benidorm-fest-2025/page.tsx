import { Suspense } from 'react';
import { LoaderPage } from '../../ui/LoaderPage';
import { TopPage } from '../_components/TopPage';

export default function Page() {
  return (
    <Suspense fallback={<LoaderPage />}>
      <TopPage topName="Benidorm Fest 2025" playlist="1G9e7rMXjXUnU17uK9WefP" />
    </Suspense>
  );
}
