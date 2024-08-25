import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import mapImg from '../assets/map.jpeg';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    request: "",
    email: ""
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    toast('Thank You. Your Valuable feedback has been submitted');
    navigate('/aboutus');
  };

  return (
    <div>
      <Navbar />
      <div className='md:w-[80vw] mx-auto my-10 flex flex-col space-y-10 justify-evenly items-center'>
        <div>
          <h1 className='text-5xl md:text-8xl text-zinc-700 font-semibold tracking-wider leading-snug'>Contact us</h1>
        </div>
        <div>
          <p className='text-2xl md:text-3xl text-zinc-600 text-center font-light tracking-wide leading-relaxed'>
            We love hearing from our customers. Feel free to share your experience or ask any questions you may have.
          </p>
        </div>
        <div className='flex flex-col justify-evenly md:justify-between md:space-x-[5vw] md:flex-row'>
          <div className='w-[90vw] md:w-[500px] md:h-[500px] my-10'>
            <img className='rounded-xl w-full h-full object-cover' src={mapImg} alt="Map" />
          </div>
          <div className='w-full md:w-auto'>
            <form onSubmit={submitHandler} className='flex flex-col space-y-8'>
              <input
                required
                className='border-2 border-slate-300 rounded-lg pl-5 py-3 md:py-7 text-sm md:text-xl w-full'
                placeholder='First Name'
                name='firstName'
                type="text"
                onChange={changeHandler}
                value={formData.firstName}
              />

              <input
                required
                className='border-2 border-slate-300 rounded-lg pl-5 py-3 md:py-7 text-sm md:text-xl w-full'
                placeholder='Last Name'
                type="text"
                name='lastName'
                onChange={changeHandler}
                value={formData.lastName}
              />

              <input
                required
                className='border-2 border-slate-300 rounded-lg pl-5 py-3 md:py-7 text-sm md:text-xl w-full'
                placeholder='Email'
                type="email"
                name='email'
                onChange={changeHandler}
                value={formData.email}
              />

              <input
                required
                className='border-2 border-slate-300 rounded-lg pl-5 py-3 md:py-7 text-sm md:text-xl w-full'
                placeholder='Subject'
                type="text"
                name='phoneNumber'
                onChange={changeHandler}
                value={formData.phoneNumber}
              />

              <input
                required
                className='border-2 border-slate-300 rounded-lg pl-5 py-3 md:py-7 text-sm md:text-xl w-full'
                placeholder='Message'
                type='text'
                name='request'
                onChange={changeHandler}
                value={formData.request}
              />

              <button type="submit" className='bg-red-400 py-4 md:py-7 text-xl text-white rounded-2xl w-full'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
