import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import styles from './ui.module.scss';
import Image from 'next/image';

export interface SearchFoodCardProps {
    id: number;
    title?: string;
    img: string | StaticImport;
}

export const SearchFoodCard = ({ cards }: { cards: SearchFoodCardProps[] }) => {
    return (
        <>
            <section className={styles.layout}>
                {cards.map((card: SearchFoodCardProps) => (
                    <article key={card.id} className={styles.card}>
                        <picture className={styles.cardImgContent}>
                            <Image
                                className={styles.img}
                                src={card.img}
                                width={100}
                                height={100}
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
