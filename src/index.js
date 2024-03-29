import projects, { featuredProjects } from './JavaScript/projects.js';
import DOM from './JavaScript/domEl.js';
import setLocalStore from './JavaScript/localStorage.js';
import displayImages from './JavaScript/images.js';
import gitHubIcon from './icons/github-icon.svg';
import newWindowIcon from './icons/new-window-icon.svg';
import './css/style.css';
import './css/projects.css';
import './css/popup.css';

const displayProjects = (projects) => {
  projects.map((project) => DOM.cardContainer.appendChild(DOM.createProjectCard(project)));
};

const formValidation = () => {
  // Email lowercase sensitive validation
  const email = document.getElementById('visitors-email');
  const form = document.getElementById('contact-form');

  function showMessage(text, className) {
    let message;
    if (!document.querySelector('.email-check-message')) {
      message = DOM.createElement('small', 'email-check-message');
      message.classList.add(className);
    } else {
      message = document.querySelector('.email-check-message');
      message.classList.replace(className, className);
    }
    message.textContent = text;
    const submitBtn = document.querySelector('.btn-form-submit');
    form.insertBefore(message, submitBtn);
  }

  function validateEmail() {
    const emailValue = email.value.trim();
    const lowerCaseEmail = emailValue.toLowerCase();

    if (emailValue !== lowerCaseEmail) {
      showMessage('Email should be lowercase all through', 'invalid-email');
      return false;
    }
    return true;
  }

  function removeMessageOnFocus() {
    const message = document.querySelector('.email-check-message');
    if (message) {
      message.remove();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateEmail()) {
      form.submit();
    }
  }

  // Validate email once email field losses focus
  email.addEventListener('change', validateEmail);
  // Remove message once email field regains focus
  email.addEventListener('focus', removeMessageOnFocus);
  // Prevent submit if email is invalid
  form.addEventListener('submit', handleSubmit);
};

const executeEvents = () => {
  // Add event listener to the hamburger btn
  DOM.hamburgerBtn.addEventListener('click', () => {
    DOM.createCloseIcon(DOM.navLinksWrapper, 'li');
    DOM.navLinksWrapper.classList.add('display-f');
    document.querySelector('.envelope').classList.add('display-n');
    // Add the click event on the close btn on menu
    const hamburgerCloseIcon = document.querySelector('img.close-icon');
    hamburgerCloseIcon.addEventListener('click', () => {
      DOM.navLinksWrapper.classList.toggle('display-f');
      const mailIcon = document.querySelector('.envelope');
      mailIcon.classList.toggle('display-n');
      document.querySelector('.close-icon-wrapper').remove();
    });
  });

  // Attach click events on all the "a" tags both desktop and mobile
  const navLinksArr = Array.from(
    document.querySelectorAll('li.insert-event > a'),
  );
  navLinksArr.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        DOM.navLinksWrapper.classList.toggle('display-f'); // Remove display: flex !important class
      }
    });
  });

  // insert icons to popup window
  const insertPopupIcons = () => {
    const [newWindowIconImg, gitHubIconImg] = Array.from(document.querySelectorAll('.popup-btn > a > img'));
    newWindowIconImg.src = newWindowIcon;
    gitHubIconImg.src = gitHubIcon;
  };

  // Add event listener to project btns
  const cardBtnArr = Array.from(document.querySelectorAll('.btn-card'));
  cardBtnArr.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // Filter the project by id
      const [project] = projects.filter(
        (proj) => proj.id === e.target.parentElement.id,
      );
      const workSection = document.getElementById('recent-works');
      workSection.appendChild(DOM.createPopupWindow(project));
      insertPopupIcons();
      //  Listen for click on close icon in popup container
      DOM.createCloseIcon(document.querySelector('.popup-container'), 'span');
      const popupCloseIcon = document.querySelector('span.close-icon-wrapper');
      popupCloseIcon.addEventListener('click', () => {
        document.querySelector('.project-modal').remove();
      });
      //  Listen for click outside popup container
      window.addEventListener('click', (e) => {
        if (e.target.classList.contains('project-modal')) {
          document.querySelector('.project-modal').remove();
        }
      });
    });
  });

  const firstCardButton = document.querySelector('.btn-feature');
  firstCardButton.addEventListener('click', () => {
    DOM.workSection.appendChild(DOM.createPopupWindow(featuredProjects[0]));
    //  Listen for click on close icon in popup container
    DOM.createCloseIcon(document.querySelector('.popup-container'), 'span');
    const popupCloseIcon = document.querySelector('span.close-icon-wrapper');
    popupCloseIcon.addEventListener('click', () => {
      document.querySelector('.project-modal').remove();
    });
  });

  // LocalStorage Event
  window.onload = setLocalStore.useStorageInfo;
  const fullName = document.getElementById('visitors-name');
  const emailId = document.getElementById('visitors-email');
  const message = document.getElementById('contact-text-area');

  [fullName, emailId, message].forEach((node) => {
    node.onkeydown = setLocalStore.setStorage;
    node.onkeyup = setLocalStore.setStorage;
  });
};

displayProjects(projects);
displayImages();
formValidation();
executeEvents();
