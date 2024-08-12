  // Prompt for the user's name
  let name = prompt('Please enter your name:');
        
  // Prompt for a number between 1 and 10
  let number1 = parseInt(prompt('Please enter a number between 1 and 10:'));
  
  // Check if the number is within the specified range
  while (isNaN(number1) || number1 < 1 || number1 > 10) {
      console.log('The number must be between 1 and 10.');
      number1 = parseInt(prompt('Please enter a number between 1 and 10:'));
  }
  
  // Prompt for a number between 11 and 20
  let number2 = parseInt(prompt('Please enter a number between 11 and 20:'));
  
  // Check if the number is within the specified range
  while (isNaN(number2) || number2 < 11 || number2 > 20) {
      console.log('The number must be between 11 and 20.');
      number2 = parseInt(prompt('Please enter a number between 11 and 20:'));
  }
  
  // Display the collected information
  console.log(`Hello ${name}! You entered ${number1} for the first number and ${number2} for the second number.`);
        
        // Display the collected information
        // alert(`Hello ${name}! You entered ${number1} for the first number and ${number2} for the second number.`);