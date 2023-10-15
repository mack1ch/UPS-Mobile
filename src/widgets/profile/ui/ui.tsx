import { ProfileHeader } from '@/features/profileHeader';
import styles from './ui.module.scss';
import { UserInfo } from '@/features/userInfo';
import { KeepfoodCard } from '@/features/keepfoodCard';
import { SettingProfileRouting } from '@/features/settingProfileRouting';

export const Profile = () => {
    return (
        <>
            <div className={styles.layout}>
                <ProfileHeader />
                <UserInfo userName="Дмитрий Степанов" />
                <KeepfoodCard />
                <SettingProfileRouting />
            </div>
        </>
    );
};
