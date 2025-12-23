// components/WhyChooseUs.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Cloud,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";

// Define feature type for better TypeScript support
type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Top-Tier Security",
    description: "Enterprise-grade cybersecurity with 24/7 monitoring and proactive threat detection.",
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Lightning-Fast Performance",
    description: "Optimized cloud infrastructure and high-speed solutions that scale with your business.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-primary" />,
    title: "Scalable Cloud Solutions",
    description: "Flexible, secure, and cost-effective cloud migration and management services.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Expert Team",
    description: "Certified professionals with years of experience in IT transformation and support.",
  },
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "Proven Track Record",
    description: "Hundreds of successful projects and long-term partnerships with global brands.",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-primary" />,
    title: "Customer-First Approach",
    description: "Personalized support, transparent communication, and 100% satisfaction guarantee.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 md:py-24 overflow-hidden" id="why-choose-us">
      {/* Optional subtle grid pattern - add via Tailwind or remove if not needed */}
      <div className="absolute inset-0 opacity-20 bg-grid-gray-300 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional IT services with unmatched expertise, reliability, and innovation.
          </p>
        </motion.div>

        {/* Features Grid with Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              whileHover={{ y: -8 }} // Subtle lift on hover
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-6 inline-block p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-16"
        >
          <button className="bg-primary text-white px-10 py-5 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-secondary hover:text-primary transform hover:-translate-y-1 transition-all duration-300">
            Get Started with Us Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;