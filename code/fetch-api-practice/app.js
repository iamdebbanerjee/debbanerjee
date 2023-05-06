function createPost(post) {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify(post),
		headers: {
			'Content-Type': 'application/json',
			token: 'token987654321'
		} 
	})
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		console.log(data);
	})
	// .catch(console.log("something went wrong"));
}


createPost({title: "Post One", content: "This is content of post one."});