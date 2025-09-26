import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Personal Canvas',
  description: 'A modern, minimal, and dynamic personal portfolio.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
        <Toaster />
      </body>
    </html>
  );
}
