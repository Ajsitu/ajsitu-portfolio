/**
 * Project data.
 *
 * `featured` = live products (case studies with the Discover→Deliver process).
 * `behance`  = work pulled from behance.net/situmbesimataa. Each has a cover
 *              thumbnail + the module images from its gallery. Image fields are
 *              CDN basenames; URLs are built in src/lib/assets.ts so they can be
 *              swapped to local copies after running `pnpm assets`.
 */

export interface FeaturedProject {
  slug: string
  name: string
  url: string
  domain: string
  kind: string
  badge: string
  blurb: string
  features: string[]
  /** CSS gradient for the browser-mock hero. */
  gradient: string
}

import type { VideoEmbed } from '../lib/assets'

export interface BehanceProject {
  id: number
  slug: string
  name: string
  year: string
  category: string
  url: string
  tags: string[]
  tools: string[]
  blurb: string
  /** cover basename (served at /projects/<size>/) */
  cover: string
  /** module image basenames (served at /project_modules/<size>/) */
  images: string[]
  /** embedded videos that play inline instead of images */
  videos?: VideoEmbed[]
}

export const featured: FeaturedProject[] = [
  {
    slug: 'mycareerweb',
    name: 'MyCareerWeb',
    url: 'https://my-career-web-sandy.vercel.app',
    domain: 'my-career-web-sandy.vercel.app',
    kind: 'Web App · UI/UX · Front-End',
    badge: 'Live Demo',
    blurb:
      'A career-development web app connecting people to career pathways, industry insights and employer connections. I designed and built the front-end, including authentication, onboarding, the dashboard shell and a responsive component system. Some product work is under NDA, with more examples available on request.',
    features: ['Auth & Onboarding UI', 'Career Pathways Dashboard', 'Responsive Web App'],
    gradient: 'radial-gradient(circle at 30% 20%, #243b55, #0d1b2a)',
  },
  {
    slug: 'balloads',
    name: 'BalloAds',
    url: 'https://balloads.com',
    domain: 'balloads.com',
    kind: 'SaaS · UI Development',
    badge: 'Live Product',
    blurb:
      'UI development at Ballo Innovations for a digital advertising platform covering bulk SMS, targeted WhatsApp ads and campaign management. I built responsive interfaces focused on usability, accessibility and performance.',
    features: ['WhatsApp Marketing UI', 'Campaign Dashboard', 'Responsive Front-End'],
    gradient: 'radial-gradient(circle at 70% 30%, #3a1d00, #120a02)',
  },
  {
    slug: 'lusaka365',
    name: 'Lusaka365',
    url: 'https://www.lusaka365.co',
    domain: 'lusaka365.co',
    kind: 'Web · UX Design',
    badge: 'Live Product',
    blurb:
      'Web and UX work on Lusaka365, a city guide for Lusaka covering events, stories and neighbourhoods. The brief was to make what is on and where to go easy to browse, with a clean local visual style.',
    features: ['City Guide UX', 'Events & Stories Layout', 'Responsive Web'],
    gradient: 'radial-gradient(circle at 30% 30%, #1a4d3e, #08130f)',
  },
]

export const behance: BehanceProject[] = [
  {
    id: 218093325,
    slug: 'zusa-waste-management',
    name: 'ZUSA Waste Management: Final-Year Project',
    year: '2024',
    category: 'UI/UX · Web',
    url: 'https://www.behance.net/gallery/218093325/WEB-DESIGN-UXUI-BackEnd-2024-Final-Year-Project',
    tags: ['UI/UX', 'Web Design', 'Web App'],
    tools: ['Figma', 'Microsoft Visual Studio', 'PHP'],
    blurb:
      'Final-year project for ZUSA Waste Management: a web-based system designed and built end to end, covering UI/UX, front-end development and database management.',
    cover: '155ff7218093325.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png',
    images: [
      '713c7a218093325.679b77de9b9e7.png',
      '8331f2218093325.679b77de9b2cf.png',
      'b81bff218093325.679b77de998fb.png',
      '27babc218093325.679b77de9a018.png',
      '9ed9fe218093325.679b77de9a70d.png',
      'eee991218093325.679b77de99201.png',
      '6a23fc218093325.679b77de9826e.png',
      'ebd37c218093325.679b77de97db5.png',
      '785458218093325.679b77de98708.png',
      'ac0a98218093325.679b77de98b60.png',
      'c74da7218093325.679b77de9ae3f.png',
      '2664c4218093325.679b7cc67255f.png',
      'c9cf8e218093325.679b7cc671d6c.png',
      '0fddaa218093325.679b7cc671634.png',
      '370b84218093325.679b7cc672d21.png',
    ],
  },
  {
    id: 230113303,
    slug: 'eco-flames-energies',
    name: 'Eco Flames Energies',
    year: '2025',
    category: 'Branding',
    url: 'https://www.behance.net/gallery/230113303/Eco-Flames-Energies-design-project-2025',
    tags: ['Logo Design', 'Branding', 'Visual Identity'],
    tools: ['Illustrator', 'Photoshop', 'Premiere Pro', 'After Effects'],
    blurb:
      'Brand identity for Eco Flames charcoal briquettes, including a logo system, red/green/grey palette, the tagline “Safer fire always”, social video graphics and flyers.',
    cover: '465376230113303.Y3JvcCwxNTY0LDEyMjMsMCwxNzA.png',
    images: ['688524230113303.687110491557a.jpg'],
  },
  {
    id: 219265699,
    slug: 'rident-solutions',
    name: 'Rident Solutions',
    year: '2025',
    category: 'Advertising · Social',
    url: 'https://www.behance.net/gallery/219265699/RIDENT-SOLUTIONS-2025',
    tags: ['Digital Art', 'Social Media', 'Advertising'],
    tools: ['Photoshop', 'Illustrator', 'Vector Magic'],
    blurb:
      'Advertising and social campaign design for Rident Solutions, including a Valentine’s-themed series.',
    cover: 'b6870a219265699.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg',
    images: [
      '29f217219265699.67b5855ee8cd3.png',
      '9d2930219265699.67b46f80efb0c.jpg',
      'da2bdb219265699.67caadc96643f.png',
      'e77090219265699.67caadc965f6e.png',
      'a9d911219265699.67caadc9659f4.png',
      '91f766219265699.67caadc9650a0.png',
    ],
  },
  {
    id: 207406623,
    slug: 'flaws-album-launch',
    name: 'FLAWS Album Launch',
    year: '2024',
    category: 'Event Branding',
    url: 'https://www.behance.net/gallery/207406623/FLAWS-ALBUM-LAUNCH-PROJECT-BREAKDOWN-2024',
    tags: ['Event Branding', 'Creative Direction', 'Poster'],
    tools: ['Photoshop', 'Illustrator', 'Lightroom'],
    blurb:
      'Full event-branding breakdown for the FLAWS album launch, including ticket design, event posters, partner posters and social content built on an emerald-green, sky-blue and red palette.',
    cover: 'ecf920207406623.Y3JvcCwzNTA2LDI3NDIsMCwxMTEw.jpg',
    images: [
      '106720207406623.66dd3df7175f7.jpg',
      'be277d207406623.66dd3df7182e7.jpg',
      'f3c5d5207406623.66dd3df717ada.jpg',
      'e15f22207406623.66dd3df717104.jpg',
      'd4e676207406623.66dd3df7168a4.png',
    ],
  },
  {
    id: 203885161,
    slug: 'icu-pcm-concert',
    name: 'ICU PCM Charity Concert',
    year: '2022',
    category: 'Event Branding',
    url: 'https://www.behance.net/gallery/203885161/ICU-PCM-concert-2022',
    tags: ['Event Branding', 'Advertising', 'Countdown'],
    tools: ['Photoshop'],
    blurb:
      'Full event package for the ICU PCM charity concert, including advertising, branding and a countdown series.',
    cover: 'bddb39203885161.Y3JvcCw5NjQsNzU0LDAsMA.jpg',
    images: [
      'f7b4a5203885161.67aef3dcc60fb.jpg',
      '291879203885161.67aef3dcc5be1.jpg',
      '11015e203885161.67aef3dcc6958.jpg',
      '782870203885161.67aef3dcc2d44.jpg',
      '31378e203885161.67aef3dcc1092.jpg',
      'f880b8203885161.67aef3dcc38f5.jpg',
      'a75eb7203885161.67aef3dcc7cbb.jpg',
      '9abd7a203885161.67aef3dcc27bc.jpg',
      '1d7a8c203885161.67aef3dcc31cb.jpg',
      '8c88b3203885161.67aef3dcc3fde.jpg',
    ],
  },
  {
    id: 204868393,
    slug: 'icu-guest-day',
    name: 'Guest Day: ICU Adventist Ministries',
    year: '2023',
    category: 'Event Design',
    url: 'https://www.behance.net/gallery/204868393/Guest-Day-Event-By-ICU-adventist-Ministries-2023',
    tags: ['Event Design', 'Church', 'Artwork'],
    tools: ['Photoshop', 'Illustrator'],
    blurb: 'Church event artwork and concept design for ICU Adventist Ministries’ Guest Day.',
    cover: '41d7c5204868393.Y3JvcCwyMDQ4LDE2MDEsMCwyMjM.jpg',
    images: [
      'fdd6e9204868393.67aef24a93787.jpg',
      '7662fe204868393.67aef24a93e52.jpg',
      '390426204868393.67aef24a9326d.jpg',
      '8835f3204868393.67aef24a92b0b.jpg',
      '9239dc204868393.67aef24a94349.jpg',
    ],
  },
  {
    id: 203884379,
    slug: 'music-with-love',
    name: 'Music with Love: Nothando',
    year: '2023',
    category: 'Event Branding',
    url: 'https://www.behance.net/gallery/203884379/Music-with-Love-Concert-by-Nothando-2023',
    tags: ['Concert', 'Gospel', 'Event Branding'],
    tools: ['Photoshop'],
    blurb: 'Event branding for Nothando’s “Music with Love” concert and fellowship programme.',
    cover: 'c6dd11203884379.Y3JvcCw5NjUsNzU0LDAsODM.jpg',
    images: [
      'f705c3203884379.67aeefa53e75e.jpg',
      '43d0e7203884379.67aeefa53de67.jpg',
      '296621203884379.67aeefa53e319.jpg',
      'f957ec203884379.67aeefa53ee2d.jpg',
      'f6735c203884379.67aeefa53d7bb.jpg',
    ],
  },
  {
    id: 206396053,
    slug: 'chitenge-fashion-show',
    name: 'Chitenge Fashion Show',
    year: '2020',
    category: 'Event Design',
    url: 'https://www.behance.net/gallery/206396053/CHITENGE-FASHION-SHOW-2020',
    tags: ['Event Design', 'Ticket Design', 'Fashion'],
    tools: ['Photoshop', 'InDesign'],
    blurb:
      'Event identity and ticket design for the 2020 Chitenge Fashion Show (client: Pius Security).',
    cover: 'ffeca7206396053.Y3JvcCwxNTM0LDEyMDAsNzMyLDA.jpg',
    images: [
      '9b5813206396053.67a0ccb0239b3.jpg',
      '73f25e206396053.67a0ccb023e25.jpg',
      '423cab206396053.67a0ccb024260.jpg',
      '21ccc5206396053.66cc3797dfb47.jpg',
    ],
  },
  {
    id: 206395099,
    slug: 'pius-security-branding',
    name: 'Pius Security Branding',
    year: '2022',
    category: 'Brand Identity',
    url: 'https://www.behance.net/gallery/206395099/Pius-Security-Company-Branding-2022',
    tags: ['Brand Identity', 'Logo', 'Poster'],
    tools: ['Photoshop', 'Illustrator'],
    blurb: 'Logo and poster work for Pius Security Company in Mongu, Western Province, Zambia.',
    cover: 'fc60f8206395099.Y3JvcCwxMjI2LDk1OSwyNyww.jpg',
    images: ['e4cd11206395099.66cc329852bf6.jpg'],
  },
  {
    id: 219263895,
    slug: 'boys-retreat-camp',
    name: 'Boys Retreat Camp',
    year: '2025',
    category: 'Event Design',
    url: 'https://www.behance.net/gallery/219263895/2025-BOYS-RETREAT-PROJECT',
    tags: ['Event Design', 'Branding'],
    tools: ['Photoshop', 'Illustrator'],
    blurb: 'Event branding for Boys Retreat Camp 2025 in Mongu, Western Province, Zambia.',
    cover: 'd7553e219263895.Y3JvcCw0NTAwLDM1MTksMCw0OTA.jpg',
    images: ['669c21219263895.67aeed61247d0.jpg', 'c4cb1f219263895.67aeed6125186.png'],
  },
  {
    id: 205075921,
    slug: 'video-editing-reel',
    name: 'Video Editing & Motion Reel',
    year: '2022-2024',
    category: 'Motion · Video',
    url: 'https://www.behance.net/gallery/205075921/Video-Editing-Projects-2022-2024',
    tags: ['Video Editing', 'Cinematography', 'Motion'],
    tools: ['Premiere Pro', 'After Effects', 'Photoshop'],
    blurb:
      'A reel of video editing, cinematography and motion-graphics work from 2022 to 2024, edited, colour-graded and scored in Premiere Pro and After Effects.',
    cover: 'bf8750205075921.Y3JvcCwxMzc5LDEwNzksMjY5LDA.jpg',
    images: [],
    videos: [
      { provider: 'youtube', id: 'RY4bsaEhSQE' },
      { provider: 'youtube', id: 'wm8ra64denk' },
      { provider: 'youtube', id: 'dNB-5-ZoXnY' },
      { provider: 'youtube', id: 'Pjp8exwOIpw' },
      {
        provider: 'facebook',
        id: '1156699062125015',
        href: 'https://www.facebook.com/acappells/videos/1156699062125015/',
        portrait: true,
      },
    ],
  },
  {
    id: 203884783,
    slug: 'impact-zambia',
    name: 'Impact Zambia: Mental Health',
    year: '2023',
    category: 'Awareness Campaign',
    url: 'https://www.behance.net/gallery/203884783/Impact-Zambia-Mental-health-awareness-designs',
    tags: ['Mental Health', 'Awareness', 'Advertising'],
    tools: ['Photoshop'],
    blurb: 'Mental-health awareness campaign designs for Impact Zambia.',
    cover: '6bbd3e203884783.Y3JvcCwxMDI0LDgwMCwwLDExMQ.jpg',
    images: [],
  },
  {
    id: 203883595,
    slug: 'acappella-logo',
    name: 'Acappella Logo & Mockups',
    year: '2023',
    category: 'Logo Design',
    url: 'https://www.behance.net/gallery/203883595/Acappells-Logo-Mockups',
    tags: ['Logo Design', 'Mockups', 'Branding'],
    tools: ['Photoshop'],
    blurb: 'Logo design and presentation mockups for Acappella.',
    cover: 'b42925203883595.Y3JvcCwzMDczLDI0MDQsMjg5LDA.jpg',
    images: [],
  },
  {
    id: 203383877,
    slug: 'works-2020-2025',
    name: 'Selected Works 2020-2025',
    year: '2025',
    category: 'Showreel',
    url: 'https://www.behance.net/gallery/203383877/My-works-From-2020-2025',
    tags: ['Event Branding', 'Motion', 'Visual Arts'],
    tools: ['Photoshop', 'Premiere Pro', 'After Effects'],
    blurb:
      'A compilation reel of event branding, flyer design, video editing, visual arts and motion graphics from 2020 to 2025.',
    cover: '7eb717203383877.Y3JvcCwxOTk5LDE1NjQsMCw5MzA.png',
    images: ['a6b366203383877.67b589ad0cacd.png', '32a0a4203383877.67b589ad0c27a.jpg'],
  },
]

export const allProjects = behance
