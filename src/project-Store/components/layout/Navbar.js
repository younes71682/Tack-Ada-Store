import React from 'react'
import { Link } from 'react-router-dom'
import { RiShoppingBag3Fill } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const Navbar = () => {
    return (
        <div className='flex justify-center bg-green-400'>
            <div className='flex flex-col justify-between h-[8rem] bg-red-400 w-[600px] mx-6 mt-9'>

                <div className='flex justify-center'>
                    <h1 className='text-[#5a0f85] text-5xl font-YekanBakhBold tracking-wider'>ADA SHOP</h1>
                </div>

                <div className='flex justify-end items-center gap-2'>
                    <Link to={'/'} className='flex justify-around items-center w-[20%] h-[34px] rounded-[6px] bg-[#8e03d0] outline-0'>
                        <p className='text-white text-sm'>محصولات</p>
                        <RiShoppingBag3Fill color='white' />
                    </Link>

                    <Link to={'/cart'} className='flex justify-around items-center w-[20%] h-[34px] rounded-[6px] bg-white outline-0'>
                        <p className='text-[#8e03d0] text-sm'>سبدخرید</p>
                        <HiOutlineShoppingCart color='#8e03d0' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
