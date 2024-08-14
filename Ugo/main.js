// Prompt the user to enter a number
let input = prompt("Please enter a number:");

// Convert the input to a number
let number = parseFloat(input);

// Check if the conversion was successful
if (isNaN(number)) {
    console.log("The input is not a valid number.");
} else {
    // Classify the number
    if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}