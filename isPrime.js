function isPrime(num)
  {
    let count = 0
    for(let i=1;i<=num;i++)
      {
        if(num%i==0)
        {
          count++
        }
      }
        if(count==2)
          return true
        else
          return false
  }
let n = 13
console.log(isPrime(n))
