'use client';

import styles from './ui.module.scss';
import Message from '../../../../public/icons/message.svg';
import Heart from '../../../../public/icons/heart.svg';
import HeartActive from '../../../../public/icons/heartActive.svg';
import Image from 'next/image';
import { useState } from 'react';
export interface ProductFeedBackProps {
    view?: number | undefined;
}

export const ProductFeedBack = ({ view }: ProductFeedBackProps) => {
    const [isLikeActive, setIsLikeActive] = useState(false);
    console.log(isLikeActive);
    return (
        <>
            <div className={styles.layout}>
                <p className={styles.views}>{view} просмотров</p>
                <span className={styles.right}>
                    <Image
                        className={styles.icon}
                        src={Message}
                        width={28}
                        height={28}
                        alt="Оставить комментарий"
                    />
                    <Image
                        className={styles.icon}
                        src={isLikeActive ? HeartActive : Heart}
                        onClick={() => setIsLikeActive(!isLikeActive)}
                        width={28}
                        height={28}
                        alt="Лайк"
                    />
                </span>
            </div>
        </>
    );
};
