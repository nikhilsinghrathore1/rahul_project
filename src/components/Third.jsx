import { useGSAP } from '@gsap/react'
import gsap, { Expo, Power1, Power4 } from "gsap/all";
import {ScrollTrigger}from 'gsap/all';
import { useEffect, useRef } from 'react'

const Third = () => {

  const pin = useRef(null)
  const number = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {

    gsap.to(number.current, {
      scrollTrigger: {
        trigger: pin.current,
        start:"700px bottom",
        end:"600px top",
        scrub:7,
        // pin:true,
        // markers: true
        
      },
      scale: 10,
      // duration:5,
      rotate: "180deg",
    })
  }, [])

  return (
    <div ref={pin} className='w-full bg-[#151519] overflow-hidden pt-[100px] lg:pt-0 min-h-[130vh] text-[#A9ABB5]'>
               <div  className='w-full relative flex items-center justify-center pr-5 leading-none '>
                              <div className='absolute w-[4.5rem] sm:w-[8rem] h-12 sm:h-24 lg:w-[7.6rem] rounded-full border-[2px] top-[11%] sm:top-[13%] lg:top-[24%] right-[5%] sm:right-[8%] lg:right-[23%] border-[#A9ABB5]/50 bg-black flex items-center justify-center text-4xl font2'>+</div>
                              <h1 ref={number} className='text-[17rem] sm:text-[35rem] lg:text-[36rem] font1 -tracking-[40px] lg:-tracking-[80px]'>80</h1>

               </div>

               <div className='mt-[40px] sm:text-7xl lg:text-5xl w-full text-center text-5xl font7 font-light -tracking-[1.5px] '>
                              <p>delivered</p>                                             
                              <p>products</p>                                             
               </div>
    </div>
  )
}

export default Third