import React from 'react';
import Nav from '../components/Nav';
import { useRootContext } from '../../Root';
import Heading from '../../../components/elements/heading/Heading';
import { useProfileContext } from '../Profile';
import ProgressBar from '../components/Progressbar';

const Loyalty = () => {
    let { user, unlockedRanks, lockedRanks } = useProfileContext();

    return (
        <>
            <Nav />

            <Heading text="Loyalty" />

            <div className='h-1/2 flex flex-col justify-between p-2'>

                <div className='flex flex-col gap-4 w-full items-center'>

                    <div className='mt-4 w-full max-w-96 flex flex-col gap-4'>
                        <div className='flex w-full flex-wrap gap-8 mt-4 justify-between'>
                            <h3 className='flex-grow'>
                                Points gathered
                            </h3>
                            <div>
                                {user.activePoints}
                            </div>
                        </div>
                        <div className='flex w-full gap-8 flex-wrap  justify-between'>
                            <h3 className='flex-grow'>
                                Points worth
                            </h3>
                            <div>
                                {user.activePoints / 10} kr
                            </div>
                        </div>

                        <div className='flex flex-col gap-4 mt-8 w-full items-center'>

                            <Heading text="Discounts" />

                        </div>
                    </div>


                    <div className='flex flex-wrap justify-center gap-8 w-full my-12 overflow-x-auto p-8'>
                        {
                            unlockedRanks.map((rank, index) => (
                                <div className='p-4 shadow-middle shadow-primary rounded-md w-96 dark:bg-opacity-80 dark:bg-primary' key={index}>
                                    <Heading text={`${rank.rank}`} custom="uppercase" />
                                    <div className='mt-4 overflow-hidden rounded-md'>
                                        <ProgressBar points={user.totalPointsEarned} nextRank={rank.thresholdPoints } />
                                    </div>
                                    <div className='flex flex-col gap-4 mt-4'>
                                        {rank.benefits.map((benefit, index) => (
                                            <div className='p-4 shadow-middle shadow-primary dark:bg-primary opacity-90 rounded-md' key={index}>
                                                <h3 className='text-lg text-center'>
                                                    {benefit.name}
                                                </h3>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                        {
                            lockedRanks.map((rank, index) => (
                                <div className='p-4 shadow-middle shadow-primary rounded-md w-96 opacity-50 dark:bg-primary' key={index}>
                                    <Heading text={`${rank.rank}`} custom="uppercase" />
                                    <div className='mt-4 overflow-hidden rounded-md'>
                                        <ProgressBar points={user.totalPointsEarned} nextRank={rank.thresholdPoints} />
                                    </div>
                                    <div className='flex flex-col gap-4 mt-4'>
                                        {rank.benefits.map((benefit, index) => (
                                            <div className='p-4 shadow-middle shadow-primary dark:bg-primary opacity-40 rounded-md' key={index}>
                                                <h3 className='text-lg text-center'>
                                                    {benefit.name}
                                                </h3>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    );
}

export default Loyalty;
