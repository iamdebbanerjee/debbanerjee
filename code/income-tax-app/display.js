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
	}
});

