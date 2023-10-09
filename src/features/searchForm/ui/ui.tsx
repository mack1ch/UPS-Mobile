'use client';

import { FC } from 'react';
import styles from './ui.module.scss';
import { Input, InputComponentProps } from '@/entities/input';
import { SearchButton } from '@/entities/searchButton';
import { SearchButtonComponentProps } from '@/entities/searchButton';
import { useWindowSize } from '@/shared/hooks/useWindowSize';

export const SearchForm: FC<SearchButtonComponentProps & InputComponentProps> = ({
    placeholder,
    leftIcon,
}) => {
    const pageWidth = useWindowSize();
    return (
        <>
            <form className={styles.form}>
                <Input leftIcon={leftIcon} placeholder={placeholder} />
                {pageWidth > 560 ? <SearchButton>Найти</SearchButton> : undefined}
            </form>
        </>
    );
};
