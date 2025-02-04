import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Theme from './components/Theme';
import NavigationLinks from './components/NavigationLinks';
import { FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import Icon from '../../elements/icon/Icon';
import Search from '../../search/Search';
import { FaCircleUser } from "react-icons/fa6";
import Sidebar from '../../sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import Cart from '../../cart/Cart';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import { useRootContext } from '../../../pages/Root';

const Navigation = () => {
    let { user } = useRootContext();
    let [search, setSearch] = useState(false);
    let [sidebar, setSidebar] = useState(false);
    let [cart, setCart] = useState(false);
    let [open, setOpen] = useState(false);

    let location = useLocation();

    let links = [
        {
            path: "",
        },
        {
            path: "categories",
        },
        {
            path: "products",
        }
    ];

    useEffect(() => {
        setSearch(false);
        setSidebar(false);
        setCart(false);
    }, [location]);

    let searchHandler = () => {
        setSearch(!search);
        setSidebar(false);
        setCart(false);
        setOpen(false);
    }

    let cartHandler = () => {
        setCart(!cart);
        setSidebar(false);
        setSearch(false);
        setOpen(false);
    }

    let sidebarHandler = () => {
        setSidebar(!sidebar);
        setCart(false);
        setSearch(false);
        setOpen(false);
    }

    let burgerMenu = () => {
        setSearch(false);
        setSidebar(false);
        setCart(false);
        setOpen(true);
    }

    return (
        <header className='fixed w-full z-50'>
            <nav className="flex h-[10vh] overflow-hidden z-20 w-full items-center text-xl px-4 lg:px-10 dark:bg-primary bg-_white shadow shadow-primary dark:text-_white text-primary transition duration-300 justify-between relative">
                <NavLink to="/" className="z-10 w-64">
                    <h2 className='text-3xl tracking-wider font-bold hover:text-_purple transition duration-300'>
                        N-E-O
                    </h2>
                </NavLink>

                <NavigationLinks links={links} open={open} openHandler={setOpen} />

                <div className='flex gap-4 justify-center items-center z-10 w-fit lg:w-64'>
                    <Theme />
                    <Icon onclick={searchHandler}>
                        <FaSearch />
                    </Icon>
                    <Icon onclick={cartHandler} >
                        <MdShoppingCart />
                    </Icon>
                    {
                        user && user.avatar ? <img src={user.avatar} className=' h-10 w-10 rounded-full object-cover object-center cursor-pointer' onClick={sidebarHandler}/> : (
                            <Icon onclick={sidebarHandler}>
                                <FaCircleUser />
                            </Icon>
                        )
                    }
                    <BurgerMenu menuHandler={burgerMenu} open={open} />
                </div>
            </nav >

            <div className={`relative`}>
                <Search open={search} />
                <Cart open={cart} close={() => setOpen(false)} />
                <Sidebar open={sidebar} />
            </div>

        </header >
    );
}


export default Navigation;
