import { FaGithub, FaLinkedin, FaBriefcase } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import {
  MdSchool,
  MdWork,
  MdCode,
  MdScience,
  MdVolunteerActivism,
} from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

export const NavBarContent: string[] = [
  "About",
  "Projects",
  "Skills",
  "Experience",
  "Contact",
];
interface SkillItem {
  icon: string;
  name: string;
  color: string;
}
export const SocialLinks = [
  {
    id: "github",
    icon: FaGithub,
    link: "https://github.com/YoussifHassan8",
    preview: true,
  },
  {
    id: "linkedin",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/youssif-hassan-50b226247/",
    preview: true,
  },
  {
    id: "codeforces",
    icon: SiCodeforces,
    link: "https://codeforces.com/profile/Youssif_Hassan",
    preview: true,
  },
  {
    id: "x",
    icon: FaXTwitter,
    link: "#",
    preview: true,
  },
  {
    id: "leetcode",
    icon: SiLeetcode,
    link: "#",
    preview: true,
  },
];

export const PredefinedGradients = [
  {
    name: "Default",
    value: "linear-gradient(90deg, #2A7B9B, #57C785)",
  },
  {
    name: "Blue Purple",
    value: "linear-gradient(90deg, #3b82f6, #a855f7, #9333ea)",
  },
  {
    name: "Sunset",
    value: "linear-gradient(90deg, #f97316, #e11d48, #6d28d9)",
  },
  {
    name: "Emerald",
    value: "linear-gradient(90deg, #10b981, #3b82f6, #6366f1)",
  },
];

export const SolidColors = [
  "#3b82f6",
  "#a855f7",
  "#9333ea",
  "#f97316",
  "#e11d48",
  "#6d28d9",
  "#10b981",
  "#6366f1",
  "#2A7B9B",
  "#57C785",
];

export const InitialProjects = [
  {
    title: "CategYou - YouTube Playlist Organizer",
    description:
      "Transform your YouTube experience with nested folders, smart sorting, and intuitive drag-and-drop organization for your Liked Videos playlist.",
    tech: [
      { name: "React", color: "text-indigo-400" },
      { name: "OAuth", color: "text-purple-400" },
      { name: "Tailwind CSS", color: "text-pink-400" },
      { name: "React Icons", color: "text-blue-400" },
      { name: "IndexedDB", color: "text-green-400" },
    ],
    imgSrc: "/src/assets/categyou-preview.jpg",
    liveDemo: "https://categyou.netlify.app/",
    repo: "https://github.com/YoussifHassan8/CategYou",
  },

  {
    title: "DomifyJS - Lightweight Frontend Framework",
    description:
      "DomifyJS is a lightweight, flexible frontend framework built from scratch in JavaScript to understand modern framework internals.",
    tech: [{ name: "JavaScript", color: "text-yellow-400" }],
    imgSrc: "/src/assets/domifyjs-preview.png",
    liveDemo: "",
    repo: "https://github.com/YoussifHassan8/DomifyJS",
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Algorithm Visualizer is a web-based application designed to help users understand and learn algorithms through interactive visualizations.",
    tech: [
      { name: "HTML", color: "text-orange-400" },
      { name: "CSS", color: "text-blue-400" },
      { name: "JavaScript", color: "text-yellow-400" },
    ],
    imgSrc: "/src/assets/algovisualizer-preview.png",
    liveDemo: "https://youssifhassan8.github.io/Algorithms-Visualizer/",
    repo: "https://github.com/YoussifHassan8/Algorithms-Visualizer",
  },
  {
    title: "Snake Game",
    description:
      "A simple Snake Game involves controlling a snake to eat food that randomly appears on the grid, which increases the snake's length.",
    tech: [
      { name: "HTML", color: "text-orange-400" },
      { name: "CSS", color: "text-blue-400" },
      { name: "JavaScript", color: "text-yellow-400" },
    ],
    imgSrc: "/src/assets/snakegame-preview.jpg",
    liveDemo: "https://youssifhassan8.github.io/Snake-Game/",
    repo: "https://github.com/YoussifHassan8/Snake-Game",
  },
];

export const NewProjectTemp = {
  title: "Enter the name of your project",
  description: "Enter small description for your project",
  tech: [
    { name: "HTML", color: "text-orange-400" },
    { name: "CSS", color: "text-blue-400" },
    { name: "JavaScript", color: "text-yellow-400" },
  ],
  imgSrc: "https://placehold.co/600x400",
  liveDemo: "#",
  repo: "#",
};

export const ColorOptions = [
  { name: "orange", value: "text-orange-400", bg: "bg-orange-400" },
  { name: "blue", value: "text-blue-400", bg: "bg-blue-400" },
  { name: "yellow", value: "text-yellow-400", bg: "bg-yellow-400" },
  { name: "indigo", value: "text-indigo-400", bg: "bg-indigo-400" },
  { name: "purple", value: "text-purple-400", bg: "bg-purple-400" },
  { name: "pink", value: "text-pink-400", bg: "bg-pink-400" },
  { name: "green", value: "text-green-400", bg: "bg-green-400" },
  { name: "red", value: "text-red-400", bg: "bg-red-400" },
  { name: "gray", value: "text-gray-400", bg: "bg-gray-400" },
];
export const AllSKills: SkillItem[] = [
  { icon: "TbBrandCpp", name: "C++", color: "#00599C" },
  { icon: "SiPython", name: "Python", color: "#3776AB" },
  { icon: "SiJavascript", name: "JavaScript", color: "#F7DF1E" },
  { icon: "SiTypescript", name: "TypeScript", color: "#3178C6" },
  { icon: "SiHtml5", name: "HTML5", color: "#E34F26" },
  { icon: "SiCss3", name: "CSS3", color: "#1572B6" },
  { icon: "SiTailwindcss", name: "Tailwind", color: "#06B6D4" },
  { icon: "SiBootstrap", name: "Bootstrap", color: "#7952B3" },
  { icon: "SiReact", name: "React", color: "#61DAFB" },
  { icon: "SiNextdotjs", name: "Next.js", color: "#FFFFFF" },
  { icon: "SiRedux", name: "Redux", color: "#764ABC" },
  { icon: "SiGithub", name: "GitHub", color: "#FFFFFF" },
  { icon: "SiGit", name: "Git", color: "#F05032" },
  { icon: "SiNodedotjs", name: "Node.js", color: "#339933" },
  { icon: "SiExpress", name: "Express", color: "#000000" },
  { icon: "SiMongodb", name: "MongoDB", color: "#47A248" },
  { icon: "SiPostgresql", name: "PostgreSQL", color: "#4169E1" },
  { icon: "SiMysql", name: "MySQL", color: "#4479A1" },
  { icon: "SiDjango", name: "Django", color: "#092E20" },
  { icon: "SiFlask", name: "Flask", color: "#000000" },
  { icon: "SiSpring", name: "Spring", color: "#6DB33F" },
  { icon: "SiPhp", name: "PHP", color: "#777BB4" },
  { icon: "SiSharp", name: "C#", color: "#239120" },
  { icon: "SiDotnet", name: ".NET", color: "#512BD4" },
  { icon: "SiRuby", name: "Ruby", color: "#CC342D" },
  { icon: "SiRubyonrails", name: "Rails", color: "#CC0000" },
  { icon: "SiVuedotjs", name: "Vue.js", color: "#4FC08D" },
  { icon: "SiAngular", name: "Angular", color: "#DD0031" },
  { icon: "SiSvelte", name: "Svelte", color: "#FF3E00" },
  { icon: "SiNuxtdotjs", name: "Nuxt.js", color: "#00DC82" },
  { icon: "SiGatsby", name: "Gatsby", color: "#663399" },
  { icon: "SiFirebase", name: "Firebase", color: "#FFCA28" },
  { icon: "SiAmazon", name: "AWS", color: "#FF9900" },
  { icon: "SiGooglecloud", name: "GCP", color: "#4285F4" },
  { icon: "SiDocker", name: "Docker", color: "#2496ED" },
  { icon: "SiKubernetes", name: "Kubernetes", color: "#326CE5" },
  { icon: "SiGrafana", name: "Grafana", color: "#F46800" },
  { icon: "SiElasticsearch", name: "Elasticsearch", color: "#005571" },
  { icon: "SiJest", name: "Jest", color: "#C21325" },
  { icon: "SiMocha", name: "Mocha", color: "#8D6748" },
  { icon: "SiCypress", name: "Cypress", color: "#17202C" },
  { icon: "SiSelenium", name: "Selenium", color: "#43B02A" },
  { icon: "SiFigma", name: "Figma", color: "#F24E1E" },
  { icon: "SiAdobexd", name: "Adobe XD", color: "#FF61F6" },
  { icon: "SiAdobephotoshop", name: "Photoshop", color: "#31A8FF" },
  { icon: "SiWordpress", name: "WordPress", color: "#21759B" },
  { icon: "SiShopify", name: "Shopify", color: "#7AB55C" },
  { icon: "SiWebpack", name: "Webpack", color: "#8DD6F9" },
  { icon: "SiVite", name: "Vite", color: "#646CFF" },
  { icon: "SiSass", name: "Sass", color: "#CC6699" },
  { icon: "SiLess", name: "Less", color: "#1D365D" },
  { icon: "SiStyledcomponents", name: "Styled Components", color: "#DB7093" },
  { icon: "SiSwift", name: "Swift", color: "#FA7343" },
  { icon: "SiKotlin", name: "Kotlin", color: "#7F52FF" },
  { icon: "SiDart", name: "Dart", color: "#0175C2" },
  { icon: "SiFlutter", name: "Flutter", color: "#02569B" },
  { icon: "SiReactivex", name: "React Native", color: "#61DAFB" },
  { icon: "SiGraphql", name: "GraphQL", color: "#E10098" },
  { icon: "SiApollographql", name: "Apollo", color: "#311C87" },
  { icon: "SiElixir", name: "Elixir", color: "#4B275F" },
  { icon: "SiGo", name: "Go", color: "#00ADD8" },
  { icon: "SiRust", name: "Rust", color: "#000000" },
  { icon: "SiWebgl", name: "WebGL", color: "#990000" },
  { icon: "SiThreedotjs", name: "Three.js", color: "#000000" },
  { icon: "SiElectron", name: "Electron", color: "#47848F" },
  { icon: "SiRaspberrypi", name: "Raspberry Pi", color: "#A22846" },
  { icon: "SiArduino", name: "Arduino", color: "#00979D" },
];

export const InitialSkills: SkillItem[] = [
  { icon: "TbBrandCpp", name: "C++", color: "#00599C" },
  { icon: "SiPython", name: "Python", color: "#3776AB" },
  { icon: "SiJavascript", name: "JavaScript", color: "#F7DF1E" },
  { icon: "SiTypescript", name: "TypeScript", color: "#3178C6" },
  { icon: "SiHtml5", name: "HTML5", color: "#E34F26" },
  { icon: "SiCss3", name: "CSS3", color: "#1572B6" },
  { icon: "SiTailwindcss", name: "Tailwind", color: "#06B6D4" },
  { icon: "SiBootstrap", name: "Bootstrap", color: "#7952B3" },
  { icon: "SiReact", name: "React", color: "#61DAFB" },
  { icon: "SiNextdotjs", name: "Next.js", color: "#FFFFFF" },
  { icon: "SiRedux", name: "Redux", color: "#764ABC" },
  { icon: "SiGithub", name: "GitHub", color: "#FFFFFF" },
  { icon: "SiGit", name: "Git", color: "#F05032" },
];

export const ExperienceData = [
  {
    date: "October 2021 - October 2025",
    title: "Bachelor's degree | Computer Science",
    foundation: "El Shorouk Academy",
    description:
      "I studied computer and systems engineering, which provided me with a solid foundation in programming, algorithms, data structures, and software engineering. I also developed a strong understanding of computer architecture, operating systems, and computer networks.",
    left: false,
    iconName: "GiGraduateCap",
  },
  {
    date: "June 2023 – May 2024",
    title: "AI Trainer",
    foundation: "Scale AI",
    description:
      "Worked on improving a language model for solving Codeforces problems. For each coding problem, I write the solution of the problem, test cases to confirm that my code works fine, a summary of the problem, and an explanation of how my code solves the problem.",
    left: true,
    iconName: "FaBriefcase",
  },
];

export const NewExperienceTemplate = {
  date: "Enter the date range",
  title: "Enter the title",
  foundation: "Enter the organization/institution",
  description: "Enter a description of your experience",
  left: true,
  iconName: "GiGraduateCap",
};

export const IconOptions = [
  {
    name: "GiGraduateCap",
    component: MdSchool,
    label: "Graduate Cap",
  },
  {
    name: "FaBriefcase",
    component: FaBriefcase,
    label: "Briefcase",
  },
  {
    name: "MdSchool",
    component: MdSchool,
    label: "School",
  },
  {
    name: "MdWork",
    component: MdWork,
    label: "Work",
  },
  {
    name: "MdCode",
    component: MdCode,
    label: "Code",
  },
  {
    name: "MdScience",
    component: MdScience,
    label: "Science",
  },
  {
    name: "MdVolunteerActivism",
    component: MdVolunteerActivism,
    label: "Volunteer",
  },
];
