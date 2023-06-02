import Sidebar from '@/components/Sidebar';
import './globals.css';
import { Figtree } from 'next/font/google';
import { twJoin } from 'tailwind-merge';

const globalFont = Figtree({ subsets: ['latin'] });

export const metadata = {
  title: 'Freewave',
  description: 'Open source music streaming.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twJoin(globalFont.className, 'flex h-full')}>
        <Sidebar />
        <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
      </body>
    </html>
  );
}
