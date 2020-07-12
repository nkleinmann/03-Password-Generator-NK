// Assignment Code
const generateBtn = document.querySelector("#generate");

 // Add event listener to button and calling function
 generateBtn.addEventListener("click", function() {
  passwordDecisions();
  });

// Function for prompts and adding password to textvalue
function passwordDecisions() {

// Assignment Code for strings and arrays
  let passwd = [];
  let passArray = [];
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

// Resets final password
  let finalPassword = "";

  // Write password to the #password input
  let passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;

  // password length 
  let passwordLength = prompt("What is the length of your password?");
  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Please enter a valid length for the password with at least 8 characters and no more then 128 characters.");
    return;
  }
 
  // password length must be a valid numberical length
  // isNan() returns true when input is not a number (checks user input is a number)
  if (isNaN(passwordLength)) {
    alert("Please enter a valid numerical length for the password with at least 8 characters and no more than 128 characters.");
    return;
  }
  
  // Declaring variables for other 4 password options
  const lCase = confirm("Do you want lower case letters in your password?");
  const uCase = confirm("Do you want upper case letters in your password?");
  const numCase = confirm("Do you want numbers in your password?");
  const spCase = confirm("Do you want special characters in your password?");
  
  // Adding lower case, upper case, numbers, and special characters to arrays
  if (lCase === true) {
    passArray = passArray.concat(lowerArr)
    // console.log(passArray);
  }
  if (uCase === true) {
    passArray = passArray.concat(upperArr);
    //  console.log(passArray);
    } 
  if (numCase === true) {
    passArray = passArray.concat(numArr);
      // console.log(passArray);
    }
  if (spCase === true) {
    passArray = passArray.concat(speCharArr);
      // console.log(passArray);
    }
  // Alerting user that they must choose at least one of the options for a password
  if ((lCase === false) && (uCase === false) && (numCase === false) && (spCase === false)) {
      alert("Please chose at least one of the options for your password.");
    }
    // console.log(passArray)
  
    // for loop to create a random password with the correct length and options
  const passwordArrayLength = passArray.length;
  for (let i = 0; i < passwordLength; i++) {
    // Rounds number up to a whold number, * passwordArrayLength gives me the password array length amount of random whole numbers
    let specialNum = Math.ceil(Math.random()*passwordArrayLength);
    passwd.push(passArray[specialNum]);
  }
  finalPassword = passwd.join('');
  // console.log(finalPassword)
  
  // Writes new password to the #password input
  passwordText.value = finalPassword;
}

