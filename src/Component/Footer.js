import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <div className='flex-col mt-20 w-screen min-h-[60vh] p-10 bg-zinc-900 justify-evenly justify-items-start md:flex-row'>
      <div className='flex flex-col mt-20 w-screen min-h-[60vh] p-10 bg-zinc-900 justify-evenly itpstart md:flex-row'>
        {/* leftsection */}
        <div className='flex flex-col space-y-5'>
       <div className='flex items-center space-x-1 text-3xl'>
        <div
        className='flex justify-center items-center w-20 h-20  text-white bg-red-400 rounded-[50%] text-5xl'><p>F</p></div>
        <span className='text-xl text-white font-semibold'>Foodio</span>
       </div>

       <div>
        <p className='text-white text-xl'>Viverra gravida morbi egestas facilisis <br/> tortor netus non duis tempor.</p>
       </div>

        <div className='flex space-x-3'>
            <button 
                onClick={() => { 
                window.location.href ='https://www.facebook.com/';}} 
                className='text-5xl text-white p-2'>
                <FaFacebook/>
                </button>
            <button 
              onClick={() => { 
                window.location.href ='https://www.instagram.com/';}} 
            className='text-5xl text-white p-2'>  <FaInstagram/>
            </button>

           <button  onClick={() => { 
                window.location.href ='https://twitter.com/?lang=en';}} 
           className='text-5xl text-white p-2'> <FaTwitter/>
           </button>
           
        </div>
        </div>

        {/* mid1 section */}
        <div className='flex flex-col '>
          <h2 className='text-red-400 font-bold text-3xl pb-6'>Page</h2>

            <p className='text-xl text-white  pb-2'><Link to='/home'>Home</Link></p>
            
             <p className='text-xl text-white  pb-2'><Link to='/menu'>Menu</Link></p>
            
              <p className='text-xl text-white  pb-2'><Link to='/orderonline'>OrderOnline</Link></p>
            
             <p className='text-xl text-white  pb-2'>Catering</p>
            
             <p className='text-xl text-white  pb-2'><Link to='/reservation'>Reservation</Link> </p>
         
        </div>
           

           {/* mid-2 section */}
        <div className='flex flex-col md:items-center'>
        <h2 className='text-red-400 font-bold text-3xl pb-6 '>Information</h2>

        <p   className='text-xl text-white pb-2  text-left '><Link to='/aboutus'> About-us</Link></p> 
            
            <p  className='text-xl text-white  pb-2 text-left '>Testimonial</p>
           
             <p  className='text-xl text-white  pb-2 text-left '>Event</p>
        </div>
        
          {/* right section */}
        <div className='flex flex-col'>
        <h2 className='text-red-400 font-bold text-3xl pb-6'>Get in touch</h2>
        <p className='text-xl text-white  pb-2' >
        3247 Johnson Ave, Bronx, NY 10463,<br/> Amerika Serikat
        </p>
        <p className='text-xl text-white  pb-2'>
        personabc@gmail.com
        </p>
        <p className='text-xl text-white  pb-2'>
        +123 4567 8901 
        </p>
        </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Footer