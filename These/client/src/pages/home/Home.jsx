import React from 'react';
import Banner from '../../components/banner/Banner';
import FeaturedCategories from '../../components/featured/FeaturedCategories';
import FeaturedProducts from '../../components/featured/FeaturedProducts';
import Heading from '../../components/elements/heading/Heading';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const Home = () => {
    let { data } = useFetch("/api/clothing");

    let manProduct = data?.clothings.filter(item => item.gender.includes("male"))[0];
    let womanProduct = data?.clothings.filter(item => item.gender.includes("female"))[0];

    return (
        <>
            {
                data &&
                <Banner image="" custom="h-[80vh] mt-28 shadow-md shadow-black">
                    <div className='w-full h-full absolute top-0 left-0 flex'>
                        <Link to={`/products/${manProduct.title}`} className='w-1/2 h-full bg-slate-900 relative cursor-pointer'>
                            <img src={manProduct.image} className='object-cover object-center opacity-80 w-full h-full hover:opacity-60 transition duration-300' />
                            <div className='text-4xl absolute p-4 flex flex-col gap-4 text-white bottom-0'>
                                <span>
                                    New Product Men
                                </span>
                                <span>
                                    {
                                        manProduct.title.slice(0, 1).toUpperCase() + manProduct.title.slice(1)
                                    }
                                </span>
                            </div>
                        </Link>
                        <Link to={`/products/${womanProduct.title}`} className='w-1/2 h-full bg-slate-900 relative cursor-pointer'>
                            <img src={womanProduct.image} className='object-cover object-center opacity-80 w-full h-full hover:opacity-60 transition duration-300' />
                            <div className='text-4xl absolute p-4 flex flex-col gap-4 text-white bottom-0'>
                            <span>
                                    New Product Woman
                                </span>
                                <span>
                                    {
                                        womanProduct.title.slice(0, 1).toUpperCase() + womanProduct.title.slice(1)
                                    }
                                </span>
                            </div>
                        </Link>
                    </div>
                </Banner>
            }

            <FeaturedProducts />
            
            <div className='my-12'>
                <Heading text="Popular categories" />
                <FeaturedCategories />
            </div>

        </>
    );
}

export default Home;
