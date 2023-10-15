import { ProductImg } from '@/features/productImg/';
import styles from './ui.module.scss';
import { ProductDescriptionData, ProductDescriptionProps } from '../data';
import { ProductTextDescription } from '@/features/productTextDescription';
import { ProductFeedBack } from '@/features/productFeedBack';

export const ProductDescription = () => {
    return (
        <>
            <div className={styles.layout}>
                <ProductImg
                    img={ProductDescriptionData.img}
                    title={ProductDescriptionData.title}
                    tags={ProductDescriptionData.tags}
                />
                <p className={styles.description}>
                    В этой статье будут описаны 10 рецептов зимних напитков, которые можно сделать
                    дома, чтобы согреться в домашнем уюте.
                </p>
                <ProductTextDescription data={ProductDescriptionProps} />
                <ProductFeedBack view={18} />
            </div>
        </>
    );
};
