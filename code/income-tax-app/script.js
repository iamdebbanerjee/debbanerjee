


// User Input Variables

const calculateBtns = document.querySelectorAll('.calculate');
const okBtns = document.querySelectorAll('.save');
let userBasic = document.getElementById('march-basic-salary');
let userDA = document.getElementById('da-rate');
let userHRA = document.getElementById('hra-rate');
let userTPA = document.getElementById('tpa-rate');
let nextBasic = document.getElementById('next-basic-salary');
let nextDA  = document.getElementById('expected-da');

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
        localStorage.setItem('March Basic', userBasic.value);
        localStorage.setItem('Increment Month', document.querySelector('input[name="increment-month"]:checked').value);
        localStorage.setItem('Next Basic', nextBasic.value);
        localStorage.setItem('DA', userDA.value);
        localStorage.setItem('HRA', userHRA.value);
        localStorage.setItem('TPA', userTPA.value);
        
    });
 });



calculateBtns.forEach(function(calculateBtn){
        calculateBtn.addEventListener('click',  ()=> {
            let marchBasic = parseInt(localStorage.getItem('March Basic'));
            let marchDA = (parseInt(localStorage.getItem('DA'))) * marchBasic/100;
            let marchHRA = (parseInt(localStorage.getItem('HRA'))) * marchBasic/100;
            let marchTPA = (parseInt(localStorage.getItem('TPA'))) * (parseInt(localStorage.getItem('DA')))/100 + (parseInt(localStorage.getItem('TPA')));
            let marchGrossSalary = marchBasic + marchDA + marchHRA + marchTPA;
            localStorage.setItem('March DA', JSON.stringify(marchDA));
            localStorage.setItem('March HRA', JSON.stringify(marchHRA));
            localStorage.setItem('March TPA', JSON.stringify(marchTPA));
            localStorage.setItem('March Gross Salary', JSON.stringify(marchGrossSalary));
        });
    });
