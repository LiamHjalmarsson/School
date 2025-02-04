import React from 'react';
import NewsLetter from '../../newsletter/NewsLetter';
import { useRootContext } from '../../../pages/Root';
import Heading from '../../elements/heading/Heading';

const Footer = () => {
    let { user } = useRootContext();

    return (
        <>
            {/* {
                user && !user.partOfNewsLetter && <NewsLetter />
            }

            {
                !user && <NewsLetter />
            } */}
            <footer className='shadow-primary h-[10vh] dark:bg-primary bg-_white transition duration-300 dark:text-white text-primary bottom-0 w-full'>
                <div className='p-10 flex justify-between mx-auto flex-wrap items-center'>
                    <Heading text="NEO" />
                    <div>
                        Contact
                    </div>
                    <div>
                        Something
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
