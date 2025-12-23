// components/ServicesSlider.tsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCreative } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

// Example service images - replace with your own or use these URLs for placeholders
const serviceImages = [
  "https://media.istockphoto.com/id/1652169721/vector/digital-transformation-solid-icon-set.jpg?s=612x612&w=0&k=20&c=CQiNLSu7TtYoBmVOvrNELjflMhv5rS-M5Lo5UXVVovE=", // Digital Transformation Icons
  "https://content.presentermedia.com/content/clipart/00032000/32868/digital_technology_background_800_clr.png", // Tech Background
  "https://thumbs.dreamstime.com/b/modern-digital-lock-symbol-futuristic-network-background-representing-cybersecurity-data-protection-concepts-modern-347489879.jpg", // Cybersecurity
  "https://media.istockphoto.com/id/1545108158/vector/digital-transformation-icons-set-with-description.jpg?s=612x612&w=0&k=20&c=JqbXg_ojjYzp-uoihWzq_pSshfRu1SUigCzPOlzgOgU=", // More Icons
  "https://content.presentermedia.com/files/clipart/00030000/30987/futuristic_digital_interface_800_wht.jpg", // Futuristic Interface
  "https://media.istockphoto.com/id/2192925845/vector/digital-transformation-solid-icons-collection-containing-technology-communication-data.jpg?s=612x612&w=0&k=20&c=zKviJ5bwOexNyf-r1cjXSYbtJog7N653YNUuOKWMFM0=", // Solid Icons
];

type Service = {
  title: string;
  description: string;
  imageUrl: string;
};

const services: Service[] = [
  {
    title: "Digital Transformation",
    description: "Accelerate your business growth with cutting-edge digital strategies and seamless technology integration.",
    imageUrl: serviceImages[0],
  },
  {
    title: "Cloud Solutions",
    description: "Secure, scalable, and flexible cloud infrastructure tailored to your enterprise needs.",
    imageUrl: serviceImages[1],
  },
  {
    title: "Cybersecurity",
    description: "Protect your assets with advanced threat detection, 24/7 monitoring, and proactive defense.",
    imageUrl: serviceImages[2],
  },
  {
    title: "Data Analytics & AI",
    description: "Unlock insights from your data with powerful AI-driven analytics and machine learning solutions.",
    imageUrl: serviceImages[3],
  },
  {
    title: "Software Development",
    description: "Custom applications built with modern technologies for maximum performance and scalability.",
    imageUrl: serviceImages[4],
  },
  {
    title: "IT Consulting",
    description: "Expert guidance to optimize your IT infrastructure and align technology with business goals.",
    imageUrl: serviceImages[5],
  },
];

const ServicesSlider: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" id="services">
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-brand-gradient" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10  hero-banner-swiper">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to drive innovation and efficiency for your business.
          </p>
        </motion.div>

        {/* Modern Creative Slider */}
        <Swiper
          loop
          effect="creative"
          creativeEffect={{
            prev: { shadow: true, translate: [0, 0, -400], opacity: 0 },
            next: { translate: ["100%", 0, 0], opacity: 0 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation, EffectCreative]}
          className="max-w-5xl mx-auto"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2"
              >
                {/* Service Image */}
                <div className="order-1 md:order-1">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    width={600}
                    height={600}
                    className=" object-cover"
                    priority={index === 0}
                  />
                </div>

                {/* Service Content */}
                <div className="order-2 md:order-2 text-left bg-secondary p-10">
                  <h3 className="text-2xl md:text-4xl font-bold text-primary mb-6">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 max-sm:text-[16px]">
                    {service.description}
                  </p>
                  <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300 shadow-lg hover:shadow-primary/50 hover:-translate-y-1 text-lg max-sm:text-[16px]">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesSlider;