import hamburgerIcon from '../icons/Hamburger-menu-icon.svg';
import envelopeIcon from '../icons/Envelope-Icon.svg';
// Headline social icons
import githubIcon from '../icons/Disabledgithub-icon.png';
import LinkedInIcon from '../icons/DisabledLinkedIn-icon.png';
import fingersIcon from '../icons/Enabledtwo-fingers-icon.png';
import twitterIcon from '../icons/Disabledtwitter-icon.png';
import mIcon from '../icons/DisabledM-icon.png';


const displayImages = () => {  
    const hamburgerEl = document.querySelector('.hamburger-btn > img');
    hamburgerEl.src = hamburgerIcon; 
    // Envelope Icon insertion
    const envelopEl = document.querySelector('.envelope-icon');
    envelopEl.src = envelopeIcon;

    // insert social media icons in headline
    const allheadlineIcons = document.querySelectorAll('.headline-social-media img');   
    const [img1, img2,img3,img4, img5 ] = allheadlineIcons;
    img1.src = githubIcon;
    img2.src = LinkedInIcon;
    img3.src = fingersIcon;
    img4.src = twitterIcon;
    img5.src = mIcon;



    

   
}


export default displayImages;