import React, { useState } from 'react';
import { Form, Link, redirect, useNavigate, useActionData } from 'react-router-dom';
import InputRow from '../../components/elements/form/InputRow';
import Heading from '../../components/elements/heading/Heading';
import img from "/images/bg.jpg";
import PrimaryButton from '../../components/elements/button/PrimaryButton';
import { toast } from "react-toastify";

const Register = () => {
    let errors = useActionData();

    return (
        <div className='h-[100vh] flex relative'>
            <div className='flex-grow h-full absolute w-full flex justify-center items-center bg-primary'>
                <img src={img} className='absolute w-full h-full object-cover object-center opacity-70' />

                <Form action='/register' method='post' className="flex flex-col w-full min-w-56 max-w-96 rounded-md gap-8 justify-between shadow-middle shadow-primary bg-white dark:bg-primary dark:opacity-95 transition duration-300 p-8 z-10 bg-opacity-90 dark:text-white text-primary">
                    <Heading text="Register" />
                    <InputRow
                        input={{
                            id: "Name",
                            type: "name",
                            autoComplete: "off",
                            name: "name",
                            title: "Name",
                        }}
                    />
                    <InputRow
                        input={{
                            id: "Email",
                            type: "email",
                            autoComplete: "off",
                            name: "email",
                            title: "Email",
                        }}
                    />
                    <InputRow
                        input={{
                            id: "Password",
                            type: "password",
                            autoComplete: "off",
                            name: "password",
                            title: "Password",
                        }}
                    />
                    {
                        errors && (
                            <div className="text-_red text-center">
                                {
                                    errors.error
                                }
                            </div>
                        )
                    }
                    <PrimaryButton custom="text-white w-1/2 mx-auto">
                        Register
                    </PrimaryButton>
                    <div className='flex flex-col items-center'>
                        <div>
                            Already a member?
                        </div>
                        <Link to='/login' className='underline'>
                            Login
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export const registerAction = async ({ request }) => {
    let formData = await request.formData();
    let data = Object.fromEntries(formData);

    try {
        let rep = await fetch("/api/auth/register", {
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
            };
        }

        toast.success(`Registered successfully`);

        let loginRep = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        });

        let LoginRes = await loginRep.json();
        
        if (LoginRes.message) {
            return {
                error: LoginRes.message
            }
        }

        localStorage.setItem("userToken", JSON.stringify(LoginRes.token));

        toast.success(`Logged in`);

        return redirect("/");
    } catch (error) {
        return error
    }
}

export default Register;
