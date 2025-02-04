import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Heading from '../../components/elements/heading/Heading';
import Size from './components/Size';
import Gender from './components/Gender';
import PrimaryButton from '../../components/elements/button/PrimaryButton';
import { CartContext } from '../../context/cartContext';
import { useProductsContext } from '../productsLanding.jsx/ProductsLanding';

const ProductDetail = () => {
    let { id } = useParams();
    let { addToCart } = useContext(CartContext);
    let { clothings } = useProductsContext();

    let product = clothings.find((product) => product.title === id);

    let [selectedSize, setSelectedSize] = useState(null);
    let [selectedGender, setSelectedGender] = useState(null);
    let [selectedImage, setSelectedImage] = useState(product.image)

    let handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    let handleGenderSelection = (gender) => {
        setSelectedGender(gender);
    };

    let handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className='mb-16 mt-40 min-h-[90vh] flex-col w-full flex justify-center items-center max-lg:px-10'>
            <div className='flex group transition duration-300 flex-wrap max-w-5xl bg-white shadow shadow-primary dark:bg-primary rounded-md w-full justify-center items-center h-[50vh] gap-12'>
                <div className='flex-grow max-w-[420px] h-full py-8 px-8 flex flex-col gap-4 justify-evenly'>
                    <div className='flex flex-col gap-4'>
                        <Heading text={product.title} custom="text-start uppercase" />
                        <div className=''>
                            {
                                "Brand: " + product.brand
                            }
                        </div>
                        <div>
                            {
                                "Price: $" + product.price
                            }
                        </div>
                        <div>
                            {
                                "Category: " + product.category
                            }
                        </div>
                    </div>

                    <Gender genders={product.gender} genderHandler={handleGenderSelection} selected={selectedGender} />

                    <Size sizes={product.size} sizeHandler={handleSizeSelection} selected={selectedSize} />

                    <div>
                        <PrimaryButton custom="py-4 w-full" onclick={() => addToCart({
                            id: product._id,
                            title: product.title,
                            price: product.price,
                            image: product.image,
                            size: selectedSize,
                            gender: selectedGender
                        })}>
                            Add to cart
                        </PrimaryButton>
                    </div>
                </div>
                <div className='w-1/2 scale-110 transition duration-300 relative h-full'>
                    <img src={selectedImage} className=' object-cover object-center absolute h-full w-full shadow shadow-primary' />
                </div>
            </div>

            <div className='mt-16 flex w-full max-w-5xl justify-end'>
                {
                    product.images.map((image, index) => (
                        <div className='relative w-32 h-40 overflow-hidden group shadow shadow-primary' key={index} onClick={() => handleImageClick(image)}>
                            <img src={image} className=' absolute w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 cursor-pointer ' />
                        </div>
                    ))
                }
            </div>
        </div >
    );
}

export default ProductDetail;
