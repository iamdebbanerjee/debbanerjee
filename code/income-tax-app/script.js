
/* User Input Variables*/

// Action Buttons
// const calculateBtn = document.querySelector('.calculate');

const saveSalaryBtn = document.getElementById('save-salary');
const saveHousePropertyIncomeBtn = document.getElementById('save-house-property-income');
const saveBusinessIncomeBtn = document.getElementById('save-business-income');
const saveCapitalGainsIncomeBtn = document.getElementById('save-capital-gains');
const saveOtherSourcesIncomeBtn = document.getElementById('save-other-sources-income');
const calcGrossSalaryBtn = document.getElementById('calculate-gross-salary');
const saveMonthlyRentPaidBtn = document.getElementById('save-monthly-rent-paid');
const saveStandardDeductionBtn = document.getElementById('save-standard-deduction');
const savePTaxBtn = document.getElementById('save-p-tax');
const savePFTypeBtn = document.getElementById('save-pf-type');
const saveGPFContributionBtn = document.getElementById('save-gpf-contribution');
const saveHBAPrincipalBtn = document.getElementById('save-hba-principal');
const saveHBAInterestBtn = document.getElementById('save-hba-interest');
const save80cBtn = document.getElementById('save-80c');
const saveMedicalPremiumBtn = document.getElementById('save-medical-premium');
const saveVolutaryNPSBtn = document.getElementById('save-voluntary-nps');
const saveSavingsInterestBtn = document.getElementById('save-savings-interest')



// Input Fields Data
let userBasic = document.getElementById('march-basic-salary');
let userDA = document.getElementById('da-rate');
let userHRA = document.getElementById('hra-rate');
let userTPA = document.getElementById('tpa-rate');
let userIncrementMonth;
let nextBasic = document.getElementById('next-basic-salary');
let nextDA  = document.getElementById('july-expected-da');
let userBonus = document.getElementById('bonus');
let userCEA = document.getElementById('cea');
let userArrears = document.getElementById('arrears');
let userLTC = document.getElementById('ltc');
let userLeaveEncashment = document.getElementById('leave-encashment');
let userOtherAdditionalPay = document.getElementById('other-additional-pay');
let userIncomeHouseProperty;
let userIncomeBusinessProfession;
let userSTCG;
let userLTCG;
let userIncomeOtherSources;
let userHraCityType;
let userRentReceipt = document.getElementById('rent-receipt');
let userStandardDeduction = document.getElementById('standard-deduction');
let userProfessionalTax;
let userPFType;
let userGPF;
let yearlyGPFSavings;
let userYearlyHBAPrincipal;
let userYearlyHBAInterest;
let userLifeInsurance;
let userPPF;
let userELSS;
let userOtherTTS;
let userMediclaim;
let userVolNPSContribution = 0;
let userSavingsInterest;

// Internal variables

let marchBasic = 0;
let marchDA = 0;
let marchHRA = 0;
let marchTPA = 0;
let julyBasic = 0;
let januaryBasic = 0;
let julyDA = 0;
let januaryDA = 0;
let julyHRA = 0;
let januaryHRA = 0;
let julyTPA = 0;
let januaryTPA = 0;
let incrementMonth;
let marchToJuneGrossSalary = 0;
let julyToDecGrossSalary = 0;
let janToFebGrossSalary = 0;
let yearlyGrossSalary = 0;
let incomeUnderSalaryHead = 0;
let incomeUnderHousePropertyHead = 0;
let yearlyHraReceived = 0;
let yearlyRentPaidInExcess = 0;
let hraCityFactor = 0;
let hraSalaryCap = 0;
let finalHRARelief = 0;
let userYearlyNPSContribution = 0;
let empYearlyNPSContribution = 0;

/* Calculation Functions */

// Finding the smallest one between 3 given values

function leastAmong3 (val1, val2, val3) {
    let checkerValue = 0;
    if (val1 <= val2 ){
        checkerValue = val1;
    } else {
        checkerValue = val2;
    }
    if(val3 <= checkerValue){
        checkerValue = val3;
    }
    return checkerValue;
}

// Calculate Yearly Gross Salary

function calculateGrossSalary(){
    incrementMonth = localStorage.getItem('Increment Month');
    
    // March to June Salary Incomes
    marchBasic = parseInt(localStorage.getItem('March Basic'));
    marchDA = (parseInt(localStorage.getItem('DA'))) * marchBasic/100;
    marchHRA = (parseInt(localStorage.getItem('HRA'))) * marchBasic/100;
    marchTPA = (parseInt(localStorage.getItem('TPA'))) * (parseInt(localStorage.getItem('DA')))/100 + (parseInt(localStorage.getItem('TPA')));
            marchToJuneGrossSalary = (marchBasic + marchDA + marchHRA + marchTPA) * 4;


    // Save March to June Incomes to Local Storage
    localStorage.setItem('March DA', JSON.stringify(marchDA));
    localStorage.setItem('March HRA', JSON.stringify(marchHRA));
    localStorage.setItem('March TPA', JSON.stringify(marchTPA));
    localStorage.setItem('March to June Gross Salary', JSON.stringify(marchToJuneGrossSalary));


    // July to February Salary Incomes
    if (incrementMonth === "July") {
        julyBasic = parseInt(localStorage.getItem('Next Basic'));
        januaryBasic = julyBasic;
        julyDA = (julyBasic*(parseInt(localStorage.getItem('DA')) + parseInt(localStorage.getItem('Next DA'))))/100;
        julyHRA = (julyBasic*parseInt(localStorage.getItem('HRA')))/100;
        julyTPA = parseInt(localStorage.getItem('TPA')) + (parseInt(localStorage.getItem('TPA'))*(parseInt(localStorage.getItem('DA')) + parseInt(localStorage.getItem('Next DA')))/100);
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
}

// Calculate HRA Exemption

function calcHraExemption() {
    /* HRA ExemPTION calculation and Save to LocalStorage */
    // Total Yearly HRA received
    yearlyHraReceived = (parseInt(localStorage.getItem('March HRA'))* 4) + 
                        (parseInt(localStorage.getItem('July HRA'))* 6) + 
                        (parseInt(localStorage.getItem('January HRA'))* 2);
    console.log(yearlyHraReceived);
    // Yearly Rent paid in Excess of 10% of Salary (Basic + DA)
    yearlyRentPaidInExcess = (
        parseInt(localStorage.getItem('Monthly Rent Paid')) * 12
    ) - (
        (
            ((parseInt(localStorage.getItem('March Basic'))+ parseInt(localStorage.getItem('March DA'))) * 4) + 
            ((parseInt(localStorage.getItem('July Basic')) + parseInt(localStorage.getItem('July DA'))) * 6) + 
            ((parseInt(localStorage.getItem('January Basic')) + parseInt(localStorage.getItem('January DA'))) * 2)
        ) * 0.1
    );
    console.log(yearlyRentPaidInExcess);

    // HRA City Factor and 40% or 50% of salary
    if (localStorage.getItem('Rent City Type') === "Metro") {
        hraCityFactor = 0.5;
    } else {
        hraCityFactor = 0.4;
    }
    hraSalaryCap = (
                    ((parseInt(localStorage.getItem('March Basic'))+ parseInt(localStorage.getItem('March DA'))) * 4) + 
                    ((parseInt(localStorage.getItem('July Basic')) + parseInt(localStorage.getItem('July DA'))) * 6) + 
                    ((parseInt(localStorage.getItem('January Basic')) + parseInt(localStorage.getItem('January DA'))) * 2)) * hraCityFactor;
    console.log(hraSalaryCap);
    finalHRARelief = leastAmong3(yearlyHraReceived, yearlyRentPaidInExcess, hraSalaryCap);
    if (finalHRARelief < 0) {
        finalHRARelief = 0;
    }
    localStorage.setItem('Final HRA Exemption', finalHRARelief);
}



/* Button events */

// Save Salary Button
saveSalaryBtn.addEventListener('click', () => {
        userIncrementMonth = document.querySelector('input[name="increment-month"]:checked');

        localStorage.setItem('March Basic', userBasic.value);        
        localStorage.setItem('DA', userDA.value);
        localStorage.setItem('HRA', userHRA.value);
        localStorage.setItem('TPA', userTPA.value);
        localStorage.setItem('Increment Month', JSON.stringify(userIncrementMonth.value));
        localStorage.setItem('Next Basic', nextBasic.value);
        localStorage.setItem('Next DA', nextDA.value);
        localStorage.setItem('Bonus', userBonus.value);
        localStorage.setItem('CEA', userCEA.value);
        localStorage.setItem('Arrears', userArrears.value);
        localStorage.setItem('LTC', userLTC.value);
        localStorage.setItem('Leave Encashment', userLeaveEncashment.value);
        localStorage.setItem('Other Pay', userOtherAdditionalPay.value);
        

    
        
        // localStorage.setItem('Yearly Mediclaim Premium', userMediclaim.value);
        // localStorage.setItem('Yearly Savings Interest', userSavingsInterest.value);
        }
    );

// Save House Property Income Button
    saveHousePropertyIncomeBtn.addEventListener('click', () =>{
            userIncomeHouseProperty = document.getElementById('income-house-property');
            localStorage.setItem('House Property Income', userIncomeHouseProperty.value);
        }
    );

// Save Business & Profession Income
    saveBusinessIncomeBtn.addEventListener('click', () => {
        userIncomeBusinessProfession = document.getElementById('income-business-profession');
        localStorage.setItem('Business Profession Income', userIncomeBusinessProfession.value);
        }
    );

// Save Capital Gains Income Button
    saveCapitalGainsIncomeBtn.addEventListener('click', () => {
            userSTCG = document.getElementById('stcg');
            userLTCG = document.getElementById('ltcg');
            localStorage.setItem('STCG', userSTCG.value);
            localStorage.setItem('LTCG', userLTCG.value);
        }
    );

// Save Other Sources Income Button
    saveOtherSourcesIncomeBtn.addEventListener('click', () => {
            userIncomeOtherSources = document.getElementById('income-other-sources');
            localStorage.setItem('Other Source Income', userIncomeOtherSources.value);
        }
    );

//  Calculate Gross Salary
    calcGrossSalaryBtn.addEventListener('click', calculateGrossSalary);

// Save Monthly Rent Paid & Calculate HRA Exemption Amount

    saveMonthlyRentPaidBtn.addEventListener('click', () => {
    // Get HRA related user inputs and store them to Local STorage
    userHraCityType = (document.querySelector('input[name="hra-city-type"]:checked')).value;
    userRentReceipt = document.getElementById('rent-receipt').value;
    localStorage.setItem('Rent City Type', userHraCityType);
    localStorage.setItem('Monthly Rent Paid', userRentReceipt);

    // Call HRA calculation function

    calcHraExemption();
    });

// Calculate NPS contributions

function calcNPSContribution(){
    if(localStorage.getItem('User PF Type') === 'NPS') {
        userYearlyNPSContribution = (
            ((parseInt(localStorage.getItem('March Basic')) + parseInt(localStorage.getItem('March DA')))*4) +
            ((parseInt(localStorage.getItem('July Basic'))+ parseInt(localStorage.getItem('July DA')))*6) +
            ((parseInt(localStorage.getItem('January Basic')) + parseInt(localStorage.getItem('January DA')))*2)
        )*0.10;

        empYearlyNPSContribution = (
            ((parseInt(localStorage.getItem('March Basic')) + parseInt(localStorage.getItem('March DA')))*4) +
            ((parseInt(localStorage.getItem('July Basic')) + parseInt(localStorage.getItem('July DA')))*6) +
            ((parseInt(localStorage.getItem('January Basic')) + parseInt(localStorage.getItem('January DA')))*2)
        )*0.14;
    } else {
        userYearlyNPSContribution = 0;
        empYearlyNPSContribution = 0;
    }
    localStorage.setItem('Employee NPS Contribution', userYearlyNPSContribution);
    localStorage.setItem('Employer NPS Contribution', empYearlyNPSContribution);
}

// Save Standard Deduction
saveStandardDeductionBtn.addEventListener('click', () => {
        localStorage.setItem('Standard Deduction', userStandardDeduction.value);
    }
);

// Save Professional Tax
savePTaxBtn.addEventListener('click', () => {
    userProfessionalTax = document.getElementById('monthly-p-tax');
    localStorage.setItem('Yearly Professional Tax', userProfessionalTax.value*12);
}
);

// PF Type setting along with div#gpf scroll behaviour
savePFTypeBtn.addEventListener('click', () => {
    userPFType = document.querySelector('input[name="pf-type"]:checked').value;
    localStorage.setItem('User PF Type', userPFType);
});

// Save GPF contribution
saveGPFContributionBtn.addEventListener('click', () => {
    userGPF = document.getElementById('gpf-investment').value;
    yearlyGPFSavings = userGPF * 12;


    localStorage.setItem('Yearly GPF Savings', yearlyGPFSavings);
});

// Save Home Loan Principal and Interest
saveHBAPrincipalBtn.addEventListener('click', () => {
    userYearlyHBAPrincipal = document.getElementById('hba-principal').value;
    localStorage.setItem('Yearly HBA Principal', userYearlyHBAPrincipal);
});

saveHBAInterestBtn.addEventListener('click', () => {
    userYearlyHBAInterest = document.getElementById('hba-interest').value;
    localStorage.setItem('Yearly HBA Interest', userYearlyHBAInterest);
});

// Save LIC, PPF, ELSS, Other Schemes under 80C

save80cBtn.addEventListener('click', () => {
    userLifeInsurance = document.getElementById('life-insurance').value;
    userPPF = document.getElementById('ppf-investment').value;
    userELSS = document.getElementById('elss-investment').value;
    userOtherTTS = document.getElementById('tax-free-schemes-total').value;

    localStorage.setItem('Yearly Life Insurance Premium', userLifeInsurance);
    localStorage.setItem('Yearly PPF Investment', userPPF);
    localStorage.setItem('Yearly ELSS Investment', userELSS);
    localStorage.setItem('Yearly Other TAX Savings', userOtherTTS);
});

// Save 80D Medical Insurance Premium
saveMedicalPremiumBtn.addEventListener('click', () => {
    userMediclaim = document.getElementById('medical-insurance').value;
    localStorage.setItem('Yearly Medical Premium', userMediclaim);
});


// Save NPS Contribution
saveVolutaryNPSBtn.addEventListener('click', () => {
    userVolNPSContribution = document.getElementById('nps-80ccd-1b').value;
    localStorage.setItem('NPS 80 CCD 1B', userVolNPSContribution);
    calcNPSContribution();
});

// Savings account interest
saveSavingsInterestBtn.addEventListener('click', () => {
    userSavingsInterest = document.getElementById('savings-interest').value;
    localStorage.setItem('Yearly Savings Interest', userSavingsInterest);
});