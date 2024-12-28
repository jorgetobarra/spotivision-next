/* eslint-disable no-undef */
import '@/app/ui/global.css';
import { Suspense } from 'react';
import { inter, rubik } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${rubik.variable}`}>
      <body>
        <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
