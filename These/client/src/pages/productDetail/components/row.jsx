import React from 'react';

const Row = ({ children }) => {
    return (
        <div className='flex flex-col gap-4'>
            {
                children
            }            
        </div>
    );
}

export default Row;
