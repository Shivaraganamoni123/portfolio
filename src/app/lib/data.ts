import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Github, Instagram, Linkedin } from "lucide-react";
import { DiscordIcon, LeetCodeIcon } from "@/components/icons";

const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export const profileData = {
  name: 'Raganamoni Shiva Shankar',
  tagline: 'Creative Developer & UI/UX Designer',
  bio: `I'm a passionate developer with a knack for creating beautiful, functional, and user-centered digital experiences. With a background in both design and engineering, I bridge the gap between aesthetics and functionality to deliver products that are not only visually stunning but also intuitive and performant. I'm always eager to learn new technologies and take on challenging projects.`,
  email: 'hello@alexdoe.com',
  socials: {
    github: 'https://github.com/Jeston10',
    linkedin: 'https://www.linkedin.com/in/shiva-shankar-raganamoni-3a799a232/',
    twitter: 'https://twitter.com',
    instagram: 'https://www.instagram.com/_just_shut_d.../',
    discord: 'https://discord.com/users/justino8_301...',
    leetcode: 'https://leetcode.com/u/Justin_zzz_go/',
  },
  connect: [
    {
      name: 'LinkedIn',
      username: `Let's Connect`,
      url: 'https://www.linkedin.com/in/shiva-shankar-raganamoni-3a799a232/',
      icon: Linkedin,
      main: true,
    },
    {
      name: 'Instagram',
      username: '@_just_shut_d...',
      url: 'https://www.instagram.com/_just_shut_d.../',
      icon: Instagram,
    },
    {
      name: 'Discord',
      username: '@justino8_301...',
      url: 'https://discord.com/users/justino8_301...',
      icon: DiscordIcon,
    },
    {
      name: 'Github',
      username: '@Jeston10',
      url: 'https://github.com/Jeston10',
      icon: Github,
    },
    {
      name: 'LeetCode',
      username: '@Justin_zzz_go',
      url: 'https://leetcode.com/u/Justin_zzz_go/',
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

export const certificationsData: Certification[] = [
  {
    title: 'Google Certified Professional Cloud Architect',
    issuer: 'Google Cloud',
    year: '2023',
    url: '#',
  },
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'The Linux Foundation',
    year: '2022',
    url: '#',
  },
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    year: '2022',
  },
   {
    title: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    year: '2021',
    url: '#',
  },
];