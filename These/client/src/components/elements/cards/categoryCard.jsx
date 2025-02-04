import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../images/Img';

const CategoryCard = ({ image, title, custom }) => {
    return (
        <Link to={`/categories/${title}`} className={`w-full ${custom ? custom : "max-w-60"} bg-primary relative shadow-middle shadow-primary group rounded-md`} >
            <Img img={image} />
            <div className='group-hover:bg-opacity-85 transition duration-300 text-xl text-center uppercase line-clamp-1 absolute -top-2 -left-2 p-4 bg-white text-primary dark:text-white shadow-middle shadow-primary dark:bg-primary bg-opacity-90 dark:bg-opacity-90 z-10 rounded-md'>
                {
                    title
                }
            </div>
        </Link>
    );
}

export default CategoryCard;
