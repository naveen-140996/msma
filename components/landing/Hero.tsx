"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroBannerImg from "@/public/assets/banner/hero-banner-1.png";
import HeroBg from "@/public/assets/banner/hero-section-bg.png";
import HeroSection from "./HeroSection";

export default function Hero() {
  return (
    <>
      <section className="relative w-full h-full overflow-hidden px-6 max-sm:py-5 md:p-14 pt-10">

        {/* ================= PREMIUM BACKGROUND ================= */}
        <div className="absolute inset-0 -z-10 overflow-hidden">

          {/* Base gradient wash */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff,#f3f4f6,#e5e7eb)]"
          />

          {/* Floating gold blob */}
          <motion.div
            animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#ffb200]/20 rounded-full blur-[120px]"
          />

          {/* Floating blue blob */}
          <motion.div
            animate={{ x: [0, -60, 0], y: [0, 70, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-180px] right-[-180px] w-[480px] h-[480px] bg-[#31CAEA]/20 rounded-full blur-[140px]"
          />

          {/* OPTIONAL noise texture (uncomment if needed) */}
          {/*
          <div className="absolute inset-0 hero-noise pointer-events-none" />
          */}
        </div>

        {/* ================= CONTENT ================= */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-gray-900 font-extrabold font-neuepower leading-tight text-center text-[24px] md:text-[45px] max-w-[100%]"
          >
            Building scalable websites, applications, and digital systems for modern businesses.
          </motion.h1>
        </div>

        <div className="py-4">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center md:text-[16px] text-[13px] font-gilroy w-full md:w-[50%] mx-auto max-w-[100%]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti eius
            consectetur consequuntur numquam? Magnam voluptatum modi distinctio voluptatem
            repudiandae ipsum nihil, iure et veniam, tempore quas necessitatibus veritatis
            molestias!
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
              font-semibold font-gilroy text-sm 
              text-secondPrimary backdrop-blur-md
              shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]
              transition-all duration-300 ease-out
              hover:-translate-y-[1px]
              hover:shadow-[0_14px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.3)]
              active:translate-y-[1px]
              active:shadow-[0_6px_18px_rgba(0,0,0,0.4)]
            "
          >
            Book Appointment
          </motion.button>
        </div>

        {/* ================= CIRCLE CTA ================= */}
        <div className="absolute md:left-[100px] top-[30%] flex items-center justify-center max-sm:hidden">
          <div className="relative w-48 h-48 animate-spin-slow">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                id="circlePath"
                d="M 100, 100
                  m -75, 0
                  a 75,75 0 1,1 150,0
                  a 75,75 0 1,1 -150,0"
                fill="none"
              />

              <text fontSize="14" fontWeight="600">
                <textPath href="#circlePath" startOffset="0%">
                  <tspan fill="#64748b">OFFER 20% • Websites • </tspan>
                  <tspan fill="#ffb200">BOOK NOW!</tspan>
                  <tspan fill="#64748b"> • OFFER 20% • Websites •</tspan>
                </textPath>
              </text>
            </svg>
          </div>

          <div className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-10 md:h-10 rotate-[310deg] w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffb200"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
