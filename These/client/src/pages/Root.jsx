import React, { createContext, useContext } from 'react';
import { Outlet, useLoaderData, redirect } from 'react-router-dom';
import Navigation from '../components/layouts/navigation/Navigation';
import Footer from '../components/layouts/footer/Footer';
import { toast } from "react-toastify";

const rootContext = createContext();

export const rootLoader = async () => {
    try {
        let response = await fetch("/api/users/current-user");

        if (!response.ok) {
            return false;
        }

        let recourse = await response.json();

        if (recourse) {
            localStorage.setItem("user_id", JSON.stringify(recourse.user._id));

            return recourse;
        }
    } catch (error) {
        return error;
    }
}

const Root = () => {
    let { user } = useLoaderData();

    let logoutUser = async (e) => {
        e.preventDefault();
        try {
            let rep = await fetch("/api/auth/logout");
            await rep.json();

            localStorage.removeItem("userToken");
            toast.success(`Logged out`);

            redirect("/");
        } catch (error) {
            return { error: 'An error occurred while processing your request.' };
        }
    }

    return (
        <rootContext.Provider
            value={{
                user,
                logoutUser
            }}
        >
            <div className='dark:bg-zinc-600 text-zinc-900 bg-zinc-100 dark:text-zinc-100 transition-colors ease-in-out duration-300 overflow-x-hidden '>
                <Navigation />
                <main className='min-h-[90vh] relative'>
                    <Outlet />
                </main>
                <Footer />
            </div>

        </rootContext.Provider>
    );
}

export const useRootContext = () => useContext(rootContext);

export default Root;
