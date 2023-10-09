'use client';

import { ProductLogo } from '@/entities/productLogo';
import styles from './ui.module.scss';
import { SearchForm } from '@/features/searchForm';
import Search from '../../../../public/inputIcons/search.svg';
import { Card } from '@/features/card';
import { CardMobile } from '@/features/cardMobile';
import { useWindowSize } from '@/shared/hooks/useWindowSize';
export const MainPage = () => {
    const pageWidth = useWindowSize();
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
                <section className={styles.section__layout}>
                    {pageWidth > 650 ? <Card /> : <CardMobile />}
                </section>
            </main>
        </>
    );
};
