import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RiShoppingBag3Fill } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useSelector } from 'react-redux';

const Navbar = () => {

    const { pathname } = useLocation()
    const Cart = useSelector((state) => state.shopping.Cart)
    const totalQuantity = Cart.reduce((total, item) => total += item.quantity, 0)
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col justify-between h-[109px] w-[600px] mx-6 mt-4'>

                <div className='flex justify-center text-center '>
                    <h1 className='text-[#5a0f85] text-5xl font-YekanBakhBold tracking-wider'>ADA SHOP</h1>
                </div>

                <div className='flex justify-end items-center gap-2 max-[642px]:justify-between'>
                    <Link to={'/'} className={`flex justify-around items-center w-[125px] h-[34px] rounded-[6px] outline-0 transition-colors duration-400 ease-in-out ${pathname === '/' ? 'bg-[#8e03d0]' : 'bg-[#f9f1fc]'}`}>
                        <p className={`text-sm ${pathname === '/' ? 'text-white' : 'text-[#8e03d0]'}`}>محصولات</p>
                        <RiShoppingBag3Fill color={`${pathname === '/' ? 'white' : '#8e03d0'}`} />
                    </Link>

                    <Link to={'/cart'} className={`flex justify-around items-center w-[125px] h-[34px] rounded-[6px] outline-0 transition-colors duration-400 ease-in-out relative ${pathname === '/cart' ? 'bg-[#8e03d0]' : 'bg-[#f9f1fc]'}`}>
                        <p className={`text-sm ${pathname === '/cart' ? 'text-white' : 'text-[#8e03d0]'}`}>سبدخرید</p>
                        <HiOutlineShoppingCart color={`${pathname === '/cart' ? 'white' : '#8e03d0'}`} />
                        {totalQuantity > 0  &&
                            <div className={`flex justify-center items-center rounded-[2px] w-[18px] absolute left-6 ${pathname === '/cart' ? 'bg-[#f9f1fc]' : 'bg-[#e71ee8]'} `}>
                                <p className={`text-xs mt-[2px] ${pathname === '/cart' ? 'text-[#8e03d0]' : 'text-white' }`}>{totalQuantity}</p>
                            </div>}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
