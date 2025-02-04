import React from 'react';
import Banner from '../../../components/banner/Banner';
import { Link } from 'react-router-dom';
import Button from '../../../components/elements/button/Button';
import Heading from '../../../components/elements/heading/Heading';
import FeaturedCategories from '../../../components/featured/FeaturedCategories';
import FeaturedProducts from '../../../components/featured/FeaturedProducts';

const HomeLanding = () => {
    return (
        <div>
            <Banner image={img}>
                <div className='flex justify-center items-center flex-wrap w-full gap-8 mt-4'>
                    <Link to={"gender/male"} className='flex-grow'>
                        <Button custom="w-full">
                            MAN
                        </Button>
                    </Link>
                    <Link to={"gender/female"} className='flex-grow'>
                        <Button custom="w-full">
                            WOMAN
                        </Button>
                    </Link>
                </div>
            </Banner>

            <div className='my-12'>
                <Heading text="Popular categories" />
                <FeaturedCategories />
            </div>

            <FeaturedProducts />
        </div>
    );
}

export default HomeLanding;
