import { ProductLogo } from '@/entities/productLogo';
import styles from './ui.module.scss';
import { SearchForm } from '@/features/searchForm';
import Search from '../../../../public/inputIcons/search.svg';

export const MainPage = () => {
    return (
        <>
            <main className={styles.layout}>
                <section className={styles.mainSection}>
                    <ProductLogo />
                    <SearchForm
                        leftIcon={Search}
                        placeholder="Введите название секции или кружка"
                    />
                </section>
            </main>
        </>
    );
};
