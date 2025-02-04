import React from 'react';

const ProgressBar = ({ points, nextRank, locked = false }) => {
    let fillWidth = (points / nextRank) * 100;

    return (
        <div className='p-4'>
            <div className={`w-full h-8 bg-white bg-opacity-80 rounded-md shadow-primary shadow-middle ${locked ? "" : "opacity-60"}`}>
                <div className={`h-full bg-green-400 max-w-full rounded-l-md`}style={{ width: `${fillWidth}%` }}></div>
            </div>
            <div className='flex justify-between px-2 mt-2'>
                <div>
                    0
                </div>
                <div>
                    {
                        nextRank
                    }
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;