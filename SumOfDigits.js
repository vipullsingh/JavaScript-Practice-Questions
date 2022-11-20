// Write a program in C to find the sum of digits of a number using recursion. Go to the editor
// Test Data :
// Input any number to find sum of digits: 25
// Expected Output:

// The Sum of digits of 25 = 7 

let num = parseInt(prompt("Enter the number ="))
let digit = 0
let sum = 0
function sumofdigits(num)
  {
    digit = num % 10
    sum = sum + digit
    num = parseInt(num / 10)
    if(num!=0)
      sumofdigits(num)
    return sum
  }
console.log(sumofdigits(num))