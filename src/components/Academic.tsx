"use client";

import {
  GraduationCap,
  Microscope,
  BookOpen,
  Zap,
  Leaf,
  BrainCircuit,
} from "lucide-react";
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

            {/* Publications placeholder */}
            <AnimateOnScroll className="animate-fade-in-up">
              <div className="mt-8 rounded-2xl border-2 border-dashed border-secondary/40 bg-secondary/[0.04] p-6 text-center">
                <BookOpen size={32} className="mx-auto mb-3 text-secondary/60" />
                <h4 className="mb-1 font-bold text-charcoal">
                  Outreach, Training &amp; Thought Leadership
                </h4>
                <ul className="mt-3 space-y-2 text-left text-sm text-charcoal-light">
                  <li>
                    • 10+ years of dedicated work in Menstrual Hygiene Management (MHM),
                    with a strong focus on awareness, dignity, and menstrual pride.
                  </li>
                  <li>
                    • Conducted education and awareness sessions for school girls,
                    college students, and women through community-focused programmes.
                  </li>
                  <li>
                    • Delivered talks and engagements at leading institutions including
                    Vimala Autonomous College Thrissur, IGEC Sagar, NITTTR, NSIC,
                    Adani Foundation, IIT Roorkee, and Chamber of Commerce MP.
                  </li>
                  <li>
                    • Enabled women&rsquo;s empowerment through practical, skill-oriented
                    training and implementation-focused capacity building.
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
