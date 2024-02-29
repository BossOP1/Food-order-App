import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import { FaChevronLeft } from "react-icons/fa";


import Footer from '../Component/Footer';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const CheckOut = () => {

  const[formData,setFormData] = useState({firstName:"",lastName:"",Address:"",phoneNumber:"",message:"",email:"",mode:""})

  const changeHandler = (e)=>{
    const{name,value}=e.target;
    setFormData(prevData=>({
       ...prevData,
       [name]:value
    }))
  }
  const navigation = useNavigate();
  const backHandler = ()=>{
      navigation(-1);
  }

const submitHandler = (e)=>{
  e.preventDefault();
  toast("Thanks! your order has been placed")
  console.log(formData);
  setTimeout(() => {
    navigation('/home');
  }, 5000);
  
  navigation('/home')
}

  return (
    <div className=''>
    <Navbar/>
     <div className='w-[80%] flex justify-center  mx-auto my-[15vh] '>
      <div className=''> <button onClick={backHandler} className='text-2xl bg-zinc-950 text-white  p-3 rounded-full' ><FaChevronLeft/></button></div>


      <div className='flex flex-col mx-auto bg-slate-100 justify-evenly p-10 h-full space-y-5 rounded-3xl '>
        <h1 className='text-center text-4xl font-semibold leading-relaxed tracking-wider'>Checkout</h1>
      <form onSubmit={submitHandler} className='flex flex-col space-y-7'>
      <div className='flex w-full flex-col'>
        
      <label className='text-xl leading-relaxed p-2'>Shipping Address</label>
     <div className='flex w-full space-x-5 justify-between  '>
      
     <input 
          
              required
             className='border-2 border-slate-300 rounded-lg p-3 pr-[20vw] w-[100%]'
             placeholder='Address'
             name='Address'
             type="text"
             onChange={changeHandler}
             value={formData.Address}
             />
<button onClick={() => setTimeout(() => toast('not able to find your location. Please type your location manually'), 3000)} className='py-3 px-10 bg-blue-500 rounded-xl text-white'>current location</button>
      </div>
     </div>
     

      <div className='flex flex-col text-xl space-y-3'>
        <label className=''>Customer Data</label>
        <div className='flex w-full justify-between space-x-2'>
        <input
              required
             className='border-2 border-slate-300 rounded-lg p-3 w-full '
             placeholder='First Name'
             name='firstName'
             type="text"
             onChange={changeHandler}
             value={formData.firstName}
             />

            <input
             required
             className='border-2 border-slate-300 rounded-lg p-3 w-full'
             placeholder='Last Name'
             type="text"
             name='lastName'
             onChange={changeHandler}
             value={formData.lastName}
             />
        </div>

        <div className='flex justify-between space-x-2'>
        <input
             required
             className='border-2 border-slate-300 rounded-lg p-3 w-full'
             placeholder='Phone Number'
             type="number"
             name='phoneNumber'
             onChange={changeHandler}
             value={formData.phoneNumber}
             /> 

           <input
             required
             className='border-2 border-slate-300 rounded-lg p-3 w-full'
             placeholder='Email'
             type="email"
             name='email'
             onChange={changeHandler}
             value={formData.email}
             />

        </div>
        <div className='w-full'>
        <input
             required
             className='border-2 border-slate-300 rounded-lg p-3 w-full'
            placeholder='message'
            type='text'
            name='message'
            onChange={changeHandler}
            value={formData.message}
            />
        </div>
      </div>



<div className='flex flex-col space-y-2 w-full '>
  <label className='text-xl '>Payment Method</label>
  <div className='flex items-center space-x-4 '>

    <div className=''>
    <input
             required
            type='radio'
            name='mode'
            id='cod'
            onChange={changeHandler}
            value="cod"
            checked={formData.mode  === "cod"}
      

            />
  <label className='text-xl pl-2' htmlFor='cod'>Cash on Delievery</label>
    </div>

<div>
<input
             required
             className=''
            type='radio'
            id='upi'
            name='mode'
            onChange={changeHandler}
            value="upi"
            checked={formData.mode  === "upi"}
            />
             <label className='text-xl pl-2 ' htmlFor='upi'>UPI</label>
  </div>

</div>


</div>
      
     <button className='p-3 text-xl border bg-red-400 rounded-2xl text-white font-semibold'>Order Now</button>
      </form>
      </div>
     
     </div>
      <Footer/>
    </div>
  )
}

export default CheckOut