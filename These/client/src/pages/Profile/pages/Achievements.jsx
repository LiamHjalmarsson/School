import React from 'react';
import { useProfileContext } from '../Profile';
import { IoLockClosedOutline } from "react-icons/io5";
import Nav from '../components/Nav';
import Heading from '../../../components/elements/heading/Heading';

const Achievements = () => {
    let { user, achievements } = useProfileContext();

    let hasAchievement = (name) => {
        return user.achievements.some((achievement) => achievement.name === name);
    };

    return (
        <div className='px-4 lg:px-10'>
            <Nav />

            <Heading text="Achievement" />

            <div className="text-center my-12">

                <div>
                    Every achievement has a value of 100 points which equals 10 kr!
                </div>
                <div className='mt-2'>
                    Unlock all achievements to get 50% on your next purchase
                </div>
            </div>

            <div className='max-w-7xl mx-auto w-full flex flex-wrap gap-12 justify-center'>
                {
                    achievements.achievements.map((achievement, index) => (
                        <div key={index} className='w-60 shadow-middle shadow-primary bg-primary rounded-md items-center flex flex-col group'>
                            <div className='w-full relative h-40 overflow-hidden rounded-t-md'>
                                <img className={`w-full h-full rounded-t-md absolute transition duration-300 hover:scale-105 opacity-80`} src={achievement.image} />
                                <div className={`${hasAchievement(achievement.title) ? "hidden" : ""} flex justify-center items-center absolute h-full w-full top-0 bg-primary bg-opacity-60`}>
                                    <IoLockClosedOutline className='text-white text-7xl font-bold' />
                                </div>
                            </div>
                            <div className='flex flex-grow gap-2 p-4 text-sm bg-_white dark:bg-primary w-full rounded-b-md bg-opacity-95 justify-center'>
                                <span>
                                    {
                                        achievement.title
                                    }
                                </span>
                                <span>
                                    -
                                </span>
                                <span>
                                    {achievement.points} p
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Achievements;
