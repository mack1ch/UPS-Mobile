import Link from 'next/link';
import { FC } from 'react';
import styles from './ui.module.scss';
import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import { SelectionCardData } from '../data';

export interface SelectionCardProps {
    id?: number | undefined;
    img?: StaticImageData;
    title?: string | undefined;
}

export const SelectionCard: FC<SelectionCardProps> = () => {
    return (
        <>
            <section className={styles.layout}>
                {SelectionCardData.map((element: SelectionCardProps) => (
                    <Link key={element.id} href={`search/${element.id}`}>
                        <article
                            style={{
                                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 45.83%, #000 100%), url(${element.img?.src})`,
                            }}
                            className={styles.card}>
                            <div className={styles.topInfo}>
                                <button className={styles.button}>подборка</button>
                            </div>
                            <div className={styles.bottomInfo}>{element.title}</div>
                        </article>
                    </Link>
                ))}
            </section>
        </>
    );
};
