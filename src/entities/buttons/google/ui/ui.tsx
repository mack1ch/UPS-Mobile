import styles from './ui.module.scss';
import { FC, ReactNode, MouseEventHandler, CSSProperties } from 'react';
import Image from 'next/image';
import Google from '../../../../../public/icons/google.svg';
export interface ButtonGoogleComponentProps {
    children?: ReactNode;

    /**
     * HTML-событие onclick
     */
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;

    /**
     * HTML-атрибут style
     */
    style?: CSSProperties | undefined;

    /**
     * HTML атрибут `class`
     */
    className?: string | undefined;
}

export const ButtonGoogle: FC<ButtonGoogleComponentProps> = ({
    children,
    onClick,
    style,
    className,
}) => {
    return (
        <>
            <button
                style={style}
                onClick={onClick}
                className={`${styles.button} ${className}`}
                type="button">
                {children}
                <Image src={Google} width={24} height={24} alt="" />
            </button>
        </>
    );
};
