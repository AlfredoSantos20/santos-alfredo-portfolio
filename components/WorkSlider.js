import Image from 'next/image';

const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'NEUST-MGT E-SHOPPING',
          path: '/pics5.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'TURKISHAN TRAVELS',
          path: '/pics6.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'LIBRARY MANAGEMENT SYSTEM',
          path: '/library3.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'STATIC CAR E-SHOP',
          path: '/carshop1.png',
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
              {slide.images.map((image, index) => {
                return (
                  <div className='flex items-center justify-center relative overflow-hidden' key={index}>
                    {/* Apply rounded corners */}
                    <Image 
                      src={image.path} 
                      width={500} 
                      height={300} 
                      alt='' 
                      className="rounded-lg"  // Added rounded-lg class
                    />
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-red-900 to-red-800 opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                    <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                      <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                        <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                          {image.title}
                        </div>
                        <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
