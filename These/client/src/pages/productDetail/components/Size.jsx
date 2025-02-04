import React from 'react';
import Row from './row';
import SubButton from './SubButton';

const Size = ({ sizes, sizeHandler, selected }) => {
    let allSizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];

    let sizeExists = (size) => sizes.includes(size);

    return (
        <Row>
            <h3>
                Size
            </h3>

            <div className='flex flex-wrap gap-4 items-center'>
                {
                    allSizes.map((size, index) => (
                        <SubButton key={index} click={() => sizeExists(sizeHandler(size))} selected={selected} disabled={!sizeExists(size)} >
                            {
                                size
                            }
                        </SubButton>
                    ))
                }
            </div>
        </Row>
    );
}

export default Size;
