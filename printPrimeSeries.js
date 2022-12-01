function printPrimeSeries(num)
  {
    let str = ''
    for(let i=2;i<=num;i++)
      {
        count = 0
        for(j=2;j<=i;j++)
          {
            if(i%j==0)
              count++
          }
        if(count==1)
          str=str+i+' '
      }
    return(str)
  }
let n = 100
console.log(printPrimeSeries(n))
