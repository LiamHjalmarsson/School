import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useRootContext } from '../../pages/Root';
import Logout from '../admin/Logout';
import Button from '../elements/button/Button';
import Icon from '../elements/icon/Icon';
import { FaCircleUser } from 'react-icons/fa6';

const Sidebar = ({ open }) => {
    let { user } = useRootContext();

    let links = [
        "profile",
    ]

    return (
        <div className={`${open ? 'translate-x-0 z-50' : 'translate-x-full'} shadow shadow-primary w-full md:w-1/2 lg:w-96 z-10 absolute top-0 right-0 dark:bg-primary dark:text-white bg-_white text-primary px-8 py-4 transition ease-in-out duration-300 `}>
            {
                user && (
                    <div className='flex flex-col items-center justify-center'>
                        {
                            user && user.avatar ? <img src={user.avatar} className=' h-20 w-20 rounded-full object-cover object-center'/> : (
                                <Icon custom="h-20 w-20">
                                    <FaCircleUser />
                                </Icon>
                            )
                        }
                        <h3 className='mt-4'>
                            {
                                user.name
                            }
                        </h3>
                        <ul className='my-2 text-center text-sm uppercase'>
                            {
                                links.map((link, index) => (
                                    <li key={index} className='my-6'>
                                        <NavLink to={`/${link === "profile" ? "profile/" + user._id : "profile/" + link}`} className="hover:text-_purple duration 300 transition-colors">
                                            {link}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }

            <div className='flex justify-center'>
                {
                    !user && (
                        <Link to="/login">
                            <Button>
                                Login
                            </Button>
                        </Link>
                    ) || <Logout />
                }
            </div>
        </div>
    );
}

export default Sidebar;