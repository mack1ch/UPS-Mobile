import { ProductDescription } from '@/widgets/productDescription';

export default function Card({ params }: { params: { id: number } }) {
    return (
        <>
            <ProductDescription />
        </>
    );
}
