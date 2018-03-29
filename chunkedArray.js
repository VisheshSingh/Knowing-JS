let arr = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
//output  [[1,4,7,10][2,5,8,11][3,6,9,12]]

let flatten = [].concat(...arr);
//flatten = [1,2,3,4,5,6,7,8,9,10,11,12]
console.log(flatten);

let newarr1= [];
for(let i=0;i<flatten.length;i+=3){
	newarr1.push(flatten[i]);
}

let newarr2= [];
for(let i=1;i<flatten.length;i+=3){
	newarr2.push(flatten[i]);
}

let newarr3= [];
for(let i=2;i<flatten.length;i+=index){
	newarr3.push(flatten[i]);
}

console.log(newarr1);
console.log(newarr2);
console.log(newarr3);

let ordered = newarr1.concat(newarr2,newarr3);
console.log(ordered);//[1,4,7,10,2,5,8,11,3,6,9,12]

function chunkedArr(arr, len){
	let newchunk = [];
   let i=0;
   
   while(i<arr.length){
   	newchunk.push(arr.slice(i,i+len));
      i+=len;
   }
   return newchunk;
}

console.log(chunkedArr(ordered, 4));
