// Assignment code here

function generatePassword(){
  window.alert("Click OK to Start Generating Your New Password!");
  let pwLength = prompt("How Many Characters Do You Want Your Password to Have? (8 Characters to 128)");
  let lowerCase=prompt("Type 1 to Include Lower Case Letters");
  let upperCase=prompt("Type 2 to Include Upper Case Letters");
  let numbers=prompt("Type 3 to Include Numbers.");
  let specialCharacters=prompt("Type 4 to Include Special Characters");

  console.log (pwLength, lowerCase)

}

let lc = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

let uc = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

let num = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

let chars = [
  " ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", 
  "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~" 
];

for (i=0; i < lc.length; i++) {
  
}

let passwd = 


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
