"use strict"


function reverseString (input) {
	let newString = "";
	for (let i = input.length - 1; i >= 0; i--) {
		newString += input[i];	
	}
	
	return newString;
}

let originalString = ('racecar');
let resultString = reverseString(originalString);

if (originalString === resultString) {
	console.log("This is a palindrome");
}
else { 
	console.log("This is not a palindrome");
}

