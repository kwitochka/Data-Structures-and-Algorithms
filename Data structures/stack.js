//Creating stack
const Stack = function() {
  this.count = 0;
  this.storage = {};
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function() {
    return this.count;
  };

  this.peek = function() {
    return this.storage[this.count - 1];
  };
};

let obj = new Stack();
obj.push(5);
obj.push("abc");
obj.push("Here I am");
console.log(obj);
console.log(obj.size());
console.log(obj.pop());
console.log(obj.peek());
console.log(obj.storage);
console.log(obj.size());
