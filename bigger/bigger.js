/*
mayor(arr, n):
  // input: ...
  // output: ...
  mayor <- 0
  FOR i <-0 TO n - 2:
    IF arr[i] > arr[i + 1]:
      mayor <- arr[i]
    ELSE
      mayor <- arr[i + 1]
  
  return mayor
*/
/**
 * Finds the largest number in an array.
 * 
 * @param {number[]} arr - An array of numbers to search through
 * @returns {number} The largest number found in the array
 * 
 * @description
 * Iterates through the array starting from index 1 and compares each element
 * with the current largest value. Updates the largest value whenever a greater
 * number is encountered. Returns the maximum value found.
 * 
 * @note
 * There is a potential bug: the loop condition `i < arr.length - 1` excludes
 * the last element of the array from comparison. Consider changing to `i < arr.length`
 * to check all elements.
 * 
 * @example
 * bigger([3, 7, 2, 9, 1]); // Returns 9
 * bigger([10, 5, 15]); // Returns 15
 */
function bigger(arr) {
  let bigger = arr[0];

  for (let i = 1; i < arr.length; ++) {
    if (arr[i] > bigger) {
      bigger = arr[i];
    }
  }

  return bigger;
}

//////////

const arr = [-2, -4, 33, 12, 14, 19, 7];

console.log(bigger(arr)); // 33
// console.log(bigger(arr)); // 33
// console.log(bigger(arr)); // 33