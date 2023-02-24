// Global variables declarations

const okBtn = document.querySelectorAll('.save');
let userBasic = document.getElementById('basic-salary');
let userDA = document.getElementById('da-rate');
let userHRA = document.getElementById('hra-rate');
let userTPA = document.getElementById('tpa-rate');

// okBtn[1].addEventListener('click', () => {console.log(userBasic.value), console.log(userDA.value)});


// Button events

okBtn.forEach((save) => {
    save.addEventListener('click', saveLocalStorage);
})


// Functions

function saveLocalStorage() {
    localStorage.setItem('Basic', JSON.stringify(userBasic.value));
    localStorage.setItem('DA', JSON.stringify(userDA.value));
    localStorage.setItem('HRA', JSON.stringify(userHRA.value));
    localStorage.setItem('TPA', JSON.stringify(userTPA.value));
}

