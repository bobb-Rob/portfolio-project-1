

import { projects, projects2 } from './JavaScript/projects';
import displayImages from './JavaScript/images';
import './css/style.css';

displayImages();

const setLocalStore = (() => {
  function useStorageInfo() {
    const currentInfo = JSON.parse(localStorage.getItem('contactInfo'));

    document.getElementById('visitors-name').value = currentInfo.fullName;
    document.getElementById('visitors-email').value = currentInfo.email;
    document.getElementById('contact-text-area').value = currentInfo.message;
  }

  function setStorage() {
    const contactInfo = {
      fullName: document.getElementById('visitors-name').value,
      email: document.getElementById('visitors-email').value,
      message: document.getElementById('contact-text-area').value,
    };
    localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
    useStorageInfo();
  }

  return { setStorage, useStorageInfo };
})();

const DOM = (() => {
  // create Element function
  function createElement(elem, className = null) {
    const element = document.createElement(elem);
    if (className !== null) {
      element.classList.add(className);
    }
    return element;
  }

  // create close icon function
  const createCloseIcon = (location, closeWrap) => {
    const closeIcon = createElement('img', 'close-icon');
    const closeWrapper = createElement(closeWrap, 'close-icon-wrapper');
    closeIcon.src = './icons/close-icon.png';
    closeIcon.alt = 'close icon';
    closeWrapper.appendChild(closeIcon);
    location.appendChild(closeWrapper);
  };

  // Projects card display function
  const cardContainer = document.getElementById('card-container');
  const createProjectCard = (project) => {
    const listItem = createElement('li', 'project-card');
    listItem.style.background = `${project.featuredImage}`;
    listItem.id = project.id;

    const projectName = createElement('h3');
    projectName.textContent = `${project.name}`;

    const projectDescription = createElement('p');
    projectDescription.textContent = `${project.description}`;

    const techListItem1 = createElement('li');
    techListItem1.textContent = `${project.technologies[0]}`;
    const techListItem2 = createElement('li');
    techListItem2.textContent = `${project.technologies[1]}`;
    const techListItem3 = createElement('li');
    techListItem3.textContent = `${project.technologies[2]}`;
    const techUL = createElement('ul', 'description-tags');
    techUL.append(techListItem1,techListItem2,techListItem3)
    
    const cardDescription = createElement('div', 'card-description');
    cardDescription.appendChild(projectName);
    cardDescription.appendChild(projectDescription);
    cardDescription.appendChild(techUL);

    const projectBtn = createElement('button', 'btn-card');
    projectBtn.classList.add('btn');
    projectBtn.type = 'button';
    projectBtn.textContent = 'See Project';
    listItem.appendChild(cardDescription);
    listItem.appendChild(projectBtn);
    return listItem;
  };

  // Project card display map
  projects.map((project) => cardContainer.appendChild(createProjectCard(project)));

  // Project pop up window create function
  const createPopupWindow = (project) => {
    const projectModal = createElement('div', 'project-modal');
    const popupContainer = createElement('div', 'popup-container');
    popupContainer.innerHTML = `
            <h2>${project.popupName}</h2>
            <ul class="tech-stack">
              ${project.technologies.map((tech) => `<li>${tech}</li>`)}
            </ul>
            <div class="popup-img-p">
                <img src="${project.popupImage}" alt="${project.name}">

                <div class="popup-btn-wrapper">
                    <p>${project.popupDescription}</p>
                    
                    <div class="pop-btn-wrap">
                      <button class="btn popup-btn" type="button">
                          <a href="${project.liveLink}">See Live
                          <img src="./icons/new-window-icon.svg" alt="New window icon">
                          </a>                        
                      </button>
                      <button class="btn popup-btn" type="button">
                          <a href="${project.sourceFile}">See Source
                          <img src="./icons/github-icon.svg" alt="github icon">
                          </a>                        
                      </button>
                    </div>
                </div>
            </div>
        `;
    projectModal.appendChild(popupContainer);
    return projectModal;
  };

  // elements
  const hamburgerBtn = document.querySelector('.hamburger-btn'); // Hamburger
  const navLinksWrapper = document.getElementById('nav-links'); // Menu link wrapper
  const projectBtns = document.querySelectorAll('.btn-card'); // See project btns
  const workSection = document.getElementById('recent-works'); // portfolio Work section

  return {
    createElement,
    createCloseIcon,
    createPopupWindow,
    hamburgerBtn,
    navLinksWrapper,
    cardContainer,
    projectBtns,
    workSection,
  };
})();

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
formValidation();

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

  const cardBtnArr = Array.from(DOM.projectBtns);
  cardBtnArr.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // Filter the project by id
      const project = projects.filter(
        (proj) => proj.id === e.target.parentElement.id,
      );
      DOM.workSection.appendChild(DOM.createPopupWindow(project[0]));
      //  Lister for click on close icon in popup container
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
    DOM.workSection.appendChild(DOM.createPopupWindow(projects2[0]));
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

executeEvent();
