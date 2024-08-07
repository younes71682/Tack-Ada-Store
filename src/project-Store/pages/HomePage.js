import React from 'react'
import Header from '../components/home/Header'
import { PRODUCRS } from '../components/products'
import ProductItem from '../components/ProductItem'
import Fillter from '../components/home/Fillter'

const HomePage = () => {
  return (
    <div className='flex justify-center  bg-red-800 '>
      <div className='flex flex-col items-center gap-3 my-3 mx-6  w-[600px]'>

        <Header />


        <div className='flex justify-between items-center w-full'>
          <p className='text-[#af3ba8] text-sm'>2 محصول در سبد‌خرید شما قرار دارد </p>
          <Fillter />
        </div>



        <div className='flex justify-center flex-wrap gap-7 w-full'>
          {PRODUCRS.map((i) => {
            return (
              <ProductItem {...i} />
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default HomePage
