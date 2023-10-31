import { ServiceWorker } from '@/shared/serviceworker';
import './globals.scss';
import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Уральская проектная смена 2024',
    description: 'Frontend, level 1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>
                <ServiceWorker />
                {children}
            </body>
        </html>
    );
}
