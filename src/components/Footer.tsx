import { ArrowUp } from "lucide-react";
import { LinkedinIcon, FacebookIcon } from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-primary-dark text-white">
      {/* Gradient accent top border */}
      <div className="h-1 bg-gradient-to-r from-secondary via-gold-light to-secondary" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-lg font-bold">
              <span className="text-secondary">Virag</span> Bohare
            </p>
            <p className="mt-1 text-sm text-white/60">
              Global MHM Consultant &amp; Founder,{" "}
              <a
                href="https://www.raginnovations.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                Rag Innovations
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/viragbohare/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-2.5 transition-all hover:scale-110 hover:bg-secondary/30"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="https://www.facebook.com/viragbohare"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-2.5 transition-all hover:scale-110 hover:bg-secondary/30"
              aria-label="Facebook"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href="#home"
              className="rounded-full bg-white/10 p-2.5 transition-all hover:scale-110 hover:bg-secondary/30"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          &copy; {year} Virag Bohare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
