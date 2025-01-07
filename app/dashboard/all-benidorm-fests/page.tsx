import { Suspense } from 'react';
import { LoaderPage } from '../../ui/LoaderPage';
import { TopPage } from '../_components/TopPage';

export default function Page() {
  return (
    <Suspense fallback={<LoaderPage />}>
      <TopPage topName="All Benidorm Fests" playlist="337QzVZknW5O61N67qpaOv" />
    </Suspense>
  );
}
