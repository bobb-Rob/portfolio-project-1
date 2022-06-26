import closeIcon from '../icons/close-icon.png';


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
      const closeIconEl = createElement('img', 'close-icon');
      const closeWrapper = createElement(closeWrap, 'close-icon-wrapper');
      closeIconEl.src = closeIcon;
      closeIconEl.alt = 'close icon';
      closeWrapper.appendChild(closeIconEl);
      location.appendChild(closeWrapper);
    };
  
    // Projects card display function
    const cardContainer = document.getElementById('card-container');
    
    const createProjectCard = ({name, description, images, technologies, id }) => {
      const listItem = createElement('li', 'project-card');
      listItem.style.background = images.mobile;
      listItem.id = id;
  
      const projectName = createElement('h3');
      projectName.textContent = `${name}`;
  
      const projectDescription = createElement('p');
      projectDescription.textContent = `${description}`;
  
      const techListItem1 = createElement('li');
      techListItem1.textContent = `${technologies[0]}`;
      const techListItem2 = createElement('li');
      techListItem2.textContent = `${technologies[1]}`;
      const techListItem3 = createElement('li');
      techListItem3.textContent = `${technologies[2]}`;
      const techUL = createElement('ul', 'description-tags');
      techUL.append(techListItem1, techListItem2, techListItem3);
  
      const cardDescription = createElement('div', 'card-description');
      cardDescription.append(projectName, projectDescription, techUL);     
  
      const projectBtn = createElement('button', 'btn-card');
      projectBtn.classList.add('btn');
      projectBtn.type = 'button';
      projectBtn.textContent = 'See Project';
      listItem.append(cardDescription, projectBtn);     
      return listItem;
    };

    const insertFirstCard = ({name, description, images, technologies }) => {
        const firstCardEl = `
        <div class="featured">
              <div class="first-card-image-container">
                <img class="first-card-img-mobile" src=${images.mobile} alt="project image" />
                <img class="first-card-img-desktop" src=${images.desktop} alt="project image" />
              </div>
              <div class="first-card" id="7">
                <h3>${name}</h3>
                <p>
                  ${description}
                </p>
                <ul>
                ${technologies.map((tech) => `<li  class="tags">${tech}</li>`)}                  
                </ul>
                <button type="button" class="btn btn-feature">See Project</button>
              </div>
            </div>`;
        const myWork = document.querySelector('.my-works');
        myWork.insertAdjacentHTML("afterbegin", firstCardEl);
    }
  
    // Project card display map
    const displayProjects = (projects) => {
        projects.map((project) => cardContainer.appendChild(createProjectCard(project)));
    }
 
  
    // Project pop up window create function
    const createPopupWindow = ({name, description, images, technologies, liveLink, sourceFile }) => {
      const projectModal = createElement('div', 'project-modal');
      const popupContainer = createElement('div', 'popup-container');
      popupContainer.innerHTML = `
              <h2>${name}</h2>
              <ul class="tech-stack">
                ${technologies.map((tech) => `<li>${tech}</li>`)}
              </ul>
              <div class="popup-img-p">
                  <img src=${images.desktop} alt="${name}">
  
                  <div class="popup-btn-wrapper">
                      <p>${description}</p>
                      
                      <div class="pop-btn-wrap">
                        <button class="btn popup-btn" type="button">
                            <a href="${liveLink}">See Live
                            <img src="./icons/new-window-icon.svg" alt="New window icon">
                            </a>                        
                        </button>
                        <button class="btn popup-btn" type="button">
                            <a href="${sourceFile}">See Source
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
      insertFirstCard,
      displayProjects,
      hamburgerBtn,
      navLinksWrapper,
      cardContainer,
      projectBtns,
      workSection,
    };
  })();

  export default DOM