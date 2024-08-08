import React from 'react';
import { useForm } from 'react-hook-form';
import { RiShoppingBag3Fill } from "react-icons/ri";

const Header = ({ onSearch }) => {
    const form = useForm();
    const { register, handleSubmit } = form;

    const handleform = (data) => {
        // console.log('data', data)
        onSearch(data);  // پاس دادن مقدار جستجو به تابع هندلر والد
    };
    return (
        <form onSubmit={handleSubmit(handleform)} className='flex flex-col items-end justify-center relative w-full bg-emerald-700 '>
            <input
                {...register('searchValue')}
                placeholder='جستجو کنید...'
                className='bg-[#f9f1fc] border-2 border-[#5a0f85] px-4 outline-0 rounded-[4px] w-full h-[48px] focus:shadow-[0_0px_10px_0px_rgba(111,66,193,1)] placeholder:text-sm'
                onChange={handleSubmit(handleform)}  // به محض تغییر در ورودی، فرم سابمیت شود
            />
            <RiShoppingBag3Fill color='#5a0f85' size={25} className='absolute left-4 top-[12px]' />
        </form>
    );
};

export default Header;
