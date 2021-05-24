const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(3) + str.slice(0,3);



//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`We can convert ${str} to piglatin and get ${newStr} as a result.`);


//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let offset = input.question("How many digits should me moved to the end?");

/*
newStr2 = str.slice(offset) + str.slice(0,offset);
console.log(newStr2);
*/

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if(offset === 0) {
  console.log(`${str} is unchanged if we move 0 digits.`)
} else if(offset > str.length ) {
  newStr = str.slice(3) + str.slice(0,3);
  console.log(`User input is too many characters.  Displaying results with a default of 3.  We can convert ${str} to piglatin and get ${newStr} as a result.`);
} else {
  newStr = str.slice(offset) + str.slice(0,offset);
  console.log(`By moving ${offset} digits we can convert ${str} to piglatin and get ${newStr} as a result.`)
}