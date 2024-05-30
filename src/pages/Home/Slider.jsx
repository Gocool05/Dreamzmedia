import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './styles.css'
import { Autoplay, Pagination, Navigation, FreeMode, Scrollbar } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, FreeMode, Scrollbar, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className='flex '>
          <img src="../../../Images/FB_IMG_1475170958394.jpg" className='' alt="Nature 2" />
          <span className='absolute h-full w-full flex flex-col gap-3 justify-center bg-opacity-45 bg-black items-center text-center'>
            <svg className='svg w-full'>
                  <defs>
                    <pattern id="polka-dots" x="0" y="0"  width="100" height="100"
                            patternUnits="userSpaceOnUse">
                      <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                    </pattern>  
                  </defs>
              <text x="50%" y="90%"  text-anchor="middle"  >
              Dreamzmedia
              </text>
              </svg>
            <button class="SliderButton cursor-pointer rounded-md uppercase bg-gray-lite px-4 py-1 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#AE8625,-0.5rem_-0.5rem_#AE8625] hover:bg-gray-normal hover:text-gray-lite transition">
              See more
            </button>
            <div class="iconSlider ">
            <a href='' className='active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#AE8625,-0.5rem_-0.5rem_#AE8625] transition'> <i class="fa fa-facebook "></i></a>
            <a href='' className='active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#AE8625,-0.5rem_-0.5rem_#AE8625] transition'> <i class="fa fa-instagram"></i></a>
            <a href='' className='active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#AE8625,-0.5rem_-0.5rem_#AE8625] transition' > <i class="fa-brands fa-youtube"></i></a>
            <a href='' className='active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#AE8625,-0.5rem_-0.5rem_#AE8625] transition'> <i class="fa-brands fa-x-twitter"></i></a>
            <a href='' className='active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#AE8625,-0.5rem_-0.5rem_#AE8625] transition'> <i class="fa fa-linkedin"></i></a>
            </div>
            </span>
        </SwiperSlide>
        <SwiperSlide className='flex '>
          <img src="https://images.squarespace-cdn.com/content/v1/60da576b8b440e12699c9263/bdfe74e5-e721-4bf7-ae29-ece7970cd598/20210915-114710-OVATION-02995.jpg" alt="Nature 2" />
          <span className='absolute h-full w-full flex flex-col gap-3 justify-center bg-opacity-45 bg-black items-center text-center'>
            <svg className='svg1 w-full'>
                  <defs>
                    <pattern id="polka-dots" x="0" y="0"  width="100" height="100"
                            patternUnits="userSpaceOnUse">
                      <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                    </pattern>  
                  </defs>
              <text x="50%" y="90%"  text-anchor="middle"  >
              MovieMads
              </text>
              </svg>
            <button class="SliderButton cursor-pointer rounded-md uppercase bg-gray-lite px-4 py-1 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#ff0015,-0.5rem_-0.5rem_#ff0015] hover:bg-gray-normal hover:text-gray-lite transition">
              See more
            </button>
            <div class="iconSlider ">
            <a href='' className='active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#ff0015,-0.5rem_-0.5rem_#ff0015] transition'> <i class="fa fa-facebook "></i></a>
            <a href='' className='active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#ff0015,-0.5rem_-0.5rem_#ff0015] transition'> <i class="fa fa-instagram"></i></a>
            <a href='' className='active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#ff0015,-0.5rem_-0.5rem_#ff0015] transition' > <i class="fa-brands fa-youtube"></i></a>
            <a href='' className='active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#ff0015,-0.5rem_-0.5rem_#ff0015] transition'> <i class="fa-brands fa-x-twitter"></i></a>
            <a href='' className='active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#ff0015,-0.5rem_-0.5rem_#ff0015] transition'> <i class="fa fa-linkedin"></i></a>
            </div>
            </span>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
