import mobileGlobalDrums from '../myworkImages/mobileGlobalDrummers.png';
import desktopGlobalDrums from '../myworkImages/desktopGlobalDrummers.png';
import desktopEcommerce from '../myworkImages/E-commerce product page.png';
import mobileEcommerce from '../myworkImages/mobileE-commerce-product-page.png';
import shortlyMobile from '../myworkImages/Shortly-mobile.png';
import shortlyDesktop from '../myworkImages/Shortly-desktop.png';
import cryptoHubMobile from '../myworkImages/Crypto-hub-mobile.png';
import cryptoHubDesktop from '../myworkImages/Crypto-hub-desktop.png';
import CarsBnBProjectDesktopImage from '../images/Car-test-dt.png';
import CarsBnBProjectMobileImage from '../images/Car-test-mobile.png';

export const featuredProjects = [
  {
    name: 'Cars BnB',
    description: `Its a simple full-stack application that users can reserve 
    a session to test cars of thier choosing before the commit to buying or choose a financing package.`,
    images: {
      mobile: CarsBnBProjectMobileImage,
      desktop: CarsBnBProjectDesktopImage,
    },
    technologies: ['React.Js', 'Ruby on Rails', 'CSS', 'JavaScript'],
    liveLink: 'https://bobb-rob.github.io/Global-Drummers-Workshop/',
    sourceFile: 'https://github.com/bobb-Rob/Global-Drummers-Workshop',
    id: '1',
  },
]

const projects = [
  {
    name: 'Global Drummers Festival Website',
    description: `Drum Festival Global conference is a yearly drummers community
       event at the global level featuring world-class drummers from more than 100 countries.
        The aim is to provide a single point of Information and registration for all participants. 
        `,
    images: {
      mobile: mobileGlobalDrums,
      desktop: desktopGlobalDrums,
    },
    technologies: ['Html', 'CSS', 'JavaScript'],
    liveLink: 'https://bobb-rob.github.io/Global-Drummers-Workshop/',
    sourceFile: 'https://github.com/bobb-Rob/Global-Drummers-Workshop',
    id: '1',
  },
  {
    name: 'Shortly Landing Page',
    description:
        'Have you ever needed to shorten a very very long URL?, this app can help you do that quickly. It was built with vanilla JavaScript. Credit to Front End Mentors who put up this challenge.',
    images: {
      mobile: shortlyMobile,
      desktop: shortlyDesktop,
    },
    technologies: ['Html', 'CSS', 'JavaScript'],
    liveLink: 'https://bobb-rob.github.io/url-shortening-api-master/',
    sourceFile: 'https://github.com/bobb-Rob/url-shortening-api-master',
    id: '2',
  },
  {
    name: 'Crypto-hub',
    description:
        'Crypto-Hub is a web application that provides detailed information about the top 100 most used cryptocurrencies in the worlds',
    images: {
      mobile: cryptoHubMobile,
      desktop: cryptoHubDesktop,
    },
    technologies: ['React', 'Redux', 'Axios', 'CSS'],
    liveLink: 'https://crypto-hub-247.netlify.app/',
    sourceFile: 'https://github.com/bobb-Rob/Crypto-Hub',
    id: '3',
  },
  {
    name: 'E-commerce product page',
    description:
    `This is a responsive single page e-commerce product page, a solution to the E-commerce product page challenge on Frontend Mentor. 
    Frontend Mentor challenges help you improve your coding skills by building realistic projects.`,
    images: {
      mobile: mobileEcommerce,
      desktop: desktopEcommerce,
    },
    technologies: ['Html', 'CSS', 'JavaScript'],
    liveLink: 'https://bobb-rob.github.io/ecommerce-product-page/',
    sourceFile: 'https://github.com/bobb-Rob/ecommerce-product-page',
    id: '4',
  },
];

export default projects;
