import styles from './ui.module.scss';

export const ProgressBarElement = ({ isActive }: { isActive?: boolean }) => {
    return (
        <>
            <span className={isActive ? styles.active : styles.disabled}></span>
        </>
    );
};
