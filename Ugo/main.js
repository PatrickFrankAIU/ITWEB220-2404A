// Prompt the user to enter a string
let userInput = prompt("Please enter a string:");

// Check if the string has at least 5 characters
if (userInput.length >= 5) {
    // Loop through the first five characters and print each one
    for (let i = 0; i < 5; i++) {
        console.log(`${ordinal(i + 1)} Character: ${userInput.charAt(i)}`);
    }
} else {
    console.log("The string is too short. Please enter at least 5 characters.");
}

// Helper function to get the ordinal representation of a number
function ordinal(n) {
    let suffix = ["th", "st", "nd", "rd"];
    let value = n % 100;
    return n + (suffix[(value - 20) % 10] || suffix[value] || suffix[0]);
}