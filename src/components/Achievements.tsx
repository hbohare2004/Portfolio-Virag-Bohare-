"use client";

import {
  Trophy,
  ShieldCheck,
  Star,
  Medal,
  Sparkles,
  Globe,
  GraduationCap,
  Mic,
} from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const achievements = [
  {
    icon: ShieldCheck,
    title: "DPIIT Recognised Startup",
    description:
      "Rag Innovations recognised by the Department for Promotion of Industry and Internal Trade, Government of India—validating its innovation and social impact model.",
    category: "Govt.",
  },
  {
    icon: Trophy,
    title: "GeM OEM — Quality Council of India",
    description:
      "Registered Original Equipment Manufacturer on Government e-Marketplace, certified by QCI—enabling procurement by government agencies nationwide.",
    category: "Govt.",
  },
  {
    icon: Globe,
    title: "International Deployments",
    description:
      "Machines and training programmes deployed across multiple Indian states and international locations—serving diverse institutional and community partners.",
    category: "Global",
  },
  {
    icon: GraduationCap,
    title: "PhD Research at MANIT Bhopal",
    description:
      "Doctoral research at one of India's premier National Institutes of Technology—focused on energy recovery from used menstrual waste and sustainable disposal solutions for global menstrual hygiene sustainability.",
    category: "Academic",
  },
  {
    icon: Mic,
    title: "Keynote Speaker & IIC Advisor",
    description:
      "Regular keynote and invited speaker at national conferences and educational institutions. Strategic advisor to Institution's Innovation Councils across India.",
    category: "Thought Leader",
  },
  {
    icon: Star,
    title: "Featured in National & International Media",
    description:
      "Extensive coverage by YourStory, Dainik Bhaskar, Free Press Journal, and other prominent publications for entrepreneurship and social impact.",
    category: "Media",
  },
  {
    icon: Medal,
    title: "Skill India & Make in India Champion",
    description:
      "Vocational training programmes aligned with flagship national initiatives—empowering thousands of women with skills for sustainable self-employment.",
    category: "Impact",
  },
  {
    icon: Sparkles,
    title: "Self-Sustaining Social Enterprise",
    description:
      "Built a profitable, scalable enterprise generating ₹2.5 Cr+ annual revenue while directly improving menstrual health outcomes at the grassroots level.",
    category: "Enterprise",
  },
];

const categoryColors: Record<string, string> = {
  "Govt.": "bg-primary/10 text-primary",
  Global: "bg-emerald-100 text-emerald-700",
  Academic: "bg-blue-100 text-blue-700",
  "Thought Leader": "bg-amber-100 text-amber-700",
  Media: "bg-purple-100 text-purple-700",
  Impact: "bg-teal-100 text-teal-700",
  Enterprise: "bg-secondary/15 text-primary",
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cream to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="animate-fade-in-up">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              Track Record
            </p>
            <h2 className="mb-4 text-3xl font-extrabold text-charcoal sm:text-4xl lg:text-5xl">
              Achievements &amp;{" "}
              <span className="gradient-text">Recognition</span>
            </h2>
            <p className="mx-auto max-w-2xl text-charcoal-light">
              Milestones that define a decade of building a research-driven,
              globally recognised social enterprise at the intersection of
              menstrual hygiene, clean energy, and women&rsquo;s empowerment.
            </p>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
          </div>
        </AnimateOnScroll>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => (
            <AnimateOnScroll
              key={item.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/15 text-primary transition-all group-hover:from-primary group-hover:to-primary-light group-hover:text-white">
                    <item.icon size={22} />
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${categoryColors[item.category] ?? "bg-gray-100 text-gray-700"}`}
                  >
                    {item.category}
                  </span>
                </div>
                <h3 className="mb-2 text-base font-bold leading-snug text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-auto text-sm leading-relaxed text-charcoal-light">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
