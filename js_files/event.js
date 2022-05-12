const executeEvent = (() => {
    
  // Add event listener to the hamburger btn
  DOM.hamburgerBtn.addEventListener('click', () => { 
    DOM.createCloseIcon(DOM.navLinksWrapper, 'li');   
    DOM.navLinksWrapper.classList.add('display-f');
    document.querySelector('.envelope').classList.add('display-n');
    // Add the click event on the close btn on menu
    const hamburgerCloseIcon =  document.querySelector('img.close-icon');
    hamburgerCloseIcon.addEventListener('click', () => {     
      DOM.navLinksWrapper.classList.toggle('display-f');
      const mailIcon = document.querySelector('.envelope');
      mailIcon.classList.toggle('display-n');
      document.querySelector('.close-icon-wrapper').remove();      
    });     
  });

   //Attach click events on all the "a" tags both desktop and mobile
   const navLinksArr = Array.from(document.querySelectorAll('li.insert-event > a'));
   console.log(navLinksArr)   
   navLinksArr.forEach((link) => {
     link.addEventListener('click', () => {
      if(window.innerWidth < 768){
        DOM.navLinksWrapper.classList.toggle('display-f'); // Remove display: flex !important class
      }         
       console.log('navlink clicked')    
     });
   }); 
   
   
   const cardBtnArr = Array.from(DOM.projectBtns);   
   cardBtnArr.forEach((btn) => {     
     btn.addEventListener('click', (e) => {
       const project = projects.filter(proj => {        
         return proj.id === e.target.parentElement.id //Filter the project by id
        });
      const i = project[0]; 
       DOM.workSection.appendChild(DOM.createPopupWindow(i.name,i.technologies, i.popupImage, i.description));
       
       DOM.createCloseIcon(document.querySelector('.popup-container'), 'span');
       document.querySelector('span.close-icon-wrapper').addEventListener('click', () => {
         document.querySelector('.project-modal').remove();
       })
     });
   });
 
   


})();
