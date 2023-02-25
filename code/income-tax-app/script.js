// User Input Variables

const calculateBtn = document.querySelectorAll('.calculate');
const okBtn = document.querySelectorAll('.save');
let userBasic = document.getElementById('basic-salary');
let userDA = document.getElementById('da-rate');
let userHRA = document.getElementById('hra-rate');
let userTPA = document.getElementById('tpa-rate');

// okBtn[1].addEventListener('click', () => {console.log(userBasic.value), console.log(userDA.value)});


// System variables

let actualBasic = Number(JSON.parse(localStorage.getItem('Basic')));
let actualDA = (Number(JSON.parse(localStorage.getItem('DA'))) * actualBasic)/100;
let actualHRA = (Number(JSON.parse(localStorage.getItem('HRA'))) * actualBasic)/100;
let actualTPA = ((Number(JSON.parse(localStorage.getItem('TPA')))) * (Number(JSON.parse(localStorage.getItem('DA'))))/100) + (Number(JSON.parse(localStorage.getItem('TPA'))));
let grossSalary = actualBasic + actualDA + actualHRA + actualTPA; 


// Button events

okBtn.forEach((save) => {
    save.addEventListener('click', saveLocalStorage);
});

calculateBtn.forEach(function(save){
    save.addEventListener('click',  calculateLocalStorage);
});

    



// Functions

function saveLocalStorage() {
    localStorage.setItem('Basic', JSON.stringify(userBasic.value));
    localStorage.setItem('DA', JSON.stringify(userDA.value));
    localStorage.setItem('HRA', JSON.stringify(userHRA.value));
    localStorage.setItem('TPA', JSON.stringify(userTPA.value));
}

function calculateLocalStorage(){
    localStorage.setItem('Actual DA', JSON.stringify(actualDA));
    localStorage.setItem('Actual HRA', JSON.stringify(actualHRA));
    localStorage.setItem('Actual TPA', JSON.stringify(actualTPA));
    localStorage.setItem('Gross Salary', JSON.stringify(grossSalary));
}




// Console Log test

console.log(actualBasic, actualDA, actualHRA, actualTPA, grossSalary);
console.log(typeof(actualBasic),typeof(actualDA), typeof(actualHRA), typeof(actualTPA), typeof(grossSalary));