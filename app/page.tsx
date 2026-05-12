"use client";

import { DM_Sans, Syne } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const syne = Syne({ subsets: ["latin"], variable: "--font-heading" });

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  
  { href: "#use-cases", label: "Use Cases" },
  // { href: "#pricing", label: "Pricing" },
];

const features = [
  {
    icon: "⚡",
    title: "Instant Replies",
    description:
      "Respond to customer inquiries in seconds with AI-driven WhatsApp flows tuned to your business.",
  },
  {
    icon: "🎯",
    title: "Smart Qualification",
    description:
      "Automatically qualify leads, capture intent, and route high-value conversations to your team.",
  },
  {
    icon: "🔁",
    title: "Workflow Automation",
    description:
      "Connect FAQs, bookings, follow-ups, and reminders without complex setup or manual effort.",
  },
  {
    icon: "📊",
    title: "Performance Insights",
    description:
      "Track response quality and conversion impact with real-time analytics across every campaign.",
  },
];

const steps = [
  {
    title: "Connect Your WhatsApp",
    text: "Link your existing number in minutes with simple onboarding and no-code setup.",
    icon: "📱",
  },
  {
    title: "Train Your AI",
    text: "Add your business context, FAQs, and goals so every reply feels on-brand and accurate.",
    icon: "🧠",
  },
  {
    title: "Launch & Scale",
    text: "Go live instantly, automate high-volume chats, and hand off priority leads to your team.",
    icon: "🚀",
  },
];

const useCases = [
  {
    title: "Food & Beverage",
    description:
      "Handle reservations, menu questions, and promo campaigns while reducing missed messages during peak hours.",
    variant: "food",
  },
  {
    title: "Hospitality",
    description:
      "Automate booking inquiries, check-in guidance, and upsell offers to improve guest experience at scale.",
    variant: "hotel",
  },
  {
    title: "E-Commerce",
    description:
      "Recover abandoned carts, answer product questions, and guide buyers from discovery to checkout faster.",
    variant: "commerce",
  },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const onLoadTick = window.setTimeout(() => {
      setIsLoaded(true);
    }, 60);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const delay = target.dataset.revealDelay;
            if (delay) {
              target.style.transitionDelay = `${delay}ms`;
            }
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const nodes = document.querySelectorAll(".reveal");
    nodes.forEach((node) => observer.observe(node));
    return () => {
      window.clearTimeout(onLoadTick);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`${dmSans.variable} ${syne.variable} page-shell bg-white text-black antialiased ${
        isLoaded ? "is-loaded" : ""
      }`}
    >
      <header className="sticky top-0 z-40 border-b border-[#e8dede] bg-white/95 ">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          <a
            href="#top"
            className="inline-flex items-center gap-2 font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#600000] focus-visible:ring-offset-2"
          >
            <Image
              src="/logo.png"
              alt="Supercharge logo"
              width={34}
              height={34}
              className="h-6 w-6 object-contain rounded-[8px]"
              priority
            />
            <span className="text-xl">Supercharge</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-black/85 transition-colors duration-100 ease-out hover:text-[#600000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#600000] focus-visible:ring-offset-2"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#pricing"
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-md bg-[#600000] px-4 py-2 text-sm font-semibold text-white transition-colors duration-100 ease-out hover:bg-[#4d0000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#600000] focus-visible:ring-offset-2"
          >
            Get Started
          </a>
        </div>
      </header>

      <main id="top">
        <section className="section-block relative overflow-hidden">
          <div className="mesh-bg" aria-hidden="true" />
          <div className="reveal mx-auto grid w-full max-w-7xl gap-10 px-4 py-24 md:px-6 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-32">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-[#fdf5f5] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#600000]">
                AI WhatsApp Automation SaaS
              </p>
              <h1 className="max-w-2xl font-[var(--font-heading)] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Automate WhatsApp conversations that convert around the clock
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-black/75 sm:text-lg">
                Supercharge Ai helps teams handle more messages, respond faster, and
                turn chats into revenue with intelligent automations built for
                modern businesses.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
              href="https://calendly.com/usesupercharge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-md bg-[#600000] px-6 py-3 text-sm font-semibold text-white transition-colors duration-100 ease-out hover:bg-[#f3f3f3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#600000] w-full max-w-[150px]"
            >
              Book a Demo
            </a>
              </div>
            </div>
            <div
              className="reveal relative self-end rounded-2xl border border-[#ecdede] bg-[#fdf5f5] p-6 shadow-sm"
              data-reveal-delay="90"
            >
              <div
                className="pointer-events-none absolute -right-5 -top-5 hidden h-20 w-20 rounded-full bg-[#600000]/10 md:block"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold text-[#600000]">Live Preview</p>
              <div className="mt-4 overflow-hidden rounded-xl border border-[#eadede] bg-white p-4">
                <HeroVisual />
              </div>
              <p className="mt-4 text-xs font-medium text-black/60">
                Vector-backed live mockup for WhatsApp automation.
              </p>
            </div>
          </div>
        </section>

        <section className="section-block border-y border-[#eee] bg-[#f9f9f9]">
          <div className="reveal mx-auto grid w-full max-w-7xl gap-6 px-4 py-10 text-center sm:grid-cols-3 md:px-6 lg:px-8">
            <p className="text-sm font-semibold text-black/80">10x conversation handling</p>
            <p className="text-sm font-semibold text-black/80">70% increase in response rate</p>
            <p className="text-sm font-semibold text-black/80">60% more conversions</p>
          </div>
        </section>

        <section id="features" className="section-block mx-auto w-full max-w-7xl px-4 py-20 md:px-6 lg:px-8 lg:py-24">
          <div className="reveal mb-14 max-w-2xl">
            <h2 className="font-[var(--font-heading)] text-3xl font-bold sm:text-4xl">
              What Makes Us Different
            </h2>
            <p className="mt-4 text-base text-black/75">
              Built for teams that need fast, reliable WhatsApp automation without
              sacrificing the quality of customer conversations.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="reveal rounded-xl border border-[#ecdede] bg-[#fdf5f5] p-5 transition-transform duration-150 ease-out hover:-translate-y-1"
                data-reveal-delay="80"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white text-xl text-[#600000]">
                  {feature.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/75">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

      

        <section id="why-us" className="section-block bg-[#1a0000]">
          <div className="reveal mx-auto grid w-full max-w-7xl gap-8 px-4 py-20 text-center text-white sm:grid-cols-3 md:px-6 lg:px-8">
            <div>
              <p className="font-[var(--font-heading)] text-4xl font-bold sm:text-5xl">120k+</p>
              <p className="mt-2 text-sm text-white/75">Automated conversations monthly</p>
            </div>
            <div>
              <p className="font-[var(--font-heading)] text-4xl font-bold sm:text-5xl">99.9%</p>
              <p className="mt-2 text-sm text-white/75">Message response uptime</p>
            </div>
            <div>
              <p className="font-[var(--font-heading)] text-4xl font-bold sm:text-5xl">100%</p>
              <p className="mt-2 text-sm text-white/75">Average lead-to-sale lift</p>
            </div>
          </div>
        </section>

        <section id="use-cases" className="section-block mx-auto w-full max-w-7xl px-4 py-20 md:px-6 lg:px-8 lg:py-24">
          <div className="reveal mb-14 max-w-2xl">
            <h2 className="font-[var(--font-heading)] text-3xl font-bold sm:text-4xl">
              Flexible for Any Kind of Business
            </h2>
            <p className="mt-4 text-base text-black/75">
              From high-traffic restaurants to online stores, Supercharge Ai adapts to your growth strategy.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {useCases.map((item) => (
              <article
                key={item.title}
                className="reveal rounded-xl border border-[#ececec] bg-[#f9f9f9] p-6 transition-colors duration-150 ease-out hover:bg-[#fdf5f5]"
                data-reveal-delay="70"
              >
                <div className="mb-4 overflow-hidden rounded-lg border border-[#ebdede] bg-white">
                  <UseCaseVisual variant={item.variant} />
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/75">{item.description}</p>
                <a
                  href="#pricing"
                  className="mt-5 inline-flex min-h-10 min-w-10 items-center text-sm font-semibold text-[#600000] transition-colors duration-100 ease-out hover:text-[#4d0000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#600000] focus-visible:ring-offset-2"
                >
                  Learn More →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="section-block bg-[#600000]">
          <div className="reveal mx-auto flex w-full max-w-7xl flex-col items-start gap-5 px-4 py-20 text-white md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
            <div>
              <h2 className="font-[var(--font-heading)] text-3xl font-bold sm:text-4xl">
                Integrate Supercharge Ai and never miss a customer conversation
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/85 sm:text-base">
                Launch in minutes, scale effortlessly, and convert more WhatsApp chats into revenue.
              </p>
            </div>
            <a
              href="https://calendly.com/usesupercharge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors duration-100 ease-out hover:bg-[#f3f3f3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#600000] w-full max-w-[150px]"
            >
              Book a Demo
            </a>
          </div>
        </section>
      </main>

      <footer className="section-block border-t border-[#ececec] bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 md:grid-cols-[1.5fr_repeat(4,1fr)] md:px-6 lg:px-8">
          <div>
            <p className="font-[var(--font-heading)] text-xl font-bold">Supercharge Ai</p>
            <p className="mt-2 max-w-sm text-sm text-black/70">
              AI WhatsApp automation software designed to improve response speed and sales outcomes.
            </p>
          </div>
          <FooterColumn
            title="Product"
            links={["Features", "How It Works", "Pricing"]}
          />
          <FooterColumn title="Company" links={["About", "Customers", "Careers"]} />
          <FooterColumn title="Legal" links={["Privacy", "Terms", "Security"]} />
          <FooterColumn title="Contact Us" links={["hello@supercharge.ai", "08085407889"]} />
        </div>
        <div className="border-t border-[#f2f2f2] px-4 py-4 text-center text-xs text-black/65">
          © {new Date().getFullYear()} Supercharge Ai. All rights reserved.
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: var(--font-body), sans-serif;
        }

        .page-shell {
          opacity: 0;
          transform: translateY(16px);
        }

        .page-shell.is-loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .section-block {
          scroll-margin-top: 96px;
        }

        .section-block + .section-block {
          margin-top: clamp(1rem, 2vw, 2rem);
        }

        .mesh-bg {
          position: absolute;
          inset: -20% auto auto -10%;
          width: min(70vw, 720px);
          aspect-ratio: 1.2;
          border-radius: 999px;
          background:
            radial-gradient(circle at 30% 30%, rgba(96, 0, 0, 0.15), transparent 55%),
            radial-gradient(circle at 70% 45%, rgba(96, 0, 0, 0.08), transparent 58%),
            radial-gradient(circle at 45% 80%, rgba(96, 0, 0, 0.06), transparent 60%);
          filter: blur(6px);
          pointer-events: none;
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          will-change: opacity, transform;
        }

        @media (prefers-reduced-motion: no-preference) {
          .page-shell {
            transition: opacity 700ms ease-out, transform 700ms ease-out;
          }

          .reveal {
            transition: opacity 420ms ease-out, transform 420ms ease-out;
          }
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .page-shell,
          .reveal,
          .page-shell.is-loaded,
          .reveal.is-visible {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-[#600000]">WhatsApp AI Assistant</p>
        <span className="rounded-full bg-[#fdf5f5] px-2 py-1 text-[10px] font-semibold text-[#600000]">
          online
        </span>
      </div>
      <svg
        viewBox="0 0 360 180"
        className="h-auto w-full"
        role="img"
        aria-label="Conversation and metrics illustration"
      >
        <rect x="0" y="0" width="360" height="180" rx="16" fill="#fff" />
        <rect x="18" y="20" width="178" height="32" rx="12" fill="#f9f9f9" />
        <rect x="164" y="64" width="178" height="32" rx="12" fill="#fdf5f5" />
        <rect x="18" y="108" width="220" height="32" rx="12" fill="#f9f9f9" />
        <rect x="255" y="108" width="87" height="32" rx="12" fill="#600000" />
        <text x="32" y="40" fontSize="10" fill="#222">
          Hi, can I reserve for tonight?
        </text>
        <text x="178" y="84" fontSize="10" fill="#600000">
          Yes. 7:00 PM or 8:30 PM?
        </text>
        <text x="269" y="128" fontSize="10" fill="#fff">
          Booked
        </text>
        <circle cx="316" cy="32" r="18" fill="#600000" opacity="0.12" />
      </svg>
    </div>
  );
}

function UseCaseVisual({ variant }: { variant: string }) {
  if (variant === "food") {
    return (
      <svg viewBox="0 0 320 170" className="h-auto w-full" role="img" aria-label="Restaurant dashboard image">
        <rect width="320" height="170" fill="#fff" />
        <rect x="16" y="16" width="288" height="38" rx="12" fill="#fdf5f5" />
        <rect x="16" y="66" width="136" height="88" rx="12" fill="#f9f9f9" />
        <rect x="168" y="66" width="136" height="88" rx="12" fill="#600000" opacity="0.9" />
        <text x="28" y="39" fontSize="11" fill="#600000">Table Reservations</text>
        <text x="186" y="111" fontSize="22" fill="#fff">+38%</text>
      </svg>
    );
  }

  if (variant === "hotel") {
    return (
      <svg viewBox="0 0 320 170" className="h-auto w-full" role="img" aria-label="Hospitality workflow image">
        <rect width="320" height="170" fill="#fff" />
        <rect x="18" y="20" width="284" height="26" rx="10" fill="#f9f9f9" />
        <circle cx="52" cy="98" r="34" fill="#fdf5f5" />
        <rect x="102" y="70" width="186" height="18" rx="9" fill="#f9f9f9" />
        <rect x="102" y="96" width="148" height="18" rx="9" fill="#f9f9f9" />
        <rect x="102" y="122" width="112" height="18" rx="9" fill="#600000" />
        <text x="30" y="36" fontSize="11" fill="#600000">Guest Check-in Bot</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 170" className="h-auto w-full" role="img" aria-label="E-commerce conversion image">
      <rect width="320" height="170" fill="#fff" />
      <rect x="16" y="16" width="288" height="28" rx="10" fill="#f9f9f9" />
      <rect x="16" y="56" width="88" height="98" rx="10" fill="#fdf5f5" />
      <rect x="114" y="56" width="88" height="98" rx="10" fill="#f9f9f9" />
      <rect x="212" y="56" width="92" height="98" rx="10" fill="#600000" opacity="0.92" />
      <text x="224" y="110" fontSize="18" fill="#fff">62%</text>
      <text x="224" y="130" fontSize="10" fill="#fff">Recovered carts</text>
    </svg>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="inline-flex min-h-10 min-w-10 items-center text-sm text-black/70 transition-colors duration-100 ease-out hover:text-[#600000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#600000] focus-visible:ring-offset-2"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
