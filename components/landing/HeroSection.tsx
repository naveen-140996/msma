'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RobotParallax() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ---------------- INITIAL POSITION ---------------- */
      gsap.set('.robot', {
        xPercent: -30,    // start LEFT
        yPercent: -10,    // vertically centered
        scale: 0.95,
        opacity: 1,
      });

      /* ---------------- ZIG ZAG MASTER TIMELINE ---------------- */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.section-1',
          start: 'top top',
          end: '+=500%',     // 5 sections
          scrub: true,
        },
      });

      /* SECTION 1 → LEFT */
      tl.to('.robot', {
        xPercent: -40,
        duration: 1,
        ease: 'none',
      });

      /* SECTION 2 → RIGHT */
      tl.to('.robot', {
        xPercent: 40,
        duration: 1,
        ease: 'none',
      });

      /* SECTION 3 → LEFT */
      tl.to('.robot', {
        xPercent: -30,
        duration: 1,
        ease: 'none',
      });

      /* SECTION 4 → RIGHT */
      tl.to('.robot', {
        xPercent: 30,
        scale: 0.9,
        duration: 1,
        ease: 'none',
      });

      /* SECTION 5 → EXIT UP */
      tl.to('.robot', {
        yPercent: -120,
        opacity: 0,
        duration: 1,
        ease: 'none',
      });

      /* ---------------- FLOATING EFFECT ---------------- */
      gsap.to('.robot', {
        y: -15,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'sine.inOut',
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="robot-wrapper">
      <img
        src="/assets/images/ai-bg-remover.webp"
        className="robot"
        alt="AI Robot"
      />
    </div>
  );
}