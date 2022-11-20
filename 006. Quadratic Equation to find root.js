let a = parseInt(prompt("Enter First Number"))
let b = parseInt(prompt("Enter Second Number"))
let c = parseInt(prompt("Enter Third Number"))
let discriminant = b*b - 4*a*c
console.log("Discriminant = "+discriminant)

if (discriminant>0)
{
  let root1 = ((-b + Math.sqrt(discriminant))) / 2*a
  let root2 = ((-b - Math.sqrt(discriminant))) / 2*a

console.log("Value of root1 is "+root1+" and "+root2)
}
else if (discriminant==0)
{
  let root1 = root2 = -b/2*a

console.log("Value of root1 is "+root1+" and "+root2)
}
else
{
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
