//merge sorted array

function sort(arr1, arr2) {
  //create an empty array for result
  let result = [];
  let i = 0;
  let j = 0;
  //go through arr1
  //go through arr2
  while (arr1.length >= 1 && arr2.length >= 1) {
    //compare arr1[i] to arr2[j], find min and push it to the result
    //if min was found in arr1, move i +=1
    //if min was found in arr2, move j +=1
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      result.push(arr2[j]);
      j++;
    }
  }
  //if one of the arrays ends, push remained elements of another array into result
  if (arr1.length >= 1 && arr2[j] === undefined) {
    result = result.concat(arr1.slice(i));
  } else if (arr2.length >= 1 && arr1[i] === undefined) {
    result = result.concat(arr2.slice(j));
  }

  //return result
  return result;
}

const arr1 = [23, 45, 57, 89];
const arr2 = [1, 2, 6];

// console.log(sort(arr1, arr2)); //[1, 2, 6, 23,45, 57, 89]
// console.log(sort([1, 34, 37], [2, 5, 35, 36])); //[1, 2, 5, 34, 36, 37]
// console.log(sort([], [100, 101, 309]));
console.log(sort([-7, -3], [0, 1, 20]));

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // while (arr.length > 1) {
  //divide array by 2 until empty or single element arrays appear
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return sort(left, right);
  //sort small arrays
  //merge sorted arrays back
  // }
}

var ex1 = [1, 8, 7, 5];
var ex2 = [1, 0, -3, -7];

console.log(mergeSort(ex1)); //1,5,7,8
console.log(mergeSort(ex2)); //-7, -3, 0, 1
