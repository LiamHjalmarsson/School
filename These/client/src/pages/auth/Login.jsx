import React, { useState } from 'react';
import { Form, Link, useNavigate, redirect, useActionData } from 'react-router-dom';
import InputRow from '../../components/elements/form/InputRow';
import Heading from '../../components/elements/heading/Heading';
import img from "/images/bg.jpg";
import PrimaryButton from '../../components/elements/button/PrimaryButton';
import { toast } from "react-toastify";

const Login = () => {
    let errors = useActionData();

    return (
        <div className='h-[100vh] flex relative'>
            <div className='flex-grow h-full absolute w-full flex justify-center items-center bg-primary'>
                <img src={img} className='absolute w-full h-full object-cover object-center opacity-70' />

                <Form method='post' action='/login' className="flex flex-col w-full min-w-56 max-w-96 gap-8 justify-between shadow-middle shadow-primary bg-white dark:bg-primary rounded-md dark:opacity-95 transition duration-300 p-8 z-10 bg-opacity-90 dark:text-white text-primary">
                    <Heading text="Login" />
                    <InputRow
                        input={{
                            id: "Email",
                            type: "email",
                            name: "email",
                            autoComplete: "off",
                            title: "Email",
                        }}
                    />
                    <InputRow
                        input={{
                            id: "Password",
                            type: "password",
                            name: "password",
                            autoComplete: "off",
                            title: "Password",
                        }}
                    />
                    {
                        errors && (
                            <div className='text-_red text-center'>
                                {
                                    errors.error
                                }
                            </div>
                        )
                    }
                    <PrimaryButton custom="text-white w-1/2 mx-auto">
                        Login
                    </PrimaryButton>
                    <div className='flex flex-col items-center'>
                        <div>
                            Not a member?
                        </div>
                        <Link to='/register' className='underline'>
                            Register
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export const loginAction = async ({ request }) => {
    let formData = await request.formData();
    let data = Object.fromEntries(formData);

    try {
        let rep = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        
        let res = await rep.json();

        if (res.message) {
            return {
                error: res.message
            }
        }

        localStorage.setItem("userToken", JSON.stringify(res.token));

        toast.success(`Logged in`);

        return redirect("/");
    } catch (error) {
        return error
    }
}

export default Login;
