// Write a program in JavaScript to Print Fibonacci Series using  upto nth term
let num = parseInt(prompt("Enter the number of term = "))
let count = 0
let fn = 0
let sn = 1
console.log(fn)
console.log(sn)
function fib(fn,sn)
  {
    // console.log(fn)
    let temp = fn + sn
    fn = sn
    sn = temp
    count++
    // if(sn<=100)
    console.log(sn)
      if(count<num-2)
        fib(fn,sn)
  }
fib(fn,sn)