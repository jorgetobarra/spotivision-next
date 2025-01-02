import { Suspense } from 'react';
import { RevenueChartSkeleton } from '../../ui/skeletons';
import { TopPage } from '../_components/TopPage';

export default function Page() {
  return (
    <Suspense fallback={<RevenueChartSkeleton />}>
      <TopPage topName="Benidorm Fest 2025" playlist="1G9e7rMXjXUnU17uK9WefP" />
    </Suspense>
  );
}
