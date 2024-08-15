// Function to determine the day of the week and days until the weekend
function getDayAndDaysUntilWeekend(dayNumber) {
    let dayName;
    let daysUntilWeekend;

    // Determine the day of the week and days until the weekend using switch-case
    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            daysUntilWeekend = 6;
            break;
        case 2:
            dayName = "Monday";
            daysUntilWeekend = 5;
            break;
        case 3:
            dayName = "Tuesday";
            daysUntilWeekend = 4;
            break;
        case 4:
            dayName = "Wednesday";
            daysUntilWeekend = 3;
            break;
        case 5:
            dayName = "Thursday";
            daysUntilWeekend = 2;
            break;
        case 6:
            dayName = "Friday";
            daysUntilWeekend = 1;
            break;
        case 7:
            dayName = "Saturday";
            daysUntilWeekend = 0;
            break;
        default:
            console.log("Invalid Day");
            return; // Exit function if the day is invalid
    }

    // Output the name of the day and the days remaining until the weekend
    console.log("Day: " + dayName);
    console.log("Days remaining until the weekend: " + daysUntilWeekend);
}

// Prompt user for input and handle it
let userInput = parseInt(prompt("Enter a number (1-7):"));

// Call the function with the user input
getDayAndDaysUntilWeekend(userInput);