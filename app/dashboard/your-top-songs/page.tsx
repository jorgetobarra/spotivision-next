import { Suspense } from 'react';
import { Loader } from '../../ui/Loader';
import { TopPage } from '../_components/TopPage';

export default function Page() {
  return (
    <Suspense fallback={<Loader />}>
      <TopPage topName="Your top songs" />
    </Suspense>
  );
}
