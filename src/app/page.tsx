import { Input } from '@/entities/input';
import Search from '../../public/inputIcons/Search.svg';
export default function Home() {
    return (
        <>
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                }}>
                <Input leftIcon={Search} placeholder="Введите название секции или кружка" />
            </div>


            
        </>
    );
}
