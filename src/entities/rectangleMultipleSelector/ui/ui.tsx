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

export const RectangleMultiplySelector: FC<RectangleSelectorProps> = ({ rectangles, onSelect }) => {
    const handleCheckboxChange = (id: number) => {
        onSelect(id);
    };

    return (
        <div className={styles.layout}>
            {rectangles.map((rectangle) => (
                <div
                    onClick={() => handleCheckboxChange(rectangle.id)}
                    className={styles.rectangle}
                    key={rectangle.id}
                    style={{
                        backgroundColor: rectangle.selected ? '#FFA011' : undefined,
                    }}>
                    {rectangle.selected ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none">
                            <rect
                                width="16"
                                height="16"
                                transform="translate(1 1.5)"
                                fill="white"
                            />
                            <rect
                                x="1"
                                y="1.5"
                                width="16"
                                height="16"
                                rx="2"
                                stroke="white"
                                stroke-width="2"
                            />
                            <path
                                d="M5 9.50012L8 12.5001L13.0002 7.5"
                                stroke="#FFA011"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none">
                            <rect
                                x="1"
                                y="1.5"
                                width="16"
                                height="16"
                                rx="2"
                                stroke="#E1E1E1"
                                stroke-width="2"
                            />
                        </svg>
                    )}
                    <div style={{ color: rectangle.selected ? '#fff' : '#272727' }}>
                        {rectangle.text}
                    </div>
                </div>
            ))}
        </div>
    );
};
