import React from 'react';
import Row from './row';
import SubButton from './SubButton';

const Gender = ({ genders, genderHandler, selected }) => {
    return (
        <Row>
            <div>
                Gender
            </div>
            <div className='flex gap-4 items-center'>
                {
                    genders.map((gender, index) => (
                        <SubButton key={index} click={() => genderHandler(gender)} selected={selected}>
                            {
                                gender
                            }
                        </SubButton>
                    ))
                }
            </div>
        </Row>
    );
}

export default Gender;
