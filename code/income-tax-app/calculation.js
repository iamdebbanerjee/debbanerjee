
/*********************************************************************************/
/*                                  income tax form page                                   */
/********************************************************************************/

/* User Input Variables*/

// Action Buttons
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
const saveParentsMedicalPremiumBtn = document.getElementById('save-medical-premium-parents');
const saveVolutaryNPSBtn = document.getElementById('save-voluntary-nps');
const saveSavingsInterestBtn = document.getElementById('save-savings-interest');
const finalSubmitBtn = document.getElementById('final-submit');



// Input Fields Data
let userBasic = document.getElementById('march-basic-salary');
let userDA = document.getElementById('da-rate');
let userHRA = document.getElementById('hra-rate');
let userTPA = document.getElementById('tpa-rate');
let userIncrementMonth;
let nextBasic = document.getElementById('next-basic-salary');
let nextDA = document.getElementById('july-expected-da');
let userBonus = document.getElementById('bonus');
let userCEA = document.getElementById('cea');
let userNumberOfChildren = document.getElementById('how-many-children');
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
let userTaxFreeMediclaimPremium = 0;
let userParentsMediclaim = 0;
let userParentsSeniorCitizen;
let taxFreeParentsMediclaim = 0;
let userVolNPSContribution = 0;
let userSavingsInterest;
let oldAnnualTaxableIncome = 0;
let newAnnualTaxableIncome = 0;

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
let incrementMonth = "July";
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
let taxFreeSavingsInterest = 0;
let taxableSavingsInterest = 0;
let taxFreeCEA;
let taxableCEA;
let taxFreeArrear;
let taxableArrear;
let totalCapitalGainIncome = 0;
let homeLoanInterestTaxFreeLimit = 200000;
let max80cLimit = 150000;
const newRegimeTaxSlab1 = 300000;
const newRegimeTaxSlab2 = 600000;
const newRegimeTaxSlab3 = 900000;
const newRegimeTaxSlab4 = 1200000;
const newRegimeTaxSlab5 = 1500000;
const oldRegimeTaxSlab1 = 250000;
const oldRegimeTaxSlab2 = 500000;
const oldRegimeTaxSlab3 = 1000000;
let newRegimeTaxRate1 = 0.05;
let newRegimeTaxRate2 = 0.1;
let newRegimeTaxRate3 = 0.15;
let newRegimeTaxRate4 = 0.2;
let newRegimeTaxrate5 = 0.3;
let oldRegimeTaxRate1 = 0.05;
let oldRegimeTaxRate2 = 0.2;
let oldRegimeTaxRate3 = 0.3;
let oldRegimeRebate87A = 12500;
let newRegimeRebate87A = 25000;
let oldRegimeIncomeTaxPayable = 0;
let newRegimeIncomeTaxPayable = 0;
let cessOnIT = 1.04;
let surchargeRate1 = 1.1;
let surchargeRate2 = 1.15;
let surchargeRate3 = 1.25;
let surchargeRate4 = 1.37;
let oldEffectiveSurchargeRate;
let newEffectiveSurchargeRate;



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
    localStorage.setItem('Number of Children', userNumberOfChildren.value)
    localStorage.setItem('Arrears', userArrears.value);
    localStorage.setItem('LTC', userLTC.value);
    localStorage.setItem('Leave Encashment', userLeaveEncashment.value);
    localStorage.setItem('Other Pay', userOtherAdditionalPay.value);

    calculateCeaArrear(parseInt(localStorage.getItem('CEA')), parseInt(localStorage.getItem('Number of Children')), parseInt(localStorage.getItem('Arrears')));
}
);

// Save House Property Income Button
saveHousePropertyIncomeBtn.addEventListener('click', () => {
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


// Save Standard Deduction
saveStandardDeductionBtn.addEventListener('click', () => {
    localStorage.setItem('Standard Deduction', userStandardDeduction.value);
}
);

// Save Professional Tax
savePTaxBtn.addEventListener('click', () => {
    userProfessionalTax = document.getElementById('monthly-p-tax');
    localStorage.setItem('Yearly Professional Tax', userProfessionalTax.value * 12);
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
    userTaxFreeMediclaimPremium = Math.min(userMediclaim, 25000)
    localStorage.setItem('Yearly Medical Premium', userMediclaim);
    localStorage.setItem('Yearly Tax Free Medical Premium', userTaxFreeMediclaimPremium);
});

saveParentsMedicalPremiumBtn.addEventListener('click', () => {
    userParentsMediclaim = document.getElementById('medical-insurance-parents').value;
    userParentsSeniorCitizen = document.querySelector('input[name="parent-age"]:checked').value;
    localStorage.setItem('Yearly Parents Medical Premium', userParentsMediclaim);
    if (userParentsSeniorCitizen === "Yes") {
        taxFreeParentsMediclaim = Math.min(userParentsMediclaim, 50000);
    } else {
        taxFreeParentsMediclaim = Math.min(userParentsMediclaim, 25000);
    }
    localStorage.setItem('Tax Free Parents Medical Premium', taxFreeParentsMediclaim);
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
    if (userSavingsInterest <= 10000) {
        taxFreeSavingsInterest = userSavingsInterest;
        taxableSavingsInterest = 0;
    } else {
        taxFreeSavingsInterest = 10000;
        taxableSavingsInterest = userSavingsInterest - 10000;
    }
    localStorage.setItem('Yearly Savings Interest', userSavingsInterest);
    localStorage.setItem('Tax Free Savings Interest', taxFreeSavingsInterest);
    localStorage.setItem('Taxable Savings Interest', taxableSavingsInterest);
});

// Final Submit Actions
finalSubmitBtn.addEventListener('click', taxCalculation);





/* Calculation Functions */

// Finding the smallest one between 3 given values -- Function

function leastAmong3(val1, val2, val3) {
    let checkerValue = 0;
    if (val1 <= val2) {
        checkerValue = val1;
    } else {
        checkerValue = val2;
    }
    if (val3 <= checkerValue) {
        checkerValue = val3;
    }
    return checkerValue;
}

 // March to June Salary Incomes --Function

 function marToJunGrossSalary() {
    marchBasic = parseInt(localStorage.getItem('March Basic'));
    marchDA = ((parseInt(localStorage.getItem('DA'))) * marchBasic) / 100;
    marchHRA = ((parseInt(localStorage.getItem('HRA'))) * marchBasic) / 100;
    marchTPA = ((parseInt(localStorage.getItem('TPA'))) * (parseInt(localStorage.getItem('DA'))) / 100) + (parseInt(localStorage.getItem('TPA')));
    marchToJuneGrossSalary = (marchBasic + marchDA + marchHRA + marchTPA) * 4;


    // Save March to June Incomes to Local Storage
    localStorage.setItem('March DA', JSON.stringify(marchDA));
    localStorage.setItem('March HRA', JSON.stringify(marchHRA));
    localStorage.setItem('March TPA', JSON.stringify(marchTPA));
    localStorage.setItem('March to June Gross Salary', JSON.stringify(marchToJuneGrossSalary));

}

// July to February Salary Incomes --Function

function julToFebGrossSalary(x) {
    if (x === "July") {
        julyBasic = parseInt(localStorage.getItem('Next Basic'));
        januaryBasic = julyBasic;
        julyDA = (julyBasic * (parseInt(localStorage.getItem('DA')) + parseInt(localStorage.getItem('Next DA')))) / 100;
        julyHRA = (julyBasic * parseInt(localStorage.getItem('HRA'))) / 100;
        julyTPA = parseInt(localStorage.getItem('TPA')) + (parseInt(localStorage.getItem('TPA')) * (parseInt(localStorage.getItem('DA')) + parseInt(localStorage.getItem('Next DA'))) / 100);
        januaryDA = januaryBasic * ((parseInt(localStorage.getItem('DA')) + parseInt(localStorage.getItem('Next DA'))) / 100);
        januaryHRA = (januaryBasic * parseInt(localStorage.getItem('HRA'))) / 100;
        januaryTPA = parseInt(localStorage.getItem('TPA')) + (parseInt(localStorage.getItem('TPA')) * ((parseInt(localStorage.getItem('DA')) + parseInt(localStorage.getItem('Next DA'))) / 100));
        julyToDecGrossSalary = (julyBasic + julyDA + julyHRA + julyTPA) * 6;
        janToFebGrossSalary = (januaryBasic + januaryDA + januaryHRA + januaryTPA) * 2;
        yearlyGrossSalary = marchToJuneGrossSalary + julyToDecGrossSalary + janToFebGrossSalary;

    } else if (x === "January") {
        julyBasic = marchBasic;
        januaryBasic = parseInt(localStorage.getItem('Next Basic'));
        julyDA = julyBasic * ((parseInt(localStorage.getItem('DA')) + parseInt(localStorage.getItem('Next DA'))) / 100);
        julyHRA = (julyBasic * parseInt(localStorage.getItem('HRA'))) / 100;
        julyTPA = parseInt(localStorage.getItem('TPA')) + (parseInt(localStorage.getItem('TPA')) * ((parseInt(localStorage.getItem('DA')) + parseInt(localStorage.getItem('Next DA'))) / 100));
        januaryDA = januaryBasic * ((parseInt(localStorage.getItem('DA')) + parseInt(localStorage.getItem('Next DA'))) / 100);
        januaryHRA = (januaryBasic * parseInt(localStorage.getItem('HRA'))) / 100;
        januaryTPA = parseInt(localStorage.getItem('TPA')) + (parseInt(localStorage.getItem('TPA')) * ((parseInt(localStorage.getItem('DA')) + parseInt(localStorage.getItem('Next DA'))) / 100));
        julyToDecGrossSalary = (julyBasic + julyDA + julyHRA + julyTPA) * 6;
        janToFebGrossSalary = (januaryBasic + januaryDA + januaryHRA + januaryTPA) * 2;
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

// Calculate Yearly Gross Salary -- Function

function calculateGrossSalary() {
    incrementMonth = JSON.parse(localStorage.getItem('Increment Month'));
    marToJunGrossSalary();
    julToFebGrossSalary(incrementMonth);
}

// Calculate HRA Exemption -- Function

function calcHraExemption() {
    /* HRA ExemPTION calculation and Save to LocalStorage */
    // Total Yearly HRA received
    yearlyHraReceived = (parseInt(localStorage.getItem('March HRA')) * 4) +
        (parseInt(localStorage.getItem('July HRA')) * 6) +
        (parseInt(localStorage.getItem('January HRA')) * 2);
    // console.log(yearlyHraReceived);
    // Yearly Rent paid in Excess of 10% of Salary (Basic + DA)
    yearlyRentPaidInExcess = (
        parseInt(localStorage.getItem('Monthly Rent Paid')) * 12
    ) - (
            (
                ((parseInt(localStorage.getItem('March Basic')) + parseInt(localStorage.getItem('March DA'))) * 4) +
                ((parseInt(localStorage.getItem('July Basic')) + parseInt(localStorage.getItem('July DA'))) * 6) +
                ((parseInt(localStorage.getItem('January Basic')) + parseInt(localStorage.getItem('January DA'))) * 2)
            ) * 0.1
        );
    // console.log(yearlyRentPaidInExcess);

    // HRA City Factor and 40% or 50% of salary
    if (localStorage.getItem('Rent City Type') === "Metro") {
        hraCityFactor = 0.5;
    } else {
        hraCityFactor = 0.4;
    }
    hraSalaryCap = (
        ((parseInt(localStorage.getItem('March Basic')) + parseInt(localStorage.getItem('March DA'))) * 4) +
        ((parseInt(localStorage.getItem('July Basic')) + parseInt(localStorage.getItem('July DA'))) * 6) +
        ((parseInt(localStorage.getItem('January Basic')) + parseInt(localStorage.getItem('January DA'))) * 2)) * hraCityFactor;
    // console.log(hraSalaryCap);
    finalHRARelief = leastAmong3(yearlyHraReceived, yearlyRentPaidInExcess, hraSalaryCap);
    if (finalHRARelief < 0) {
        finalHRARelief = 0;
    }
    localStorage.setItem('Final HRA Exemption', finalHRARelief);
}

// Calculate NPS contributions

function calcNPSContribution() {
    if (localStorage.getItem('User PF Type') === 'NPS') {
        userYearlyNPSContribution = (
            ((parseInt(localStorage.getItem('March Basic')) + parseInt(localStorage.getItem('March DA'))) * 4) +
            ((parseInt(localStorage.getItem('July Basic')) + parseInt(localStorage.getItem('July DA'))) * 6) +
            ((parseInt(localStorage.getItem('January Basic')) + parseInt(localStorage.getItem('January DA'))) * 2)
        ) * 0.10;

        empYearlyNPSContribution = (
            ((parseInt(localStorage.getItem('March Basic')) + parseInt(localStorage.getItem('March DA'))) * 4) +
            ((parseInt(localStorage.getItem('July Basic')) + parseInt(localStorage.getItem('July DA'))) * 6) +
            ((parseInt(localStorage.getItem('January Basic')) + parseInt(localStorage.getItem('January DA'))) * 2)
        ) * 0.14;
    } else {
        userYearlyNPSContribution = 0;
        empYearlyNPSContribution = 0;
    }
    localStorage.setItem('Employee NPS Contribution', userYearlyNPSContribution.toFixed());
    localStorage.setItem('Employer NPS Contribution', empYearlyNPSContribution.toFixed());
}

// Calculate CEA, Arrear-- Function

function calculateCeaArrear(x, y, z) {

    let receivedCea = x;
    let childrenNumber = y;
    let receivedArrear = z;

    // CEA calculation
    if (childrenNumber >= 2) {
        taxFreeCEA = 2400;
        taxableCEA = receivedCea - taxFreeCEA;
    } else if (childrenNumber === 1) {
        taxFreeCEA = 1200;
        taxableCEA = receivedCea - taxFreeCEA;
    } else if (childrenNumber === 0) {
        taxFreeCEA = 0;
        taxableCEA = 0;
    }   

    localStorage.setItem('Tax Free CEA', taxFreeCEA);
    localStorage.setItem('Taxable CEA', taxableCEA);


    // Calculate Taxable Arrears u/s 89(1) --Function
    taxFreeArrear = 0;
    taxableArrear = 0;

    localStorage.setItem('Tax Free Arrear', taxFreeArrear);
    localStorage.setItem('Taxable Arrear', taxableArrear);

}

// Calculate LTCG and STCG

function calcCapitalGain() {
    let ltcg = parseInt(localStorage.getItem('LTCG'));
    let stcg = parseInt(localStorage.getItem('STCG'));
    
    totalCapitalGainIncome = ltcg + stcg;

    return totalCapitalGainIncome;
}



// Calculate Tax Free Home Loan Interest amount --Function

function taxFreeHomeLoanInterest(amount) {
    let taxFreeAmount = 0;
    if (amount > homeLoanInterestTaxFreeLimit) {
        taxFreeAmount = homeLoanInterestTaxFreeLimit;
    } else {
        taxFreeAmount = amount;
    }
    return taxFreeAmount;
}

// Calculate Tax Free Medical Insurance premium --Function

function calcMediclaimPremium() {
    let premium = parseInt(localStorage.getItem('Yearly Tax Free Medical Premium')) +
        parseInt(localStorage.getItem('Tax Free Parents Medical Premium'));
    return premium;
}

// Calculate Income Tax --Function

function taxCalculation() {
    // Yearly Total Income Calculation
    let incomeFromSalary = parseInt(localStorage.getItem('Yearly Gross Salary')) + parseInt(localStorage.getItem('Employer NPS Contribution')) + parseInt(localStorage.getItem('Bonus')) + parseInt(localStorage.getItem('CEA')) + parseInt(localStorage.getItem('Arrears')) + parseInt(localStorage.getItem('LTC')) + parseInt(localStorage.getItem('Leave Encashment')) + parseInt(localStorage.getItem('Other Pay'));
    localStorage.setItem('Income From Salary', incomeFromSalary);
    let incomeFromHouseProperty = parseInt(localStorage.getItem('House Property Income'));
    let incomeFromBusinessProfession = parseInt(localStorage.getItem('Business Profession Income'));
    let incomeFromCapitalGains = calcCapitalGain();
    let incomeFromOtherSources = parseInt(localStorage.getItem('Other Source Income')) + parseInt(localStorage.getItem('Taxable Savings Interest'));

    let yearlyTotalIncome = incomeFromSalary + incomeFromHouseProperty + incomeFromBusinessProfession + incomeFromCapitalGains + incomeFromOtherSources;
    localStorage.setItem('Capital Gain Income', incomeFromCapitalGains);
    localStorage.setItem('Yearly Total Income', yearlyTotalIncome);




    // Less Standard Deduction, Tax Free CEA, Home Loan Interest, LTC, 80C Total etc.
    let standardDeduction = parseInt(localStorage.getItem('Standard Deduction'));
    let profTaxDeduction = parseInt(localStorage.getItem('Yearly Professional Tax'));
    let taxFreeCEA = parseInt(localStorage.getItem('Tax Free CEA'));
    let ltcDeduction = parseInt(localStorage.getItem('LTC'));
    let employerNPSDeduction = parseInt(localStorage.getItem('Employer NPS Contribution'));
    let homeLoanInterestDeduction = taxFreeHomeLoanInterest(parseInt(localStorage.getItem('Yearly HBA Interest')));
    let hraTaxExemption = parseInt(localStorage.getItem('Final HRA Exemption'));
    let voluntaryNPSDeduction = parseInt(localStorage.getItem('NPS 80 CCD 1B'));
    let taxFreeArrearDeduction = parseInt(localStorage.getItem('Tax Free Arrear'));
    let total80cDeduction = Math.min(
        (
            parseInt(localStorage.getItem('Yearly HBA Principal')) +
            parseInt(localStorage.getItem('Yearly GPF Savings')) +
            parseInt(localStorage.getItem('Yearly Life Insurance Premium')) +
            parseInt(localStorage.getItem('Yearly PPF Investment')) +
            parseInt(localStorage.getItem('Yearly ELSS Investment')) +
            parseInt(localStorage.getItem('Yearly Other TAX Savings')) + 
            parseInt(localStorage.getItem('Employee NPS Contribution'))
        ),
        max80cLimit);
    let taxFreeMedicalInsurancePremium = calcMediclaimPremium();
    let taxFreeSavingsInterestDeduction = parseInt(localStorage.getItem('Tax Free Savings Interest'));

    let yearlyTotalDeductionOldRegime = standardDeduction + profTaxDeduction + taxFreeCEA + ltcDeduction + employerNPSDeduction +
        homeLoanInterestDeduction + hraTaxExemption + voluntaryNPSDeduction + taxFreeArrearDeduction +
        total80cDeduction + taxFreeMedicalInsurancePremium + taxFreeSavingsInterestDeduction;

    let yearlyTotalDeductionNewRegime = standardDeduction + profTaxDeduction + employerNPSDeduction;

    localStorage.setItem('Yearly Total Deduction Old Regime', yearlyTotalDeductionOldRegime);

    // Tax Calculation Steps
    oldAnnualTaxableIncome = yearlyTotalIncome - yearlyTotalDeductionOldRegime;
    newAnnualTaxableIncome = yearlyTotalIncome - yearlyTotalDeductionNewRegime;
    localStorage.setItem('Yearly Taxable Income Old Regime', oldAnnualTaxableIncome);
    localStorage.setItem('Yearly Taxable Income New Regime', newAnnualTaxableIncome);

    // Setting Effective Surcharge Rate
    if (yearlyTotalIncome < 5000000) {
        oldEffectiveSurchargeRate = 1;
        newEffectiveSurchargeRate = 1;
    } else if (yearlyTotalIncome >= 5000000) {
        oldEffectiveSurchargeRate = surchargeRate1;
        newEffectiveSurchargeRate = surchargeRate1;
    } else if (yearlyTotalIncome >= 10000000) {
        oldEffectiveSurchargeRate = surchargeRate2;
        newEffectiveSurchargeRate = surchargeRate2;
    } else if (yearlyTotalIncome >= 20000000) {
        oldEffectiveSurchargeRate = surchargeRate3;
        newEffectiveSurchargeRate = surchargeRate3;
    } else if (yearlyTotalIncome >= 50000000) {
        oldEffectiveSurchargeRate = surchargeRate4;
        newEffectiveSurchargeRate = surchargeRate3;
    }
    localStorage.setItem('Old Effective Surcharge Rate', oldEffectiveSurchargeRate);
    localStorage.setItem('New Effective Surcharge Rate', newEffectiveSurchargeRate);

    // Old Tax Regime Calculation
    if (oldAnnualTaxableIncome < oldRegimeTaxSlab1) {
        oldRegimeIncomeTaxPayable = 0;
    } else if (oldAnnualTaxableIncome >= oldRegimeTaxSlab1 && oldAnnualTaxableIncome < oldRegimeTaxSlab2) {
        oldRegimeIncomeTaxPayable = Math.max((
            ((oldAnnualTaxableIncome - oldRegimeTaxSlab1) * oldRegimeTaxRate1) - oldRegimeRebate87A),
            0);
    } else if (oldAnnualTaxableIncome >= oldRegimeTaxSlab2 && oldAnnualTaxableIncome < oldRegimeTaxSlab3) {
        oldRegimeIncomeTaxPayable = 12500 + (
            (oldAnnualTaxableIncome - oldRegimeTaxSlab2) * oldRegimeTaxRate2
        );
    } else if (oldAnnualTaxableIncome >= oldRegimeTaxSlab3) {
        oldRegimeIncomeTaxPayable = 12500 + 100000 + (
            (oldAnnualTaxableIncome - oldRegimeTaxSlab3) * oldRegimeTaxRate3
        );
    }
    oldTaxRegimeTotalTaxPayable = (oldRegimeIncomeTaxPayable * oldEffectiveSurchargeRate) * cessOnIT;
    oldTaxRegimeTotalTaxPayable = oldTaxRegimeTotalTaxPayable.toFixed();
    localStorage.setItem('Total Tax under Old Tax Regime', oldTaxRegimeTotalTaxPayable);

    // New Tax Regime Calculation    
    if (newAnnualTaxableIncome < newRegimeTaxSlab1) {
        newRegimeIncomeTaxPayable = 0;
    } else if (newAnnualTaxableIncome >= newRegimeTaxSlab1 && newAnnualTaxableIncome < newRegimeTaxSlab2) {
        newRegimeIncomeTaxPayable = Math.max((
            ((newAnnualTaxableIncome - newRegimeTaxSlab1) * newRegimeTaxRate1) - newRegimeRebate87A),
            0);
    } else if (newAnnualTaxableIncome >= newRegimeTaxSlab2 && newAnnualTaxableIncome <= 700000) {
        newRegimeIncomeTaxPayable = Math.max(
            15000 + (((newAnnualTaxableIncome - newRegimeTaxSlab2) * newRegimeTaxRate2) - newRegimeRebate87A),
            0);
    } else if (newAnnualTaxableIncome > 700000 && newAnnualTaxableIncome <= newRegimeTaxSlab3) {
        newRegimeIncomeTaxPayable = 15000 + (
            (newAnnualTaxableIncome - newRegimeTaxSlab2) * newRegimeTaxRate2
        );
    } else if (newAnnualTaxableIncome >= newRegimeTaxSlab3 && newAnnualTaxableIncome <= newRegimeTaxSlab4) {
        newRegimeIncomeTaxPayable = 45000 + (
            (newAnnualTaxableIncome - newRegimeTaxSlab3) * newRegimeTaxRate3
        );
    } else if (newAnnualTaxableIncome >= newRegimeTaxSlab4 && newAnnualTaxableIncome <= newRegimeTaxSlab5) {
        newRegimeIncomeTaxPayable = 90000 + (
            (newAnnualTaxableIncome - newRegimeTaxSlab4) * newRegimeTaxRate4
        );
    } else if (newAnnualTaxableIncome > newRegimeTaxSlab5) {
        newRegimeIncomeTaxPayable = 150000 + (
            (newAnnualTaxableIncome - newRegimeTaxSlab4) * newRegimeTaxRate5
        );
    }
    newTaxRegimeTotalTaxPayable = (newRegimeIncomeTaxPayable * newEffectiveSurchargeRate) * cessOnIT;
    newTaxRegimeTotalTaxPayable = newTaxRegimeTotalTaxPayable.toFixed();
    localStorage.setItem('Total Tax under New Tax Regime', newTaxRegimeTotalTaxPayable);

    if (oldTaxRegimeTotalTaxPayable > newTaxRegimeTotalTaxPayable) {
        localStorage.setItem('Better Regime', newTaxRegimeTotalTaxPayable);
        localStorage.setItem('Regime Tax Savings', (oldTaxRegimeTotalTaxPayable - newTaxRegimeTotalTaxPayable));
        localStorage.setItem('Better Regime', "New");
    } else if (oldTaxRegimeTotalTaxPayable < newTaxRegimeTotalTaxPayable){
        localStorage.setItem('Better Regime', oldTaxRegimeTotalTaxPayable);
        localStorage.setItem('Regime Tax Savings', (newTaxRegimeTotalTaxPayable - oldTaxRegimeTotalTaxPayable));
        localStorage.setItem('Better Regime', "Old");
    } else {
        localStorage.setItem('Better Regime', oldTaxRegimeTotalTaxPayable);
        localStorage.setItem('Regime Tax Savings', (newTaxRegimeTotalTaxPayable - oldTaxRegimeTotalTaxPayable));
        localStorage.setItem('Better Regime', "Any of the two");
    }
}

