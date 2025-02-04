import React from 'react';

const Button = ({ type, children, onclick, custom }) => {
    return (
        <button 
            type={type}
            className={`${custom ? custom : ""} text-xl flex-grow border-2 rounded-md border-primary dark:border-_purple dark:text-_purple dark:hover:bg-_purple dark:hover:text-primary py-2 px-6 text-primary duration-300 transition-colors hover:bg-primary hover:opacity-90 hover:text-white font-bold`}
            onClick={onclick ? onclick : () => {}}
        >
            {
                children
            }
        </button>
    );
}

export default Button;
