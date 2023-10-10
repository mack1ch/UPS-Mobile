import { AuthHelper } from '@/entities/authHelper';
import styles from './ui.module.scss';
import { Button } from '@/entities/buttons/button';
import { ButtonGoogle } from '@/entities/buttons/google';
import { PageLayout } from '@/shared/layouts/page';
import Link from 'next/link';
export const MainWidget = () => {
    return (
        <>
            <PageLayout className={styles.position}>
                <header className={styles.header}>
                    <h1 className={styles.title}>
                        Добро пожаловать в <span className={styles.keepfood}>keepfoód</span>
                    </h1>
                </header>
                <main className={styles.main}>
                    <p className={styles.paragraph}>
                        Получайте каждый день уникальный рецепт, готовьте, наслаждайтесь.
                    </p>
                    <form className={styles.buttonForm}>
                        <Link href="/auth">
                            <Button>Войти через Email</Button>
                        </Link>
                        <Link href="/auth">
                            <ButtonGoogle>Продолжить через</ButtonGoogle>
                        </Link>
                    </form>
                </main>
                <footer className={styles.footer}>
                    <AuthHelper />
                </footer>
            </PageLayout>
        </>
    );
};
