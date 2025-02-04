import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/elements/button/Button';

const ProfileCard = ({ heading, details, icon, link }) => {
    return (
        <div className='p-2 relative'>
            <div className='bg-primary dark:bg-_purple p-4 text-white font-bold text-xl rounded-md shadow-middle shadow-primary absolute -top-4 left-10'>
                {
                    icon
                }
            </div>

            <div className='p-4 rounded-md h-full flex flex-col gap-4 justify-center items-center shadow-middle shadow-primary dark:bg-primary dark:bg-opacity-70'>
                <h2 className='text-2xl text-center max-md:mt-4'>
                    {heading}
                </h2>
                <div className='flex w-full justify-between gap-4 px-4 flex-wrap'>
                    <div className='flex-grow'>
                        {
                            details
                        }
                    </div>
                    <Link to={`/profile/${link}`}>
                        <Button>
                            So more
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
