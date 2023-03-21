window.addEventListener('DOMContentLoaded', () =>{

	const spanTaxOldRegime = document.querySelector('#tax-old-regime');
	const spanTaxNewRegime = document.querySelector('#tax-new-regime');
	const spanTaxDifference = document.querySelector('#tax-difference-between-regimes');
	let taxUnderOldRegime = localStorage.getItem('Total Tax under Old Tax Regime');
	let taxUnderNewRegime = localStorage.getItem('Total Tax under New Tax Regime');
	let taxDifferenceBetweenRegimes = localStorage.getItem('Regime Tax Savings');


	displayTaxData();

	function displayTaxData() {
	spanTaxOldRegime.appendChild(document.createTextNode(taxUnderOldRegime));
	spanTaxNewRegime.appendChild(document.createTextNode(taxUnderNewRegime));
	spanTaxDifference.appendChild(document.createTextNode(taxDifferenceBetweenRegimes));
}
});

