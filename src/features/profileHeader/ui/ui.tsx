import { ButtonIcon } from '@/entities/buttons/icon';
import styles from './ui.module.scss';
import EditPen from '../../../../public/icons/edit.svg';

export const ProfileHeader = () => {
    return (
        <>
            <section className={styles.header}>
                <ButtonIcon icon={EditPen} />
                <button type="button" className={styles.button}>
                    Выйти
                </button>
            </section>
        </>
    );
};
