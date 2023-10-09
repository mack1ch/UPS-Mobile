import { Button } from '@/entities/button';
import styles from './ui.module.scss';
import Image from 'next/image';
import CardImg from '../../../../public/globalAssets/cardImg.svg';
export const Card = () => {
    return (
        <>
            <article className={styles.card}>
                <span className={styles.textInfo}>
                    <h2 className={styles.card__title}>
                        Узнай какое занятие подойдет вашему ребёнку
                    </h2>
                    <Button>Узнать</Button>
                </span>
                <picture>
                    <Image src={CardImg} alt="Изображение для карточки" width={396} height={157} />
                </picture>
            </article>
        </>
    );
};
