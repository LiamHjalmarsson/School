import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import InputRow from '../../../components/elements/form/InputRow';
import Button from '../../../components/elements/button/Button';
import { toast } from 'react-toastify';

export let rankAddAction = async ({ request }) => {
    let formData = await request.formData();
    let data = Object.fromEntries(formData);

    console.log(data);
    try {
        let rep = await fetch("/api/rank", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ ...data, benefits: { name: data.benefits } })
        });

        let res = await rep.json();

        if (res.message) {
            return {
                error: res.message
            };
        }

        toast.success("Rank created successfully");

        return null;
    } catch (error) {
        return error
    }
}

const AdminRanks = () => {
    return (
        <div className='mb-12 relative'>
            <Form action="/admin/ranks" method="post" className='max-w-md flex gap-8 shadow-gray-500 shadow-middle flex-wrap bg-_white rounded-md dark:bg-primary bg-opacity-80 dark:opacity-80 p-8 '>

                <InputRow
                    input={{
                        id: "rank",
                        type: "text",
                        name: "rank",
                        title: "rank",
                        autoComplete: "off"
                    }}
                />

                <InputRow
                    input={{
                        id: "description",
                        type: "text",
                        name: "description",
                        title: "Description",
                        autoComplete: "off",
                    }}
                />

                <InputRow
                    input={{
                        id: "thresholdPoints",
                        type: "number",
                        title: "thresholdPoints",
                        name: "thresholdPoints",
                        autoComplete: "off",
                    }}
                />

                <InputRow
                    input={{
                        id: "benefits",
                        type: "text",
                        title: "Benefits",
                        name: "benefits",
                        autoComplete: "off",
                    }}
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

export default AdminRanks;
