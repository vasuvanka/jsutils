/**
 * @private
 * @class Node
 * @description
 * Node - It will hold value and next referance
 */
class Node<T>{
    value: T
    next: Node<T> | null
    constructor(value: T) {
        this.value = value
        this.next = null
    }
}
/**
 * @class LinkedList
 * @description
 * LinkedList is a data structure
 */
export class LinkedList<T>{
    private head: any
    private temp: any
    constructor() {
        this.head = null
    }
    /**
     * @method
     * @param value - Value that will store in linkedlist
     * @description
     * add method will take value as argument and store in linkedlist
     */
    add<T>(value: T): void {
        const node = new Node<T>(value)
        if (!this.head) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
    }
    /**
     * @method
     * @param value - Value that needs to be search
     * @description
     * Value that needs to be searched on linkedlist 
     * @returns boolean
     */
    search<T>(value: T): boolean {
        let found = false;
        let current = this.head
        while (current) {
            if (current.value === value) {
                found = true
                break
            }
            current = current.next
        }
        return found
    }
    /**
     * @method
     * @param value - Value
     * @param position - Value's position where the new value going to be inserted
     * @description
     * This method will be used to insert value in a given value's position
     */
    insert<T>(value: T, position: T): void {
        let current = this.head
        let found = false
        let lastNode
        while (current) {
            if (current.value === position) {
                found = true
                break;
            }
            lastNode = current
            current = current.next!
        }

        const node = new Node(value)
        if (found) {
            const temp = current.next
            current.next = node
            node.next = temp
        } else {
            current = lastNode
            current.next = node
        }

    }
    /**
     * @method
     * @param value - value that will be removed from Linkedlist
     * @description 
     * delete will removes the node with value and returns boolean
     * @returns boolean
     */
    delete<T>(value: T): boolean {
        let current = this.head
        let found = false
        while (current.next) {
            if (current.next.value === value) {
                found = true
                break
            }
            current = current.next
        }
        if (found) {
            const temp = current.next
            current.next = temp.next;
        }
        return found
    }
    /**
     * @method
     * @description
     * Will return array of values
     * @returns array
     */
    display<T>(): T[] {
        const list: T[] = []
        let current = this.head
        while (current) {
            list.push(current.value)
            current = current.next
        }
        return list
    }
    /**
     * @method
     * @description Returns minimum value
     * @returns T
     */
    min(): T | null {
        let list = this.head
        if (!list) {
            return null
        }
        let min = list.value
        while (list) {
            if (min > list.value) {
                min = list.value
            }
            list = list.next
        }
        return min
    }
    /**
     * @method
     * @description Returns max value 
     * @returns T
     */
    max(): T | null {
        let list = this.head
        if (!list) {
            return null
        }
        let min = list.value
        while (list) {
            if (min < list.value) {
                min = list.value
            }
            list = list.next
        }
        return min
    }

}
