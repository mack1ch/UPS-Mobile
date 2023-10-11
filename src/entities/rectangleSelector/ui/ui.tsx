import React, { FC } from 'react';
import styles from './ui.module.scss';

export interface Rectangle {
    id: number;
    selected: boolean;
    text: string;
}

interface RectangleSelectorProps {
    rectangles: Rectangle[];
    onSelect: (id: number) => void;
}

export const RectangleSelector: FC<RectangleSelectorProps> = ({ rectangles, onSelect }) => {
    const handleRectangleClick = (id: number) => {
        onSelect(id);
    };
    return (
        <div className={styles.layout}>
            {rectangles.map((rectangle) => (
                <div
                    key={rectangle.id}
                    onClick={() => handleRectangleClick(rectangle.id)}
                    className={styles.rectangle}
                    style={{
                        backgroundColor: rectangle.selected ? '#FFA011' : undefined,
                        color: rectangle.selected ? '#fff' : '#272727',
                    }}>
                    {rectangle.text}
                </div>
            ))}
        </div>
    );
};
