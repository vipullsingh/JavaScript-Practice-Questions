// Write a program in JavaScript to calculate the sum of numbers from 1 to n using recursion
let sum = 0
function summation(num)
  {
    sum = sum + num
    num++
    if(num<=5)
      summation(num)
  return sum
  }
console.log(summation(1))