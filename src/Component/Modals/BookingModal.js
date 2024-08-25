import React, { useState, useRef, useEffect } from 'react';
import { MdOutlineDateRange } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import Confirmed from './Confirmed';

const occasionList = [
  { label: "Birthday", value: "birthday" },
  { label: "Anniversary", value: "anniversary" },
  { label: "Other", value: "other" },
];

function BookingModal({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    occasion: "",
    request: "",
    email: "",
  });
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowConfirmModal(true);
  };

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="w-[80vw] h-auto max-h-[90vh] overflow-y-auto bg-white rounded-3xl">
        <div className="p-10 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-5">Reservation</h1>
          {showConfirmModal && (
            <Confirmed toClose={() => setShowConfirmModal(false)} />
          )}
          {!showConfirmModal && (
            <>
              <p className="p-6 bg-cyan-100 rounded-xl font-light text-2xl tracking-wide mb-10">
                Due to limited availability, we can hold this table for you for
                5:00 minutes
              </p>
              <div className="flex flex-col w-full md:flex-row md:space-x-10">
                <div className="w-full md:w-[40%]">
                  <h2 className="text-2xl font-bold mb-5">Data Order</h2>
                  <form
                    className="flex flex-col space-y-6"
                    onSubmit={submitHandler}
                  >
                    <input
                      required
                      className="border-2 border-slate-300 rounded-lg p-3"
                      placeholder="First Name"
                      name="firstName"
                      type="text"
                      onChange={changeHandler}
                      value={formData.firstName}
                    />
                    <input
                      required
                      className="border-2 border-slate-300 rounded-lg p-3"
                      placeholder="Last Name"
                      type="text"
                      name="lastName"
                      onChange={changeHandler}
                      value={formData.lastName}
                    />
                    <input
                      required
                      className="border-2 border-slate-300 rounded-lg p-3"
                      placeholder="Phone Number"
                      type="tel"
                      name="phoneNumber"
                      onChange={changeHandler}
                      value={formData.phoneNumber}
                    />
                    <input
                      required
                      className="border-2 border-slate-300 rounded-lg p-3"
                      placeholder="Email"
                      type="email"
                      name="email"
                      onChange={changeHandler}
                      value={formData.email}
                    />
                    <select
                      required
                      className="border-2 border-slate-300 rounded-lg p-3"
                      name="occasion"
                      onChange={changeHandler}
                      value={formData.occasion}
                    >
                      <option value="">Select Occasion</option>
                      {occasionList.map((occ) => (
                        <option key={occ.value} value={occ.value}>
                          {occ.label}
                        </option>
                      ))}
                    </select>
                    <input
                      required
                      className="border-2 border-slate-300 rounded-lg p-3"
                      placeholder="Add a special request"
                      type="text"
                      name="request"
                      onChange={changeHandler}
                      value={formData.request}
                    />
                    <button className="bg-red-400 text-white text-xl py-3 rounded-lg">
                      Confirm Reservation
                    </button>
                  </form>
                </div>
                <div className="flex flex-col w-full md:w-[50%] space-y-10">
                  <div className="bg-gray-200 p-5 rounded-2xl">
                    <h2 className="text-3xl font-semibold mb-5">
                      Reservation Detail
                    </h2>
                    <ul className="space-y-5 text-2xl">
                      <li className="flex items-center space-x-5">
                        <MdOutlineDateRange />{" "}
                        <p className="font-light">Saturday, 28 February 2022</p>
                      </li>
                      <li className="flex items-center space-x-5">
                        <FiClock /> <p className="font-light">04:30 pm</p>
                      </li>
                      <li className="flex items-center space-x-5">
                        <MdOutlinePeopleAlt />{" "}
                        <p className="font-light">2 people (Standard seating)</p>
                      </li>
                    </ul>
                  </div>
                  <div className="p-8">
                    <h2 className="text-3xl font-semibold mb-5">
                      Restaurant Information
                    </h2>
                    <p className="text-xl text-yellow-700 leading-8">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
