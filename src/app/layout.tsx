import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
    title: 'My Dashboard',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="flex h-screen ">
                <Header />
                <main className="w-full flex-1 overflow-auto p-4">
                    {children}
                </main>
            </body>
        </html>
    );
}
