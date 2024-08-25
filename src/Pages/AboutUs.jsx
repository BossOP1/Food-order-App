import React from 'react'
import Navbar from '../Component/Navbar'
import image1 from '../assets/about1image.png'
import image2 from '../assets/about2img.png'
import image3 from '../assets/aboutimage3.png'
import Footer from '../Component/Footer'
import { useNavigate } from 'react-router-dom'


const AboutUs = () => {

  const navigation = useNavigate();
  const clickHandler = ()=>{
    navigation("/orderonline")
  }
  return (
    <div>
            <Navbar/>

          <div className='md:min-h-[80vh] p-10 md:py-[10vh] flex flex-col justify-around w-[100vw] md:px-20 md:flex-row '>
            <div className='md:w-[40%]'>
            <div className='p-10  bg-gray-200 rounded-full'>
            <div className='p-10 bg-gray-300 rounded-full'>
          <img  width={500} height={500} src={image1}/>
            </div>
            </div>

            </div>
           
            <div className='flex flex-col items-start md:w-[35%] space-y-8 '>
             <h1 className='text-black text-4xl md:text-6xl font-semibold leading-tight tracking-wider ' >About Our<br/>
             <span className='text-red-400 text-4xl md:text-6xl font-semibold tracking-wider'>Restaurant</span></h1>
             <p className='text-2xl text-slate-600 leading-loose w-[100%] font-light'>
            This dish is full of flavor and nutrition! Quinoa is a complete protein, providing all the essential amino acids your body needs, and is also a good source of fiber.
             </p>
             <button onClick={clickHandler} className='md:px-12 px-5 md:py-7 py-4 rounded-xl bg-red-400 text-2xl text-white'>
               Order Now
             </button>
            </div>
          </div>


          <section className='min-h-[80vh] flex flex-col justify-between items-center w-[100vw] px-20 md:flex-row'>
            <div className='flex flex-col justify-between items-center w-[100vw] p-10 md:px-20 md:flex-row'>
            <div className='flex flex-col w-full items-start md:w-[50%] space-y-8 '>
             <p className='text-2xl text-slate-600 leading-relaxed md:leading-loose w-[100%] font-light'>
             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.             </p>
          
            </div>

            <div className='md:w-[40%]'>
            <div className='p-10  bg-gray-200 rounded-full'>
            <div className='p-10 bg-gray-300 rounded-full'>
          <img  width={500} height={500} src={image2}/>
            </div>
            </div>

            </div>
            </div>
         
           
          </section>

          <section className='md:min-h-[80vh] space-y-10 md:space-y-0  flex flex-col justify-between w-[100vw] p-10 md:px-20 md:flex-row'>
          <div className='md:w-[40%]'>
         
          <img  width={500} height={500} src={image3}/>

            </div>
           
            <div className='flex flex-col justify-evenly md:w-[50%] md:h-[80%] '>
             <h1 className='text-black text-2xl md:text-5xl font-semibold leading-tight tracking-wider ' ><span className='text-red-400 text-3xl md:text-6xl font-semibold tracking-wider'>Owner</span> & Executive Chef<br/>
             <span className='text-slate-700 text-2xl md:text-4xl font-semibold leading-tight tracking-wider'>Ismail Marzuki</span></h1>
             <p className=' text-xl md:text-4xl text-slate-600 leading-loose w-[100%] font-light'>
              <span className=' text-4xl md:text-8xl text-yellow-600'>“</span> <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero, eos eius sapiente assumenda laboriosam! 
              <br/>
            <span className=' text-4xl md:text-8xl text-yellow-600 leading-loose'>“</span>
             </p>
          
            </div>
          </section>
           
          <Footer/>
          
    </div>
  )
}

export default AboutUs