import React, { createContext, useContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

const productsContext = createContext();

export const productsLoader = async () => {
    try {
        let response = await fetch("/api/clothing");

        if (!response.ok) {
            return false;
        }

        let recourse = await response.json();

        return recourse;
    } catch (error) {
        return "error";
    }
}

const ProductsLanding = () => {
    let { clothings } = useLoaderData();

    return (
        <productsContext.Provider
            value={{
                clothings, 
            }}
        >
            <Outlet />
        </productsContext.Provider>
    );
}

export const useProductsContext = () => useContext(productsContext);

export default ProductsLanding;
