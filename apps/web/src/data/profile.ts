export const profile = {
  name: 'Situmbeko Simataa',
  short: 'SITU',
  role: 'UI/UX & Front-End Developer',
  tagline: 'Multimedia Designer who bridges design and development',
  location: 'Helen Kaunda, Lusaka, Zambia',
  available: true,
  email: 'situmbekosimataa3@gmail.com',
  phones: ['+260 971 164 264', '+260 571 400 453'],
  links: {
    behance: 'https://www.behance.net/situmbesimataa',
    linkedin: 'https://www.linkedin.com/in/situmbeko-simataa-b20b4b318',
    github: 'https://github.com/Ajsitu',
    website: 'https://my-career-web-sandy.vercel.app',
  },
  intro:
    'I’m a UI/UX Front-End Developer & Multimedia Designer who bridges design and development — turning concepts into clean, responsive, interactive interfaces that resonate with users and drive results.',
  pitch:
    'Designer-developer who ships. I’ve taken products from concept to live release across startups, agencies and my own studio — from Lusaka to remote teams in the USA.',
  typedWords: ['design.', 'front-end.', 'motion.', 'your idea.', 'UI systems.'],
  skills: ['React', 'TypeScript', 'Figma', 'Motion Graphics', 'UI Systems', 'Branding'],
  services: [
    {
      icon: '</>',
      title: 'Front-End',
      body: 'React, TypeScript, JS — pixel-accurate, responsive, accessible builds.',
    },
    {
      icon: '◑',
      title: 'UI / UX',
      body: 'Figma prototyping — user-centered flows, wireframes & testing.',
    },
    {
      icon: '▦',
      title: 'Systems',
      body: 'Design systems — tokens, components & consistent libraries.',
    },
    {
      icon: '►',
      title: 'Motion',
      body: 'After Effects, Premiere — micro-interactions & brand video.',
    },
    {
      icon: '✦',
      title: 'Branding',
      body: 'Illustrator, Photoshop — logos & visual identity systems.',
    },
  ],
  differentiators: [
    'Design-to-code, no hand-off gaps',
    'Motion & multimedia in-house',
    'Brand systems that scale',
    'Detail-obsessed, ships on time',
  ],
  timeline: [
    {
      when: 'Jun 2026 — Present · Remote (USA)',
      role: 'AI Training Contractor',
      org: 'Micro1 Inc.',
    },
    { when: 'May 2026 — Present · Lusaka', role: 'UI Developer', org: 'Ballo Innovations Limited' },
    {
      when: 'Jul 2025 — Present · Lusaka',
      role: 'Visual & UX Designer / Front-End Developer',
      org: 'Central Global Uplink (CGU)',
    },
    {
      when: 'Jun — Jul 2025 · Lusaka',
      role: 'Multimedia & Graphic Designer',
      org: 'LEAS Advanced Engineering Services',
    },
    {
      when: 'Feb — May 2025 · Lusaka',
      role: 'Software Engineering Intern',
      org: 'Zambian Cloud Programmers',
    },
    { when: '2020 — Present · Remote', role: 'Founder & Lead Designer', org: "Allen's Innovations" },
    {
      when: '2020 — 2024 · Lusaka',
      role: 'BSc ICT (Software Engineering)',
      org: 'Information & Communications University',
    },
  ],
  process: [
    {
      n: '01',
      title: 'Discover',
      body: 'Research users, audit the problem space, and map real needs before a pixel is drawn.',
    },
    {
      n: '02',
      title: 'Define',
      body: 'Frame the brief, set goals and constraints, and align scope with stakeholders.',
    },
    {
      n: '03',
      title: 'Develop',
      body: 'Prototype in Figma, iterate fast, and build responsive interfaces in code.',
    },
    {
      n: '04',
      title: 'Deliver',
      body: 'Ship, document the system, and refine from feedback and analytics.',
    },
  ],
}

export type Profile = typeof profile
