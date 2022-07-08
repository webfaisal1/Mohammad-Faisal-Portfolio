//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiPhone,
  FiLinkedin,
  FiFacebook,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/project1.png';
import Project2 from './assets/img/projects/project2.png';
import Project3 from './assets/img/projects/project3.png';
import Project4 from './assets/img/projects/project4.png';
import Project5 from './assets/img/projects/project5.png';
import Project6 from './assets/img/projects/project6.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'blog',
    href: 'blog',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/developer-mohammad-faisal/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/developer-mohammad-faisal',
  },
  {
    icon: <FiFacebook />,
    href: 'https://www.facebook.com/profile.php?id=100079882159420',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/faisal85412/',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    _id: '1',
    image: Project4,
    name: 'Windsor Car Warehouse',
    category: 'Full Stack',
    liveSite: 'https://windsor-car-warehouse.web.app/',
    codeLink: 'https://github.com/developer-mohammad-faisal/Windsor-car-warehouse-client'
  },
  {
    _id: '2',
    image: Project1,
    name: 'Book Review',
    category: 'Front End',
    liveSite: 'https://book-bazaar.netlify.app/home',
    codeLink: 'https://github.com/developer-mohammad-faisal/Book-Reviews-'
  },
  {
    _id: '3',
    image: Project2,
    name: 'Dr. William F Turner',
    category: 'Back End',
    liveSite: 'https://dr-william-f-turner.web.app/',
    codeLink: 'https://github.com/developer-mohammad-faisal/Dr.-William-F-Turner-'
  },
  {
    _id: '4',
    image: Project3,
    name: 'Laptop Bazaar',
    category: 'Front End',
    liveSite: 'https://laptop-bazaar.netlify.app/',
    codeLink: 'https://github.com/developer-mohammad-faisal/Laptop-Bazaar'
  },

  {
    _id: '5',
    image: Project5,
    name: 'HTML CSS Project',
    category: 'Back End',
    liveSite: 'https://my-second-websites.netlify.app/',
    codeLink: 'https://github.com/developer-mohammad-faisal/My-Second-Websites'
  },
  {
    _id: '6',
    image: Project6,
    name: 'One Page Ecommerce Panda',
    category: 'Back End',
    liveSite: 'https://ecomrace-practice.netlify.app/',
    codeLink: 'https://github.com/developer-mohammad-faisal/practice-panda'
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Front End',
  },
  {
    name: 'Back End',
  },
  {
    name: 'Full Stack',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'JavaScript',
    description:
      'I have 1 year experience in JavaScript. I can do any of your projects with JavaScript. Feel free to give me any project.',
  },
  {
    icon: <FiSettings />,
    name: 'TypeScript',
    description:
      'I have one year experience about TypeScript. I can do any project with typescript. You can give me any project',
  },
  {
    icon: <FiPenTool />,
    name: 'React Js',
    description:
      'I have 1-year of experience about React Js, I can do any project with react js. You can give me any project',
  },
  {
    icon: <FiTag />,
    name: 'MERN Stack',
    description:
      'I have a good amount of ideas and experience about express.js react node.js with MERN Stack. You can give me any project of Meron Stack',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at web.mohammad.faisal@gmail.com',
  },
  {
    icon: <FiPhone />,
    title: 'Phone Number',
    subtitle: '24 Hour Open',
    description: '+8801619-816171',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Chittagong, Bangladesh',
    description: 'Serving clients worldwide',
  },
];
