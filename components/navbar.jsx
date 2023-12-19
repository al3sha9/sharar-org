"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrop, setIsDrop] = useState(false);

  useEffect(() => {
    const handleGlobalClick = () => {
      if (isDrop) {
        setIsDrop(false);
      }
    };

    if (isDrop) {
      // Attach the event listener when the dropdown is open
      document.addEventListener("click", handleGlobalClick);
    }

    // Cleanup the event listener when the component unmounts or dropdown closes
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [isDrop]);

  return (
    <div className="bg-[#135858]">
      <div class="px-4  py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <Link
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              SHARAR ORGANIZATION
            </span>
          </Link>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                href="/team"
                aria-label="Our Team"
                title="Our Team"
                class="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                aria-label="Product pricing"
                title="Product pricing"
                class="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                aria-label="About us"
                title="About us"
                class="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                About us
              </Link>
            </li>
            <li className="relative group ">
              <button
                onClick={() => setIsDrop(!isDrop)}
                // onMouseLeave={()=> setIsDrop(isDrop)}
                className="font-semibold transition-all justify-center items-center hover:underline tracking-wide text-white flex duration-75"
              >
                Blogs{" "}
                <svg
                  className="ms-2 text-white "
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.589585 1.30342C0.0670926 1.94531 0.157045 2.89232 0.793881 3.42252L4.9406 6.87489C5.54298 7.3764 6.4602 7.37377 7.05941 6.87489L11.2061 3.42252C11.843 2.89232 11.9329 1.94531 11.4104 1.30342C10.8839 0.656532 9.93347 0.562464 9.29163 1.09683L6.00001 3.83729L2.70838 1.09683C2.06654 0.562464 1.11615 0.656532 0.589585 1.30342Z"
                    // fill="#fff"
                  ></path>
                </svg>
              </button>

              <div
                className={`absolute left-[0px] z-50 mt-4 space-y-2 bg-white border text-center rounded shadow-xl transition-all duration-[400ms] ${
                  isDrop
                    ? "opacity-100 -left-[30px]"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <Link
                  href="/student-activism"
                  aria-label="student-activism"
                  title="student-activism"
                  className="block px-10 py-2 text-gray-800 transition-colors duration-200 hover:underline font-semibold "
                >
                  Activism
                </Link>
                <Link
                  href="/volunterism"
                  aria-label="Volunterism"
                  title="Volunterism"
                  className="block px-10 py-2 text-gray-800 transition-colors duration-200 hover:underline font-semibold "
                >
                  Volunterism
                </Link>
                <Link
                  href="/co-profiles"
                  aria-label="co-profiles"
                  title="co-profiles"
                  className="block px-10 py-2 text-gray-800 transition-colors duration-200 hover:underline font-semibold "
                >
                  Co-profiles
                </Link>
              </div>
            </li>
            <li>
              <Link
                href="/contact"
                rel="norefferer"
                target="_blank"
                aria-label="Contact Us"
                title="Contact Us"
                class="inline-flex items-center justify-center  h-12 px-8 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-200" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 z-20 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                      >
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Sharar Organization
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounde hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-900" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <Link
                          href="/team"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Our Work
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/gallery"
                          aria-label="Product pricing"
                          title="Product pricing"
                          class="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about"
                          aria-label="About us"
                          title="About us"
                          class="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About us
                        </Link>
                      </li>
                      <li className="relative group ">
                        <button
                          onClick={() => setIsDrop(!isDrop)}
                          // onMouseLeave={()=> setIsDrop(isDrop)}
                          className="font-semibold transition-all justify-center items-center hover:underline tracking-wide text-black flex duration-75"
                        >
                          Blogs{" "}
                          <svg
                            className="ms-2 text-white "
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.589585 1.30342C0.0670926 1.94531 0.157045 2.89232 0.793881 3.42252L4.9406 6.87489C5.54298 7.3764 6.4602 7.37377 7.05941 6.87489L11.2061 3.42252C11.843 2.89232 11.9329 1.94531 11.4104 1.30342C10.8839 0.656532 9.93347 0.562464 9.29163 1.09683L6.00001 3.83729L2.70838 1.09683C2.06654 0.562464 1.11615 0.656532 0.589585 1.30342Z"
                              // fill="#fff"
                            ></path>
                          </svg>
                        </button>

                        <div
                          className={`absolute left-[0px] mt-4 space-y-2 bg-white border text-center rounded shadow-xl transition-all duration-[400ms] ${
                            isDrop
                              ? "opacity-100 -left-[30px]"
                              : "opacity-0 pointer-events-none"
                          }`}
                        >
                          <Link
                            href="/student-activism"
                            aria-label="student-activism"
                            title="student-activism"
                            className="block px-10 py-2 text-gray-800 transition-colors duration-200 hover:underline font-semibold "
                          >
                            student-activism
                          </Link>
                          <Link
                            href="/volunterism"
                            aria-label="Volunterism"
                            title="Volunterism"
                            className="block px-10 py-2 text-gray-800 transition-colors duration-200 hover:underline font-semibold "
                          >
                            Volunterism
                          </Link>
                          <Link
                            href="/co-profiles"
                            aria-label="co-profiles"
                            title="co-profiles"
                            className="block px-10 py-2 text-gray-800 transition-colors duration-200 hover:underline font-semibold "
                          >
                            Co-profiles
                          </Link>
                        </div>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#135858]  focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
