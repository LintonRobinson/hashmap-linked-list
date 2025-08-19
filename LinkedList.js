import Node from "./Node.js"
class LinkedList {
    constructor() {
        this.head = null;
    };
    
    prependNode(data) {
        if (this.head === null) {
            this.head = new Node();
            this.head.value = data;
            return;
        }; 

        let prependedNode = new Node();
        prependedNode.value = data;
        prependedNode.nextNode = this.head;
        this.head = prependedNode;
    };

    appendNode(data) {
        if (this.head === null) {
            this.head = new Node();
            this.head.value = data;
            return;
        }; 

        let currentNode = this.head;
        while (currentNode.nextNode != null) currentNode = currentNode.nextNode;
        currentNode.nextNode = new Node();
        currentNode.nextNode.value = data;

    };


    getSize() {
        if (this.head === null) throw Error('Link list is empty.');
        let total = 0;
        let currentNode = this.head
        while (currentNode.nextNode != null) {
            currentNode = currentNode.nextNode;
            total++;    
        }; 
        
        total++;
        return total;
    };

    getHead() {
        if (this.head === null) throw Error('Link list is empty.');
        return this.head;
    };

    getTail() {
        if (this.head === null) throw Error('Link list is empty.');
        let currentNode = this.head;
        while (currentNode.nextNode != null) currentNode = currentNode.nextNode;
        return currentNode;
    };

    getNodeAtIndex(index) {
        if (this.head === null) throw Error('Link list is empty.');
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex != index) {
            currentNode = currentNode.nextNode;
            currentIndex++;    
        }; 
        return currentNode; 
    };

    pop() {
        if (this.head === null) throw Error('Link list is empty.'); 
        let currentNode = this.head;
        let previousNode = null;
        while (currentNode.nextNode != null) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        } 
        previousNode.nextNode = null;
    };

    listContainsValue(value) {
        if (this.head === null) throw Error('Link list is empty.'); 
        let currentNode = this.head;
        while (currentNode != null) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        } 
        return false;
    };

    findListValueIndex(value) {
        if (this.head === null) throw Error('Link list is empty.'); 
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentNode != null) {
            if (currentNode.value === value) return currentIndex;
            currentNode = currentNode.nextNode;
            currentIndex++; 
        } 
        return null;
    }

    linkedListToString() {
       if (this.head === null) throw Error('Link list is empty.'); 
        let currentNode = this.head;
        let linkedListString = "";
        while (currentNode != null) {
            linkedListString += `(${currentNode.value})-->`
            currentNode = currentNode.nextNode;
        }
        linkedListString += `(null)-->`;
        
        return linkedListString
    }

    insertAt(value, index) {
        if (this.head === null) {
            this.head = new Node();
            this.head.value = value;
            return 
        }; 

        let currentIndex = 0;
        let currentNode = this.head;
        let previousNode = null;
        
        while (currentIndex != index) {  
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            currentIndex++;
        }; 

        if (currentIndex === 0) { // If it's the first node to be added, reassign head
            let prependedNode = new Node();
            prependedNode.value = value;
            prependedNode.nextNode = this.head;
            this.head = prependedNode;
        } else {
            previousNode.nextNode = new Node();
            previousNode.nextNode.value = value;
            previousNode.nextNode.nextNode = currentNode;
        };     
    }

    removeAt(index) {
        if (this.head === null) throw Error('Link list is empty.'); 

        let currentIndex = 0;
        let currentNode = this.head;
        let previousNode = null;
        
        while (currentIndex != index) {  
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            console.log('Ran',currentIndex);
            currentIndex++;
            

        }; 
        
        if (currentIndex === 0 && currentNode.nextNode === null) { // only 1 node in list
            console.log('Ya Mamas Culpret',currentIndex)
            this.head = null;
            
        
        } else if (currentIndex === 0) { // head of list, and more than one node
            this.head = this.head.nextNode
            
        } 
        else if (currentNode.nextNode === null) { // tail
            previousNode.nextNode = null;
            
        } else {
            previousNode.nextNode = currentNode.nextNode;
            
        };        
    };
};



export default LinkedList