import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import Heading from '../../components/elements/heading/Heading';
import CategoryCard from '../../components/elements/cards/categoryCard';

const Gender = () => {
    let { id } = useParams();
    let [categories, setCategories] = useState([]);

    let { data: clothingData } = useFetch('/api/clothing');
    let { data: categoryData } = useFetch('/api/category');

    let genderType = id === 'male' ? 'male' : 'female';

    useEffect(() => {
        if (clothingData && categoryData) {
            let filteredCategories = categoryData.categories.filter(category =>
                clothingData.clothings.some(clothing =>
                    clothing.category === category.category && clothing.gender === genderType
                )
            );
            setCategories(filteredCategories);
        }
    }, [clothingData, categoryData, id]);

    return (
        <section className='my-12'>
            <Heading text={id} />

            <div className='flex flex-wrap justify-center lg:flex-row mt-12 gap-12'>
                {
                    categories.map((category) => {
                        console.log(category);
                    })
                }

            </div>

        </section>
    );
}

export default Gender;
