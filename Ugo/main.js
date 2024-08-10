// Ask the user for their age in years
let ageInYears = prompt("Please enter your age in years:");

// Convert the user's input from a string to a number
ageInYears = Number(ageInYears);

// Check if the input is a valid number
if (isNaN(ageInYears) || ageInYears < 0) {
    console.log("Please enter a valid positive number for age.");
} else {
    // Calculate age in days
    const daysInYear = 365;
    let ageInDays = ageInYears * daysInYear;
    
    // Display the result
    console.log(`You are approximately ${ageInDays} days old.`);
}