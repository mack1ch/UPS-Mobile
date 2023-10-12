import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ui.module.scss';

export interface NavBarElementProps {
    id?: number;
    title?: string;
    link?: string | undefined;
    active?: boolean;
    icon: string | StaticImport;
    onClick: (id: number) => void;
}

export const NavBarElement: FC<NavBarElementProps> = ({
    title,
    link,
    active = false,
    icon,
    id,
    onClick,
}) => {
    const handleClick = () => {
        if (!id) return;
        onClick(id);
    };
    return (
        <>
            <Link href={link ? link : ''}>
                <nav onClick={handleClick} className={styles.navItem}>
                    <picture className={styles.item__icon}>
                        <Image
                            src={icon}
                            className={active ? styles.imgActive : undefined}
                            width={24}
                            height={24}
                            alt="/"
                        />
                    </picture>
                    <h4 className={`${styles.item__text}  ${active ? styles.active : undefined}`}>
                        {title}
                    </h4>
                </nav>
            </Link>
        </>
    );
};
