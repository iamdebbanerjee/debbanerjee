// Get UI Elements



// Create the Objects - constructor function method

// Book Object

function Book(name, author, isbn) {
	this.name = name;
	this.author = author;
	this.isbn = isbn;
}


//create UI Object - constructor method

function UI() {}

UI.prototype.addBook = function(newBook) {
	const bookListTableBody = document.getElementById("book-list-body");
	const newBookNode = document.createElement('tr');
	newBookNode.innerHTML = `
							<td>${newBook.name}</td>
							<td>${newBook.author}</td>
							<td>${newBook.isbn}</td>
							<td><a href="#" class="delete">X</a></td></td>`;
	bookListTableBody.appendChild(newBookNode);
}


UI.prototype.clearForm = function() {
	document.getElementById('book-name').value = "";
	document.getElementById('book-author').value = "";
	document.getElementById('isbn').value = "";
}

// Event Listeners
const bookForm = document.getElementById("book-form");

bookForm.addEventListener('submit', (e) => {
	const alertDiv = document.getElementById("alert-div"),
     	alertText = document.getElementById("alert-text"),
		bookName = document.getElementById("book-name").value,
		bookAuthor = document.getElementById("book-author").value,
		bookISBN = document.getElementById("isbn").value,		
		bookSubmit = document.getElementById("submit");

	const newBook = new Book(bookName, bookAuthor, bookISBN);	

	const ui = new UI();

	ui.addBook(newBook);
	ui.clearForm();

	e.preventDefault(e);
});




	  