import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Github, Instagram, Linkedin, Code, Server, PencilRuler, Bot } from "lucide-react";
import { DiscordIcon, LeetCodeIcon } from "@/components/icons";

const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export const profileData = {
  name: 'R. Shiva Shankar',
  tagline: 'Creative Developer & UI/UX Designer',
  bio: `Hey Guys !!! Myself R.Shiva Shankar a 4th year ECE student at SICET-TS, specializing in MERN Fullstack. Envisioning to combine AI/ML, and AI to build smart and secure tech solutions. Learning, Building Projects, and Exploring new ideas. Open for any Opportunities and Collaborations for a combined greater good in future.`,
  email: 'raganamonishivashankar78@gmail.com',
  socials: {
    github: 'https://github.com/Shivaraganamoni123',
    linkedin: 'https://www.linkedin.com/in/raganamoni-shiva-shankar-27201925b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYk7rasvxRkO8dt5tlSWwuw%3D%3D',
    twitter: 'https://twitter.com',
    instagram: 'https://www.instagram.com/shiva_raganamoni/',
    discord: 'https://discord.com/channels/1417693981185146913/1417693983173513349',
    leetcode: 'https://leetcode.com/u/shivaraganamoni/',
  },
  connect: [
    {
      name: 'LinkedIn',
      username: `Let's Connect`,
      url: 'https://www.linkedin.com/in/raganamoni-shiva-shankar-27201925b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYk7rasvxRkO8dt5tlSWwuw%3D%3D',
      icon: Linkedin,
      main: true,
    },
    {
      name: 'Instagram',
      username: '@shiva_raganamoni',
      url: 'https://www.instagram.com/shiva_raganamoni/',
      icon: Instagram,
    },
    {
      name: 'Discord',
      username: 'shiva_raganamoni',
      url: 'https://discord.com/channels/1417693981185146913/1417693983173513349',
      icon: DiscordIcon,
    },
    {
      name: 'Github',
      username: '@Shivaraganamoni123',
      url: 'https://github.com/Shivaraganamoni123',
      icon: Github,
    },
    {
      name: 'LeetCode',
      username: '@shivaraganamoni',
      url: 'https://leetcode.com/u/shivaraganamoni/',
      icon: LeetCodeIcon,
    },
  ],
  profilePicture: findImage('profile'),
};

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  image: ReturnType<typeof findImage>;
  detailImage: ReturnType<typeof findImage>;
  liveUrl?: string;
  githubUrl?: string;
};


export const projectsData: Project[] = [
  {
    id: '1',
    title: 'QuantumLeap CRM',
    shortDescription: 'A next-generation CRM platform designed for startups.',
    longDescription: 'QuantumLeap CRM is a comprehensive customer relationship management tool built from the ground up to empower startups. It features an intuitive dashboard, lead tracking, sales pipeline management, and detailed analytics. The goal was to create a powerful yet affordable CRM that scales with a growing business. The backend is built with Node.js and Express, with a PostgreSQL database, while the frontend is a responsive React application.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Firebase'],
    image: findImage('project-1'),
    detailImage: findImage('project-detail-1'),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'Aether-Analytics',
    shortDescription: 'Real-time data visualization and analytics dashboard.',
    longDescription: 'Aether-Analytics provides a powerful suite for real-time data visualization. It connects to multiple data sources, allowing users to build custom dashboards with a variety of charts and graphs. The application is built using a microservices architecture, ensuring high availability and scalability. WebSocket technology is used for real-time data updates.',
    technologies: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'Python', 'Flask'],
    image: findImage('project-2'),
    detailImage: findImage('project-detail-2'),
    liveUrl: '#',
  },
  {
    id: '3',
    title: 'ConnectSphere',
    shortDescription: 'A decentralized social media application.',
    longDescription: 'ConnectSphere is a proof-of-concept for a decentralized social media platform. It leverages blockchain technology to give users full control over their data and content. The platform supports posting, following, and direct messaging in a peer-to-peer manner. The UI is designed to be clean and minimal, focusing on the user experience.',
    technologies: ['SvelteKit', 'Ethers.js', 'Solidity', 'IPFS', 'Tailwind CSS'],
    image: findImage('project-3'),
    detailImage: findImage('project-detail-3'),
    githubUrl: '#',
  },
  {
    id: '4',
    title: 'Zenith eCommerce',
    shortDescription: 'A modern, headless e-commerce solution.',
    longDescription: 'Zenith is a flexible, headless e-commerce platform built for performance and scalability. It provides a powerful GraphQL API for managing products, orders, and customers, allowing developers to build custom storefronts with any frontend technology. The starter kit includes a performant Next.js frontend with server-side rendering and static site generation for blazing-fast page loads.',
    technologies: ['Next.js', 'GraphQL', 'Stripe', 'PostgreSQL', 'Docker'],
    image: findImage('project-4'),
    detailImage: findImage('project-detail-4'),
    liveUrl: '#',
    githubUrl: '#',
  },
];


export type Certification = {
  title: string;
  issuer: string;
  year: string;
  url?: string;
};

export const certificationsData: Certification[] = [];

export const skillsData = [
    {
        category: 'Frontend',
        icon: Code,
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Framer Motion'],
    },
    {
        category: 'Backend',
        icon: Server,
        skills: ['Node.js', 'Python', 'Firebase', 'PostgreSQL', 'Docker'],
    },
    {
        category: 'UI/UX Design',
        icon: PencilRuler,
        skills: ['Figma', 'Adobe XD', 'User Research', 'Wireframing', 'Prototyping'],
    },
    {
        category: 'AI/ML',
        icon: Bot,
        skills: ['Genkit', 'TensorFlow', 'PyTorch', 'LangChain', 'LLMs'],
    }
] as const;
