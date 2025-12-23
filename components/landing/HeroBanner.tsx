"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import HeroBanner1 from "@/public/assets/banner/hero-banner.jpg";
import HeroBanner2 from "@/public/assets/banner/hero-banner-2.jpg";
import HeroBanner3 from "@/public/assets/banner/hero-banner-3.jpg";
import Image from "next/image";

type Slide = {
  id: number;
  image: typeof HeroBanner1;
  title: string;
  subtitle: string;
  cta: string;
};

const slides: Slide[] = [
  { id: 1, image: HeroBanner3, title: "Digital Transformation", subtitle: "Helping businesses evolve with technology", cta: "Learn More" },
  { id: 2, image: HeroBanner2, title: "Cloud Solutions", subtitle: "Secure, scalable cloud infrastructure", cta: "Explore Services" },
  { id: 3, image: HeroBanner1, title: "Cybersecurity", subtitle: "Protecting your business from threats", cta: "Get Started" },
];

const HeroBanner: React.FC = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden hero-banner-swiper">
      <Swiper
        loop
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={`${slide.title} - hero banner`}
                fill
                className="object-cover"
                priority={index === 0} 
                sizes="100vw"
              />

              <div className="absolute inset-0 bg-black bg-opacity-50" />

              <div className="absolute inset-0 flex items-center justify-center pr-24">
                <div className="">
                  <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-white text-lg md:text-2xl mb-8 drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <button className="bg-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-secondary hover:text-primary transition shadow-lg font-medium flex justify-center items-center">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;