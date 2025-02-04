import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { FaTrash, FaPen } from "react-icons/fa";
import Icon from '../../../components/elements/icon/Icon';
import { Form, Link } from 'react-router-dom';

export const deleteUserAction = async ({ request }) => {
    let formData = await request.formData();
    let data = Object.fromEntries(formData);

    try {
        let rep = await fetch("/api/users/users" + {} , {
            method: "DELETE",
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


        return redirect("/admin/users");
    } catch (error) {
        return error
    }
}

const Users = () => {
    let { data } = useFetch("/api/users/users");

    console.log(data);

    return (
        <ul className='mx-auto flex flex-wrap  items-center justify-between gap-12 lg:flex-row mt-12 px-10'>
            {
                data && data.users.map((user, index) => (
                    <div key={index} className="flex-grow gap-2 lg:max-w-sm bg-white rounded-lg shadow shadow-gray-500 dark:bg-gray-800 flex flex-col justify-center items-center p-6 relative">
                        <Form action='/users' method='post'>
                            <input type='hidden' name='user' />
                            <Icon custom=" top-0 left-0 hover:text-red-400">
                                <FaTrash />
                            </Icon>
                        </Form>
                        <img src={user.icon} className='w-14 h-14 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500' />
                        <h3>
                            {
                                user.name
                            }
                        </h3>
                        <div className='flex flex-wrap gap-4'>
                            <div>
                                {
                                    user.discounts
                                }
                            </div>
                            <div>
                                {
                                    user.points
                                }
                            </div>
                        </div>
                    </div>

                ))
            }
        </ul>
    );
}

export default Users;
