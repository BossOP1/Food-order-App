import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import i1 from '../assets/Food1.png'
import i2 from '../assets/food2.png'
import i3 from '../assets/food3.png'
import i4 from '../assets/food4.png'
import i5 from '../assets/food5.png'
import i6 from '../assets/food6.png'
import Footer from '../Component/Footer';
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const Menu = () => {
  const[orderData,setOrderData] = useState({item1value:0,item2Value:0, item3Value:0,})

  const minusHandler = (itemName) => {
    setOrderData((prevData) => ({
      ...prevData,
      [itemName]: Math.max(prevData[itemName] - 1, 0),
    }));
  };


  const plusHandler = (itemName) => {
    setOrderData((prevData) => ({
      ...prevData,
      [itemName]: prevData[itemName] + 1,
    }));
  };

  const navigation = useNavigate();
const clickHandler = ()=>{
     navigation('/checkout')
}

  
  return (
    <div>
      <Navbar/>

      <div className='relative min-h-[140vh]  flex flex-col justify-evenly items-center w-[80vw] mx-auto my-20 space-y-8'>
        <div><h1 className='text-7xl font-semibold tracking-wider text-zinc-800 leading-relaxed p-10'>Menu</h1></div>
        <div className=' relative h-full w-full flex justify-between space-x-7'>
          <button onClick={()=>{toast("more content to be added soon")}}  className='border px-16 py-4 rounded-2xl text-xl font-semibold bg-red-400 text-white '>All Category</button>
          <button onClick={()=>{toast("more content to be added soon")}}  className='border px-16 py-4 rounded-2xl text-xl font-light bg-gray-200 tracking-wide'>Pasta</button>
          <button onClick={()=>{toast("more content to be added soon")}}  className='border px-16 py-4 rounded-2xl text-xl font-light bg-gray-200 tracking-wide'>Pizza</button>
          <button onClick={()=>{toast("more content to be added soon")}}  className='border px-16 py-4 rounded-2xl text-xl font-light bg-gray-200 tracking-wide'>Dessert</button>
          <button onClick={()=>{toast("more content to be added soon")}}  className='border px-16 py-4 rounded-2xl text-xl font-light bg-gray-200 tracking-wide'>Drink</button>
        </div>
        <div className=' relative flex gap-4 '>
          <div className='flex flex-wrap gap-4  '>
          <div className='max-h-[50vh] w-[18vw] flex flex-col space-y-2 justify-evenly items-center py-5 px-2 bg-slate-100 rounded-xl'>
            <div className=''><img src={i1} width={150} height={150}/></div>
          <div className='text-2xl font-semibold'>Spaghetti</div>
          <div ><p className='text-sm tracking- leading- font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p></div>
          <div className='text-xl text-red-400'>★★★★★</div>
          <div className='flex justify-between items-center w-full text-xl px-5'>
            <h1 className='text-lg font-semibold'>$12.05</h1>
        
            <div className='border  bg-red-400 rounded-xl flex space-x-1'>
            <button className='text-sm px-1 text-white' onClick={() => minusHandler('item1value')}><FaMinus/></button>
          <p className='text-sm px-1 text-white'>{orderData.item1value}</p>
          <button className='text-sm px-1 text-white' onClick={() => plusHandler('item1value')}><FaPlus/></button>
            </div>
         

          </div>
          
          </div>

          <div className='max-h-[50vh] w-[18vw] flex flex-col space-y-2 justify-evenly items-center py-5 px-2 bg-slate-100 rounded-xl'>
          <div className=''><img src={i2} width={150} height={150}/></div>
          <div className='text-2xl font-semibold'>Gnocchi</div>
          <div ><p className='text-sm tracking- leading- font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p></div>
          <div className='text-xl text-red-400'>★★★★★</div>
          <div className='flex justify-between items-center w-full text-xl px-5'>
            <h1 className='text-lg font-semibold '>$12.05</h1>

            <div className='border  bg-red-400 rounded-xl flex space-x-1'>
            <button className='text-sm px-1 text-white' onClick={() => minusHandler('item2Value')}><FaMinus/></button>
          <p className='text-sm px-1 text-white'>{orderData.item2Value}</p>
          <button className='text-sm px-1 text-white' onClick={() => plusHandler('item2Value')}><FaPlus/></button>
            </div>

            
          </div>
          
          </div>

          <div className='max-h-[50vh] w-[18vw] flex flex-col space-y-2 justify-evenly items-center py-5 px-2 bg-slate-100 rounded-xl'>
          <div className=''><img src={i3} width={150} height={150}/></div>
          <div className='text-2xl font-semibold'>Rovioli</div>
          <div ><p className='text-sm tracking- leading- font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p></div>
          <div className='text-xl text-red-400'>★★★★★</div>
          <div className='flex justify-between items-center w-full text-xl px-5'>
            <h1 className='text-lg font-semibold'>$12.05</h1>
           
            <div className='border  bg-red-400 rounded-xl flex space-x-1'>
            <button className='text-sm px-1 text-white' onClick={() => minusHandler('item3Value')}><FaMinus/></button>
          <p className='text-sm px-1 text-white'>{orderData.item3Value}</p>
          <button className='text-sm px-1 text-white' onClick={() => plusHandler('item3Value')}><FaPlus/></button>
            </div>
           
          </div>
          
          </div>

          <div className='max-h-[50vh] w-[18vw] flex flex-col space-y-2 justify-evenly items-center py-5 px-2 bg-slate-100 rounded-xl'>
          <div className=''><img src={i4} width={150} height={150}/></div>
          <div className='text-2xl font-semibold'>Penne Alla Vodak</div>
          <div ><p className='text-sm tracking- leading- font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p></div>
          <div className='text-3xl text-red-400'>★★★★★</div>
          <div className='flex justify-between items-center w-full text-xl px-5'>
            <h1 className='text-2xl font-semibold'>$12.05</h1>
  
            <div className='border  bg-red-400 rounded-xl flex space-x-1'>
            <button className='text-sm px-1 text-white' onClick={()=>(toast('Sorry! not available in your area'))}><FaMinus/></button>
          <p className='text-sm px-1 text-white'>0</p>
          <button className='text-sm px-1 text-white' onClick={()=>(toast('Sorry! not available in your area'))}><FaPlus/></button>
            </div>
            
          </div>
          
          </div>

          <div className='max-h-[50vh] w-[18vw] flex flex-col space-y-2 justify-evenly items-center py-5 px-2 bg-slate-100 rounded-xl'>
          <div className=''><img src={i5} width={150} height={150}/></div>
          <div className='text-2xl font-semibold'>Risoto</div>
          <div ><p className='text-sm tracking- leading- font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p></div>
          <div className='text-xl text-red-400'>★★★★★</div>
          <div className='flex justify-between items-center w-full text-xl px-5'>
            <h1 className='text-lg font-semibold'>$12.05</h1>
  
            <div className='border  bg-red-400 rounded-xl flex space-x-1'>

            <button className='text-sm px-1 text-white' onClick={()=>(toast('Sorry! not available in your area'))}><FaMinus/></button>
          <p className='text-sm px-1 text-white'>0</p>
          <button className='text-sm px-1 text-white' onClick={()=>(toast('Sorry! not available in your area'))}><FaPlus/></button>
            </div>
          
          </div>
          
          </div>

          <div className='max-h-[50vh] w-[18vw] flex flex-col space-y-2 justify-evenly items-center py-5 px-2 bg-slate-100 rounded-xl'>
          <div className=''><img src={i6} width={150} height={150}/></div>
          <div className='text-2xl font-semibold'>Splitza Signature</div>
          <div ><p className='text-sm tracking- leading- font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p></div>
          <div className='text-xl text-red-400'>★★★★★</div>
          <div className='flex justify-between items-center w-full text-xl px-5'>
            <h1 className='text-sm font-semibold'>$12.05</h1>
  
            <div className='border  bg-red-400 rounded-xl flex space-x-1'>

            <button className='text-sm px-1 text-white' onClick={()=>(toast('Sorry! not available in your area'))}><FaMinus/></button>
          <p className='text-sm px-1 text-white'>0</p>
          <button className='text-sm px-1 text-white' onClick={()=>(toast('Sorry! not available in your area'))}><FaPlus/></button>
            </div>
         
          </div>
          
          </div>


        
          <div className='flex justify-center items-center w-full text-xl space-x-2'>
            <FaChevronLeft/>
            <button onClick={()=>{toast("more content to be added soon")}}  className='px-2 py-1 rounded-md text-white bg-gray-400'>1</button>
            <button onClick={()=>{toast("more content to be added soon")}}  className='px-2 py-1 rounded-md text-white bg-gray-400'>2</button>
            <button onClick={()=>{toast("more content to be added soon")}}  className='px-2 py-1 rounded-md text-white bg-gray-400'>3</button>
            <button onClick={()=>{toast("more content to be added soon")}}  className=' flex justify-center items-center px-2 py-1 rounded-md text-white bg-gray-400'>...</button>
            <FaChevronRight/>
            </div>
          </div>
          <div className=' w-[40%] '>
            <div className='text-4xl text-center font-bold p-6 border-b-4' >Order list</div>
            <div className='flex flex-col pt-8 space-y-5 py-10 border-b-2'>
              <ul className='flex flex-col space-y-2 '>
                <h1 className='text-3xl font-semibold' >Spaghetti</h1>
                <div className='flex w-full justify-between text-2xl'>
                  <p>{orderData.item1value}</p>
                  <p>${orderData.item1value * 12.05} </p>
                </div>
              </ul>
              <ul className='flex flex-col space-y-2'> 
                <h1 className='text-3xl font-semibold'>Linguine</h1>
                <div className='flex w-full justify-between text-2xl'>
                  <p>{orderData.item2Value}</p>
                  <p>${orderData.item2Value * 12.05} </p>
                </div>
                </ul>
              <ul className='flex flex-col space-y-2'>
                 <h1 className='text-3xl font-semibold'>Capellini</h1>
                <div className='flex w-full justify-between text-2xl'>
                  <p>{orderData.item3Value}</p>
                  <p>${orderData.item3Value * 12.05} </p>
                </div>
                </ul>
            </div>

            <div className='space-y-5 py-10 border-b-2'>

          <h1 className='text-3xl  font-bold'>Voucher Code</h1>
          
         <div className='flex w-full justify-between items-center text-xl'>
          <p>$5.0 </p>
         <button onClick={()=>(toast("voucher already applied!"))} className='p-2 bg-blue-500 text-white rounded-xl text-sm'>Apply</button>
         </div>
            </div>
            <div className='flex flex-col pt-10 text-xl space-y-4'>
              <ul className='flex w-full justify-between'><p className='font-semibold'>Subtotal</p> <p>${(orderData.item1value+orderData.item2Value+orderData.item3Value)* 12.05}</p></ul>
              <ul className='flex w-full justify-between'><p className='font-semibold'>Tax fee</p> <p>$3.5</p></ul>
              <ul className='flex w-full justify-between'><p className='font-semibold'>Voucher</p>  <p>$5.0</p></ul>
              <ul className='flex w-full justify-between'><p className='font-semibold'>Total</p>  <p>{((orderData.item1value+orderData.item2Value+orderData.item3Value)* 12.05)+3.5+5}</p></ul>
              <button onClick={clickHandler} className='mt-5 px-full p-2 bg-red-400 rounded-xl text-lg   text-white'>checkout</button>

            </div>

             
          </div>
        
         
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Menu