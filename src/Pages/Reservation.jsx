import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import ReservationImage from '../assets/Reservation-image.png'
import Footer from '../Component/Footer';
import BookingModal from '../Component/Modals/BookingModal';
import Confirmed from '../Component/Modals/Confirmed';


const dateOptionsList =[
  {label: "option1", value:"option1" },
  {label: "option2", value:"option2" },
  {label: "option3", value:"option3" },
];

const timeOptionsList =[
  {label: "option1", value:"option1" },
  {label: "option2", value:"option2" },
  {label: "option3", value:"option3" },
];

const partySizeOptionsList =[
  {label: "option1", value:"option1" },
  {label: "option2", value:"option2" },
  {label: "option3", value:"option3" },
];




const Reservation = () => {
const[selectedVal,setSelectedVal]= useState({Date:"",Time:"",partySize:""});
const[showModal,setShowModal] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;
  setSelectedVal(prevState => ({
    ...prevState,
    [name]: value
  }));
}
const submitHandler =(e)=>{
         e.preventDefault();
         console.log("button is clicked")
         setShowModal(true);
         
}

  return (
    <div className='min-h-[80vh]'>
      <Navbar/>
      <div className='flex flex-col justify-between my-[15vh] max-w-[80%] mx-auto md:flex-row'>
      
        <div className='md:w-[50%]'>
         
       <img src={ReservationImage} width={600} height={900} />
        </div>
        {showModal && <BookingModal onClose={()=> setShowModal(false)}/>}
       
        <div className=' flex flex-col justify-between md:items-start  '>
          <p className='text-5xl md:text-7xl font-bold my-10 '>Book a Table</p>
         <form className='flex flex-col space-y-10' onSubmit={submitHandler}>
        <select
        required
        className=' pr-[20vw] pl-[1vw] py-4 md:py-8 border-2 border-slate-400 rounded-2xl text-slate-400 text-sm  md:text-xl'
        placeholder='Date'
        name='Date'
        value={selectedVal.Date}
        onChange={handleChange}
        >
        <option value="">Date</option>
       {dateOptionsList.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
             ))}
              </select>

        <select
        required
        className=' pr-[20vw] pl-[1vw] py-4 md:py-8 border-2 border-slate-400 rounded-2xl text-slate-400 text-sm md:text-xl'
        placeholder='Time'
        name='Time'  
        onChange={handleChange}
        value={selectedVal.Time}
        >
          <option value="">Time</option>
          {timeOptionsList.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
             ))}
           </select>
        

        <select
        required
         className=' pr-[20vw] pl-[1vw] py-4 md:py-8 border-2 border-slate-400 rounded-2xl text-slate-400 text-sm  md:text-xl'
        placeholder='partySize'
        name='partySize'
        onChange={handleChange}
        value={selectedVal.partySize}
        >
            <option value="">Party Size</option>
          {partySizeOptionsList.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
             ))}
           </select>
         
           <button className=' mt-2 md:px-[11vw] md:py-8  py-5 border bg-red-400 rounded-2xl text-white text-2xl font-semibold'>Book Now</button>

         </form>
        </div>
      </div>

         <Footer/>

    </div>
  )
}

export default Reservation  