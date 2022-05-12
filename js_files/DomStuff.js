

const DOM = (() => {
    // create Element function
    function createElement(elem, className = null) {
        const element = document.createElement(elem);
        if(className !== null) {       
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
    }   
      
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
              techUL.appendChild(techListItem1)
              techUL.appendChild(techListItem2)
              techUL.appendChild(techListItem3);          
        
        const cardDescription = createElement('div', 'card-description');
              cardDescription.appendChild(projectName);
              cardDescription.appendChild(projectDescription);
              cardDescription.appendChild(techUL);

              
        const projectBtn = createElement('button',"btn-card");
              projectBtn.classList.add('btn')
              projectBtn.type = 'button';
              projectBtn.textContent = 'See Project'
              listItem.appendChild(cardDescription);
              listItem.appendChild(projectBtn);             
              console.log(listItem);
              return listItem;
      }

      // Project card display map
      projects.map(project => {
        return cardContainer
        .appendChild(createProjectCard(project.name, 
          project.description, project.featuredImage, project.technologies, project.id));
      });

      // Project pop up window create function
      const createPopupWindow = (projName, techStack, popupImage, description ) => {
        const projectModal = createElement('div', 'project-modal');
        const popupContainer = createElement('div', "popup-container");  
        popupContainer.innerHTML = `       
            <h2>${projName}</h2>
            <ul class="tech-stack">
              ${techStack.map(tech => `<li>${tech}</li>`)}
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
        `
        projectModal.appendChild(popupContainer);        
        return projectModal;
      }

      // elements
    const hamburgerBtn = document.querySelector('.hamburger-btn'); // Hamburger
    const navLinksWrapper = document.getElementById('nav-links'); // Menu link wrapper
    const projectBtns = document.querySelectorAll('.btn-card'); // See project btns
    const workSection = document.getElementById('recent-works');  // portfolio Work section

    

      return { createElement, 
               createCloseIcon, 
               createPopupWindow,
               hamburgerBtn,
               navLinksWrapper, 
               cardContainer, 
               projectBtns, 
               workSection
                }

})();