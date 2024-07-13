//2

function evaluateExpression(expression) {
    // Remove any spaces from the expression
    expression = expression.replace(/\s+/g, '');
    
    // Initialize variables to store the current number and the total result
    let currentNumber = 0;
    let total = 0;
    
    // Variable to keep track of the current sign (1 for positive, -1 for negative)
    let sign = 1;
    
    // Iterate through each character in the expression
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
        
        if (!isNaN(char)) {
            // If the character is a digit, add it to the current number
            currentNumber = currentNumber * 10 + parseInt(char);
        } else {
            // If the character is a sign (+ or -), update the total and reset the current number
            total += sign * currentNumber;
            currentNumber = 0;
            
            // Update the sign based on the character
            if (char === '+') {
                sign = 1;
            } else if (char === '-') {
                sign = -1;
            }
        }
    }
    
    // Add the last number to the total
    total += sign * currentNumber;
    
    return total;
}

// Example usage:
const expression = "3 + 5 - 2 + 8";
const result = evaluateExpression(expression);
console.log(`The result of the expression '${expression}' is: ${result}`);
