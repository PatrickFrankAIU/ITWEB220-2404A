// Question 1
var answer1 = prompt("Question 1: What is the correct syntax for creating a function in JavaScript?\n\nA) function myFunction() {}\nB) createFunction myFunction() {}");

// Check answer for Question 1
if (answer1 === 'A') {
    alert("Correct! Well done.");
    
    // Question 2
    var answer2 = prompt("Question 2: What type of value does NaN represent in JavaScript?\n\nA) Not a Number\nB) Null");

    // Check answer for Question 2
    if (answer2 === 'A') {
        alert("Correct! You're doing great.");
        
        // Question 3
        var answer3 = prompt("Question 3: What does the === operator do in JavaScript?\n\nA) Checks for equality of value and type\nB) Checks for equality of value only");

        // Check answer for Question 3
        if (answer3 === 'A') {
            alert("Congratulations! You've completed the quiz.");
        } else {
            alert("Incorrect. The === operator checks for equality of both value and type.");
        }
    } else {
        alert("Incorrect. NaN stands for 'Not a Number'.");
    }
} else {
    alert("Incorrect. The correct syntax for creating a function is: function myFunction() {}");
}

// Conclusion
alert("Thank you for taking the quiz! Keep practicing to improve your JavaScript skills.");