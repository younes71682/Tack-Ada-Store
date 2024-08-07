import React from 'react'
import { GiSettingsKnobs } from "react-icons/gi";

const Fillter = () => {
    return (
        <div>
            <div className='flex justify-around items-center cursor-pointer border-2 border-[#af3ba8] rounded-[8px] p-1 w-[80px]'>
                <p className='text-[#af3ba8] font-bold text-sm'>فیلتر‌ها</p>
                <GiSettingsKnobs color='#af3ba8' className='size-4' />
            </div>
        </div>
    )
}

export default Fillter
