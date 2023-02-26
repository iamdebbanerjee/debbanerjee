// User Input Variables

const calculateBtns = document.querySelectorAll('.calculate');
const okBtns = document.querySelectorAll('.save');
let userBasic = document.getElementById('basic-salary');
let userDA = document.getElementById('da-rate');
let userHRA = document.getElementById('hra-rate');
let userTPA = document.getElementById('tpa-rate');

// calculateBtns[calculateBtns.length-1].addEventListener('click', () => {console.log(calculateBtns, okBtns, userBasic.value,userDA.value,userHRA.value, userTPA.value )});



// System variables

// let actualBasic = parseInt(localStorage.getItem('Basic'));
// let actualDA = (parseInt(localStorage.getItem('DA'))) * actualBasic/100;
// let actualHRA = (parseInt(localStorage.getItem('HRA'))) * actualBasic/100;
// let actualTPA = (parseInt(localStorage.getItem('TPA'))) * (parseInt(localStorage.getItem('DA')))/100 + (parseInt(localStorage.getItem('TPA')));
// let grossSalary = actualBasic + actualDA + actualHRA + actualTPA; 


// Button events

 okBtns.forEach(function(okBtn) {
    okBtn.addEventListener('click', () => {
        localStorage.setItem('Basic', userBasic.value);
        localStorage.setItem('DA', userDA.value);
        localStorage.setItem('HRA', userHRA.value);
        localStorage.setItem('TPA', userTPA.value);
    });
 });



calculateBtns.forEach(function(calculateBtn){
        calculateBtn.addEventListener('click',  ()=> {
            let actualBasic = parseInt(localStorage.getItem('Basic'));
            let actualDA = (parseInt(localStorage.getItem('DA'))) * actualBasic/100;
            let actualHRA = (parseInt(localStorage.getItem('HRA'))) * actualBasic/100;
            let actualTPA = (parseInt(localStorage.getItem('TPA'))) * (parseInt(localStorage.getItem('DA')))/100 + (parseInt(localStorage.getItem('TPA')));
            let grossSalary = actualBasic + actualDA + actualHRA + actualTPA;
            localStorage.setItem('Actual DA', JSON.stringify(actualDA));
            localStorage.setItem('Actual HRA', JSON.stringify(actualHRA));
            localStorage.setItem('Actual TPA', JSON.stringify(actualTPA));
            localStorage.setItem('Gross Salary', JSON.stringify(grossSalary));
        });
    });
