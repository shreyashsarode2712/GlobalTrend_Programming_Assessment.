//3

function flattenArray(nestedArray) {
    let flatArray = [];
    
    nestedArray.forEach(item => {
        if (Array.isArray(item)) {
            flatArray = flatArray.concat(flattenArray(item));
        } else {
            flatArray.push(item);
        }
    });
    
    return flatArray;
}

// Example usage
const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);
