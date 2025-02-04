import { useParams } from 'react-router-dom';
import Heading from '../../components/elements/heading/Heading';
import ProductCard from '../../components/elements/cards/ProductCard';
import useFetch from '../../hooks/useFetch';

const Category = () => {
    let { id } = useParams();

    let { data } = useFetch(`/api/category/${id}/clothing`);

    return (
        <section className='mb-12  mt-40 '>

            <Heading text={id.slice(0, 1).toUpperCase() + id.slice(1)} />

            <div className='flex flex-wrap justify-center lg:flex-row mt-12 gap-12'>
                {
                    data && data.clothings.map((clothing, index) => (
                        <ProductCard key={index} item={clothing} url={`products/${clothing.title}`} />
                    ))
                }
            </div>

        </section>
    );
}

export default Category;
