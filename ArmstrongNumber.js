// let countNum = prompt("Enter the Number = ")
// let num = parseInt(countNum)
let num = parseInt(prompt("Enter the Number = "))
let OriginalNum = num  
let temp = num
let count = 0
let sum =0
// so many useless variables i took
// count = countNum.length;
while (num>0)
  {
    num = parseInt(num/10)
    count++
  }
console.log(count)
while (temp!=0)
{
  let rem = temp % 10;
  sum = sum + Math.pow(rem,count)
  temp = parseInt(temp / 10)
}

if(sum==OriginalNum)
{
  console.log(OriginalNum,"is a armstrong");
}
else
  console.log(OriginalNum,"is not a armstrong");