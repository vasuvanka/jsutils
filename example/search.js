const jsutils = require("../dist")
const list = [1,4,9,0,17,2]
const target = 0
console.log("binary search :: ",jsutils.binarySearch(jsutils.mergeSort(list),target))
console.log("linear search :: ",jsutils.linearSearch(list,target))
console.log("jump search :: ",jsutils.jumpSearch(jsutils.mergeSort(list),target))