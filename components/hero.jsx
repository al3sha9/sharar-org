"use client"
import IMG1 from '../public/gp01.jpg';
import IMG2 from '../public/gp1.jpg';
import IMG3 from '../public/gp2.jpg';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Link from 'next/link';
export const Header = () => {
  return (
    <div className="relative md:h-[90.7vh] flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 h-[100%] top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        

        <Swiper
        className='h-100 '
          modules={[ A11y, Autoplay]}
          loop
          slidesPerView={1}
          autoplay={true}
        >
          <SwiperSlide className='shadow-lg '>
            <Image
              className="object-cover w-full rounded  lg:rounded-none lg:shadow-none  md:h-[90.5vh]"
              src={IMG2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className='shadow-lg '>
            <Image
              className="object-cover w-full rounded  lg:rounded-none lg:shadow-none  md:h-[90.5vh]"
              src={IMG3}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className='shadow-lg '>
            <Image
              className="object-cover w-full rounded  lg:rounded-none lg:shadow-none  md:h-[90.5vh]"
              src={IMG1}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='z-50 py-4 md:py-0 -z-10 flex items-center'>
      <div className="relative   flex flex-col items-start  justify-center w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-2xl">
        <div className='flex justify-center items-center'>
        <div className=" flex flex-col justify-center px-4 lg:my-0   rounded-xl md:h-[90vh]  lg:max-w-lg ">
          
          <h1 className="mb-2  lg:text-6xl font-bold tracking-tight text-gray9200 sm:text-4xl sm:leading-none">
            SHARAR
            <br className="hidden md:block" />
            {" "}
            <span className="inline-block text-[#135858]">
              ORGANIZATION
            </span>
          </h1>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
          <div className="flex  items-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#135858] hover:bg-[#135858e8] focus:shadow-outline focus:outline-none"
            >
              Our Work
            </Link>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </Link>
          </div>
        </div>

        </div>
        
      </div>

      </div>
    </div>
  );
};
