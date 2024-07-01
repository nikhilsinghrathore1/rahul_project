import gsap from 'gsap/all';
import React, { useEffect, useRef } from 'react'

const Fifth = () => {

const marque = useRef(null)

useEffect(() => {
  const marqueeContent = marque.current;
  const width = marqueeContent.scrollWidth;

  gsap.to(marqueeContent, {

    x: -width,
    duration: 100,
    ease: 'linear',
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % width),
    },
  });
}, []);

  return (
    <div className='w-full bg-[#18191F] h-[250vh] sm:h-[220vh] lg:h-[250vh] text-white pt-[200px] relative'>
               <div className='w-full flex items-end gap-4 px-4 flex-col sm:flex-row  justify-between'>
                              <div className='leading-[50px] '>
                                             <p className='font4 text-[44px]'>We will help</p>
                                             <p className='font4 text-[44px] '>you to implement</p>
                              </div>
                              <div className='w-[55%] mb-4 border-b-[1px] border-white/30'></div>
                              <div className='relative top-10 leading-[50px] text-right'>
                                             <p className='font4 text-[44px]'>any design</p>
                                             <p className='font4 text-[44px] opacity-40'>solutions</p>
                              </div>
               </div>

               <div className='w-full flex items-center text-[12px] sm:text-[20px] justify-center px-4 opacity-70 mt-32  font4'>
                        <div>
                              <p>Selemen<span className='inline-block relative -top-1 text-[12px] sm:text-[20px]'>®</span>  — is a company for the construction and</p>
                              <p>decoration of premises. We carry out projects on time,</p>
                              <p>within budget and with an exceptional level of quality.</p>
                        </div>
               </div>

               <div ref={marque} className='marquee w-full flex flex-nowrap h-fit px-4  mt-12 sm:mt-40'>
                    <div className='font1 text-[10.9rem] tracking-tighter text-[#4B4C53] flex-shrink-0'>
                      <p > Future by Selemen®</p>
                    </div>
                    <div className='font1 text-[10.9rem] tracking-tighter text-[#4B4C53] flex-shrink-0'>
                      <p > Future by Selemen®</p>
                    </div>
                    <div className='font1 text-[10.9rem] tracking-tighter text-[#4B4C53] flex-shrink-0'>
                      <p > Future by Selemen®</p>
                    </div>
                    <div className='font1 text-[10.9rem] tracking-tighter text-[#4B4C53] flex-shrink-0'>
                      <p > Future by Selemen®</p>
                    </div>
                 
               </div>

               <div className='h-[100vh] absolute bottom-0 w-full bg-red-50'>
                <img className='w-full h-full object-cover' src="https://selemen.liqium.com/img/bg13.jpg" alt="not showing" />
               </div>
    </div>
  )
}

export default Fifth