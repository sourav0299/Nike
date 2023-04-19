import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div 
    className='relative text-white text-[20px] w-full 
    max-w-[1360px] mx-auto'
    >
      <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      >
        <div>
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/445b0be1-5f21-49be-9247-b042f59742b3/nike-just-do-it.jpg" 
            className='aspect-[16/10] md:aspect-auto object-cover' />
            <div 
            className="px-[15px] md:px-[40px] py-[10px] md:py[25px] 
            font-oswald bg-white absolute bottom-[25px] 
            md:bottom-[75px] left-0 text-black/[0.9] text-[15px] 
            md:text-[30px] uppercase font-medium cursor-pointer 
            hover:opacity-90">
                SHOP NOW !
            </div>
        </div>

        <div>
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/8127cdb2-6a27-4d27-96a4-dfc7cf5e6cdb/nike-just-do-it.jpg" 
            className='aspect-[16/10] md:aspect-auto object-cover' />
            <div 
            className="px-[15px] md:px-[40px] py-[10px] md:py[25px] 
            font-oswald bg-white absolute bottom-[25px] 
            md:bottom-[75px] left-0 text-black/[0.9] text-[15px] 
            md:text-[30px] uppercase font-medium cursor-pointer 
            hover:opacity-90">
                SHOP NOW !
            </div>
        </div>

        <div>
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/cf12ec7c-9578-42b7-9d84-8c14b5bb230e/nike-just-do-it.png" 
            className='aspect-[16/10] md:aspect-auto object-cover' />
            <div 
            className="px-[15px] md:px-[40px] py-[10px] md:py[25px] 
            font-oswald bg-white absolute bottom-[25px] 
            md:bottom-[75px] left-0 text-black/[0.9] text-[15px] 
            md:text-[30px] uppercase font-medium cursor-pointer 
            hover:opacity-90">
                SHOP NOW !
            </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
