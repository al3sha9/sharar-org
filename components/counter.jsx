"use client";
import React from "react";
import CountUp from "react-countup";

export const Traction = () => {
  return (
    <section className="bg-[#135858]">
      <div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-10">
        <div className="text-center">
          <h2 className="grad2 text-4xl md:text-5xl font-bold">PROGRESS</h2>
        </div>
        <div className="w-full flex flex-wrap justify-center pt-10 md:flex-row">
          <div className="md:w-1/5 w-1/2 text-center py-3 md:py-0">
            <CountUp
              end={4}
              duration={2.75}
              separator=" "
              suffix="+"
              className="font-bold text-7xl text-[#ffffff]"
            ></CountUp>
            <h4 className="font-medium text-3xl">
              Events
              <br />
              Conducted
            </h4>
            {/* <h5>50% Women</h5> */}
          </div>
          <div className="md:w-1/5 w-1/2 text-center py-3 md:py-0">
            <CountUp
              end={200}
              duration={2.75}
              separator=" "
              suffix="+"
              className="font-bold text-7xl text-[#ffffff]"
            ></CountUp>
            <h4 className="font-medium text-3xl">
              Students
              <br />
              
            </h4>
          </div>
          <div className="md:w-1/5 w-1/2 text-center py-3 md:py-0">
            <CountUp
              end={6}
              duration={2.75}
              separator=" "
              suffix="+"
              className="font-bold text-7xl text-[#ffffff]"
            ></CountUp>
            <h4 className="font-medium text-3xl">
              Projects
              <br />
              Completed
            </h4>
          </div>
          <div className="md:w-1/5 w-1/2 text-center py-3 md:py-0">
            <CountUp
              end={15}
              duration={2.75}
              className="font-bold text-7xl text-[#ffffff]"
            ></CountUp>
            <h4 className="font-medium text-3xl">
              Training
              <br />
              Programs
            </h4>
          </div>
          <div className="md:w-1/5 w-1/2 text-center py-3 md:py-0">
            <CountUp
              end={515}
              duration={2.75}
              separator=" "
              suffix="+"
              className="font-bold text-7xl text-[#ffffff]"
            ></CountUp>
            <h4 className="font-medium text-3xl">
              Applicants
              <br />
              Trained
            </h4>
            <h5>37% Girls</h5>
          </div>
        </div>
      </div>
    </section>
  );
};
