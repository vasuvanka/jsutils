/**
 * Binary Search - if target found will return index
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
 * Liner Search - if target found will returns true
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
 * Jump Search - if target found return true
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