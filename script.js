// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to button and storing user input in variables via prompts
generateBtn.addEventListener("click", promptMe);




function promptMe() {
  let passwordLength = prompt("What is the length of your password?");
  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Please enter a valid length for the password with at least 8 characters and no more then 128 characters.");
  }
  else if (isNaN(passwordLength)) {
    alert("Please enter a valid numerical length for the password with at least 8 characters and no more than 128 characters.")
  }
  return passwordLength;

  // if ((passwordLength < 8) || (passwordLength > 128));
  //   passwordLength = prompt("Please enter a valid length for the password with at least 8 characters and no more than 128 characters.");
  // return passwordLength;

    // const passwordLength = prompt("What is the length of your password?");
    // switch (passwordLength) {
    //   case case1;
    //     passwordLength = prompt("Please enter a valid length for the password with at least 8 characters and no more than 128 characters.");
    //     break;
    //   case case2;
    //     passwordLength = prompt("Please enter a valid length for the password with at least 8 characters and no more than 128 characters.");
    //     break;
    //   default:
    //     return passwordLength;
    
    } 

