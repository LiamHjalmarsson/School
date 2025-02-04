import React from 'react';

const SelectFormRow = ({name, label, list, defaultValue=""}) => {
    return (
        <div className={`flex gap-4 p-2 border border-white shadow-middle shadow-zinc-500 rounded-md items-center`}>
            <label
                htmlFor={name}
                className={`transition-all text-primary dark:text-white duration-300`}
            >
                {label || text}
            </label>
            <select name={name} id={name} defaultValue={defaultValue} className='bg-primary text-white p-2'>
                {
                    list.map((value) => (
                        <option value={value} key={value} className=''>
                            {
                                value
                            }
                        </option>
                    ))
                }
            </select>
        </div>
    );
}

export default SelectFormRow;
