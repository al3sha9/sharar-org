import React from 'react'
import GP2 from '../../public/pic4.jpg'
import GP1 from '../../public/gp1.jpg'
import GP3 from '../../public/gp2.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Work() {
    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Our Work Across Pakistan</h2>

                        <p className="mx-auto mt-4 max-w-md text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                            dicta incidunt est ipsam, officia dolor fugit natus?
                        </p>
                    </header>

                    <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
                        <li>
                            <Link href="/" className="group relative block">
                                <Image
                                    src={GP1}
                                    alt=""
                                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                                />

                                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                    <h3 className="text-xl font-medium text-white bg-black md:px-2 bg-black md:px-2">Chitral Camp</h3>

                                    <span
                                        className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                    >
                                        Learn More
                                    </span>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className="group relative block">
                                <Image
                                    src={GP3}
                                    alt=""
                                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                                />

                                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                    <h3 className="text-xl font-medium text-white bg-black md:px-2">Winter Jumpers</h3>

                                    <span
                                        className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                    >
                                        Shop Now
                                    </span>
                                </div>
                            </Link>
                        </li>

                        <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                            <Link href="/" className="group relative block">
                                <Image
                                    src={GP2}
                                    alt=""
                                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                                />

                                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                    <h3 className="text-xl font-medium text-white bg-black md:px-2">Chitral Camp 2023</h3>

                                    <span
                                        className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                    >
                                        Learn More
                                    </span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
