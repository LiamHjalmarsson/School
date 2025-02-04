import React, { useState } from 'react';
import PrimaryButton from '../elements/button/PrimaryButton';

const Filter = ({ filterList, handleFilter }) => {
    let [openFilter, setOpenFilter] = useState(false);
    let [selectedFilters, setSelectedFilters] = useState({});

    let handleFilterOptionChange = (option) => {
        setSelectedFilters(option);
    };

    let applyFilters = () => {
        handleFilter(selectedFilters);
    };

    let filterHandler = () => {
        setOpenFilter(!openFilter);
    }

    return (
        <div className='h-36 top-28 fixed z-20 w-full'>
            <div className=' absolute p-6 flex justify-center items-center right-0 z-30'>
                <div className='flex justify-between w-full items-center'>
                    <PrimaryButton custom={`${openFilter ? "text-primary dark:text-primary" : ""}`} onclick={filterHandler}>
                        Filter
                    </PrimaryButton>
                </div>
            </div>

            <div className={`${openFilter ? "translate-x-0" : "-translate-x-full"} w-full flex flex-col lg:flex-row transition-transform duration-300 absolute top-0 bg-white dark:bg-primary p-4 z-20 shadow shadow-primary justify-center items-center gap-8`}>
                {
                    filterList.map((filterOption, index) => (
                        <div key={index} className='group relative text-lg font-bold tracking-wider cursor-pointer bg-white w-48 p-4'>
                            <div className='hover:text-_purple transition duration-300'>
                                {filterOption.option}
                            </div>
                            <div className='group-hover:visible invisible absolute text-sm p-2 bg-white w-40'>
                                {
                                    filterOption.options.map((optionAlt, index) => (
                                        <div key={index} className="mt-2 w-full flex">
                                            <label htmlFor="" className='flex-grow'>
                                                {optionAlt}
                                            </label>
                                            <input type='checkbox' onClick={() => handleFilterOptionChange(optionAlt)}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
                <PrimaryButton onclick={applyFilters}>
                    Apply Filters
                </PrimaryButton>
            </div>
        </div>
    );
}

export default Filter;
