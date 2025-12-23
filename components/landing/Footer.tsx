// components/Footer.tsx
"use client";

import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Logo from '@/public/assets/msma-logo.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 md:py-10">
      {/* Subtle top gradient border */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
             <div className="text-xl font-bold">
                <Image
                src={Logo}
                alt="MSMA Logo"
                width={120}
                height={40}
                priority
                className="object-contain"
            />
            </div>
            <p className="text-gray-400 mb-6">
              Leading provider of digital transformation, cloud services, cybersecurity, and innovative IT solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Why Choose Us", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-secondary transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Digital Transformation",
                "Cloud Solutions",
                "Cybersecurity",
                "Data Analytics & AI",
                "Software Development",
                "IT Consulting",
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-secondary transition">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span>info@msmaitsolutions.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>New York, NY 10001, USA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} MSMA IT Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;