import React, { useContext } from 'react';
import { CartContext } from '../../../context/cartContext';

const CartProduct = ({ item }) => {
    let { removeFromCart, getCartTotal, addToCart } = useContext(CartContext);

    return (
        <div className='border flex border-white gap-4 dark:border-primary bg-_white dark:bg-primary dark:bg-opacity-80 rounded-md shadow-primary shadow-middle p-4 items-center' >
            <img src={item.image} className=' w-24' />
            <div className='py-2 px-4 flex-grow'>
                <h3 className='text-xl'>
                    {
                        item.title
                    }
                </h3>
                <span className='text-sm'>
                    {
                        item.price
                    }
                </span>
            </div>
            <div className='flex items-center gap-4 justify-center text-lg'>
                <button onClick={() => removeFromCart(item)} className='bg-primary dark:bg-_purple text-white font-bold hover:bg-opacity-90 transition duration-300 px-4 py-2 rounded-md mr-2'>
                    -
                </button>
                {item.quantity}
                <button onClick={() => addToCart(item)} className='bg-primary dark:bg-_purple text-white font-bold hover:bg-opacity-90 transition duration-300 px-4 py-2 rounded-md ml-2'>
                    +
                </button>
            </div>
            <div className='w-24 text-center'>
                {
                    item.price * item.quantity
                }
            </div>
        </div>
    );
}

export default CartProduct;
