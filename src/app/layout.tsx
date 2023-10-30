import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';
import { ServiceWorker } from '@/shared/ServiceWorker';
export const metadata: Metadata = {
    title: 'Уральская проектная смена 2024',
    description: 'Frontend, level 2',
    manifest: '/manifest.json',
};

const onest = localFont({
    src: [
        {
            path: './Onest-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Onest-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './Onest-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body className={onest.className}>
              <ServiceWorker/>
              {children}
            </body>
        </html>
    );
}
