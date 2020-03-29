/**
 * Bubble Sort
 * @description - Sorts a list with O(n^2) time complexity
 * @param list - list of elements 
 * @returns Array
 */
export function bubbleSort<T>(list: T[]): T[] {
    for (let i: number = 0; i < list.length; i++) {
        for (let j: number = i; j < list.length; j++) {
            if (list[i] > list[j])
                [list[i], list[j]] = [list[j], list[i]]
        }
    }
    return list
}

/**
 * Merge Sort
 * @description 
 * Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. 
 * @param list - List of elements
 * @returns Array
 */
export function mergeSort<T>(list: T[]): T[] {
    if (list.length == 1) {
        return list
    }
    const mid = Math.round(list.length / 2)
    const left = list.slice(0, mid)
    const right = list.slice(mid)
    return merge(
        mergeSort<T>(left),
        mergeSort<T>(right)
    )
}
/**
 * @private
 * @description - Merges arrays into single list
 * @param left - smaller list than middle
 * @param right - higher list than middle
 * @returns Array
 */
function merge<T>(left: T[], right: T[]): T[] {
    const result = []
    let indexLeft = 0
    let indexRight = 0

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft++
        } else {
            result.push(right[indexRight])
            indexRight++
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}
/**
 * Quick Sort
 * @description 
 * QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.
 * @param list 
 */
export function quickSort<T>(list: T[]) : T[]{
	let smaller = []; let larger = [];
	if (list.length <= 1)
		return list;
	
	for (var i = 1; i < list.length; i++) { 
		if (list[i] < list[0])
			smaller.push(list[i]); 
		if (list[i] >= list[0]) 
			larger.push(list[i]); 
    }
    return quickSort<T>(smaller).concat(list[0], quickSort<T>(larger));
}

