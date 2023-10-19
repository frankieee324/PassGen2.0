// Assignment Code
var generatePW = document.querySelector("#generate");
function generatepassword(){

  var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var symbol = "!@#$%^&*";
var number = "0123456789";
var randSelect= "";
var randomKey= "";


// Write password to the #password input
var keyLength= parseInt(prompt ("Password must be between 8 and 128 characters!"),10);
console.log(keyLength);
  if(keyLength < 8 || keyLength > 128){
    alert("Your password must meet criteria");
  }else{
    var uppercaseConf = confirm("Does password have an uppercase letter?");
    var lowercaseConf = confirm("Does password have a lowercase letter?");
    var SymbolConf = confirm("Does password have a symbol?");
    var numberConf = confirm("Does password have a number?");

  }
  if (uppercaseConf=== false && lowercaseConf=== false && SymbolConf === false && numberConf=== false){
    return "Your password does not meet critia!";
  } 

if(lowercaseConf){randSelect+=lowerCase;}
if(uppercaseConf){randSelect+=upperCase;}
if(SymbolConf){randSelect+=symbol;}
if(numberConf){randSelect+=number;}

//let password = "";
for( let i =0; i < keyLength; i++) {
  randomKey+= randSelect[Math.floor(Math.random() * randSelect.length)];
  //randomKey+= lowerCaseCase[Math.floor(Math.random() * lowerCaseCase.length)];
  //randomKey+= symbol[Math.floor(Math.random() * symbol.length)];
  //randomKey+= number[Math.floor(Math.random()* number.length)];
}
//return(randomKey);

var passGen = document.querySelector("#password") 
//function typepassword(randomKey){
  if(password.length===0)
    return;
  passGen.value = randomKey;



//var Finalpassword= generatepassword();
}
// Add event listener to generate button
generatePW.addEventListener("click", generatepassword)

