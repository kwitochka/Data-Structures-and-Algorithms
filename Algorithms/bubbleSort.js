//bubble sort
//we compare each number to the next one and place the largest to the end of the arr
//next comparison we omit the last placed number as it is already on its place

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  return arr;
}

function swap(arr, ind1, ind2) {
  let temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
}

console.log(bubbleSort([2, 5, 3, 6, 1])); //1 2 3 5 6
console.log(bubbleSort([2, 5, 1, -1])); //-1 1 2 5
console.log(bubbleSort([])); // []
