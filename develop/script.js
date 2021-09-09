// Assignment code here

// Function for "generate password" button

var generatePassword = function () {
	// Alert asking user to choose password criteria

	alert("Please choose from your password criteria:");

	// Empty string for the password

	var passwordContains = "";

	// Define variables before they are called

	var hasLowercase;
	var hasUppercase;
	var hasNumbers;
	var hasSpecial;

	// Define characters for passwordContains

	var lowercase = "abcdefghijklmnopqrstuvwxyz";
	var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var numbers = "0123456789";
	var special = "!'`~@#$%^&*()_+-][}{|><?;:=";

	// Prompt for password length

	var passLength = prompt(
		"Choose a password length between 8 and 128 characters"
	);
	if (passLength < 8 || passLength > 128) {
		alert("You must provide a valid answer! Please try again");
		return generatePassword();
	}

	// Prompt for lowercase letters
	var promptLowercase = function () {
		hasLower = confirm("Will you password contain lowercase letters?");
		if (hasLower === true) {
			passwordContains = passwordContains = lowercase;
		}
	};

	// Prompt for uppercase

	var promptUppercase = function () {
		hasUppercase = confirm("Will your password contain UPPERCASE letters?");
		if (hasUppercase === true) {
			passwordContains = passwordContains + uppercase;
		}
	};

	// Prompt for numbers

	var promptNumber = function () {
		hasNumbers = confirm("Will your password contain numbers?");
		if (hasNumbers === true) {
			passwordContains = passwordContains + numbers;
		}
	};

	// Prompt for special characters

	var promptSpecial = function () {
		hasSpecial = confirm("Will your password contain special characters?");
		if (hasSpecial === true) {
			passwordContains = passwordContains + special;
		}
	};

	promptLowercase();
	promptUppercase();
	promptNumber();
	promptSpecial();

	// Repeat if the user did not confirm at least one of the prompts

	if (
		hasLower === false &&
		hasUpper === false &&
		hasNumbers === false &&
		hasSpecial === false
	) {
		alert("You must select at least one of the criteria");
		generatePassword();
	}
	// Loop to choose a random password based on the criteria selected

	var passWord = "";
	for (let i = 0; i < passLength; i++) {
		var passSelect = Math.floor(Math.random() * passwordContains.length);
		passWord = passWord + passwordContains[passSelect];
	}
	return passWord;
};

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
