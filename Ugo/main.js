// Function to calculate the remainder
function calculateRemainder() {
    // Prompt user for the first number and convert it to a number type
    let num1 = parseFloat(prompt("Enter the first number:"));
    
    // Prompt user for the second number and convert it to a number type
    let num2 = parseFloat(prompt("Enter the second number:"));

    // Check if the second number is zero to prevent division by zero
    if (num2 === 0) {
        console.log("Division by zero is not allowed.");
        return;
    }

    // Calculate the remainder using the modulus operator
    let remainder = num1 % num2;

    // Display the result
    console.log("The remainder of " + num1 + " divided by " + num2 + " is: " + remainder);
}

// Call the function to execute
calculateRemainder();