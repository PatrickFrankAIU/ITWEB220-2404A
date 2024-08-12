
        function calculateCheckout() {
        
            let price1 = parseFloat(prompt("Enter the price of the first item:"));
            let price2 = parseFloat(prompt("Enter the price of the second item:"));
            let price3 = parseFloat(prompt("Enter the price of the third item:"));

            
            let quantity1 = parseInt(prompt("Enter the quantity of the first item:"));
            let quantity2 = parseInt(prompt("Enter the quantity of the second item:"));
            let quantity3 = parseInt(prompt("Enter the quantity of the third item:"));

          

            
            let totalCost1 = price1 * quantity1;
            let totalCost2 = price2 * quantity2;
            let totalCost3 = price3 * quantity3;

    
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
        }

        
        calculateCheckout();
    
