function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

const arr = [3, -2, 5, 0, 1];

console.log(sumArray(arr));