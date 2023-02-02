/* Initialize variables */

const progressBar = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const nextBtn = document.querySelector('.next');
const backBtn = document.querySelector('.back');

let stageCounter = 1; // Initialize a counter to run between 1 to 5
const progressBarPercentage = ['10%', '20%', '40%', '60%', '80%'];


// Add Event Listeners

nextBtn.addEventListener('click', moveAhead);
backBtn.addEventListener('click', moveBack);

function moveAhead() {
	stageCounter++;
	switch(stageCounter) {
		case 1 :
			// progressBar.style.width = progressBarPercentage[0];
			break;
		case 2 :
			progressBar.style.width = progressBarPercentage[1];
			circles[1].classList.add('active');
			backBtn.removeAttribute('disabled');
			break;
		case 3 :
			progressBar.style.width = progressBarPercentage[2];
			circles[2].classList.add('active');
			break;
		case 4 :
			progressBar.style.width = progressBarPercentage[3];
			circles[3].classList.add('active');
			break;
		case 5 :
			progressBar.style.width = progressBarPercentage[4];
			circles[4].classList.add('active');
			nextBtn.setAttribute('disabled', '');
			break;
	}	
}

function moveBack() {
	stageCounter--;
	switch(stageCounter) {
		case 5 :
			break;
		case 4 :
			circles[4].classList.remove('active');
			progressBar.style.width = progressBarPercentage[3];
			nextBtn.removeAttribute('disabled');
			break;
		case 3 :
			circles[3].classList.remove('active');
			progressBar.style.width = progressBarPercentage[2];
			break;
		case 2 :
			circles[2].classList.remove('active');
			progressBar.style.width = progressBarPercentage[1];
			break;
		case 1 :
			circles[1].classList.remove('active');
			progressBar.style.width = progressBarPercentage[0];
			backBtn.setAttribute('disabled', '');
			break;
	}	
}