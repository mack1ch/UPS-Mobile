import { CSSProperties } from 'react';
import styles from './ui.module.scss';

export const PageLayout = ({
    children,
    className,
    vertical,
}: {
    children: React.ReactNode;
    className?: string | undefined;
    vertical?: CSSProperties['flexDirection'] | undefined;
}) => {
    return (
        <>
            <section
                style={{ flexDirection: vertical }}
                className={`${styles.layout} ${className}`}>
                {children}
            </section>
        </>
    );
};
