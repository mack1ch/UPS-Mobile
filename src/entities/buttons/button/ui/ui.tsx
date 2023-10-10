import { FC, ReactNode, MouseEventHandler, CSSProperties } from 'react';
import { ButtonType } from '../model';
import styles from './ui.module.scss';

export interface ButtonComponentProps {
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
     * HTML-атрибут `type`.
     */
    type?: ButtonType;

    /**
     * HTML атрибут `class`
     */
    className?: string | undefined;
}

export const Button: FC<ButtonComponentProps> = ({
    onClick,
    style,
    type = 'button',
    children,
    className,
}) => {
    return (
        <>
            <button
                style={style}
                onClick={onClick}
                className={`${styles.button} ${className}`}
                type={type}>
                {children}
            </button>
        </>
    );
};
