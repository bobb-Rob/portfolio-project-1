const executeEvent = () => {
  function createElement(elem, className) {
    const closeIcon = document.createElement(elem);
    closeIcon.classList.add(className);
    return closeIcon;
  }

  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const navLinksWrapper = document.getElementById('nav-links');

  hamburgerBtn.addEventListener('click', () => {
    const closeIcon = createElement('img', 'close-icon');
    const crossWrapper = createElement('li', 'close-icon-wrapper');
    closeIcon.src = './icons/close-icon.png';
    closeIcon.alt = 'close icon';
    crossWrapper.appendChild(closeIcon);
    navLinksWrapper.appendChild(crossWrapper);
    navLinksWrapper.style.display = 'flex';
    navLinksWrapper.lastElementChild.previousElementSibling.style.display =
      'none';

    closeIcon.addEventListener('click', () => {
      navLinksWrapper.style.display = 'none';
      envelopeElem.style.display = 'block';
      crossWrapper.remove();
    });

    const navlinks = document.querySelectorAll('li.section-link > a');
    const navLinksArr = Array.from(navlinks);
    navLinksArr.forEach((link) => {
      link.addEventListener('click', () => {
        navLinksWrapper.style.display = 'none';
        crossWrapper.remove();
      });
    });

    console.log(navLinksArr);
  });
};

executeEvent();
