import React, { createContext, useContext } from 'react';
import { useRootContext } from '../Root';
import { NavLink, Outlet, redirect, useLoaderData } from 'react-router-dom';

export const adminContext = createContext();

export const adminLoader = async () => {
    try {
        let response = await fetch("/api/users/app-status");
        let recourse = await response.json();

        console.log(recourse);
        return recourse;
    } catch (error) {
        return redirect("/profile");
    }
}

const Admin = () => {
    let { user } = useRootContext();
    let { users, categories, purchases, products, ranks, achievements } = useLoaderData();

    if (user.role !== "admin") {
        throw new Error("not admin")
    }

    let links = ["categories", "products", "stats", "ranks", "achievements"];

    return (
        <adminContext.Provider value={{ users, categories, purchases, products }}>
            <nav className='w-full p-4 dark:bg-primary shadow shadow-primary bg-slate-200 bg-opacity-80 dark:bg-opacity-80 mt-28'>
                <ul className='flex items-center justify-center gap-12'>
                    {
                        links.map((link) => (
                            <li key={link} className='hover:text-_purple duration-300 transition uppercase tracking-wider p-2'>
                                <NavLink to={`/admin/${link === "stats" ? "" : link}`}>
                                    {link}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>

            <div className='w-full flex justify-center items-center mt-8'>
                <Outlet />
            </div>
        </adminContext.Provider>
    );
}

export const useAdminContext = () => useContext(adminContext);

export default Admin;
