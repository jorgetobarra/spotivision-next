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
        <Suspense
          fallback={(
            <div className="flex h-screen items-center justify-center">
              Loading...
            </div>
          )}
        >
          {children}
        </Suspense>
      </body>
    </html>
  );
}
