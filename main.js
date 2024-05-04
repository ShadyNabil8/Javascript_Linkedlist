class myNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class LinkedList {
    head = null;
    tail = null;
    size = 0;
    constructor(value) {
        this.head = new myNode(value);
        this.tail = this.head;
        this.size++;
    }
    insert(value) {
        let newNode = new myNode(value);
        if (this.head != null) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        else this.head = newNode;

        this.size++;
    }
    remove(index) {
        if (index < this.size) {
            let node = this.head;
            // Get the node before the indexed node
            for (let i = 0; i < index - 1; i++) {
                node = node.next;
            }
            // If the indexed node was the head node
            if (node === this.head) {
                // If the list contains only one node
                if (this.size === 0) this.head = null;
                // If the list contains more than one node.
                else this.head = node.next;
            }
            // If the indexed node was the tail.
            else if (node.next === this.tail) node.next = null;
            // If the indexed node was in the middle od the list.
            else node.next = node.next.next;
        }
    }
    print() {
        let node = this.head;
        while (node != null) {
            console.log(node.value);
            node = node.next;
        }
    }
};


let ll = new LinkedList(1);
ll.remove(0);
ll.insert(2);
// ll.insert(3);
// ll.insert(4);
// ll.insert(5);
// ll.insert(6);
// ll.insert(7);
//ll.remove(0);
ll.print();

