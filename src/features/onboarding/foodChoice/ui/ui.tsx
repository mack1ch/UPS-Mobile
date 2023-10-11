import { RectangleMultiplySelector, Rectangle } from '@/entities/rectangleMultipleSelector';
import styles from './ui.module.scss';
import { useState } from 'react';
import { RectangleData } from '../data';

export const FoodChoice = () => {
    const [rectangles, setRectangles] = useState<Rectangle[]>(RectangleData);

    const handleSelect = (id: number) => {
        const updatedRectangles = rectangles.map((rectangle) => {
            if (rectangle.id === id) {
                return {
                    ...rectangle,
                    selected: !rectangle.selected,
                };
            }
            return rectangle;
        });
        setRectangles(updatedRectangles);
    };
    return (
        <>
            <h1 className={styles.title}>Укажите ваши приёмы пищи</h1>
            <RectangleMultiplySelector rectangles={rectangles} onSelect={handleSelect} />
        </>
    );
};
