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
 * Binary Search - if target found will return index
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
 * Liner Search - if target found will returns true
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
 * Jump Search - if target found return true
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