"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @private
 * @class Node
 * @description
 * Node - It will hold value and next referance
 */
var Node = /** @class */ (function () {
    /**
     * @param value - Value of node
     */
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
/**
 * @class LinkedList
 * @description
 * Linked lists are among the simplest and most common data structures. They can be used to implement several other common abstract data types, including lists, stacks, queues, associative arrays, and S-expressions, though it is not uncommon to implement those data structures directly without using a linked list as the basis.
 * The principal benefit of a linked list over a conventional array is that the list elements can be easily inserted or removed without reallocation or reorganization of the entire structure because the data items need not be stored contiguously in memory or on disk, while restructuring an array at run-time is a much more expensive operation. Linked lists allow insertion and removal of nodes at any point in the list, and allow doing so with a constant number of operations by keeping the link previous to the link being added or removed in memory during list traversal.
 */
var LinkedList = /** @class */ (function () {
    /**
     * Will return LinkedList instance
     */
    function LinkedList() {
        this.head = null;
    }
    /**
     * @method
     * @param value - Value that will store in linkedlist node
     * @description
     * add method will take value as argument and store in linkedlist node
     */
    LinkedList.prototype.add = function (value) {
        var node = new Node(value);
        if (!this.head) {
            this.head = node;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    };
    /**
     * @method
     * @param value - Value that needs to be search
     * @description
     * Value that needs to be searched on linkedlist
     * @returns boolean
     */
    LinkedList.prototype.search = function (value) {
        var found = false;
        var current = this.head;
        while (current) {
            if (current.value === value) {
                found = true;
                break;
            }
            current = current.next;
        }
        return found;
    };
    /**
     * @method
     * @param value - Value
     * @param position - Value's position where the new value going to be inserted
     * @description
     * This method will be used to insert value in a given value's position
     */
    LinkedList.prototype.insert = function (value, position) {
        var current = this.head;
        var found = false;
        var lastNode;
        while (current) {
            if (current.value === position) {
                found = true;
                break;
            }
            lastNode = current;
            current = current.next;
        }
        var node = new Node(value);
        if (found) {
            var temp = current.next;
            current.next = node;
            node.next = temp;
        }
        else {
            current = lastNode;
            current.next = node;
        }
    };
    /**
     * @method
     * @param value - value that will be removed from Linkedlist
     * @description
     * delete will removes the node with value and returns boolean
     * @returns boolean
     */
    LinkedList.prototype.delete = function (value) {
        var current = this.head;
        var found = false;
        while (current.next) {
            if (current.next.value === value) {
                found = true;
                break;
            }
            current = current.next;
        }
        if (found) {
            var temp = current.next;
            current.next = temp.next;
        }
        return found;
    };
    /**
     * @method
     * @description
     * Will return array of values
     * @returns array
     */
    LinkedList.prototype.display = function () {
        var list = [];
        var current = this.head;
        while (current) {
            list.push(current.value);
            current = current.next;
        }
        return list;
    };
    /**
     * @method
     * @description Returns minimum value
     * @returns T
     */
    LinkedList.prototype.min = function () {
        var list = this.head;
        if (!list) {
            return null;
        }
        var min = list.value;
        while (list) {
            if (min > list.value) {
                min = list.value;
            }
            list = list.next;
        }
        return min;
    };
    /**
     * @method
     * @description Returns max value
     * @returns T
     */
    LinkedList.prototype.max = function () {
        var list = this.head;
        if (!list) {
            return null;
        }
        var min = list.value;
        while (list) {
            if (min < list.value) {
                min = list.value;
            }
            list = list.next;
        }
        return min;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
//# sourceMappingURL=linkedList.js.map