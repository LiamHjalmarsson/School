import React from 'react';
import Heading from '../../../components/elements/heading/Heading';
import ProgressBar from './Progressbar';
import { useProfileContext } from '../Profile';

const Header = () => {
    let { user, highestRankUnlocked, nextRankToUnlock } = useProfileContext();

    return (
        <div className='w-full h-96 mt-28 flex justify-start items-center relative'>
            <div className='h-full w-full bg-primary absolute'>
                <div className={`bg-gradient-to-br to-primary h-full w-full shadow shadow-primary opacity-70 ${highestRankUnlocked.rank.toLowerCase() === "bronze" ? "from-orange-500" : ""} ${highestRankUnlocked.rank === "silver" ? "from-slate-500" : ""} ${highestRankUnlocked.rank === "gold" ? "from-yellow-500" : ""} ${highestRankUnlocked.rank === "diamond" ? "from-blue-500" : ""} `}></div>
            </div>

            <div className='w-96 flex lg:w-1/2 justify-center p-4 z-10'>
                <Heading text={`Hello Admin, Welcome to your account`} custom="text-white text-2xl md:text-3xl lg:text-4xl w-96" />
            </div>

            <div className={`transition duration-300 absolute w-1/4 min-w-64 font-bold flex flex-col gap-4 p-4 -bottom-1/3 left-1/3 lg:left-1/2 bg-_white bg-opacity-90 dark:bg-opacity-80 dark:bg-primary shadow-middle rounded-md ${highestRankUnlocked.rank === "bronze" ? "shadow-orange-500" : ""} ${highestRankUnlocked.rank === "silver" ? "shadow-slate-500" : ""} ${highestRankUnlocked.rank === "gold" ? "shadow-yellow-500" : ""} ${highestRankUnlocked.rank === "diamond" ? "shadow-blue-500" : ""} `}>
                <h3 className='text-2xl uppercase'>
                    {highestRankUnlocked.rank}
                </h3>

                <div className='flex'>
                    <div className='flex-grow'>
                        Gather points
                    </div>
                    <div>
                        {
                            user.activePoints
                        }
                    </div>
                </div>

                <div className='flex'>
                    <div className='flex-grow'>
                        Value of points
                    </div>
                    <div>
                        {
                            Math.round(user.activePoints / 10) + " kr"
                        }
                    </div>
                </div>

                <ProgressBar points={user.totalPointsEarned} nextRank={nextRankToUnlock.thresholdPoints ? nextRankToUnlock.thresholdPoints : " Max "} />
            </div>
        </div>
    );
}

export default Header;
