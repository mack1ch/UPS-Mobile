import styles from './ui.module.scss';
import Image from 'next/image';
import User from '../../../../public/assets/userLogo.png';
export const UserInfo = ({ userName }: { userName: string }) => {
    return (
        <>
            <section className={styles.layout}>
                <Image
                    className={styles.img}
                    src={User}
                    width={96}
                    height={96}
                    alt="Фото пользователя"
                />
                <span className={styles.userName}>{userName}</span>
            </section>
        </>
    );
};
