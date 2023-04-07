// Assignment Code (given)
var generateBtn = document.querySelector("#generate");


//function generatePassword() {}
function generatePassword() {


  // 1) making sure that the 'generate password' button when clicked, is a prompt with a message. Then you input a value
  var passwordLength = prompt("Enter password length (between 8 and 128):");



  // 2) using 'while' loops because I have multiple conditions. Prompt repeats until condition is met. Making sure user inputed a number between 8 - 128. isNaN is making sure that the value inputted is a number.
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("Invalid input. Enter password length (between 8 and 128):");   // will only display when the user inputs are invald. Otherwise if 'while' loops are true, then it will move on to the next code.
  }






  // 3) adding in all the uppercase letters, lowercase letters, numbers, and symbols for the listed variables.
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numericChars = "0123456789";
  var symbolChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // 4) password variables start off empty, will then be builded from my 'if' and 'for' statements.
  var passwordChars = "";
  var password = "";

  // 5) this will display a confirm-box with an 'ok' button and 'cancel' button. 'Ok' = true. 'Cancel' = false.
  var useUppercase = confirm("Use uppercase characters?");
  var useLowercase = confirm("Use lowercase characters?");
  var useNumbers = confirm("Use numeric characters?");
  var useSymbols = confirm("Use symbol characters?");







  // 6) using a main 'if' statement to see if my other secondary 'if' statements are true. Using || as an 'or' operator.
  if (useUppercase || useLowercase || useNumbers || useSymbols) {
    if (useUppercase) {
      passwordChars += uppercaseChars;    // 7) using '+=' shorthand version to add to my current variable value. (Same as: passwordChars = passwordChars + uppercaseChars)
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

  } else {      // 8) if all my secondary 'if' statments fails. Alert message will display and return empty.
    alert("You've selected 'NONE' of the character types. Please try again.");
    return "";
  }


  // 9) 'for' loop is added. Executes the amount of times equal to my 'passwordLength'. Then new characters will be added to my 'password'.
  for (var i = 0; i < passwordLength; i++) {
      password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));   // 10) this line is how the random generation works. The 'password' is being concatenated by the 'passwordChars'. (Math.random * passwordChars.length [length of password] = random generated password within length value). 'Math.floor' is being used just to round out the decimal number from the 'Math.random'
  }

    return password;    // 11) displays my random generated password
}





// Write password to the #password input (given)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button (given)
generateBtn.addEventListener("click", writePassword);
