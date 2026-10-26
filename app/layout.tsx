import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://qiqiori.github.io/mytra-site/'),
  title: 'mytra — Multiagent evals',
  description:
    'Evaluation infrastructure for multiagent systems. Run scenarios, trace interactions, and compare behavior across models.',
  openGraph: {
    title: 'mytra — Multiagent evals',
    description:
      'Evaluation infrastructure for multiagent systems. Run scenarios, trace interactions, and compare behavior across models.',
    type: 'website',
    images: ['og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mytra — Multiagent evals',
    description:
      'Evaluation infrastructure for multiagent systems. Run scenarios, trace interactions, and compare behavior across models.',
    images: ['og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
