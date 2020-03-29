/**
 * Bubble Sort
 * @description - Sorts a list with O(n^2) time complexity
 * @param list - list of elements
 * @returns Array
 */
export declare function bubbleSort<T>(list: T[]): T[];
/**
 * Merge Sort
 * @description
 * Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.
 * @param list - List of elements
 * @returns Array
 */
export declare function mergeSort<T>(list: T[]): T[];
/**
 * Quick Sort
 * @description
 * QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.
 * @param list
 */
export declare function quickSort<T>(list: T[]): T[];
