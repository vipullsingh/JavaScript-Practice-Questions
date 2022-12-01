function checkUpperLower(str)
  {
    var index = 0;
    var i = str.charCodeAt(index);
    if(i>=65 && i<=90)
      return "Upper Case"
    else if(i>=97 && i<=122)
      return "Lower Case"
  }
let ch = 'A'
console.log(checkUpperLower(ch))
