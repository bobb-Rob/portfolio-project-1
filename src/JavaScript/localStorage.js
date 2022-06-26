


const setLocalStore = (() => {
    function useStorageInfo() {
      const currentInfo = JSON.parse(localStorage.getItem('contactInfo'));
  
      document.getElementById('visitors-name').value = currentInfo.fullName;
      document.getElementById('visitors-email').value = currentInfo.email;
      document.getElementById('contact-text-area').value = currentInfo.message;
    }
  
    function setStorage() {
      const contactInfo = {
        fullName: document.getElementById('visitors-name').value,
        email: document.getElementById('visitors-email').value,
        message: document.getElementById('contact-text-area').value,
      };
      localStorage.setItem('contactInfo', JSON.stringify(contactInfo));
      useStorageInfo();
    }
  
    return { setStorage, useStorageInfo };
  })();

  export default setLocalStore;