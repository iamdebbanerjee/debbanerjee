const searchFieldActive = document.querySelector('.search');
const searchInput = document.querySelector('.search-query');
const searchButton = document.querySelector('.btn');

searchButton.addEventListener('click', () => {
	searchFieldActive.classList.toggle('active');
	searchInput.focus();
})