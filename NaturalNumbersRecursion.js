// Write a program in JavaScript to print first 50 natural numbers using recursion
function naturalNumber(num)
  {
    console.log(num)
    num++
    if(num<=100)
      naturalNumber(num)
  }
naturalNumber(1)