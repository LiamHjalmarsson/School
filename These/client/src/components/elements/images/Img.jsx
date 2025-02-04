import React from 'react';

const Img = ({ img }) => {
    return (
        <div className='overflow-hidden h-full w-full rounded-md'>
            <img src={img} className='object-cover object-center opacity-85 group-hover:opacity-90 w-full h-full group-hover:scale-125 transition duration-300' />
        </div>
    );
}

export default Img;
