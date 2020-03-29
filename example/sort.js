const {
    quickSort,
    bubbleSort,
    mergeSort
} = require("../dist")

const list = [1,4,9,0,17,2]

console.log("bubbleSort", bubbleSort(list))
console.log("mergeSort", mergeSort(list))
console.log("quickSort", quickSort(list))