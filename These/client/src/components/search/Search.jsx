import React from 'react';
import { FaSearch } from "react-icons/fa";
import PrimaryButton from '../elements/button/PrimaryButton';
import Icon from '../elements/icon/Icon';

const Search = ({ open }) => {
    return (
        <form className={`${open ? "translate-y-0" : " -translate-y-[400%]"} bg-_white top-10 max-w-3xl w-full mx-auto absolute bg-opacity-80 rounded-md transition-transform duration-300 shadow shadow-primary z-10 left-0 right-0`}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-primary sr-only dark:text-_white">
                Search
            </label>
            <div className="relative">
                <Icon custom="absolute bottom-3 left-2">
                    <FaSearch />
                </Icon>
                <input type="search" id="default-search" className="block w-full p-4 pl-12 bg-transparent outline-none" />
                <PrimaryButton type="submit" custom="absolute end-2.5 bottom-2 rounded-md">
                    Search
                </PrimaryButton>
            </div>
        </form>
    );
}

export default Search;
