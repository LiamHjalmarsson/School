import image from "/images/bg.jpg"
import { FaQuestion } from "react-icons/fa6";

const Gift = ({ gift, handleGiftSelection, selected, submitted }) => {

    let handleClick = () => {
        if (!submitted) {
            handleGiftSelection(gift);
        }
    };

    return (
        <li className={`group w-32 h-32 cursor-pointer`} onClick={handleClick}>
            <div className='flex items-center text-xl h-full rounded-md shadow-middle relative shadow-primary bg-opacity-90 bg-primary'>
                <div className='h-full w-full overflow-hidden rounded-md absolute'>
                    <img src={image} className='group-hover:scale-105 group-hover:opacity-90 w-full h-full object-cover transition duration-300' />
                </div>
                <div className={`${selected ? " bg-opacity-90 text-8xl" : ""} ${submitted && selected ? "opacity-0" : "opacity-100"} bg-_white dark:bg-primary group-hover:text-8xl w-full h-full flex justify-center items-center text-primary dark:text-white font-bold text-7xl rounded-md z-10 transition duration-300`}>
                    <FaQuestion />
                </div>
                {
                    selected && submitted && (
                        <div className=' absolute -bottom-5 p-4 text-center left-0 bg-opacity-90 dark:text-white dark:bg-primary dark:bg-opacity-90 rounded-md w-full shadow-middle shadow-primary'>
                            {
                                selected && gift.category 
                            }
                        </div>
                    )
                }
            </div>
        </li>
    );
};


export default Gift;
