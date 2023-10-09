'use client';

import Image from 'next/image';
import Logo from '../../../../public/productLogos/skillactiveLogo.svg';
import LogoMobile from '../../../../public/productLogos/skillactiveLogoMobile.svg';
import { useWindowSize } from '@/shared/hooks/useWindowSize';
export const ProductLogo = () => {
    const pageWidth = useWindowSize();
    return (
        <>
            <h1 style={{ userSelect: 'none' }}>
                {pageWidth > 560 ? (
                    <Image src={Logo} alt="Логотип продукта" width={411} height={68.5} />
                ) : (
                    <Image src={LogoMobile} alt="Логотип продукта" width={189} height={34} />
                )}
            </h1>
        </>
    );
};
