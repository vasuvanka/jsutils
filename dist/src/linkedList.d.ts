/**
 * @class LinkedList
 * @description
 * LinkedList is a data structure
 */
export declare class LinkedList<T> {
    private head;
    private temp;
    constructor();
    /**
     * @method
     * @param value - Value that will store in linkedlist
     * @description
     * add method will take value as argument and store in linkedlist
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
