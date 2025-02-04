import React from 'react';
import { Form } from 'react-router-dom';
import InputRow from '../../../components/elements/form/InputRow';
import Button from '../../../components/elements/button/Button';
import { toast } from 'react-toastify';

export let achievementsAddAction = async ({ request }) => {
    let formData = await request.formData();

    try {
        let rep = await fetch("/api/achievement", {
            method: "POST",
            headers: {},
            body: formData
        });

        let res = await rep.json();

        console.log(res);
        if (res.message) {
            return {
                error: res.message
            };
        }

        toast.success("Achievement created successfully");

        return null;
    } catch (error) {
        return error
    }
}

const AdminAchievements = () => {
    return (
        <div className='mb-12 relative'>
            <Form action="/admin/achievements" encType='multipart/form-data' method="post" className='max-w-md flex gap-8 shadow-gray-500 shadow-middle flex-wrap bg-_white rounded-md dark:bg-primary bg-opacity-80 dark:opacity-80 p-8 '>

                <InputRow
                    input={{
                        id: "title",
                        type: "text",
                        name: "title",
                        title: "title",
                        autoComplete: "off"
                    }}
                />

                <InputRow
                    input={{
                        id: "points",
                        type: "number",
                        title: "points",
                        name: "points",
                        autoComplete: "off",
                    }}
                />

                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                />

                <div className='w-1/2 mx-auto'>
                    <Button type='submit' custom="w-full">
                        Add
                    </Button>
                </div>
            </Form>

        </div>
    );
}

export default AdminAchievements;
