import React, { useState } from 'react';
import { CiSquareCheck, CiCalendarDate } from "react-icons/ci";
import { MdOutlineDateRange, MdOutlinePeopleAlt } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import image3 from "../../assets/confirmed1.png";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Cancel from './Cancel';

const Confirmed = ({ toClose }) => {
    const [showCancelModal, setShowCancelModal] = useState(false);
    const navigate = useNavigate();

    const cancelHandler = () => {
        setShowCancelModal(true);
    }

    const submitHandler = () => {
        navigate('/aboutus');
    }

    const clickHandler = () => {
        toast('No code applied. Please click on the cross or Cancel');
    }

    return (
        <div className='fixed inset-0 h-full w-full bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-4'>
            <div className='max-h-[90vh] w-full max-w-[80vw] md:max-w-[60vw] bg-white overflow-y-auto rounded-xl'>
                {showCancelModal && <Cancel />}
                <div className='flex flex-col justify-evenly p-4 md:p-8'>
                    <button onClick={submitHandler} className='text-right text-xl md:text-2xl px-2'>X</button>
                    <div className='text-center'>
                        <p className='text-2xl md:text-4xl font-bold pb-4 tracking-wide'>Reservation</p>
                    </div>

                    <div className='p-6 md:p-10 bg-emerald-400 flex flex-col justify-evenly space-y-5 tracking-wide rounded-lg'>
                        <p className='text-2xl md:text-4xl font-semibold text-white'>Reservation has been confirmed</p>
                        <div className='flex flex-col justify-evenly text-white font-normal text-lg md:text-xl tracking-wide'>
                            <div className='flex items-center space-x-3'>
                                <CiSquareCheck />
                                <p>The confirmation result has been sent to your email</p>
                            </div>
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
                                    <img width={150} height={150} className="md:w-[200px] md:h-[200px]" src={image3} alt="Confirmation" />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col space-y-6 md:space-y-10 justify-around p-5 rounded-2xl'>
                            <div className='text-xl md:text-3xl font-semibold tracking-wider'>Reservation Detail</div>
                            <div className='flex flex-col space-y-4 md:space-y-8'>
                                <ul className='flex items-center text-xl md:text-2xl space-x-4 md:space-x-8 font-bold'>
                                    <MdOutlineDateRange />
                                    <p className='font-light text-base md:text-xl'>Saturday, 28 February 2022</p>
                                </ul>
                                <ul className='flex items-center text-xl md:text-2xl space-x-4 md:space-x-8 font-bold'>
                                    <FiClock />
                                    <p className='font-light text-base md:text-xl'>04:30 pm</p>
                                </ul>
                                <ul className='flex items-center text-xl md:text-2xl space-x-4 md:space-x-8 font-bold'>
                                    <MdOutlinePeopleAlt />
                                    <p className='font-light text-base md:text-xl'>2 people (Standard seating)</p>
                                </ul>
                            </div>
                        </div>

                        <div className='flex flex-col space-y-4'>
                            <button onClick={clickHandler} className='px-12 py-6 md:px-20 md:py-10 bg-sky-300 rounded-xl text-sky-800 text-lg md:text-xl'>Modify</button>
                            <button onClick={cancelHandler} className='px-12 py-6 md:px-20 md:py-10 bg-red-300 rounded-xl text-red-800 text-lg md:text-xl'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirmed;
