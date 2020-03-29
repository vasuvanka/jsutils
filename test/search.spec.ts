import { binarySearch, linearSearch,jumpSearch } from "../src/search"
describe("binarysearch", function () {
    it('binarysearch should return true', function () {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const target = 5
        const found = binarySearch<number>(list, target)
        expect(found).toBe(true)
    })
    it('binarysearch should return false', function () {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const target = 0
        const found = binarySearch<number>(list, target)
        expect(found).toBe(false)
    })
    it('binarysearch should return false', function () {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const target = 50
        const found = binarySearch<number>(list, target)
        expect(found).toBe(false)
    })
    
})
describe("linearsearch", function () {
    it('linearsearch should return true', function () {
        const list = [1, 2, 3, 5, 6, 7, 8, 9]
        const target = 5
        const found = linearSearch<number>(list, target)
        expect(found).toBe(true)
    })
    it('linearsearch should return false', function () {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const target = 0
        const found = linearSearch<number>(list, target)
        expect(found).toBe(false)
    })
    it('linearsearch should return false', function () {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const target = 50
        const found = linearSearch<number>(list, target)
        expect(found).toBe(false)
    })
    
})
describe("jumpSearch", function () {
    it('jumpSearch should return true', function () {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const target = 5
        const found = jumpSearch<number>(list, target)
        expect(found).toBe(true)
    })
    it('jumpSearch should return false', function () {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const target = 0
        const found = jumpSearch<number>(list, target)
        expect(found).toBe(false)
    })
    it('jumpSearch should return false', function () {
        const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const target = 50
        const found = jumpSearch<number>(list, target)
        expect(found).toBe(false)
    })
    it('jumpSearch should return false', function () {
        const list :  number[]= []
        const target = 50
        const found = jumpSearch<number>(list, target)
        expect(found).toBe(false)
    })
    it('jumpSearch should return false', function () {
        const list = [1]
        const target = 50
        const found = jumpSearch<number>(list, target)
        expect(found).toBe(false)
    })
})