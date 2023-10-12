import { Title } from '@/entities/title';
import styles from './ui.module.scss';
import { PriceRangeSelector } from '@/entities/priceRangeSelector';
export const Finance = () => {
    return (
        <>
            <div className={styles.wrap}>
                <Title> Укажите ваши финансовые возможности на приготовление одного блюда</Title>
                <PriceRangeSelector />
            </div>
        </>
    );
};
