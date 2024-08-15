function determineOffer(loyaltyPoints, purchaseAmount) {
    if (loyaltyPoints <= 50) {
        return 'No Offer'; // User does not qualify for any special offer
    } else if (loyaltyPoints > 150 && purchaseAmount > 200) {
        return 'Premium Offer'; // User qualifies for the premium offer
    } else if (loyaltyPoints > 100) {
        return 'Standard Offer'; // User qualifies for the standard offer
    } else {
        return 'No Offer'; // For cases where loyalty points > 50 but <= 100
    }
}

// Example usage
console.log(determineOffer(160, 250)); // Output: Premium Offer
console.log(determineOffer(120, 150)); // Output: Standard Offer
console.log(determineOffer(70, 100));  // Output: No Offer
console.log(determineOffer(45, 300));  // Output: No Offer