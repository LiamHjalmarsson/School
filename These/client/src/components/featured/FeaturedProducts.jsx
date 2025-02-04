import React from 'react';
import useFetch from '../../hooks/useFetch';
import ProductCard from '../elements/cards/ProductCard';
import Heading from '../elements/heading/Heading';

const FeaturedProducts = () => {
    let { data } = useFetch("/api/clothing");

    let man = data?.clothings.filter((item) => item.gender.includes("male"));
    let woman = data?.clothings.filter((item) => item.gender.includes("female"));

    return (
        <section className='my-20'>
            <div className='my-16'>
                <Heading text="Popular with men" />
                <div className='flex mt-16 flex-wrap justify-center lg:flex-row  gap-12'>
                    {
                        man && man.map((clothing, index) => (
                            <ProductCard key={index} item={clothing} url={`products/${clothing.title}`} />
                        ))
                    }
                </div>
            </div>

            <div className='my-16'>
                <Heading text="Popular with woman" />
                <div className='flex flex-wrap justify-center lg:flex-row mt-8 gap-12'>
                    {
                        woman && woman.map((clothing, index) => (
                            <ProductCard key={index} item={clothing} url={`products/${clothing.title}`} />
                        ))
                    }
                </div>
            </div>


        </section>
    );
}

export default FeaturedProducts;
