"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, FlaskConical, Mail } from "lucide-react";
import { LinkedinIcon, FacebookIcon, InstagramIcon } from "./SocialIcons";

const roles = [
  "Global MHM Consultant",
  "Social Entrepreneur",
  "Menstrual Waste-to-Energy Researcher",
  "International Trainer & Speaker",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (typing) {
      if (displayed.length < currentRole.length) {
        const timeout = setTimeout(
          () => setDisplayed(currentRole.slice(0, displayed.length + 1)),
          70
        );
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayed.length > 0) {
        const timeout = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          40
        );
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />

      {/* Decorative floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-20 left-[10%] h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />
        <div className="animate-float delay-300 absolute top-40 right-[15%] h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
        <div className="animate-float delay-500 absolute bottom-20 left-[30%] h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pt-20 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        {/* Profile image */}
        <div className="animate-scale-in mb-8 flex-shrink-0 lg:mb-0">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-secondary/40 to-gold-light/30 blur-md" />
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-secondary/50 shadow-2xl sm:h-56 sm:w-56 lg:h-72 lg:w-72">
              <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-cream to-gold-light/40">
                <Image
                  src="/images/profile pic.jpeg"
                  alt="Virag Bohare"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 288px"
                  priority
                />
              </div>
            </div>
            {/* <div className="absolute -bottom-2 -right-2 rounded-full bg-secondary p-2 shadow-lg lg:-bottom-3 lg:-right-3 lg:p-3">
              <FlaskConical className="h-5 w-5 text-primary-dark lg:h-6 lg:w-6" />
            </div> */}
          </div>
        </div>

        {/* Text content */}
        <div className="animate-fade-in-up text-center lg:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary sm:text-base">
            International Expert &amp; Thought Leader
          </p>

          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Virag Bohare
          </h1>

          <div className="mb-4 flex items-center justify-center gap-2 lg:justify-start">
            <span className="text-lg font-medium text-secondary sm:text-xl lg:text-2xl">
              {displayed}
            </span>
            <span className="inline-block h-7 w-0.5 animate-pulse bg-secondary sm:h-8" />
          </div>

          <p className="mx-auto mb-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg lg:mx-0">
            PhD Scholar &amp; Co-Founder of{" "}
            <span className="font-bold text-secondary">Rag Innovations</span>
            —advising governments, institutions, and international organisations
            on menstrual hygiene management, sustainable manufacturing, and
            energy recovery from used menstrual waste with responsible disposal models.
          </p>

          <p className="mb-8 text-sm font-medium text-gold-light sm:text-base">
            DPIIT-Recognised Startup&ensp;|&ensp;GeM OEM (QCI)&ensp;|&ensp;Global Consultant &amp; Trainer
          </p>

          {/* CTA Buttons */}
          <div className="mb-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            <a
              href="https://www.raginnovations.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-primary-dark shadow-lg transition-all hover:scale-105 hover:bg-gold-light hover:shadow-xl sm:px-8 sm:py-3.5 sm:text-base"
            >
              Explore Rag Innovations
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#academic"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-secondary hover:bg-white/10 sm:px-8 sm:py-3.5 sm:text-base"
            >
              <FlaskConical size={18} />
              View Research
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-secondary hover:bg-white/10 sm:px-8 sm:py-3.5 sm:text-base"
            >
              <Mail size={18} />
              Contact
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <a
              href="https://www.linkedin.com/in/viragbohare/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-secondary/30"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="https://www.facebook.com/viragbohare"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-secondary/30"
              aria-label="Facebook"
            >
              <FacebookIcon size={20} />
            </a>
            <a
              href="https://www.instagram.com/viragbohare/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-secondary/30"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
           
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/50 transition-colors hover:text-secondary"
        >
          <span className="text-xs font-medium uppercase tracking-widest">
            Scroll
          </span>
          <div className="h-8 w-5 rounded-full border-2 border-white/30">
            <div className="mx-auto mt-1.5 h-2 w-1 animate-bounce rounded-full bg-secondary/60" />
          </div>
        </a>
      </div> */}
    </section>
  );
}
