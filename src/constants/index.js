import {
  frontend,
  backend,
  ux,
  sweetworld,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  ezlines,
  donaroma,
  matrix,
  business,
  ezwhitelogo,
  kulalike,
  sql,
  canva,
  angular,
  mongo
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  }
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Integration',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongo,
  },
  {
    name: 'SQL',
    icon: sql,
  },
  {
    name: 'Angular',
    icon: angular,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Figma',
    icon: figma,
  },
  {
    name: 'Canva',
    icon: canva,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full-Stack Developer (Volunteering)',
    company_name: 'Kula Like',
    icon: kulalike,
    iconBg: '#333333',
    date: 'Oct 2021 - Dec 2021',
  },
  {
    title: 'Full-Stack Developer',
    company_name: 'Freelance',
    icon: ezwhitelogo,
    iconBg: '#333333',
    date: 'Oct 2021 - Present',
  },
  {
    title: 'Backend Developer',
    company_name: 'Matrix',
    icon: matrix,
    iconBg: '#333333',
    date: 'Aug 2022 - Present',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'Don Aroma',
    description: 'A custom designed E-commerce website including stock management system and secured payment.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: donaroma,
    repo: 'https://github.com/erelzohar',
    demo: 'https://donaroma-il.com/',
  },
  {
    id: 'project-2',
    name: 'EZ-lines',
    description:
      'A generic appointments system with monthly subscription fee.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
    ],
    image: ezlines,
    repo: 'https://github.com/erelzohar',
    demo: 'https://ez-lines.com',
  },
  {
    id: 'project-3',
    name: 'Web Business',
    description: 'A single-page corporate website built with React',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'vite',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: business,
    repo: 'https://github.com/erelzohar/WebBusiness',
    demo: 'https://github.com/erelzohar/WebBusiness',
  },
  {
    id: 'project-4',
    name: 'The Sweet World',
    description: 'Birthday parties website made with React and Nodejs',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
    ],
    image: sweetworld,
    repo: 'https://github.com/erelzohar/the-sweet-world-front',
    demo: 'https://github.com/erelzohar/the-sweet-world-front',
  }
];

export { services, technologies, experiences, projects };
