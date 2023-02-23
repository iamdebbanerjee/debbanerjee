// Global variables declarations

const backBtn = document.querySelectorAll('.move-back');
const okBtn = document.querySelectorAll('.save-and-move-ahead');
const forwardBtn = document.querySelectorAll('.move-ahead');



// Button events

backBtn[1].addEventListener('click', () => {
   window.scroll({
    top: '-100vh',
    left: 0,
    behavior: 'smooth'
    });
 });
