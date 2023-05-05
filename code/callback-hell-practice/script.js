function showData(endpoint, callback) {
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', endpoint);

    xhttp.onreadystatechange = function() {
        if ((this.status === 200) && (this.readyState === 4)) {
            callback(JSON.parse(this.responseText));
        }
    };

    // Send the request at random intervals
    setTimeout(() => {
        xhttp.send();
    }, Math.floor(Math.random() * 5000));
    
}

// Callback hell
showData('./movies.json', (data) => {
    console.log(data);
    showData('./actors.json', (data) => {
        console.log(data);
        showData('./directors.json', (data) => {
            console.log(data);
        });
    });
});