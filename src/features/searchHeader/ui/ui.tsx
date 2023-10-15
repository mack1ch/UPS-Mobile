import { Input } from '@/entities/input';
import styles from './ui.module.scss';
import { ButtonIcon } from '@/entities/buttons/icon';
import Filter from '../../../../public/icons/filter.svg';
import Search from '../../../../public/headerIcons/search.svg';
export const SearchHeader = () => {
    return (
        <>
            <div className={styles.layout}>
                <Input leftIcon={Search} placeholder="Введите название рецепта" />{' '}
                <ButtonIcon icon={Filter} />
            </div>
        </>
    );
};
