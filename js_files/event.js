const executeEvent = (() => {
    
  // Add event listener to the hamburger btn
  DOM.hamburgerBtn.addEventListener('click', () => { 
    DOM.createCloseIcon(DOM.navLinksWrapper, 'li');   
    DOM.navLinksWrapper.classList.add('display-f');
   document.querySelector('.envelope').classList.add('display-n');
   // Add the click event on the close btn on menu
    document.querySelector('.close-icon').addEventListener('click', () => {     
      DOM.navLinksWrapper.classList.remove('display-f');
      document.querySelector('.envelope').classList.remove('display-n');
      document.querySelector('.close-icon-wrapper').remove();      
    });     
  });

   //Attach click events on all the "a" tags both desktop and mobile
   const navLinksArr = Array.from(document.querySelectorAll('li.insert-event > a'));    
   navLinksArr.forEach((link) => {
     link.addEventListener('click', function closeMenu() {
       DOM.navLinksWrapper.classList.remove('display-f'); // Remove display: flex !important class
       document.querySelector('.envelope').classList.remove('display-n');
       document.querySelector('.close-icon-wrapper').remove();
     });
   }); 
   
   
 
   


})();
