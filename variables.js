//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 

let myName = "Lucas Freire" // I use 'let' in case that I need to change after
console.log(myName) // code to check

//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE

let faveNum = 7;  // I use 'let' in case that I need to change after
console.log(faveNum)  // code to check


//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE

let lovesCode = true // Code that makes my variablr true
console.log(lovesCode) // code to check

//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE

if (faveNum === 13) { //this code is faveNum is 13 is going to say lucky 13! if is not say nor lucky 13
 console.log('lucky 13!')
} else {
  console.log('not lucky 13')
}


//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE

for (let i = 0; i < 5; i++) { // this code is made to repeat five times
  console.log(faveNum)
}
