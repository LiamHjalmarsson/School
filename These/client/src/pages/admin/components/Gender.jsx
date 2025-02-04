import React from 'react';
import CheckBox from './CheckBox';

const Gender = () => {
    return (
        <div className="flex gap-2">
            <CheckBox
                input={{
                    type: "checkbox",
                    value: "male",
                    title: "Male",
                    id: "male",
                    name: "male",
                }}
            />
            <CheckBox
                input={{
                    type: "checkbox",
                    value: "female",
                    title: "Female",
                    id: "female",
                    name: "female",
                }}
            />
        </div>

    );
}

export default Gender;
