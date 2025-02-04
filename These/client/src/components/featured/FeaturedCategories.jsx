import React from 'react';
import useFetch from '../../hooks/useFetch';
import CategoryCard from '../elements/cards/categoryCard';

const FeaturedCategories = () => {
    let { data } = useFetch("/api/category");

    console.log(data);
    let threeCategories = data?.categories.slice(0, 6);

    return (
        <section className='my-12'>
            <div className='flex flex-wrap justify-center lg:flex-row mt-12 gap-12'>
                {
                    threeCategories && threeCategories.map((category, index) => (
                        <CategoryCard title={category.title} image={category.image} itemCount={category.itemCount} key={index} />
                    ))
                }
            </div>
        </section>
    );
}

export default FeaturedCategories;
