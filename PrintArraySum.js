// Write a program in JavaScript to print the array elements using recursion. Go to the editor
// Test Data :
// Input the number of elements to be stored in the array :6
// Input 6 elements in the array :
// element - 0 : 2
// element - 1 : 4
// element - 2 : 6
// element - 3 : 8
// element - 4 : 10
// element - 5 : 12
// Expected Output :
// The elements in the array are : 2  4  6  8  10  12 
let n = parseInt(prompt("Enter Size of Array :"))
let array=[];
let sum = 0
// for (let i = 0; i<n; i++)
//   {
    
//     // sum += array[i]
//   }
// console.log(array)
// console.log(sum)
// function arraySum(i)
//   {
//     sum = sum + array[i]
//     i++
//     if(i<n)
//       return arraySum[i]
//     return sum
//   }
function arraySum(i)
  {
    array[i] = parseInt(prompt("Enter value of "+(i+1)+"th index ="))
    sum = sum + array[i]
    i++
    if (i<n)
        arraySum(i)
    return sum
  }
console.log(arraySum(0))