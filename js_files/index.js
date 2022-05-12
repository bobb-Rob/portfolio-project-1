const projects = [
  {
    name: 'Data Dashboard Health Care',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
    featuredImage: 'url(./images/project-card-img.svg)',
    popupImage: './images/mobilePop-up.svg',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://bobb-rob.github.io/portfolio-project-1/',
    sourceFile: 'https://github.com/bobb-rob/portfolio-project-1',
    id: '1',
  },
  {
    name: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
    featuredImage: 'url(./images/project-card-img.svg)',
    popupImage: './images/mobilePop-up.svg',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://bobb-rob.github.io/portfolio-project-1/',
    sourceFile: 'https://github.com/bobb-rob/portfolio-project-1',
    id: '2',
  },
  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
    featuredImage: 'url(./images/project-card-img.svg)',
    popupImage: './images/mobilePop-up.svg',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://bobb-rob.github.io/portfolio-project-1/',
    sourceFile: 'https://github.com/bobb-rob/portfolio-project-1',
    id: '3',
  },
  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
    featuredImage: 'url(./images/project-card-img.svg)',
    popupImage: './images/mobilePop-up.svg',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://bobb-rob.github.io/portfolio-project-1/',
    sourceFile: 'https://github.com/bobb-rob/portfolio-project-1',
    id: '4',
  },
  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
    featuredImage: 'url(./images/project-card-img.svg)',
    popupImage: './images/mobilePop-up.svg',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://bobb-rob.github.io/portfolio-project-1/',
    sourceFile: 'https://github.com/bobb-rob/portfolio-project-1',
    id: '5',
  },
  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
    featuredImage: 'url(./images/project-card-img.svg)',
    popupImage: './images/mobilePop-up.svg',
    technologies: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://bobb-rob.github.io/portfolio-project-1/',
    sourceFile: 'https://github.com/bobb-rob/portfolio-project-1',
    id: '6',
  },

];

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
  const createProjectCard = (projName, description, imageURL, tech, projId) => {
    const listItem = createElement('li', 'project-card');
    listItem.style.background = `${imageURL}`;
    listItem.id = projId;

    const projectName = createElement('h3');
    projectName.textContent = `${projName}`;

    const projectDescription = createElement('p');
    projectDescription.textContent = `${description}`;

    const techListItem1 = createElement('li');
    techListItem1.textContent = `${tech[0]}`;
    const techListItem2 = createElement('li');
    techListItem2.textContent = `${tech[1]}`;
    const techListItem3 = createElement('li');
    techListItem3.textContent = `${tech[2]}`;
    const techUL = createElement('ul', 'description-tags');
    techUL.appendChild(techListItem1);
    techUL.appendChild(techListItem2);
    techUL.appendChild(techListItem3);

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
  projects.map((project) => cardContainer
    .appendChild(createProjectCard(project.name,
      project.description, project.featuredImage, project.technologies, project.id)));

  // Project pop up window create function
  const createPopupWindow = (projName, techStack, popupImage, description) => {
    const projectModal = createElement('div', 'project-modal');
    const popupContainer = createElement('div', 'popup-container');
    popupContainer.innerHTML = `       
            <h2>${projName}</h2>
            <ul class="tech-stack">
              ${techStack.map((tech) => `<li>${tech}</li>`)}
            </ul>
            <div class="popup-img-p">
                <img src="${popupImage}" alt="${projName}">

                <div class="popup-btn-wrapper">
                    <p>${description}</p>
                    
                    <button class="btn popup-btn" type="button">
                        <span>See Live</span>
                        <img src="./icons/new-window-icon.svg" alt="New window icon">
                    </button>
                    <button class="btn popup-btn" type="button">
                        <span>See Source</span>
                        <img src="./icons/github-icon.svg" alt="github icon">
                    </button>
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
  const navLinksArr = Array.from(document.querySelectorAll('li.insert-event > a'));
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
      const project = projects.filter((proj) => proj.id === e.target.parentElement.id);
      const i = project[0];
      DOM.workSection
        .appendChild(DOM.createPopupWindow(i.name, i.technologies, i.popupImage, i.description));

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
};
executeEvent();
