import React, { useState } from 'react';
import InputRow from '../../../components/elements/form/InputRow';
import Button from '../../../components/elements/button/Button';
import { Form, redirect } from 'react-router-dom';
import Gender from '../components/Gender';
import Size from '../components/Size';
import { toast } from "react-toastify";

export const productsAddAction = async ({ request }) => {
    let formData = await request.formData();

    try {
        let rep = await fetch("/api/clothing", {
            method: "POST",
            headers: {},
            body: formData
        });

        let res = await rep.json();

        if (res.message) {
            return {
                error: res.message
            };
        }

        toast.success("Product created successfully");

        return null;
    } catch (error) {
        return error
    }
}

const Products = () => {
    let [imageUrl, setImageUrl] = useState('');

    let handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    };

    return (
        <div className='mb-12 flex relative'>

            <Form action="/admin/products" encType='multipart/form-data' method="post" className='max-w-md flex gap-8 shadow-primary shadow-middle flex-wrap bg-_white dark:bg-primary dark:bg-opacity-70 bg-opacity-70 rounded-md p-8'>
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
                        id: "Category",
                        type: "text",
                        name: "category",
                        title: "category",
                        autoComplete: "off"
                    }}
                />

                <InputRow
                    input={{
                        id: "brand",
                        type: "text",
                        name: "brand",
                        title: "brand",
                        autoComplete: "off",
                        defaultValue: "N-E-O"
                    }}
                />

                <InputRow
                    input={{
                        id: "price",
                        type: "number",
                        name: "price",
                        title: "price",
                        autoComplete: "off",
                        defaultValue: 699
                    }}
                />

                <Size />

                <InputRow
                    input={{
                        id: "color",
                        type: "text",
                        name: "color",
                        title: "color",
                        autoComplete: "off",
                        defaultValue: "Black"
                    }}
                />

                <Gender />

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

            {
                imageUrl && (
                    <div className="w-full flex justify-center absolute left-full top-20">
                        <img src={imageUrl} alt="Category Image" className="max-w-sm h-auto" />
                    </div>
                )
            }
        </div>
    );
}

export default Products;
