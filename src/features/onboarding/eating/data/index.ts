import { FoodCardProps } from '@/entities/foodCard';
import Yogurt from '../../../../../public/assets/food/yogurt.jpeg';
import Syrniki from '../../../../../public/assets/food/syrniki.png';
import FriedEggs from '../../../../../public/assets/food/friedEggs.png';

export const FoodCardData: FoodCardProps[] = [
    {
        id: 0,
        title: 'Йогурт',
        img: Yogurt,
        selected: false,
    },
    {
        id: 1,
        title: 'Вафли',
        img: Syrniki,
        selected: false,
    },
    {
        id: 2,
        title: 'Яйцо',
        img: FriedEggs,
        selected: false,
    },
    {
        id: 3,
        title: 'Йогурт',
        img: Yogurt,
        selected: false,
    },
    {
        id: 4,
        title: 'Вафли',
        img: Syrniki,

        selected: false,
    },
];
