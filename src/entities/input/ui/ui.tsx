import { FC } from 'react';
import { InputType } from '../model';
import { CSSProperties, ChangeEventHandler } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import styles from './ui.module.scss';

export interface InputComponentProps {
    /**
     * 	Тип. Возможные значения: 'password' | 'text' | 'number' | 'tel' | 'search' | 'time' | 'date' | 'url' | 'email'
     */
    type?: InputType;

    /**
     * 	Значение
     */
    value?: string | undefined;

    /**
     * 	HTML-атрибут style
     */
    style?: CSSProperties | undefined;

    /**
     * 	HTML-атрибут `class`
     */
    className?: string | undefined;

    /**
     * 	Иконка в инпуте слева от текста
     */
    leftIcon?: string | StaticImport | undefined;

    /**
     * placeholder
     */
    placeholder?: string | undefined;

    /**
     * onValueChange
     */
    onValueChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export const Input: FC<InputComponentProps> = ({
    type = 'text',
    value,
    style,
    className,
    leftIcon,
    placeholder,
    onValueChange,
}) => {
    const InputStyles = {
        paddingLeft: leftIcon ? '54px' : undefined,
        borderRight: 'none',
        ...style,
    };

    return (
        <>
            <label className={styles.inputContainer}>
                {leftIcon && (
                    <div className={styles.inputContainer}>
                        <Image src={leftIcon} width={24} height={24} alt="" />
                    </div>
                )}
                <input
                    onChange={onValueChange}
                    type={type}
                    placeholder={placeholder}
                    className={`${styles.input} ${className}`}
                    style={InputStyles}
                    value={value}
                />
            </label>
        </>
    );
};