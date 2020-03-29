import { bubbleSort, mergeSort, quickSort } from "../src/sort"
describe("bubbleSort", function () {
    it('bubbleSort should return sorted list', function () {
        const list = [6,2,7,1, 8, 9]
        const sortedList = bubbleSort<number>(list)
        expect(sortedList[0]).toBe(1)
    })
    it('bubbleSort should return sorted list', function () {
        const list = [6,2,7,1, 8, 9]
        const sortedList = bubbleSort<number>(list)
        expect(sortedList[0]).not.toBe(6)
    })
})

describe("mergeSort", function () {
    it('mergeSort should return sorted list', function () {
        const list = [6,2,7,1, 8, 9]
        const sortedList = mergeSort<number>(list)
        expect(sortedList[0]).toBe(1)
    })
    it('mergeSort should return sorted list', function () {
        const list = [6,2,7,1, 8, 9]
        const sortedList = mergeSort<number>(list)
        expect(sortedList[0]).not.toBe(6)
    })
})

describe("quickSort", function () {
    it('quickSort should return sorted list', function () {
        const list = [6,2,7,1, 8, 9]
        const sortedList = quickSort<number>(list)
        expect(sortedList[0]).toBe(1)
    })
    it('quickSort should return sorted list', function () {
        const list = [6,2,7,1, 8, 9]
        const sortedList = quickSort<number>(list)
        expect(sortedList[0]).not.toBe(6)
    })
})