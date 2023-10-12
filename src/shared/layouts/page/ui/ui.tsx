import { CSSProperties } from 'react';
import styles from './ui.module.scss';

export const PageLayout = ({
    children,
    className,
    vertical,
    style,
}: {
    children: React.ReactNode;
    style?: CSSProperties;
    className?: string | undefined;
    vertical?: CSSProperties['flexDirection'] | undefined;
}) => {
    return (
        <>
            <section
                style={{ flexDirection: vertical, ...style }}
                className={`${styles.layout} ${className}`}>
                {children}
            </section>
        </>
    );
};
