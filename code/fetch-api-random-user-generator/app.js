// Select elements

const fetchUserBtn = document.getElementById('fetch-user-btn');
const userImageField = document.getElementById('user-image');
const userNameField = document.getElementById('user-name');
const userEmailField = document.getElementById('email');
const userPhoneField = document.getElementById('phone');
const userLocationField = document.getElementById('location');
const userAgeField = document.getElementById('age');

// Global variables

let userFirstName = 'Alan',
	userLastName = 'Johnson',
	userTitle = 'Mr',
	userAge = 42,
	userEmail = 'hari.das@xmail.com',
	userPhone = '2222-2222',
	userCity = 'Kolkata',
	userCountry = 'India',
	userImageUrl;

// Event Listeners

fetchUserBtn.addEventListener('click', fetchUser);



// Functions

// Fetch User Function
function fetchUser() {
	fetch('https://randomuser.me/api')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return data.results[0];
		})
		.then((obj) => {
			userImageUrl = obj.picture.large;
			userTitle = obj.name.title;
			userFirstName = obj.name.first;
			userLastName = obj.name.last;
			userAge = obj.dob.age;
			userEmail = obj.email;
			userPhone = obj.phone;
			userCity = obj.location.city;
			userCountry = obj.location.country;
			displayUser(userImageUrl, userTitle, userFirstName, userLastName, userAge, userEmail, userPhone, userCity, userCountry);
		});	
}

// Display User Function
function displayUser(image, title, firstName, lastName, age, email, phone, city, country) {
	// set user image
	userImageField.setAttribute('src', image);
	userNameField.innerText = `${title} ${firstName} ${lastName}`;
	userEmailField.innerText = `${email}`;
	userAgeField.innerText = `${age}`;
	userPhoneField.innerText = `${phone}`;
	userLocationField.innerText = `${city}, ${country}`;
}