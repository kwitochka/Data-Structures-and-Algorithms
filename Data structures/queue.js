//First In, first Out - a way to store data

//Queue with linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class linkedQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  //add to the tail
  //  'first' => 'second' => 'last'
  enqueue(val) {
    let node = new Node(val);

    if (this.length === 0) {
      this.first = node;
      this.last = this.first;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.length;
  }
  //remove from the head
  dequeue() {
    //if length === o return null
    let removedVal = this.first;
    if (this.length === 0) return null;
    //if length === 1 set all to null
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.length--;
    return removedVal;
    //else remove this.first
  }
}

//examples

let qu = new linkedQueue();
qu.enqueue("first");
qu.enqueue("second");
qu.enqueue("third");
console.log(qu);
qu.dequeue();
console.log(qu);
qu.dequeue();
console.log(qu);
qu.dequeue();
console.log(qu);

//factory and arrays
function Queue() {
  let collection = [];

  this.print = function() {
    console.log(collection);
  };

  this.enqueue = function(el) {
    collection.push(el);
  };

  this.dequeue = function(el) {
    collection.shift(el);
  };

  this.front = function() {
    return collection[0];
  };

  this.size = function() {
    return collection.length;
  };

  this.isEmpty = function() {
    return collection.length === 0;
  };
}

let q = new Queue();
q.enqueue("Books");
q.enqueue("Plates");
q.enqueue("CDs");
// q.print();
q.dequeue();
// console.log(q.front());
// q.print();
// console.log(q.size());
// console.log(q.isEmpty());

function PriorityQueue() {
  let collection = [];

  this.printCollection = function() {
    console.log(collection);
  };

  this.enqueue = function(el) {
    if (this.isEmpty()) {
      collection.push(el);
    } else {
      var added = false;
      //if element's priority is less then array's element's
      //put the element on the place of the array's element
      for (let i = 0; i < collection.length; i++) {
        if (el[1] < collection[i][1]) {
          collection.splice(i, 0, el);
          added = true;
          break;
        }
      }
      //else
      if (!added) {
        collection.push(el);
      }
    }
  };

  this.dequeue = function() {
    const val = collection.shift();
    return val[0];
  };

  this.front = function() {
    return collection[0];
  };

  this.size = function() {
    return collection.length;
  };

  this.isEmpty = function() {
    return collection.length === 0;
  };
}

const books = new PriorityQueue();
books.enqueue(["Harry Potter", 5]);
books.enqueue(["Atlant Shrugged", 1]);
books.enqueue(["Bible", 1]);
books.enqueue(["Sherlock Holmes", 3]);
// books.printCollection();
// console.log(books.front());
books.dequeue();
books.dequeue();
// books.printCollection();
// console.log(books.size());
