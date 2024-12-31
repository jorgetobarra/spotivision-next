import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { rubik } from '@/app/ui/fonts';
// import { fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';

export default async function Page() {
  // const latestInvoices = await fetchLatestInvoices();
  // const {
  //   numberOfInvoices,
  //   numberOfCustomers,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData();

  return (
    <main>
      <h1 className={`${rubik.className} mb-4 text-xl md:text-2xl`}>
        Select a contest to create your top
      </h1>
      <h2 className={`${rubik.className} mb-4 font-light text-sm md:text-md`}>
        Your top will be based on the times you listened to the songs of the selected contest.
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value="100" type="collected" />
        <Card title="Pending" value="100" type="pending" />
        <Card title="Total Invoices" value={50} type="invoices" />
        <Card
          title="Total Customers"
          value={50}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart revenue={[]} />
        </Suspense>
        <LatestInvoices latestInvoices={[]} />
      </div>
    </main>
  );
}
