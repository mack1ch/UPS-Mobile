import Image from 'next/image';
import styles from './ui.module.scss';
import { FC } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ReactNode, MouseEventHandler } from 'react';
export interface ButtonPropsIcon {
    /**
     * Иконка (children)
     */
    icon: string | StaticImport;

    /**
     * Текст справа от иконки
     */
    children?: ReactNode;

    /**
     * HTML атрибут onclick
     */
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ButtonIcon: FC<ButtonPropsIcon> = ({ icon, children, onClick }) => {
    return (
        <>
            {children ? (
                <button onClick={onClick} className={styles.buttonWithChildren} type="button">
                    <span className={styles.img}>
                        <Image width={32} height={32} alt="" src={icon} />
                    </span>
                    <span className={styles.children}>{children}</span>
                </button>
            ) : (
                <button onClick={onClick} className={styles.button} type="button">
                    <Image width={32} height={32} alt="" src={icon} />
                </button>
            )}
        </>
    );
};
