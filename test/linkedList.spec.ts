import { LinkedList } from "../src/linkedList"


describe('LinkedList', () => {
    it('search # should return false', () => {
        const list = new LinkedList<number>()
        expect(list.search(1)).toBe(false)
    })
    it('search # should return true', () => {
        const list = new LinkedList<number>()
        list.add(1)
        expect(list.search(1)).toBe(true)
    })
    it('add # should add 1 to linked list', () => {
        const list = new LinkedList<number>()
        list.add(1)
        const values = list.display()
        expect(values[0]).toBe(1)
    })
    it('add # should add 1 to linked list', () => {
        const list = new LinkedList<number>()
        list.add(1)
        const values = list.display()
        expect(values[0]).toBe(1)
    })
    it('insert # should add 2 after 1', () => {
        const list = new LinkedList<number>()
        list.add(1)
        list.insert(2,1)
        const values = list.display()
        expect(values[1]).toBe(2)
    })
    it('insert # should add 2 after 1', () => {
        const list = new LinkedList<number>()
        list.add(10)
        list.add(1)
        list.insert(2,1)
        list.add(100)
        const values = list.display()
        expect(values[2]).toBe(2)
    })
    it('delete # should delete 2 from list', () => {
        const list = new LinkedList<number>()
        list.add(1)
        list.insert(2,1)
        expect(list.delete(2)).toBe(true)
    })
    it('search # should find 100', () => {
        const list = new LinkedList<number>()
        list.add(10)
        list.add(1)
        list.insert(2,1)
        list.add(100)
        expect(list.search(100)).toBe(true)
    })
    it('insert # should insert at end', () => {
        const list = new LinkedList<number>()
        list.add(10)
        list.add(1)
        list.insert(2,1)
        list.add(100)
        list.insert(11,101)
        const values = list.display()
        expect(values[values.length-1]).toBe(11)
    })

    it('insert # should insert at end', () => {
        const list = new LinkedList<number>()
        list.add(10)
        list.add(1)
        list.insert(2,1)
        list.add(100)
        expect(list.delete(100)).toBe(true)
    })
    it('min # should return min', () => {
        const list = new LinkedList<number>()
        list.add(10)
        list.add(1)
        list.add(100)
        expect(list.min()).toBe(1)
    })
    it('max # should return max', () => {
        const list = new LinkedList<number>()
        list.add(10)
        list.add(1)
        list.add(100)
        expect(list.max()).toBe(100)
    })
    it('max # should return null', () => {
        const list = new LinkedList<number>()
        expect(list.max()).toBe(null)
    })
    it('min # should return null', () => {
        const list = new LinkedList<number>()
        expect(list.min()).toBe(null)
    })
    it('display # should return list', () => {
        const list = new LinkedList<number>()
        list.add(10)
        list.add(1)
        list.add(100)
        const newList = list.display()
        expect(newList.length).toBe(3)
    })

})