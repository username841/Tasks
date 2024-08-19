// Leap Year Checker:
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
const year = 2024;
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

// Ticket Pricing:
function calculateTicketPrice(age) {
    let price;
    if (age <= 12) {
        price = 10;
    } else if (age >= 13 && age <= 17) {
        price = 15;
    } else {
        price = 20;
    }
    return price;
}

// Example usage:
const age = 16;
const ticketPrice = calculateTicketPrice(age);
console.log("The ticket price for age " + age + " is $" + ticketPrice);


//Fibonacci Sequence:
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
const n = 6;
console.log("The " + n + "th Fibonacci number is " + fibonacci(n));

//Palindrome Checker:
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Base case: if length is 0 or 1, it's a palindrome
    if (str.length <= 1) {
        return true;
    }
    
    // Check if first and last characters are the same
    if (str[0] === str[str.length - 1]) {
        // Check recursively for the substring excluding the first and last characters
        return isPalindrome(str.substring(1, str.length - 1));
    } else {
        return false;
    }
}

// Example usage:
const testString = "A man, a plan, a canal, Panama!";
console.log("Is \"" + testString + "\" a palindrome? " + isPalindrome(testString));
