//count the number of unique values given that array is always sorted

const countUniqueValues = arr => {
  if (arr.length === 0) {
    return 0;
  }

  //create variables for first and next pointers
  let first = 0;
  let next = 1;

  //while next > first
  //if first !== next, move next to the first+1
  //else next ++

  while (arr[first] <= arr[next]) {
    if (arr[first] !== arr[next]) {
      first++;
      arr[first] = arr[next];
      next++;
    } else {
      next++;
    }
  }
  //return first + 1
  return first + 1;
};

console.log(countUniqueValues([1, 1, 2, 3, 4, 4, 4, 5, 5, 5, 5])); //5
console.log(countUniqueValues([1, 1, 1])); //1
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 5, 5, 5, 5, 6, 10])); //7
console.log(countUniqueValues([1, 1, 2, 3, 4, 4, 4, 5, 5, 5, 7, 23])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4

//count the number of unique values given that array is always sorted

const countUniqueValues2 = arr => {
  if (arr.length === 0) {
    return 0;
  }

  //create variables for first and next pointers
  let first = 0;

  //while next > first
  //if first !== next, move next to the first+1
  //else next ++

  for (var next = 1; next < arr.length; next++) {
    if (arr[first] !== arr[next]) {
      first++;
      arr[first] = arr[next];
    }
  }
  //return first + 1
  return first + 1;
};

console.log(countUniqueValues2([1, 1, 2, 3, 4, 4, 4, 5, 5, 5, 5])); //5
console.log(countUniqueValues2([1, 1, 1])); //1
console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 5, 5, 5, 5, 6, 10])); //7
console.log(countUniqueValues2([1, 1, 2, 3, 4, 4, 4, 5, 5, 5, 7, 23])); //7
console.log(countUniqueValues2([])); //0
console.log(countUniqueValues2([-2, -1, -1, 0, 1])); //4
