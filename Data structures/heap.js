class MaxBinaryHeap {
  constructor() {
    this.collection = [];
    this.length = 0;
  }

  bubbleUp(parentIndex, childIndex) {
    [this.collection[parentIndex], this.collection[childIndex]] = [
      this.collection[childIndex],
      this.collection[parentIndex]
    ];
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  insert(val) {
    this.collection.push(val);
    this.length++;
    if (this.collection.length === 1) {
      return true;
    }
    let childIndex = this.length - 1;
    let parentIndex = this.getParentIndex(childIndex);
    while (
      this.collection[childIndex] > this.collection[parentIndex] &&
      parentIndex >= 0
    ) {
      this.bubbleUp(parentIndex, childIndex);
      childIndex = parentIndex;
      parentIndex = this.getParentIndex(childIndex);
    }
    return this.collection;
  }

  extractMax() {
    if (this.length === 0) return undefined;
    this.bubbleUp(0, this.length - 1);
    const removed = this.collection.pop();
    this.length--;
    if (this.length === 1) return removed;

    const compareNodes = parentIndex => {
      let leftChildIndex = 2 * parentIndex + 1;
      let rightChildIndex = 2 * parentIndex + 2;
      while (
        this.collection[leftChildIndex] > this.collection[parentIndex] ||
        this.collection[rightChildIndex] > this.collection[parentIndex]
      ) {
        if (
          this.collection[leftChildIndex] > this.collection[rightChildIndex] ||
          !this.collection[rightChildIndex]
        ) {
          this.bubbleUp(parentIndex, leftChildIndex);
          compareNodes(leftChildIndex);
        } else if (
          this.collection[leftChildIndex] < this.collection[rightChildIndex] ||
          !this.collection[leftChildIndex]
        ) {
          this.bubbleUp(parentIndex, rightChildIndex);
          compareNodes(rightChildIndex);
        } else {
          return removed;
        }
      }
    };
    compareNodes(0);

    return removed;
  }

  print() {
    console.log(this.collection);
  }
}
//2,7,26,25,19,17,1,90,3,36
let heap = new MaxBinaryHeap();
heap.insert(2);
heap.insert(7);
heap.insert(26);
heap.insert(25);
heap.insert(19);
heap.insert(17);
heap.insert(1);
heap.insert(90);
heap.insert(3);
heap.insert(36);
heap.print();
heap.extractMax();
heap.print();
heap.extractMax();
heap.print();
heap.extractMax();
heap.extractMax();
heap.print();
heap.extractMax();
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
heap.print();
