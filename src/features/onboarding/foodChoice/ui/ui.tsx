import { RectangleMultiplySelector, Rectangle } from '@/entities/rectangleMultipleSelector';
import styles from './ui.module.scss';
import { useState } from 'react';
import { RectangleData } from '../data';
import { Title } from '@/entities/title';

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
            <Title>Укажите ваши приёмы пищи</Title>
            <RectangleMultiplySelector rectangles={rectangles} onSelect={handleSelect} />
        </>
    );
};
