//First In, first Out - a way to store data

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
q.print();
q.dequeue();
console.log(q.front());
q.print();
console.log(q.size());
console.log(q.isEmpty());
