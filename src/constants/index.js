import {
  frontend,
  backend,
  ux,
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
  matrix,
  ichilov,
  ezwhitelogo,
  kulalike,
  sql,
  canva,
  angular,
  mongo,
  intersystems
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
  {
    name: 'Intersystems',
    icon: intersystems,
  },
];

const experiences = [
  {
    title: 'Full-Stack Developer (Volunteering)',
    company_name: 'Kula Like',
    icon: kulalike,
    iconBg: '#ffffff',
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
    iconBg: '#ffffff',
    date: 'Aug 2022 - Jul 2024',
  },
  {
    title: 'Integration Engineer',
    company_name: 'Tel-aviv medical center',
    icon: ichilov,
    iconBg: '#333333',
    date: 'Sep 2024 - Present',
  }
];



export { services, technologies, experiences };
