
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Github, Instagram, Linkedin, Code, Server, PencilRuler, Bot } from "lucide-react";
import { DiscordIcon, LeetCodeIcon } from "@/components/icons";

const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export const profileData = {
  name: 'R. Shiva Shankar',
  tagline: 'Full stack | AI/ML intern @Infosys Springboard |Knows Python, Front End Development | Completed Hands-on Projects | AI/ML',
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
    id: '5',
    title: 'Budgetwise Forecasting tool',
    shortDescription: 'An intelligent tool for personal budget forecasting.',
    longDescription: 'Budgetwise is a smart budgeting tool that helps users forecast their financial health. It uses historical data to project future spending and income, providing insights to make better financial decisions. The application features interactive charts and a user-friendly interface to make personal finance management accessible to everyone.',
    technologies: ['React', 'Node.js', 'Chart.js', 'Firebase'],
    image: findImage('project-5'),
    detailImage: findImage('project-detail-5'),
    liveUrl: 'https://budgetwise-app-w6t9.onrender.com/',
    githubUrl: '#',
  },
];


export type Certification = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  url?: string;
  image?: ReturnType<typeof findImage>;
};

export const certificationsData: Certification[] = [
  {
    id: 'cert-1',
    title: 'Nxtwave CCBP 4.0 Certificate',
    issuer: '',
    year: '',
    image: findImage('certificate-1'),
  },
  {
    id: 'cert-2',
    title: 'Infosys Springboard Completion',
    issuer: '',
    year: '',
    image: findImage('certificate-2'),
  },
  {
    id: 'cert-3',
    title: 'J-Spiders Certification',
    issuer: '',
    year: '',
    image: findImage('certificate-3'),
  },
  {
    id: 'cert-4',
    title: 'AI-ML Internship Certificate',
    issuer: '',
    year: '',
    image: findImage('certificate-4'),
  },
  {
    id: 'cert-5',
    title: 'Smart Internz Completion',
    issuer: '',
    year: '',
    image: findImage('certificate-5'),
  },
];

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
