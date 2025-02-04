import React, { useState } from 'react';
import Heading from '../elements/heading/Heading';
import image from "/images/bg.jpg";
import { useRootContext } from '../../pages/Root';
import { updateAchievements } from '../../utils/updateAchievement';
import Gifts from './Gifts';
import { toast } from 'react-toastify';
import InputRow from '../elements/form/InputRow';
import Button from '../elements/button/Button';

const NewsLetter = () => {
    let [email, setEmail] = useState("");
    let [selectedGift, setSelectedGift] = useState({});
    let [submitted, setSubmitted] = useState(false);
    let { user } = useRootContext();

    let handleGiftSelection = (item) => {
        setSelectedGift(item);
    };

    let gifts = [
        {
            category: "3 for 2",
            code: "code123"
        },
        {
            category: "30 % on the next purchase",
            code: "code234"
        },
        {
            category: "350",
            code: "code333"
        },
    ];


    let submitHandler = async (e) => {
        e.preventDefault();

        if (email !== user.email) {
            toast.error("Wrong email");
            return;
        }

        setSubmitted(true);

        let updatedDiscounts = [...user.discounts, selectedGift];

        let updatedAch = updateAchievements(user, "newsletter", 100);

        let rep = await fetch("api/users/update-current-user", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                partOfNewsLetter: true,
                discounts: updatedDiscounts,
                achievements: updatedAch
            })
        });

        let res = await rep.json();

        toast.success("Signed up to newsletter");
    }

    return (
        <div className='w-full flex justify-center items-center min-h-[350px] relative'>
            <img src={image} className='absolute w-full h-full object-cover object-center' alt="" />

            <div className='flex flex-col gap-8 p-10'>
                <form className='h-full w-full flex flex-col gap-8 justify-center items-center px-10' onSubmit={submitHandler}>
                    <div className='p-6 flex flex-col justify-center items-center max-w-md bg-_white bg-opacity-80 z-10 gap-4 rounded-md shadow-middle shadow-primary '>
                        <Heading text="Newsletter" custom="text-primary dark:text-_white" />
                        <div className='text-center'>
                            Become part of our newsletter and get the opertunity to get discount
                        </div>
                        <InputRow input={{
                            type:"email", 
                            name: 'email', 
                            id:'email', 
                            onChange: (e) => setEmail(e.target.value) ,
                        }} />

                        <Button>
                            Sign up
                        </Button>
                    </div>
                </form>

                <Gifts gifts={gifts} handleGiftSelection={handleGiftSelection} selectedGift={selectedGift} submitted={submitted} />

            </div>
        </div >
    )
}

export default NewsLetter;
