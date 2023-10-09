import { Button } from '@/entities/button';
import styles from './ui.module.scss';
import Image from 'next/image';
import CardImgMobile from '../../../../public/globalAssets/cardImgMobile.svg';
export const CardMobile = () => {
    return (
        <>
            <article className={styles.card}>
                <h2 className={styles.card__title}>
                    <span className={styles.purple}>Узнай какое занятие</span> подойдет вашему
                    ребёнку
                </h2>
                <picture>
                    <Image
                        src={CardImgMobile}
                        alt="Изображение для карточки"
                        width={149}
                        height={111}
                    />
                </picture>
            </article>
        </>
    );
};
