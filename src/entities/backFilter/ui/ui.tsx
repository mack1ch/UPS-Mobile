import { useState } from 'react';
import styles from './ui.module.scss';

export const BackFilter = ({ children }: { children?: React.ReactNode }) => {
    const [active, setActive] = useState<boolean>(false);
    return (
        <>
            <button onClick={() => setActive(!active)} className={styles.button} type="button">
                {children}
            </button>
        </>
    );
};
