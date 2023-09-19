import Image from 'next/image'
import ALISHAN from '../../public/1.png'
import FASIH from '../../public/fasih.png'
import SIDRA from '../../public/sidra.png'
import FARZEEN from '../../public/farzeen.png'
import ZEESHAN from '../../public/zeeshan.png'
import SERENA from '../../public/serena.png'
export default function TEAM() {
  return (

    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-6xl md:px-8 lg:px-2">
    <div className="mx-auto lg:max-w-xl sm:text-center">
      <p className="inline-block px-3 py-px mb-4 text-3xl font-semibold font-pop tracking-wider text-teal-900 uppercase rounded bg-teal-accent-400">
        Sharar Organization Leads
      </p>

    </div>




    <div className="grid w-[100%] gap-5 mx-auto pb-10 sm:grid-cols-2 lg:grid-cols-5 lg:max-w-screen-lg">
      <div>
        <div className="hover:shadow-2xl relative  rounded-full shadow  bg-[#135858] overflow-hidden">
          <Image
            className="relative  w-full h-full rounded transition-transform transform scale-100 hover:scale-110"
            src={FASIH}
            alt="FASIH"
          />
        </div>
        <div className="flex flex-col sm:text-center">
          <p className="text-lg font-bold font-pop">Fasih Uddin</p>
          <p className="mb-5 text-xs text-gray-800">Founder and Lead</p>
          <div className="flex items-center  space-x-3 sm:justify-center">
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <span className='fa-brands fa-linkedin text-xl'></span>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <span className='fa-brands fa-twitter text-xl'></span>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <span className='fa-regular fa-envelope text-xl'></span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="hover:shadow-2xl relative  rounded-full shadow  bg-[#135858] overflow-hidden">
          <Image
            className="relative w-full h-full rounded transition-transform transform scale-100 hover:scale-110"
            src={SIDRA}
            alt="kamran ali"
          />
        </div>
        <div className="flex flex-col sm:text-center">
          <p className="text-lg font-bold font-pop">Sidra</p>
          <p className="mb-5 text-xs text-gray-800">IT LEAD</p>
          <div className="flex items-center space-x-3 sm:justify-center">
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <span className='fa-brands fa-linkedin text-xl'></span>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <span className='fa-brands fa-twitter text-xl'></span>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <span className='fa-regular fa-envelope text-xl'></span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="hover:shadow-2xl relative  rounded-full shadow  bg-[#135858] overflow-hidden">
          <Image
            className="relative w-full h-full rounded transition-transform transform scale-100 hover:scale-110"
            src={ZEESHAN}
            alt=""
          />
        </div>
        <div className="flex flex-col sm:text-center">
          <p className="text-lg font-bold">Zeeshan Ali</p>
          <p className="mb-5 text-xs text-gray-800">Head of Marketing team</p>
          <div className="flex items-center space-x-3 sm:justify-center">
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <span className='fa-brands fa-linkedin text-xl'></span>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <span className='fa-brands fa-twitter text-xl'></span>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <span className='fa-regular fa-envelope text-xl'></span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="hover:shadow-2xl relative  rounded-full shadow  bg-[#135858] overflow-hidden">
          <Image
            className="relative w-full h-full rounded transition-transform transform scale-100 hover:scale-110"
            src={FARZEEN}
            alt="Farzeen"
          />
        </div>
        <div className="flex flex-col sm:text-center">
          <p className="text-lg font-bold font-pop">Farzeen</p>
          <p className="mb-5 text-xs text-gray-800">Head of Communications</p>
          <div className="flex items-center space-x-3 sm:justify-center">
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <span className='fa-brands fa-linkedin text-xl'></span>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <span className='fa-brands fa-twitter text-xl'></span>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <span className='fa-regular fa-envelope text-xl'></span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="hover:shadow-2xl relative  rounded-full shadow  bg-[#135858] overflow-hidden">
          <Image
            className="relative w-full h-full rounded transition-transform transform scale-100 hover:scale-110"
            src={FASIH}
            alt="FASIH"
          />
        </div>
        <div className="flex flex-col sm:text-center">
          <p className="text-lg font-bold">SOMEONE</p>
          <p className="mb-5 text-xs text-gray-800">Lead of Something...</p>
          <div className="flex items-center space-x-3 sm:justify-center">
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <span className='fa-brands fa-linkedin text-xl'></span>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <span className='fa-brands fa-twitter text-xl'></span>
            </a>
            <a
              href="/"
              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <span className='fa-regular fa-envelope text-xl'></span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <hr />

    {/* end of team */}

    <div className="mx-auto pt-4 lg:max-w-xl sm:text-center">
      <p className="inline-block px-3 py-px  text-3xl font-semibold font-pop tracking-wider text-teal-900 uppercase rounded bg-teal-accent-400">
        our Team
      </p>

    </div>


    <div class="flex flex-wrap justify-center  mx-auto py-5 sm:flex-col sm:gap-0 sm:space-x-10 md:flex-row  lg:flex-none lg:flex-row lg:space-x-10 text-center lg:max-w-screen-lg">
      <div class="flex flex-col items-center py-4 ">
        <div class="hover:shadow-2xl relative rounded shadow bg-[#135858] overflow-hidden">
          <Image
            class="relative md:w-[160px] md:h-[160px] rounded transition-transform transform scale-100 hover:scale-110"
            src={ALISHAN}
            alt="FASIH"
          />
        </div>
        <p class="text-lg font-bold mt-3 font-pop">Ali Shan</p>
        <p class="text-xs text-gray-800">IT and Media Team</p>
      </div>

      <div class="flex flex-col items-center py-4  mt-10 sm:mt-0">
        <div class="hover:shadow-2xl relative rounded shadow bg-[#135858] overflow-hidden">
          <Image
            class="relative md:w-[160px] md:h-[160px] rounded transition-transform transform scale-100 hover:scale-110"
            src={FASIH}
            alt="FASIH"
          />
        </div>
        <p class="text-lg font-bold mt-3 font-pop">Marta Clermont</p>
        <p class="text-xs text-gray-800">Design Team Lead</p>
      </div>

      <div class="flex flex-col items-center py-4  mt-10 sm:mt-0">
        <div class="hover:shadow-2xl relative rounded shadow bg-[#135858] overflow-hidden">
          <Image
            class="relative md:w-[160px] md:h-[160px] rounded transition-transform transform scale-100 hover:scale-110"
            src={FASIH}
            alt="FASIH"
          />
        </div>
        <p class="text-lg font-bold mt-3 font-pop">Alice Melbourne</p>
        <p class="text-xs text-gray-800">Human Resources</p>
      </div>
      <div class="flex flex-col items-center py-4  mt-10 sm:mt-0">
        <div class="hover:shadow-2xl relative rounded shadow bg-[#135858] overflow-hidden">
          <Image
            class="relative md:w-[160px] md:h-[160px] rounded transition-transform transform scale-100 hover:scale-110"
            src={FASIH}
            alt="FASIH"
          />
        </div>
        <p class="text-lg font-bold mt-3 font-pop">Alice Melbourne</p>
        <p class="text-xs text-gray-800">Human Resources</p>
      </div>


      <div class="flex flex-col items-center py-4  mt-10 sm:mt-0">
        <div class="hover:shadow-2xl relative rounded shadow bg-[#135858] overflow-hidden">
          <Image
            class="relative md:w-[160px] md:h-[160px] rounded transition-transform transform scale-100 hover:scale-110"
            src={FASIH}
            alt="FASIH"
          />
        </div>
        <p class="text-lg font-bold mt-3 font-pop">Alice Melbourne</p>
        <p class="text-xs text-gray-800">Human Resources</p>
      </div>


      <div class="flex flex-col items-center py-4  mt-10 sm:mt-0">
        <div class="hover:shadow-2xl relative rounded shadow bg-[#135858] overflow-hidden">
          <Image
            class="relative md:w-[160px] md:h-[160px] rounded transition-transform transform scale-100 hover:scale-110"
            src={FASIH}
            alt="FASIH"
          />
        </div>
        <p class="text-lg font-bold mt-3 font-pop">Alice Melbourne</p>
        <p class="text-xs text-gray-800">Human Resources</p>
      </div>


      <div class="flex flex-col items-center py-4  mt-10 sm:mt-0">
        <div class="hover:shadow-2xl relative rounded shadow bg-[#135858] overflow-hidden">
          <Image
            class="relative md:w-[160px] md:h-[160px] rounded transition-transform transform scale-100 hover:scale-110"
            src={FASIH}
            alt="FASIH"
          />
        </div>
        <p class="text-lg font-bold mt-3 font-pop">Alice Melbourne</p>
        <p class="text-xs text-gray-800">Human Resources</p>
      </div>


    </div>
    </div>


    );
};