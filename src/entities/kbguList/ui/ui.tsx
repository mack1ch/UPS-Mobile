import { FC } from 'react';
import { KbguData } from '../data';
import styles from './ui.module.scss';
export interface KbguListProps {
    calorie?: number | undefined;
    proteins?: number | undefined;
    fats?: number | undefined;
    carbohydrates?: number | undefined;
}
export interface KbguListData {
    id: number;
    title: string;
}

export const KbguList: FC<KbguListProps> = ({ calorie, carbohydrates, proteins, fats }) => {
    return (
        <>
            <div className={styles.layout}>
                {KbguData.map((element: KbguListData) => (
                    <div className={styles.item} key={element.id}>
                        <h6 className={styles.title}>{element.title}</h6>
                        <p className={styles.data}>
                            {element.id === 0
                                ? calorie?.toString()
                                : element.id === 1
                                ? proteins?.toString()
                                : element.id === 2
                                ? fats?.toString()
                                : carbohydrates?.toString()}
                        </p>
                        <p className={styles.units}>{element.id === 0 ? 'ккал' : 'грамм'}</p>
                    </div>
                ))}
            </div>
        </>
    );
};
