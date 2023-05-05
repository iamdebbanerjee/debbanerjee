// Create Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error) {
            console.log("Promise created");
            resolve("Tell me the next task...");
        } else {
            console.log("There's some error!");
            reject("Please check! There's some error somewhere.")
        }
    }, 1000);
});

promise
    .then((text) => {
        console.log(text);
    })
    .catch((text) => {
        console.log(text);
    });
