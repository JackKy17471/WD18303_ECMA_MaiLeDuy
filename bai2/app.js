let source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list){
let [a,b, ...arr] = list;

console.log(a);
console.log(b);
console.log(arr);

return arr;
}

let arr = removeFirstTwo(source);

console.log(arr);
console.log(source);