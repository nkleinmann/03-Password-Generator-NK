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

let letters = " "
let passwd = []

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}


 // Add event listener to button and storing user input in variables via prompts
 generateBtn.addEventListener("click", function() {
    pwLength();
    lowerCase();
    upperCase();
    numberCase();
  });




// Function prompts user for length of password and alerts if password length is outside of restraints
function pwLength() {
  //password length
  let passwordLength = prompt("What is the length of your password?");
  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Please enter a valid length for the password with at least 8 characters and no more then 128 characters.");
  }
  // isNan() returns true when input is not a number
  else if (isNaN(passwordLength)) {
    alert("Please enter a valid numerical length for the password with at least 8 characters and no more than 128 characters.")
  }
  return passwordLength;
    } 


function lowerCase() {
  let lCase = confirm("Do you want lower case letters in your password?");
  if (lCase === true) {
    passArray = passArray.concat(lowerArr)
    console.log(passArray);
  }
}

function upperCase() {
 let uCase = confirm("Do you want upper case letters in your password?");
 if (uCase === true) {
   passArray = passArray.concat(upperArr);
   console.log(passArray);
 } 
}

function numberCase() {
  let numCase = confirm("Do you want upper case letters in your password?");
  if (numCase === true) {
    passArray = passArray.concat(numArr);
    console.log(passArray);
  } 
 }


