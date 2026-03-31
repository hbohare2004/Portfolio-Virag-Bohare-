"use client";

import {
  ArrowRight,
  Cog,
  Heart,
  Users,
  Award,
  ShieldCheck,
  Globe,
  Wrench,
  BookOpen,
  Package,
  Sun,
  Megaphone,
} from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    icon: Cog,
    title: "Sanitary Pad Machines",
    description:
      "Semi-automatic & automatic machines producing up to 1,200 pads/hour on single-phase electricity—at 1/10th the cost of imported alternatives.",
  },
  // {
  //   icon: Package,
  //   title: "Raw Material Supply",
  //   description:
  //     "Premium top sheets, absorbent cores, backing, and packaging with a reliable global supply chain and competitive bulk pricing.",
  // },
  {
    icon: BookOpen,
    title: "Vocational Training",
    description:
      "Skill India-aligned training programmes covering machine operation, quality control, enterprise management, and responsible end-to-life practices for menstrual hygiene enterprises.",
  },
  {
    icon: Megaphone,
    title: "Awareness & Advocacy",
    description:
      "Strategic MHM awareness programmes for schools, universities, government bodies, and corporate CSR initiatives—pairing hygiene promotion with safe disposal and evidence-informed waste-to-energy opportunities.",
  },
  // {
  //   icon: Wrench,
  //   title: "Maintenance & Upgrades",
  //   description:
  //     "On-site troubleshooting, preventive maintenance, machine retrofits, and remote technical support for installed units worldwide.",
  // },
  // {
  //   icon: Sun,
  //   title: "Solar-Powered Solutions",
  //   description:
  //     "Off-grid sanitary napkin machines powered by solar energy—engineered for remote and underserved regions with limited electricity access.",
  // },
];

const stats = [
  { value: "15+", label: "Years of Impact" },
  { value: "2M+", label: "Women & Girls Benefited" },
  { value: "500+", label: "Renowned Organizations Partnered" },
  { value: "5M+", label: "Sanitary Pads Distributed" },
];

const recognitions = [
  {
    icon: ShieldCheck,
    title: "DPIIT Recognised",
    subtitle: "Government of India",
  },
  {
    icon: Award,
    title: "GeM OEM",
    subtitle: "Quality Council of India",
  },
  {
    icon: Globe,
    title: "International Reach",
    subtitle: "Multi-Country Deployments",
  },
  {
    icon: Users,
    title: "Institutional Partners",
    subtitle: "Govts, NGOs & Universities",
  },
];

export default function Startup() {
  return (
    <section id="startup" className="relative overflow-hidden py-20 sm:py-28">
      {/* Gradient background for visual dominance */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-cream to-secondary/[0.06]" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-secondary/[0.06] blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimateOnScroll className="animate-fade-in-up">
          <div className="mb-6 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              Flagship Enterprise
            </p>
            <h2 className="mb-4 text-3xl font-extrabold text-charcoal sm:text-4xl lg:text-5xl xl:text-6xl">
              <span className="gradient-text">Rag Innovations</span>
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-charcoal-light sm:text-lg">
              A globally recognised, DPIIT-registered social enterprise
              engineering affordable menstrual hygiene infrastructure for
              communities worldwide. We design, manufacture, and deploy low-cost
              sanitary napkin and maternity pad making machines—partnering with
              governments, international organisations, and institutions to build
              self-sustaining hygiene enterprises with responsible end-to-life sustainability.
            </p>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-secondary" />
          </div>
        </AnimateOnScroll>

        {/* Mission & Vision cards */}
        <AnimateOnScroll className="animate-fade-in-up">
          <div className="mb-16 mt-12 grid gap-6 sm:grid-cols-2">
            <div className="group rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-xl transition-transform hover:-translate-y-1">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/20">
                <Heart size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                Our Mission
              </h3>
              <p className="leading-relaxed text-white/85">
                To eradicate menstrual poverty by providing affordable,
                high-quality manufacturing systems and comprehensive capacity-building
                support to communities across the globe. Every woman and girl
                deserves access to safe, dignified menstrual hygiene—regardless
                of geography or income—while enabling safe disposal and sustainable
                solutions for used menstrual waste.
              </p>
            </div>

            <div className="group rounded-2xl bg-white p-8 shadow-xl transition-transform hover:-translate-y-1">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light text-white">
                <Globe size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-charcoal sm:text-2xl">
                Our Vision
              </h3>
              <p className="leading-relaxed text-charcoal-light">
                A world where menstruation is stigma-free and every community
                has the tools to produce affordable sanitary products locally—
                powered by self-sustaining micro-enterprises led by women,
                creating dignified livelihoods and lasting health outcomes
                at scale with safe, sustainable disposal and responsible waste-to-energy approaches.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Impact stats */}
        <AnimateOnScroll className="animate-scale-in">
          <div className="mb-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group rounded-2xl bg-white p-6 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl sm:p-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-2 text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
                  {stat.value}
                </div>
                <p className="text-sm font-medium text-charcoal-light sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Services grid */}
        <AnimateOnScroll className="animate-fade-in-up">
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-2xl font-bold text-charcoal sm:text-3xl">
              End-to-End Solutions
            </h3>
            <p className="mx-auto max-w-2xl text-charcoal-light">
              From machine engineering and raw materials to global training
              and strategic advocacy—a complete ecosystem for scalable
              menstrual hygiene enterprises.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="group h-full rounded-2xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl sm:p-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/15 text-primary transition-all group-hover:from-primary group-hover:to-primary-light group-hover:text-white">
                  <service.icon size={24} />
                </div>
                <h4 className="mb-2 text-lg font-bold text-charcoal">
                  {service.title}
                </h4>
                <p className="text-sm leading-relaxed text-charcoal-light">
                  {service.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Recognitions */}
        <AnimateOnScroll className="animate-fade-in-up">
          <div className="mb-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {recognitions.map((rec) => (
              <div
                key={rec.title}
                className="flex flex-col items-center gap-2 rounded-2xl bg-white/80 p-5 text-center shadow-sm transition-all hover:shadow-md sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15 text-primary">
                  <rec.icon size={24} />
                </div>
                <h4 className="text-sm font-bold text-charcoal sm:text-base">
                  {rec.title}
                </h4>
                <p className="text-xs text-charcoal-light sm:text-sm">
                  {rec.subtitle}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* CTA */}
        <AnimateOnScroll className="animate-scale-in">
          <div className="rounded-2xl bg-gradient-to-r from-primary to-primary-dark p-8 text-center shadow-xl sm:p-12">
            <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              Partner With Rag Innovations
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-white/80">
              Whether you represent a government body, international
              organisation, educational institution, or NGO—let us design a
              scalable menstrual hygiene solution tailored to your community.
            </p>
            <a
              href="https://www.raginnovations.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-base font-bold text-primary-dark shadow-lg transition-all hover:scale-105 hover:bg-gold-light hover:shadow-xl"
            >
              Visit Rag Innovations
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
