// peice of data - value
// reference to next node
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// let first = new Node("Hi")
// first.next = new Node("There")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

class LinkedList{
    
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

let list = new LinkedList()
