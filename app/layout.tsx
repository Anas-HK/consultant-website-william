import type { Metadata } from 'next';
import { ThemeProvider } from '@/contexts/ThemeContext';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'ConsultPro - Strategic Business Consulting',
  description: 'Transform your business with our strategic consulting services. We partner with ambitious leaders to unlock potential, drive innovation, and create lasting impact.',
  keywords: 'consulting, business strategy, digital transformation, AI consulting, data analytics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-white dark:bg-dark-bg text-gray-900 dark:text-white">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
