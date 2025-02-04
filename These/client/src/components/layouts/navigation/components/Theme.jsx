import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { checkDarkTheme } from '../../../../utils/darkTheme';
import { useState } from 'react';
import Icon from '../../../elements/icon/Icon';

const Theme = () => {
    let [isDarkTheme, setIsDarkTheme] = useState(checkDarkTheme());

    let toggleDarkTheme = () => {
        setIsDarkTheme(!isDarkTheme);

        if (isDarkTheme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('darkTheme', isDarkTheme);
    };

    return (
        <Icon onclick={toggleDarkTheme}>
            {isDarkTheme ? (
                <BsFillSunFill className='toggle-icon' />
            ) : (
                <BsFillMoonFill className='toggle-icon' />
            )}
        </Icon>
    );
}

export default Theme;
