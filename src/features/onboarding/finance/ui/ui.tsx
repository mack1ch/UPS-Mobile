import styles from './ui.module.scss';
import { PriceRangeSelector } from '@/entities/priceRangeSelector';
export const Finance = () => {
    return (
        <>
            <div className={styles.wrap}>
                <h1 className={styles.title}>
                    Укажите ваши финансовые возможности на приготовление одного блюда
                </h1>
                <PriceRangeSelector />
            </div>
        </>
    );
};
