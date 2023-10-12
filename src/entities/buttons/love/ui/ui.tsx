import { useState } from 'react';
import styles from './ui.module.scss';

export const ButtonLove = () => {
    const [active, setActive] = useState<boolean>(false);
    return (
        <>
            <button onClick={() => setActive(!active)} className={styles.button} type="button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill={active ? '#FEA300' : 'none'}>
                    <path
                        d="M15.3352 10.3952L15.999 10.9845L16.6628 10.3952C17.5632 9.59605 18.8084 9.03931 20.0541 9.00209C21.2706 8.96574 22.4426 9.39635 23.3729 10.5792C24.2682 11.7302 24.2763 13.9437 22.9205 16.5384C21.6352 18.9682 19.2729 21.4022 15.999 22.9063C12.7237 21.4016 10.3643 18.9675 9.10162 16.5421L9.10165 16.5421L9.09786 16.535C7.72117 13.9421 7.73067 11.7289 8.62519 10.579C9.55547 9.39632 10.7275 8.96574 11.9439 9.00209C13.1896 9.03931 14.4348 9.59605 15.3352 10.3952Z"
                        stroke="white"
                        stroke-width="2"
                    />
                </svg>
            </button>
        </>
    );
};
