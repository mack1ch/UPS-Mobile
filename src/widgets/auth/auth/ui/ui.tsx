import { Input } from '@/entities/input';
import styles from './ui.module.scss';
import { Button } from '@/entities/buttons/button';
import { AuthHelper } from '@/entities/authHelper';
import { PageLayout } from '@/shared/layouts/page';

export const AuthWidget = () => {
    return (
        <>
            <main className={styles.main}>
                <article className={styles.card}>
                    <PageLayout className={styles.position}>
                        <h1 className={styles.title}>Войти</h1>
                        <form className={styles.form}>
                            <Input type="email" placeholder="Email" />
                            <Input placeholder="Пароль" type="password" />
                            <Button>Войти</Button>
                        </form>
                        <AuthHelper />
                    </PageLayout>
                </article>
            </main>
        </>
    );
};
