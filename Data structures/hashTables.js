//HASH TABLE is used to implement associative arrays
//or mappings of key-value pairs

const hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
    console.log(hash);
  }
  return hash % max;
};

let HashTable = function() {
  let storage = [];
  const storageLimit = 14;

  this.print = function() {
    console.log(storage);
  };

  this.add = function(key, value) {
    let index = hash(key, storageLimit); // 'beau'/14 = 7
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function(key) {
    var index = hash(key, storageLimit);
    if (this.storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function(key) {
    let index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
};

console.log(hash("Anna", 5));
let ht = new HashTable();
//Each new child object will have its own methods

ht.add("beau", "person");
ht.add("fido", "dog");
ht.add("rex", "dinosour");
ht.add("tux", "penguin");
console.log(ht.lookup("tux"));
ht.print();

console.log(ht);
for (let key in ht) {
  console.log(`${key} ${ht.hasOwnProperty(key)}`);
}

//MY hashtable for FCC
var called = 0;
var hash = string => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash;
};
var myHashTable = function() {
  this.collection = {};
  // change code below this line
  var index;

  this.add = function(key, value) {
    index = hash(key);
    if (!this.collection[index]) {
      this.collection[index] = [[key, value]];
    } else {
      this.collection[index].push([key, value]);
    }
  };

  this.remove = function(key) {
    index = hash(key);
    if (
      this.collection[index][0][0] == key &&
      this.collection[index].length == 1
    ) {
      delete this.collection[index];
    } else {
      for (let i = 0; i < this.collection[index].length; i++) {
        if (this.collection[index][i][0] === key) {
          // delete this.collection[index][i];
          this.collection[index].splice(i, 1);
        }
      }
    }
  };

  this.lookup = function(key) {
    index = hash(key);
    if (this.collection[index][0][0] === key) {
      return this.collection[index][0][1];
    } else {
      let found = false;
      for (let i = 0; i < this.collection[index].length; i++) {
        if (this.collection[index][i][0] === key) {
          found = true;
          return this.collection[index][i][1];
        }
      }
      if (!found) {
        console.log("No such key was found");
      }
    }
  };
  // change code above this line
};

var ob = new myHashTable();
ob.add("name", "anna");
ob.add("address", "kyiv");
ob.add("mane", "ukraine");
ob.add("anem", "2ukraine");
ob.add("country", "NZ");
ob.remove("anem");
console.log(ob);
console.log(ob.lookup("anem"));
