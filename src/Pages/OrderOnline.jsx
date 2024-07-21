import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Card from '../Component/Card';
import data from '../data2.json';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const OrderOnline = () => {
  const { restaurant } = data;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [orderData, setOrderData] = useState({});

  const categories = ['all', ...Object.keys(restaurant.menu).slice(1)];

  const getFilteredItems = () => {
    if (selectedCategory === 'all') {
      return Object.values(restaurant.menu).flat();
    }
    return restaurant.menu[selectedCategory] || [];
  };

  const settingFunction = (item) => {
    setOrderData((prevData) => {
      const itemName = item.name;
      const itemPrice = item.price;
      return {
        ...prevData,
        [itemName]: prevData[itemName]
          ? { ...prevData[itemName], quantity: prevData[itemName].quantity + 1 }
          : { quantity: 1, price: itemPrice }
      };
    });
  };

  const increaseQuantity = (itemName) => {
    setOrderData((prevData) => ({
      ...prevData,
      [itemName]: { ...prevData[itemName], quantity: prevData[itemName].quantity + 1 }
    }));
  };

  const decreaseQuantity = (itemName) => {
    setOrderData((prevData) => {
      if (prevData[itemName].quantity === 1) {
        const newData = { ...prevData };
        delete newData[itemName];
        return newData;
      }
      return {
        ...prevData,
        [itemName]: { ...prevData[itemName], quantity: prevData[itemName].quantity - 1 }
      };
    });
  };

  const clickFilterHandler = (category) => {
    setSelectedCategory(category);
  };

  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/checkout');
  };

  const calculateTotal = () => {
    const subtotal = Object.values(orderData).reduce((acc, item) => acc + item.quantity * item.price, 0);
    const taxFee = 3.5;
    const voucher = 5.0;
    return {
      subtotal,
      total: subtotal + taxFee - voucher,
      taxFee,
      voucher,
    };
  };

  const { subtotal, total, taxFee, voucher } = calculateTotal();

  return (
    <div>
      <Navbar />
      <div className='flex'>
        <div className='relative min-h-[100vh] flex flex-col justify-evenly items-center w-[80vw] mx-auto my-20 space-y-8'>
          <div>
            <h1 className='text-7xl font-semibold tracking-wider text-zinc-800 leading-relaxed p-10'>Menu</h1>
          </div>
          <div className='relative h-full w-full flex justify-between space-x-7'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => clickFilterHandler(category)}
                className={`border px-16 py-4 rounded-2xl text-xl font-light ${
                  selectedCategory === category ? 'bg-red-400 text-white' : 'bg-gray-200'
                } tracking-wide`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className='flex'>
            <div className='w-full flex flex-wrap gap-7'>
              {getFilteredItems().map((item) => (
                <Card key={item.id} item={item} buttonName="Add to Cart" onButtonClick={settingFunction} />
              ))}
            </div>
            <div className='w-[40%]'>
              <div className='text-4xl text-center font-bold p-6 border-b-4'>Order list</div>
              <div className='flex flex-col pt-8 space-y-5 py-10 border-b-2'>
                {Object.entries(orderData).map(([name, { quantity, price }]) => (
                  <ul key={name} className='flex flex-col space-y-2'>
                    <h1 className='text-3xl font-semibold'>{name}</h1>
                    <div className='flex w-full justify-between items-center text-2xl'>
                      <button onClick={() => decreaseQuantity(name)} className='p-1 bg-gray-300 rounded'>-</button>
                      <p>{quantity}</p>
                      <button onClick={() => increaseQuantity(name)} className='p-1 bg-gray-300 rounded'>+</button>
                      <p>${(quantity * price).toFixed(2)}</p>
                    </div>
                  </ul>
                ))}
              </div>

              <div className='space-y-5 py-10 border-b-2'>
                <h1 className='text-3xl font-bold'>Voucher Code</h1>
                <div className='flex w-full justify-between items-center text-xl'>
                  <p>${voucher.toFixed(2)}</p>
                  <button
                    onClick={() => toast('Voucher already applied!')}
                    className='p-2 bg-blue-500 text-white rounded-xl text-sm'
                  >
                    Apply
                  </button>
                </div>
              </div>
              <div className='flex flex-col pt-10 text-xl space-y-4'>
                <ul className='flex w-full justify-between'>
                  <p className='font-semibold'>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </ul>
                <ul className='flex w-full justify-between'>
                  <p className='font-semibold'>Tax fee</p>
                  <p>${taxFee.toFixed(2)}</p>
                </ul>
                <ul className='flex w-full justify-between'>
                  <p className='font-semibold'>Voucher</p>
                  <p>${voucher.toFixed(2)}</p>
                </ul>
                <ul className='flex w-full justify-between'>
                  <p className='font-semibold'>Total</p>
                  <p>${total.toFixed(2)}</p>
                </ul>
                <button
                  onClick={clickHandler}
                  className='mt-5 w-full p-2 bg-red-400 rounded-xl text-lg text-white'
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderOnline;
