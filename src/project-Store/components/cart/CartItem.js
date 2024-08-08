import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/basketSlice';

const CartItem = (props) => {

    const { id, name, price, img, quantity } = props

    const priceNumber = Number(price)
    const totalPriceItem = priceNumber * quantity
    const dispatch = useDispatch()

    return (
        <div className='flex justify-between border-2 border-[#8d04d0] rounded-[4px] w-[99%] p-3 max-[450px]:flex-col'>

            <div className='flex gap-8 max-[450px]:justify-around'>
                <div className='flex justify-center items-center w-[100px] h-[100px] max-[450px]:w-[150px] max-[450px]:h-[150px]'>
                    <img src={img} alt={name} className='bg-cover bg-fixed w-full h-full' />
                </div>

                <div className='flex flex-col justify-end max-[450px]:justify-center'>
                    <h2>{name}</h2>
                    <div className='flex gap-1 text-[#4B4B4B]'>
                        <p>{priceNumber.toLocaleString()}</p>
                        <p>تومان</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col max-[450px]:items-center justify-center flex-1'>
                <div className='flex items-center justify-end gap-1 text'>
                    <p className='text-[#cd8fce] text-lg'>{totalPriceItem.toLocaleString()}</p>
                    <p className='text-[#cd8fce] text-lg'>تومان</p>
                </div>
                <div className='flex justify-end max-[450px]:justify-center gap-1  items-center w-full h-[40px] '>
                    <div onClick={() => dispatch(addToCart(props))} className='flex justify-center items-center w-10 h-full bg-[#9002d0] rounded-[7px] cursor-pointer active:scale-75'>
                        <FaPlus size={12} color='white' />
                    </div>
                    <p className='flex justify-center items-center text-xl font-bold text-[#9002d0] w-10'>{quantity}</p>
                    <div onClick={() => dispatch(removeFromCart(id))} className='flex justify-center items-center w-10 h-full bg-[#fbf1fc] rounded-[7px] border border-[#9002d0] cursor-pointer active:scale-75'>
                        <FaMinus size={12} color='#9002d0' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
