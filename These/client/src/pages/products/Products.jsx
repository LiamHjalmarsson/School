import React, { createContext, useContext, useState } from 'react';
import ProductCard from '../../components/elements/cards/ProductCard';
import Filter from '../../components/filter/Filter';
import { useProductsContext } from '../productsLanding.jsx/ProductsLanding';

const Products = () => {
    let { clothings } = useProductsContext();
    let [filteredClothings, setFilteredClothings] = useState(clothings);

    let filterProducts = (filters) => {
        let filteredProducts = clothings.filter(clothing => {
            if (filters && clothing.gender.includes(filters)) {
                return true;
            }
        });

        setFilteredClothings(filteredProducts);
    };

    let filterList = [
        {
            option: "Gender",
            options: ["male", "female"],
        },
    ];

    return (
        <>
            <Filter filterList={filterList} handleFilter={filterProducts} />

            <div className='mt-64 flex flex-wrap justify-center gap-12 lg:flex-row'>
                {
                    filteredClothings.map((clothing, index) => (
                        <ProductCard key={index} item={clothing} url={`products/${clothing.title}`} />
                    ))
                }
            </div>
        </>
    );
}


export default Products;
