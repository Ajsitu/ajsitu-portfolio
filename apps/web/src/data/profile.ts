export const profile = {
  name: 'Situmbeko Simataa',
  short: 'SITU',
  role: 'UI/UX & Front-End Developer',
  tagline: 'UI designer, front-end developer and multimedia creative',
  location: 'Lusaka, Zambia',
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
    'I design interfaces in Figma, build them in React, and create the visual content around them. My work covers product screens, responsive front-end builds, brand graphics and video.',
  pitch:
    'I work across design and code, from first layout to live release. I have built for startups, agencies, local brands and remote teams in the USA.',
  typedWords: ['design.', 'front-end.', 'video.', 'your brand.', 'your idea.'],
  skills: ['React', 'TypeScript', 'Figma', 'Video Editing', 'Graphic Design', 'Training'],
  services: [
    {
      icon: '</>',
      title: 'Front-End',
      body: 'React, TypeScript and JavaScript for clean, responsive web builds.',
    },
    {
      icon: 'UX',
      title: 'UI / UX',
      body: 'Figma layouts, prototypes, user flows, wireframes and interface testing.',
    },
    {
      icon: 'GD',
      title: 'Graphic Design',
      body: 'Illustrator and Photoshop for posters, layouts, logos and campaign visuals.',
    },
    {
      icon: 'VE',
      title: 'Video Editing',
      body: 'Premiere Pro and After Effects for editing, colour grade and motion graphics.',
    },
    {
      icon: 'TR',
      title: 'Trainer',
      body: 'AI training, model review, mentoring and practical knowledge sharing.',
    },
  ],
  differentiators: [
    'Design and code in one workflow',
    'Video and multimedia in-house',
    'Brand assets that stay consistent',
    'Clear scope, steady delivery',
  ],
  timeline: [
    {
      when: 'Jun 2026 - Present · Remote (USA)',
      role: 'AI Training Contractor',
      org: 'Micro1 Inc.',
    },
    { when: 'May 2026 - Present · Lusaka', role: 'UI Developer', org: 'Ballo Innovations Limited' },
    {
      when: 'Jul 2025 - Present · Lusaka',
      role: 'Visual & UX Designer / Front-End Developer',
      org: 'Central Global Uplink (CGU)',
    },
    {
      when: 'Jun - Jul 2025 · Lusaka',
      role: 'Multimedia & Graphic Designer',
      org: 'LEAS Advanced Engineering Services',
    },
    {
      when: 'Feb - May 2025 · Lusaka',
      role: 'Software Engineering Intern',
      org: 'Zambian Cloud Programmers',
    },
    {
      when: '2020 - Present · Remote',
      role: 'Founder & Lead Designer',
      org: "Allen's Innovations",
    },
    {
      when: '2020 - 2024 · Lusaka',
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
