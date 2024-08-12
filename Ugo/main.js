// prompt the user for input and ensure it is a valid numeric value
function getNumericInput(promptMessage) {
    let value;
    do {
        value = prompt(promptMessage);
        if (value === null) return null; // Handle cancel
        value = parseFloat(value);
    } while (isNaN(value));
    return value;
}

function main() {
    // Get prices of three items
    const price1 = getNumericInput("Enter the price of the first item:");
    const price2 = getNumericInput("Enter the price of the second item:");
    const price3 = getNumericInput("Enter the price of the third item:");

    // Get quantities of three items
    const quantity1 = getNumericInput("Enter the quantity of the first item:");
    const quantity2 = getNumericInput("Enter the quantity of the second item:");
    const quantity3 = getNumericInput("Enter the quantity of the third item:");

    // Calculate total costs for each item
    const totalCost1 = price1 * quantity1;
    const totalCost2 = price2 * quantity2;
    const totalCost3 = price3 * quantity3;

    // Calculate grand total
    const grandTotal = totalCost1 + totalCost2 + totalCost3;

    // Display the grand total
    alert(`Grand total: $${grandTotal.toFixed(2)}`);

    // Stretch Goal: Add sales tax
    const taxRate = 0.05; // 5% sales tax
    const salesTax = grandTotal * taxRate;
    const totalWithTax = grandTotal + salesTax;

    // Display tax and total with tax
    alert(`Sales tax (5%): $${salesTax.toFixed(2)}`);
    alert(`Total with tax: $${totalWithTax.toFixed(2)}`);
}
    // Run the main function when the page loads
window.onload = main;