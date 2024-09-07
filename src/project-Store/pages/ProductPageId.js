import React from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCRS } from '../components/products'
import ProductItem from '../components/home/ProductItem'

const ProductPageId = () => {
    const { id } = useParams()
    const productId = parseInt(id, 10); // تبدیل id به عدد  
    // const priceNumber = Number(price)

    return (
        <div className=''>
            {PRODUCRS.map((i) => {
                if (i.id === productId) {
                    return (
                        <div className='flex flex-col w-[20%]'>
                            <div className='flex justify-center items-center h-[105px]'>
                                {i.img ?
                                    <img src={i.img} alt={i.name} className='bg-cover bg-fixed w-[90px] h-[100px]' />
                                    : null
                                }
                            </div>

                            <div className='flex flex-col h-[48px]'>
                                <p className='text-[#9002d0] font-YekanBakhRegular'>{i.name}</p>
                                {i.price &&
                                    <div className='flex justify-end gap-1'>
                                        {/* <p className='text-[#cd8fce]'>{priceN.toLocaleString()}</p> */}
                                        <p className='text-[#cd8fce]'>تومان</p>
                                    </div>
                                }
                            </div>
                        </div>

                    )
                }
            })}
        </div>
    )
}

export default ProductPageId
