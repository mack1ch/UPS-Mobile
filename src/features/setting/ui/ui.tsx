import { Toggle } from '@/entities/buttons/toggle';
import styles from './ui.module.scss';
import { FC } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface SettingProps {
    /**
     * Загловок настроек
     */
    title?: string | undefined;

    /**
     * Текст, который отображается слева от Toggle
     */
    toggleText?: string | undefined;

    /**
     * Описание для настроек
     */
    description?: string | undefined;

    /**
     * Будет ли в качестве кнопки Toggle
     */
    isToggle?: boolean;

    /**
     * Иконка вместо Toggle (поставьте isToggle === false для работы)
     */
    icon?: StaticImport | string | undefined;
}

export const Setting: FC<SettingProps> = ({
    title,
    toggleText,
    description,
    isToggle = true,
    icon,
}) => {
    return (
        <>
            <div className={styles.layout}>
                <h5 className={styles.title}>{title}</h5>
                <div className={styles.toggleLayout}>
                    <span className={styles.toggleInfo}>
                        <h4 className={styles.toggleText}>{toggleText}</h4>
                        {description && <p className={styles.toggleDescription}>{description}</p>}
                    </span>
                    {isToggle ? (
                        <Toggle />
                    ) : (
                        !isToggle &&
                        icon && (
                            <Image
                                style={{ cursor: 'pointer' }}
                                src={icon}
                                width={24}
                                height={24}
                                alt="Кнопка-иконка"
                            />
                        )
                    )}
                </div>
            </div>
        </>
    );
};
