class Node {
    constructor(bucketIndex,key,value) {
        this.bucketIndex = bucketIndex;
        this.key = key;
        this.value = value;
        this.nextNode = null;
    };
}


export default Node;