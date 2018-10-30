const maxSubarraySum = (arr, num) => {
  if (num > arr.length) return null;

  //create variables for maxSum and tempSum
  let maxSum = 0;
  let tempSum = 0;

  // find sum of first n numbers

  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }

  maxSum = tempSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 10)); //null
