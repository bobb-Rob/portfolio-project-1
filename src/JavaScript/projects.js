import mobileGlobalDrums from '../myworkImages/mobileGlobalDrummers.png';
import desktopGlobalDrums from '../myworkImages/desktopGlobalDrummers.png';
import desktopEcommerce from '../myworkImages/E-commerce product page.png';
import mobileEcommerce from '../myworkImages/mobileE-commerce-product-page.png';


const projects = [
  {
    name: 'Global Drummers Festival Website',   
    description: `Drum Festival Global conference is a yearly drummers community
       event at the global level featuring world-class drummers from more than 100 countries.
        The aim is to provide a single point of Information and registration for all participants. 
        This project was completed with JavaScript, HTML, and CSS.`,
    images: {
        mobile: mobileGlobalDrums,
        desktop: `url(${desktopGlobalDrums})`,
    },   
    technologies: ['Html', 'CSS', 'JavaScript'],
    liveLink: 'https://bobb-rob.github.io/Global-Drummers-Workshop/',
    sourceFile: 'https://github.com/bobb-Rob/Global-Drummers-Workshop',
    id: '1',
  },
  {
    name: 'Website Portfolio',   
    description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
    images: {
        mobile: mobileGlobalDrums,
        desktop: `url(${desktopGlobalDrums})`,
    },    
    technologies: ['Html', 'CSS', 'JavaScript'],
    liveLink: 'https://bobb-rob.github.io/portfolio-project-1/',
    sourceFile: 'https://github.com/bobb-rob/portfolio-project-1',
    id: '2',
  },
  {
    name: 'Profesional Art Printing Data',  
    description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
    images: {
        mobile: mobileGlobalDrums,
        desktop: `url(${desktopGlobalDrums})`,
    },
    technologies:  ['Html', 'CSS', 'JavaScript'],
    liveLink: 'https://bobb-rob.github.io/portfolio-project-1/',
    sourceFile: 'https://github.com/bobb-rob/portfolio-project-1',
    id: '3',
  },  
];

const projects2 = [{
  name: 'E-commerce product page', 
  description:
  `This is a responsive single page e-commerce product page, a solution to the E-commerce product page challenge on Frontend Mentor. 
  Frontend Mentor challenges help you improve your coding skills by building realistic projects.`,
  images: {
    mobile: mobileEcommerce,
    desktop:  `url(${desktopEcommerce})`,
  },  
  technologies: ['Html', 'CSS', 'JavaScript'],
  liveLink: 'https://bobb-rob.github.io/ecommerce-product-page/',
  sourceFile: 'https://github.com/bobb-Rob/ecommerce-product-page',
  id: 'x1',
}];

export { projects, projects2 };