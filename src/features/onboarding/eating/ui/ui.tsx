import { FoodCard, FoodCardProps } from '@/entities/foodCard';
import styles from './ui.module.scss';
import { FoodCardData } from '../data';
import { useState } from 'react';
import { Input } from '@/entities/input';
import { BigFoodCard } from '@/entities/bigFoodCard';
export const Eating = ({
    title,
    isSearch = false,
    isBig = false,
}: {
    title: string;
    isSearch?: boolean;
    isBig?: boolean;
}) => {
    const [cards, setCards] = useState<FoodCardProps[]>(FoodCardData);

    const handleSelect = (id: number) => {
        const updatedRectangles = cards.map((cards) => {
            if (cards.id === id) {
                return {
                    ...cards,
                    selected: !cards.selected,
                };
            }
            return cards;
        });
        setCards(updatedRectangles);
    };
    return (
        <>
            <h1 className={styles.title}>{title}</h1>
            {isSearch && (
                <div style={{ marginTop: '24px', marginBottom: '24px' }}>
                    <Input placeholder="Введите название продукта" />
                </div>
            )}
            {isBig ? (
                <BigFoodCard cards={cards} onSelect={handleSelect} />
            ) : (
                <FoodCard cards={cards} onSelect={handleSelect} />
            )}
        </>
    );
};
