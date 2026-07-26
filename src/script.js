// 1. Prompt the user for name, age, and email
const name = prompt("Please enter your name:");
const age = Number(prompt("Please enter your age:"));
const email = prompt("Please enter your email:");

// 2. Alert the formatted message back to user
alert(`Hi ${name}, you are ${age} years old and we'll keep in touch via your email: ${email}`);

// A. Store your name inside a variable and log it
let myName = "Rose Johnson";
console.log("Name:", myName);

// B. Store your age inside a variable and log it
let myAge = 20;
console.log("Age:", myAge);

// C. Add two numbers
let sum = 10 + 5;
console.log("Sum:", sum);

// D. Subtract two numbers
let difference = 20 - 7;
console.log("Difference:", difference);

// E. Divide two numbers
let quotient = 30 / 6;
console.log("Quotient:", quotient);

// F. Multiply two numbers
let product = 8 * 4;
console.log("Product:", product);

// G. Find the remainder of 15 % 4
let remainder = 15 % 4;
console.log("Remainder:", remainder);

// H. Store a boolean value
let roseGold = true;
console.log("Boolean:", roseGold);

// I. Set value to a number and log type
let roseValue = 100;
console.log("Type:", typeof roseValue);

// J. Set value to a string and log type
let stringValue = "Hello World";
console.log("Type of stringValue:", typeof stringValue);

// Assignment 10 - Age Conditions
console.log("User Age:", age);
console.log("Age Type:", typeof age);

if (age < 12) {
    alert(`Hi ${name}, you are ${age} years old and you are too young to register. Sorry 🥺`);
} else if (age >= 12 && age < 18) {
    alert(`Hi ${name}, you are ${age} years old and you have limited options to register for. We will keep in touch via your email: ${email} 👋🏽👋🏽`);
} else {
    alert(`Hi ${name}, you are ${age} years old and you can register for any option of your choosing. We will keep in touch via your email: ${email} 👋🏽👋🏽`);
}