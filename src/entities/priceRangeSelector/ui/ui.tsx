'use client';
import styles from './ui.module.scss';
import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { sliderStyles } from '../model';

export const PriceRangeSelector = () => {
    const [sliderValues, setSliderValues] = useState<[number, number]>([800, 1500]);

    const handleSliderChange = (values: [number, number]) => {
        setSliderValues(values);
    };

    return (
        <section className={styles.layout}>
            <style>{sliderStyles}</style>
            <div className={styles.header}>
                <h3 className={styles.title}>Стоимость блюда</h3>
                <span className={styles.price}>
                    {sliderValues[0]}&#8381; - {sliderValues[1]}&#8381;
                </span>
            </div>
            <Slider
                range
                min={150}
                max={2000}
                value={sliderValues}
                onChange={(value: any) => handleSliderChange(value)}
            />
            <div className={styles.borderWrap}>
                <span className={styles.border}>150&#8381;</span>
                <span className={styles.border}>2000&#8381;</span>
            </div>
        </section>
    );
};
