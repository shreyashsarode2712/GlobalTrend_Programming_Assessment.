//4

function areAnagrams(str1, str2) {
    // Helper function to sort the characters in a string
    const sortString = str => str.split('').sort().join('');

    // Remove any non-alphanumeric characters and convert to lowercase
    const cleanString = str => str.replace(/[^\w]/g, '').toLowerCase();

    // Clean and sort both strings
    const sortedStr1 = sortString(cleanString(str1));
    const sortedStr2 = sortString(cleanString(str2));

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

// Example usage
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2));  

const string3 = "hello";
const string4 = "world";
console.log(areAnagrams(string3, string4)); 
