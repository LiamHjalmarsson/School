import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useRootContext } from '../../Root';
import Logout from '../../../components/admin/Logout';

const Nav = () => {
    let { user } = useRootContext();

    let links = ["", "loyalty", "achievements", "orders", "settings"];

    return (
        <div className='w-full mt-36'>
            <div className='flex gap-8 w-fit mx-auto mb-12 items-center'>
                {
                    links.map((link) => (
                        <NavLink to={`/profile/${user._id}/${link}`} key={link} className={({ isActive }) => {
                            return isActive && link !== "" ? "font-bold tracking-wider border-2 border-primary dark:border-_purple p-4 shadow-middle rounded-md shadow-primary dark:shadow-_purple" : "text-primary dark:text-white p-4";
                        }}>
                            {
                                link !== "" ? link.charAt(0).toUpperCase() + link.slice(1) : "Landing"
                            }
                        </NavLink>
                    ))
                }
            </div>
        </div >
    );
}

export default Nav;
