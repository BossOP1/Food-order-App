import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Component/Card';
import data from '../data.json';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const Menu = () => {
  const { restaurant } = data;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const categories = ['all', ...Object.keys(restaurant.menu).slice(0, 4)];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const getFilteredItems = () => {
    if (selectedCategory === 'all') {
      return Object.values(restaurant.menu).flat();
    }
    return restaurant.menu[selectedCategory];
  };

  const moveToOrderPage = (item) => {
    console.log('Order Now clicked for:', item);
    navigate('/orderOnline');
  };

  return (
    <div className='box-border'>
      <Navbar />
      <div className='relative min-h-[160vh] flex flex-col justify-evenly items-center md:w-[80vw] mx-auto my-20 space-y-8'>
        <div>
          <h1 className='  text-4xl md:text-6xl font-semibold tracking-wider text-zinc-800 leading-relaxed p-10'>Our Popular Menu</h1>
        </div>
        <div className='relative h-full w-full flex-col justify-between space-y-5 md:space-y-0 md:space-x-7 md:flex-row'>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`border py-5 w-[100%] md:w-auto md:px-16 md:py-4 rounded-2xl text-xl font-light ${selectedCategory === category ? 'bg-red-400 text-white' : 'bg-gray-200'} tracking-wide`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className='w-auto flex flex-wrap items-center gap-7'>
          {getFilteredItems().map(item => (
            <Card key={item.id} item={item} buttonName="Order Now" onButtonClick={moveToOrderPage} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
