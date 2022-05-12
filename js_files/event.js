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
