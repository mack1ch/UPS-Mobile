import styles from './ui.module.scss';

export interface ProductTextDescriptionItemProps {
    id?: number | undefined;
    title?: string | undefined;
    info?: string | undefined;
}

export interface ProductTextDescriptionProps {
    data?: ProductTextDescriptionItemProps[] | undefined;
}

export const ProductTextDescription = ({ data }: ProductTextDescriptionProps) => {
    return (
        <>
            <div className={styles.layout}>
                {data?.map((element: ProductTextDescriptionItemProps) => (
                    <div className={styles.item} key={element.id}>
                        <h4 className={styles.title}>
                            {element.id?.toString()}. {element.title}
                        </h4>
                        <p className={styles.info}>{element.info}</p>
                    </div>
                ))}
            </div>
        </>
    );
};
