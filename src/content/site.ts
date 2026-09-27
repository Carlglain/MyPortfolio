export const profile = {
  name: "Nyuysemo Calglain",
  shortName: "Carl",
  role: "Full-Stack Software Developer",
  location: "Buea, Cameroon",
  email: "carlglainnyuysemo@gmail.com",
  phone: "+237 650 608 635",
  cvPath: "/Nyuysemo-Calglain-CV.pdf",
  intro:
    "I ship production mobile, web and backend features for fintech products, with React Native, Next.js, TypeScript and NestJS.",
  status: "Junior Software Developer at Nkwa",
  socials: [
    { label: "GitHub", href: "https://github.com/Carlglain" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nyuysemo-calglain-ab2a60221",
    },
    { label: "Email", href: "mailto:carlglainnyuysemo@gmail.com" },
  ],
};

export const about = {
  paragraphs: [
    "I'm Carl, a software developer at Nkwa, a savings and payments company in Cameroon. I work across the React Native mobile app, the Next.js web platforms and the NestJS API, so a single feature often takes me from the database to the screen.",
    "Most of my work sits where money and trust meet: identity verification, access control, transaction approvals and error handling that tells people exactly what to do next. I care about flows that are safe by default and still easy to use.",
  ],
  stats: [
    { value: "113", label: "Merged pull requests at Nkwa" },
    { value: "4", label: "Production codebases: mobile, web, admin, API" },
    { value: "2", label: "Languages shipped in every flow: English and French" },
  ],
};

export type Role = {
  title: string;
  company: string;
  place: string;
  period: string;
  points: string[];
};

export const experience: Role[] = [
  {
    title: "Junior Software Developer",
    company: "Nkwa",
    place: "Buea, Cameroon",
    period: "Feb 2026 – Present",
    points: [
      "Released structured error handling across five React Native financial flows (Goals, Flip, P2P, Basics and Groups), replacing generic failures with clear recovery states and safer retries.",
      "Implemented CASL-based role-based access control for Nkwa Pay, connecting permissions to backend APIs for team invitations and member management.",
      "Owned frontend delivery of internal KYC and transaction-management screens: review, manual resolution, pending-transaction approvals and permission-based controls.",
      "Shipped Reserves Anytime Free Withdrawal behind PostHog feature flags, from a 14-day controlled pilot to full rollout.",
      "Delivered NestJS changes for transaction audit reasons, payment-error handling, savings streak logic and translated API errors.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Nkwa",
    place: "Buea, Cameroon",
    period: "Jul 2025 – Jan 2026",
    points: [
      "Built Nkwa Pay admin portal features in Next.js and TypeScript: merchant KYC review, withdrawals, top-ups and user administration.",
      "Developed merchant KYC onboarding with document uploads, rejection reasons, tier-aware navigation and English/French localization.",
      "Added Cloudflare Turnstile and rate limiting to the public contact form.",
    ],
  },
  {
    title: "Machine Learning & Data Science Intern",
    company: "TanglaTec",
    place: "Remote, Belgium",
    period: "Jul 2024 – Sep 2024",
    points: [
      "Built Python and C++ batch pipelines to detect peaks in experimental voltage measurements.",
      "Processed 1,207 of about 1,274 measurement files and isolated the failures for investigation.",
    ],
  },
];

export const stack = [
  {
    group: "Frontend & Mobile",
    items: ["React", "Next.js", "React Native", "Expo", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "TypeORM", "FastAPI", "Express", "REST APIs"],
  },
  {
    group: "Data & Tools",
    items: ["PostgreSQL", "MySQL", "Supabase", "Metabase", "PostHog", "Sentry", "Jest", "Git"],
  },
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++", "SQL"],
  },
];

// Merged pull requests into Nkwa production repos per month (GitHub, Sep 2026).
export const shippingLog = {
  total: 113,
  promotedAt: "2026-02",
  months: [
    { month: "2025-08", count: 12 },
    { month: "2025-09", count: 5 },
    { month: "2025-10", count: 8 },
    { month: "2025-11", count: 9 },
    { month: "2025-12", count: 5 },
    { month: "2026-01", count: 1 },
    { month: "2026-02", count: 3 },
    { month: "2026-03", count: 18 },
    { month: "2026-04", count: 8 },
    { month: "2026-05", count: 7 },
    { month: "2026-06", count: 9 },
    { month: "2026-07", count: 9 },
    { month: "2026-08", count: 1 },
    { month: "2026-09", count: 18 },
  ],
};

export type Work = {
  title: string;
  kind: string;
  summary: string;
  tags: string[];
  href?: string;
  linkLabel?: string;
  /** First image is the main shot; a second one peeks out behind it. */
  images?: { src: string; alt: string; width: number; height: number }[];
  /** Show the image whole on a tinted panel instead of as a screenshot (logos). */
  imageFit?: "contain";
};

export const nkwaWork: Work[] = [
  {
    title: "Structured error contract",
    kind: "Nkwa mobile app",
    summary:
      "A shared contract that maps API error codes to actionable recovery states, rolled out across goals, Flip, P2P, Basics and Groups.",
    tags: ["React Native", "TypeScript", "i18n"],
  },
  {
    title: "Team access control",
    kind: "Nkwa Pay",
    summary:
      "Role-based permissions with CASL plus the full invitation lifecycle: invite, accept, decline, resend, edit and remove members.",
    tags: ["Next.js", "CASL", "RBAC"],
  },
  {
    title: "KYC and transaction back office",
    kind: "Nkwa Admin",
    summary:
      "Review screens, deletion approvals with a maker-checker rule, manual resolution and pending-transaction approvals for operations staff.",
    tags: ["Next.js", "TanStack Query", "Permissions"],
  },
  {
    title: "Reserves withdrawals",
    kind: "Nkwa mobile app",
    summary:
      "Anytime free withdrawal and quarterly interest withdrawal, gated with PostHog feature flags and taken from pilot to full rollout.",
    tags: ["React Native", "PostHog", "Feature flags"],
  },
];

export const projects: Work[] = [
  {
    title: "RoseAudit",
    kind: "E-commerce and coaching platform",
    summary:
      "A financial-education storefront with Supabase asset storage and Cal.com scheduling, deployed to Vercel for client review.",
    tags: ["Next.js", "TypeScript", "Supabase", "Cal.com"],
    href: "https://the-rose-edit.vercel.app/",
    linkLabel: "Visit site",
    images: [
      { src: "/projects/roseaudit-home.png", alt: "RoseAudit coaching page with a booking call to action", width: 1096, height: 689 },
      { src: "/projects/roseaudit-booking.png", alt: "RoseAudit session booking calendar powered by Cal.com", width: 1033, height: 715 },
    ],
  },
  {
    title: "PneumoScan AI",
    kind: "Pneumonia detection",
    summary:
      "A chest X-ray classifier with a FastAPI inference service and a Next.js interface for upload, Grad-CAM explainability and scan history.",
    tags: ["Python", "PyTorch", "EfficientNet-B0", "FastAPI", "Next.js"],
    href: "https://pneumoniascan-frontend.vercel.app/",
    linkLabel: "Visit site",
    images: [
      { src: "/projects/pneumoscan-home.png", alt: "PneumoScan AI home page for chest X-ray analysis", width: 1510, height: 762 },
      { src: "/projects/pneumoscan-history.png", alt: "PneumoScan AI scan history with diagnoses and model confidence", width: 925, height: 579 },
    ],
  },
  {
    title: "MottoFix",
    kind: "Vehicle diagnostics app",
    summary:
      "Camera scanning and image-analysis integration for a four-person university project, continued solo with auth, tutorials and FAQ.",
    tags: ["React Native", "Expo", "Express", "Firebase"],
    href: "https://github.com/Carlglain/MottoFix",
    linkLabel: "View code",
    images: [{ src: "/projects/mottofix-logo.png", alt: "MottoFix logo", width: 800, height: 466 }],
    imageFit: "contain",
  },
];

export const awards = [
  { title: "2nd Place, Dev War Hackathon", by: "Hustlers Community", year: "2025" },
  { title: "Kante Tanyi Tometi Excellence Grant", by: "", year: "2023" },
];

export const education = {
  degree: "B.Eng. Computer Engineering",
  school: "University of Buea",
  detail: "Software Engineering option",
  period: "2022 – 2026",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];
