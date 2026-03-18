// ============================================
//  DATA.JS — All resume content lives here.
//  Edit this file to customize your portfolio.
// ============================================

export const personal = {
  name: "Md. Mesbahul Alam",
  shortName: "Mesbahul",
  title: "MERN Stack Developer",
  tagline: "Passionate full-stack developer building modern, responsive web applications with the MERN stack.",
  email: "mesbahtoha@gmail.com",
  phone: "+880 1701-056137",        // ← update with your real number
  location: "Dhaka, Bangladesh",
  github: "https://github.com/mesbahtoha",
  linkedin: "https://www.linkedin.com/in/mesbahul-alam/",  // ← update if different
  facebook: "https://www.facebook.com/profile.php?id=61576957316338",
  instagram: "https://www.instagram.com/mesbaah.toha?igsh=MTVzd3l2aGkyZDJmdQ%3D%3D&utm_source=qr",                                       // leave blank to hide
  resumeUrl: "https://drive.google.com/file/d/1Nc1SK9xbnRCLKlV0SktKU_GRi62Wk36H/view?usp=drivesdk",                                    // ← put /resume.pdf after adding your PDF
  initials: "MA",
};

export const about = {
  intro: `I'm a passionate MERN Stack Developer and B.Sc. student in Information & Communication Engineering at Daffodil International University. I love turning ideas into real, functional web applications — from designing clean UIs with React to building robust REST APIs with Node.js and Express.`,
  extended: `I completed the Complete Web Development course at Programming Hero (2025), where I built hands-on projects covering the full MERN stack. I'm an Executive Member of the DIU ICEC & Career Development Club, which sharpened my teamwork and communication skills. I'm actively seeking my first professional role where I can contribute, grow, and make an impact.`,
  highlights: [
    { label: "Current Status",  value: "Student" },
    { label: "Projects Built",  value: "10+" },
    { label: "Certification",   value: "2025" },
    { label: "Available",       value: "ASAP" },
  ],
  passions: ["MERN Stack", "REST APIs", "Responsive Design", "Open Source", "Problem Solving"],
  lookingFor: "I am actively looking for a Junior / Entry-Level Full-Stack or Frontend Developer role where I can apply my MERN stack skills and grow alongside an experienced team.",
};

// ── NO WORK EXPERIENCE YET ───────────────────────────────────
// This will show the "Seeking First Role" section instead.
export const experiences = [];

// ── EDUCATION ────────────────────────────────────────────────
export const education = [
  {
    degree: "B.Sc. in Information & Communication Engineering (ICE)",
    institution: "Daffodil International University",
    period: "2024 – Present",
    location: "Dhaka, Bangladesh",
    gpa: null,
    description:
      "Studying core engineering subjects alongside software development, computer networks, and digital communication systems.",
    highlights: [
      "Executive Member — DIU ICEC & Career Development Club",
      "Focused on full-stack web development",
    ],
  },
  {
    degree: "HSC / Alim (Science)",
    institution: "Tamirul Millat Kamil Madrasah",
    period: "2021 – 2023",
    location: "Bangladesh",
    gpa: "5.00 / 5.00",
    description:
      "Completed Higher Secondary Certificate in Science with a perfect GPA, building a strong foundation in mathematics and analytical thinking.",
    highlights: [
      "Perfect GPA — 5.00 / 5.00",
      "Science specialization",
    ],
  },
];

// ── SKILLS ───────────────────────────────────────────────────
export const skills = [
  {
    category: "Frontend",
    icon: "FiCode",
    items: [
      { name: "HTML5",       level: 90 },
      { name: "CSS3",        level: 85 },
      { name: "JavaScript",  level: 82 },
      { name: "React.js",    level: 80 },
      { name: "Tailwind CSS",level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: "FiServer",
    items: [
      { name: "Node.js",   level: 75 },
      { name: "Express.js",level: 75 },
      { name: "REST API",  level: 78 },
      { name: "JWT Auth",  level: 70 },
      { name: "MongoDB",   level: 72 },
    ],
  },
  {
    category: "Tools & Deployment",
    icon: "FiTool",
    items: [
      { name: "Git",         level: 80 },
      { name: "GitHub",      level: 82 },
      { name: "Axios / Fetch API", level: 78 },
      { name: "Figma",       level: 65 },
      { name: "Vercel",      level: 75 },
      { name: "Netlify",     level: 73 },
      { name: "Railway",     level: 65 },
    ],
  },
];

// ── PROJECTS ─────────────────────────────────────────────────
// Update `github` links with your actual repo URLs
export const projects = [
  {
    title: "⚡ZapShift — Parcel Delivery Application",
    description:
      "Full-stack parcel delivery application with booking, live tracking, and role-based dashboards for users, agents, and admins. Powered by the MERN stack.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "Axios", "Rest API", "Railway"],
    gradient: "from-amber-500/20 to-orange-500/10",
    live: "https://attractive-optimism-production.up.railway.app/",                                          // ← add your live link
    github: "https://github.com/mesbahtoha/Percel-Web-Application",           // ← add your repo link
    stats: "Full Stack",
  },
  {
    title: "🧑‍💼 Career Code — Job Portal Website",
    description:
      "Career Code connects job seekers with employers through a clean, fast interface. Candidates can search and apply for jobs while recruiters manage postings and review applications.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Axios", "Tailwind CSS", "Firebase", "Vercel"],
    gradient: "from-blue-500/20 to-cyan-500/10",
    live: "https://carrer-code-client.vercel.app/",
    github: "https://github.com/mesbahtoha/Job-Portal-Website",
    stats: "MERN Stack",
  },
  {
    title: "🏥 Doctor Appointment Website",
    description:
      "A frontend medical appointment platform featuring doctor listings, specialty filtering, appointment booking, and a clean patient-friendly UI. Deployed on Netlify with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Netlify"],
    gradient: "from-emerald-500/20 to-teal-500/10",
    live: "https://thriving-centaur-0328cb.netlify.app/",
    github: "https://github.com/mesbahtoha/Medical-Appointment-Web-Frontend-",
    stats: "Front-end",
  },
  {
    title: "🖥️ DevBoard — Developer Task Dashboard",
    description:
      "A clean and interactive developer task management dashboard built with vanilla HTML, CSS, and JavaScript, styled with Tailwind CSS and DaisyUI. DevBoard helps developers track their assigned tasks, monitor deadlines, log activity, and discover new learning content — all in one place.",
    tech: ["JavaScript", "HTML", "CSS", "GitHub"],
    gradient: "from-violet-500/20 to-purple-500/10",
    live: "https://mesbahtoha.github.io/Test-Ass-5-/",
    github: "https://github.com/mesbahtoha/DevBoard",
    stats: "Developer Task Dashboard",
  },
];

// ── ADDITIONAL INFORMATION ────────────────────────────────────
export const additional = {
  languages: ["English", "Bangla"],
  certifications: [
    {
      title: "Complete Web Development Course",
      issuer: "Programming Hero",
      year: "2025",
      credentialUrl: "#",    // ← replace with your Drive link
    },
  ],
  extracurricular: [
    {
      role: "Executive Member",
      organization: "DIU ICEC & Career Development Club",
      place: "Daffodil International University",
      activities: [
        "Supported organization of workshops, seminars, and career development programs",
        "Worked with a team to manage student engagement and club activities",
      ],
    },
  ],
};
