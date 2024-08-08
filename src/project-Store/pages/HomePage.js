import React, { useEffect, useState } from 'react';
import Header from '../components/home/Header';
import { PRODUCRS } from '../components/products';
import ProductItem from '../components/ProductItem';
import Fillter from '../components/home/Fillter';
import { BeatLoader } from 'react-spinners';
import { FaAngleDown, FaArrowCircleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const [visibleItems, setVisibleItems] = useState(PRODUCRS.slice(0, 6));
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [isVisibleButtonUp, setIsVisibleButtonUp] = useState(false);

  const Cart = useSelector((state) => state.shopping.Cart);
  const totalQuantity = Cart.reduce((total, item) => total + item.quantity, 0);

  // فیلتر کردن محصولات بر اساس جستجو
  const filteredProducts = PRODUCRS.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // بارگذاری آیتم‌های بیشتر
  const loadMoreItems = async () => {
    setLoading(true);

    // وضعیت بارگذاری فیک
    const optimisticItems = Array.from({ length: 4 }, (_, index) => ({
      id: `temp-${index}`,
      name: 'Loading...',
    }));
    setVisibleItems(prevItems => [...prevItems, ...optimisticItems]);

    try {
      const newItems = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(filteredProducts.slice(visibleItems.length, visibleItems.length + 4));
        }, 1000);
      });

      // جایگزینی آیتم‌های فیک با آیتم‌های واقعی
      setVisibleItems(prevItems => [
        ...prevItems.slice(0, prevItems.length - optimisticItems.length),
        ...newItems,
      ]);
    } catch (err) {
      // خطا مدیریت نمی‌شود
    } finally {
      setLoading(false); // وضعیت بارگذاری همیشه به‌روز می‌شود
    }
  };


  // اسکرول به بالا
  const handleMoveUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY > 160) {
      setIsVisibleButtonUp(true);
    } else {
      setIsVisibleButtonUp(false);
    }
  };

  useEffect(() => {
    setVisibleItems(filteredProducts.slice(0, 6));
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [searchQuery,]);

  return (
    <div className="flex justify-center">
      {isVisibleButtonUp && (
        <div className='cursor-pointer fixed right-80 bottom-14' onClick={handleMoveUp}>
          <FaArrowCircleUp color='#9002d0' size={35} />
        </div>
      )}

      <div className="flex flex-col items-center gap-4 my-3 mx-6 w-[600px]">
        <Header onSearch={setSearchQuery} />

        <div className="flex justify-between items-center w-full">
          {totalQuantity > 0 && (
            <div className="flex flex-1 items-center gap-1 text-sm text-[#af3ba8]">
              <p>{totalQuantity}</p>
              <p>محصول در سبد‌خرید شما قرار دارد</p>
            </div>
          )}
          <Fillter />
        </div>

        <div className="flex flex-wrap gap-11 w-full max-[642px]:justify-center">
          {visibleItems.map(item => (
            <ProductItem key={item.id} {...item} />
          ))}
        </div>

        <div className="w-full flex justify-center">
          {visibleItems.length < filteredProducts.length && (
            <button onClick={loadMoreItems} disabled={loading}>
              {loading ? (
                <BeatLoader color="#9002d0" />
              ) : (
                <div className="flex items-center gap-2 cursor-pointer ">
                  <p className="text-[#9002d0]">مشاهده بیشتر</p>
                  <FaAngleDown color="#9002d0" />
                </div>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
