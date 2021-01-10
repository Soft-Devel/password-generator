// Assignment code here
function generatePassword() {
//user input prompting
  window.alert("Click OK to Start Generating Your New Password!");
  let pwLength = window.prompt("How Many Characters Do You Want Your Password to Have? (8 Characters to 128)");
  var pwType = window.prompt("Type 1 for All Lower Case Letters, Type 2 for Lower and Upper Case, Type 3 for Lower, Upper Case and Numbers, Type 4 for Lower, Upper, Numbers and Special Characters");
  
  if (pwType ===null || pwType === "" || isNaN(pwType)) {
    window.alert("You Need to Provide a Valid Answer!  Please Try Again.");
    return generatePassword();
  } 

  pwType = parseInt(pwType);

  //password character types

  let lc = "abcdefghijklmnopqrstuvwxyz";

  let uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let num = "0123456789";

  let chars = ' !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';


//function to generate password


  password = "";
  passwordCharSet = "";
  if (pwType===1) {
    passwordCharSet +=lc;
  }
      
  if (pwType===2) {
    passwordCharSet += lc +=uc;
  }

  if (pwType===3) {
    passwordCharSet += lc += uc +=num;
  }  
  
  if (pwType===4) {
    passwordCharSet += lc += uc +=num +=chars;
  }

  plength = parseInt(pwLength);

  for (let i=0; i < plength; i++) {
    password += passwordCharSet.charAt(
      Math.floor(Math.random() * passwordCharSet.length)
    );
  }
  console.log(password);
  return password;
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
