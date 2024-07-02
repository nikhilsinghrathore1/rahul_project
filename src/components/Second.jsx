
import { useGSAP } from "@gsap/react";
import gsap, { Expo, Power1, Power4 } from "gsap/all";
import { useRef } from "react";
import {ScrollTrigger}from 'gsap/all';

const Second = () => {
 
  
  const left = useRef(null)
  const right= useRef(null)
  return (
    <div className='max-w-screen-2xl px-4 py-2 bg-[#151519] text-white'>

      <div className='text-[#A9ABB5] w-full flex items-center justify-center flex-col text-[2rem] sm:text-[3rem] leading-none tracking-tight font1 mt-[150px] lg:mt-[200px] '>
      <p className='flex'> <span className='flex mr-1'> <p>20</p> <p className='pt-[2px]'>+</p></span> Products</p>
      <p>We guarantee</p>
      </div>
    {/* this is the quality wala portion */}
        <div className='w-full h-[80vh] lg:h-[90vh] relative '>

            <div className='absolute -top-[3%] sm:mt-10 lg:mt-0 left-[50%] -translate-x-1/2 w-full flex flex-col items-center -gap-[100px] '>
                  <h1 className='font1 text-[5.7rem] sm:text-[7rem] lg:text-[8.7rem] tracking-tighter -mb-[42px] relative z-10'>quality</h1>
                  <div className=' relative z-[2]'>
                  <img className='h-[284px] sm:h-[400px] lg:h-[314px] w-[282px] sm:w-[500px] lg:w-[482px] object-cover' src="https://selemen.liqium.com/img/j1.jpg" alt="not showing" />
                  </div>
            </div>

          <div className='absolute bottom-0 w-full h-[67.5vh] flex border-b-[1px] border-white/30'>

            <div className='w-[50%] h-full border-r-[1px] border-white/30'></div>
            <div className='w-[50%] h-full '></div>

          </div>

        </div>

{/* this is the image wala portion */}

        <div className='w-full h-[190vh] flex flex-col lg:flex-row border-b-[1px] border-white/30 '>
{/* upar wala is the main div */}
    
    {/* this is the first image div */}
          <div  onMouseEnter={()=>{
            left.current.style.scale=".5"
            right.current.style.scale="1.6"
          }}
          
          onMouseLeave={()=>{
            left.current.style.scale="1"
            right.current.style.scale="1"
          }}
          className='w-full h-[50%] lg:w-1/2 lg:h-full lg: border-r-[1px] border-b-[1px] border-white/20 flex flex-col items-center '>

          <h1 className='font1 text-[15px] opacity-65 mt-5 sm:text-[23px] lg:text-[15px]'>01</h1>

          <div className='mt-8 w-full lg:text-[13px] lg:leading-3 lg:mt-20 text-center leading-4 text-[15px] sm:text-[23px] sm:leading-[25px]  font2 opacity-80'>
            <p>We use high standard for quality products</p>
            <p>to Create Space for creativity as usefull as possible</p>
          </div>

        
      <div ref={left} className='w-full transi  flex items-start justify-center lg:justify-normal h-[70%] lg:h-[65%] '>
          <div className='relative w-[95%] lg:w-[92%] lg:mt-40 h-full mt-12 '>
            <img className='h-full rounded-lg lg:rounded-none w-full object-cover z-0 absolute top-0 left-0' src="https://selemen.liqium.com/img/j2.jpg" alt="not showing" />
            <div className='w-full h-full flex items-center flex-col gap-16 justify-center relative bg-black/20 z-10'>
              <div className='text-center leading-[42px] sm:leading-[85px] lg:leading-[42px]'>
                <p className='font3 font-bold text-[2rem] sm:text-[4rem] lg:text-[2rem]'>Commercial</p>
                <p className='font1 tracking-tighter text-[5rem] sm:text-[8rem] lg:text-[5rem] '>Designs</p>
              </div>
              <p className='font2 -mt-4 sm:text-[25px] lg:text-sm'>Comfortable working place</p>
            </div>
          </div>
      </div>

          </div>


          {/* this is the second image div */}
          <div  className='w-full h-1/2 lg:w-1/2 lg:h-full flex flex-col items-center'>
          <h1 className='font1 text-[15px] opacity-65 mt-5 sm:text-[23px] lg:text-[15px]'>01</h1>

<div className='mt-10 w-full text-center leading-4 text-[15px] sm:text-[23px] lg:text-[13px] lg:leading-3 sm:leading-[25px] font2 opacity-80'>
  <p>We provide deep quality control at every</p>
  <p>stage in as it's important for us</p>
</div>


<div ref={right} className='w-full flex items-center transi justify-center h-[70%] lg:h-[45%] mt-[20px] lg:mt-[240px]'>
<div className='relative w-[95%] lg:w-[55%] h-full mt-12 lg:mt-40'>
  <img className='h-full w-full rounded-lg lg:rounded-none object-cover z-0 absolute top-0 left-0' src="https://selemen.liqium.com/img/j3.jpg" alt="not showing" />
  <div className='w-full h-full flex items-center flex-col gap-8 justify-center relative bg-black/50 z-10'>
    <div className='text-center leading-[42px] sm:leading-[85px] lg:leading-[23px]'>
      <p className='font3 font-bold text-[1.7rem] sm:text-[4rem] lg:text-[1rem]'>Elegant nature</p>
      <p className='font1 text-[4.7rem] tracking-tighter sm:text-[8rem] lg:text-[3rem] '>inspiring</p>
    </div>
    <p className='font2 sm:text-[25px] sm:mt-3 lg:text-sm lg:mt-0'>Makes it real</p>
  </div>
</div>
</div>
          </div>
        </div>

    </div>
  )
}

export default Second