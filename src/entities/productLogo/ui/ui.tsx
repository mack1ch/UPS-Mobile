import Image from 'next/image';
import Logo from '../../../../public/productLogos/skillactiveLogo.svg';

export const ProductLogo = () => {
    return (
        <>
            <h1 style={{ userSelect: 'none' }}>
                <Image src={Logo} alt="Логотип продукта" width={411} height={68.5} />
            </h1>
        </>
    );
};
