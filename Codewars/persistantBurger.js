const persistance = num => {
  num = num.toString().split("");
  let index = 0;
  let arr = [];
  while (num.length !== 1) {
    index++;
    num = num
      .reduce((a, b, i) => {
        return a * b;
      })
      .toString()
      .split("");
    arr.push(num);
  }
  console.log(arr);
  return index;
};

console.log(persistance(39));
console.log(persistance(999));

//num = num.split('').map(Number).reduce((a, b) => a * b).toString();
