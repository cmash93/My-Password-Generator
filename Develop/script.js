// Assignment code here
var uppercase = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~", "^", "$"]

function selectOptions() {
  var passwordLength = prompt("Please choose a password between 8 and 128 characters.");

  while (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose a password between 8 and 128 characters.");
    var passwordLength = prompt("Please choose a password between 8 and 128 characters.");
  }

  if (passwordLength >= 8 || passwordLength <= 128) {
    confirm("Would you like to use uppercase characters?");
    confirm("Would you like to use lowercase characters?");
    confirm("Would you like to use numbers?");
    confirm("Would you like to use special characters?");

  }
}


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

selectOptions()