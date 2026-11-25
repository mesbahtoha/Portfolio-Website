// ============================================
//  DATA.JS — All portfolio content lives here.
//  Every human-readable field can have a
//  matching `...Bn` Bangla translation.
// ============================================

import gearupThumb from '../assets/project-1-thumbnail.jpg'
import shikhiThumb from '../assets/shikhi-bondhu.jpg'
import zapshiftThumb from '../assets/project-3-thumbnail.jpg'
import careerCodeThumb from '../assets/project-4-thumbnail.jpg'
import assessDevThumb from '../assets/assessdev.jpg'
import teslaPoolThumb from '../assets/tesla-pool.jpg'
import bytespaceThumb from '../assets/bytespace.jpg'
import echoGptThumb from '../assets/echogpt.jpg'
import fahimThumb from '../assets/fahim-pharmacy.jpg'

export const personal = {
  name: 'Md. Mesbahul Alam',
  shortName: 'Mesbahul',
  title: 'Full Stack Developer',
  titleLine: 'Full Stack Developer | AI & RAG Applications',
  titleLineBn: 'ফুল স্ট্যাক ডেভেলপার | এআই ও RAG অ্যাপ্লিকেশন',
  tagline:
    'I build real-world products end to end — a Bengali-first AI tutor grounded in real textbook pages, marketplaces, logistics platforms, and AI-powered web apps.',
  taglineBn:
    'আমি শুরু থেকে শেষ পর্যন্ত বাস্তব-জীবনের প্রোডাক্ট বানাই — বাস্তব টেক্সটবুক পৃষ্ঠা থেকে উত্তর দেওয়া বাংলা-ফার্স্ট এআই টিউটর, মার্কেটপ্লেস, লজিস্টিকস প্ল্যাটফর্ম এবং এআই-চালিত ওয়েব অ্যাপ।',
  email: 'mesbahulalam017@gmail.com',
  phone: '+8801601860526',
  phoneDisplay: '+880 1601-860526',
  location: 'Dhaka, Bangladesh',
  locationBn: 'ঢাকা, বাংলাদেশ',
  github: 'https://github.com/mesbahtoha',
  linkedin: 'https://www.linkedin.com/in/mesbahul-alam/',
  facebook: 'https://www.facebook.com/profile.php?id=61576957316338',
  instagram: 'https://www.instagram.com/mesbaah.toha',
  portfolio: 'https://beautiful-fairy-fd01f8.netlify.app',
  resumeUrl:
    'https://drive.google.com/file/d/1hLZqk8U_O4snf6RQJfKJGt_NYi-xReRY/view?usp=sharing',
  certificatesUrl:
    'https://www.linkedin.com/in/mesbahul-alam/details/certifications/',
  initials: 'MA',
  coreStack: [
    'React.js',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    'Prisma',
    'AI / RAG',
    'Tailwind CSS',
  ],
}

// ── ABOUT ────────────────────────────────────────────────────
export const about = {
  intro:
    "I'm Md. Mesbahul Alam — a Full Stack Developer from Dhaka, Bangladesh, building products around real-world problems. My work spans a Bengali-first AI tutor that answers only from real textbook pages, marketplace features for Shahi Mokam, a live pharmacy site for Fahim Pharmaceutical, and a parcel delivery system covering all 64 districts.",
  introBn:
    'আমি মোঃ মেসবাহুল আলম — ঢাকা, বাংলাদেশের একজন ফুল স্ট্যাক ডেভেলপার। আমি বাস্তব সমস্যাকে কেন্দ্র করে প্রোডাক্ট বানাই। আমার কাজের মধ্যে আছে শুধু বাস্তব টেক্সটবুক পৃষ্ঠা থেকে উত্তর দেওয়া বাংলা-ফার্স্ট এআই টিউটর, শাহী মোকামের মার্কেটপ্লেস ফিচার, ফাহিম ফার্মাসিউটিক্যালের লাইভ ওয়েবসাইট এবং ৬৪ জেলা কভার করা পার্সেল ডেলিভারি সিস্টেম।',
  extended:
    "On contract, I've delivered seller onboarding, courier integration, and product discovery for marketplace users. I also built GearUp, a secure gear-rental marketplace with Stripe, and Shikhi Bondhu, an AI Builders Congress finalist. Alongside software, I'm researching smartphone-based body measurement for tailoring — turning dual-view photos and measured height into tailor-ready measurements with measurement-specific uncertainty.",
  extendedBn:
    'চুক্তিভিত্তিক কাজে আমি সেলার অনবোর্ডিং, কুরিয়ার ইন্টিগ্রেশন এবং মার্কেটপ্লেস ব্যবহারকারীদের জন্য প্রোডাক্ট ডিসকভারি ডেলিভার করেছি। এছাড়া Stripe-সহ নিরাপদ গিয়ার-রেন্টাল মার্কেটপ্লেস GearUp এবং AI Builders Congress ফাইনালিস্ট Shikhi Bondhu তৈরি করেছি। সফটওয়্যারের পাশাপাশি টেইলরিংয়ের জন্য স্মার্টফোন-ভিত্তিক বডি মেজারমেন্ট নিয়ে গবেষণা করছি — ডুয়াল-ভিউ ছবি ও মাপা উচ্চতা থেকে প্রতিটি মাপের আলাদা uncertainty সহ টেইলর-রেডি মাপে রূপান্তর।',
  hobbies:
    'Outside of code, I enjoy following cricket, solving logical puzzles, and exploring how LLMs, RAG, and vector search are reshaping software — great developers stay curious beyond their keyboards.',
  hobbiesBn:
    'কোডের বাইরে ক্রিকেট দেখা, লজিক পাজল সমাধান এবং LLM, RAG ও ভেক্টর সার্চ কীভাবে সফটওয়্যার বদলে দিচ্ছে তা নিয়ে ঘুরে বেড়াতে ভালো লাগে — ভালো ডেভেলপাররা কীবোর্ডের বাইরেও কৌতূহলী থাকেন।',
  highlights: [
    { value: '12+', label: 'Projects Built', labelBn: 'প্রজেক্ট' },
    { value: '30+', label: 'Technologies', labelBn: 'টেকনোলজি' },
    { value: 'Finalist', valueBn: 'ফাইনালিস্ট', label: 'AI Builders Congress', labelBn: 'এআই বিল্ডার্স কংগ্রেস' },
    { value: 'B.Sc. ICE', label: 'Daffodil International University', labelBn: 'ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি' },
  ],
  passions: [
    'Full Stack Development',
    'Next.js',
    'TypeScript',
    'REST APIs',
    'AI / RAG',
    'System Design',
    'Clean Code',
    'Problem Solving',
  ],
  passionsBn: [
    'ফুল স্ট্যাক ডেভেলপমেন্ট',
    'Next.js',
    'TypeScript',
    'REST API',
    'এআই / RAG',
    'সিস্টেম ডিজাইন',
    'ক্লিন কোড',
    'সমস্যা সমাধান',
  ],
  lookingFor:
    'I am looking for a Full Stack Developer or AI Engineer role where I can design and build scalable, production-grade applications while deepening my expertise in system design, RAG, and applied ML.',
  lookingForBn:
    'আমি ফুল স্ট্যাক ডেভেলপার বা এআই ইঞ্জিনিয়ার ভূমিকা খুঁজছি, যেখানে স্কেলযোগ্য প্রোডাকশন-গ্রেড অ্যাপ্লিকেশন ডিজাইন ও বিল্ড করার পাশাপাশি সিস্টেম ডিজাইন, RAG এবং অ্যাপ্লাইড ML-এ দক্ষতা বাড়াতে পারব।',
  journey: [
    {
      year: '2022',
      label: 'HSC · Science',
      labelBn: 'HSC · বিজ্ঞান',
      detail: 'Perfect GPA 5.00',
      detailBn: 'পারফেক্ট জিপিএ ৫.০০',
    },
    {
      year: '2024',
      label: 'B.Sc. ICE',
      labelBn: 'বি.এসসি. ICE',
      detail: 'Daffodil International University',
      detailBn: 'ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি',
    },
    {
      year: '2025',
      label: 'Contract Work',
      labelBn: 'চুক্তিভিত্তিক কাজ',
      detail: 'Shahi Mokam, Fahim Pharmaceutical & Bytespace',
      detailBn: 'শাহী মোকাম, ফাহিম ফার্মাসিউটিক্যাল ও বাইটস্পেস',
    },
    {
      year: 'Now',
      label: 'AI / RAG & Research',
      labelBn: 'এআই / RAG ও গবেষণা',
      detail: 'Shikhi Bondhu + smartphone body measurement',
      detailBn: 'শিখি বন্ধু + স্মার্টফোন বডি মেজারমেন্ট',
    },
  ],
}

// ── EXPERIENCE (CONTRACTUAL) ─────────────────────────────────
export const experiences = [
  {
    id: 'shahi-mokam',
    role: 'Full Stack Developer',
    roleBn: 'ফুল স্ট্যাক ডেভেলপার',
    company: 'Shahi Mokam',
    type: 'Contract',
    typeBn: 'কন্ট্রাক্ট',
    period: '3 months',
    periodBn: '৩ মাস',
    location: 'Dhaka, Bangladesh',
    locationBn: 'ঢাকা, বাংলাদেশ',
    website: 'https://www.shahimokam.com/',
    summary:
      'Worked with the product team to improve marketplace discovery and seller operations for a live multi-vendor commerce platform.',
    summaryBn:
      'একটি লাইভ মাল্টি-ভেন্ডর কমার্স প্ল্যাটফর্মের প্রোডাক্ট টিমের সঙ্গে কাজ করে মার্কেটপ্লেস ডিসকভারি ও সেলার অপারেশন উন্নত করেছি।',
    bullets: [
      'Built a product filter sidebar to speed up discovery across categories, brands, and price ranges.',
      'Shipped a seller onboarding flow with a Business TIN form to bring new vendors onto the marketplace.',
      'Integrated the Steadfast Courier API to connect orders directly with delivery and tracking.',
      'Added a map-location popup to improve delivery address selection.',
    ],
    bulletsBn: [
      'ক্যাটাগরি, ব্র্যান্ড ও দাম অনুযায়ী দ্রুত প্রোডাক্ট খুঁজতে ফিল্টার সাইডবার তৈরি করেছি।',
      'নতুন ভেন্ডর মার্কেটপ্লেসে যুক্ত করার জন্য Business TIN ফর্মসহ সেলার অনবোর্ডিং ফ্লো ডেলিভার করেছি।',
      'অর্ডার সরাসরি ডেলিভারি ও ট্র্যাকিংয়ের সঙ্গে যুক্ত করতে Steadfast Courier API ইন্টিগ্রেট করেছি।',
      'ডেলিভারি ঠিকানা নির্বাচন সহজ করতে ম্যাপ-লোকেশন পপআপ যোগ করেছি।',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    accent: 'from-amber-500/20 to-orange-500/10',
  },
  {
    id: 'fahim-pharmaceutical',
    role: 'Web Developer',
    roleBn: 'ওয়েব ডেভেলপার',
    company: 'Fahim Pharmaceutical',
    type: 'Contract',
    typeBn: 'কন্ট্রাক্ট',
    period: '2 months',
    periodBn: '২ মাস',
    location: 'Bogura, Bangladesh',
    locationBn: 'বগুড়া, বাংলাদেশ',
    website: 'https://www.fahimpharmacytmss.xyz/',
    summary:
      'Designed and launched a Bengali-first, SEO-ready website for a local pharmacy, establishing its online presence near TMSS Medical College, Bogura.',
    summaryBn:
      'বগুড়ার TMSS মেডিকেল কলেজের কাছে একটি লোকাল ফার্মেসির জন্য বাংলা-ফার্স্ট, SEO-রেডি ওয়েবসাইট ডিজাইন ও লঞ্চ করেছি — প্রতিষ্ঠানটির অনলাইন উপস্থিতি তৈরি হয়েছে।',
    bullets: [
      'Built a fast, mobile-first site with services, offers, health tips, gallery, FAQ, and contact sections.',
      'Structured Bengali content and metadata for local search visibility and WhatsApp/call ordering.',
    ],
    bulletsBn: [
      'সেবা, অফার, স্বাস্থ্য টিপস, গ্যালারি, FAQ ও যোগাযোগসহ দ্রুত, মোবাইল-ফার্স্ট ওয়েবসাইট তৈরি করেছি।',
      'লোকাল সার্চে দেখা যাওয়া এবং WhatsApp/কল অর্ডারের জন্য বাংলা কনটেন্ট ও মেটাডেটা সাজিয়েছি।',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'Responsive Design'],
    accent: 'from-rose-500/20 to-red-500/10',
  },
  {
    id: 'bytespace',
    role: 'Frontend Developer',
    roleBn: 'ফ্রন্টএন্ড ডেভেলপার',
    company: 'Bytespace',
    type: 'Contract',
    typeBn: 'কন্ট্রাক্ট',
    period: '1 month',
    periodBn: '১ মাস',
    location: 'Remote',
    locationBn: 'রিমোট',
    website: 'https://bytespace-eta-seven.vercel.app/',
    summary:
      'Built a responsive course marketplace frontend focused on fast discovery and a smooth cart-to-checkout flow.',
    summaryBn:
      'দ্রুত কোর্স ডিসকভারি ও সহজ cart-to-checkout ফ্লোকে কেন্দ্র করে একটি রেসপন্সিভ কোর্স মার্কেটপ্লেস ফ্রন্টএন্ড তৈরি করেছি।',
    bullets: [
      'Created an 18-category catalog with search, filters, sorting, and pagination.',
      'Implemented course details, creator profiles, reviews, a global cart drawer, and checkout flow.',
    ],
    bulletsBn: [
      'সার্চ, ফিল্টার, সর্টিং ও পেজিনেশনসহ ১৮ ক্যাটাগরির কোর্স ক্যাটালগ তৈরি করেছি।',
      'কোর্স ডিটেইলস, ক্রিয়েটর প্রোফাইল, রিভিউ, গ্লোবাল কার্ট ড্রয়ার ও চেকআউট ফ্লো ইমপ্লিমেন্ট করেছি।',
    ],
    tech: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'],
    accent: 'from-blue-500/20 to-cyan-500/10',
  },
]

// ── EDUCATION ────────────────────────────────────────────────
export const education = [
  {
    id: 'bsc',
    degree: 'B.Sc. in Information & Communication Engineering (ICE)',
    degreeBn: 'বি.এসসি. ইন ইনফরমেশন অ্যান্ড কমিউনিকেশন ইঞ্জিনিয়ারিং (ICE)',
    institution: 'Daffodil International University',
    institutionBn: 'ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি',
    period: '2024 – Present',
    periodBn: '২০২৪ – বর্তমান',
    location: 'Dhaka, Bangladesh',
    locationBn: 'ঢাকা, বাংলাদেশ',
    gpa: null,
    description:
      'Studying core engineering subjects alongside full-stack development, computer networks, and digital communication systems.',
    descriptionBn:
      'ফুল-স্ট্যাক ডেভেলপমেন্ট, কম্পিউটার নেটওয়ার্ক ও ডিজিটাল কমিউনিকেশন সিস্টেমের পাশাপাশি কোর ইঞ্জিনিয়ারিং বিষয় পড়ছি।',
    highlights: [
      'Executive Committee Member — DIU ICEC',
      'Focused on full-stack development, AI / RAG, and system design',
    ],
    highlightsBn: [
      'এক্সিকিউটিভ কমিটি মেম্বার — DIU ICEC',
      'ফুল-স্ট্যাক ডেভেলপমেন্ট, এআই / RAG ও সিস্টেম ডিজাইনে মনোযোগ',
    ],
  },
  {
    id: 'hsc',
    degree: 'HSC / Alim (Science)',
    degreeBn: 'HSC / আলিম (বিজ্ঞান)',
    institution: 'Tamirul Millat Kamil Madrasah',
    institutionBn: 'তামিরুল মিল্লাত কামিল মাদ্রাসা',
    period: '2022',
    periodBn: '২০২২',
    location: 'Bangladesh',
    locationBn: 'বাংলাদেশ',
    gpa: '5.00 / 5.00',
    description:
      'Completed Higher Secondary Certificate in Science with a perfect GPA, building a strong foundation in mathematics and analytical thinking.',
    descriptionBn:
      'বিজ্ঞানে পারফেক্ট জিপিএ নিয়ে উচ্চ মাধ্যমিক সম্পন্ন করেছি — গণিত ও বিশ্লেষণী চিন্তার শক্তিশালী ভিত্তি তৈরি হয়েছে।',
    highlights: ['Perfect GPA — 5.00 / 5.00', 'Science specialization'],
    highlightsBn: ['পারফেক্ট জিপিএ — ৫.০০ / ৫.০০', 'বিজ্ঞান বিভাগ'],
  },
]

// ── SKILLS ───────────────────────────────────────────────────
export const skills = [
  {
    category: 'Languages',
    categoryBn: 'ভাষা',
    icon: 'SiJavascript',
    items: [
      { name: 'JavaScript (ES6+)', icon: 'SiJavascript' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'Python', icon: 'SiPython' },
    ],
  },
  {
    category: 'Frontend',
    categoryBn: 'ফ্রন্টএন্ড',
    icon: 'SiReact',
    items: [
      { name: 'HTML5', icon: 'SiHtml5' },
      { name: 'CSS3', icon: 'SiCss' },
      { name: 'React.js', icon: 'SiReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'shadcn/ui', icon: 'SiShadcnui' },
      { name: 'TanStack Query', icon: 'FiRefreshCw' },
      { name: 'Zustand', icon: 'FiZap' },
      { name: 'React Hook Form', icon: 'SiReacthookform' },
    ],
  },
  {
    category: 'Backend',
    categoryBn: 'ব্যাকএন্ড',
    icon: 'SiNodedotjs',
    items: [
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'Express.js', icon: 'SiExpress' },
      { name: 'REST API Design', icon: 'FiGlobe' },
      { name: 'JWT Authentication', icon: 'SiJsonwebtokens' },
      { name: 'bcrypt.js', icon: 'FiLock' },
      { name: 'Zod', icon: 'SiZod' },
      { name: 'Firebase Auth', icon: 'SiFirebase' },
      { name: 'Stripe SDK', icon: 'SiStripe' },
    ],
  },
  {
    category: 'Database',
    categoryBn: 'ডেটাবেস',
    icon: 'SiMongodb',
    items: [
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'Mongoose', icon: 'SiMongoose' },
      { name: 'PostgreSQL', icon: 'SiPostgresql' },
      { name: 'MySQL', icon: 'SiMysql' },
      { name: 'Prisma ORM', icon: 'SiPrisma' },
      { name: 'SQL', icon: 'FiDatabase' },
    ],
  },
  {
    category: 'AI / ML',
    categoryBn: 'এআই / এমএল',
    icon: 'SiOpenai',
    items: [
      { name: 'RAG', icon: 'SiOpenai' },
      { name: 'LLM Integration', icon: 'SiOpenai' },
      { name: 'PyTorch', icon: 'SiPytorch' },
      { name: 'scikit-learn', icon: 'SiScikitlearn' },
      { name: 'NumPy', icon: 'SiNumpy' },
      { name: 'pandas', icon: 'SiPandas' },
      { name: 'Matplotlib', icon: 'FiBarChart2' },
      { name: 'Google Colab', icon: 'SiGooglecolab' },
    ],
  },
  {
    category: 'Tools & Platforms',
    categoryBn: 'টুলস ও প্ল্যাটফর্ম',
    icon: 'FiTool',
    items: [
      { name: 'Docker', icon: 'SiDocker' },
      { name: 'Git', icon: 'SiGit' },
      { name: 'GitHub', icon: 'SiGithub' },
      { name: 'Linux', icon: 'SiLinux' },
      { name: 'VPS', icon: 'FiServer' },
      { name: 'cPanel', icon: 'SiCpanel' },
      { name: 'Postman', icon: 'SiPostman' },
      { name: 'Figma', icon: 'SiFigma' },
      { name: 'VS Code', icon: 'FiCode' },
      { name: 'Vercel', icon: 'SiVercel' },
      { name: 'Netlify', icon: 'SiNetlify' },
      { name: 'MATLAB', icon: 'FiTerminal' },
    ],
  },
  {
    category: 'Currently Exploring',
    categoryBn: 'বর্তমানে শিখছি',
    icon: 'FiTrendingUp',
    items: [
      { name: 'Machine Learning', nameBn: 'মেশিন লার্নিং', icon: 'FiCpu' },
      { name: 'Deep Learning (CNN, RNN, Transformers)', nameBn: 'ডিপ লার্নিং (CNN, RNN, Transformer)', icon: 'FiLayers' },
      { name: 'System Design', nameBn: 'সিস্টেম ডিজাইন', icon: 'FiServer' },
    ],
  },
]

// ── PROJECTS ─────────────────────────────────────────────────
export const projects = [
  {
    id: 'shikhi-bondhu',
    title: 'Shikhi Bondhu — Bengali-first AI Tutor',
    titleBn: 'শিখি বন্ধু — বাংলা-ফার্স্ট এআই টিউটর',
    thumb: shikhiThumb,
    short:
      'Textbook-grounded RAG tutor that answers in Bengali, English or Banglish — with server-validated page citations.',
    shortBn:
      'টেক্সটবুক-গ্রাউন্ডেড RAG টিউটর — বাংলা, ইংরেজি বা Banglish-এ উত্তর দেয়, সার্ভারে যাচাই করা পৃষ্ঠা সাইটেশনসহ।',
    description:
      'Shikhi Bondhu is an AI Builders Congress finalist and a Bengali-first study companion for primary learners. It answers only from published textbook pages, cites the exact book, chapter, and page range, and honestly says when the textbooks do not cover a question. The same codebase also carries the NoticeFlow notice assistant and admin console.',
    descriptionBn:
      'শিখি বন্ধু একটি AI Builders Congress ফাইনালিস্ট এবং প্রাথমিক শিক্ষার্থীদের জন্য বাংলা-ফার্স্ট স্টাডি কম্প্যানিয়ন। এটি শুধু প্রকাশিত টেক্সটবুক পৃষ্ঠা থেকে উত্তর দেয়, সঠিক বই, অধ্যায় ও পৃষ্ঠা সাইট করে এবং বইয়ে উত্তর না থাকলে সৎভাবে জানায়। একই কোডবেসে NoticeFlow নোটিশ অ্যাসিস্ট্যান্ট ও অ্যাডমিন কনসোলও আছে।',
    tech: ['React 18', 'TypeScript', 'Vite', 'Express.js', 'MongoDB', 'RAG', 'SSE Streaming', 'Zod', 'JWT', 'OpenRouter', 'Zustand'],
    gradient: 'from-violet-500/20 to-purple-500/10',
    live: 'https://departmental-ai-chatbot-dkpf.vercel.app',
    github: 'https://github.com/mesbahtoha/Shikhi-Bondhu-AI-Tutor',
    api: 'https://departmental-ai-chatbot-tzpe.vercel.app',
    stats: 'AI · RAG',
    year: '2025',
    featured: true,
    features: [
      'Textbook-grounded RAG tutor with server-validated book, chapter, and page citations — and honest "not in the textbook" answers.',
      'Bengali-first multi-modal input: Bengali, English, and Banglish via voice and file uploads.',
      'Practice and Exam modes with five auto-scored question types.',
      'Four switchable LLM providers to prevent vendor lock-in.',
      'JWT refresh rotation, Zod validation, and 10 req/min rate limiting.',
      'Admin console for PDF ingestion, analytics, provider switching, and content publishing.',
    ],
    featuresBn: [
      'টেক্সটবুক-গ্রাউন্ডেড RAG টিউটর — সার্ভারে যাচাই করা বই, অধ্যায় ও পৃষ্ঠা সাইটেশন, আর বইয়ে উত্তর না থাকলে সৎভাবে জানায়।',
      'বাংলা-ফার্স্ট মাল্টি-মোডাল ইনপুট: ভয়েস ও ফাইল আপলোডে বাংলা, ইংরেজি ও Banglish।',
      'প্র্যাকটিস ও এক্সাম মোড, পাঁচ ধরনের অটো-স্কোরিং প্রশ্ন।',
      'চারটি পরিবর্তনযোগ্য LLM প্রোভাইডার — vendor lock-in এড়াতে।',
      'JWT রিফ্রেশ রোটেশন, Zod ভ্যালিডেশন এবং মিনিটে ১০ রিকোয়েস্ট রেট লিমিট।',
      'PDF ইনজেশন, অ্যানালিটিক্স, প্রোভাইডার সুইচিং ও কনটেন্ট পাবলিশিংয়ের অ্যাডমিন কনসোল।',
    ],
    challenges: [
      'Grounding answers so the model never invents a page, chapter, or citation.',
      'Handling mixed Bangla, English, and Banglish queries with per-chat language memory.',
      'Streaming reliable answers through serverless execution time limits.',
      'Processing scanned Bengali textbook PDFs with OCR and real page ranges.',
    ],
    challengesBn: [
      'উত্তরকে গ্রাউন্ডেড রাখা — যাতে মডেল কোনো পৃষ্ঠা, অধ্যায় বা সাইটেশন বানিয়ে না বলে।',
      'প্রতি চ্যাটে ভাষা মনে রেখে মিশ্র বাংলা, ইংরেজি ও Banglish প্রশ্ন সামলানো।',
      'সার্ভারলেস টাইম লিমিটের মধ্যে নির্ভরযোগ্যভাবে স্ট্রিমিং উত্তর দেওয়া।',
      'OCR ও আসল পৃষ্ঠা রেঞ্জসহ স্ক্যান করা বাংলা টেক্সটবুক PDF প্রসেস করা।',
    ],
    improvements: [
      'Expanded textbook library across more classes and subjects',
      'Offline-capable PWA mode for low-bandwidth students',
      'Teacher dashboard for tracking class progress',
      'Fine-tuned Bengali embedding model',
    ],
    improvementsBn: [
      'আরও ক্লাস ও বিষয়ের টেক্সটবুক লাইব্রেরি',
      'কম ব্যান্ডউইথের শিক্ষার্থীদের জন্য অফলাইন PWA মোড',
      'ক্লাসের অগ্রগতি ট্র্যাক করার টিচার ড্যাশবোর্ড',
      'ফাইন-টিউনড বাংলা এমবেডিং মডেল',
    ],
  },
  {
    id: 'gearup',
    title: 'GearUp — Sports & Outdoor Gear Rental Platform',
    titleBn: 'GearUp — স্পোর্টস ও আউটডোর গিয়ার রেন্টাল প্ল্যাটফর্ম',
    thumb: gearupThumb,
    short:
      'Rent sports gear online with role-based dashboards, Stripe payments, and a 5-stage rental lifecycle.',
    shortBn:
      'রোল-ভিত্তিক ড্যাশবোর্ড, Stripe পেমেন্ট ও ৫-ধাপের রেন্টাল লাইফসাইকেলসহ অনলাইনে স্পোর্টস গিয়ার ভাড়া।',
    description:
      'GearUp is a production-grade, type-safe full-stack platform where customers rent sports and outdoor gear, providers manage their inventory, and administrators oversee the entire operation — all through dedicated role-based dashboards.',
    descriptionBn:
      'GearUp একটি প্রোডাকশন-গ্রেড, টাইপ-সেফ ফুল-স্ট্যাক প্ল্যাটফর্ম — যেখানে কাস্টমার স্পোর্টস ও আউটডোর গিয়ার ভাড়া নেয়, প্রোভাইডার ইনভেন্টরি ম্যানেজ করে এবং অ্যাডমিন পুরো অপারেশন দেখাশোনা করে, প্রতিটি রোলের আলাদা ড্যাশবোর্ডে।',
    tech: ['Next.js 15', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Express.js', 'Tailwind CSS', 'TanStack Query', 'React Hook Form', 'Zod', 'Zustand', 'Stripe', 'Recharts', 'JWT', 'Google OAuth'],
    gradient: 'from-emerald-500/20 to-teal-500/10',
    live: 'https://gear-up-frontend-b7-a5.vercel.app',
    github: 'https://github.com/mesbahtoha/GearUp-Frontend-B7A5',
    githubServer: 'https://github.com/mesbahtoha/GearUp-Backend-B7A4',
    api: 'https://gearup-backend-b7a4.onrender.com',
    stats: 'Next.js · TypeScript',
    year: '2025',
    featured: true,
    features: [
      'JWT authentication with httpOnly cookies, Google OAuth 2.0, and automatic access-token refresh enforced through Next.js middleware.',
      '3 role-based dashboards — Customer, Provider, and Admin — with real-time Recharts analytics covering revenue, rentals, and category trends.',
      'Stripe-powered checkout with a 5-stage rental lifecycle tracker: Placed → Confirmed → Paid → Picked Up → Returned.',
      'Gear listings with search, category & price filters, sorting, pagination, ratings, and reviews.',
      'Provider gear CRUD with image upload and availability toggling; admin user, gear, rental & payment management.',
      'Dark mode, responsive UI, and full static pages (About, Blog, Help, Privacy, Terms).',
    ],
    featuresBn: [
      'httpOnly কুকি, Google OAuth 2.0 এবং Next.js middleware দিয়ে অটোমেটিক অ্যাক্সেস-টোকেন রিফ্রেশসহ JWT অথেন্টিকেশন।',
      '৩টি রোল-ভিত্তিক ড্যাশবোর্ড — কাস্টমার, প্রোভাইডার ও অ্যাডমিন — রেভিনিউ, রেন্টাল ও ক্যাটাগরি ট্রেন্ডের রিয়েল-টাইম Recharts অ্যানালিটিক্সসহ।',
      'Stripe চেকআউট ও ৫-ধাপের রেন্টাল লাইফসাইকেল ট্র্যাকার: Placed → Confirmed → Paid → Picked Up → Returned।',
      'সার্চ, ক্যাটাগরি ও দাম ফিল্টার, সর্টিং, পেজিনেশন, রেটিং ও রিভিউসহ গিয়ার লিস্টিং।',
      'ইমেজ আপলোড ও availability টগলসহ প্রোভাইডার গিয়ার CRUD; অ্যাডমিন ইউজার, গিয়ার, রেন্টাল ও পেমেন্ট ম্যানেজমেন্ট।',
      'ডার্ক মোড, রেসপন্সিভ UI এবং সম্পূর্ণ স্ট্যাটিক পেজ (About, Blog, Help, Privacy, Terms)।',
    ],
    challenges: [
      'Orchestrating the 5-stage rental lifecycle with strict role-based transitions across three dashboards.',
      'Designing an automatic token-refresh flow (401 retry) that never breaks user sessions or causes UI flicker.',
      'Optimizing Prisma queries and eager-loading to cut data transfer overhead by 25%.',
      'Enforcing route protection and role checks server-side with Next.js middleware.',
    ],
    challengesBn: [
      'তিনটি ড্যাশবোর্ডে কঠোর রোল-ভিত্তিক ট্রানজিশনসহ ৫-ধাপের রেন্টাল লাইফসাইকেল পরিচালনা।',
      'ব্যবহারকারীর সেশন না ভেঙে বা UI ফ্লিকার না ঘটিয়ে অটোমেটিক টোকেন-রিফ্রেশ ফ্লো (401 রিট্রাই) ডিজাইন।',
      'Prisma কুয়েরি ও eager-loading অপ্টিমাইজ করে ডেটা ট্রান্সফার ২৫% কমানো।',
      'Next.js middleware দিয়ে সার্ভার-সাইড রুট প্রোটেকশন ও রোল চেক নিশ্চিত করা।',
    ],
    improvements: [
      'Real-time order notifications with WebSockets',
      'Redis caching layer for hot gear listings and search',
      'End-to-end test suite with Playwright',
      'Multi-currency Stripe billing and rental insurance add-ons',
    ],
    improvementsBn: [
      'WebSocket দিয়ে রিয়েল-টাইম অর্ডার নোটিফিকেশন',
      'জনপ্রিয় গিয়ার লিস্টিং ও সার্চের জন্য Redis ক্যাশিং লেয়ার',
      'Playwright দিয়ে এন্ড-টু-এন্ড টেস্ট স্যুট',
      'মাল্টি-কারেন্সি Stripe বিলিং ও রেন্টাল ইনস্যুরেন্স অ্যাড-অন',
    ],
  },
  {
    id: 'zapshift',
    title: 'ZapShift — Parcel Delivery Application',
    titleBn: 'ZapShift — পার্সেল ডেলিভারি অ্যাপ্লিকেশন',
    thumb: zapshiftThumb,
    short:
      '3-role logistics platform with live parcel tracking, Stripe payments, and analytics dashboards.',
    shortBn:
      'লাইভ পার্সেল ট্র্যাকিং, Stripe পেমেন্ট ও অ্যানালিটিক্স ড্যাশবোর্ডসহ ৩-রোল লজিস্টিকস প্ল্যাটফর্ম।',
    description:
      'ZapShift is a full-stack parcel delivery management platform connecting Users, Riders, and Admins through a centralized logistics system — with live parcel tracking workflows across 64 district service centers.',
    descriptionBn:
      'ZapShift একটি ফুল-স্ট্যাক পার্সেল ডেলিভারি ম্যানেজমেন্ট প্ল্যাটফর্ম — ইউজার, রাইডার ও অ্যাডমিনকে একটি কেন্দ্রীয় লজিস্টিকস সিস্টেমে যুক্ত করে, ৬৪ জেলার সার্ভিস সেন্টারজুড়ে লাইভ পার্সেল ট্র্যাকিংসহ।',
    tech: ['React 19', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'DaisyUI', 'TanStack Query', 'React Hook Form', 'Firebase Auth', 'Stripe', 'React Leaflet'],
    gradient: 'from-amber-500/20 to-orange-500/10',
    live: 'https://percel-web-application-hlmu.vercel.app',
    github: 'https://github.com/mesbahtoha/Percel-Web-Application',
    api: 'https://percel-web-application.vercel.app',
    stats: 'React · Node.js',
    year: '2025',
    featured: true,
    features: [
      '3-role logistics system (User, Rider, Admin) with live parcel tracking across 64 district service centers.',
      'Dual-layer security — Firebase Authentication plus server-side ID-token verification and RBAC middleware across 19+ admin-only API endpoints.',
      'Stripe Payment Intents API for PCI-compliant payments with a full booking → delivery flow.',
      'Admin analytics with dynamic bar, line, and donut charts; rider earnings and task management.',
      'Bangladesh coverage map with React Leaflet and district filtering — 40% fewer map re-renders via TanStack Query background caching.',
      'Light/dark mode, demo login buttons, and OTP-based delivery confirmation.',
    ],
    featuresBn: [
      '৩-রোল লজিস্টিকস সিস্টেম (ইউজার, রাইডার, অ্যাডমিন) এবং ৬৪ জেলার সার্ভিস সেন্টারজুড়ে লাইভ পার্সেল ট্র্যাকিং।',
      'দুই স্তরের নিরাপত্তা — Firebase Authentication এবং ১৯+ অ্যাডমিন-অনলি API-তে সার্ভার-সাইড ID-token ভেরিফিকেশন ও RBAC middleware।',
      'PCI-কমপ্লায়েন্ট পেমেন্টের জন্য Stripe Payment Intents API এবং সম্পূর্ণ booking → delivery ফ্লো।',
      'ডাইনামিক বার, লাইন ও ডোনাট চার্টসহ অ্যাডমিন অ্যানালিটিক্স; রাইডার আর্নিং ও টাস্ক ম্যানেজমেন্ট।',
      'React Leaflet ও ডিস্ট্রিক্ট ফিল্টারিংসহ বাংলাদেশ কভারেজ ম্যাপ — TanStack Query ব্যাকগ্রাউন্ড ক্যাশিংয়ে ম্যাপ রি-রেন্ডার ৪০% কম।',
      'লাইট/ডার্ক মোড, ডেমো লগইন বাটন এবং OTP-ভিত্তিক ডেলিভারি কনফার্মেশন।',
    ],
    challenges: [
      'Verifying Firebase ID tokens server-side while preventing any client-side role escalation.',
      'Keeping the Leaflet map smooth while filtering 64 district service centers — solved with TanStack Query background caching.',
      'Mapping the parcel lifecycle (Unpaid → Paid → Assigned → Delivered) across three different dashboards.',
      'Dynamic Stripe charges based on parcel type, weight, and delivery zone.',
    ],
    challengesBn: [
      'ক্লায়েন্ট-সাইড রোল এস্কেলেশন ঠেকিয়ে সার্ভার-সাইডে Firebase ID টোকেন যাচাই।',
      '৬৪ জেলার সার্ভিস সেন্টার ফিল্টার করার সময় Leaflet ম্যাপ স্মুথ রাখা — TanStack Query ব্যাকগ্রাউন্ড ক্যাশিংয়ে সমাধান।',
      'তিনটি আলাদা ড্যাশবোর্ডে পার্সেল লাইফসাইকেল (Unpaid → Paid → Assigned → Delivered) ম্যাপ করা।',
      'পার্সেলের ধরন, ওজন ও ডেলিভারি জোন অনুযায়ী ডাইনামিক Stripe চার্জ।',
    ],
    improvements: [
      'Real-time delivery tracking with WebSockets',
      'Rider mobile PWA with geolocation',
      'SMS/WhatsApp notifications for customers',
      'Multi-currency and COD support',
    ],
    improvementsBn: [
      'WebSocket দিয়ে রিয়েল-টাইম ডেলিভারি ট্র্যাকিং',
      'জিওলোকেশনসহ রাইডার মোবাইল PWA',
      'কাস্টমারদের জন্য SMS/WhatsApp নোটিফিকেশন',
      'মাল্টি-কারেন্সি ও COD সাপোর্ট',
    ],
  },
  {
    id: 'assessdev',
    title: 'AssessDev — Developer Assessment Platform',
    titleBn: 'AssessDev — ডেভেলপার অ্যাসেসমেন্ট প্ল্যাটফর্ম',
    thumb: assessDevThumb,
    short:
      'Role-based assessment platform for timed MCQ/code tests, manual evaluation, and Stripe-paid assessments.',
    shortBn:
      'টাইমড MCQ/কোড টেস্ট, ম্যানুয়াল ইভ্যালুয়েশন ও Stripe-পেইড অ্যাসেসমেন্টের জন্য রোল-ভিত্তিক প্ল্যাটফর্ম।',
    description:
      'AssessDev is a complete developer assessment platform where recruiters build assessments from an MCQ/code problem bank, invite candidates, run timed attempts, evaluate submissions, and publish results. Candidates pay for premium assessments through Stripe Checkout, while admins monitor users, payments, and audit logs.',
    descriptionBn:
      'AssessDev একটি সম্পূর্ণ ডেভেলপার অ্যাসেসমেন্ট প্ল্যাটফর্ম — রিক্রুটাররা MCQ/কোড প্রবলেম ব্যাংক থেকে অ্যাসেসমেন্ট তৈরি করেন, ক্যান্ডিডেট ইনভাইট করেন, টাইমড অ্যাটেম্পট চালান, সাবমিশন ইভ্যালুয়েট করেন এবং রেজাল্ট পাবলিশ করেন। ক্যান্ডিডেটরা Stripe Checkout-এ প্রিমিয়াম অ্যাসেসমেন্টের পেমেন্ট করে, আর অ্যাডমিন ইউজার, পেমেন্ট ও অডিট লগ মনিটর করে।',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'TanStack Query', 'Zustand', 'React Hook Form', 'Zod', 'Recharts', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Redis', 'Stripe', 'JWT'],
    gradient: 'from-sky-500/20 to-indigo-500/10',
    live: 'https://developer-assessment-platform-front-eight.vercel.app/',
    github: 'https://github.com/mesbahtoha/Developer-Assessment-Platform-Frontend-B7A7',
    githubServer: 'https://github.com/mesbahtoha/Developer-Assessment-Platform-Backend-B7A6',
    api: 'https://developerassessmentbackend.vercel.app',
    stats: 'Next.js · PostgreSQL',
    year: '2026',
    featured: true,
    features: [
      'Three role workspaces — Candidate, Recruiter, and Admin — with JWT auth, refresh rotation, and middleware route guards.',
      'Three-step assessment builder with a problem bank, lifecycle states (DRAFT → PUBLISHED → CLOSED → ARCHIVED), and candidate invitations.',
      'Server-enforced timed attempts, duplicate-attempt protection, MCQ auto-scoring, and manual code evaluation with feedback.',
      'Real Stripe Checkout with server-side price validation, signed webhooks, idempotent payment handling, and admin refunds.',
      'PostgreSQL + Prisma data model with 14 models, transactions, uniqueness constraints, Redis caching, and audit logs.',
      'Admin analytics with Recharts, payment register, user controls, and a 66-check smoke test suite.',
    ],
    featuresBn: [
      'তিনটি রোল ওয়ার্কস্পেস — ক্যান্ডিডেট, রিক্রুটার ও অ্যাডমিন — JWT অথ, রিফ্রেশ রোটেশন ও middleware রুট গার্ডসহ।',
      'প্রবলেম ব্যাংক, লাইফসাইকেল স্টেট (DRAFT → PUBLISHED → CLOSED → ARCHIVED) ও ক্যান্ডিডেট ইনভাইটেশনসহ তিন-ধাপের অ্যাসেসমেন্ট বিল্ডার।',
      'সার্ভার-এনফোর্সড টাইমড অ্যাটেম্পট, ডুপ্লিকেট অ্যাটেম্পট প্রোটেকশন, MCQ অটো-স্কোরিং এবং ফিডব্যাকসহ ম্যানুয়াল কোড ইভ্যালুয়েশন।',
      'সার্ভার-সাইড প্রাইস ভ্যালিডেশন, সাইনড ওয়েবহুক, আইডেম্পোটেন্ট পেমেন্ট ও অ্যাডমিন রিফান্ডসহ আসল Stripe Checkout।',
      '১৪ মডেল, ট্রানজেকশন, ইউনিকনেস কনস্ট্রেইন্ট, Redis ক্যাশিং ও অডিট লগসহ PostgreSQL + Prisma ডেটা মডেল।',
      'Recharts অ্যানালিটিক্স, পেমেন্ট রেজিস্টার, ইউজার কন্ট্রোল এবং ৬৬-চেক স্মোক টেস্ট স্যুটসহ অ্যাডমিন প্যানেল।',
    ],
    challenges: [
      'Keeping client route guards as UX only while enforcing ownership and RBAC at the API layer.',
      'Making Stripe payment state authoritative on the server so returning to the success URL never unlocks an assessment.',
      'Preventing duplicate attempts and submissions with database-level unique constraints.',
      'Coordinating timed attempts across the client timer and the server deadline.',
    ],
    challengesBn: [
      'ক্লায়েন্ট রুট গার্ডকে শুধু UX রাখা এবং API লেয়ারে ownership ও RBAC নিশ্চিত করা।',
      'Stripe পেমেন্ট স্টেট সার্ভারে authoritative রাখা — success URL-এ ফিরে এলেই অ্যাসেসমেন্ট আনলক না হয়।',
      'ডেটাবেস-লেভেল ইউনিক কনস্ট্রেইন্ট দিয়ে ডুপ্লিকেট অ্যাটেম্পট ও সাবমিশন ঠেকানো।',
      'ক্লায়েন্ট টাইমার ও সার্ভার ডেডলাইনের মধ্যে টাইমড অ্যাটেম্পট সমন্বয়।',
    ],
    improvements: [
      'Live coding editor with test-case runner',
      'Email and calendar invitations',
      'AI-assisted code review summaries',
      'Recruiter team accounts and permissions',
    ],
    improvementsBn: [
      'টেস্ট-কেস রানারসহ লাইভ কোডিং এডিটর',
      'ইমেইল ও ক্যালেন্ডার ইনভাইটেশন',
      'এআই-সহায়ক কোড রিভিউ সারাংশ',
      'রিক্রুটার টিম অ্যাকাউন্ট ও পারমিশন',
    ],
  },
  {
    id: 'tesla-pool',
    title: 'Dhaka Tesla Pool — Ride-pooling Platform',
    titleBn: 'ঢাকা টেসলা পুল — রাইড-পুলিং প্ল্যাটফর্ম',
    thumb: teslaPoolThumb,
    short:
      'Ride-pooling MVP that matches compatible trips, splits fares, and enforces seat capacity under concurrency.',
    shortBn:
      'সামঞ্জস্যপূর্ণ ট্রিপ ম্যাচ করে ভাড়া ভাগ করে এবং কনকারেন্সির মধ্যেও সিট ক্যাপাসিটি নিশ্চিত করে এমন রাইড-পুলিং MVP।',
    description:
      'Dhaka Tesla Pool is a full-stack ride-pooling MVP for battery-powered three-wheelers. Passengers request seats, compatible trips share one Tesla, each passenger receives an individual pooled fare, and drivers advance a clear five-stage lifecycle. The backend uses row-locked transactions so the last seat can never be double-booked.',
    descriptionBn:
      'ঢাকা টেসলা পুল ব্যাটারি-চালিত থ্রি-হুইলারের জন্য একটি ফুল-স্ট্যাক রাইড-পুলিং MVP। প্যাসেঞ্জার সিট রিকোয়েস্ট করে, সামঞ্জস্যপূর্ণ ট্রিপ একটি টেসলায় শেয়ার হয়, প্রত্যেকে আলাদা পুলড ভাড়া পায় এবং ড্রাইভার পাঁচ-ধাপের লাইফসাইকেল এগিয়ে নেয়। ব্যাকএন্ডে row-locked ট্রানজেকশন ব্যবহার করায় শেষ সিট কখনো ডাবল-বুক হয় না।',
    tech: ['Next.js 14', 'JavaScript', 'Express.js', 'PostgreSQL', 'Prisma', 'JWT', 'Zod', 'Tailwind CSS', 'Docker', 'Vercel'],
    gradient: 'from-teal-500/20 to-emerald-500/10',
    live: 'https://tesla-pool-hcv6.vercel.app/',
    github: 'https://github.com/mesbahtoha/Tesla-Pool',
    api: 'https://tesla-pool-gamma.vercel.app/',
    stats: 'Next.js · PostgreSQL',
    year: '2026',
    featured: true,
    features: [
      'Passenger and driver apps with JWT auth, ride requests, seat selection, and live lifecycle tracking.',
      'Compatibility-based auto-pooling: same pickup corridor, capacity limits, and a 4 km corridor exception.',
      'Row-locked Prisma transactions so two riders racing for the last seat produce exactly one 200 and one 409.',
      'Integer-paisa fare engine: ৳60 base + ৳30/km − 25% pool discount, with hand-checkable math.',
      'TeslaPay wallet ledger, cash payments, ride history, and a complete RideEvent audit trail.',
      'Docker Compose stack with PostgreSQL 16, API, and Next.js frontend — plus Vercel deployment.',
    ],
    featuresBn: [
      'JWT অথ, রাইড রিকোয়েস্ট, সিট সিলেকশন ও লাইভ লাইফসাইকেল ট্র্যাকিংসহ প্যাসেঞ্জার ও ড্রাইভার অ্যাপ।',
      'সামঞ্জস্য-ভিত্তিক অটো-পুলিং: একই পিকআপ করিডোর, ক্যাপাসিটি লিমিট এবং ৪ কিমি করিডোর ব্যতিক্রম।',
      'Row-locked Prisma ট্রানজেকশন — শেষ সিটের জন্য দুই রাইডারের রেসে ঠিক একটি 200 ও একটি 409।',
      'ইন্টিজার-পয়সা ভাড়া ইঞ্জিন: ৳৬০ বেস + ৳৩০/কিমি − ২৫% পুল ডিসকাউন্ট, হাতে যাচাইযোগ্য হিসাব।',
      'TeslaPay ওয়ালেট লেজার, ক্যাশ পেমেন্ট, রাইড হিস্ট্রি ও সম্পূর্ণ RideEvent অডিট ট্রেইল।',
      'PostgreSQL 16, API ও Next.js ফ্রন্টএন্ডসহ Docker Compose স্ট্যাক — সঙ্গে Vercel ডিপ্লয়মেন্ট।',
    ],
    challenges: [
      'Modelling fair fares when pool membership changes mid-ride.',
      'Preventing overbooking under concurrent seat claims.',
      'Keeping auto-matching best-effort so ride creation never fails.',
      'Testing matching edge cases with real Dhaka coordinates.',
    ],
    challengesBn: [
      'রাইডের মাঝে পুল মেম্বারশিপ বদলালে ন্যায্য ভাড়া মডেল করা।',
      'একসঙ্গে সিট দাবির সময় ওভারবুকিং ঠেকানো।',
      'অটো-ম্যাচিং best-effort রাখা — যাতে রাইড তৈরি কখনো ব্যর্থ না হয়।',
      'আসল ঢাকার কোঅর্ডিনেট দিয়ে ম্যাচিং এজ কেস টেস্ট করা।',
    ],
    improvements: [
      'Real-time driver tracking with WebSockets',
      'PostGIS-powered pickup search',
      'Driver ratings and safety checks',
      'Production payment gateway integration',
    ],
    improvementsBn: [
      'WebSocket দিয়ে রিয়েল-টাইম ড্রাইভার ট্র্যাকিং',
      'PostGIS-চালিত পিকআপ সার্চ',
      'ড্রাইভার রেটিং ও সেফটি চেক',
      'প্রোডাকশন পেমেন্ট গেটওয়ে ইন্টিগ্রেশন',
    ],
  },
  {
    id: 'bytespace',
    title: 'ByteSpace — Online Course Marketplace',
    titleBn: 'ByteSpace — অনলাইন কোর্স মার্কেটপ্লেস',
    thumb: bytespaceThumb,
    short:
      'Responsive course marketplace with 18 categories, search/filter/pagination, cart and checkout flow.',
    shortBn:
      '১৮ ক্যাটাগরি, সার্চ/ফিল্টার/পেজিনেশন, কার্ট ও চেকআউট ফ্লোসহ রেসপন্সিভ কোর্স মার্কেটপ্লেস।',
    description:
      'ByteSpace is a modern online learning marketplace that connects students with courses and creators with an audience. It covers discovery, course details, creator profiles, reviews, a persistent cart, and a complete checkout flow — with a responsive, animation-rich UI.',
    descriptionBn:
      'ByteSpace একটি আধুনিক অনলাইন লার্নিং মার্কেটপ্লেস — শিক্ষার্থীদের কোর্সের সঙ্গে এবং ক্রিয়েটরদের অডিয়েন্সের সঙ্গে যুক্ত করে। ডিসকভারি, কোর্স ডিটেইলস, ক্রিয়েটর প্রোফাইল, রিভিউ, persistent কার্ট ও সম্পূর্ণ চেকআউট ফ্লো রয়েছে — রেসপন্সিভ, অ্যানিমেশন-সমৃদ্ধ UI-সহ।',
    tech: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router 7', 'Lucide React', 'React Context'],
    gradient: 'from-fuchsia-500/20 to-pink-500/10',
    live: 'https://bytespace-eta-seven.vercel.app/',
    github: 'https://github.com/mesbahtoha/Bytespace',
    stats: 'React · TypeScript',
    year: '2025',
    featured: false,
    features: [
      '18 course categories with full-text search, level filters, sorting, and deep-linkable URLs.',
      'Paginated course catalog with course detail pages, curriculum, creator profiles, and reviews.',
      'Global cart with a slide-in drawer, persistent state, checkout flow, and toast feedback.',
      'Creator profiles with follow/unfollow and creator-focused course discovery.',
      'Responsive, animated UI with scroll reveals, floating 3D elements, and accessible interactions.',
      'Persistent client-side session and cart state across reloads.',
    ],
    featuresBn: [
      'ফুল-টেক্সট সার্চ, লেভেল ফিল্টার, সর্টিং ও deep-linkable URL সহ ১৮টি কোর্স ক্যাটাগরি।',
      'কোর্স ডিটেইল পেজ, কারিকুলাম, ক্রিয়েটর প্রোফাইল ও রিভিউসহ পেজিনেটেড কোর্স ক্যাটালগ।',
      'স্লাইড-ইন ড্রয়ার, persistent স্টেট, চেকআউট ফ্লো ও টোস্ট ফিডব্যাকসহ গ্লোবাল কার্ট।',
      'ফলো/আনফলো এবং ক্রিয়েটর-কেন্দ্রিক কোর্স ডিসকভারিসহ ক্রিয়েটর প্রোফাইল।',
      'স্ক্রল রিভিল, ফ্লোটিং 3D এলিমেন্ট ও অ্যাক্সেসিবল ইন্টারঅ্যাকশনসহ রেসপন্সিভ, অ্যানিমেটেড UI।',
      'রিলোডের পরেও টিকে থাকা ক্লায়েন্ট-সাইড সেশন ও কার্ট স্টেট।',
    ],
    challenges: [
      'Keeping filters and search shareable through URL state.',
      'Building a consistent cart experience across catalog and detail pages.',
      'Balancing animation-rich visuals with responsive performance.',
    ],
    challengesBn: [
      'URL state-এর মাধ্যমে ফিল্টার ও সার্চ শেয়ারযোগ্য রাখা।',
      'ক্যাটালগ ও ডিটেইল পেজজুড়ে সামঞ্জস্যপূর্ণ কার্ট অভিজ্ঞতা তৈরি করা।',
      'অ্যানিমেশন-সমৃদ্ধ ভিজ্যুয়াল ও রেসপন্সিভ পারফরম্যান্সের ভারসাম্য রাখা।',
    ],
    improvements: [
      'Backend API and real database',
      'Real authentication and payments',
      'Creator course management dashboard',
      'Learning progress and certificates',
    ],
    improvementsBn: [
      'ব্যাকএন্ড API ও আসল ডেটাবেস',
      'আসল অথেন্টিকেশন ও পেমেন্ট',
      'ক্রিয়েটর কোর্স ম্যানেজমেন্ট ড্যাশবোর্ড',
      'লার্নিং প্রোগ্রেস ও সার্টিফিকেট',
    ],
  },
  {
    id: 'echogpt',
    title: 'EchoGPT — AI Workspace & Chrome Extension',
    titleBn: 'EchoGPT — এআই ওয়ার্কস্পেস ও ক্রোম এক্সটেনশন',
    thumb: echoGptThumb,
    short:
      'AI chat workspace, landing page, and Manifest V3 Chrome side-panel extension with a shared design system.',
    shortBn:
      'শেয়ার্ড ডিজাইন সিস্টেমসহ এআই চ্যাট ওয়ার্কস্পেস, ল্যান্ডিং পেজ ও Manifest V3 ক্রোম সাইড-প্যানেল এক্সটেনশন।',
    description:
      'EchoGPT is a complete frontend product experience spanning a Next.js AI workspace, a dedicated landing page, and a Chrome Manifest V3 side-panel extension. It includes chat, AI studios, subscriptions, tasks, resume/SOP builders, connectors, settings, and a consistent light/dark design system.',
    descriptionBn:
      'EchoGPT একটি সম্পূর্ণ ফ্রন্টএন্ড প্রোডাক্ট অভিজ্ঞতা — Next.js এআই ওয়ার্কস্পেস, আলাদা ল্যান্ডিং পেজ এবং Chrome Manifest V3 সাইড-প্যানেল এক্সটেনশন। চ্যাট, এআই স্টুডিও, সাবস্ক্রিপশন, টাস্ক, রেজিউমে/SOP বিল্ডার, কানেক্টর, সেটিংস এবং সামঞ্জস্যপূর্ণ লাইট/ডার্ক ডিজাইন সিস্টেম রয়েছে।',
    tech: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'Vite', 'Chrome MV3'],
    gradient: 'from-purple-500/20 to-indigo-500/10',
    live: 'https://exhogpt-web.vercel.app/',
    github: 'https://github.com/mesbahtoha/EchoGPT',
    stats: 'Next.js · Chrome MV3',
    year: '2026',
    featured: false,
    features: [
      'AI chat workspace with conversation history, model selector, prompt cards, and image/video studios.',
      'Subscription, login, tasks, resume, SOP, connectors, store, and support flows.',
      'Manifest V3 Chrome side-panel extension with chat, quick actions, and connector management.',
      'Reusable design system with light/dark theme, accessible dialogs, focus handling, and reduced-motion support.',
      'Responsive landing page with product previews, AI models, pricing, FAQ, and CTA sections.',
      'Shared data-driven components and centralized links across web app, landing page, and extension.',
    ],
    featuresBn: [
      'কনভার্সেশন হিস্ট্রি, মডেল সিলেক্টর, প্রম্পট কার্ড ও ইমেজ/ভিডিও স্টুডিওসহ এআই চ্যাট ওয়ার্কস্পেস।',
      'সাবস্ক্রিপশন, লগইন, টাস্ক, রেজিউমে, SOP, কানেক্টর, স্টোর ও সাপোর্ট ফ্লো।',
      'চ্যাট, কুইক অ্যাকশন ও কানেক্টর ম্যানেজমেন্টসহ Manifest V3 ক্রোম সাইড-প্যানেল এক্সটেনশন।',
      'লাইট/ডার্ক থিম, অ্যাক্সেসিবল ডায়ালগ, ফোকাস হ্যান্ডলিং ও reduced-motion সাপোর্টসহ পুনর্ব্যবহারযোগ্য ডিজাইন সিস্টেম।',
      'প্রোডাক্ট প্রিভিউ, এআই মডেল, প্রাইসিং, FAQ ও CTA সেকশনসহ রেসপন্সিভ ল্যান্ডিং পেজ।',
      'ওয়েব অ্যাপ, ল্যান্ডিং পেজ ও এক্সটেনশনজুড়ে শেয়ার্ড ডেটা-ড্রিভেন কম্পোনেন্ট ও কেন্দ্রীয় লিংক।',
    ],
    challenges: [
      'Keeping three product surfaces visually consistent.',
      'Building accessible dialogs, drawers, and menus with keyboard support.',
      'Designing a scalable frontend architecture for a large mock product surface.',
    ],
    challengesBn: [
      'তিনটি প্রোডাক্ট সারফেসের ভিজ্যুয়াল সামঞ্জস্য রাখা।',
      'কীবোর্ড সাপোর্টসহ অ্যাক্সেসিবল ডায়ালগ, ড্রয়ার ও মেনু তৈরি করা।',
      'বড় মক প্রোডাক্ট সারফেসের জন্য স্কেলযোগ্য ফ্রন্টএন্ড আর্কিটেকচার ডিজাইন করা।',
    ],
    improvements: [
      'Real streaming AI backend',
      'Persistent conversations with storage',
      'Subscription billing integration',
      'Playwright end-to-end coverage',
    ],
    improvementsBn: [
      'আসল স্ট্রিমিং এআই ব্যাকএন্ড',
      'স্টোরেজসহ persistent কনভার্সেশন',
      'সাবস্ক্রিপশন বিলিং ইন্টিগ্রেশন',
      'Playwright এন্ড-টু-এন্ড কভারেজ',
    ],
  },
  {
    id: 'fahim-pharmacy',
    title: 'Fahim Pharmacy & Surgical',
    titleBn: 'ফাহিম ফার্মেসি অ্যান্ড সার্জিক্যাল',
    thumb: fahimThumb,
    short:
      'Bengali-first, SEO-ready pharmacy website with services, offers, health tips, gallery, FAQ, and WhatsApp ordering.',
    shortBn:
      'সেবা, অফার, স্বাস্থ্য টিপস, গ্যালারি, FAQ ও WhatsApp অর্ডারসহ বাংলা-ফার্স্ট, SEO-রেডি ফার্মেসি ওয়েবসাইট।',
    description:
      'A Bengali-first, SEO-ready website for Fahim Pharmacy & Surgical near TMSS Medical College, Bogura. It presents services, current offers, health tips, a gallery, a detailed FAQ, and direct call/WhatsApp ordering paths for local customers.',
    descriptionBn:
      'বগুড়ার TMSS মেডিকেল কলেজের কাছে ফাহিম ফার্মেসি অ্যান্ড সার্জিক্যালের জন্য বাংলা-ফার্স্ট, SEO-রেডি ওয়েবসাইট। স্থানীয় কাস্টমারদের জন্য সেবা, চলমান অফার, স্বাস্থ্য টিপস, গ্যালারি, বিস্তারিত FAQ এবং সরাসরি কল/WhatsApp অর্ডারের পথ রয়েছে।',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'Responsive Design'],
    gradient: 'from-rose-500/20 to-red-500/10',
    live: 'https://www.fahimpharmacytmss.xyz/',
    github: 'https://github.com/mesbahtoha/Fahim-Pharmacy',
    stats: 'HTML · SEO',
    year: '2025',
    featured: false,
    features: [
      'Bengali-first content and SEO structure for local search visibility.',
      'Service, offer, health-tip, gallery, FAQ, and contact sections.',
      'Click-to-call and WhatsApp ordering paths for local customers.',
      'Fast static deployment with responsive layouts and accessible navigation.',
    ],
    featuresBn: [
      'লোকাল সার্চে দেখা যাওয়ার জন্য বাংলা-ফার্স্ট কনটেন্ট ও SEO স্ট্রাকচার।',
      'সেবা, অফার, স্বাস্থ্য টিপস, গ্যালারি, FAQ ও যোগাযোগ সেকশন।',
      'স্থানীয় কাস্টমারদের জন্য ক্লিক-টু-কল ও WhatsApp অর্ডারের পথ।',
      'রেসপন্সিভ লেআউট ও অ্যাক্সেসিবল নেভিগেশনসহ দ্রুত স্ট্যাটিক ডিপ্লয়মেন্ট।',
    ],
    challenges: [
      'Structuring Bengali content for local SEO without sacrificing readability.',
      'Keeping the site fast on low-end mobile devices.',
    ],
    challengesBn: [
      'পাঠযোগ্যতা না কমিয়ে লোকাল SEO-র জন্য বাংলা কনটেন্ট সাজানো।',
      'কম ক্ষমতার মোবাইল ডিভাইসেও সাইট দ্রুত রাখা।',
    ],
    improvements: [
      'Online ordering with payment gateway',
      'Stock & inventory management dashboard',
      'Prescription upload and delivery tracking',
    ],
    improvementsBn: [
      'পেমেন্ট গেটওয়েসহ অনলাইন অর্ডার',
      'স্টক ও ইনভেন্টরি ম্যানেজমেন্ট ড্যাশবোর্ড',
      'প্রেসক্রিপশন আপলোড ও ডেলিভারি ট্র্যাকিং',
    ],
  },
  {
    id: 'career-code',
    title: 'Career Code — Job Portal Website',
    titleBn: 'Career Code — জব পোর্টাল ওয়েবসাইট',
    thumb: careerCodeThumb,
    short:
      'MERN job portal where employers post roles and job seekers search, filter, and apply in one click.',
    shortBn:
      'MERN জব পোর্টাল — নিয়োগকর্তারা পোস্ট করেন, চাকরিপ্রার্থীরা সার্চ, ফিল্টার ও এক ক্লিকে আবেদন করেন।',
    description:
      'Career Code is a full-stack job portal where employers post job listings and job seekers browse, search, and apply seamlessly — with role-based access for both sides.',
    descriptionBn:
      'Career Code একটি ফুল-স্ট্যাক জব পোর্টাল — নিয়োগকর্তারা চাকরির বিজ্ঞাপন পোস্ট করেন, প্রার্থীরা সহজে ব্রাউজ, সার্চ ও আবেদন করেন; দুই পক্ষের জন্য রোল-ভিত্তিক অ্যাক্সেস রয়েছে।',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt.js', 'Tailwind CSS', 'REST API'],
    gradient: 'from-blue-500/20 to-cyan-500/10',
    live: 'https://carrer-code-client.vercel.app',
    github: 'https://github.com/mesbahtoha/Job-Portal-Website',
    stats: 'MERN Stack',
    year: '2024',
    featured: false,
    features: [
      'Job seekers can search listings by title, location, or category and apply with a single click.',
      'Employers can post, update, and delete listings and review applicants for each role.',
      'JWT authentication with bcrypt password hashing.',
      'Role-based access control for Job Seekers and Employers.',
      'Fast, optimized REST API with a fully responsive UI.',
    ],
    featuresBn: [
      'চাকরিপ্রার্থীরা টাইটেল, লোকেশন বা ক্যাটাগরি দিয়ে সার্চ করে এক ক্লিকে আবেদন করতে পারেন।',
      'নিয়োগকর্তারা লিস্টিং পোস্ট, আপডেট ও ডিলিট করতে এবং আবেদনকারী দেখতে পারেন।',
      'bcrypt পাসওয়ার্ড হ্যাশিংসহ JWT অথেন্টিকেশন।',
      'জব সিকার ও এমপ্লয়ারদের জন্য রোল-ভিত্তিক অ্যাক্সেস কন্ট্রোল।',
      'দ্রুত, অপ্টিমাইজড REST API এবং সম্পূর্ণ রেসপন্সিভ UI।',
    ],
    challenges: [
      'Implementing secure authentication with bcrypt hashing and JWT sessions.',
      'Designing the application flow to prevent duplicate applications from the same user.',
    ],
    challengesBn: [
      'bcrypt হ্যাশিং ও JWT সেশনসহ নিরাপদ অথেন্টিকেশন ইমপ্লিমেন্ট করা।',
      'একই ব্যবহারকারীর ডুপ্লিকেট আবেদন ঠেকাতে অ্যাপ্লিকেশন ফ্লো ডিজাইন করা।',
    ],
    improvements: [
      'Resume upload and parsing',
      'Email notifications for applications',
      'Admin moderation panel',
      'Advanced filtering with salary ranges and remote-only jobs',
    ],
    improvementsBn: [
      'রেজিউমে আপলোড ও পার্সিং',
      'আবেদনের জন্য ইমেইল নোটিফিকেশন',
      'অ্যাডমিন মডারেশন প্যানেল',
      'স্যালারি রেঞ্জ ও রিমোট-অনলি জবসহ অ্যাডভান্সড ফিল্টার',
    ],
  },
]

// ── RESEARCH ─────────────────────────────────────────────────
export const research = {
  id: 'bodym',
  title: 'Smartphone-Based Body Measurement for Tailoring',
  titleBn: 'টেইলরিংয়ের জন্য স্মার্টফোন-ভিত্তিক বডি মেজারমেন্ট',
  status: 'Ongoing Research',
  statusBn: 'চলমান গবেষণা',
  year: '2026',
  repo: 'https://github.com/mesbahtoha/Dorji-Bari',
  overview:
    'DorjiBari is a reproducible research pipeline that estimates five tailoring measurements from a front-view photo, a side-view photo, and measured human height. The work focuses on honest evaluation: subject-level splits, saved predictions, measurement-specific uncertainty, and selective verification for the measurements that are least reliable.',
  overviewBn:
    'DorjiBari একটি রিপ্রোডিউসিবল গবেষণা পাইপলাইন — ফ্রন্ট-ভিউ ছবি, সাইড-ভিউ ছবি ও মাপা উচ্চতা থেকে পাঁচটি টেইলরিং মাপ অনুমান করে। গবেষণার মূল focus সৎ মূল্যায়ন: subject-level split, সংরক্ষিত prediction, প্রতিটি মাপের আলাদা uncertainty এবং কম নির্ভরযোগ্য মাপের জন্য selective verification।',
  problem:
    'Manual tape measurement is slow, inconsistent between tailors, and hard to scale for online tailoring. A phone-only pipeline could make custom-fit clothing more accessible — but only if its errors and uncertainty are measured honestly.',
  problemBn:
    'ম্যানুয়াল টেপ মাপ ধীর, টেইলরভেদে অসামঞ্জস্যপূর্ণ এবং অনলাইন টেইলরিংয়ের জন্য স্কেল করা কঠিন। শুধু ফোন-ভিত্তিক পাইপলাইন কাস্টম-ফিট পোশাক আরও সহজলভ্য করতে পারে — তবে তার জন্য ভুল ও uncertainty সৎভাবে মাপা জরুরি।',
  approach:
    'A dual-view silhouette geometry pipeline (52 features) is combined with measured height and evaluated with subject-grouped cross-validation. Five experiments cover height-only baselines, geometry, front/side ablation, classical ML models, and nested uncertainty calibration.',
  approachBn:
    'ডুয়াল-ভিউ সিলুয়েট জ্যামিতি পাইপলাইন (৫২টি ফিচার) মাপা উচ্চতার সঙ্গে যুক্ত করে subject-grouped ক্রস-ভ্যালিডেশন দিয়ে মূল্যায়ন করা হয়েছে। পাঁচটি এক্সপেরিমেন্টে height-only baseline, জ্যামিতি, front/side ablation, ক্লাসিক্যাল ML মডেল এবং nested uncertainty calibration রয়েছে।',
  dataset:
    'BodyM — 8,975 dual-view photo pairs (17,950 preprocessed silhouettes), with the official Train / TestA / TestB splits preserved.',
  datasetBn:
    'BodyM — ৮,৯৭৫টি ডুয়াল-ভিউ ফটো পেয়ার (১৭,৯৫০টি প্রি-প্রসেসড সিলুয়েট), অফিশিয়াল Train / TestA / TestB স্প্লিট অপরিবর্তিত রাখা হয়েছে।',
  targets: [
    { name: 'Chest', nameBn: 'বুক' },
    { name: 'Waist', nameBn: 'কোমর' },
    { name: 'Hip', nameBn: 'হিপ' },
    { name: 'Shoulder Breadth', nameBn: 'কাঁধের প্রস্থ' },
    { name: 'Arm Length', nameBn: 'হাতের দৈর্ঘ্য' },
  ],
  methods: [
    { name: '52-feature silhouette geometry', nameBn: '৫২-ফিচার সিলুয়েট জ্যামিতি' },
    { name: 'Height + dual-view regression', nameBn: 'উচ্চতা + ডুয়াল-ভিউ রিগ্রেশন' },
    { name: 'Ridge / Random Forest / MLP', nameBn: 'Ridge / Random Forest / MLP' },
    { name: 'Subject-grouped nested CV', nameBn: 'Subject-grouped nested CV' },
    { name: 'Uncertainty calibration & selective verification', nameBn: 'Uncertainty calibration ও selective verification' },
  ],
  results: [
    {
      value: '2.62–4.37 cm',
      label: 'MAE · chest, waist & hip',
      labelBn: 'MAE · বুক, কোমর ও হিপ',
      detail: 'TestA–TestB, height + dual-view geometry',
      detailBn: 'TestA–TestB, উচ্চতা + ডুয়াল-ভিউ জ্যামিতি',
    },
    {
      value: '0.84–1.06 cm',
      label: 'MAE · shoulder & arm',
      labelBn: 'MAE · কাঁধ ও হাত',
      detail: 'Shoulder breadth and arm length',
      detailBn: 'কাঁধের প্রস্থ ও হাতের দৈর্ঘ্য',
    },
    {
      value: '0.76–0.87',
      label: 'R² across five measurements',
      labelBn: 'পাঁচটি মাপে R²',
      detail: 'Explained variance on TestB',
      detailBn: 'TestB-তে ব্যাখ্যাত ভ্যারিয়েন্স',
    },
    {
      value: '2.54×',
      label: 'Risk enrichment · hip ±5 cm',
      labelBn: 'রিস্ক এনরিচমেন্ট · হিপ ±৫ সেমি',
      detail: 'Top 20% selective verification; 95% CI 2.27–2.83',
      detailBn: 'Top ২০% selective verification; ৯৫% CI ২.২৭–২.৮৩',
    },
  ],
  findings: [
    'Adding dual-view silhouette geometry cut chest MAE from 9.70 cm (height-only) to 3.55 cm on TestB.',
    'Ridge was the strongest classical model under the Train-only grouped CV comparison.',
    'Train-derived prediction intervals undercovered on TestB — calibration did not transfer reliably.',
    'Selective verification showed the strongest signal for hip and waist, a promising human-in-the-loop direction.',
  ],
  findingsBn: [
    'ডুয়াল-ভিউ সিলুয়েট জ্যামিতি যোগ করায় TestB-তে বুকের MAE ৯.৭০ সেমি (height-only) থেকে ৩.৫৫ সেমিতে নেমেছে।',
    'Train-only grouped CV তুলনায় Ridge ছিল সবচেয়ে শক্তিশালী ক্লাসিক্যাল মডেল।',
    'Train থেকে পাওয়া prediction interval TestB-তে undercover করেছে — calibration নির্ভরযোগ্যভাবে transfer হয়নি।',
    'Selective verification-এ হিপ ও কোমরের সবচেয়ে শক্তিশালী সংকেত মিলেছে — human-in-the-loop দিকটি সম্ভাবনাময়।',
  ],
  note:
    'These results come from the BodyM research evaluation. They are not clinical or industry-standard tailoring tolerances, and further validation is required before real-world deployment.',
  noteBn:
    'এই ফলাফলগুলো BodyM গবেষণার মূল্যায়ন থেকে নেওয়া। এগুলো কোনো ক্লিনিক্যাল বা ইন্ডাস্ট্রি-স্ট্যান্ডার্ড টেইলরিং টলারেন্স নয় — বাস্তবে ব্যবহারের আগে আরও যাচাই প্রয়োজন।',
}

// ── VIDEO SHOWCASE ───────────────────────────────────────────
export const videos = [
  {
    id: 'shikhi-bondhu-demo',
    provider: 'youtube',
    youtubeId: '9Wda4f2YxpA',
    title: 'Shikhi Bondhu — AI Tutor Demo',
    titleBn: 'শিখি বন্ধু — এআই টিউটর ডেমো',
    description:
      'A walkthrough of the Bengali-first, textbook-grounded AI tutor — multilingual questions, citations, practice modes, and admin controls.',
    descriptionBn:
      'বাংলা-ফার্স্ট, টেক্সটবুক-গ্রাউন্ডেড এআই টিউটরের ওয়াকথ্রু — বহুভাষিক প্রশ্ন, সাইটেশন, প্র্যাকটিস মোড ও অ্যাডমিন কন্ট্রোল।',
    thumbnail: 'https://i.ytimg.com/vi/9Wda4f2YxpA/maxresdefault.jpg',
    url: 'https://youtu.be/9Wda4f2YxpA',
    tag: 'AI · RAG',
    tagBn: 'এআই · RAG',
  },
  {
    id: 'ai-presentation',
    provider: 'drive',
    driveId: '1K8QtexMqD7h4WjTvSJfEj14W2OojyJOU',
    title: 'AI Presentation — Project Showcase',
    titleBn: 'এআই প্রেজেন্টেশন — প্রজেক্ট শোকেস',
    description:
      'A presentation covering the problem, product thinking, architecture, and impact of the AI project work.',
    descriptionBn:
      'এআই প্রজেক্টের সমস্যা, প্রোডাক্ট চিন্তা, আর্কিটেকচার ও প্রভাব নিয়ে একটি প্রেজেন্টেশন।',
    url: 'https://drive.google.com/file/d/1K8QtexMqD7h4WjTvSJfEj14W2OojyJOU/view?usp=sharing',
    tag: 'Presentation',
    tagBn: 'প্রেজেন্টেশন',
    accent: 'from-violet-500/30 to-indigo-500/10',
  },
  {
    id: 'gearup-demo',
    provider: 'drive',
    driveId: '1kyZACJthg4hZlQ-kyNz9QBrRNdszE22r',
    title: 'GearUp (B7A5) — Project Demonstration',
    titleBn: 'GearUp (B7A5) — প্রজেক্ট ডেমোনস্ট্রেশন',
    description:
      'Full walkthrough of the GearUp rental platform: authentication, role dashboards, Stripe checkout, and the rental lifecycle.',
    descriptionBn:
      'GearUp রেন্টাল প্ল্যাটফর্মের সম্পূর্ণ ওয়াকথ্রু: অথেন্টিকেশন, রোল ড্যাশবোর্ড, Stripe চেকআউট ও রেন্টাল লাইফসাইকেল।',
    url: 'https://drive.google.com/file/d/1kyZACJthg4hZlQ-kyNz9QBrRNdszE22r/view?usp=sharing',
    tag: 'Full Stack',
    tagBn: 'ফুল স্ট্যাক',
    accent: 'from-emerald-500/30 to-teal-500/10',
  },
  {
    id: 'tesla-pool-demo',
    provider: 'drive',
    driveId: '1Sv4TWxU_ah8V4aotkXp7nMesXi4S5sOR',
    title: 'Dhaka Tesla Pool — Project Walkthrough',
    titleBn: 'ঢাকা টেসলা পুল — প্রজেক্ট ওয়াকথ্রু',
    description:
      'Ride-pooling demo covering auto-matching, fare splitting, the five-stage lifecycle, wallet payments, and concurrency safety.',
    descriptionBn:
      'রাইড-পুলিং ডেমো — অটো-ম্যাচিং, ভাড়া ভাগ, পাঁচ-ধাপের লাইফসাইকেল, ওয়ালেট পেমেন্ট ও কনকারেন্সি সেফটি।',
    url: 'https://drive.google.com/file/d/1Sv4TWxU_ah8V4aotkXp7nMesXi4S5sOR/view?usp=sharing',
    tag: 'Backend · PostgreSQL',
    tagBn: 'ব্যাকএন্ড · PostgreSQL',
    accent: 'from-sky-500/30 to-cyan-500/10',
  },
]

// ── ADDITIONAL INFORMATION ────────────────────────────────────
export const additional = {
  languages: [
    { name: 'English', nameBn: 'ইংরেজি', level: 'Fluent', levelBn: 'সাবলীল' },
    { name: 'Bangla', nameBn: 'বাংলা', level: 'Native', levelBn: 'মাতৃভাষা' },
  ],
  extracurricular: [
    {
      role: 'Executive Committee Member & Program Organizer',
      roleBn: 'এক্সিকিউটিভ কমিটি মেম্বার ও প্রোগ্রাম অর্গানাইজার',
      organization: 'DIU ICEC',
      organizationBn: 'DIU ICEC',
      place: 'Daffodil International University',
      placeBn: 'ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি',
      activities: [
        'Supported workshops, seminars, and career development programs',
        'Worked with a team to manage student engagement and club activities',
      ],
      activitiesBn: [
        'ওয়ার্কশপ, সেমিনার ও ক্যারিয়ার ডেভেলপমেন্ট প্রোগ্রামে সহায়তা করেছি',
        'টিমের সঙ্গে শিক্ষার্থী এনগেজমেন্ট ও ক্লাব অ্যাক্টিভিটি ম্যানেজ করেছি',
      ],
    },
  ],
  softSkills: [
    'Ownership & Accountability',
    'Team Collaboration',
    'Analytical Thinking',
    'Self-Directed Learning',
  ],
  softSkillsBn: [
    'দায়িত্ববোধ',
    'টিমওয়ার্ক',
    'বিশ্লেষণী চিন্তা',
    'স্ব-প্রেরিত শিক্ষা',
  ],
}
