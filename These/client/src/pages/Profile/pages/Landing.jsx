import ProfileCard from '../components/ProfileCard';
import Logout from '../../../components/admin/Logout';
import Header from '../components/Header';
import Sidebar from '../components/sidebar';
import { useProfileContext } from '../Profile';
import { FaRegHandPointRight, FaStore, FaTrophy, FaUser } from 'react-icons/fa';

const Landing = () => {
    let { user } = useProfileContext();

    return (
        <>
            <Header />

            <div className='w-full flex flex-wrap absolute justify-center'>
                <div className='flex-grow w-full'>
                    <div className='max:w-xl xl:max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto mt-40 px-8'>
                        <ProfileCard heading="Loyalty" details="Details" icon={< FaRegHandPointRight />} link={`${user._id}/loyalty`} />
                        <ProfileCard heading="Achievements" details="Details" icon={< FaTrophy />} link={`${user._id}/achievements`} />
                        <ProfileCard heading="Purchases" details="Details" icon={< FaStore />} link={`${user._id}/purchases`} />
                        <ProfileCard heading="Settings" details="Details" icon={< FaUser />} link={`${user._id}/settings`} />
                    </div>
                    <div className='mt-10 w-52 mx-auto'>
                        <Logout />
                    </div>
                </div>

                <Sidebar />
            </div>
        </>
    );
}

export default Landing;
