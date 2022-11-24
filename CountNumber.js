let arr="hello world";
let count=0;
for(let i=0;i<arr.length;i++){
  if(arr[i]==" "){
    count++;
  }
}
if(count==0){
  console.log("one word");
}
console.log("number of words",count+1);
