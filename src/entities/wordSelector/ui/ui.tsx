import styles from './ui.module.scss';
import { FC } from 'react';

export interface Word {
    id: number;
    selected: boolean;
    text: string;
}

interface WordsSelectorProps {
    words: Word[];
    onSelect: (id: number) => void;
}

export const WordSelector: FC<WordsSelectorProps> = ({ words, onSelect }) => {
    const handleWordClick = (id: number) => {
        onSelect(id);
    };
    return (
        <div className={styles.layout}>
            {words.map((word: Word) => (
                <h3
                    key={word.id}
                    onClick={() => handleWordClick(word.id)}
                    className={styles.word}
                    style={{
                        color: word.selected ? '#FFA011' : '#C8C8C8',
                    }}>
                    {word.text}
                </h3>
            ))}
        </div>
    );
};
