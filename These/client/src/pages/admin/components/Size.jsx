import React from 'react';
import CheckBox from './CheckBox';

const Size = () => {

    let sizes = ["xs", "s", "m", "l", "xl", "xxl"];

    return (
        <div className="flex gap-2">

            {
                sizes.map((size) => (
                    <CheckBox
                        input={{
                            type: "checkbox",
                            value: size,
                            title: size,
                            id: size,
                            name: size,
                        }}
                    />
                ))
            }
        </div>
    );
}

export default Size;
