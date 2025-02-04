import React from 'react';

const SubButton = ({ children, click, selected, disabled }) => {
    return (
        <div
            onClick={click ? click : () => { }}
            className={`${selected === children ? "bg-primary dark:bg-_purple text-white dark:text-primary hover:bg-opacity-80" : ""} ${disabled ? "bg-gray-400 bg-opacity-45 disabled" : "hover:bg-primary dark:hover:bg-_purple dark:hover:text-primary hover:text-white duration-300 transition-colors uppercase cursor-pointer border-2 border-primary dark:border-_purple"} rounded-md flex-grow font-bold text-center max-w-32 px-6 py-4 `}>
            {
                children
            }
        </div>
    );
}

export default SubButton;
