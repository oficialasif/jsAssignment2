// Function 1: Calculate the difference between two numbers
function calculateDifference(num1, num2) {
    return num1 - num2;
}

// Function 2: Check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// Function 3: Find the minimum number in an array
function findMin(arr) {
    return Math.min(...arr);
}

// Function 4: Filter out even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Function 5: Sort an array in descending order
function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

// Function 6: Lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    if (str.length === 0) return '';
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// Function 7: Count the number of vowels in a string
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return str.split('').filter(char => vowels.includes(char)).length;
}

// Function 8: Calculate the average of numbers in an array
function findAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
