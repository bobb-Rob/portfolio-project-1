import { projects } from './JavaScript/projects.js';
import DOM from './JavaScript/domEl.js';
import setLocalStore from './JavaScript/localStorage.js';
import displayImages from './JavaScript/images.js';
import './css/style.css';
import './css/projects.css';

const displayProjects = (projects) => {
  console.log('project injection');
  projects.map((project) =>
    DOM.cardContainer.appendChild(DOM.createProjectCard(project))
  );
};

function cardOnHover() { 
  const cardArr = Array.from(document.querySelectorAll('.card-description'));
  console.log(cardArr);
  // project btn

  cardArr.forEach((card) => {
    card.addEventListener('mouseenter', (e) => {
      console.log('card hover effect');    
      // card.parentElement.style.transform = 'scale(1.1)';
      const button = e.target.nextElementSibling;
      // console.log(button);
      button.style.height = '48px';
      button.style.padding = '12px';
      console.log(button);
    });
    card.addEventListener('mouseleave', (e) => {
      // card.parentElement.style.transform = 'scale(1)';
      const button = e.target.nextElementSibling;
      setTimeout(() => {
        button.style.height = '0';
        button.style.padding = '0';
      }, 1500);
    });
  });
}

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
  };

  // Validate email once email field losses focus
  email.addEventListener('change', validateEmail);
  // Remove message once email field regains focus
  email.addEventListener('focus', removeMessageOnFocus);
  // Prevent submit if email is invalid
  form.addEventListener('submit', handleSubmit);
};

const executeEvent = () => {
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

  // const cardBtnArr = Array.from(DOM.projectBtns);
  // cardBtnArr.forEach((btn) => {
  //   btn.addEventListener('click', (e) => {
  //     // Filter the project by id
  //     const project = projects.filter(
  //       (proj) => proj.id === e.target.parentElement.id,
  //     );
  //     DOM.workSection.appendChild(DOM.createPopupWindow(project[0]));
  //     //  Lister for click on close icon in popup container
  //     DOM.createCloseIcon(document.querySelector('.popup-container'), 'span');
  //     const popupCloseIcon = document.querySelector('span.close-icon-wrapper');
  //     popupCloseIcon.addEventListener('click', () => {
  //       document.querySelector('.project-modal').remove();
  //     });
  //     //  Listen for click outside popup container
  //     window.addEventListener('click', (e) => {
  //       if (e.target.classList.contains('project-modal')) {
  //         document.querySelector('.project-modal').remove();
  //       }
  //     });
  //   });
  // });

  const firstCardButton = document.querySelector('.btn-feature');
  firstCardButton.addEventListener('click', () => {
    DOM.workSection.appendChild(DOM.createPopupWindow(projects[0]));
    //  Lister for click on close icon in popup container
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
cardOnHover();
executeEvent();
