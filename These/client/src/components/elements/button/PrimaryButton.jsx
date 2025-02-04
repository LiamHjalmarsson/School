import React from 'react';

const PrimaryButton = ({ custom, onclick, children}) => {
    return (
        <button className={`${custom ? custom : ""}  text-xl rounded-md px-6 py-2 bg-primary dark:bg-_purple hover:bg-opacity-80 text-white dark:text-white transition-colors duration-300 font-bold `} onClick={onclick ? onclick : () => {}}>
            {
                children
            }
        </button>
    );
}

export default PrimaryButton;
