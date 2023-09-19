"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const Header = () => {
  return (
    <div className="relative md:h-[90.5vh]  flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 h-[100%] top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        

        <Swiper
        className='h-100'
          modules={[ A11y, Autoplay]}
          loop
          slidesPerView={1}
          autoplay={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <img
              className="object-cover w-full rounded shadow-lg lg:rounded-none lg:shadow-none  md:h-[90.5vh]"
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full rounded shadow-lg lg:rounded-none lg:shadow-none  md:h-[90.5vh]"
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full rounded shadow-lg lg:rounded-none lg:shadow-none  md:h-[90.5vh]"
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="object-cover w-full rounded shadow-lg lg:rounded-none lg:shadow-none  md:h-[90.5vh]"
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="relative md:h-[100vh] flex flex-col items-start justify-center w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40   lg:max-w-lg lg:pr-5">
          
          <h1 className="mb-5 font-sans lg:text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
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
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#135858] hover:bg-[#135858e8] focus:shadow-outline focus:outline-none"
            >
              Our Work
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
