import React from 'react';

const CartDetailRow = ({ title, text }) => {
    return (
        <div className='flex w-full'>
            <div className='flex-grow'>
                {title}
            </div>
            <div>
                {text}
            </div>
        </div>
    );
}

export default CartDetailRow;
