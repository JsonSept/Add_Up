// Create a function that will take in an array or rest 
// parameter and then display the sum of numbers in the array.
//  If an array does not contain any numbers, then display a message : "Provide only numbers"

function sumNumbers(...numbers) {
    // Check if there are any numbers in the array
    if (numbers.every(num => typeof num === 'number')) {
        // Calculate the sum of numbers
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        alert(`Sum of numbers: ${sum}`);
    } else {
        alert("Provide only numbers");
    }
}

// Example usage:
sumNumbers(1, 2, 3, 4); // Output: Sum of numbers: 10
sumNumbers(5, "hello", 8); // Output: Provide only numbers