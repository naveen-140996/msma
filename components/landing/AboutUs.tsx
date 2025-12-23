// AboutUs.tsx
"use client";

import React from "react";
import Image from "next/image";

import Testimonial1 from "@/public/assets/testimonial/NewArr-2.png"

const AboutUs: React.FC = () => {
  return (
    <section className="relative bg-gray-100 py-16 md:py-16 overflow-hidden" id="about-us">
      {/* Background subtle pattern or gradient for modern feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-silver/10 to-black/5 opacity-50" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            About <span className="text-[#595959]">Us</span> 
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading IT services provider dedicated to driving digital transformation, cloud solutions, and cybersecurity for businesses worldwide.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-6">
              To empower organizations with innovative technology solutions that enhance efficiency, security, and growth in an ever-evolving digital landscape.
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              Becoming the global partner of choice for seamless IT integration, fostering a future where technology serves humanity without boundaries.
            </p>
          </div>
          <div className="relative h-64 md:h-auto rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1350&q=80" // Modern office/team image
              alt="Our Team in Action"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false} // Lazy load
            />
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h4 className="text-4xl font-bold text-primary mb-2">10+</h4>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h4 className="text-4xl font-bold text-primary mb-2">500+</h4>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h4 className="text-4xl font-bold text-primary mb-2">1000+</h4>
            <p className="text-gray-600">Projects Delivered</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h4 className="text-4xl font-bold text-primary mb-2">50+</h4>
            <p className="text-gray-600">Expert Team Members</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "CEO & Founder", image: Testimonial1 },
              { name: "Jane Smith", role: "CTO", image: Testimonial1 },
              { name: "Alex Johnson", role: "Lead Developer", image: Testimonial1 },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-black mb-1">{member.name}</h4>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;