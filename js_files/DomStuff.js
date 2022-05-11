

const DOM = (() => {
    
    function createElement(elem, className = '') {
        const element = document.createElement(elem);
        element.classList.add(className);
        return element;
      }
      
    
    const createCloseIcon = (location, closeWrap) => {
        const closeIcon = createElement('img', 'close-icon');
        const closeWrapper = createElement(closeWrap, 'close-icon-wrapper');
        closeIcon.src = './icons/close-icon.png';
        closeIcon.alt = 'close icon';
        closeWrapper.appendChild(closeIcon);
        location.appendChild(closeWrapper);
    }   

    // Hamburger elements
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navLinksWrapper = document.getElementById('nav-links');

  
    // Projects card display
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = projects.map(project => {
        return `
        <li class="project-card" style = "background:${project.featuredImage}">
            <div class="card-description">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <ul class="description-tags">${
                  project.technologies.map(tech => {
                    return `
                    <li>${tech}</li>             
                    `
                  })
                }                
                </ul>
            </div>
            <button class="btn btn-card" type="button">See Project</button>
        </li>
        `
      });
     




      return { createElement, createCloseIcon, hamburgerBtn, navLinksWrapper, cardContainer }

})();