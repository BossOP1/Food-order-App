import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navigation = useNavigate();
  
  const clickHandler = () => {
    navigation('/home')
  }
  
  return (
    <nav className='flex flex-col justify-around w-[100%] mx-auto pt-5 md:pt-10 md:flex-row'>
      
      {/* Logo Section */}
      <div className='flex justify-center items-center'>
        <p 
          onClick={clickHandler} 
          className='text-5xl h-20 w-20 bg-red-400 rounded-full flex justify-center items-center'
        >
          F
        </p>
        <span className='font-bold text-xl'>oodio</span>
      </div>
      
      {/* Menu Items */}
      <div className='flex flex-col ml-5 md:ml-0 md:items-center md:w-[50%] justify-evenly md:flex-row'>
        <p className='text-xl text-black font-extralight tracking-wider hover:border-b-2 border-red-400 transition duration-300 ease-in-out p-2 hover:scale-105'>
          <Link to='/home'>Home</Link>
        </p>
        <p className='text-xl text-black font-extralight tracking-wider hover:border-b-2 border-red-400 transition duration-300 ease-in-out p-2 hover:scale-105 '>
          <Link to='/menu'>Menu</Link>
        </p>
        <p className='text-xl text-black font-extralight tracking-wider hover:border-b-2 border-red-400 transition duration-300 ease-in-out p-2 hover:scale-105 '>
          <Link to='/aboutus'>About us</Link>
        </p>
        <p className='text-xl text-black font-extralight tracking-wider hover:border-b-2 border-red-400 transition duration-300 ease-in-out p-2 hover:scale-105'>
          <Link to='/orderonline'>OrderOnline</Link>
        </p>
        <p className='text-xl text-black font-extralight tracking-wider hover:border-b-2 border-red-400 transition duration-300 ease-in-out p-2 hover:scale-105'>
          <Link to='/reservation'>Reservation</Link>
        </p>
        <p className='text-xl text-black font-extralight tracking-wider hover:border-b-2 border-red-400 transition duration-300 ease-in-out p-2 hover:scale-105'>
          <Link to='/contact'>Contact US</Link>
        </p>
      </div>
      
      {/* Cart and Login Section */}
      <div className='flex flex-col mt-10 md:mt-0 md:flex-row md:justify-center md:items-center space-x-5'>
        <p className='text-2xl text-black font-extralight'>
          <Link to='/checkout'> 
            <FaShoppingCart/> 
          </Link> 
        </p>
        <button className='border px-5 py-3 bg-red-400 text-white rounded-xl'>
          Log In
        </button>
      </div>
      
    </nav>
  )
}

export default Navbar
