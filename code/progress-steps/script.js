/* Initialize variables */

const progressBar = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const nextBtn = document.querySelector('.next');
const backBtn = document.querySelector('.back');

let stageCounter = 1; // Initialize a counter to run between 1 to 5


// Add Event Listeners

nextBtn.addEventListener('click', moveAhead);
backBtn.addEventListener('click', moveBack);

function moveAhead() {
	if (stageCounter < circles.length) {
		progressBar.style.width = ""
	}
}







// Test with comsole.log

// console.log(stageCounter);