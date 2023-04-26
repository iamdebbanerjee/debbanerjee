// Get UI Elements



// Create the Objects - constructor function method

// Book Object

function Book(name, author, isbn) {
	this.name = name;
	this.author = author;
	this.isbn = isbn;
}


//create UI Object - constructor method
const bookListTableBody = document.getElementById("book-list-body");

function UI() {}

UI.prototype.addBook = function(book) {
	bookListTableBody.innerHTML = `<tr><td>${book.bookName}</td><td>${book.bookAuthor}</td><td>${book.bookISBN}</td><td>delete</td></tr>`;
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

	e.preventDefault();
});




	  