import { SearchHeader } from '@/features/searchHeader';
import styles from './ui.module.scss';
import { SelectionCard } from '@/features/selectionCard';
import { Title } from '@/entities/title';
import { SearchFoodCard } from '@/entities/searchFoodCard';
import { SearchFoodCardData } from '../data';

export const Search = () => {
    return (
        <>
            <div className={styles.layout}>
                <SearchHeader />
                <span className={styles.selectLayout}>
                    <Title>Категории по продуктам</Title>
                    <SearchFoodCard cards={SearchFoodCardData} />
                </span>
                <span className={styles.selectLayout}>
                    <Title>Подборки</Title>
                    <SelectionCard />
                </span>
            </div>
        </>
    );
};
