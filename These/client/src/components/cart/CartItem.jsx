import React from 'react';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const CartItem = ({ item, remove }) => {
    return (
        <Link to={`/products/${item.title}`} className='flex pr-4 items-center gap-4 group border border-primary dark:border-_purple p-0.5 transition-transform duration-300 ease-in-out'>
            <img src={item.image} className='h-16' />
            <div className='flex gap-4 flex-grow justify-between items-center'>
                <div className=''>
                    <h3 className='tracking-wide'>
                        {
                            item.title
                        }
                    </h3>
                    <div className='text-sm flex justify-start gap-4'>
                        <span>
                            {
                                item.price * item.quantity
                            }
                        </span>
                        <span>
                            {
                                item.size
                            }
                        </span>
                    </div>
                </div>
                <div>
                    {
                        item.quantity
                    }
                </div>
            </div>
            <button className='text-lg hover:text-_red hover:border-_red hover:shadow hover:bg-opacity-80 hover:shadow-_red duration-300 transition border-primary rounded-md border p-2 shadow-primary shadow ' onClick={() => remove(item)}>
                <MdDelete />
            </button>
        </Link>
    );
}

export default CartItem;
