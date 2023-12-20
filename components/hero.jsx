"use client";
import IMG1 from "../public/gp01.jpg";
import IMG2 from "../public/gp1.jpg";
import IMG3 from "../public/gp2.jpg";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";
export const Header = () => {
  return (
    <>
      <div className="w-full md:h-[80vh]   bg-teal-600">
        <Swiper
          className="h-100 "
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          // autoplay={true}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div
              className="bg-white flex w-full h-[79vh] md:px-10 justify-center items-center"
              style={{
                backgroundImage: `url(${IMG1.src})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            >
              <h1 className="mb-2 bg-white text-center md:text-start lg:text-8xl font-bold tracking-tight  text-4xl sm:leading-none">
                SHARAR
                <br className="hidden md:block" />{" "}
                <span className="inline-block text-[#135858]">
                  ORGANIZATION
                </span>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="bg-white flex w-full h-[79vh] md:px-10 justify-center items-center"
              style={{
                backgroundImage: `url(${IMG2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="mb-2 bg-white text-center  lg:text-8xl font-bold tracking-tight  text-4xl sm:leading-none">
                CHANGING THE
                <br className="hidden md:block" />{" "}
                <span className="inline-block text-[#135858]">LANDSCAPE</span>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="bg-white flex w-full h-[79vh] md:px-10 justify-center items-center"
              style={{
                backgroundImage: `url(${IMG3.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="mb-2 bg-white text-center  lg:text-8xl font-bold tracking-tight  text-4xl sm:leading-none">
                THROUGH
                <br className="hidden md:block" />{" "}
                <span className="inline-block text-[#135858]">
                  YOUTH
                </span>
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
