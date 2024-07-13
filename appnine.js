//9

function filterEvenNumbers(array) {
    return array.filter(number => number % 2 !== 0);
}

// Example 
const arrayWithEvens = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayWithoutEvens = filterEvenNumbers(arrayWithEvens);
console.log(arrayWithoutEvens);
