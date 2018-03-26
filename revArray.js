let arr = [1,2,3,4,5,6,7,8,9];
let sorted = arr.toString();
let first = (sorted.substring(0,5)).split(',');
let second = sorted.substring(6,11).split(',');
let third = sorted.substring(12).split(',');

let res = third.concat(second,first)
console.log(res);

for(var i=0; i<res.length; i++) { res[i] = Number(res[i]); } 
console.log(res);

function chunkedArr(arr, chunk){
  let chunked = [];
  let i = 0;
  
  while(i<arr.length){
    chunked.push(arr.slice(i,i+chunk));
    i+=chunk;
  }
  return chunked;
}

console.log(chunkedArr(res,3));