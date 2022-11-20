// Write a program in JavaScript to count the digits of a given number using recursion. Go to the editor
// Test Data :
// Input a number : 50
// Expected Output :

// The number of digits in the number is :  2
let num = parseInt(prompt("Enter a Number ="))
let count = 0
function countDigits(num)
  {
    num=parseInt(num/10)
    count++
    if(num>0)
      countDigits(num)
    return count
  }
console.log(countDigits(num)) 