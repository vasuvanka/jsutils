"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Binary search works on sorted arrays. Binary search begins by comparing an element in the middle of the array with the target value. If the target value matches the element, its position in the array is returned. If the target value is less than the element, the search continues in the lower half of the array. If the target value is greater than the element, the search continues in the upper half of the array. By doing this, the algorithm eliminates the half in which the target value cannot lie in each iteration.
 * @param list List
 * @param target Target
 * @returns boolean
 */
function binarySearch(list, target) {
    if (list.length == 0) {
        return false;
    }
    var mid = Math.floor(list.length / 2);
    if (list[mid] === target) {
        return true;
    }
    else if (target < list[mid]) {
        return binarySearch(__spreadArrays(list.slice(0, mid)), target);
    }
    else {
        return binarySearch(__spreadArrays(list.slice(mid + 1, list.length)), target);
    }
}
exports.binarySearch = binarySearch;
/**
 * Linear search or sequential search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.
 * @param list List
 * @param target target
 * @returns boolean
 */
function linearSearch(list, target) {
    for (var index = 0; index < list.length; index++) {
        if (list[index] === target) {
            return true;
        }
    }
    return false;
}
exports.linearSearch = linearSearch;
/**
 * Jump search or block search refers to a search algorithm for ordered lists. It works by first checking all items Lkm, where k ∈ N {\displaystyle k\in \mathbb {N} } k\in \mathbb {N} and m is the block size, until an item is found that is larger than the search key. To find the exact position of the search key in the list a linear search is performed on the sublist L[(k-1)m, km].
 * @param list List
 * @param target Target
 * @returns boolean
 */
function jumpSearch(list, target) {
    var found = false;
    if (list.length === 0) {
        return found;
    }
    if (list.length === 1) {
        return list[0] === target;
    }
    var jump = Math.floor(Math.sqrt(list.length));
    var index = jump;
    while (index < list.length) {
        if (list[index] >= target) {
            found = linearSearch(list.slice(index - jump, index + 1), target);
            break;
        }
        else if (list[index] < target) {
            index += jump;
            if (index >= list.length) {
                found = linearSearch(list.slice(list.length - jump, list.length), target);
                break;
            }
        }
    }
    return found;
}
exports.jumpSearch = jumpSearch;
//# sourceMappingURL=search.js.map