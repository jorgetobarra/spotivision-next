import { Suspense } from 'react';
import { LoaderPage } from '../../ui/LoaderPage';
import { TopPage } from '../_components/TopPage';

export default function Page() {
  return (
    <Suspense fallback={<LoaderPage />}>
      <TopPage topName="Your top songs" />
    </Suspense>
  );
}
