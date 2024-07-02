import { useGSAP } from '@gsap/react'
import gsap ,{ScrollTrigger} from 'gsap/all'
import React, { useRef } from 'react'



const Footer = () => {


  const last = useRef([])
  const lastdiv = useRef(null)

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)
      gsap.from(last.current,{
        scrollTrigger:{
          trigger:lastdiv.current,
          start:"20px 100px",
          end:"450px bottom",
          // markers:true,
          scrub:4
        },
        y:"100%",
        stagger:0.1,


      })
  })

  return (

    // it is done for the mobile devices 
    // now lets create this for the bigger devices
    <div ref={lastdiv} className='w-full h-[100vh] lg:h-[105vh] bg-[#151519] text-white'>
               <div className='w-full h-[51%] flex '>
                              <div className='w-1/2 h-full font5 pl-5 pt-20 sm:pt-40 lg:pt-20 text-[16px] sm:text-[30px]  border-r-[1px] border-white/20'>
                                             <p className='opacity-50'>More than 20 years</p>
                                             <p className='opacity-50'>of successful work</p>
                              </div>
                              <div className='w-1/2 h-full'></div>
               </div>

               <div className='w-full h-[41%] flex items-end leading-none overflow-hidden  '>
                              <h1   className='text-[5.7rem] sm:text-[11.5rem] lg:text-[23.7rem] font1 leading-none lg:-translate-y-[0px] text-[#333338] sm:text-white/40 tracking-tighter'>
                                {"somany®".split("").map((e,i)=>(
                                  <span ref={(el)=>last.current[i] = el} className='inline-block'>{e}</span>
                                ))}
                              </h1>
               </div>

               <div className='w-full h-[8%] flex px-7'>
                              <div className=' items-end sm:text-[20px] lg:text-[14px] pb-2 w-full h-full border-t-[1px] border-white/20 flex justify-between'>
                                             <p className='text-[#71717c] font1'>©2024</p>
                                             <p className='font1 text-[#71717c]'>Made by <span className='opacity-100 text-white/70'>NikoChan</span></p>
                              </div>
               </div>
    </div>
  )
}

export default Footer