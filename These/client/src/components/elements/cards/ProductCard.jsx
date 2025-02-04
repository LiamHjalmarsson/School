import React, { useContext } from 'react';
import Img from '../images/Img';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/cartContext';
import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({ url, item }) => {
    let { addToCart } = useContext(CartContext)

    let truncateTitle = (title) => {
        if (title.length > 20) {
            return title.substring(0, 20) + '...';
        }
        return title;
    };

    return (
        <div className="w-full max-w-60 bg-primary relative shadow-middle shadow-primary group rounded-md">
            <div className=' hover:text-_purple hover:bg-opacity-80 cursor-pointer flex items-center gap-4 text-start text-primary dark:text-white font-bold text-lg absolute -bottom-2 -right-2 p-2 bg-white dark:bg-primary bg-opacity-90 dark:bg-opacity-90 z-10 shadow-middle shadow-primary transition duration-300 rounded-md' onClick={() => addToCart(item)}>
                ${item.price}
                <FaCartPlus />
            </div>

            <Link className='' to={`/${url}`}>
                <Img img={item.image} />
                <div className='duration-300 line-clamp-1 transition text-lg items-center flex gap-4 text-center uppercase absolute -top-4 -left-4 p-4 bg-white text-primary dark:text-white shadow-middle shadow-primary dark:bg-primary bg-opacity-90 dark:bg-opacity-90 z-10 rounded-md'>
                    {truncateTitle(item.title)} 
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;
