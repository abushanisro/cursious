import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  yourlogo,
  yourlogo1,
  yourlogo2,
  yourlogo3,
  yourlogo4,
} from "../assets";

// ─────────────────────────────────────────
// 🧭 Navigation Links
// ─────────────────────────────────────────
export const navigation = [
  { id: "0", title: "Features", url: "#features" },
  { id: "1", title: "Book Now", url: "#booking" },
  { id: "2", title: "Services", url: "#how-to-use" },
  { id: "3", title: "Roadmap", url: "#roadmap" },
];

// ─────────────────────────────────────────
// 💬 Hero Icons
// ─────────────────────────────────────────
export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

// ─────────────────────────────────────────
// 🔔 Notification Graphics
// ─────────────────────────────────────────
export const notificationImages = [notification4, notification3, notification2];

// ─────────────────────────────────────────
// 💼 Brand Logos (looped)
// ─────────────────────────────────────────
export const companyLogos = [yourlogo, yourlogo1, yourlogo2, yourlogo3, yourlogo4];

// ─────────────────────────────────────────
// ⚙️ AI Services
// ─────────────────────────────────────────
export const cursiousServices = [
  "Smart Lead Scoring",
  "24/7 AI Chat Support",
  "Plug & Play Integration with Your Stack",
];

export const cursiousServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

// ─────────────────────────────────────────
// 🗺️ Roadmap Features
// ─────────────────────────────────────────
export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Chat with your AI hands-free. Full voice command support for accessibility and speed.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Leaderboards, badges, and achievements that drive engagement and consistency.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Fully personalize your AI's look, voice, and behavior to match your brand.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Plug into external sources like weather, news, or CRM tools to unlock real-time context.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

// ─────────────────────────────────────────
// 🤝 Collaboration Features
// ─────────────────────────────────────────
export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  { id: "0", title: "Seamless Integration", text: collabText },
  { id: "1", title: "Smart Automation" },
  { id: "2", title: "Top-notch Security" },
];

export const collabApps = [
  { id: "0", title: "Figma", icon: figma, width: 26, height: 36 },
  { id: "1", title: "Notion", icon: notion, width: 34, height: 36 },
  { id: "2", title: "Discord", icon: discord, width: 36, height: 28 },
  { id: "3", title: "Slack", icon: slack, width: 34, height: 35 },
  { id: "4", title: "Photoshop", icon: photoshop, width: 34, height: 34 },
  { id: "5", title: "Protopie", icon: protopie, width: 34, height: 34 },
  { id: "6", title: "Framer", icon: framer, width: 26, height: 34 },
  { id: "7", title: "Raindrop", icon: raindrop, width: 38, height: 32 },
];

// ─────────────────────────────────────────
// 💰 Pricing Tiers
// ─────────────────────────────────────────
export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "Understand your queries naturally",
      "Get tailored recommendations",
      "Explore all app features for free",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "Handles complex queries with ease",
      "Analytics dashboard access",
      "Priority customer support",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "Tailored AI assistant with your branding",
      "Advanced business insights",
      "Dedicated account manager",
    ],
  },
];

// ─────────────────────────────────────────
// 🧠 Benefits Section – AI for Business
// ─────────────────────────────────────────
export const benefits = [
  {
    id: "0",
    title: "Smart Lead Scoring",
    text: "Let AI find your hottest leads, so your sales team spends time where it matters most.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "24/7 Customer Support",
    text: "Deliver instant answers to customer queries—even while you sleep. AI never clocks out.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Automated Workflows",
    text: "AI takes over repetitive tasks like follow-ups, scheduling, and status updates automatically.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Plug & Play Integration",
    text: "Connect Cursious AI to your tools like Slack, Notion, or CRM—no developers needed.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Human-like Conversations",
    text: "Give customers a natural, intelligent chat experience—built on NLP and real context.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Always Learning",
    text: "Your assistant improves with every interaction—thanks to continuous learning loops.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

// ─────────────────────────────────────────
// 🔗 Socials
// ─────────────────────────────────────────
export const socials = [
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/cursious.ai/",
  },
  {
    id: "3",
    title: "telegram",
    iconUrl: telegram,
    url: "https://www.linkedin.com/company/107546015/admin/dashboard/",
  },
];
