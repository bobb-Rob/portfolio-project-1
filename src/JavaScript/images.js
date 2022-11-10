import hamburgerIcon from '../icons/Hamburger-menu-icon.svg';
import envelopeIcon from '../icons/Envelope-Icon.svg';
// Headline social icons
import githubIcon from '../icons/Disabledgithub-icon.png';
import LinkedInIcon from '../icons/DisabledLinkedIn-icon.png';
import fingersIcon from '../icons/Enabledtwo-fingers-icon.png';
import twitterIcon from '../icons/Disabledtwitter-icon.png';
import mIcon from '../icons/DisabledM-icon.png';
// Featured product images
import featuredProduct1 from '../images/mobile-first-card.svg';
// Project card imports
import EcommerceProductImage from '../myworkImages/mobileE-commerce-product-page.png';
import globalDrumFestivalMobile from '../myworkImages/mobileGlobalDrummers.png';


const displayImages = () => {
  const hamburgerEl = document.querySelector('.hamburger-btn > img');
  hamburgerEl.src = hamburgerIcon;
  // Envelope Icon insertion
  const envelopEl = document.querySelector('.envelope-icon');
  envelopEl.src = envelopeIcon;

  // insert social media icons in headline
  const allheadlineIcons = document.querySelectorAll('.headline-social-media img');
  const [img1, img2, img3, img4, img5] = [...allheadlineIcons];
  img1.src = githubIcon;
  img2.src = LinkedInIcon;
  img3.src = fingersIcon;
  img4.src = twitterIcon;
  img5.src = mIcon;
  productImages();
};

// Insert featured product images
const productImages = () => {
  const featuredProduct1El = document.querySelector('.first-card-img-mobile');
  featuredProduct1El.src = featuredProduct1;

  // const projectImages = document.querySelectorAll('.project-card');
  // const [img1, img2] = [...projectImages];
  // img1.style.backgroundImage = `url(${EcommerceProductImage})`;
  // img2.style.backgroundImage = `url(${globalDrumFestivalMobile})`;
};


export default displayImages;