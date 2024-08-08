import React, { useState } from 'react';
import Header from '../components/home/Header';
import { PRODUCRS } from '../components/products';
import ProductItem from '../components/ProductItem';
import Fillter from '../components/home/Fillter';
import { BeatLoader } from 'react-spinners';
import { FaAngleDown } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const HomePage = () => {
  const [visibleItems, setVisibleItems] = useState(PRODUCRS.slice(0, 6));
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const Cart = useSelector((state) => state.shopping.Cart);
  const totalQuantity = Cart.reduce((total, item) => total + item.quantity, 0)

  const filteredProducts = PRODUCRS.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const loadMoreItems = async () => {
    setLoading(true);
    setError(null);

    const optimisticItems = [
      { id: 'temp1', name: 'Loading...' },
      { id: 'temp2', name: 'Loading...' },
      { id: 'temp3', name: 'Loading...' },
      { id: 'temp4', name: 'Loading...' },
    ];

    setVisibleItems((prevItems) => [...prevItems, ...optimisticItems]);

    try {
      const newItems = await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.3
            ? resolve(filteredProducts.slice(visibleItems.length, visibleItems.length + 4))
            : reject('Error loading items');
        }, 1000);
      });

      setVisibleItems((prevItems) => [
        ...prevItems.slice(0, -optimisticItems.length),
        ...newItems,
      ]);
    } catch (err) {
      setVisibleItems((prevItems) => prevItems.slice(0, -optimisticItems.length));
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setVisibleItems(filteredProducts.slice(0, 6));
  };

  return (
    <div className='flex justify-center bg-red-800 '>
      <div className='flex flex-col items-center gap-4 my-3 mx-6 w-[600px]'>
        <Header onSearch={handleSearchChange} />

        <div className='flex justify-between items-center w-full'>
          {totalQuantity > 0 &&
            <div className='flex flex-1 items-center gap-1 text-sm text-[#af3ba8] '>
              <p>{totalQuantity}</p>
              <p>در سبد‌خرید شما قرار دارد</p>
            </div>
          }
          <Fillter />
        </div>

        <div className='flex flex-wrap gap-7 w-full max-[642px]:justify-center'>
          {visibleItems.map((i) => (
            <ProductItem key={i.id} {...i} />
          ))}
        </div>

        {error && <div className='text-red-500'>{error}</div>}

        {visibleItems.length < filteredProducts.length && (
          <div className='w-full flex justify-center'>
            <button onClick={loadMoreItems} disabled={loading}>
              {loading ?
                <BeatLoader color='#9002d0' />
                :
                <div className='flex items-center gap-2 cursor-pointer pt-[7px]'>
                  <p className='text-[#9002d0]'>مشاهده بیشتر</p>
                  <FaAngleDown color='#9002d0' />
                </div>}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
