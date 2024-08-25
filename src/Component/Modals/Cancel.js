import React from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import image3 from "../../assets/confirmed1.png";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Cancel = () => {
    const navigate = useNavigate();

    const backHandler = () => {
        navigate(-1);
    }

    const clickHandler = () => {
        toast('Your Reservation has been Cancelled');
        navigate("/aboutus");
    }

    return (
        <div className='fixed inset-0 h-full w-full bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-4'>
            <div className='max-h-[90vh] w-full max-w-[80vw] md:max-w-[60vw] bg-white overflow-y-auto rounded-xl'>
                <div className='flex flex-col justify-evenly p-4 md:p-8'>
                    <button onClick={backHandler} className='text-right text-xl md:text-2xl px-2'>X</button>
                    <div className='text-center'>
                        <p className='text-2xl md:text-4xl font-bold pb-4 tracking-wide'>Reservation</p>
                    </div>

                    <div className='p-6 md:p-10 bg-orange-300 flex flex-col justify-evenly space-y-5 tracking-wide rounded-lg'>
                        <p className='text-2xl md:text-4xl font-semibold text-white'>Are you sure you want to cancel the reservation?</p>
                        <div className='flex flex-col justify-evenly text-white font-normal text-lg md:text-xl tracking-wide'>
                            <div className='flex items-center space-x-3'>
                                <CiCalendarDate />
                                <p>Booking ID: #123456</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row w-full justify-around items-center py-6 md:py-10'>
                        <div className='flex justify-center mb-6 md:mb-0'>
                            <div className='p-8 bg-amber-200 rounded-full'>
                                <div className='p-8 md:p-10 bg-amber-300 rounded-full'>
                                    <img width={150} height={150} className="md:w-[200px] md:h-[200px]" src={image3} alt="Cancellation" />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col space-y-6 md:space-y-10 justify-around p-5 rounded-2xl'>
                            <div className='text-xl md:text-3xl font-semibold tracking-wider'>Reservation Detail</div>
                            <div className='flex flex-col space-y-4 md:space-y-8'>
                                <ul className='flex items-center text-lg md:text-2xl space-x-4 md:space-x-8 font-bold'>
                                    <MdOutlineDateRange />
                                    <p className='font-light text-base md:text-xl'>Saturday, 28 February 2022</p>
                                </ul>
                                <ul className='flex items-center text-lg md:text-2xl space-x-4 md:space-x-8 font-bold'>
                                    <FiClock />
                                    <p className='font-light text-base md:text-xl'>04:30 pm</p>
                                </ul>
                                <ul className='flex items-center text-lg md:text-2xl space-x-4 md:space-x-8 font-bold'>
                                    <MdOutlinePeopleAlt />
                                    <p className='font-light text-base md:text-xl'>2 people (Standard seating)</p>
                                </ul>
                            </div>
                        </div>

                        <div className='flex flex-col space-y-4 md:space-y-4'>
                            <button onClick={clickHandler} className='px-12 py-6 md:px-20 md:py-10 bg-red-400 rounded-xl text-red-800 text-lg md:text-xl'>Cancel</button>
                            <button onClick={backHandler} className='px-12 py-6 md:px-20 md:py-10 bg-gray-300 rounded-xl text-gray-800 text-lg md:text-xl'>Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cancel;
