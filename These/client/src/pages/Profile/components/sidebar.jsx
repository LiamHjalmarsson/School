import React from 'react';
import { useProfileContext } from '../Profile';
import Heading from '../../../components/elements/heading/Heading';

const Sidebar = () => {
    let { ranks, unlockedRanks } = useProfileContext();
    
    return (
        <div className=' right-0 2xl:absolute shadow-middle rounded-md shadow-primary max-md:w-full my-8 px-8 py-4 lg:mr-10 mx-10'>
            <Heading text="Benefits" />

            <div className='mt-4'>
                {
                    unlockedRanks.map((rank, index) => (
                        <div className={`mt-4 p-4 rounded-md shadow-middle ${rank.rank === "bronze" ? "shadow-amber-500" : ""} ${rank.rank === "silver" ? "shadow-slate-500" : ""}`} key={index}>
                            {
                                rank.rank
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Sidebar;
