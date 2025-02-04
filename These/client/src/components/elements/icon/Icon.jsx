import React from 'react';

const Icon = ({ children, onclick, custom }) => {
    return (
        <div onClick={onclick ? onclick : () => {}} className={`${custom ? custom : ""} hover:text-_purple duration-300 transition-colors cursor-pointer bg-transparent w-6 h-4 p-4 place-content-center grid`}>
            {
                children
            }
        </div>
    );
}

export default Icon;
