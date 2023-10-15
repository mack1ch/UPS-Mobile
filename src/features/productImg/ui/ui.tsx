'use client';

import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import styles from './ui.module.scss';
import Back from '../../../../public/icons/back.svg';
import { ButtonIcon } from '@/entities/buttons/icon';
import { useRouter } from 'next/navigation';

export interface ProductImgProps {
    img: StaticImageData;
    title?: string | undefined;
    tags?: string[] | undefined;
}

export const ProductImg = ({ img, title, tags }: ProductImgProps) => {
    const router = useRouter();
    return (
        <>
            <div
                className={styles.layout}
                style={{
                    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 52.08%, rgba(0, 0, 0, 0.60) 90.62%), url(${img.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                }}>
                <div onClick={() => router.back()} style={{ width: '52px', height: '52px' }}>
                    <ButtonIcon icon={Back} />
                </div>
                <span className={styles.infoLayout}>
                    <div className={styles.tags}>
                        {tags?.map((item, index) => (
                            <span className={styles.tag} key={index}>
                                #{item}
                            </span>
                        ))}
                    </div>
                    <h1 className={styles.title}>{title}</h1>
                </span>
            </div>
        </>
    );
};
