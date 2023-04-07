// Assignment Code (given)
var generateBtn = document.querySelector("#generate");


//function generatePassword() {}
function generatePassword() {


  
  var passwordLength = prompt("Enter password length (between 8 and 128):");

  
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("Invalid input. Enter password length (between 8 and 128):");   
  }



 
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numericChars = "0123456789";
  var symbolChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  
  var passwordChars = "";
  var password = "";

  
  var useUppercase = confirm("Use uppercase characters?");
  var useLowercase = confirm("Use lowercase characters?");
  var useNumbers = confirm("Use numeric characters?");
  var useSymbols = confirm("Use symbol characters?");





  if (useUppercase || useLowercase || useNumbers || useSymbols) {
    if (useUppercase) {
      passwordChars += uppercaseChars;   
    } else {
    }
    
    if (useLowercase) {
      passwordChars += lowercaseChars;
    } else {
    }
    
    if (useNumbers) {
      passwordChars += numericChars;
    } else {
    }
    
    if (useSymbols) {
      passwordChars += symbolChars;
    }else {
    }

  } else {      
    alert("You've selected 'NONE' of the character types. Please try again.");
    return "";
  }


  
  for (var i = 0; i < passwordLength; i++) {
      password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
  }

    return password;    
}





// Write password to the #password input (given)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button (given)
generateBtn.addEventListener("click", writePassword);
