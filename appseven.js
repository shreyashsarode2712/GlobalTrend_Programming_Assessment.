//7

function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    const fibonacciSequence = [0, 1];
    
    for (let i = 2; i < n; i++) {
        const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextNumber);
    }
    
    return fibonacciSequence;
}

// Example usage
const n = 10;
const fibonacciNumbers = generateFibonacci(n);
console.log(fibonacciNumbers);
