"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Eye, ArrowRight } from "lucide-react";
import AboutusImg from "@/public/assets/images/about-us-img.png"

export default function AboutSection() {
  return (
    <section className="w-full py-20 px-4 md:px-16  overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[28px] shadow-xl">
            <Image
              src={AboutusImg}
              alt="Technology Team"
              width={900}
              height={700}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* ABOUT TAG */}
          <p className="uppercase tracking-widest text-[16px] font-bold text-primary mb-3 text-secondPrimary font-neuepower">
            About Us
          </p>

          {/* TITLE */}
          <h2 className="text-[34px] md:text-[44px] font-extrabold text-gray-900 leading-tight mb-6 font-gilroy">
            Your Trusted <br /> Technology Partner
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-[15px] leading-relaxed mb-10 max-w-xl font-gilroy font-medium">
            MSMA Enterprises is an IT solutions company delivering reliable,
            scalable, and business-focused digital services. We work with
            startups, SMEs, and growing enterprises to transform ideas into
            high-performing digital products.
          </p>

         {/* FEATURES */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">

  {/* Mission Card */}
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="bg-white rounded-2xl p-6 shadow-[0_15px_35px_rgba(15,23,42,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow cursor-pointer"
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-secondPrimary flex items-center justify-center shrink-0">
        <Rocket className="text-primary w-6 h-6" />
      </div>

      <div> 
        <h4 className="font-semibold text-gray-900 mb-2 text-[16px] font-gilroy">
          Our Mission
        </h4>
        <p className="text-sm text-gray-600 leading-relaxed font-gilroy">
          Revolutionize the way you work through innovative and scalable
          technology solutions designed for modern businesses.
        </p>
      </div>
    </div>
  </motion.div>

  {/* Vision Card */}
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="bg-white rounded-2xl p-6 shadow-[0_20px_45px_rgba(15,23,42,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-shadow cursor-pointer"
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-secondPrimary flex items-center justify-center shrink-0">
        <Eye className="text-primary w-6 h-6" />
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-2 text-[16px] font-gilroy">
          Our Vision
        </h4>
        <p className="text-sm text-gray-600 leading-relaxed font-gilroy">
          Empower organizations to achieve sustainable growth through
          future-ready digital systems and technology innovation.
        </p>
      </div>
    </div>
  </motion.div>

</div>


          {/* BUTTON */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#about"
            className="inline-flex items-center gap-3 text-sm bg-primary font-gilroy
              text-secondPrimary backdrop-blur-md hover:bg-[#000] hover:text-secondary transition text-[#000] px-8 py-4 rounded-full font-medium shadow-lg"
          >
            Learn More About Us
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
