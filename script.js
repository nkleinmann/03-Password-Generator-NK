// Assignment Code
const generateBtn = document.querySelector("#generate");
const lower = "abcdefghijklmnopqrstuvwxyz";
const lowerArr = lower.split("");
// console.log(lowerArr);
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const upperArr = upper.split("");
// console.log(upperArr);
const num = "0123456789";
const numArr = num.split("");
// console.log(numArr);
const speChar = "!#$%&'()*+,'()*+,-./:;<=>?@[\]^_`{|}~"
const speCharArr = speChar.split("");
// console.log(speCharArr);
let passArray = [];




// let letters = " "
// let passwd = []

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}


 // Add event listener to button and storing user input in variables via prompts
 generateBtn.addEventListener("click", function() {
    passwordDecisions();
    // passwordOptions();
    // getRandom();

    // lowerCase();
    // upperCase();
    // numberCase();
    // specialCase();

  });




// Function prompts user for length of password and alerts if password length is outside of restraints
function passwordDecisions() {
  //password length
  let passwordLength = prompt("What is the length of your password?");
  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Please enter a valid length for the password with at least 8 characters and no more then 128 characters.");
    return;
  }
  // isNan() returns true when input is not a number
  if (isNaN(passwordLength)) {
    alert("Please enter a valid numerical length for the password with at least 8 characters and no more than 128 characters.");
    return;
  }
  const lCase = confirm("Do you want lower case letters in your password?");
  const uCase = confirm("Do you want upper case letters in your password?");
  const numCase = confirm("Do you want numbers in your password?");
  const spCase = confirm("Do you want special characters in your password?");
  if (lCase === true) {
    passArray = passArray.concat(lowerArr)
    console.log(passArray);
  }
  if (uCase === true) {
    passArray = passArray.concat(upperArr);
     console.log(passArray);
    } 
  if (numCase === true) {
    passArray = passArray.concat(numArr);
      console.log(passArray);
    }
  if (spCase === true) {
    passArray = passArray.concat(speCharArr);
      console.log(passArray);
    }
  if ((lCase === false) && (uCase === false) && (numCase === false) && (spCase === false)) {
      alert("Please chose at least one of the options for your password.");
    }
  }

// function getRandom() {
//   for (let i = 0; i < pwLength; i ++) {
//     passwd = passArray[Math.floor(Math.random()*passArray.length)];
//   }
// }
