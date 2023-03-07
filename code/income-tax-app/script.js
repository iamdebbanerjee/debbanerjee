
/* User Input Variables*/

// Action Buttons
const calculateBtns = document.querySelectorAll('.calculate');
const okBtns = document.querySelectorAll('.save');

// Input Fields Data
let userBasic = document.getElementById('march-basic-salary');
let userDA = document.getElementById('da-rate');
let userHRA = document.getElementById('hra-rate');
let userTPA = document.getElementById('tpa-rate');
let nextBasic = document.getElementById('next-basic-salary');
let nextDA  = document.getElementById('july-expected-da');
let userBonus = document.getElementById('bonus');
let userCEA = document.getElementById('cea');
let userArrears = document.getElementById('arrears');
let userLTC = document.getElementById('ltc');
let userLeaveEncashment = document.getElementById('leave-encashment');
let userOtherAdditionalPay = document.getElementById('other-additional-pay');
let userIncomeHouseProperty = document.getElementById('income-house-property');
let userIncomeBusinessProfession = document.getElementById('income-business-profession');
let userSTCG = document.getElementById('stcg');
let userLTCG = document.getElementById('ltcg');
let userIncomeOtherSources = document.getElementById('income-other-sources');
let userRentReceipt = document.getElementById('rent-receipt');
let userSrandardDeduction = document.getElementById('standard-deduction');
let userProfessionalTax = document.getElementById('p-tax');
let userGPF = document.getElementById('gpf-investment');


// Internal variables

let julyBasic = 0;
let januaryBasic = 0;
let julyDA = 0;
let januaryDA = 0;
let julyHRA = 0;
let januaryHRA = 0;
let julyTPA = 0;
let januaryTPA = 0;
let marchToJuneGrossSalary = 0;
let julyToDecGrossSalary = 0;
let janToFebGrossSalary = 0;
let yearlyGrossSalary = 0;



// Button events

 okBtns.forEach(function(okBtn) {
    okBtn.addEventListener('click', () => {
        localStorage.setItem('March Basic', userBasic.value);        
        localStorage.setItem('DA', userDA.value);
        localStorage.setItem('HRA', userHRA.value);
        localStorage.setItem('TPA', userTPA.value);
        localStorage.setItem('Increment Month', document.querySelector('input[name="increment-month"]:checked').value);
        localStorage.setItem('Next Basic', nextBasic.value);
        localStorage.setItem('Next DA', nextDA.value);



        // e.preventDefault();
    });
 });



calculateBtns.forEach(function(calculateBtn){
        calculateBtn.addEventListener('click',  ()=> {

            let incrementMonth = localStorage.getItem('Increment Month');
            // March to June Incomes
            let marchBasic = parseInt(localStorage.getItem('March Basic'));
            let marchDA = (parseInt(localStorage.getItem('DA'))) * marchBasic/100;
            let marchHRA = (parseInt(localStorage.getItem('HRA'))) * marchBasic/100;
            let marchTPA = (parseInt(localStorage.getItem('TPA'))) * (parseInt(localStorage.getItem('DA')))/100 + (parseInt(localStorage.getItem('TPA')));
            marchToJuneGrossSalary = (marchBasic + marchDA + marchHRA + marchTPA) * 4;


            // Save March to June Incomes to Local Storage
            localStorage.setItem('March DA', JSON.stringify(marchDA));
            localStorage.setItem('March HRA', JSON.stringify(marchHRA));
            localStorage.setItem('March TPA', JSON.stringify(marchTPA));
            localStorage.setItem('March to June Gross Salary', JSON.stringify(marchToJuneGrossSalary));


            // July to February Incomes
            if (incrementMonth === "July") {
                julyBasic = parseInt(localStorage.getItem('Next Basic'));
                januaryBasic = julyBasic;
                julyDA = julyBasic*((parseInt(localStorage.getItem('DA')) + parseInt(localStorage.getItem('Next DA')))/100);
                julyHRA = (julyBasic*parseInt(localStorage.getItem('HRA')))/100;
                julyTPA = parseInt(localStorage.getItem('TPA')) + (parseInt(localStorage.getItem('TPA'))*((parseInt(localStorage.getItem('DA')) + parseInt(localStorage.getItem('Next DA')))/100));
                januaryDA = januaryBasic*((parseInt(localStorage.getItem('DA')) + parseInt(localStorage.getItem('Next DA')))/100);
                januaryHRA = (januaryBasic*parseInt(localStorage.getItem('HRA')))/100;
                januaryTPA = parseInt(localStorage.getItem('TPA')) + (parseInt(localStorage.getItem('TPA'))*((parseInt(localStorage.getItem('DA'))+parseInt(localStorage.getItem('Next DA')))/100));
                julyToDecGrossSalary = (julyBasic + julyDA + julyHRA +julyTPA)*6;
                janToFebGrossSalary = (januaryBasic + januaryDA + januaryHRA + januaryTPA)*2;
                yearlyGrossSalary = marchToJuneGrossSalary + julyToDecGrossSalary + janToFebGrossSalary;

            } else {
                julyBasic = marchBasic;
                januaryBasic = parseInt(localStorage.getItem('Next Basic'));
                julyDA = julyBasic*((parseInt(localStorage.getItem('DA')) + parseInt(localStorage.getItem('Next DA')))/100);
                julyHRA = (julyBasic*parseInt(localStorage.getItem('HRA')))/100;
                julyTPA = parseInt(localStorage.getItem('TPA')) + (parseInt(localStorage.getItem('TPA'))*((parseInt(localStorage.getItem('DA')) + parseInt(localStorage.getItem('Next DA')))/100));
                januaryDA = januaryBasic*((parseInt(localStorage.getItem('DA')) + parseInt(localStorage.getItem('Next DA')))/100);
                januaryHRA = (januaryBasic*parseInt(localStorage.getItem('HRA')))/100;
                januaryTPA = parseInt(localStorage.getItem('TPA')) + (parseInt(localStorage.getItem('TPA'))*((parseInt(localStorage.getItem('DA')) + parseInt(localStorage.getItem('Next DA')))/100));
                julyToDecGrossSalary = (julyBasic + julyDA + julyHRA +julyTPA)*6;
                janToFebGrossSalary = (januaryBasic + januaryDA + januaryHRA + januaryTPA)*2;
                yearlyGrossSalary = marchToJuneGrossSalary + julyToDecGrossSalary + janToFebGrossSalary;
            }

            // Save July to Feb Incomes to Local Storage
            localStorage.setItem('July Basic', JSON.stringify(julyBasic));
            localStorage.setItem('July DA', JSON.stringify(julyDA));
            localStorage.setItem('July HRA', JSON.stringify(julyHRA));
            localStorage.setItem('July TPA', JSON.stringify(julyTPA));
            localStorage.setItem('July to December Gross Salary', JSON.stringify(julyToDecGrossSalary));
            localStorage.setItem('January Basic', JSON.stringify(januaryBasic));
            localStorage.setItem('January DA', JSON.stringify(januaryDA));
            localStorage.setItem('January HRA', JSON.stringify(januaryHRA));
            localStorage.setItem('January TPA', JSON.stringify(januaryTPA));
            localStorage.setItem('January to February Gross Salary', JSON.stringify(janToFebGrossSalary));
            localStorage.setItem("Yearly Gross Salary", yearlyGrossSalary);

        });
    });
