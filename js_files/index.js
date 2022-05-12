const projects = [
  {
    name: 'Data Dashboard Health Care',
    popupName: 'Multi Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
    featuredImage: 'url(./images/project-card-img.svg)',
    popupDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
      make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    popupImage: './images/DesktopPopup.svg',
    technologies: ['html', 'bootstrap', 'ruby and rails'],
    liveLink: 'https://bobb-rob.github.io/portfolio-project-1/',
    sourceFile: 'https://github.com/bobb-rob/portfolio-project-1',
    id: '1',
  },
  {
    name: 'Website Portfolio',
    popupName: 'Multi Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
    featuredImage: 'url(./images/project-card-img.svg)',
    popupDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
      make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    popupImage: './images/DesktopPopup.svg',
    technologies: ['html', 'bootstrap', 'ruby and rails'],
    liveLink: 'https://bobb-rob.github.io/portfolio-project-1/',
    sourceFile: 'https://github.com/bobb-rob/portfolio-project-1',
    id: '2',
  },
  {
    name: 'Profesional Art Printing Data',
    popupName: 'Multi Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
    featuredImage: 'url(./images/project-card-img.svg)',
    popupDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
      make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    popupImage: './images/DesktopPopup.svg',
    technologies: ['html', 'bootstrap', 'ruby and rails'],
    liveLink: 'https://bobb-rob.github.io/portfolio-project-1/',
    sourceFile: 'https://github.com/bobb-rob/portfolio-project-1',
    id: '3',
  },
  {
    name: 'Profesional Art Printing Data',
    popupName: 'Multi Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
    featuredImage: 'url(./images/project-card-img.svg)',
    popupDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
      make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    popupImage: './images/DesktopPopup.svg',
    technologies: ['html', 'bootstrap', 'ruby and rails'],
    liveLink: 'https://bobb-rob.github.io/portfolio-project-1/',
    sourceFile: 'https://github.com/bobb-rob/portfolio-project-1',
    id: '4',
  },
  {
    name: 'Profesional Art Printing Data',
    popupName: 'Multi Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
    featuredImage: 'url(./images/project-card-img.svg)',
    popupDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
      make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    popupImage: './images/DesktopPopup.svg',
    technologies: ['html', 'bootstrap', 'ruby and rails'],
    liveLink: 'https://bobb-rob.github.io/portfolio-project-1/',
    sourceFile: 'https://github.com/bobb-rob/portfolio-project-1',
    id: '5',
  },
  {
    name: 'Profesional Art Printing Data',
    popupName: 'Multi Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
    featuredImage: 'url(./images/project-card-img.svg)',
    popupDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
      make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    popupImage: './images/DesktopPopup.svg',
    technologies: ['html', 'bootstrap', 'ruby and rails'],
    liveLink: 'https://bobb-rob.github.io/portfolio-project-1/',
    sourceFile: 'https://github.com/bobb-rob/portfolio-project-1',
    id: '6',
  },
];

const projects2 = [{
  name: 'Profesional Art Printing Data',
  popupName: 'Multi Post Stories',
  description:
    "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard",
  featuredImage: 'url(./images/project-card-img.svg)',
  popupDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
    make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
  popupImage: './images/DesktopPopup.svg',
  technologies: ['html', 'bootstrap', 'ruby and rails'],
  liveLink: 'https://bobb-rob.github.io/portfolio-project-1/',
  sourceFile: 'https://github.com/bobb-rob/portfolio-project-1',
  id: 'x1',
}];

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
};
executeEvent();
