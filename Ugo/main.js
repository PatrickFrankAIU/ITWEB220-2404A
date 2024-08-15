// Introduction to the quiz
alert("Welcome to the Spirit Animal Quiz! We will ask you a few questions to determine your spirit animal.");

// Question 1: Preferred time of day
var timeOfDay = prompt("Do you prefer morning or night?").toLowerCase();

// Initialize the variable to hold the spirit animal result
var spiritAnimal = "";

// Question 2: Follow-up based on the first answer
if (timeOfDay === "morning") {
    var morningPreference = prompt("Do you prefer coffee or tea?").toLowerCase();
    
    if (morningPreference === "coffee") {
        spiritAnimal = "eagle"; // Coffee in the morning is linked to an eagle
    } else if (morningPreference === "tea") {
        spiritAnimal = "dolphin"; // Tea in the morning is linked to a dolphin
    } else {
        spiritAnimal = "unknown"; // Unknown choice
    }
} else if (timeOfDay === "night") {
    var nightPreference = prompt("Do you enjoy stargazing or night walks?").toLowerCase();
    
    if (nightPreference === "stargazing") {
        spiritAnimal = "owl"; // Stargazing is linked to an owl
    } else if (nightPreference === "night walks") {
        spiritAnimal = "wolf"; // Night walks are linked to a wolf
    } else {
        spiritAnimal = "unknown"; // Unknown choice
    }
} else {
    spiritAnimal = "unknown"; // Unknown choice for time of day
}

// Conclusion: Display the result to the user
var resultMessage;

switch (spiritAnimal) {
    case "eagle":
        resultMessage = "Your spirit animal is the Eagle! Eagles are known for their keen vision and strong spirit.";
        break;
    case "dolphin":
        resultMessage = "Your spirit animal is the Dolphin! Dolphins are playful and intelligent creatures.";
        break;
    case "owl":
        resultMessage = "Your spirit animal is the Owl! Owls are wise and observant, with a mysterious aura.";
        break;
    case "wolf":
        resultMessage = "Your spirit animal is the Wolf! Wolves are loyal and have a strong sense of family.";
        break;
    default:
        resultMessage = "Oops! We couldn't determine your spirit animal. Maybe try again?";
}

// Display the final result
alert(resultMessage);