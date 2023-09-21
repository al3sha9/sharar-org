export default function About() {
    return (
        <div className="container  mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-[#135858] shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                    </div>
                    <div className="order-1 bg-[#135858b5] rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className=" font-bold text-gray-200 text-xl">The Beginning</h3>
                        <h3 className="mb-3 font-bold text-gray-200 text-xl">Oct 2023</h3>
                        <p className="text-sm leading-snug tracking-wide text-gray-200 text-opacity-100">Sharar Org started.</p>
                    </div>
                </div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-[#135858] shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                    </div>
                    <div className="order-1 bg-[#135858b5] rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">hello.</p>
                    </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-[#135858] shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                    </div>
                    <div className="order-1 bg-[#135858b5] rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-gray-200 text-xl">Lorem Ipsum</h3>
                        <p className="text-sm leading-snug tracking-wide text-gray-200 text-opacity-100">hello.</p>
                    </div>
                </div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-[#135858] shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                    </div>
                    <div className="order-1 bg-[#135858b5] rounded-lg shadow-xl w-5/12 px-6 py-4">
                        <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">hello.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
