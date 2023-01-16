function twoSum(array) {
  let lengthAray = array.length;
  if (array.length > 10) return 1;
  console.log(lengthAray);
  let sum = [];
  for (let i = 0; i < array.length - 1; i += 2) {
    sum.push(array[i] + array[i + 1]);
  }

  return `every sum two  number is ${sum} and max number in array is ${Math.max(
    ...sum
  )}`;
}

console.log(twoSum([1, 2, 6, 8, 9, 7, 20, 60, 50, 90]));
