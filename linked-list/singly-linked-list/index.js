// peice of data - value
// reference to next node
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // adding itme at last
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length +=1
        return this;
    }

    // removing last item
    pop(){
        if(!this.head){
            return undefined;
        } 
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    traverse(){
        let current =  this.head;
        while(current){
            console.log(current.val  + '--->');
            current = current.next;
        }
    }

    // removing head from the item
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length -=1
        if(this.length == 0){
            this.tail = null;
        }
        return currentHead;
    }

    // unshilf is adding new node to beginning of the linked list
    unShift(val){
        let newHead = new Node(val);
        if(!this.head){
            this.head = newHead
            this.tail = newHead
        } else {
            newHead.next = this.head
            this.head = newHead;
        }
        this.length +=1;
        return this;
    }

    // getting the node item by position number (like index in array)
    get(index){
        let counter = 0
        let current = this.head;
        if(index >= this.length || index < 0) return null;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return  current;
    }

    // changing the value of node based on it's position in the linked list
    set(index,val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val
            return true
        } 
        return false
    }

    // insert adding a node to the linked list based on it's position
    insert(index,val){
        if(index > this.length || index < 0) return false;
        // if index is equal to length we need to insert it last that is push method
        if(index == this.length){
            this.push(val)
            return true
            // if index is equal to 0 then we insert it in the beginning that is unShilft method
        } else if(index == 0){
            this.unShift(val)
            return true
        } else {
            let newNode = new Node(val)
            let previousNode = this.get(index-1)
            let tempNode = previousNode.next
            // connect pre to newNode
            // new to next node
            previousNode.next = newNode;
            newNode.next = tempNode;
            this.length +=1
            return true
        }
        // return false
    }

    // removing the node based in index
    remove(index){
        if(index > this.length || index < 0) return false;
        if(index == this.length-1){
            this.pop()
            return true
            // if index is equal to 0 then we insert it in the beginning that is unShilft method
        } else if(index == 0){
            this.shift()
            return true
        } else {
            let previousNode = this.get(index-1)
            let removed = previousNode.next;
            previousNode.next = removed.next;
            this.length -= 1
            return removed
        }
    }

    print(){
        let array = []
        let currentHead = this.head;
        while(currentHead){
            array.push(currentHead.val);
            currentHead = currentHead.next;
        }
        console.log(array);
    }
    //
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null ;
        let next = null ;

        for(let i = 0; i< this.length; i++){
            next = node.next;
            node.next = prev
            prev = node;
            node = next;
        }
        return this;
    }
}

let list = new SinglyLinkedList()
list.push("0")
list.push("1")
list.push("2")
list.push("3")
list.push("4")
list.push("5")
list.push("6")
// console.log({list});
// list.set(0,"0")
// console.log(list);

// list.shift()
// console.log(list);
// list.unShift("HEY")
// list.shift()
// list.shift()
// list.push("1")
console.log(list.print());
list.reverse()
console.log(list.print());

// console.log(list.get(1))
// list.push(100)
// list.insert(0,"22")
// list.insert(1,"222")

// list.insert(6,"2222")

// list.remove(1)
// list.remove(2)

// console.log(list);


