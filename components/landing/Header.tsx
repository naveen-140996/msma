"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/public/assets/msma-logo.png";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  /* STICKY DETECTION */
  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* LOCK BODY SCROLL */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Tesitimonials", path: "/tesitimonials" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 w-full transition-all duration-500">
        <div
          className={`
            mx-auto transition-all duration-500
            ${isSticky
              ? "w-full px-0"
              : "max-w-8xl"}
          `}
        >
          <div
            className={`
              flex items-center justify-between px-6 py-4
              transition-all duration-500
              ${isSticky
                ? "rounded-none animated-silver-gradient shadow-xl"
                : " bg-brand-gradient"}
            `}
          >
            {/* LOGO */}
            <Image src={Logo} alt="logo" className="w-[90px]" />

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8 ">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`
                    transition font-semibold font-gilroy
                    ${pathname === item.path
                      ? "text-white border-b-2 border-[#ffb200]"
                      : "text-black hover:text-white hover:border-b-2 hover:border-[#ffb200]"}
                  `}
                >
                  {item.label}
                </Link>
              ))}

             <button
  className="
    ml-4 px-6 py-3 rounded-full
    font-medium text-sm
    text-white
    bg-blur-gradient
    backdrop-blur-md
    font-gilroy
    /* DEPTH */
    shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]
    
    /* INTERACTION */
    transition-all duration-300 ease-out
    hover:-translate-y-[1px]
    hover:shadow-[0_14px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.3)]
    active:translate-y-[1px]
    active:shadow-[0_6px_18px_rgba(0,0,0,0.4)]
  "
>
  Book Appointment
</button>
            </nav>
          {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="
                md:hidden
                w-12 h-12 rounded-full
                bg-black/30 backdrop-blur-md
                flex items-center justify-center
                relative
                transition-all duration-300
              "
            >
              {/* LINE 1 – LONG */}
              <span
                className={`
                  absolute h-[2.5px] bg-white rounded-full
                  transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
                  ${open ? "w-6 rotate-45 translate-y-0" : "w-7 -translate-y-[7px]"}
                `}
              />

              {/* LINE 2 – MEDIUM */}
              <span
                className={`
                  absolute h-[2.5px] bg-white rounded-full
                  transition-all duration-300
                  ${open ? "opacity-0 scale-0" : "w-5"}
                `}
              />

              {/* LINE 3 – SHORT */}
              <span
                className={`
                  absolute h-[2.5px] bg-white rounded-full
                  transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
                  ${open ? "w-6 -rotate-45 translate-y-0" : "w-3 translate-y-[7px]"}
                `}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ================= OVERLAY ================= */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-[998]
          bg-black/40 backdrop-blur-md
          transition-opacity duration-500
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* ================= MOBILE MENU ================= */}
      <aside
        className={`
          fixed inset-y-0 right-0 z-[999]
          w-full
          transition-transform duration-700
          ease-[cubic-bezier(.22,1,.36,1)]
          ${open ? "translate-x-0" : "translate-x-full"}
          ${isSticky ? "animated-silver-gradient" : "bg-brand-gradient"}
        `}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 w-11 h-11 rounded-full bg-black/40 flex items-center justify-center"
        >
          <span className="absolute w-5 h-[2px] bg-white rotate-45" />
          <span className="absolute w-5 h-[2px] bg-white -rotate-45" />
        </button>

        {/* MENU */}
        <nav className="pt-32 px-8 flex flex-col gap-8">
          {navItems.map((item, i) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`
                text-lg font-semibold transition-all duration-500
                ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
                ${pathname === item.path ? "text-white" : "text-[#000"}
              `}
            >
              {item.label}
            </Link>
          ))}

           <button
  className="
    ml-4 px-6 py-3 rounded-full
    font-medium text-sm
    text-secondPrimary
    bg-blur-gradient
    backdrop-blur-md
    font-gilroy
    /* DEPTH */
    shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]
    
    /* INTERACTION */
    transition-all duration-300 ease-out
    hover:-translate-y-[1px]
    hover:shadow-[0_14px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.3)]
    active:translate-y-[1px]
    active:shadow-[0_6px_18px_rgba(0,0,0,0.4)]
  "
>
  Book Appointment
</button>
        </nav>
      </aside>
    </>
  );
}
