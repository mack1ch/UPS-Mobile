'use client';

import { FC, useState } from 'react';
import { InputType } from '../model';
import { CSSProperties, ChangeEvent } from 'react';
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
    onValueChange?: (value: string) => void | undefined;

    /**
     * Элементы для выпадающего списка
     */
    items?: string[] | undefined;
}
export const Input: FC<InputComponentProps> = ({
    type = 'text',
    value,
    style,
    className,
    leftIcon,
    placeholder,
    onValueChange,
    items,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredItems, setFilteredItems] = useState<string[]>(items || []);
    const [inputValue, setInputValue] = useState(value || '');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newInputValue = e.target.value;
        setInputValue(newInputValue);

        if (onValueChange) {
            onValueChange(newInputValue);
        }

        if (items) {
            const filtered = items.filter((item) =>
                item.toLowerCase().includes(newInputValue.toLowerCase()),
            );
            setFilteredItems(filtered);
        } else {
            setFilteredItems([]);
        }
    };

    const handleSelectItem = (item: string) => {
        setInputValue(item);
        setIsOpen(false);

        if (onValueChange) {
            onValueChange(item);
        }
    };

    const InputStyles = {
        paddingLeft: leftIcon ? '54px' : undefined,
        borderRight: 'none',
        ...style,
    };

    return (
        <>
            {!items ? (
                <label className={styles.inputContainer}>
                    {leftIcon && (
                        <div className={styles.inputContainer}>
                            <Image src={leftIcon} width={24} height={24} alt="" />
                        </div>
                    )}
                    <input
                        onChange={handleInputChange}
                        type={type}
                        placeholder={placeholder}
                        className={`${styles.input} ${className}`}
                        style={InputStyles}
                        value={inputValue}
                    />
                </label>
            ) : (
                <div className={styles.layout}>
                    <label className={styles.inputContainer}>
                        {leftIcon && (
                            <div className={styles.inputContainer}>
                                <Image src={leftIcon} width={24} height={24} alt="" />
                            </div>
                        )}
                        <input
                            onFocus={toggleDropdown}
                            type={type}
                            placeholder={placeholder}
                            className={`${styles.input} ${className}`}
                            style={InputStyles}
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </label>
                    {isOpen && (
                        <div className={styles.dropdown}>
                            {filteredItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={styles.item}
                                    onClick={() => handleSelectItem(item)}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};
