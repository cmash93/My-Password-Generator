// Arrays
var uppercase = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~", "^", "$"]


function generatePassword() {
  var passwordLength = window.prompt("Please choose a password length between 8 and 128 characters.");
  
  while (passwordLength < 8 || passwordLength > 128) {
    window.alert("You must choose a password between 8 and 128 characters.");
    var passwordLength = window.prompt("Please choose a password length between 8 and 128 characters.");
  }
  
  var confirmUpper;
  var cofirmLower;
  var confirmNumber;
  var confirmSymbol;



  if (passwordLength >= 8 || passwordLength <= 128) {
    alert("You have chosen " + passwordLength + " characters.");
    var confirmUpper = confirm("Would you like to use uppercase characters?");
    var confirmLower = confirm("Would you like to use lowercase characters?");
    var confirmNumber = confirm("Would you like to use numbers?");
    var confirmSymbol = confirm("Would you like to use special characters?");
  }

  
  while (confirmUpper === false && confirmLower === false && confirmNumber === false && confirmSymbol === false) {
    alert("You must choose at least one type of character");
    var confirmUpper = confirm("Would you like to use uppercase characters?");
    var confirmLower = confirm("Would you like to use lowercase characters?");
    var confirmNumber = confirm("Would you like to use numbers?");
    var confirmSymbol =confirm("Would you like to use special characters?");
  }
  
  var passwordInput = []
  
  if (confirmUpper) {
    passwordInput = passwordInput.concat(uppercase)
  }
  
  if (confirmLower) {
    passwordInput = passwordInput.concat(lowercase);
  }
  
  if (confirmNumber) {
    passwordInput = passwordInput.concat(numbers);
  }
  
  if (confirmSymbol) {
    passwordInput = passwordInput.concat(symbols);
  }
  
  console.log(passwordInput)
  

  var newPassword = ""

  for (i = 0; i < passwordLength; i++){
    newPassword = newPassword + passwordInput[Math.floor(Math.random() * passwordInput.length)];
    console.log(newPassword);
  }
    return newPassword;
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