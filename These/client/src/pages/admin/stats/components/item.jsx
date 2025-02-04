import React from 'react';

const StatsItem = ({ title, icon, custom, count}) => {
    return (
        <div className={`${custom ? custom : ""} w-full p-4 shadow-middle lg:min-w-80 lg:max-w-md shadow-primary border-b-4 rounded-md`}>
            <header className='flex justify-between items-center py-2'>
                <span>
                    {count}
                </span>
                <span className='p-4 bg-opacity-80 bg-slate-500 rounded-md'>
                    {icon}
                </span>
            </header>
            <h5 className='text-xl font-bold'>
                {
                    title
                }
            </h5>
        </div>
    );
}

export default StatsItem;
