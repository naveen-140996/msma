"use client";

import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  TrendingUp,
  ShoppingCart,
  Bot,
  Settings,
} from "lucide-react";

const services = [
  {
    title: "Website & Webpage Development",
    description:
      "Modern, scalable websites built with performance and usability in mind.",
    icon: Globe,
  },
  {
    title: "Digital Marketing Solutions",
    description:
      "Result-driven strategies to increase brand reach and engagement.",
    icon: TrendingUp,
  },
  {
    title: "E-Commerce Product Support",
    description:
      "Complete e-commerce setup, optimization, and support.",
    icon: ShoppingCart,
  },
  {
    title: "AI Automation Solutions",
    description:
      "Intelligent automation to streamline workflows and operations.",
    icon: Bot,
  },
  {
    title: "Custom Business Solutions",
    description:
      "Tailor-made digital systems designed for complex business needs.",
    icon: Settings,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  /* GLOBAL SCROLL */
  const { scrollY } = useScroll();

  /* SCROLL SPEED (positive = down, negative = up) */
  const scrollVelocity = useVelocity(scrollY);

  /* Smooth velocity */
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 300,
  });

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-[160vh] py-28 px-6 md:px-16 bg-white"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-24"
      >
        <h2 className="text-[32px] md:text-[44px] font-extrabold text-gray-900">
          Our Services
        </h2>
        <p className="text-gray-600 mt-4">
          A structured workflow from concept to execution.
        </p>
      </motion.div>

      {/* SERVICES FLOW */}
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isLeft = index % 2 === 0;

          return (
            <div
              key={service.title}
              className="w-full flex flex-col items-center"
            >
              {/* CARD */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`
                  relative max-w-md w-full
                  bg-white rounded-2xl p-8
                  shadow-[0_12px_32px_rgba(0,0,0,0.08)]
                  ${isLeft ? "mr-auto" : "ml-auto"}
                `}
              >
                <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
              </motion.div>

              {/* SCROLL-VELOCITY DASHED CONNECTOR */}
              {index !== services.length - 1 && (
                <svg
                  className="w-4 h-24 my-4"
                  viewBox="0 0 4 100"
                  preserveAspectRatio="none"
                >
                  <motion.line
                    x1="2"
                    y1="0"
                    x2="2"
                    y2="100"
                    stroke="#d1d5db"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                    style={{
                      strokeDashoffset: smoothVelocity,
                    }}
                  />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
