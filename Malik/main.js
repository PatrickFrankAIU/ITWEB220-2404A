let var1 = 10.45;
let var2 = 20.5;
let var3 = var1 * var2;
let var4 = var3 + 5;
console.log("Output1: " + var3);
console.log("Output2: " + Math.round(var4));
console.log("Output3: " + Math.round(var3 + var4));

let var5 = prompt("Please enter your name!")
let nameLength = var5.length;
console.log(var5);
console.log(`Your name is ${var5} and you name is ${nameLength} characters long.`)

console.log("The length of the string is: " + nameLength);
if (nameLength > 5) {
    console.log("Your name is longer than 5 characters.");
}else{
    console.log("Your name is not longer than 5 characters.");
}

/*
if( var5 === 'Malik Fidel Warren'){
    console.log("Hello Malik!");
}else if(var5 === 'Pat'){
    console.log("Hello Pat!");
}else if(var5 === 'Trammell Hall'){
    console.log("Hello Trammell! ");
}else if(var5 === 'Ugochinyere Anazodo'){
    console.log("Hello Ugochinyere!");
}else{
    console.log("Hello, welcome to our website!");
}
*/

let var6 = prompt("Please enter a sentence!");
let fisrtChar = var6[7];
console.log(" The first character of your sentence is: " + fisrtChar);

let principal = prompt("Enter the principal amount:");
let interestRate = prompt("Enter the interest rate (for 5% enter 5):");
let timeYears = prompt(" For how many years is the investment")

let rate = interestRate / 100;
let interest = principal * rate * timeYears;
console.log("The simple interest will be: $" + interest.toFixed(2));

// parseFloat(variable) or Number(variable) can be used to convert a string to a number

let age = prompt("Please enter your age in years(Ex: A 15 year old enters 15):");

let ageByDays = age * 365;

console.log("You are approximately " + ageByDays + " days old.");
// Prompts user to enter the price of three items
let firstItemPrice = prompt("Enter the price of the first item:");
let secondItemPrice = prompt("Enter the price of the second item:");
let thirdItemPrice = prompt("Enter the price of the third item:");
// Prompts user to enter the quantity of three items
let firstItemQuantity = prompt("Enter the quantity of the first item:");
let secondItemQuantity = prompt("Enter the quantity of the second item:");
let thirdItemQuantity = prompt("Enter the quantity of the third item:");
//  Converts the prices and quantities to numbers
let price1 = parseFloat(firstItemPrice);
let price2 = parseFloat(secondItemPrice);
let price3 = parseFloat(thirdItemPrice);
let quantity1 = parseFloat(firstItemQuantity);
let quantity2 = parseFloat(secondItemQuantity);
let quantity3 = parseFloat(thirdItemQuantity);
// Calculates the total cost for the items
let itemTotal1 = price1 * quantity1;
let itemTotal2 = price2 * quantity2;
let itemTotal3 = price3 * quantity3;
// Calculates the total cost for all items
let grandCost = itemTotal1 + itemTotal2 + itemTotal3;
// Prints the total cost
console.log("The total cost for all items is: $" + grandCost.toFixed(2));
// Stretch Goal
let saleTax = 5 / 100;
let salesTaxTotal = grandCost.toFixed(2) * saleTax;
console.log(`The sales tax for order is 5% so the total cost including sales tax is $${(grandCost + salesTaxTotal).toFixed(2)}. Have a great day!`);

// Exercise: Display a String by Individual Characters
let userString = prompt("Please enter your name or a sentence:");
console.log("First Character: " + userString.charAt(0));
console.log("Second Character: " + userString.charAt(1));
console.log("Third Character: " + userString.charAt(2));

// Exercise: Modulus Calculator
let value1 = +prompt("Enter the first number:");
let value2 = +prompt("Enter the second number:");
console.log("Modulus: " + value1 % value2);