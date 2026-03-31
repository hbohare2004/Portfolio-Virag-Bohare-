"use client";

import { useState, type FormEvent } from "react";
import { Send, Mail, MapPin, ExternalLink } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const text = `*New Portfolio Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/919425128596?text=${text}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-cream to-secondary/[0.04]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="animate-fade-in-up">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              Get In Touch
            </p>
            <h2 className="mb-4 text-3xl font-extrabold text-charcoal sm:text-4xl lg:text-5xl">
              Let&rsquo;s <span className="gradient-text">Collaborate</span>
            </h2>
            <p className="mx-auto max-w-2xl text-charcoal-light">
              Interested in consultancy, institutional partnerships, research
              collaboration, or Rag Innovations? I look forward to hearing
              from you.
            </p>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
          </div>
        </AnimateOnScroll>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Contact info */}
          <AnimateOnScroll className="animate-slide-in-left lg:col-span-2">
            <div className="space-y-6">
              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-md">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">Email</h4>
                  <p className="text-sm text-charcoal-light">
                    vbohare@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-md">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">Location</h4>
                  <p className="text-sm text-charcoal-light">Bhopal, Madhya Pradesh, India</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-md">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light text-white">
                  <ExternalLink size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    Rag Innovations
                  </h4>
                  <a
                    href="https://www.raginnovations.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-secondary hover:underline"
                  >
                    raginnovations.com/contact
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Form */}
          <AnimateOnScroll className="animate-slide-in-right lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-6 shadow-xl sm:p-8"
            >
              <div className="mb-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-semibold text-charcoal"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-cream-dark bg-cream/50 px-4 py-3 text-sm text-charcoal outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-semibold text-charcoal"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-cream-dark bg-cream/50 px-4 py-3 text-sm text-charcoal outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-semibold text-charcoal"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="How can I help you?"
                  className="w-full resize-none rounded-xl border border-cream-dark bg-cream/50 px-4 py-3 text-sm text-charcoal outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-8 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                {submitted ? "Message Sent!" : "Send Message"}
                <Send
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
