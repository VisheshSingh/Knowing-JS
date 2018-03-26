let arr = [[1,2,3],[4,5,6],[7,8,9]];
let flattenArr = [].concat(...arr);
let rev = flattenArr.sort((a,b) => b-a);
console.log(rev)

function chunkedArr(arr, chunk){
  let chunked = [];
  let i = 0;
  
  while(i<arr.length){
    chunked.push(arr.slice(i,i+chunk));
    i+=chunk;
  }
  return chunked;
}

console.log(chunkedArr(rev,3));