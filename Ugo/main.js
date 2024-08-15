// Starting Point
var path = prompt("You wake up in a dark, mysterious cave with no memory of how you got here. You see two paths: one to the left and one to the right. Do you choose 'left' or 'right'?").toLowerCase();

if (path === "left") {
    // Player chose the left path
    var decisionLeft = prompt("You walk down the path and come across a shimmering lake. Do you want to 'swim' across or 'walk' around it?").toLowerCase();

    if (decisionLeft === "swim") {
        // Player chose to swim across the lake
        alert("You bravely swim across the lake and find a hidden treasure chest in the middle of the lake. Congratulations, you've found the treasure!");
    } else if (decisionLeft === "walk") {
        // Player chose to walk around the lake
        alert("You decide to walk around the lake and find an abandoned campsite with useful supplies. You gather what you need and continue on your journey.");
    } else {
        // Invalid input for the left path decision
        alert("You didn't make a valid choice. The cave remains mysterious and your adventure continues.");
    }

} else if (path === "right") {
    // Player chose the right path
    var decisionRight = prompt("You walk down the path and discover a dark tunnel. Do you want to 'explore' the tunnel or 'continue' on the path?").toLowerCase();

    if (decisionRight === "explore") {
        // Player chose to explore the tunnel
        alert("You enter the tunnel and discover a map of the cave. This map might help you find the way out more easily.");
    } else if (decisionRight === "continue") {
        // Player chose to continue on the path
        alert("You continue along the path and encounter a friendly hermit. The hermit offers you guidance and directions to safely exit the cave.");
    } else {
        // Invalid input for the right path decision
        alert("You didn't make a valid choice. The cave remains mysterious and your adventure continues.");
    }

} else {
    // Invalid input for the initial path choice
    alert("You didn't make a valid choice. The cave remains mysterious and your adventure continues.");
}

// Conclusion
alert("After making your choices, you finally find the exit of the cave. Your adventure has been unique and tailored by your decisions. Whether you have treasure, supplies, a map, or guidance, you've experienced an exciting journey. Congratulations!");