let sum=0;
let digit;
let extra;
temp = 0;
let num = prompt("enter the number you want to test");
let no_to_check = parseInt(num)

// let no_of_digits = no_to_check.length;
// console.log(no_of_digits);
armStrongRec(no_to_check);
function armStrongRec(number)
{
  if(number>0)
  {
  digit = num.length;
  temp = number%10;
  sum = sum + temp**digit;
  // console.log(sum);
  extra = Math.floor(number/10);

  armStrongRec(extra);
  }
  
}
console.log(digit)
if(sum==no_to_check)
{
  console.log(no_to_check,"is a armstrong");
}
else
  console.log(no_to_check,"is not a armstrong");