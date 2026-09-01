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

const siteOrigin = process.env.SITE_ORIGIN ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: 'BMEP — Bihari More Education Project',
  description:
    'A student-led education initiative by NIT Durgapur, teaching underprivileged children every Saturday and Sunday.',
  openGraph: {
    title: 'Every child deserves more. — BMEP',
    description: 'Bihari More Education Project · NIT Durgapur',
    images: [{ url: new URL('/og.png', siteOrigin), width: 1200, height: 630, alt: 'BMEP students and volunteers learning together' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Every child deserves more. — BMEP',
    description: 'Bihari More Education Project · NIT Durgapur',
    images: [new URL('/og.png', siteOrigin)],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
