import React from 'react';
import Food1 from '../assets/Food1.png';

function Card({ item, buttonName, onButtonClick }) {
  const { image, name, description, price } = item;

  const handleButtonClick = () => {
    onButtonClick(item);
  };

  return (
    <div className='md:min-h-[50vh] md:w-[25vw] w-full flex flex-col space-y-6 justify-evenly items-center py-10 px-5 bg-slate-100 rounded-2xl'>
      <div><img src={Food1} width={90} height={90} alt={name} /></div>
      <div className='text-4xl font-semibold'>{name}</div>
      <div><p className='text-md tracking-wide leading-loose font-light text-center'>{description}</p></div>
      <div className='text-3xl text-red-400'>★★★★★</div>
      <div className='flex justify-between items-center w-full text-xl px-5'>
        <h1 className='text-2xl font-semibold'>${price}</h1>
        <button className='border text-white px-8 py-4 bg-red-400 rounded-2xl' onClick={handleButtonClick}>{buttonName}</button>
      </div>
    </div>
  );
}

export default Card;
