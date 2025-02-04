import React, { useState } from 'react';
import CategoryCard from '../../components/elements/cards/categoryCard';
import useFetch from '../../hooks/useFetch';

const Categories = () => {
    let { data } = useFetch("/api/category");

    let [activeSection, setActiveSection] = useState("woman");

    let handleSectionClick = (section) => {
        setActiveSection(prevActiveSection => (prevActiveSection === section ? "" : section));
    };


    let manCategory = data?.categories.filter(item => item.gender.includes("male"));
    let womanCategory = data?.categories.filter(item => item.gender.includes("female"));

    return (
        <section className='mb-12'>
            <div className={`h-[10vh] lg:h-[10vh] mt-28 z-10 w-full flex justify-center items-center relative`}>
                <div className={`w-1/2 h-full flex justify-center items-center bg-slate-50 text-4xl tracking-wider text-primary cursor-pointer transition duration-300 ${activeSection === 'man' ? 'w-4/5' : 'w-1/2'}`} onClick={() => handleSectionClick('man')}>
                    Man
                </div>
                <div className={`w-1/2 h-full flex justify-center items-center bg-slate-500 text-4xl tracking-wider text-primary cursor-pointer transition duration-300 ${activeSection === 'woman' ? 'w-4/5' : 'w-1/2'}`} onClick={() => handleSectionClick('woman')}>
                    Woman
                </div>
            </div>

            <div className='flex flex-wrap justify-center lg:flex-row mt-48 gap-12'>
                {
                    activeSection === "woman" && data &&  womanCategory.map((category, index) => (
                        <CategoryCard title={category.title} image={category.image} itemCount={category.itemCount} key={index} custom="max-w-64 lg:max-w-96" />
                    ))
                }
                {
                    activeSection === "man" && manCategory.map((category, index) => (
                        <CategoryCard title={category.title} image={category.image} itemCount={category.itemCount} key={index} custom="max-w-64 lg:max-w-96" />
                    ))
                }
            </div>

        </section>
    );
}

export default Categories;
