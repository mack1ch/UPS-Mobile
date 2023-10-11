import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import styles from './ui.module.scss';
import Image from 'next/image';
import { FC } from 'react';

export interface FoodCardProps {
    id: number;
    title?: string;
    img: string | StaticImport;
    selected: boolean;
}

interface CardsSelectorProps {
    cards: FoodCardProps[];
    onSelect: (id: number) => void;
}

export const BigFoodCard: FC<CardsSelectorProps> = ({ cards, onSelect }) => {
    const handleCheckboxChange = (id: number) => {
        onSelect(id);
    };
    return (
        <>
            <section className={styles.layout}>
                {cards.map((card: FoodCardProps) => (
                    <article
                        onClick={() => handleCheckboxChange(card.id)}
                        key={card.id}
                        className={`${styles.card} ${
                            card.selected ? styles.selectedCard : undefined
                        }`}>
                        <picture className={styles.cardImgContent}>
                            {card.selected && <div className={styles.overlay}></div>}
                            {card.selected && (
                                <div className={styles.checkbox}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        viewBox="0 0 30 30"
                                        fill="none">
                                        <path
                                            d="M11.25 20.25L6 15L4.25 16.75L11.25 23.75L26.25 8.75L24.5 7L11.25 20.25Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            )}

                            <Image
                                className={styles.img}
                                src={card.img}
                                width={360}
                                height={160}
                                alt="Изображение еды"
                            />
                        </picture>
                        <h4 className={styles.cardText}>{card.title}</h4>
                    </article>
                ))}
            </section>
        </>
    );
};
