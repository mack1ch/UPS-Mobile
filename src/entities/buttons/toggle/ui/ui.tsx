import { FC } from 'react';
import styles from './ui.module.scss';

export interface ToggleProps {}

export const Toggle: FC<ToggleProps> = ({}) => {
    return (
        <>
            <label className={styles.toggleLabel}>
                <input type="checkbox" className={styles.toggleInput} />
                <span className={styles.toggleSlider}></span>
            </label>
        </>
    );
};
