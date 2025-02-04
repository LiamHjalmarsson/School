import React from 'react';

const ImageBanner = ({ image, custom }) => {
    return <img src={image} className={`${custom ? custom : ""} w-full h-full object-cover object-center `}  />
}

export default ImageBanner;
