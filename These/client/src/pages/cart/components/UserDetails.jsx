import React, { useContext, useState } from 'react';
import CartDetailRow from './CartDetailRow';
import InputRow from '../../../components/elements/form/InputRow';
import { CartContext } from '../../../context/cartContext';
import { useRootContext } from '../../Root';
import Button from '../../../components/elements/button/Button';
import { Form } from 'react-router-dom';

const UserDetails = ({ discountHandler, discount }) => {
    let { getCartTotal, clearCart, cartItems } = useContext(CartContext);
    let { user } = useRootContext();

    let [userDetail, setUserDetail] = useState(false);

    let shippingFee = getCartTotal() >= 1000 ? 0 : 75;
    let totalToPay = getCartTotal() - discount + shippingFee;
    let earnPoints = user ? getCartTotal() - discount : 0;

    return (
        <Form action='/cart' method='patch' className='flex w-1/2 gap-40 min-w-[400px] overflow-hidden relative p-2'>
            <div className={`${!userDetail ? "translate-x-0" : "-translate-x-[200%]"} transition duration-300 ease-in-out w-full bg-_white dark:bg-primary bg-opacity-80 shadow-middle min-w-96 rounded-md shadow-primary p-6 justify-center items-start flex flex-col gap-8 max-w-lg`}>
                <h3 className='text-5xl tracking-wider'>
                    Order
                </h3>

                <CartDetailRow title="Total: " text={getCartTotal()} />

                <CartDetailRow title="Shipping fee" text={shippingFee} />

                <div className='flex w-full justify-between'>
                    <span>
                        Earn
                    </span>
                    <CartDetailRow text={user ? `${earnPoints} points` : `Become a member to get ${earnPoints} points`} />
                </div>

                <InputRow
                    input={{
                        type: "number",
                        min: "0",
                        max: String(getCartTotal()),
                        name: "discount",
                        title: "Add your points ",
                        id: "discount",
                        onChange: discountHandler,
                        value: discount
                    }}
                />

                <div className='flex-grow flex justify-center items-end gap-8 text-sm'>
                    <InputRow
                        input={{
                            type: "text",
                            name: "discount code",
                            title: "Add discount code",
                            id: "discount",
                        }}
                    />

                    <button className='p-4 border border-primary hover:bg-primary hover:text-white dark:hover:bg-_purple dark:hover:text-primary transition duration-300 ease-in-out font-bold dark:border-_purple rounded-md dark:shadow-_purple'>
                        Apply
                    </button>
                </div>

                <CartDetailRow title="Total to pay" text={totalToPay} />

                <input type="hidden" name="shippingFee" value={shippingFee} />
                <input type="hidden" name="totalToPay" value={totalToPay} />
                <input type="hidden" name="earnPoints" value={earnPoints} />
                <input type="hidden" name="cart" value={JSON.stringify(cartItems)} readOnly={true} />
                <input type="hidden" name="user" value={JSON.stringify(user)} readOnly={true} />

                <div className='flex flex-wrap gap-4 w-full'>
                    <Button onclick={clearCart} type="button">
                        Clear cart
                    </Button>
                    <Button onclick={() => setUserDetail(true)} type="button">
                        Continue
                    </Button>
                </div>
            </div>


            <div className={`${userDetail ? "-translate-x-[140%]" : "translate-x-0"} transition duration-300 ease-in-out w-full bg-_white dark:bg-primary bg-opacity-80 shadow-middle min-w-96 rounded-md shadow-primary p-6 justify-center items-start flex flex-col gap-8 max-w-lg`}>
                <div className='flex flex-wrap gap-4 w-full'>

                    <InputRow
                        input={{
                            type: "text",
                            name: "name",
                            title: "Name",
                            id: "name",
                        }}
                    />

                    <Button onclick={() => setUserDetail(false)} type="button">
                        Back
                    </Button>
                    <Button type="submit">
                        Purchase
                    </Button>
                </div>
            </div>
        </Form>
    );
}

export default UserDetails;
