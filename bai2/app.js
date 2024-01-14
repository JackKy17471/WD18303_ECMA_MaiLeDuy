let sumArray = (arr) => {
    let total = 0;
    for (let number of arr) {
      total += number;
    }
    return total;
  };
  

let arr = [1, 2, 3, 4, 5, 6, 7];

let total = sumArray(arr);

console.log(total);
