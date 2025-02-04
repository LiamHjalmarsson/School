import { useRootContext } from "../../pages/Root";

const Logout = () => {
    let { logoutUser } = useRootContext();

    return (
        <form className={`w-full flex justify-center`} onClick={logoutUser}>
            <button type='button' className=' rounded-md text-center border-2 border-primary dark:border-_purple hover:bg-primary hover:text-_white dark:hover:bg-_purple duration-300 transition w-1/2 my-4 py-2 text-primary dark:text-_purple tracking-wide font-bold  dark:hover:text-zinc-800 '>
                logout
            </button>
        </form>
    );
};

export default Logout;