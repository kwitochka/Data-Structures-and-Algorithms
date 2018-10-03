function updateInventory(arr1, arr2) {
  let obj = {};
  arr1.map(item => (obj[item[1]] = item[0]));
  arr2.map(newItem => {
    if (obj.hasOwnProperty(newItem[1])) {
      obj[newItem[1]] += newItem[0];
    } else {
      obj[newItem[1]] = newItem[0];
    }
  });

  let result = [];

  for (let key in obj) {
    result.push([key, obj[key]]);
  }

  return result.sort().map(x => [x[1], x[0]]);
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
