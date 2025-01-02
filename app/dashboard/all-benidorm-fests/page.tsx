import { Suspense } from 'react';
import { RevenueChartSkeleton } from '../../ui/skeletons';
import { TopPage } from '../_components/TopPage';

export default function Page() {
  return (
    <Suspense fallback={<RevenueChartSkeleton />}>
      <TopPage topName="All Benidorm Fests" playlist="337QzVZknW5O61N67qpaOv" />
    </Suspense>
  );
}
