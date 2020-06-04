import countries from 'country-list';

console.log(typeof countries.getNames()[0]);

const createOption = (value) => {
	let option = document.createElement('OPTION');
	option.innerHTML = value;
	option.setAttribute('value', value);
	return option;
};

const selectCountry = document.getElementById('country');

countries.getNames().forEach((country) => {
	selectCountry.appendChild(createOption(country));
});

// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
// const form = document.getElementsByTagName('form')[0];

const zipCode = document.getElementById('zipcode');
const zipCodeError = document.querySelector('#zipcode + span.error');

zipCode.addEventListener('input', (e) => {
	if (zipCode.validity.valid) {
		zipCodeError.innerHTML = ''; // Reset the content of the message
		zipCodeError.className = 'error'; // Reset the visual state of the message
	} else {
		// If there is still an error, show the correct error
		if (zipCode.validity.patternMismatch) {
			zipCodeError.textContent = 'enter a number PLEASE';
		} else if (zipCode.validity.tooShort || zipCode.validity.tooLong) {
			zipCodeError.textContent = `Zipcode should be ${zipCode.minLength} characters; you entered ${zipCode.value.length}.`;
		}
		zipCodeError.className = 'error active';
	}
});

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const passwordError = document.querySelector('#confirmPassword + span.error');

confirmPassword.addEventListener('input', (e) => {
	if (password.value == confirmPassword.value) {
		passwordError.innerHTML = '';
		passwordError.className = 'error';
	} else {
		passwordError.textContent = 'Your passwords do not match';
		passwordError.className = 'error active';
	}
});

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

email.addEventListener('input', function (event) {
	// Each time the user types something, we check if the
	// form fields are valid.

	if (email.validity.valid) {
		// In case there is an error message visible, if the field
		// is valid, we remove the error message.
		emailError.innerHTML = ''; // Reset the content of the message
		emailError.className = 'error'; // Reset the visual state of the message
	} else {
		// If there is still an error, show the correct error
		showEmailError();
	}
});

function showEmailError() {
	if (email.validity.valueMissing) {
		// If the field is empty
		// display the following error message.
		emailError.textContent = 'You need to enter an e-mail address.';
	} else if (email.validity.typeMismatch) {
		// If the field doesn't contain an email address
		// display the following error message.
		emailError.textContent = 'Entered value needs to be an e-mail address.';
	} else if (email.validity.tooShort) {
		// If the data is too short
		// display the following error message.
		emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
	}

	// Set the styling appropriately
	emailError.className = 'error active';
}
