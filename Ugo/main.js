let principal = prompt ("Enter the principal amount:");
let interestRate =prompt ("Enter the interest rate (for 5% enter 5):");
let timeYears = prompt ("For how many years is the investment");

let rate = interestRate / 100;
let interest = principal * rate * timeYears;
console.log("The simple interest will be : $" + interest.toFixed(2));