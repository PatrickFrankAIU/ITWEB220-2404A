
        
            let price1 = prompt("Enter the price of the first item:");
            let price2 = prompt("Enter the price of the second item:");
            let price3 = prompt("Enter the price of the third item:");
            let item1 = parseFloat(price1);
            let item2 = parseFloat(price2);
            let item3 = parseFloat(price3);
            
            let quantity1 = prompt("Enter the quantity of the first item:");
            let quantity2 = prompt("Enter the quantity of the second item:");
            let quantity3 = prompt("Enter the quantity of the third item:");

            let qty1 = parseFloat (quantity1);
            let qty2 = parseFloat (quantity2);
            let qty3 = parseFloat (quantity3);



          

            
            let totalCost1 = item1 * qty1;
            let totalCost2 = item2 * qty2;
            let totalCost3 = item3 * qty3;

    
            let grandTotal = totalCost1 + totalCost2 + totalCost3;

          
            const taxRate = 0.05; // 5%
            let taxAmount = grandTotal * taxRate;
            let totalWithTax = grandTotal + taxAmount;

            
            alert(`Total cost for item 1: $${totalCost1.toFixed(2)}`);
            alert(`Total cost for item 2: $${totalCost2.toFixed(2)}`);
            alert(`Total cost for item 3: $${totalCost3.toFixed(2)}`);
            alert(`Grand Total: $${grandTotal.toFixed(2)}`);
            alert(`Sales Tax Amount (5%): $${taxAmount.toFixed(2)}`);
            alert(`Total with Tax: $${totalWithTax.toFixed(2)}`);
        

        // Trammell, the line below is calling a function that doesn't exist
        // This is what's causing the error after the program completes. 
        // The line below would work if you were to take all of the above code
        // and place it in a function called "calculateCheckout()". -- Pat
        calculateCheckout();
    
