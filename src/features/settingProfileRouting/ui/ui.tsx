import { ButtonIcon } from '@/entities/buttons/icon';
import styles from './ui.module.scss';
import Setting from '../../../../public/icons/setting.svg';
import YandexAlica from '../../../../public/icons/alica.svg';
import HeartActive from '../../../../public/icons/heartActive.svg';
import Link from 'next/link';

export const SettingProfileRouting = () => {
    return (
        <>
            <section className={styles.layout}>
                <Link href="profile/setting">
                    <ButtonIcon icon={Setting}>Настройки</ButtonIcon>
                </Link>
                <ButtonIcon icon={YandexAlica}>Яндекс.Алиса</ButtonIcon>
                <ButtonIcon icon={HeartActive}>Избранное</ButtonIcon>
            </section>
        </>
    );
};
