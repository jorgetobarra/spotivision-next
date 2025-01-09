/* eslint-disable no-undef */
import '@/app/ui/global.css';
import { Suspense } from 'react';
import { inter, rubik } from './ui/fonts';
import { LoaderPage } from './ui/LoaderPage';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${rubik.variable}`}>
      <body>
        <Suspense fallback={<LoaderPage />}>{children}</Suspense>
      </body>
    </html>
  );
}
