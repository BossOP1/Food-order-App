import React from 'react'
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
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const Menu = () => {

  const navigation = useNavigate();
  const clickHandler = ()=>{
    navigation("/orderonline")
  }
  return (
    <div>
      <Navbar/>

      <div className='relative min-h-[160vh]  flex flex-col justify-evenly items-center w-[80vw] mx-auto my-20 space-y-8'>
        <div><h1 className='text-6xl font-semibold tracking-wider text-zinc-800 leading-relaxed p-10'>Our Popular Menu</h1></div>
        <div className=' relative h-full w-full flex justify-between space-x-7'>
          <button className='border px-16 py-4 rounded-2xl text-xl font-semibold bg-red-400 text-white '>All Category</button>
          <button onClick={()=>{toast("more content to be added soon")}}  className='border px-16 py-4 rounded-2xl text-xl font-light bg-gray-200 tracking-wide'>Dinner</button>
          <button onClick={()=>{toast("more content to be added soon")}}  className='border px-16 py-4 rounded-2xl text-xl font-light bg-gray-200 tracking-wide'>Lunch</button>
          <button onClick={()=>{toast("more content to be added soon")}}  className='border px-16 py-4 rounded-2xl text-xl font-light bg-gray-200 tracking-wide'>BreakFast</button>
          <button onClick={()=>{toast("more content to be added soon")}}  className='border px-16 py-4 rounded-2xl text-xl font-light bg-gray-200 tracking-wide'>Desserts</button>
        </div>
        <div className=' relative flex flex-wrap gap-7'>
          <div className='min-h-[70vh] w-[25vw] flex flex-col space-y-6 justify-evenly items-center py-10 px-5 bg-slate-100 rounded-2xl'>
            <div className=''><img src={i1} width={250} height={250}/></div>
          <div className='text-4xl font-semibold'>Spaghetti</div>
          <div ><p className='text-md tracking-wide leading-loose font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p></div>
          <div className='text-3xl text-red-400'>★★★★★</div>
          <div className='flex justify-between items-center w-full text-xl px-5'>
            <h1 className='text-2xl font-semibold'>$12.05</h1>
            <button onClick={clickHandler} className='border text-white   px-8 py-4 bg-red-400 rounded-2xl'>Order Now</button>

          </div>
          
          </div>

          <div className='min-h-[70vh] w-[25vw] flex flex-col space-y-6 justify-evenly items-center py-10 px-5 bg-slate-100 rounded-2xl'>
            <div className=''><img src={i2} width={250} height={250}/></div>
          <div className='text-4xl font-semibold'>Gnocchi</div>
          <div ><p className='text-md tracking-wide leading-loose font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p></div>
          <div className='text-3xl text-red-400'>★★★★★</div>
          <div className='flex justify-between items-center w-full text-xl px-5'>
            <h1 className='text-2xl font-semibold'>$12.05</h1>
            <button onClick={clickHandler} className='border text-white  px-8 py-4 bg-red-400 rounded-2xl'>Order Now</button>

          </div>
          
          </div>

          <div className='min-h-[70vh] w-[25vw] flex flex-col space-y-6 justify-evenly items-center py-10 px-5 bg-slate-100 rounded-2xl'>
            <div className=''><img src={i3} width={250} height={250}/></div>
          <div className='text-4xl font-semibold'>Rovioli</div>
          <div ><p className='text-md tracking-wide leading-loose font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p></div>
          <div className='text-3xl text-red-400'>★★★★★</div>
          <div className='flex justify-between items-center w-full text-xl px-5'>
            <h1 className='text-2xl font-semibold'>$12.05</h1>
            <button onClick={clickHandler} className='border text-white   px-8 py-4 bg-red-400 rounded-2xl'>Order Now</button>

          </div>
          
          </div>

          <div className='min-h-[70vh] w-[25vw] flex flex-col space-y-6 justify-evenly items-center py-10 px-5 bg-slate-100 rounded-2xl'>
            <div className=''><img src={i4} width={250} height={250}/></div>
          <div className='text-4xl font-semibold'>Penne Alla Vodak</div>
          <div ><p className='text-md tracking-wide leading-loose font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p></div>
          <div className='text-3xl text-red-400'>★★★★★</div>
          <div className='flex justify-between items-center w-full text-xl px-5'>
            <h1 className='text-2xl font-semibold'>$12.05</h1>
            <button onClick={clickHandler} className='border text-white   px-8 py-4 bg-red-400 rounded-2xl'>Order Now</button>

          </div>
          
          </div>

          <div className='min-h-[70vh] w-[25vw] flex flex-col space-y-6 justify-evenly items-center py-10 px-5 bg-slate-100 rounded-2xl'>
            <div className=''><img src={i5} width={250} height={250}/></div>
          <div className='text-4xl font-semibold'>Risoto</div>
          <div ><p className='text-md tracking-wide leading-loose font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p></div>
          <div className='text-3xl text-red-400'>★★★★★</div>
          <div className='flex justify-between items-center w-full text-xl px-5'>
            <h1 className='text-2xl font-semibold'>$12.05</h1>
            <button onClick={clickHandler} className='border text-white   px-8 py-4 bg-red-400 rounded-2xl'>Order Now</button>

          </div>
          
          </div>

          <div className='min-h-[70vh] w-[25vw] flex flex-col space-y-6 justify-evenly items-center py-10 px-5 bg-slate-100 rounded-2xl'>
            <div className=''><img src={i6} width={250} height={250}/></div>
          <div className='text-4xl font-semibold'>Splitza Signature</div>
          <div ><p className='text-md tracking-wide leading-loose font-light text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.</p></div>
          <div className='text-3xl text-red-400'>★★★★★</div>
          <div className='flex justify-between items-center w-full text-xl px-5'>
            <h1 className='text-2xl font-semibold'>$12.05</h1>
            <button onClick={clickHandler} className='border text-white   px-8 py-4 bg-red-400 rounded-2xl'>Order Now</button>

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
      </div>
      <Footer/>
    </div>
  )
}

export default Menu