import React from 'react';

const Heading = ({ text, custom}) => {
    return (
        <h3 className={`${custom ? custom : ""} text-center text-3xl font-bold tracking-wider`}>
            { text }
        </h3>
    );
}

export default Heading;
