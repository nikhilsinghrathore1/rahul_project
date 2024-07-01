import React from 'react'
import Shaders from './Shaders'

const Eighth = () => {
  return (
               <>
    <div className='w-full p-4 h-[150vh] sm:h-[120vh] bg-[#151519] text-white'>
               <div className='w-full h-full lg:border-t-[1px]  border-white/30 flex flex-col '>
                                             <div className='w-full h-[46%] sm:h-[30%] flex'>
                                                            <div className='border-r-[1px] text-[33px] leading-[35px] pt-10 font7 tracking-tighter w-1/2 h-full border-white/20'>
                                                                           <p>We are happy to answer</p>
                                                                           <p>your question and discuss</p>
                                                                           <p>your project</p>
                                                            </div>

                                                            <div></div>
                                             </div>

                                             <div className='w-full h-[54%] sm:h-[70%]'>
                                                            <form className='w-full h-full'>
                                                                           <div className='w-full h-[23%] flex border-t-[1px] border-white/30'>
                                                                                          <input className='bg-[#151519] text-sm sm:text-xl font5  w-1/2 mr-10 h-full border-r-[1px] outline-none border-white/20' type="text" placeholder='Phone*' />
                                                                                          <input className='bg-[#151519] w-[38%] text-sm sm:text-xl font5 h-full outline-none' type="text" placeholder='E-mail*' />
                                                                           </div>

                                                                           <input className='bg-[#151519] w-full h-[23%] border-t-[1px] border-white/30 font5 text-sm outline-none' type="text" placeholder='Name*' />
                                                                           <input className='bg-[#151519] w-full h-[23%] border-t-[1px] border-white/30 font5 text-sm border-b-[1px] outline-none' type="text" placeholder='Message*' />
                                                                           <div className='w-full h-[31%]  flex  justify-center '>
                                                                                                         <button className='w-28 sm:w-40 h-10 sm:h-14  mt-14 sm:mt-20 bg-[#333338] rounded-full text-[#9B9D8A] text-xs sm:text-xl lg:text-[14px] font4'>Send request</button>
                                                                           </div>
                                                                           
                                                            </form>
                                             </div>
               </div>
    </div>
    <Shaders/>
    </>
  )
}

export default Eighth