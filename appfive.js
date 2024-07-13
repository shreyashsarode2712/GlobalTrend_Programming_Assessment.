//5

function removeDuplicates(array) {
    return [...new Set(array)];
}

// Example usage
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log(arrayWithoutDuplicates);  
