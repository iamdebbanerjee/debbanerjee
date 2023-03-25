window.addEventListener('DOMContentLoaded', () =>{

	// Taking UI elements
	const spanTaxOldRegime = document.querySelector('#tax-old-regime');
	const spanTaxNewRegime = document.querySelector('#tax-new-regime');
	const spanTaxDifference = document.querySelector('#tax-difference-between-regimes');

	const spanBetterRegime = document.querySelector('#regime-planner');
	const spanMarchBasic = document.querySelector('#march-basic');
	const spanMarchDA = document.querySelector('#march-da');
	const spanMarchHra = document.querySelector('#march-hra');
	const spanMarchTpa = document.querySelector('#march-tpa');
	const spanMarJunTotal = document.querySelector('#mar-jun-total');

	const spanJulyBasic = document.querySelector('#july-basic');
	const spanJulyDA = document.querySelector('#july-da');
	const spanJulyHra = document.querySelector('#july-hra');
	const spanJulyTpa = document.querySelector('#july-tpa');
	const spanJulDecTotal = document.querySelector('#jul-dec-total');
	
	const spanJanBasic = document.querySelector('#jan-basic');
	const spanJanDA = document.querySelector('#jan-da');
	const spanJanHra = document.querySelector('#jan-hra');
	const spanJanTpa = document.querySelector('#jan-tpa');
	const spanJanFebTotal = document.querySelector('#jan-feb-total');

	const spanNpsGovtContrib = document.querySelector('#nps-govt-contrib');
	const spanBonus = document.querySelector('#bonus');
	const spanCea = document.querySelector('#cea');
	const spanArrears = document.querySelector('#arrears');
	const spanLtcReceived = document.querySelector('#ltc-received');
	const spanLeaveEncashment = document.querySelector('#leave-encashment');
	const spanOtherPay = document.querySelector('#other-pay');

	const spanIncomeFromSalary	= document.querySelector('#income-from-salary');
	const spanIncomeFromHouseProperty	= document.querySelector('#income-house-property');
	const spanIncomeFromBusinessProfession	= document.querySelector('#income-business-profession');
	const spanIncomeFromCapitalGains = document.querySelector('#income-capital-gains');
	const spanIncomeFromOtherSources = document.querySelector('#income-other-sources');
	const spanTotalAnnualIncome = document.querySelector('#total-annual-income');

	const spanStandardDeductionOld = document.querySelector('#standard-deduction-old');
	const spanProfessionalTaxOld = document.querySelector('#professional-tax-old');
	const spanNPSEmployerContributionOld = document.querySelector('#nps-employer-contribution-old');
	const spanStandardDeductionNew = document.querySelector('#standard-deduction-new');
	const spanProfessionalTaxNew = document.querySelector('#professional-tax-new');
	const spanNPSEmployerContributionNew = document.querySelector('#nps-employer-contribution-new');

	const spanTaxFreeCEA = document.querySelector('#tax-free-cea');
	const spanLTCExemption = document.querySelector('#ltc-exemption');
	const spanHomeLoanInterest = document.querySelector('#home-loan-interest');
	const spanHRATaxExemption = document.querySelector('#tax-free-hra');
	const spanTaxFreeArrear = document.querySelector('#tax-exempted-arrear');
	const spanNPSEmployeeContribution = document.querySelector('#nps-employee-contribution');
	const spanHomeLoanPrincipal = document.querySelector('#home-loan-principal');
	const spanYearlyGPFContribution = document.querySelector('#yearly-gpf-contribution');
	const spanLifeInsurancePremium = document.querySelector('#yearly-lic-premium');
	const spanPPFInvestment = document.querySelector('#yearly-ppf-investment');
	const spanELSSInvestment = document.querySelector('#yearly-elss-investment');
	const spanOtherTaxSavingInvestment = document.querySelector('#other-tax-saving-investment');
	const spanTotal80CDeduction = document.querySelector('#total-80c-deduction');
	const spanNPSVoluntaryContribution = document.querySelector('#voluntary-nps-contribution');
	const spanMediclaimSelf = document.querySelector('#mediclaim-self');
	const spanMediclaimParents = document.querySelector('#mediclaim-parents');
	const spanSavingsInterest = document.querySelector('#savings-interest');


	const spanNewRegimeTotalDeduction = document.querySelector('#total-deduction-new-regime');
	const spanOldRegimeTotalDeduction = document.querySelector('#total-deduction-old-regime');

	const spanTaxableIncomeNewRegime = document.querySelector('#taxable-income-new-regime');
	const spanTaxableIncomeOldRegime = document.querySelector('#taxable-income-old-regime');

	const spanTaxNewRegime2 = document.querySelector('#tax-new-regime-2');
	const spanTaxOldRegime2 = document.querySelector('#tax-old-regime-2');




	// Getting values from Local Storage
	let taxUnderOldRegime = localStorage.getItem('Total Tax under Old Tax Regime');
	let taxUnderNewRegime = localStorage.getItem('Total Tax under New Tax Regime');
	let taxDifferenceBetweenRegimes = localStorage.getItem('Regime Tax Savings');
	let betterRegime = localStorage.getItem('Better Regime');
	
	let marchBasic = localStorage.getItem('March Basic');
	let marchDA = localStorage.getItem('March DA');
	let marchHra = localStorage.getItem('March HRA');
	let marchTpa = localStorage.getItem('March TPA');
	let marJunTotal = localStorage.getItem('March to June Gross Salary');
	let julyBasic = localStorage.getItem('July Basic');
	let julyDA = localStorage.getItem('July DA');
	let julyHra = localStorage.getItem('July HRA');
	let julyTpa = localStorage.getItem('July TPA');
	let julDecTotal = localStorage.getItem('July to December Gross Salary');
	let janBasic = localStorage.getItem('January Basic');
	let janDA = localStorage.getItem('January DA');
	let janHra = localStorage.getItem('January HRA');
	let janTpa = localStorage.getItem('January TPA');
	let janFebTotal = localStorage.getItem('January to February Gross Salary');
	let npsGovtContrib = localStorage.getItem('Employer NPS Contribution');
	let bonus = localStorage.getItem('Bonus');
	let cea = localStorage.getItem('CEA');
	let arrears = localStorage.getItem('Arrears');
	let ltc = localStorage.getItem('LTC');
	let leaveEncashment = localStorage.getItem('Leave Encashment');
	let otherPay = localStorage.getItem('Other Pay');

	let incomeFromSalary = localStorage.getItem('Income From Salary');
	let incomeFromHouseProperty = localStorage.getItem('House Property Income');
	let incomeFromBusinessProfession = localStorage.getItem('Business Profession Income');
	let incomeFromCapitalGains = localStorage.getItem('Capital Gain Income');
	let incomeFromOtherSources = localStorage.getItem('Other Source Income');
	let totalAnnualIncome = localStorage.getItem('Yearly Total Income');

	let standardDeductionOld = localStorage.getItem('Standard Deduction');
	let professionalTaxOld = localStorage.getItem('Yearly Professional Tax');
	let standardDeductionNew = localStorage.getItem('Standard Deduction');
	let professionalTaxNew = localStorage.getItem('Yearly Professional Tax');
	let npsEmployerContributionOld = localStorage.getItem('Employer NPS Contribution');
	let npsEmployerContributionNew = localStorage.getItem('Employer NPS Contribution');

	let taxFreeCEA = localStorage.getItem('Tax Free CEA');
	let ltcExemption = localStorage.getItem('LTC');
	let homeLoanInterest = localStorage.getItem('Yearly HBA Interest');
	let hraTaxExemption = localStorage.getItem('Final HRA Exemption');
	let taxFreeArrear = localStorage.getItem('Tax Free Arrear');
	let npsEmployeeContribution = localStorage.getItem('Employee NPS Contribution');
	let homeLoanPrincipal = localStorage.getItem('Yearly HBA Principal');
	let yearlyGPFContribution = localStorage.getItem('Yearly GPF Savings');
	let lifeInsurancePremium = localStorage.getItem('Yearly Life Insurance Premium');
	let ppfInvestment = localStorage.getItem('Yearly PPF Investment');
	let elssInvestment = localStorage.getItem('Yearly ELSS Investment');
	let otherTaxSavingInvestment = localStorage.getItem('Yearly Other TAX Savings');
	let total80cDeduction = localStorage.getItem('Yearly Total 80C Deduction');
	let npsVoluntaryContribution = localStorage.getItem('NPS 80 CCD 1B');
	let mediclaimSelf = localStorage.getItem('Yearly Tax Free Medical Premium');
	let mediclaimParents = localStorage.getItem('Tax Free Parents Medical Premium');
	let savingsInterest = localStorage.getItem('Tax Free Savings Interest');

	let newRegimeTotalDeduction = localStorage.getItem('Yearly Total Deduction New Regime');
	let oldRegimeTotalDeduction = localStorage.getItem('Yearly Total Deduction Old Regime');

	let taxableIncomeNewRegime = localStorage.getItem('Yearly Taxable Income New Regime');
	let taxableIncomeOldRegime = localStorage.getItem('Yearly Taxable Income Old Regime');



	// Calling display function
	displayTaxData();


	// Display function 
	function displayTaxData() {
		spanTaxOldRegime.appendChild(document.createTextNode(taxUnderOldRegime));
		spanTaxNewRegime.appendChild(document.createTextNode(taxUnderNewRegime));
		spanTaxDifference.appendChild(document.createTextNode(taxDifferenceBetweenRegimes));
		spanBetterRegime.appendChild(document.createTextNode(betterRegime));

		spanMarchBasic.appendChild(document.createTextNode(marchBasic));
		spanMarchDA.appendChild(document.createTextNode(marchDA));
		spanMarchHra.appendChild(document.createTextNode(marchHra));
		spanMarchTpa.appendChild(document.createTextNode(marchTpa));
		spanMarJunTotal.appendChild(document.createTextNode(marJunTotal));

		spanJulyBasic.appendChild(document.createTextNode(julyBasic));
		spanJulyDA.appendChild(document.createTextNode(julyDA));
		spanJulyHra.appendChild(document.createTextNode(julyHra));
		spanJulyTpa.appendChild(document.createTextNode(julyTpa));
		spanJulDecTotal.appendChild(document.createTextNode(julDecTotal));

		spanJanBasic.appendChild(document.createTextNode(janBasic));
		spanJanDA.appendChild(document.createTextNode(janDA));
		spanJanHra.appendChild(document.createTextNode(janHra));
		spanJanTpa.appendChild(document.createTextNode(janTpa));
		spanJanFebTotal.appendChild(document.createTextNode(janFebTotal));

		spanNpsGovtContrib.appendChild(document.createTextNode(npsGovtContrib));
		spanBonus.appendChild(document.createTextNode(bonus));
		spanCea.appendChild(document.createTextNode(cea));
		spanArrears.appendChild(document.createTextNode(arrears));
		spanLtcReceived.appendChild(document.createTextNode(ltc));
		spanLeaveEncashment.appendChild(document.createTextNode(leaveEncashment));
		spanOtherPay.appendChild(document.createTextNode(otherPay));
		spanIncomeFromSalary.appendChild(document.createTextNode(incomeFromSalary));
		spanIncomeFromHouseProperty.appendChild(document.createTextNode(incomeFromHouseProperty));
		spanIncomeFromBusinessProfession.appendChild(document.createTextNode(incomeFromBusinessProfession));
		spanIncomeFromCapitalGains.appendChild(document.createTextNode(incomeFromCapitalGains));
		spanIncomeFromOtherSources.appendChild(document.createTextNode(incomeFromOtherSources));
		spanTotalAnnualIncome.appendChild(document.createTextNode(totalAnnualIncome));

		spanStandardDeductionOld.appendChild(document.createTextNode(standardDeductionOld));
		spanProfessionalTaxOld.appendChild(document.createTextNode(professionalTaxOld));
		spanNPSEmployerContributionOld.appendChild(document.createTextNode(npsEmployerContributionOld));
		spanStandardDeductionNew.appendChild(document.createTextNode(standardDeductionNew));
		spanProfessionalTaxNew.appendChild(document.createTextNode(professionalTaxNew));
		spanNPSEmployerContributionNew.appendChild(document.createTextNode(npsEmployerContributionNew));




		spanTaxFreeCEA.appendChild(document.createTextNode(taxFreeCEA));
		spanLTCExemption.appendChild(document.createTextNode(ltcExemption));
		spanHomeLoanInterest.appendChild(document.createTextNode(homeLoanInterest));
		spanHRATaxExemption.appendChild(document.createTextNode(hraTaxExemption));
		spanTaxFreeArrear.appendChild(document.createTextNode(taxFreeArrear));
		spanNPSEmployeeContribution.appendChild(document.createTextNode(npsEmployeeContribution));
		spanHomeLoanPrincipal.appendChild(document.createTextNode(homeLoanPrincipal));
		spanYearlyGPFContribution.appendChild(document.createTextNode(yearlyGPFContribution));
		spanLifeInsurancePremium.appendChild(document.createTextNode(lifeInsurancePremium));
		spanPPFInvestment.appendChild(document.createTextNode(ppfInvestment));
		spanELSSInvestment.appendChild(document.createTextNode(elssInvestment));
		spanOtherTaxSavingInvestment.appendChild(document.createTextNode(otherTaxSavingInvestment));
		spanTotal80CDeduction.appendChild(document.createTextNode(total80cDeduction));
		spanNPSVoluntaryContribution.appendChild(document.createTextNode(npsVoluntaryContribution));
		spanMediclaimSelf.appendChild(document.createTextNode(mediclaimSelf));
		spanMediclaimParents.appendChild(document.createTextNode(mediclaimParents));
		spanSavingsInterest.appendChild(document.createTextNode(savingsInterest));


		spanNewRegimeTotalDeduction.appendChild(document.createTextNode(newRegimeTotalDeduction));
		spanOldRegimeTotalDeduction.appendChild(document.createTextNode(oldRegimeTotalDeduction));

		spanTaxableIncomeNewRegime.appendChild(document.createTextNode(taxableIncomeNewRegime));
		spanTaxableIncomeOldRegime.appendChild(document.createTextNode(taxableIncomeOldRegime));

		spanTaxNewRegime2.appendChild(document.createTextNode(taxUnderNewRegime));
		spanTaxOldRegime2.appendChild(document.createTextNode(taxUnderOldRegime));
	}
});

