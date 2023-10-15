import styles from './ui.module.scss';

export const KeepfoodCard = () => {
    return (
        <>
            <article className={styles.card}>
                <div className={styles.titleLayout}>
                    <h4 className={styles.title}>keepfoód</h4>
                    <span className={styles.button}>family</span>
                </div>
                <p className={styles.description}>
                    Испытайте все преимущества сервиса с подпиской Keepfoód family
                </p>
                <h4 className={styles.cost}>
                    349,00₽ <span className={styles.perDate}>/мес</span>
                </h4>
            </article>
        </>
    );
};
