import { FC } from 'react';
import styles from './ui.module.scss';
import { Input, InputComponentProps } from '@/entities/input';
import { Button } from '@/entities/button';
import { ButtonComponentProps } from '@/entities/button/ui/ui';

export const SearchForm: FC<ButtonComponentProps & InputComponentProps> = ({
    placeholder,
    leftIcon,
}) => {
    return (
        <>
            <form className={styles.form}>
                <Input leftIcon={leftIcon} placeholder={placeholder} />
                <Button>Найти</Button>
            </form>
        </>
    );
};
