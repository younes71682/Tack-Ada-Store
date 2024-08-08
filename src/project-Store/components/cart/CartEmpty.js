import empty_Cart from '../../assets/images/empty_Cart.png'
const CartEmpty = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-red-800 mx-6  gap-10'>

      <img src={empty_Cart} alt='Empty' className='w-full' />

      <div className='flex flex-col items-center gap-2 text-center'>
        <h3 className='text-xl text-[#8d04d0] font-bold'>سبد خرید شما خالی است.</h3>
        <p className='text-[#cd8fce]'>می‌توانید با مراجعه به صفحه اصلی، آموزش مورد نظر خود را انتخاب کنید.</p>
      </div>


    </div>
  )
}

export default CartEmpty
