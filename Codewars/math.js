Math.round = function(number) {
  const arr = number.toString().split(".");
  return (arr.length && arr[1][0] > 4 ? Number(arr[0])+1 : Number(arr[0]);
};

Math.ceil = function(number) {
  const arr = number.toString().split(".");
  return arr.length > 1 && arr[1] > 0 ? Number(arr[0]) + 1 : Number(arr[0]);
};

Math.floor = function(number) {
  const arr = number.toString().split(".");
  return Number(arr[0]);
};

console.log(Math.ceil(31.000000001));
//Expected: 32, instead got: 31
