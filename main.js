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
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }
    remove(index) {
        if (index < this.size) {
            let node = this.head;
            // Get the node before the indexed node
            for (let i = 0; i < index - 1; i++) {
                node = node.next;
            }
            if (node.next === this.tail) node.next = null;
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
ll.insert(2);
ll.insert(3);
ll.insert(4);
ll.insert(5);
ll.insert(6);
ll.insert(7);
ll.remove(6);
ll.print();

