"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroBannerImg from "@/public/assets/banner/hero-banner-1.png";
import HeroBg from "@/public/assets/banner/hero-section-bg.png"
import HeroSection from "./HeroSection"

export default function Hero() {
  return (
    <>
    <section className="relative w-full h-full overflow-hidden px-6 max-sm:py-3 md:p-14 pt-10">
      <div className="">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-secondPrimary font-extrabold font-neuepower leading-tight text-center text-[24px] md:text-[45px] max-w-[100%]"
        >
          Building scalable websites, applications, and digital systems for modern businesses.
        </motion.h1>
        
      </div>
      <div className="py-4">
        <motion.p 
           initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }} 
          className="text-center md:text-[16px] text-[13px] font-gilroy w-full  md:w-[50%] mx-auto max-w-[100%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti eius consectetur consequuntur numquam? Magnam voluptatum modi distinctio voluptatem repudiandae ipsum nihil, iure et veniam, tempore quas necessitatibus veritatis molestias!
        </motion.p>
      </div>
      <div className="flex justify-center items-center">
        <motion.button 
        initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
         className="
            ml-4 px-6 py-3 rounded-full
            font-semibold text-sm
            text-white
            bg-black
            backdrop-blur-md

            /* DEPTH */
            shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]
            
            /* INTERACTION */
            transition-all duration-300 ease-out
            hover:-translate-y-[1px]
            hover:shadow-[0_14px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.3)]
            active:translate-y-[1px]
            active:shadow-[0_6px_18px_rgba(0,0,0,0.4)]
          ">
            Book Appointment
        </motion.button>
      </div>
      <div className="absolute md:left-[100px] top-[30%] flex items-center justify-center max-sm:hidden">
        
        {/* Circle Text */}
        <div className="relative w-48 h-48 animate-spin-slow">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Circle Path */}
            <path
              id="circlePath"
              d="M 100, 100
                m -75, 0
                a 75,75 0 1,1 150,0
                a 75,75 0 1,1 -150,0"
              fill="none"
            />

            {/* Gradient for Text */}
            <defs>
              <linearGradient id="textGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#31CAEA" />
                <stop offset="100%" stopColor="#128FC8" />
              </linearGradient>
            </defs>

            {/* Text */}
            <text fontSize="14" fontWeight="600">
              <textPath href="#circlePath" startOffset="0%">
                {/* Offer part */}
                <a href="#offer" className="md:text-[16px] text-[10px]">
                  <tspan fill="text-secondPrimary">OFFER 20% • Websites • </tspan>
                </a>
                {/* Book Now gradient clickable */}
                <a href="#book" className="md:text-[16px] text-[10px]">
                  <tspan fill="#ffb200">BOOK NOW!</tspan>
                </a>
                {/* Courses part */}
                <a href="#courses" className="md:text-[16px] text-[10px]">
                  <tspan fill="text-secondPrimary"> • OFFER 20% • Websites •</tspan>
                </a>
              </textPath>
            </text>
          </svg>
        </div>

        {/* Arrow (fixed, rotated) */}
        <div className="absolute">
          <a href="#book">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-10 md:h-10 rotate-[310deg] w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffb200"
              strokeWidth="2"
            >
              <defs>
                <linearGradient id="gradientStroke" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#31CAEA" />
                  <stop offset="100%" stopColor="#128FC8" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
    </>
    

  );
}
