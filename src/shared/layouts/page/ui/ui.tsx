import styles from './ui.module.scss';

export const PageLayout = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string | undefined;
}) => {
    return (
        <>
            <section className={`${styles.layout} ${className}`}>{children}</section>
        </>
    );
};
