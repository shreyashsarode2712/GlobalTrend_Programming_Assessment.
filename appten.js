//10

function toTitleCase(str) {
    return str.split(' ').map(word => {
        if (word.length === 0) return '';
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

const inputString = "hello world from javascript";
const titleCasedString = toTitleCase(inputString);
console.log(titleCasedString); 
