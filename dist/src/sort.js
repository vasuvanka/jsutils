"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Bubble Sort
 * @description - Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.
 * @param list - list of elements
 * @returns Array
 */
function bubbleSort(list) {
    var _a;
    for (var i = 0; i < list.length; i++) {
        for (var j = i; j < list.length; j++) {
            if (list[i] > list[j])
                _a = [list[j], list[i]], list[i] = _a[0], list[j] = _a[1];
        }
    }
    return list;
}
exports.bubbleSort = bubbleSort;
/**
 * Merge Sort
 * @description
 * Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.
 * @param list - List of elements
 * @returns Array
 */
function mergeSort(list) {
    if (list.length == 1) {
        return list;
    }
    var mid = Math.round(list.length / 2);
    var left = list.slice(0, mid);
    var right = list.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}
exports.mergeSort = mergeSort;
/**
 * @private
 * @description - Merges arrays into single list
 * @param left - smaller list than middle
 * @param right - higher list than middle
 * @returns Array
 */
function merge(left, right) {
    var result = [];
    var indexLeft = 0;
    var indexRight = 0;
    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        }
        else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
/**
 * Quick Sort
 * @description
 * QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.
 * @param list
 */
function quickSort(list) {
    var smaller = [];
    var larger = [];
    if (list.length <= 1)
        return list;
    for (var i = 1; i < list.length; i++) {
        if (list[i] < list[0])
            smaller.push(list[i]);
        if (list[i] >= list[0])
            larger.push(list[i]);
    }
    return quickSort(smaller).concat(list[0], quickSort(larger));
}
exports.quickSort = quickSort;
//# sourceMappingURL=sort.js.map