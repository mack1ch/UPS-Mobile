import { ReactNode } from 'react';
import styles from './ui.module.scss';

export const Title = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <h1 className={styles.title}>{children}</h1>
        </>
    );
};
