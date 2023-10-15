'use client';

import { Title } from '@/entities/title';
import styles from './ui.module.scss';
import { Input } from '@/entities/input';
import Search from '../../../../public/headerIcons/search.svg';
import { useState } from 'react';
export const Fridge = () => {
    const items = ['Арбуз', 'Яблоки', 'Вишня', 'Черешня'];
    const [inputValue, setInputValue] = useState<string>();

    const handleInputChange = (newValue: string) => {
        setInputValue(newValue);
    };

    return (
        <>
            <div className={styles.layout}>
                <span className={styles.headerLayout}>
                    <Title>Мой холодильник</Title>
                    <Input
                        onValueChange={handleInputChange}
                        value={inputValue}
                        leftIcon={Search}
                        items={items}
                        placeholder="Введите название продукта"
                    />
                </span>
                <p className={styles.text}>
                    Это ваш холодильник, выберите продукты которые у вас есть чтобы рекомендации
                    блюд были максимально удобными и точными для вас
                </p>
            </div>
        </>
    );
};
