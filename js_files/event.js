const hamburgerBtn = document.querySelector('.hamburger-btn');
const navLinksWrapper = document.getElementById('nav-links');

hamburgerBtn.addEventListener('click', () => {
  navLinksWrapper.style.display = 'flex';
  navLinksWrapper.lastElementChild.style.display = 'none';
});
