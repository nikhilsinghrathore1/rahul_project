import { useGSAP } from "@gsap/react";
import gsap, { Expo, Power1, Power4 } from "gsap/all";
import { useRef } from "react";
import {ScrollTrigger}from 'gsap/all';
import AboutCompany from './AboutCompany.jsx'

const Sixth = () => {

  const text1 = useRef([])
  const text2 = useRef([])
  const text3 = useRef([])
  const text4 = useRef([])
  const text5 = useRef([])
  const text6 = useRef([])
  const text7 = useRef([])
  const text8 = useRef([])
  const text9 = useRef([])
  const text10 = useRef([])
  const maindiv = useRef(null)

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(text1.current,{
      scrollTrigger:{
        trigger:maindiv.current,
        start:"top top",
        end:"50px bottom",
        // markers:true,
        scrub:3
      },

      opacity:100,
      stagger:0.2
    })
    gsap.to(text2.current,{
      scrollTrigger:{
        trigger:maindiv.current,
        start:"180px top",
        end:"200px bottom",
        // markers:true,
        scrub:3
      },

      opacity:100,
      stagger:0.2
    })
    gsap.to(text3.current,{
      scrollTrigger:{
        trigger:maindiv.current,
        start:"280px top",
        end:"300px bottom",
        scrub:3
      },

      opacity:100,
      stagger:0.2
    })
    gsap.to(text4.current,{
      scrollTrigger:{
        trigger:maindiv.current,
        start:"380px top",
        end:"400px bottom",
        scrub:3
      },

      opacity:100,
      stagger:0.2
    })
    gsap.to(text5.current,{
      scrollTrigger:{
        trigger:maindiv.current,
        start:"480px top",
        end:"500px bottom",
        scrub:3
      },

      opacity:100,
      stagger:0.2
    })
    gsap.to(text6.current,{
      scrollTrigger:{
        trigger:maindiv.current,
        start:"580px top",
        end:"600px bottom",
        scrub:3
      },

      opacity:100,
      stagger:0.2
    })
    gsap.to(text7.current,{
      scrollTrigger:{
        trigger:maindiv.current,
        start:"680px top",
        end:"700px bottom",
        scrub:3
      },

      opacity:100,
      stagger:0.2
    })
    gsap.to(text8.current,{
      scrollTrigger:{
        trigger:maindiv.current,
        start:"780px top",
        end:"800px bottom",
        scrub:3
      },

      opacity:100,
      stagger:0.2
    })
    gsap.to(text9.current,{
      scrollTrigger:{
        trigger:maindiv.current,
        start:"880px top",
        end:"900px bottom",
        scrub:3
      },

      opacity:100,
      stagger:0.2
    })
    gsap.to(text10.current,{
      scrollTrigger:{
        trigger:maindiv.current,
        start:"980px top",
        end:"1000px bottom",
        // markers:true,
        scrub:3
      },

      opacity:100,
      stagger:0.2
    })
  })




  return (
               <>
    <div ref={maindiv} className='w-full h-[155vh] sm:h-[170vh] lg:h-[285vh] bg-[#151519] pl-5 pb-2 lg:pb-0 text-white pt-[250px] sm:pt-[400px] '>
               <div className='w-full h-[98%]  relative overflow-hidden text-[2.7rem] sm:text-[6rem] lg:text-[8.7rem] tracking-tighter  leading-[50px] sm:leading-[90px] lg:leading-[130px] font1'>
                              <p>
                              {'Somany®'.split("").map((char, index) => (
                                <span className='opacity-30 z-10 relative'
                                ref={(el)=>text1.current[index] = el} key={index}>{char}</span>
                               ))}

                              </p>
                              <p>
                              {'provides a full'.split("").map((e, i) => (
                                            e==" "? <span>&nbsp;</span>:<span  ref={(el)=>text2.current[i] = el} className='opacity-30 z-10 relative'>{e}</span>
                               ))}

                              </p>
                              <p>
                              {'range of services'.split("").map((e, i) => (
                                            e==" "? <span>&nbsp;</span>:<span  ref={(el)=>text3.current[i] = el} className='opacity-30 z-10 relative'>{e}</span>
                               ))}
                                            
                              </p>
                              <p>
                              {'for interior'.split("").map((e, i) => (
                                            e==" "? <span>&nbsp;</span>:<span  ref={(el)=>text4.current[i] = el} className='opacity-30 z-10 relative'>{e}</span>
                               ))}   
                                            
                              </p>
                              <p>
                              {'decoration'.split("").map((e, i) => (
                                            e==" "? <span>&nbsp;</span>:<span ref={(el)=>text5.current[i] = el}  className='opacity-30 z-10 relative'>{e}</span>
                               ))}   
                                        
                              </p>
                              <p>
                              {'and construction'.split("").map((e, i) => (
                                            e==" "? <span>&nbsp;</span>:<span ref={(el)=>text6.current[i] = el}  className='opacity-30 z-10 relative'>{e}</span>
                               ))} 
                                          
                              </p>
                              <p>
                              {'solutions turnkey'.split("").map((e, i) => (
                                            e==" "? <span>&nbsp;</span>:<span ref={(el)=>text7.current[i] = el}  className='opacity-30 z-10 relative'>{e}</span>
                               ))}
                                            
                              </p>
                              <p>
                              {'for residential'.split("").map((e, i) => (
                                            e==" "? <span>&nbsp;</span>:<span ref={(el)=>text8.current[i] = el}  className='opacity-30 z-10 relative'>{e}</span>
                               ))}
                                             
                              </p>
                              <p>
                              {'and commercial'.split("").map((e, i) => (
                                            e==" "? <span>&nbsp;</span>:<span ref={(el)=>text9.current[i] = el}  className='opacity-30 z-10 relative'>{e}</span>
                               ))}               
                              </p>
                              <p>
                              {'construction'.split("").map((e, i) => (
                                            e==" "? <span>&nbsp;</span>:<span ref={(el)=>text10.current[i] = el}  className='opacity-30 z-10 relative'>{e}</span>
                               ))}  
                              </p>

                              <div data-scroll data-scroll-speed="0.2" className='w-64 overflow-hidden sm:w-80 h-[300px] sm:h-[500px] lg:w-64 lg:h-[440px] absolute top-16 right-[25.3%] z-[1]'>
                                             <img   className='object-cover  w-full over h-full ' src="https://selemen.liqium.com/img/lt1.jpg" alt="not showing" 
                                             />
                              </div>
                              <div data-scroll data-scroll-speed="0.5" className='w-[40%]  h-[60%] absolute top-[50%] -right-[144px] sm:right-3'>
                                             <img className=' w-full h-full object-cover' src="https://selemen.liqium.com/img/lt2.jpg" alt="not showing" />
                              </div>
                              <div data-scroll data-scroll-speed="0.7" className='w-64 h-[240px] absolute bottom-[10%] sm:-bottom-[0%] lg:bottom-[10%] -right-[20%] sm:left-0'>
                                             <img className='h-full w-full object-cover' src="https://selemen.liqium.com/img/lt3.jpg" alt="not showing" />
                              </div>
               </div>
               <div className=''>
                              <p className='font2 text-[14px]  opacity-75 sm:text-[20px] lg:text-[14px]'>Advantages and facts</p>
               </div>
    </div>
    <AboutCompany/>
    </>
  )
}

export default Sixth