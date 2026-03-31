"use client";

import {
  GraduationCap,
  Microscope,
  BookOpen,
  Zap,
  Leaf,
  BrainCircuit,
} from "lucide-react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const education = [
  {
    degree: "PhD (Pursuing)",
    field: "Energy, Environment & Natural Resources Law",
    institution: "MANIT Bhopal",
    description:
      "Interdisciplinary doctoral research investigating how energy recovery from used menstrual waste can be paired with sustainable disposal solutions—transforming an environmental burden into a community-scale energy opportunity.",
  },
  {
    degree: "M.Tech",
    field: "Energy & Environment Management",
    institution: "RGPV, Bhopal",
    description:
      "Graduate research in energy systems, environmental management, and sustainable technology design—laying the academic foundation for applied innovation.",
  },
  {
    degree: "B.E.",
    field: "Mechanical Engineering",
    institution: "University in Madhya Pradesh",
    description:
      "Core engineering training in machine design, thermodynamics, and manufacturing processes—the technical backbone of Rag Innovations' machinery.",
  },
];

const researchAreas = [
  {
    icon: Zap,
    label: "Energy Recovery Pathways",
    detail:
      "Research on converting used menstrual waste into sustainable energy—evaluating practical pathways, feasibility, and system design for real-world deployment (context-specific).",
  },
  {
    icon: Leaf,
    label: "Sustainable Disposal Solutions",
    detail:
      "Designing safe, low-cost disposal and treatment approaches that reduce environmental burden while maintaining hygiene and protection for communities.",
  },
  {
    icon: BrainCircuit,
    label: "Environmental Impact & Governance",
    detail:
      "Studying regulatory and environmental considerations—so waste-to-energy and disposal interventions are aligned with governance, responsibility, and measurable outcomes.",
  },
  {
    icon: Microscope,
    label: "Field-Ready Innovation",
    detail:
      "Translating research into field-ready, community-scale solutions for educational institutions, NGOs, and policy implementers—bridging science with implementation.",
  },
];

type StatItemProps = {
  value: string;
  label: string;
};

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-5 text-center shadow-md sm:p-6">
      <div className="mb-1 text-2xl font-extrabold text-primary sm:text-3xl">
        {value}
      </div>
      <p className="text-xs font-medium text-charcoal-light sm:text-sm">
        {label}
      </p>
    </div>
  );
}

type CardProps = {
  title: string;
  lines: string[];
};

function ImpactCard({ title, lines }: CardProps) {
  return (
    <div className="group flex h-full flex-col rounded-2xl bg-white p-5 text-left shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg sm:p-6">
      <h5 className="mb-2 text-sm font-bold text-charcoal sm:text-base">
        {title}
      </h5>
      <ul className="space-y-1 text-xs text-charcoal-light sm:text-sm">
        {lines.map((line) => (
          <li key={line}>• {line}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Academic() {
  return (
    <section id="academic" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="animate-fade-in-up">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              Research Spotlight
            </p>
            <h2 className="mb-4 text-3xl font-extrabold text-charcoal sm:text-4xl lg:text-5xl">
              Energy Recovery &amp; <span className="gradient-text">Sustainable Disposal</span>
            </h2>
            <p className="mx-auto max-w-2xl text-charcoal-light">
              Transforming used menstrual waste from an environmental burden into a
              sustainable energy opportunity—through applied research, responsible
              disposal solutions, and deployment-ready guidance.
            </p>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
          </div>
        </AnimateOnScroll>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Education timeline */}
          <div>
            <AnimateOnScroll className="animate-slide-in-left">
              <h3 className="mb-8 flex items-center gap-2 text-xl font-bold text-charcoal">
                <GraduationCap size={24} className="text-secondary" />
                Education
              </h3>
            </AnimateOnScroll>

            <div className="relative space-y-6 pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-secondary">
              {education.map((edu, index) => (
                <AnimateOnScroll
                  key={edu.degree}
                  className="animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative">
                    <div className="absolute -left-8 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <div className="rounded-2xl bg-white p-5 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg sm:p-6">
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
                          {edu.degree}
                        </span>
                        <span className="text-sm font-medium text-charcoal-light">
                          {edu.institution}
                        </span>
                      </div>
                      <h4 className="mb-1 text-base font-bold text-charcoal sm:text-lg">
                        {edu.field}
                      </h4>
                      <p className="text-sm leading-relaxed text-charcoal-light">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Research interests */}
          <div>
            <AnimateOnScroll className="animate-slide-in-right">
              <h3 className="mb-8 flex items-center gap-2 text-xl font-bold text-charcoal">
                <Microscope size={24} className="text-secondary" />
                Research Focus Areas
              </h3>
            </AnimateOnScroll>

            <div className="space-y-4">
              {researchAreas.map((area, index) => (
                <AnimateOnScroll
                  key={area.label}
                  className="animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="group flex gap-4 rounded-2xl bg-white p-5 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg sm:p-6">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/15 text-primary transition-all group-hover:from-primary group-hover:to-primary-light group-hover:text-white">
                      <area.icon size={22} />
                    </div>
                    <div>
                      <h4 className="mb-0.5 text-base font-bold text-charcoal">
                        {area.label}
                      </h4>
                      <p className="text-sm text-charcoal-light">
                        {area.detail}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

          </div>
        </div>

        {/* Advocacy & Partners — two-column row below */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Menstrual Health Advocacy & Leadership */}
          <AnimateOnScroll className="animate-slide-in-left">
            <div className="flex h-full flex-col rounded-2xl border-2 border-dashed border-secondary/40 bg-secondary/[0.04] p-6 text-center sm:p-7">
              <div className="flex flex-col items-center gap-2">
                <BookOpen size={32} className="text-secondary/70" />
                <h4 className="text-lg font-bold text-charcoal sm:text-xl">
                  Menstrual Health Advocacy &amp; Leadership
                </h4>
                <p className="max-w-xl text-xs text-charcoal-light sm:text-sm">
                  Driving menstrual health awareness, innovation, and sustainable
                  impact across institutions and communities.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <StatItem value="10+" label="Years of Global Impact" />
                <StatItem value="50K+" label="Women & Girls Reached" />
                <StatItem value="100+" label="Partner Organisations" />
                <StatItem value="1M+" label="Sanitary Pads Distributed" />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: Partner Logos */}
          <AnimateOnScroll className="animate-slide-in-right">
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-secondary/40 bg-secondary/[0.04] p-6 text-center sm:p-8">
              <h5 className="mb-6 text-sm font-bold uppercase tracking-widest text-secondary sm:text-base lg:text-lg">
                Empowering Women — Our Partners
              </h5>
              <div className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-5 sm:gap-6">
                {[
                  { src: "/images/logo-partner1.webp", alt: "MANIT Bhopal" },
                  { src: "/images/logo-partner2.png", alt: "IGEC Sagar" },
                  { src: "/images/logo-partner3.jpg", alt: "Round Table India" },
                  { src: "/images/logo-partner4.png", alt: "NITTTR Bhopal" },
                  { src: "/images/logo-partner5.png", alt: "BHU" },
                  { src: "/images/logo-partner6.webp", alt: "IIT Roorkee" },
                  { src: "/images/logo-partner7.png", alt: "NMDC" },
                  { src: "/images/logo-partner8.jpg", alt: "Central Coalfields" },
                  { src: "/images/logo-partner9.jpg", alt: "Navodaya Vidyalaya" },
                  { src: "/images/logo-partner10.webp", alt: "Vimala College Thrissur" },
                  { src: "/images/logo-partner11.jpg", alt: "Adani Foundation" },
                  { src: "/images/logo-partner12.png", alt: "Rotary International" },
                ].map((logo) => (
                  <Image
                    key={logo.src}
                    src={logo.src}
                    alt={logo.alt}
                    width={80}
                    height={80}
                    className="h-11 w-11 rounded-lg object-contain transition-transform hover:scale-110 sm:h-12 sm:w-12 lg:h-14 lg:w-14"
                  />
                ))}
              </div>
              <p className="mt-4 mx-auto max-w-sm text-xs text-charcoal-light sm:text-sm">
                Bridging menstrual health, sustainability, and decentralised
                manufacturing for social impact.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
