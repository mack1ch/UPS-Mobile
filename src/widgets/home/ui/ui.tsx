'use client';

import { Title } from '@/entities/title';
import styles from './ui.module.scss';
import { Word, WordSelector } from '@/entities/wordSelector';
import { WordsData } from '../data';
import { useState } from 'react';
import { ButtonLove } from '@/entities/buttons/love';
import { FoodCard } from '@/features/foodCard';
import { SelectionCard } from '@/features/selectionCard';
export const Home = () => {
    const [words, setWords] = useState<Word[]>(WordsData);
    const [swiped, setSwiped] = useState<number | null>(null);
    const [startX, setStartX] = useState<number | null>(null);
    const [endX, setEndX] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartX(e.touches[0].clientX);
        setEndX(null);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (startX !== null) {
            setEndX(e.touches[0].clientX);
        }
    };

    const handleTouchEnd = () => {
        if (startX !== null && endX !== null) {
            const deltaX = endX - startX;
            if (deltaX > 50) {
                setSwiped(deltaX); // Вправо
            } else if (deltaX < -50) {
                setSwiped(deltaX); // Влево
            }
        }
        setStartX(null);
        setEndX(null);
    };
    const handleSelect = (id: number) => {
        const updatedWords = words.map((word) => {
            return {
                ...word,
                selected: word.id === id,
            };
        });
        setWords(updatedWords);
    };
    return (
        <>
            <section className={styles.layout}>
                <div className={styles.bigCardLayout}>
                    <Title>Рецепт на ближайший приём пищи:</Title>
                    <WordSelector words={words} onSelect={handleSelect} />
                    <div
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        className={`${styles.foodCard} ${
                            !swiped
                                ? null
                                : swiped > 50
                                ? styles.swipeRight
                                : swiped < 50
                                ? styles.swipeLeft
                                : null
                        }`}>
                        <FoodCard />
                    </div>
                </div>
                <div className={styles.selectionLayout}>
                    <Title>Подборки</Title>
                    <SelectionCard />
                </div>
            </section>
        </>
    );
};
