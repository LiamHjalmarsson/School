import React, { useState } from 'react';
import { Form, redirect } from 'react-router-dom';
import InputRow from '../../../components/elements/form/InputRow';
import Button from '../../../components/elements/button/Button';
import Gender from '../components/Gender';
import { toast } from "react-toastify";

export const categoryAddAction = async ({ request }) => {
    let formData = await request.formData();
    let data = Object.fromEntries(formData);

    let genders = ["male", "female"];

    genders = genders.filter(gender => data[gender]);

    let category = {
        title: data.title,
        gender: genders,
        image: data.image
    }

    try {
        let rep = await fetch("/api/category", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(category)
        });

        let res = await rep.json();

        if (res.message) {
            return {
                error: res.message
            };
        }

        toast.success("Category added successfully");

        return null;
    } catch (error) {
        return error
    }
}

const Categories = () => {
    let [imageUrl, setImageUrl] = useState('');

    let handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    };

    return (
        <div className='mb-12 relative'>
            <Form action="/admin/categories" method="post" className='max-w-md flex gap-8 shadow-gray-500 shadow-middle flex-wrap bg-_white rounded-md dark:bg-primary bg-opacity-80 dark:opacity-80 p-8 '>

                <InputRow
                    input={{
                        id: "Category",
                        type: "title",
                        name: "title",
                        title: "title",
                        autoComplete: "off"
                    }}
                />

                <Gender />

                <InputRow
                    input={{
                        id: "Image",
                        type: "url",
                        title: "image",
                        name: "image",
                        autoComplete: "off",
                        placeholder: "imageUrl",
                        value: imageUrl,
                        onChange: handleImageUrlChange
                    }}
                />

                <div className='w-1/2 mx-auto'>
                    <Button type='submit' custom="w-full">
                        Add
                    </Button>
                </div>
            </Form>

            {
                imageUrl && (
                    <div className="w-full flex justify-center absolute left-full top-0">
                        <img src={imageUrl} alt="Category Image" className="max-w-sm h-auto" />
                    </div>
                )
            }
        </div>
    );
}

export default Categories;
