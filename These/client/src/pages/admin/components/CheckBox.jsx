import React from 'react';

const CheckBox = ({ input }) => {
    return (
        <label className="inline-flex items-center">
            <input
                {
                    ...input
                }
                className="form-checkbox h-5 w-5 "
            />
            <span className="ml-2 ">
                {input.title}
            </span>
        </label>
    );
}

export default CheckBox;
