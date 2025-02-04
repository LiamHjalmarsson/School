import React from 'react';
import StatsItem from './components/item';
import { FaCalculator } from 'react-icons/fa';
import { useAdminContext } from '../Admin';

const Stats = () => {

    let { users, categories, purchases, products, ranks, achievements } = useAdminContext();

    return (
        <div className='flex flex-wrap gap-12 px-20 items-center justify-center'>
            <StatsItem title="Users" count={users} icon={<FaCalculator />} />
            <StatsItem title="Categories" count={categories} icon={<FaCalculator />} />
            <StatsItem title="Purchases" count={purchases} icon={<FaCalculator />} />
            <StatsItem title="Products" count={products} icon={<FaCalculator />} />
            <StatsItem title="Ranks" count={ranks} icon={<FaCalculator />} />
            <StatsItem title="Achievements" count={achievements} icon={<FaCalculator />} />
        </div>
    );
}

export default Stats;
