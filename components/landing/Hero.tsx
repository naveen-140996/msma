"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  /* VERY SUBTLE BACKGROUND MOTION */
  useEffect(() => {
    if (!bgRef.current) return;

    gsap.to(bgRef.current, {
      backgroundPosition: "0% 100%",
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section className="relative w-full h-full overflow-hidden px-6 max-sm:py-5 md:p-14 pt-10">

      {/* ===== PROFESSIONAL BACKGROUND ===== */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 hero-premium-bg"
      />

      {/* ===== CONTENT (UNCHANGED) ===== */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-gray-900 font-extrabold font-neuepower leading-tight text-center text-[24px] md:text-[45px] max-w-[100%]"
      >
        Building scalable websites, applications, and digital systems for modern businesses.
      </motion.h1>

      <div className="py-4">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center md:text-[16px] text-[13px] font-gilroy w-full md:w-[50%] mx-auto max-w-[100%] text-gray-600"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti eius
          consectetur consequuntur numquam? Magnam voluptatum modi distinctio voluptatem
          repudiandae ipsum nihil, iure et veniam.
        </motion.p>
      </div>

      <div className="flex justify-center items-center">
        <motion.button
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            ml-4 px-6 py-3 rounded-full
            font-semibold font-gilroy text-sm
            text-white bg-black

            shadow-[0_6px_18px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]
            transition-all duration-300 ease-out
            hover:-translate-y-[1px]
            hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)]
            active:translate-y-[1px]
          "
        >
          Book Appointment
        </motion.button>
      </div>

      {/* ===== YOUR CIRCULAR CTA (UNCHANGED) ===== */}
      <div className="absolute md:left-[100px] top-[30%] flex items-center justify-center max-sm:hidden">
        <div className="relative w-48 h-48 animate-spin-slow">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              id="circlePath"
              d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              fill="none"
            />
            <text fontSize="14" fontWeight="600">
              <textPath href="#circlePath">
                <tspan fill="#64748b">OFFER 20% • Websites • </tspan>
                <tspan fill="#ffb200">BOOK NOW!</tspan>
                <tspan fill="#64748b"> • OFFER 20% • Websites •</tspan>
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
