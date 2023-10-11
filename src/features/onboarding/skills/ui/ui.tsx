import { Rectangle, RectangleSelector } from '@/entities/rectangleSelector';
import styles from './ui.module.scss';
import { useState } from 'react';
import { RectangleData } from '../data';

export const Skills = () => {
    const [rectangles, setRectangles] = useState<Rectangle[]>(RectangleData);

    const handleSelect = (id: number) => {
        const updatedRectangles = rectangles.map((rectangle) => {
            return {
                ...rectangle,
                selected: rectangle.id === id,
            };
        });
        setRectangles(updatedRectangles);
    };
    return (
        <>
            <h1 className={styles.title}>Как вы оцениваете свои кулинарные способности</h1>
            <RectangleSelector rectangles={rectangles} onSelect={handleSelect} />
        </>
    );
};
