import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
export const ArticleStyles = (value: StaticImageData): string => (

    background: 
    linear-gradient(180deg, rgba(0, 0, 0, 0.60) 5%, rgba(0, 0, 0, 0.00) 30%), 
    linear-gradient(180deg, rgba(0, 0, 0, 0.00) 10%, rgba(0, 0, 0, 0.35) 50%, rgba(0, 0, 0, 0.80) 82.29%), 
    url(${value.src})

);
