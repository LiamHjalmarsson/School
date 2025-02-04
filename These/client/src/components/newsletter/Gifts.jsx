import React, { useState } from 'react';
import Gift from './Gift';

const Gifts = ({ gifts, handleGiftSelection, selectedGift, submitted }) => {
    return (
        <ul className='flex gap-8 mx-auto'>
            {gifts.map((gift, index) => (
                <Gift
                    key={index}
                    gift={gift}
                    handleGiftSelection={handleGiftSelection}
                    selected={gift.category === selectedGift.category}
                    submitted={submitted}
                />
            ))}
        </ul>
    );
};

export default Gifts;