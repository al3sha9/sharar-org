import React from 'react'
import PIC1 from '../../public/gp1.jpg'
import PIC2 from '../../public/gp01.jpg'
import PIC3 from '../../public/gp2.jpg'
import PIC4 from '../../public/pic4.jpg'
import PIC5 from '../../public/pic5.jpg'
import PIC6 from '../../public/pic6.jpg'
import PIC7 from '../../public/pic7.jpg'
import Image from 'next/image'

export default function Gallery() {
  return (
    <>
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div className="mx-auto lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-6xl font-semibold font-pop tracking-wider text-teal-900 uppercase rounded bg-teal-accent-400">
          Chitral Camp 2023
        </p>
      </div>
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={PIC1} />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={PIC2} />
            </div>
            <div class="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={PIC7} />
            </div>
          </div>
          <div class="flex w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={PIC4} />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={PIC5} />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={PIC6} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
