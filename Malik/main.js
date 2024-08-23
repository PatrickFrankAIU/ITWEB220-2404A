/*
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

// Exercise 1: Convert Years to Days 
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



// Exercise: Positive and Negative Numbers #6

let num1 = prompt("Enter a number:");
let num2 = prompt("Enter another number:");

if (num1 > 0 && num2 > 0) {
    console.log("Both numbers are positive.");
} else if (num1 < 0 && num2 < 0) {
    console.log("Both numbers are negative.");
} else if (num1 > 0 && num2 < 0) {
    console.log("The first number is positive and the second number is negative.");
} else if (num1 < 0 && num2 > 0) {
    console.log("The first number is negative and the second number is positive.");
}else if (num1 === 0 || num2 === 0) {
    console.log("One or both of the numbers are zero.");
}else{
    console.log("Please enter valid numbers.");
}

//Exercise: What Day of the Week Is It?

let day = prompt("Enter a number from 1 to 7 (1 for Monday, 2 for Tuesday, etc.)");

switch(day){
    case "1":
        console.log("It's Monday");
        console.log("There are 5 days until the weekend."); // Stretch Goal Method 1
        break;
    case "2":
        console.log("It's Tuesday");
        console.log("There are 4 days until the weekend.");
        break;
    case "3":
        console.log("It's Wednesday");
        console.log("There are 3 days until the weekend.");
        break;
    case "4":
        console.log("It's Thursday");
        console.log("There are 2 days until the weekend.");
        break;
    case "5":
        console.log("It's Friday");
        console.log("Theres 1 more day until the weekend.");
        break;
    case "6":
        console.log("It's Saturday");
        console.log("It's the weekend!");
        break;
    case "7":
        console.log("It's Sunday");
        console.log("It's the weekend!");
        break;
    default:
        console.log("Invalid Day");
}

// Stretch Goal: Method 2
if(day === '1'){
    console.log("There are 5 days until the weekend.");
}else if(day === '2'){
    console.log("There are 4 days until the weekend.");
}else if(day === '3'){
    console.log("There are 3 days until the weekend.");
}else if(day === '4'){
    console.log("There are 2 days until the weekend.");
}else if(day === '5'){
    console.log("Theres 1 more day until the weekend.");
}else if(day === '6' && day === '7'){
    console.log("It's the weekend!");
}else if(day < 1 || day > 7){
    console.log("Invalid Day");
}

// Exercise: The Traffic Light!
let trafficLight = prompt("Enter the traffic light state (red, green, yellow, blinking, none):").toLowerCase();
let timeOfDay = prompt("Enter the time of day (day, night):").toLowerCase();

function adviseDriver(trafficLight, timeOfDay) {
    switch (trafficLight) {
        case 'green':
            console.log('Go');
            break;
        case 'yellow':
            console.log('Slow down');
            break;
        case 'red':
            console.log('Stop');
            break;
        case 'blinking':
            if (timeOfDay === 'day') {
                console.log('Proceed with caution');
            } else if (timeOfDay === 'night') {
                console.log('Stop, then proceed with caution');
            } else {
                console.log('Invalid time of day');
            }
            break;
        case 'none':
            if (timeOfDay === 'day') {
                console.log('Stop, then proceed when safe');
            } else if (timeOfDay === 'night') {
                console.log('Use the light as a stop sign');
            } else {
                console.log('Invalid time of day');
            }
            break;
        default:
            console.log('Invalid traffic light state');
    }
}

adviseDriver(trafficLight, timeOfDay);

// Exercise: Nested IFs #9
let loyaltyPoints = prompt("Enter your loyalty points:");
let purchaseAmount = prompt("Enter your purchase amount:");

let loyaltyPointsNum = parseFloat(loyaltyPoints);
let purchaseAmountNum = parseFloat(purchaseAmount);

if (loyaltyPointsNum > 50) {
    if (loyaltyPointsNum > 150 && purchaseAmountNum > 200) {
        console.log('You qualify for a premium 25% discount');
    } else if (loyaltyPointsNum > 100) {
        console.log('You qualify for a standard 10% discount');
    } else {
        console.log('You qualify for a basic discount of 3%');
    }
} else {
    console.log('You do not qualify for any discount');
}



// Challenge: Escape the Cave!
let story = prompt('You have woken up in a dark cave with no memory of how you got here. You see two paths: one to the left and one to the right. Choose one path by typing "left" or "right".').toLowerCase();
let foundTreasure = false;
let foundSupplies = false;
let foundMap = false;
let foundHermit = false;

if (story === 'left') {
    let walkOrSwim = prompt('You have encountered a lake. Would you like to swim across or walk around it? Please type your answer ("swim" or "walk").').toLowerCase();
    if (walkOrSwim === 'swim') {
        alert('You found a hidden treasure in the middle of the lake.');
        foundTreasure = true;
    } else if (walkOrSwim === 'walk') {
        alert('You found an abandoned campsite with useful supplies.');
        foundSupplies = true;
    }
} else if (story === 'right') {
    let exploreOrContinue = prompt('You have found a tunnel. Would you like to explore the tunnel or continue on the path? Please type your answer ("explore" or "continue").').toLowerCase();
    if (exploreOrContinue === 'explore') {
        alert('You have discovered a map of the cave.');
        foundMap = true;
    } else if (exploreOrContinue === 'continue') {
        alert('You have encountered a friendly hermit who offers guidance.');
        foundHermit = true;
    }
}

if (foundTreasure) {
    alert('You finally find the exit of the cave with a hidden treasure. Congratulations!');
} else if (foundSupplies) {
    alert('You finally find the exit of the cave with useful supplies. You are well-prepared for your journey ahead!');
} else if (foundMap) {
    alert('You finally find the exit of the cave with a map. You now have a better understanding of the cave\'s layout.');
} else if (foundHermit) {
    alert('You finally find the exit of the cave with guidance from the hermit. You feel more confident about your journey ahead.');
} else {
    alert('You finally find the exit of the cave. Although you didn\'t find any special items, you are relieved to be out.');
}

let summary = `Summary of Your Adventure: You chose to go ${story} and `;
if (foundTreasure) {
    summary += 'found a hidden treasure.';
} else if (foundSupplies) {
    summary += 'found useful supplies.';
} else if (foundMap) {
    summary += 'found a map of the cave.';
} else if (foundHermit) {
    summary += 'received guidance from a friendly hermit.';
} else {
    summary += 'did not find any special items.';
}

alert(summary);

// Challenge: Find Your Spirit Animal!
alert('Hello! Welcome to the Find Your Spirit Animal Quiz! Please answer the following questions to find your spirit animal.');

let question1 = prompt('What is your preferred time of the day: Morning or Night?').toLowerCase();
let morning1, coffee1, tea1, night1, stargazing1, nightwalks1;

if (question1 === 'morning') {
    morning1 = prompt('Do you prefer Coffee or Tea?').toLowerCase();
    if (morning1 === 'coffee') {
        coffee1 = prompt('Do you like Cappuccinos or Lattes?').toLowerCase();
    } else if (morning1 === 'tea') {
        tea1 = prompt('Do you enjoy Earl Grey or Black Tea?').toLowerCase();
    }
} else if (question1 === 'night') {
    night1 = prompt('Do you enjoy Stargazing or Night Walks?').toLowerCase();
    if (night1 === 'stargazing') {
        stargazing1 = prompt('Do you prefer Orion or Ursa Major?').toLowerCase();
    } else if (night1 === 'night walks') {
        nightwalks1 = prompt('Do you enjoy the Grand Canyon or Mount Everest?').toLowerCase();
    }
} else {
    alert('Invalid answer for question 1');
}

if (question1 === 'morning' && morning1 === 'coffee' && coffee1 === 'lattes') {
    alert('Your spirit animal is a Llama!');
} else if (question1 === 'morning' && morning1 === 'coffee' && coffee1 === 'cappuccinos') {
    alert('Your spirit animal is a Panda Bear!');
} else if (question1 === 'morning' && morning1 === 'tea' && tea1 === 'earl grey') {
    alert('Your spirit animal is a Baby Panda!');
} else if (question1 === 'morning' && morning1 === 'tea' && tea1 === 'black tea') {
    alert('Your spirit animal is a Monkey!');
} else if (question1 === 'night' && night1 === 'stargazing' && stargazing1 === 'orion') {
    alert('Your spirit animal is a Squirrel!');
} else if (question1 === 'night' && night1 === 'stargazing' && stargazing1 === 'ursa major') {
    alert('Your spirit animal is a Bear!');
} else if (question1 === 'night' && night1 === 'night walks' && nightwalks1 === 'grand canyon') {
    alert('Your spirit animal is a Penguin!');
} else if (question1 === 'night' && night1 === 'night walks' && nightwalks1 === 'mount everest') {
    alert('Your spirit animal is a Hippopotamus!');
} else {
    alert('I\'m sorry, but I couldn\'t find a match for your spirit animal.');
}




// Challenge: JavaScript Quiz #12

// Question 1
let quizQuestion1 = prompt(`What is the correct syntax for creating a function in JavaScript? A. function myFunction(){} B. function myFunction = function(){}. Please choose either A or B.`).toUpperCase();
if (quizQuestion1 === 'A') {
    alert('Correct! Good job!');
} else {
    alert('Sorry, that is incorrect. The correct syntax is function myFunction(){}.');
    alert('Thank you for participating in the quiz! I recommend practicing coding and learning new concepts to improve your skills.');
    throw new Error('Quiz Ended');
}

// Question 2
let quizQuestion2 = prompt(`What does the value NaN represent in JavaScript? A. A value that is not defined B. A value that is not a number. Please choose either A or B.`).toUpperCase();
if (quizQuestion2 === 'B') {
    alert('Correct! Good job!');
} else {
    alert('Sorry, that is incorrect. NaN stands for Not a Number.');
    alert('Thank you for participating in the quiz! I recommend practicing coding and learning new concepts to improve your skills.');
    throw new Error('Quiz Ended');
}

// Question 3
let quizQuestion3 = prompt(`What does the === operator in JavaScript do? A. It checks if two values are equal. B. It checks if two values are equal and of the same type. Please choose either A or B.`).toUpperCase();
if (quizQuestion3 === 'B') {
    alert('Correct! Good job!');
} else {
    alert('Sorry, that is incorrect. The === operator in JavaScript checks if two values are equal and of the same type.');
    alert('Thank you for participating in the quiz!');
    throw new Error('Quiz Ended');
}

alert(`Congratulations on completing all the JavaScript quizzes! Regardless of your score, you should continuously practice coding and learning new concepts to improve your skills.`);



// Exercise: Ternary Operator #13
let number = 12;
let number2 = 4;
console.log(number % 2 === 0? 'Even' : 'Odd'); // #1

console.log(number > number2 ? `${number} is greater than ${number2}` : `$ {number2} is greater than ${number}`); // #2

let post = prompt('Please enter a number between 1 and 100.');
 post =80
let message = post > 0 ? `This number is positive` :
    post < 0 ? `This number is negative` :
    `This number is zero` ;
console.log(message); // #3

let grade= 80;
let gradeA = grade>= 90 ? 'A' : grade >=80 ? 'B' : grade >=70 ? 'C': grade >=60 ? 'D' : 'F';
console.log(gradeA); // #4
let days = prompt(`Please enter a number between 1 and 7 representing a day of the week (1 is Monday)`)
let dayOfWeek = days === '1' ? 'Monday' : days === '2' ? 'Tuesday' : days === '3' ? 'Wednesday' : days === '4' ? 'Thursday' : days === '5' ? 'Friday' : days === '6' ? 'Saturday' : days === '7' ? 'Sunday' : 'Invalid input';
console.log(dayOfWeek); // #5


//Exercise: Simple Counting Loop (But Backwards!) #14
for(let i = 10; i >= 1; i--){
    console.log(i);
}

let i =10
while(i >=1){
    console.log(i);
    i--;
}


// Exercise: Repetitive Message #15
let msg = 'Hello! This is Exercise: Repetitive Message #15';
for(let i = 0; i < 4; i++){
    console.log(msg);
}

// Exercise: Loop with a Simple Calculation #16
let product = 1;
for (let i = 26; i < 75; i++) {
    product *= i;
}
console.log(product);

// Exercise: Loop with More Complex Calculation (but still no IF!) #17
let sumOfProducts = 0;

for (let n = 1; n < 10; n++){
    let product = n * (n + 1);
    sumOfProducts += product;
}
console.log(sumOfProducts);

// Exercise: Number Squared Less Than 50 (Requires an IF!) #18
for(let i = 1; i <= 10; i++){
    let square = i *i;
    if(square < 50){
        console.log(square);
    }
}
// Exercise: Numbers in Multiples #19
for(let i = 1; i <=50; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}



//Challenge: Fizzbuzz! #20 (Pretty Easy)
for(let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz ' + i);
    }else if(i % 3 ===0){
        console.log('Fizz ' + i);
    }else if(i % 5 === 0){
        console.log('Buzz ' + i);
    }
}

let b = 1;
while (b <= 50) {
    if (b % 3 === 0 && b % 5 === 0) {
        console.log('FizzBuzz ' + b);
    } else if (b % 3 === 0) {
        console.log('Fizz ' + b);
    } else if (b % 5 === 0) {
        console.log('Buzz ' + b);
    }
    b++;
}


// Exercise: Small, Medium or Large! #21
for(i = 1; i <=15; i++){
    if(i < 6){
        console.log(`${i} is Small`);
    }else if(i < 10){
        console.log(`${i} is Medium`);
    }else if(i <= 15){
        console.log(`${i} is Large`);
    }
}



let e = 1;
while(e <= 15){
    if(e < 6){
        console.log(`${e} is Small`);
    }else if(e < 10){
        console.log(`${e} is Medium`);
    }else if(e <= 15){
        console.log(`${e} is Large`);
    }
    e++;
}

*/

// Exercise: Array Manipulation and Display #23

let numbers1 =[];
let fiveNumbers = 5
let sum = 0
for(let i = 0; i < fiveNumbers; i++){
    let number = +prompt(`Please enter the ${i+1} number`);
    numbers1.push(number);
    sum += number;
}
for (const number of numbers1) {
    console.log(number);
}
console.log(`The sum of the numbers is ${sum}`);


// Exercise: Array with Helpful Function #24
let numbers2 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(findMinimum(numbers2)); // correct output should be 1

function findMinimum(numbers){
    numbers.sort((a,b) => a-b)
    return numbers[0];
}


// Exercise: Sort an Array of Numbers #25
let names = ["James", "Janice", "Andrew", "Andrea", "Zachary"];
names.sort()
for (const name of names) {
    console.log(`Hello, my name is ${name}`);
}

// Exercise: Sort an Array of Numbers #26
let numbers = [23, 5, 89, 16, 7];
numbers.sort((a, b) => a - b)
for (const number of numbers) {
    console.log(`The number is ${number}`)
}

// Exercise: User Input and Arrays #27

let numberOfValues = +prompt('How many values would you like ?')
let arr =[]
for(let i = 0; i < numberOfValues; i++){
    let number= +prompt('What is the number for ' + (i + 1 ))
    arr.push(number)
}

let i = 0
while(i < numberOfValues){
    let number= +prompt('What is the number for ' + (i + 1 ))
    arr.push(number)
    i++
}

arr.sort((a ,b) => a -b)
for (const item of arr) {
    console.log(item)
}

// Stretch Goal
let numberOfNames = prompt('How many names would you like enter ?')
let arr2 =[]
for(let i = 0; i < numberOfNames; i++){
    let names = prompt('What is the name for ' + (i + 1))
    arr2.push(names)
}

arr2.sort()
for (const name of arr2) {
    console.log(`Hello mt name is ${name}`)
}



// Exercise: Arrays of Objects #28

let employees = [
    { name: 'Pat', office: 'Miami', extension: 1305 },
    { name: 'Sandy', office: 'Miami', extension: 1302 },
    { name: 'Andrea', office: 'Atlanta', extension: 1403 },
];
// #1
for (const employee of employees) {
    console.log(`Name: ${employee.name}, Office: ${employee.office}, Extension: ${employee.extension}`);
}
// #2
function sortByExtension(employees) {
    employees.sort((a, b) => a.extension - b.extension);
    for (const employee of employees) {
        console.log(`Name: ${employee.name}, Office: ${employee.office}, Extension: ${employee.extension}`);
    }
}
sortByExtension(employees)
// #3
function sortByName(name){
    employees.sort((a, b)=> a.name.localeCompare(b.name));
    for (const employee of employees) {
        console.log(`Name: ${employee.name}, Office: ${employee.office}, Extension: ${employee.extension}`);
    }
}
sortByName(employees)

// Stretch Goal
function addNewEmployee() {
    let name = prompt('Enter the name of the new employee:');
    let office = prompt('Enter the office location of the new employee:');
    let extension = prompt('Enter the extension number of the new employee:');

    let newEmployee = {
        name: name,
        office: office,
        extension: parseInt(extension)
    };

    employees.push(newEmployee);
}

addNewEmployee(employees);

for (const employee of employees) {
    console.log(`Name: ${employee.name}, Office: ${employee.office}, Extension: ${employee.extension}`);
}