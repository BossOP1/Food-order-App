import React from 'react'
import { CiSquareCheck } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import image3 from "../../assets/confirmed1.png"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import Cancel from './Cancel';


const Confirmed = ({toClose}) => {

    const [showCancelModal,setShowCancelModal] = useState(false)

   const cancelHandler = ()=>{
      setShowCancelModal(true);
   }


    const navigate = useNavigate();
const submitHandler = ()=>{
  navigate('/aboutus');
}
const clickHandler = ()=>{
   toast('no code applied please click on cross or On Cancel')
}
  return (
    <div className=' fixed inset-0 h-full w-full bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center  '>
       
        <div  className='max-h-[90vh] w-[80vw] bg-white overflow-y-auto '>
            {showCancelModal && <Cancel/>}
            <div className='flex flex-col justify-evenly'>
            <button onClick={submitHandler} className='text-right text-2xl px-2'>X</button>
            <div className='text-center'><p className='text-4xl font-bold pb-4 tracking-wide'>Reservation</p></div>

                <div className='p-10 bg-emerald-400 flex justify-evenly flex-col space-y-5 tracking-wide'>
                    <p className='text-4xl font-semibold text-white'>Reservation has been confirmed</p>
                    <div className='flex flex-col justify-evenly text-white font-normal text-xl tracking-wide'>
                        <div className='flex  items-center text space-x-3'><CiSquareCheck/>  <p>The confirmation result has been sent to your email</p></div>
                  
                  <div className='flex  items-center space-x-3'><CiCalendarDate/>  <p>Booking ID : #123456</p></div>
                    </div>
                </div>

                <div className='flex w-[100%]  justify-around items-center py-10'>
                    <div>
                    <div className='p-10 bg-amber-200 rounded-full'>
            <div className='p-10 bg-amber-300 rounded-full'>
          <img  width={200} height={200} src={image3}/>
            </div>
            </div>
                    </div>
                    <div>
                    <div className='flex flex-col space-y-10 justify-around p-5  rounded-2xl'>
                    <div className='text-3xl font-semibold tracking-wider'>Reservation Detail</div>
                    <div className='flex flex-col space-y-8'>
                        <ul className='flex items-center text-4xl space-x-8 font-bold'><MdOutlineDateRange/> <p className='font-light text-xl'>Saturday, 28 february 2022</p></ul>
                        <ul className='flex items-center text-4xl space-x-8 font-bold'><FiClock/> <p className='font-light text-xl'>04:30 pm</p></ul>
                        <ul className='flex items-center text-4xl space-x-8 font-bold'><MdOutlinePeopleAlt/> <p className='font-light text-xl'>2 people (Standar seating)</p></ul>
                    </div>
                </div>
                    </div>
                    <div className='flex flex-col justify-evenly space-y-4'>
                        <button onClick={clickHandler}  className='px-20 py-10 bg-sky-300 rounded-xl text-sky-800 text-xl'>Modify</button>
                        <button onClick={cancelHandler} className='px-20 py-10 bg-red-300 rounded-xl text-red-800 text-xl'>cancel</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Confirmed