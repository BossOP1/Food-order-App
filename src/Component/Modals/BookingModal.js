import React, { useState } from 'react'
import { MdOutlineDateRange } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { useRef } from 'react';
import { useEffect } from 'react';
import Confirmed from './Confirmed';


const occasionList =[
    {label: "option1", value:"option1" },
    {label: "option2", value:"option2" },
    {label: "option3", value:"option3" },
  ];

function BookingModal({onClose}) {


  const[formData,setFormData] = useState({firstName:"",lastName:"",phoneNumber:"",occasion:"",request:"",email:""})
  const [showConfirmModal,setShowConfirmModal] = useState(false)



   const changeHandler = (e)=>{
     const{name,value}=e.target;
     setFormData(prevData=>({
        ...prevData,
        [name]:value
     }))
      
   }
   const submitHandler=((e=>{
      e.preventDefault();
      console.log(formData);
      setShowConfirmModal(true);
     
   }))

    const modalRef = useRef();

    const closeModal = (e)=>{
        if(modalRef.current === e.target){
            onClose();
            document.body.style.overflow = "auto";
        }
    }
    const openModal = () => {
        document.body.style.overflow = "hidden"; 
    };

    useEffect(() => {
        openModal();
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);


  return (
    <div ref={modalRef} onClick={closeModal} className=' fixed inset-0 h-full w-full bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center  '>
        <div className='max-h-[120vh] w-[80vw] overflow-y-auto py-[20vh] '>
        <div className='  h-[100vh] bg-white mt-10 rounded-3xl flex flex-col items-center justify-evenly m-10'>
        <div><p className='text-4xl font-bold'>Reservation</p></div>
        {showConfirmModal&& <Confirmed toClose={()=>setShowConfirmModal(false)}/>}
        <div><p className='p-6 px-10 bg-cyan-100 rounded-xl font-light  text-2xl w-full tracking-wide'>Due to limited availability, we can hold this table for you for 5:00 minutes</p></div>
        <div className='flex mx-auto w-[80%] justify-between'>
            <div className='w-[40%]'>
                <h1 className='text-2xl font-bold tracking-wide'>Data Order</h1>
                <form className='flex flex-col mt-5 space-y-6' onSubmit={submitHandler}>
             <input
              required
             className='border-2 border-slate-300 rounded-lg p-3 pr-10'
             placeholder='First Name'
             name='firstName'
             type="text"
             onChange={changeHandler}
             value={formData.firstName}
             />

            <input
             required
             className='border-2 border-slate-300 rounded-lg p-3 pr-10'
             placeholder='Last Name'
             type="text"
             name='lastName'
             onChange={changeHandler}
             value={formData.lastName}
             />

            <input
             required
             className='border-2 border-slate-300 rounded-lg p-3 pr-10'
             placeholder='Phone Number'
             type="number"
             name='phoneNumber'
             onChange={changeHandler}
             value={formData.phoneNumber}
             /> 

            <input
             required
             className='border-2 border-slate-300 rounded-lg p-3 pr-10'
             placeholder='Email'
             type="Email"
             name='email'
             onChange={changeHandler}
             value={formData.email}
             />

             <select
              required
              className='border-2 border-slate-300 rounded-lg p-3 pr-10'
             placeholder='Select an Occasion'
             name='occasion'
             onChange={changeHandler}
             value={formData.occasion}
             >
            <option value="">Select Occasion</option>
                {occasionList.map(occ=>(
             <option key={occ.value} value={occ.value}>{occ.label}</option>
                ))}
            
             </select>

            <input
             required
             className='border-2 border-slate-300 rounded-lg p-3 pr-10'
            placeholder='Add a special request'
            type='text'
            name='request'
            onChange={changeHandler}
            value={formData.request}
            />

            
            
            <button className='px-full bg-red-400 py-5 text-xl text-white rounded-2xl'>Confirm Reservation</button>
           
                </form>
            </div>
            <div className='flex  flex-col w-[50%] justify-between '>
                <div className='flex flex-col space-y-10 justify-around p-5 bg-gray-200 rounded-2xl'>
                    <div className='text-3xl font-semibold tracking-wider'>Reservation Detail</div>
                    <div className='flex flex-col space-y-8'>
                        <ul className='flex items-center text-2xl space-x-8 font-bold'><MdOutlineDateRange/> <p className='font-light'>Saturday, 28 february 2022</p></ul>
                        <ul className='flex items-center text-2xl space-x-8 font-bold'><FiClock/> <p className='font-light'>04:30 pm</p></ul>
                        <ul className='flex items-center text-2xl space-x-8 font-bold'><MdOutlinePeopleAlt/> <p className='font-light'>2 people (Standar seating)</p></ul>
                    </div>
                </div>
                <div className='flex flex-col space-y-8 p-8'>
                    <h1 className='text-3xl font-semibold tracking-wider '>Restaurant informations</h1>
                    <div>
                    <p className='w-full text-yellow-700 text-xl tracking-wide leading-8 '>Sed ut perspiciatis unde omnis iste natus error
                       sit voluptatem accusantium doloremque laudantium,
                         totam rem aperiam, eaque ipsa quae ab illo 
                        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        
       </div>
        </div>
      
        
      
    </div>
  )
}

export default BookingModal
