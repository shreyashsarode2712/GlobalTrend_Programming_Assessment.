//6

function capitalizeFirstLetterOfEachWord(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

// Example usage
const inputString = "hello world from javascript";
const capitalizedString = capitalizeFirstLetterOfEachWord(inputString);
console.log(capitalizedString);
