let num = parseInt(prompt("Enter the number = "))
let OriginalNum = num
sum = 0
while(num!=0)
  {
    let rem = num %10
    sum = sum * 10 + rem
    num = parseInt(num/10)  
  }
if (sum == OriginalNum)
  console.log(OriginalNum+" Is a Palindome Number")
else 
  console.log(OriginalNum+" Is not a Palindome Number")  ``