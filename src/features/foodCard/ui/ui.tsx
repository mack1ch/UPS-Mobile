import { BackFilter } from '@/entities/backFilter';
import styles from './ui.module.scss';
import { ButtonLove } from '@/entities/buttons/love';
import Blin from '../../../../public/assets/blins.png';
import { KbguList } from '@/entities/kbguList';
import { FoodCardData } from '../data';
import Link from 'next/link';
export const FoodCard = () => {
    return (
        <>
            <Link href="home/1">
                {/**Когда вы подключаете backend, то передавайте ID */}
                <article
                    style={{
                        background: `
                        linear-gradient(180deg, rgba(0, 0, 0, 0.60) 5%, rgba(0, 0, 0, 0.00) 30%), 
                        linear-gradient(180deg, rgba(0, 0, 0, 0.00) 10%, rgba(0, 0, 0, 0.35) 50%, rgba(0, 0, 0, 0.80) 82.29%), 
                        url(${Blin.src})
                    `,
                    }}
                    className={styles.card}>
                    <div className={styles.topInfo}>
                        <BackFilter>15 мин</BackFilter>
                        <ButtonLove />
                    </div>
                    <div className={styles.centerInfo}>
                        <h5 className={styles.title}>Венские вафли с медом и черникой</h5>
                        <p className={styles.text}>
                            Яйца • Мука • Черника • Сахар • Сливочное масло • Молоко • Соль •
                            Разрыхлитель
                        </p>
                        <KbguList
                            fats={FoodCardData.fats}
                            calorie={FoodCardData.calorie}
                            carbohydrates={FoodCardData.carbohydrates}
                            proteins={FoodCardData.proteins}
                        />
                    </div>
                </article>
            </Link>
        </>
    );
};
