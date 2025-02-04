import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { CartContext } from '../../context/cartContext';
import PrimaryButton from '../elements/button/PrimaryButton';

const Cart = ({ open, close }) => {
    let { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    let clear = () => {
        clearCart();
    }

    return (
        <div className={`absolute top-0 right-0 bg-_white dark:bg-primary shadow-md shadow-primary text-primary dark:text-_white w-full md:w-1/2 lg:w-96 p-4 z-40 flex flex-col gap-4 transition transform ${open ? 'translate-x-0' : ' translate-x-full'}`}>
            <h2 className='text-2xl'>
                Cart
            </h2>

            <ul className='text-lg flex flex-col gap-2'>
                {cartItems.map((item, index) => (
                    <CartItem item={item} key={index} remove={removeFromCart} />
                ))}
            </ul>

            <div className='flex justify-between gap-4'>
                <button className='px-6 py-2 flex-grow border hover:bg-primary hover:text-white dark:hover:bg-_purple hover:text-primary transition duration-300 border-primary dark:border-_purple hover:bg-opacity-90 text-primary dark:text-white font-bold rounded-md' onClick={() => clearCart()}>
                    Clear 
                </button>
                <Link to="/cart" className='flex-grow'>
                    <PrimaryButton custom="w-full">
                        Purchase
                    </PrimaryButton>
                </Link>
            </div>

        </div>
    );
}

export default Cart;
