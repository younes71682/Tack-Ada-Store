import React from 'react'
import CartItem from '../components/cart/CartItem'
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import CartEmpty from '../components/cart/CartEmpty';
import { PRODUCRS } from '../components/products';

const CartPage = () => {

  const Cart = useSelector((state) => state.shopping.Cart)
  
  const { totalPrice, totalItems, totalProducts } = Cart.reduce((accumulator, currentItem) => {
    const itemProduct = PRODUCRS.find((i) => i.id === currentItem.id)
    const price = Number(itemProduct.price) || 0
    const quantity = currentItem.quantity

    accumulator.totalPrice += price * quantity
    accumulator.totalItems += quantity
    accumulator.totalProducts += 1

    return accumulator
  }, { totalPrice: 0, totalItems: 0, totalProducts: 0 })


  return (
    <div className='flex justify-center items-center h-[567px]'>

      {Cart.length ?
        <div className='flex flex-col items-center gap-6  mt-3 mx-6 w-[600px]'>

          <div className='flex flex-col items-center gap-5 w-full overflow-auto h-[430px] '>
            {Cart.map((i) => {
              return (
                <CartItem key={i.id} {...i} />
              )
            })}
          </div>

          <div className='flex justify-between items-center w-full'>
            <div className='flex flex-col'>
              <p className='text-[#cd8fce]'>تکمیل و ادامه فرایند پرداخت {totalItems} کالا از {totalProducts} محصول انتخاب شده است</p>
              <div className='flex gap-1 text-[#9002d0]'>
                <p>مبلغ پرداخت سفارش</p>
                <p>{totalPrice.toLocaleString()}</p>
                <p>تومان</p>
              </div>
            </div>
            <div className='flex items-center justify-between p-2 rounded-[4px] bg-[#9002d0] w-[140px]'>
              <p className='text-sm text-white'>تکمیل و پرداخت</p>
              <BsFillCreditCard2FrontFill color='white' />
            </div>
          </div>
        </div>
        :
        <CartEmpty />
      }
    </div>
  )
}

export default CartPage
