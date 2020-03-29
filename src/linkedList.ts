/**
 * @private
 * @class Node
 * @description
 * Node - It will hold value and next referance
 */
class Node<T>{
    /**
     * Node value
     */
    value: T
    /**
     * Node next referance
     */
    next: Node<T> | null
    /**
     * @param value - Value of node
     */
    constructor(value: T) {
        this.value = value
        this.next = null
    }
}
/**
 * @class LinkedList
 * @description
 * Linked lists are among the simplest and most common data structures. They can be used to implement several other common abstract data types, including lists, stacks, queues, associative arrays, and S-expressions, though it is not uncommon to implement those data structures directly without using a linked list as the basis.
 * The principal benefit of a linked list over a conventional array is that the list elements can be easily inserted or removed without reallocation or reorganization of the entire structure because the data items need not be stored contiguously in memory or on disk, while restructuring an array at run-time is a much more expensive operation. Linked lists allow insertion and removal of nodes at any point in the list, and allow doing so with a constant number of operations by keeping the link previous to the link being added or removed in memory during list traversal. 
 */
export class LinkedList<T>{
    private head: any
    /**
     * Will return LinkedList instance
     */
    constructor() {
        this.head = null
    }
    /**
     * @method
     * @param value - Value that will store in linkedlist node
     * @description
     * add method will take value as argument and store in linkedlist node
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
