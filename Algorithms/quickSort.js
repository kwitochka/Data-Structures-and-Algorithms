const pivot = (arr, start = 0, end = arr.length - 1) => {
  const swap = (arr, idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  };

  const pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

const arr = [3, 2, 5, 6]; //2,3,5,6
const arr2 = [9, 4, 4, 0, 7, 40, 4, 2]; // 0,2, 4, 4, 4, 7, 9, 40
console.log(pivot(arr)); //1
console.log(pivot(arr2)); //6

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    console.log(`LEFT: left ${left}, right ${right}`);
    //right
    quickSort(arr, pivotIndex + 1, right);
    console.log(`RIGHT: left ${left}, right ${right}`);
  }
  // console.log("ready!");
  return arr;
};

console.log(quickSort(arr));
console.log(quickSort(arr2));
