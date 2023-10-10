import styles from './ui.module.scss';
import Link from 'next/link';
export const AuthHelper = () => {
    return (
        <>
            <h4 className={styles.textStyle}>
                Нет аккаунта?{' '}
                <Link className={styles.accentText} href="/">
                    Зарегистрируйтесь!
                </Link>
            </h4>
        </>
    );
};
