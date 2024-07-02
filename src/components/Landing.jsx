import { useGSAP } from "@gsap/react";
import gsap, { Expo, Power1, Power4 } from "gsap/all";
import React, { useEffect, useRef } from "react";
import {ScrollTrigger}from 'gsap/all';
import "../App.css"  

const Landing = () => {

  const navi = useRef(null)
  const fulldiv = useRef(null)
  const testing = useRef(null)
  const maintext = useRef(null)
  const badaR = useRef(null)
  const neechewala = useRef(null)
  const img1 = useRef(null)
  const img2 = useRef(null)
  const img3 = useRef(null)
  const img4 = useRef(null)
  const img5 = useRef(null)
  const img6 = useRef(null)
  const img7 = useRef(null)
 
 
  const disableScroll = () => {
    fulldiv.current.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
  };

  const enableScroll = () => {
    fulldiv.current.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
  };



  useGSAP(()=>{
      disableScroll()
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({

      

      onComplete: () => {

        enableScroll()
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: fulldiv.current,
            start: 'top top',
            end: 'bottom center',
            pin:true,
            scrub: 5,
          }
        });
        
        enableScroll()
        tl2.to(img7.current, { delay:0.8, x: "100%", y:"100%", duration: 10 , opacity:0, },"b")
        tl2.to(img3.current, { delay:1.6, x: "-50%", y:"100%", duration: 10 , opacity:0, },"b")
        tl2.to(img2.current, { delay:2, x: "-50%", y:"-100%", duration: 10 , opacity:0, },"b")
        tl2.to(img6.current, { delay:1.6, x: "70%", y:"-100%", duration: 10 , opacity:0, },"b")
        tl2.to(img5.current, { delay:5, x: "70%", y:"100%", duration: 10 , opacity:0, },"b")
        tl2.to(img1.current, { delay:5, x: "70%", y:"-100%", duration: 10 , opacity:0, },"b")
        tl2.to(img4.current, { delay:5, x: "-70%", y:"-100%", duration: 10 , opacity:0, },"b")
           
      }
    });


    tl.from(img1.current,{
      delay:0,
      // height:"0vh",
      scale:0,
      duration:1.8,
      ease:Power4.easeInOut
    })
    tl.from(img2.current,{
      delay:-1.2,
      // height:"0vh",
      scale:0,
      duration:1.5,
      ease:Power4.easeInOut
    })
    tl.from(img3.current,{
      delay:-1.2,
      // height:"0vh",
      scale:0,
      duration:1.5,
      ease:Power4.easeInOut
    })
    tl.from(img4.current,{
      delay:-1.2,
      // height:"0vh",
      scale:0,
      duration:1.5,
      ease:Power4.easeIn
    })
    tl.from(img5.current,{
      delay:-1.2,
      // height:"0vh",
      scale:0,
      duration:1.5,
      ease:Power4.easeIn
    })
    tl.from(img6.current,{
      delay:-1.2,
      // height:"0vh",
      scale:0,
      duration:1.5,
      ease:Power4.easeIn
    })
    tl.from(img7.current,{
      delay:-1.2,
      // height:"0vh",
      scale:0,
      duration:1.5,
      ease:Power4.easeIn
    })


    tl.from(navi.current, {
      opacity:0,
      duration:1,
      y:"-100%"
    },"a")
    tl.from(maintext.current,{
      y:"100%",
      opacity:0
      ,duration:0.6
    },"a")
    tl.from(badaR.current,{
 
      opacity:0
      ,duration:0.6
    },"a")
    tl.from(neechewala.current,{
      delay:0.5,
      height:"0vh",
      opacity:0
      ,duration:1.5
    },"a")



  })

  return (
    <div ref={testing} id="main">

      <div ref={fulldiv} class="hero max-w-screen-2xl h-[110vh] bg-[#151519] text-white relative">
        {/* this is the nav section px-7*/}
        <div ref={navi} class="navbar w-full px-5 sm:px-10 lg:px-5 pt-4 text-white flex items-center justify-between">
          <div class="flex gap-5 lg:gap-8 items-center ">
            <div>
              <p class="w-12 sm:w-20 lg:w-16 h-[1px]  bg-white mb-[8px] bg-gradient-to-l lg:mb-[6px] from-zinc-400 to-zinc-700 "></p>
              <p class="w-12 sm:w-20 lg:w-16 h-[1px] bg-white bg-gradient-to-l from-zinc-400 to-zinc-700 "></p>
            </div>
            <h1 class="text-[12.5px] sm:text-[22px] lg:text-[11.5px] font1 opacity-70">menu</h1>
          </div>
          <div class="w-28 sm:w-36 lg:w-28 h-10 sm:h-14 lg:h-9 rounded-full border-[1px] border-white/40 lg:border-white/10 flex items-center justify-center ">
            <p class="text-[11px] sm:text-[16px] lg:text-[12px] font3 opacity-80 tracking-wide ">
              Send request
            </p>
          </div>
        </div>



        <div class="w-full relative flex h-[75vh] lg:h-[70vh] items-center justify-center flex-col  ">

          <div class=" relative z-10">
            <h1  class="text-[#A9ABB5] pr-3 overflow-hidden text-[6rem] sm:text-[11rem] lg:text-[19rem] lg:pr-5  font1 lg:-tracking-[20px] -tracking-[10px] ">
              <span ref={maintext} className=" inline-block">

              Somany
              </span>
            </h1>
            <div ref={badaR} class="w-6 sm:w-12 h-6 sm:h-12 lg:h-10 lg:w-10 rounded-full border-[3px] lg:border-[5px] sm:border-[5px] border-[#A9ABB5]/70 font5 absolute top-[25%] lg:top-[39%] -right-[2%] lg:-right-[1%] lg:-right-[0] flex items-center justify-center text-[1rem] sm:text-[1.5rem] font-bold  text-[#A9ABB5]">
              R
            </div>
            
          </div>

          {/* this is for the absolute images section */}

          <div>
            <img ref={img2} className="w-24 origin-bottom  lg:w-52 sm:w-32 h-32 sm:h-56 lg:h-32 object-cover absolute top-[17%] lg:-top-1 sm:top-[15%] left-[14%] lg:left-[34%] z-10" src="https://selemen.liqium.com/img/m2.jpg" alt="not showing" />
            <img ref={img3} className="w-44 lg:w-80 sm:w-64 h-56 sm:h-80 lg:h-56 object-cover absolute top-[31%] sm:top-[37%] lg:top-[41%] z-[3] left-[22.6%] sm:left-[18.5%] lg:left-[21.6%]" src="https://selemen.liqium.com/img/m1.jpg" alt="not showing" />
            <img ref={img4} className="w-36 lg:w-56  sm:w-[280px] h-[330px] object-cover absolute top-[20%] sm:top-[10%] lg:top-[30%] z-[1] left-[39.6%]" src="https://selemen.liqium.com/img/m3.jpg" alt="not showing" />
            <img ref={img5} className="w-24 sm:w-80 h-[110px] sm:h-[140px] lg:h-[180px] object-cover absolute top-[70%] sm:top-[60.5%] lg:top-[81%] z-[2] left-[52.6%] lg:left-[42.6%]" src="https://selemen.liqium.com/img/m4.jpg" alt="not showing" />
            <img ref={img6} className="w-56 lg:w-80 h-[158px] lg:h-[198px] object-cover absolute top-[8%] sm:top-[28%] lg:top-[1.5%] z-[2] left-[51.6%] sm:left-[65%] lg:left-[51.6%]" src="https://selemen.liqium.com/img/m5.jpg" alt="not showing" />
            <img ref={img1} className="w-24 sm:w-32 lg:w-80 h-[188px] sm:h-[280px] lg:h-[188px] object-left object-cover absolute top-[50%] sm:top-[62%] lg:top-[40%] z-[0] left-[4.6%] lg:left-[51.6%]" src="https://selemen.liqium.com/img/m7.jpg" alt="not showing" />
            <img ref={img7} className="w-[300px] h-[0px] lg:h-[188px]  object-top object-cover absolute top-[74%] sm:top-[54%] lg:top-[74%] z-[14] left-[55.6%]" src="https://selemen.liqium.com/img/m6.jpg" alt="not showing" />
          </div>




        </div>

          <div ref={neechewala} className="w-full h-[38vh]  absolute bottom-0 px-4 ">
            <div className="absolute top-[63%] left-[50%] -translate-x-1/2">
              <p className="font2 tracking-wider text-[14px] sm:text-[22px] lg:text-sm opacity-60 uppercase">Ceramics</p>
            </div>

            <div className="w-full h-full flex px-2  border-b-[1px] border-white/50">
                  <div className="w-[50%] pb-1 font2 opacity-60 text-[14px] sm:text-[22px] lg:text-sm border-r-[1px] border-white/50 h-full flex items-end ">
                    <p>&copy; 2024</p>
                  </div>
                  <div className="w-[50%] h-full pb-1 opacity-60 text-[14px] sm:text-[22px] lg:text-sm font2 items-end justify-end flex ">
                    <p>life-Style</p>
                  </div>
            </div>
          </div>





      </div>
    </div>


  );
};

export default Landing;
