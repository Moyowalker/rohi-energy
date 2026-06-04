/**
 * Central placeholder content for the Rohi Energy landing page.
 * Swap these values for real copy/assets — components read everything from here.
 */

export const company = {
  name: "Rohi Energy",
  tagline: "Powering progress, responsibly.",
  shortName: "Rohi",
  established: 2009,
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Operations", href: "#operations" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Integrated Oil & Gas",
  headline: "Energy that moves the world forward.",
  subtext:
    "Rohi Energy explores, produces, and delivers hydrocarbons with discipline and care — investing in the communities and technologies that define a responsible energy future.",
  primaryCta: { label: "Explore our operations", href: "#operations" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
} as const;

export const about = {
  eyebrow: "Who we are",
  heading: "A measured approach to a vital industry.",
  body: [
    "Founded in 2009, Rohi Energy is an integrated oil and gas company operating across the full value chain — from upstream exploration to midstream logistics and downstream supply.",
    "We believe energy and responsibility are not opposing forces. Every barrel we produce is governed by rigorous safety, environmental, and governance standards, and a long-term commitment to the regions where we operate.",
  ],
  highlights: [
    "ISO 14001 environmental management",
    "Zero-flaring roadmap by 2030",
    "Local-first hiring & procurement",
  ],
} as const;

export const services = {
  eyebrow: "What we do",
  heading: "Operations across the energy value chain.",
  items: [
    {
      title: "Exploration",
      description:
        "Data-driven seismic surveying and appraisal to identify and de-risk reserves with precision.",
    },
    {
      title: "Production",
      description:
        "Efficient, safety-led extraction and field management that maximises recovery and uptime.",
    },
    {
      title: "Midstream & Logistics",
      description:
        "Reliable transport, storage, and processing connecting our fields to global markets.",
    },
    {
      title: "Trading & Supply",
      description:
        "Transparent marketing of crude and refined products across regional and international markets.",
    },
  ],
} as const;

export const stats = {
  eyebrow: "Our impact",
  heading: "Scale built on consistency.",
  items: [
    { value: "120k", label: "Barrels produced per day" },
    { value: "1.4B", label: "Barrels in proven reserves" },
    { value: "12", label: "Countries of operation" },
    { value: "15+", label: "Years of safe delivery" },
  ],
} as const;

export const contact = {
  eyebrow: "Contact",
  heading: "Let's talk.",
  body: "Whether you're a partner, supplier, or prospective team member, we'd be glad to hear from you.",
  email: "hello@rohienergy.com",
  phone: "+1 (555) 014-2390",
  address: "Suite 1200, Energy Plaza, Houston, TX 77002",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "X", href: "https://x.com" },
  ],
} as const;

export const marquee = [
  "Exploration",
  "Production",
  "Refining",
  "Logistics",
  "Trading",
  "Sustainability",
  "Energy Security",
] as const;

export const footer = {
  blurb:
    "Integrated oil & gas, delivered responsibly across the energy value chain.",
} as const;
