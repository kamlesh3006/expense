import './globals.css';
import { Inter } from 'next/font/google';
import Sidebar from './ui/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Expense Tracker',
  description: 'Your personal finance manager',
};

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}