import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRootContext } from '../../../../pages/Root';

const NavigationLinks = ({ links, openHandler, open }) => {
    let { user } = useRootContext();

    return (
        <>
            <ul className='hidden flex-grow lg:flex justify-center'>
                {
                    links.map((link, index) => (
                        <li className='px-4' key={index}>
                            <NavLink to={`/${link.path}`} className={`hover:text-_purple uppercase text-sm font-bold tracking-wider transition-colors duration-300`}
                            >
                                {
                                    link.path === "" ? "Home" : link.path
                                }
                            </NavLink>
                        </li>
                    ))
                }

                {
                    user && user.role === "admin" && (
                        <li className='px-4'>
                            <NavLink to={`/admin`} className={`hover:text-_purple uppercase text-sm font-bold tracking-wider transition-colors duration-300`}
                            >
                                admin
                            </NavLink>
                        </li>
                    )
                }
            </ul>

            <div className={`${open ? "translate-x-0" : "translate-x-full"} transition duration-300 lg:hidden fixed h-[90vh] w-full md:w-1/2 bottom-0 right-0 bg-white shadow shadow-primary dark:bg-primary`}>
                <div className={`flex flex-col justify-between items-center gap-8 py-8`}>
                    {
                        links.map((link, index) => (
                            <NavLink to={`/${link.path}`} className={` text-center p-4 w-full hover:text-_purple uppercase text-sm font-bold tracking-wider transition-colors duration-300`} key={index}
                            >
                                {
                                    link.path === "" ? "Home" : link.path
                                }
                            </NavLink>
                        ))
                    }

                    {
                        user && user.role === "admin" && (
                            <NavLink to={`/admin`} className={`hover:text-_purple uppercase text-sm font-bold tracking-wider transition-colors duration-300 text-center p-4 w-full`}
                            >
                                admin
                            </NavLink>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default NavigationLinks;
