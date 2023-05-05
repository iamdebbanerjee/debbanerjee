// Select elements from DOM
const jokeDiv = document.getElementById('joke');


function fetchJoke() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function() {
        let jokeText;
        if (this.readyState === 4 && this.status === 200) {
            jokeText = JSON.parse(this.responseText).value;
        }
        loadJoke(jokeText);
    }
    xhr.send();
}

function loadJoke(joke) {
    let jokePara = document.createElement('p');
    jokePara.innerText = joke;
    jokeDiv.removeChild(jokeDiv.firstChild);
    jokeDiv.appendChild(jokePara);
}

// Event listener
document.getElementById('joke-btn').addEventListener('click', fetchJoke);