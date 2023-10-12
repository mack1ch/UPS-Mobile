'use client';

import { NavBarElement, NavBarElementProps } from '@/entities/navBarElement';
import styles from './ui.module.scss';
import { useNavBar } from '@/entities/navBarElement/context';
import Home from '../../../../public/headerIcons/home.svg';
import Search from '../../../../public/headerIcons/search.svg';
import Frizen from '../../../../public/headerIcons/frizen.svg';
import Profile from '../../../../public/headerIcons/profile.svg';
import HomeActive from '../../../../public/headerIcons/homeActive.svg';
import SearchActive from '../../../../public/headerIcons/searchActive.svg';
import FrizenActive from '../../../../public/headerIcons/frizenActive.svg';
import ProfileActive from '../../../../public/headerIcons/profileActive.svg';
export const NavBar = () => {
    const { activeElementId, setActiveElementId } = useNavBar();

    const handleElementClick = (id: number) => {
        setActiveElementId(id);
    };

    const navElements: NavBarElementProps[] = [
        {
            id: 1,
            title: 'Главная',
            link: '/keepfood/home',
            icon: activeElementId === 1 ? HomeActive : Home,
            active: activeElementId === 1,
            onClick: handleElementClick,
        },
        {
            id: 2,
            title: 'Поиск',
            link: '/keepfood/search',
            icon: activeElementId === 2 ? SearchActive : Search,
            active: activeElementId === 2,
            onClick: handleElementClick,
        },
        {
            id: 3,
            title: 'Холодильник',
            link: '/keepfood/frizen',
            icon: activeElementId === 3 ? FrizenActive : Frizen,
            active: activeElementId === 3,
            onClick: handleElementClick,
        },
        {
            id: 4,
            title: 'Профиль',
            link: '/keepfood/profile',
            icon: activeElementId === 4 ? ProfileActive : Profile,
            active: activeElementId === 4,
            onClick: handleElementClick,
        },
    ];

    return (
        <>
            <header className={styles.header}>
                {navElements.map((element: NavBarElementProps) => (
                    <NavBarElement
                        key={element.id}
                        id={element.id}
                        title={element.title}
                        link={element.link}
                        active={element.active}
                        icon={element.icon}
                        onClick={element.onClick}
                    />
                ))}
            </header>
        </>
    );
};
