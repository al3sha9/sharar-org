"use client"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();
  const [sent, setSent] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Form Data:", form.current);

    emailjs
      .sendForm(
        // credentials
        "service_syzr3d5",
        "template_753k92i",
        form.current,
        "fARW8ZQv9IIeTjvnM"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setSent("Message Sent");
        },
        (error) => {
          // console.log(error.text);
          setSent("Message sending failed :(");
        }
      );
  };

  return (
    <>
      <section className=" mt-20 md:mt-0 flex justify-center h-[80vh] items-center flex-col md:flex-row w-100 min-h-100">
        <div className=" h-full bg-white flex justify-center items-center  w-full">
          <div className="forum shadow-xl my-1 w-[95%] md:w-[50%] md:py-10 border-4 rounded border-teal-700 md:px-10">
            <div>
              <h2 className="text-2xl m-1 text-center border-b md:text-left md:border-b-0 font-semibold">
                Fill this to contact us
              </h2>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="divide-y divide-gray-200"
            >
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative py-2 px-2">
                  <input
                    id="name"
                    name="from_name"
                    required
                    type="text"
                    className="peer text-base placeholder-transparent h-10 w-full  border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-teal-700"
                    placeholder="Your Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute px-2 left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative px-2 py-2">
                  <input
                    id="from_email"
                    name="from_email"
                    required
                    type="from_email"
                    className="peer text-base placeholder-transparent h-10 w-full  border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-teal-700"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute px-2 left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email
                  </label>
                </div>
                <div className="relative px-2 py-2">
                  <textarea
                    id="Textarea"
                    required
                    name="textarea"
                    className="peer text-base resize-none placeholder-transparent h-[100px] w-full  border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-teal-700"
                    placeholder="Textarea"
                  />
                  <label
                    htmlFor="Textarea"
                    className="absolute left-0 px-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Your Message
                  </label>
                </div>
                <div className="relative px-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-[#146C94] hover:bg-teal-700 focus:shadow-outline focus:outline-none"
                  >
                    Submit
                  </button>

                  {sent !== null ? (
                    <p
                      className={`my-2 text-base ${sent === "Message Sent"
                        ? "text-green-500"
                        : "text-red-500"
                        }`}
                    >
                      {sent}
                    </p>
                  ) : null}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className=" h-full flex flex-col bg-teal-700 w-full justify-center items-center">
          <div className="md:w-[80%] mx-2 my-8 md:my-0">
            <h2 className="font-bold text-4xl text-white">
              We Value Your Input
            </h2>
            <h3 className="font-base text-2xl text-white">
              Your opinions matter to us, and we're eager to hear what you have to say. Whether you have feedback, questions, or suggestions, we're all ears.
            </h3>
          </div>
        </div>
      </section>

    </>
  );
};