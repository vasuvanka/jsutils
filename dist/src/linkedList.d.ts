/**
 * @class LinkedList
 * @description
 * Linked lists are among the simplest and most common data structures. They can be used to implement several other common abstract data types, including lists, stacks, queues, associative arrays, and S-expressions, though it is not uncommon to implement those data structures directly without using a linked list as the basis.
 * The principal benefit of a linked list over a conventional array is that the list elements can be easily inserted or removed without reallocation or reorganization of the entire structure because the data items need not be stored contiguously in memory or on disk, while restructuring an array at run-time is a much more expensive operation. Linked lists allow insertion and removal of nodes at any point in the list, and allow doing so with a constant number of operations by keeping the link previous to the link being added or removed in memory during list traversal.
 */
export declare class LinkedList<T> {
    private head;
    /**
     * Will return LinkedList instance
     */
    constructor();
    /**
     * @method
     * @param value - Value that will store in linkedlist node
     * @description
     * add method will take value as argument and store in linkedlist node
     */
    add<T>(value: T): void;
    /**
     * @method
     * @param value - Value that needs to be search
     * @description
     * Value that needs to be searched on linkedlist
     * @returns boolean
     */
    search<T>(value: T): boolean;
    /**
     * @method
     * @param value - Value
     * @param position - Value's position where the new value going to be inserted
     * @description
     * This method will be used to insert value in a given value's position
     */
    insert<T>(value: T, position: T): void;
    /**
     * @method
     * @param value - value that will be removed from Linkedlist
     * @description
     * delete will removes the node with value and returns boolean
     * @returns boolean
     */
    delete<T>(value: T): boolean;
    /**
     * @method
     * @description
     * Will return array of values
     * @returns array
     */
    display<T>(): T[];
    /**
     * @method
     * @description Returns minimum value
     * @returns T
     */
    min(): T | null;
    /**
     * @method
     * @description Returns max value
     * @returns T
     */
    max(): T | null;
}
