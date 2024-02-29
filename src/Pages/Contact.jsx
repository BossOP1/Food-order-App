import React from 'react'
import Navbar from '../Component/Navbar'
import { useState } from 'react'
import mapImg from '../assets/map.jpeg'
import Footer from '../Component/Footer'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const Contact = () => {


  const[formData,setFormData] = useState({firstName:"",lastName:"",phoneNumber:"",request:"",email:""})

  const changeHandler = (e)=>{
    const{name,value}=e.target;
    setFormData(prevData=>({
       ...prevData,
       [name]:value
    }))
     
  }
   const navigate = useNavigate();
  const submitHandler =()=>{
    toast('Thank You. Your Valuable feedback has been submitted');
      navigate('/aboutus')
  }

  return (

    <div>
     <Navbar/>
     <div className='w-[80vw] mx-auto my-10 flex flex-col space-y-10 justify-evenly items-center '>
     
     
     <div><h1 className='text-8xl text-zinc-700 font-semibold tracking-wider leading-snug'>Contact us</h1></div>
     <div><p className='text-3xl text-zinc-600  text-center font-light tracking-wide liading-relaxed space-y-10'>We love hearing from our customers. Feel free to share your experience or ask any questions you may have.</p></div>
     <div className='flex justify-between space-x-[5vw]'>
      <div className='w-[500px] h-[500px]  '><img className='rounded-xl' src={mapImg} /></div>
      <div className=''>
        <form onSubmit={submitHandler} className='flex justify-evenly space-y-8 flex-col'>
        
      <input
              required
             className='border-2 border-slate-300 rounded-lg pl-5 pr-[20vw]  py-7 text-xl'
             placeholder='First Name'
             name='firstName'
             type="text"
             onChange={changeHandler}
             value={formData.firstName}
             />

            <input
             required
             className='border-2  border-slate-300 rounded-lg p-3 pl-5 pr-[20vw]  py-7 text-xl'
             placeholder='Last Name'
             type="text"
             name='lastName'
             onChange={changeHandler}
             value={formData.lastName}
             />

             <input
             required
             className='border-2 border-slate-300 rounded-lg p-3 pl-5 pr-[20vw]  py-7 text-xl'
             placeholder='Email'
             type="Email"
             name='email'
             onChange={changeHandler}
             value={formData.email}
             />



            <input
             required
             className='border-2 border-slate-300 rounded-lg p-3 pl-5 pr-[20vw]  py-7 text-xl'
             placeholder='Subject'
             type="text"
             name='phoneNumber'
             onChange={changeHandler}
             value={formData.phoneNumber}
             /> 

         
            <input
             required
             className='border-2 border-slate-300 rounded-lg pl-5 pr-[20vw]  py-7 text-xl'
            placeholder='Message'
            type='dialog'
            name='request'
            onChange={changeHandler}
            value={formData.request}
            />

            
            
            <button className='px-full bg-red-400   py-7 text-xl text-white rounded-2xl'>Submit</button>
           

        </form></div>
     </div>
     
    </div>
       
       <Footer/>

    </div>
   
  )
}

export default Contact