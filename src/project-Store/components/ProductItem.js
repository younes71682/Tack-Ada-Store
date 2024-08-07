import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { addToCart, removeFromCart } from '../redux/basketSlice';

const ProductItem = (props) => {
    const { id, name, price, img } = props
    const priceNumber = Number(price)
    const toLocalProce = priceNumber.toLocaleString();

    const Cart = useSelector((state) => state.shopping.Cart)
    const dispatch = useDispatch()
    console.log('cart', Cart)


    return (
        <div key={id} className='flex flex-col bg-green-500 w-[180px]'>

            <div className='flex justify-center items-center '>
                <img src={img} alt={name} className='bg-cover bg-fixed w-[90px] ' />
            </div>

            <div className='flex flex-col'>
                <p className='text-[#9002d0] '>{name}</p>
                <div className='flex justify-end gap-1'>
                    <p className='text-[#cd8fce]'>{toLocalProce}</p>
                    <p className='text-[#cd8fce]'>تومان</p>
                </div>
            </div>

            {Cart.length >= 1 ?
                <div className='flex justify-center gap-5 items-center w-full h-[40px] bg-slate-500 '>
                    <div onClick={() => dispatch(addToCart(props))} className='flex justify-center items-center w-10 h-full bg-[#9002d0] rounded-[7px] cursor-pointer active:scale-75'>
                        <FaPlus size={12} color='white' />
                    </div>
                    <p className='text-xl font-bold text-[#9002d0]'>{2}</p>
                    <div onClick={() => dispatch(removeFromCart(id))} className='flex justify-center items-center w-10 h-full bg-[#fbf1fc] rounded-[7px] border border-[#9002d0] cursor-pointer active:scale-75'>
                        <FaMinus size={12} color='#9002d0' />
                    </div>
                </div>
                :
                <div onClick={() => dispatch(addToCart(props))} className='flex justify-around items-center w-full h-[40px] bg-[#fbf1fc] cursor-pointer'>
                    <p className='text-[#9002d0] font-bold'>خرید محصول</p>
                    <HiOutlineShoppingCart color='#8e03d0' />
                </div>
            }
        </div>
    )
}

export default ProductItem
