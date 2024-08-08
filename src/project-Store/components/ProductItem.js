import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { addToCart, removeFromCart } from '../redux/basketSlice';

const ProductItem = (props) => {
    const { id, name, price, img } = props
    const priceN = Number(price)

    const Cart = useSelector((state) => state.shopping.Cart)
    const dispatch = useDispatch()
     const cartItem = Cart.find((item) => item.id === id)
    const quantity = cartItem && cartItem.quantity

    return (
        <div className='flex flex-col bg-green-500 w-[180px] rounded-b-[4px]'>

            <div className='flex justify-center items-center  bg-purple-300 h-[90px]'>
                {img ?
                    <img src={img} alt={name} className='bg-cover bg-fixed w-[90px] h-[90px]' />
                    : null
                }
            </div>

            <div className='flex flex-col'>
                <p className='text-[#9002d0] '>{name}</p>
                {price &&
                    <div className='flex justify-end gap-1'>
                        <p className='text-[#cd8fce]'>{priceN.toLocaleString()}</p>
                        <p className='text-[#cd8fce]'>تومان</p>
                    </div>
                }
            </div>

            {cartItem ?
                <div className='flex justify-center gap-1 items-center w-full h-[40px] '>
                    <div onClick={() => dispatch(addToCart(props))} className='flex justify-center items-center w-10 h-full bg-[#9002d0] rounded-[7px] cursor-pointer active:scale-75'>
                        <FaPlus size={12} color='white' />
                    </div>
                    <p className='flex justify-center items-center text-xl font-bold text-[#9002d0] w-10'>{quantity}</p>
                    <div onClick={() => dispatch(removeFromCart(id))} className='flex justify-center items-center w-10 h-full bg-[#fbf1fc] rounded-[7px] border border-[#9002d0] cursor-pointer active:scale-75'>
                        <FaMinus size={12} color='#9002d0' />
                    </div>
                </div>
                :
                <div onClick={() => dispatch(addToCart(props))} className='flex justify-between items-center w-full h-[40px] px-4 bg-[#fbf1fc] rounded-[4px] cursor-pointer'>
                    <p className='text-[#9002d0] font-bold'>خرید محصول</p>
                    <HiOutlineShoppingCart color='#8e03d0' />
                </div>
            }
        </div>
    )
}

export default ProductItem
