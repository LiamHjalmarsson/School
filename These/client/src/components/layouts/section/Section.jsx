import React from 'react';

const Section = ({ custom, children}) => {
    return (
        <section className={`${custom ? custom : ""}`}>
            {
                children
            }
        </section>
    );
}

export default Section;
