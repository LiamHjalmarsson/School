import React from 'react';
import ImageBanner from './ImageBanner';

const Banner = ({ custom, children, image }) => {
    return (
        <div className='relative flex'>
            <div className={`${ custom ? custom : "h-[80vh]"} z-10 w-full flex justify-center items-center relative`}>
                <div className='p-8 w-1/2 max-w-[500px] min-w-64 bg-white rounded-md dark:bg-primary bg-opacity-90 dark:opacity-90 transition-colors duration-300 min-w-md shadow-middle shadow-zinc-800'>
                    {
                        children
                    }
                </div>
            </div>
            <div className='absolute w-full h-full'>
                <ImageBanner image={image} />
            </div>
        </div>
    );
}

export default Banner;
