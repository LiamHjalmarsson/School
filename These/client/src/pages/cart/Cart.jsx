import React, { useContext, useState } from 'react';
import Heading from '../../components/elements/heading/Heading';
import UserDetails from './components/UserDetails';
import { CartContext } from '../../context/cartContext';
import CartProduct from './components/CartProduct';
import FeaturedProducts from '../../components/featured/FeaturedProducts';
import { redirect } from "react-router-dom"
import { updateAchievements } from '../../utils/updateAchievement';

export const cartAction = async ({ request }) => {
    let formData = await request.formData();
    let data = Object.fromEntries(formData);

    let user = JSON.parse(data.user);
    let cart = JSON.parse(data.cart);
    let discount = JSON.parse(data.discount);
    let earnPoints = JSON.parse(data.earnPoints);
    let totalToPay = JSON.parse(data.totalToPay);
    let name = data.name;

    let cartData;

    if (user) {
        cartData = {
            userId: user._id,
            items: cart.map(item => ({
                productId: item._id ? item._id : item.id,
                quantity: item.quantity,
                price: item.price
            })),
            totalPrice: totalToPay,
            name
        };
    } else {
        cartData = {
            items: cart.map(item => ({
                productId: item._id ? item._id : item.id,
                quantity: item.quantity,
                price: item.price
            })),
            totalPrice: totalToPay,
            name
        };
    }

    if (cartData.items.length <= 0) {
        toast.error("Cart is empty");
        return;
    }

    if (cart.length <= 0) {
        return "Empty cart"
    }

    let response = await fetch(`/api/purchase`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartData)
    });

    let res = await response.json();

    let purchaseId = res.purchase._id

    if (user) {
        if (user.purchases.length <= 0 && !user.achievements.find(achievement => achievement.name === "first order")) {
            let updatedAch = updateAchievements(user, "first order", 100);

            console.log("ss");

            await fetch(`/api/users/update-current-user`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    activePoints: user.activePoints - discount + earnPoints,
                    totalPointsEarned: user.totalPointsEarned + earnPoints,
                    achievements: updatedAch,
                    purchases: [...user.purchases, purchaseId]
                })
            });
        } else if (user.ranks) {

        }
        else {
            await fetch(`/api/users/update-current-user`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    activePoints: user.activePoints - discount + earnPoints,
                    totalPointsEarned: user.totalPointsEarned + earnPoints,
                    purchases: [...user.purchases, purchaseId]
                })
            });
        }

        return redirect("/profile/" + user._id);
    }

    return redirect("/");
}

const Cart = () => {
    let { cartItems, getCartTotal } = useContext(CartContext);
    let [discount, setDiscount] = useState(0);

    let handleDiscountChange = (e) => {
        let inputValue = parseInt(e.target.value);
        let maxDiscount = parseInt(getCartTotal());
        if (inputValue <= maxDiscount) {
            setDiscount(inputValue);
        }
    };

    return (
        <div className='w-full min-h-[90vh] flex flex-col justify-center items-center'>
            <Heading text="Cart" />

            <div className='flex gap-20 w-full mx-auto max-w-7xl mt-12 px-10'>
                <div className='w-full flex flex-wrap flex-col gap-8'>
                    <div className='flex px-4 w-full gap-4'>
                        <div className='w-24'></div>
                        <div className='flex-grow flex justify-between items-center'>
                            <div className='flex-grow px-4'>
                                Product
                            </div>
                            <div className='text-center w-40'>
                                Quantity
                            </div>
                            <div className='text-center w-24'>
                                Price
                            </div>
                        </div>
                    </div>
                    {
                        cartItems.map((item, index) => (
                            <CartProduct item={item} key={index} />
                        ))
                    }
                </div>

                <UserDetails discountHandler={handleDiscountChange} discount={discount} />
            </div>
        </div >
    );
}

export default Cart;
