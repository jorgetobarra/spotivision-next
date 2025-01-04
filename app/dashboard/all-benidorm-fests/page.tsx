import { Suspense } from 'react';
import { Loader } from '../../ui/Loader';
import { TopPage } from '../_components/TopPage';

export default function Page() {
  return (
    <Suspense fallback={<Loader />}>
      <TopPage topName="All Benidorm Fests" playlist="337QzVZknW5O61N67qpaOv" />
    </Suspense>
  );
}
