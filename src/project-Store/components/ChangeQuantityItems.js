import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { addToCart, removeFromCart } from '../redux/basketSlice';

const ChangeQuantityItems = (props) => {
    const { id } = props
    const Cart = useSelector((state) => state.shopping.Cart)
    const dispatch = useDispatch()
    const cartItem = Cart.find((item) => item.id === id)
    const quantity = cartItem && cartItem.quantity

console.log('Cart',Cart)
console.log('props',props)

    return (
        <>
            {cartItem ?
                <div className='flex justify-center gap-5 items-center w-full h-[40px] bg-slate-500 '>
                    <div onClick={() => dispatch(addToCart(props))} className='flex justify-center items-center w-10 h-full bg-[#9002d0] rounded-[7px] cursor-pointer active:scale-75'>
                        <FaPlus size={12} color='white' />
                    </div>
                    <p className='text-xl font-bold text-[#9002d0]'>{quantity}</p>
                    <div onClick={() => dispatch(removeFromCart(id))} className='flex justify-center items-center w-10 h-full bg-[#fbf1fc] rounded-[7px] border border-[#9002d0] cursor-pointer active:scale-75'>
                        <FaMinus size={12} color='#9002d0' />
                    </div>
                </div>
                :
                <div onClick={() => dispatch(addToCart(props))} className='flex justify-between items-center w-full h-[40px] px-4 bg-[#fbf1fc] cursor-pointer'>
                    <p className='text-[#9002d0] font-bold'>خرید محصول</p>
                    <HiOutlineShoppingCart color='#8e03d0' />
                </div>
            }
        </>
    )
}

export default ChangeQuantityItems
