// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  var pass = '';
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
          'abcdefghijklmnopqrstuvwxyz0123456789@#$';
    
  for (i = 1; i <= 8; i++) {
      var char = Math.floor(Math.random()
                  * str.length + 1);
        
      pass += str.charAt(char)
  }
    
  return pass;
}