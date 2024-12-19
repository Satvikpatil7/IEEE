import React, { useEffect } from 'react'
import { TiArrowRight } from 'react-icons/ti'
import Masonry from 'react-masonry-css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useNavigate } from 'react-router-dom';

import img1 from "./assets/1.jpg"
import img2 from "./assets/2.jpg"
import img3 from "./assets/3.jpg"
import img4 from "./assets/4.jpg"
import img5 from "./assets/5.jpg"
import img6 from "./assets/6.jpg"
import img7 from "./assets/7.jpg"
import img8 from "./assets/8.jpg"
import img9 from "./assets/9.jpg"
import img10 from "./assets/10.jpg"
import img11 from "./assets/11.jpg"
import img12 from "./assets/12.jpg"
import img13 from "./assets/13.jpg"
import img14 from "./assets/14.jpg"
import img15 from "./assets/15.jpg"
import img16 from "./assets/16.jpg"
import img17 from "./assets/17.jpg"
import img18 from "./assets/18.jpg"
import img19 from "./assets/19.jpg"
import img20 from "./assets/20.jpg"
import img21 from "./assets/21.jpg"
import img22 from "./assets/22.jpg"
import img23 from "./assets/23.jpg"
import img24 from "./assets/24.jpg"
import img25 from "./assets/25.jpg"
import img26 from "./assets/26.jpg"
import img27 from "./assets/27.jpg"
import img28 from "./assets/28.jpg"
import img29 from "./assets/29.jpg"
import img30 from "./assets/30.jpg"



const PhotoSection = () => {
  const navigate = useNavigate();

  const breakpointColumnsObj = {
    default: 7, // Default column count
    1100: 4,    // 3 columns for screens ≤ 1100px
    768: 4,  // 2 columns for screens ≤ 768px
    500: 3      // 1 column for screens ≤ 500px
  };

  // useEffect(() => {
  //   // const t1 = gsap.timeline({
  //   //   scrollTrigger:{
  //   //     trigger: ".photo", // Ensures it's targeting the correct section
  //   //     start: "top 0%", // Triggers when the section enters the viewport
  //   //     end: "top -100%", // Ends slightly before the section leaves
  //   //     scrub: true,
  //   //     markers: true,
  //   //     pin: true
  //   //   }
  //   // })

  //   // t1.fromTo('.imgAnim', // Select all mem elements
  //   //   {
  //   //     opacity: 0, // Start with opacity 0
  //   //     scale: 1.2
  //   //   },
  //   //   {
  //   //     opacity: 1, // Fade to opacity 1
  //   //     scale: 1,
  //   //   }
  //   // );

  //   // return () => {
  //   //   t1.kill(); // Kill timeline on component unmount
  //   //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Remove scroll triggers
  //   // };

  // },[]);


  return (

    <>
        <div className='photo w-full h-screen flex flex-col justify-center items-center mt-20 overflow-hidden'>
          <div className=''>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white'>Memorable Moments</h1>
              <h1 className='text-base sm:text-lg lg:text-2xl font-bold text-center text-white' >Relive our cherished memories through a captivating photo gallery.</h1>
              <div className='flex justify-center items-center w-full'>
                <button 
                  className="group bg-white text-black rounded-full px-5 py-3 font-bold flex justify-center items-center gap-2 mt-5"
                  onClick={() => navigate('/photo-gallery')}
                >
                    Photo Gallery 
                  <TiArrowRight className="text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
          </div>
            
            <div className='absolute -z-10 h-screen overflow-hidden  masonry opacity-30 sm:px-10 px-2 bg-slate-700'>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto"
            columnClassName="bg-clip-padding"
          >
            <img src={img1} alt="Image 1" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img2} alt="Image 2" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img3} alt="Image 3" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img4} alt="Image 4" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img5} alt="Image 5" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img6} alt="Image 6" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img7} alt="Image 7" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img8} alt="Image 8" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img9} alt="Image 9" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img10} alt="Image 10" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img11} alt="Image 11" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img12} alt="Image 12" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img13} alt="Image 13" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img14} alt="Image 14" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img15} alt="Image 15" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img16} alt="Image 16" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img17} alt="Image 17" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img26} alt="Image 26" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img18} alt="Image 18" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img19} alt="Image 19" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img20} alt="Image 20" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img21} alt="Image 21" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img22} alt="Image 22" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img23} alt="Image 23" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img24} alt="Image 24" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img25} alt="Image 25" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img27} alt="Image 27" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img28} alt="Image 28" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img29} alt="Image 29" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img30} alt="Image 30" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img30} alt="Image 30" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img30} alt="Image 30" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img30} alt="Image 30" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img30} alt="Image 30" className="w-full object-cover border-2 border-gray-300 imgAnim" />
            <img src={img30} alt="Image 30" className="w-full object-cover border-2 border-gray-300 imgAnim" />
          </Masonry>
            </div>
        </div>
        
        
    </>
  )
}

export default PhotoSection