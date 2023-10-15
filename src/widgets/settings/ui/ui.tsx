'use client';

import { ButtonIcon } from '@/entities/buttons/icon';
import styles from './ui.module.scss';
import Back from '../../../../public/icons/back.svg';
import { Title } from '@/entities/title';
import { useRouter } from 'next/navigation';
import { Setting } from '@/features/setting';
import Forward from '../../../../public/icons/forward.svg';

export const Settings = () => {
    const router = useRouter();
    return (
        <>
            <div className={styles.layout}>
                <section>
                    <ButtonIcon onClick={() => router.back()} icon={Back}>
                        <Title>Настройки</Title>
                    </ButtonIcon>
                </section>
                <section className={styles.toggleLayout}>
                    <Setting
                        title="ПРИВАТНОСТЬ"
                        toggleText="Приватный аккаунт"
                        description="Ваш аккаунт будет доступен к просмотру только вашим друзьям"
                    />
                    <Setting title="УВЕДОМЛЕНИЯ" toggleText="Push-уведомления" />
                    <Setting title="ЯНДЕКС АЛИСА" toggleText="Голосовые команды" />
                    <Setting
                        title="безопасность"
                        toggleText="Поменять пароль"
                        isToggle={false}
                        icon={Forward}
                    />
                </section>
            </div>
        </>
    );
};
