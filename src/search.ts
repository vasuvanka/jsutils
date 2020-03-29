/**
 * Binary search works on sorted arrays. Binary search begins by comparing an element in the middle of the array with the target value. If the target value matches the element, its position in the array is returned. If the target value is less than the element, the search continues in the lower half of the array. If the target value is greater than the element, the search continues in the upper half of the array. By doing this, the algorithm eliminates the half in which the target value cannot lie in each iteration.
 * @param list List
 * @param target Target
 * @returns boolean
 */
export function binarySearch<T>(list: T[], target: T): boolean {
    if (list.length == 0) {
        return false
    }
    const mid = Math.floor(list.length / 2);
    if (list[mid] === target) {
        return true
    } else if (target < list[mid]) {
        return binarySearch<T>([...list.slice(0, mid)], target)
    } else {
        return binarySearch<T>([...list.slice(mid + 1, list.length)], target)
    }
}
/**
 * Linear search or sequential search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.
 * @param list List
 * @param target target
 * @returns boolean
 */
export function linearSearch<T>(list: T[], target: T): boolean {
    for (let index = 0; index < list.length; index++) {
        if (list[index] === target) {
            return true;
        }
    }
    return false
}
/**
 * Jump search or block search refers to a search algorithm for ordered lists. It works by first checking all items Lkm, where k ∈ N {\displaystyle k\in \mathbb {N} } k\in \mathbb {N} and m is the block size, until an item is found that is larger than the search key. To find the exact position of the search key in the list a linear search is performed on the sublist L[(k-1)m, km].
 * @param list List
 * @param target Target
 * @returns boolean
 */
export function jumpSearch<T>(list: T[], target: T): boolean {
    let found = false
    if (list.length === 0) {
        return found
    }
    if (list.length === 1) {
        return list[0] === target
    }
    const jump = Math.floor(Math.sqrt(list.length))
    let index = jump
    while (index < list.length) {
        if (list[index] >= target) {
            found = linearSearch(list.slice(index - jump, index+1), target)
            break
        } else if (list[index] < target) {
            index += jump
            if (index >= list.length) {
                found = linearSearch(list.slice(list.length - jump, list.length), target)
                break
            }
        }
    }
    return found
}