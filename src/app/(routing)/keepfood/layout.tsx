import { PageLayout } from '@/shared/layouts/page';
import { NavBar } from '@/features/navBar';
import { NavBarProvider } from '@/entities/navBarElement/context';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBarProvider>
                <PageLayout
                    style={{
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                    vertical="column">
                    <main>{children}</main>

                    <NavBar />
                </PageLayout>
            </NavBarProvider>
        </>
    );
}
