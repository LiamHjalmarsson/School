import React from 'react';
import Nav from '../components/Nav';
import Heading from '../../../components/elements/heading/Heading';
import { Form } from 'react-router-dom';
import { useRootContext } from '../../Root';
import InputRow from '../../../components/elements/form/InputRow';
import Button from '../../../components/elements/button/Button';


export const settingsAction = async ({ request }) => {
    let formData = await request.formData();
    try {
        let rep = await fetch('/api/users/update-current-user', {
            method: 'PATCH',
            headers: {}, 
            body: formData
        });

        let res = await rep.json();

    } catch (error) {
        return error;
    }

    return null;
};

const Settings = () => {

    let { user } = useRootContext();

    console.log(user);
    return (
        <div>
            <Nav />

            <Heading text="Settings" />

            <Form method='patch' action={`/profile/${user._id}/settings`} encType='multipart/form-data' className='mt-8 mx-auto w-1/2 p-4 flex flex-wrap gap-12'>
                <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/*"
                />

                <input type="hidden" value={user.avatarPublicId} name='public_id'/>

                <InputRow
                    input={{
                        type: "text",
                        name: "name",
                        value: user.name,
                        id: "name",
                        title: "name",
                    }}
                />
                <InputRow
                    input={{
                        type: "email",
                        name: "email",
                        value: user.email,
                        id: "email"
                    }}
                />
                {/* <InputRow
                    input={{
                        type: "text",
                        name: "gender",
                        value: user.gender,
                        id: "gender"
                    }}
                /> */}

                <Button type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
}

export default Settings;
