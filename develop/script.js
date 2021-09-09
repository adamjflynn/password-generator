//Assignment code here

//Function for "generate password" button

var generatePassword = function() {

    //Alert asking user to choose password criteria

    alert("Please choose from your password criteria:");
  
    //empty string for the password

    var passwordContains = "";
  
    //define variables before they are called

    var hasLower;
    var hasUpper;
    var hasNumeric;
    var hasSpecial;
  
    //define characters for passwordContains

    var lowers = "abcdefghijklmnopqrstuvwxyz";
    var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var special = "!'`~@#$%^&*()_+-][}{|><?;:=";


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