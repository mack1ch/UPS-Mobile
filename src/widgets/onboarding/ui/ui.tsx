'use client';

import styles from './ui.module.scss';
import { ReactNode } from 'react';
import { useState } from 'react';
import { ProgressBarElement } from '@/entities/progressBarElement';
import { Button } from '@/entities/buttons/button';
import { Finance } from '@/features/onboarding/finance';
import { Skills } from '@/features/onboarding/skills';
import { FoodChoice } from '@/features/onboarding/foodChoice';
import { Eating } from '@/features/onboarding/eating';
import { ActiveMap } from '../data';
import Link from 'next/link';

export const ProgressBarComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visitedPages, setVisitedPages] = useState(ActiveMap);
    const [info, setInfo] = useState<ReactNode | undefined>(<Finance />);
    const progressBarElements = [
        { key: 0, isActive: visitedPages[0] || activeIndex === 0 },
        { key: 1, isActive: visitedPages[1] || activeIndex === 1 },
        { key: 2, isActive: visitedPages[2] || activeIndex === 2 },
        { key: 3, isActive: visitedPages[3] || activeIndex === 3 },
        { key: 4, isActive: visitedPages[4] || activeIndex === 4 },
        { key: 5, isActive: visitedPages[5] || activeIndex === 5 },
        { key: 6, isActive: visitedPages[6] || activeIndex === 6 },
        { key: 7, isActive: visitedPages[7] || activeIndex === 7 },
        { key: 8, isActive: visitedPages[8] || activeIndex === 8 },
    ];

    const handleNextClick = () => {
        if (activeIndex < progressBarElements.length - 1) {
            setActiveIndex((prevIndex) => prevIndex + 1);
            setVisitedPages((prevPages) =>
                prevPages.map((visited, index) => (index === activeIndex ? true : visited)),
            );
            switch (activeIndex + 1) {
                case 1:
                    setInfo(<Skills />);
                    break;
                case 2:
                    setInfo(<FoodChoice />);
                    break;
                case 3:
                    setInfo(<Eating title="Что бы вы выбрали на завтрак" />);
                    break;
                case 4:
                    setInfo(<Eating title="Что бы вы выбрали на обед" />);
                    break;
                case 5:
                    setInfo(<Eating title="Что бы вы выбрали на ужин" />);
                    break;
                case 6:
                    setInfo(<Eating title="Что бы вы выбрали на перекус" />);
                    break;
                case 7:
                    setInfo(<Eating isSearch title="На какие продукты у вас есть аллергия" />);
                    break;
                case 8:
                    setInfo(<Eating isBig title="Что бы вы выбрали?" />);
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <>
            <section className={styles.layout}>
                <header className={styles.header}>
                    {progressBarElements.map((element) => (
                        <ProgressBarElement key={element.key} isActive={element.isActive} />
                    ))}
                </header>
                <main className={styles.scrollableMain}>{info}</main>
                {activeIndex === 8 ? (
                    <Link style={{ width: '100%' }} href="/keepfood/home">
                        <Button>Завершить</Button>
                    </Link>
                ) : (
                    <Button onClick={handleNextClick}>Далее</Button>
                )}
            </section>
        </>
    );
};
