"use client";

import { GraduationCap, Lightbulb, Heart } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const highlights = [
  {
    icon: GraduationCap,
    title: "PhD Scholar & Researcher",
    description:
      "Pursuing doctoral research at MANIT Bhopal in Energy, Environment, and Natural Resources Law—focused on energy recovery from used menstrual waste and sustainable disposal solutions.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneur & Innovator",
    description:
      "Founded Rag Innovations in 2016, engineering India's first low-cost sanitary napkin making machines now deployed across institutions, government programmes, and international partnerships.",
  },
  {
    icon: Heart,
    title: "Global MHM Consultant",
    description:
      "Advising educational institutions, government bodies, NGOs, and CSR initiatives on scalable menstrual hygiene management strategies—from policy design to on-ground implementation.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="animate-fade-in-up">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              About Me
            </p>
            <h2 className="mb-4 text-3xl font-extrabold text-charcoal sm:text-4xl lg:text-5xl">
              Where <span className="gradient-text">Expertise</span> Meets{" "}
              <span className="gradient-text">Global Impact</span>
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
          </div>
        </AnimateOnScroll>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll className="animate-slide-in-left">
            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-charcoal-light">
                I am <span className="font-semibold text-charcoal">Virag Bohare</span>—an
                internationally recognised expert in menstrual hygiene management,
                social entrepreneurship, and sustainable energy research. As a PhD
                Scholar at MANIT Bhopal and Co-Founder of{" "}
                <span className="font-semibold text-primary">Rag Innovations</span>,
                I operate at the intersection of academic research, policy advisory,
                and grassroots impact.
              </p>
              <p className="text-base leading-relaxed text-charcoal-light">
                Over the past decade, I have consulted with government organisations,
                educational institutions, NGOs, and international bodies on designing
                and deploying scalable menstrual hygiene programmes. My work spans
                machine engineering, community training, awareness campaigns, and
                strategic advisory—creating self-sustaining enterprises that serve
                women and girls across continents.
              </p>
              <p className="text-base leading-relaxed text-charcoal-light">
                My doctoral research in sustainable energy further strengthens
                this mission—exploring how energy recovery from used menstrual
                waste can be paired with sustainable disposal solutions. The goal is
                to transform an environmental burden into a practical, community-scale
                energy opportunity that supports public health and institutional responsibility.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <AnimateOnScroll
                key={item.title}
                className="animate-slide-in-right"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="group flex gap-4 rounded-2xl bg-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light text-white shadow-sm transition-transform group-hover:scale-110">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-charcoal">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-charcoal-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
