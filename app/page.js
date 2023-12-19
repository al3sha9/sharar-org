"use client"
import Blog from "@/components/blogcard";
import { Traction } from "@/components/counter";
import FAQ from "@/components/faq";
import { Header } from "@/components/hero";
import { What } from "@/components/what";
import Link from "next/link";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  useEffect(() => {
    toast('sharar organization is in active development! any feedback is appreciated');

  }, [])

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <What />
      <Traction />
      {/* <Blog /> */}
      <FAQ />
    </>
  )
}
