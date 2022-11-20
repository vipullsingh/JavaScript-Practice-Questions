// Write a program in JavaScript to find GCD of two numbers using recursion. Go to the editor
// Test Data :
// Input 1st number: 10
// Input 2nd number: 50
// Expected Output :

// The GCD of 10 and 50 is: 10

let a = parseInt(prompt("Enter first Number"))
let b = parseInt(prompt("Enter Second Number"))
let g= 0
// (a>b)?g = a: g = b
if(a>b)
  g=a
else 
  g=b
let i = 1
let gcd = 0
function findgcd(i)
  {
    if(a%i==0 && b%i==0)
    {
      gcd = i
    }
    i++
    if (i<=g)
      findgcd(i)
    return gcd
  }
console.log(findgcd(i))