function mySet() {
  //collection for set elements
  let collection = [];

  //check if element is present in the collection

  this.has = function(el) {
    return collection.indexOf(el) !== -1;
  };
  //add elements into collection
  this.add = function(el) {
    if (!this.has(el)) {
      collection.push(el);
      return true;
    }
    return false;
  };

  // return collection;
  this.values = function() {
    return collection;
  };

  // remove element
  this.remove = function(el) {
    if (this.has(el)) {
      let index = collection.indexOf(el);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  //return the union of two sets (all original elements of two sets)
  this.union = function(otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach(el => unionSet.add(el));
    secondSet.forEach(el => unionSet.add(el));

    return unionSet;
  };

  //return similar elements for both sets
  this.intersection = function(otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach(el => {
      if (otherSet.has(el)) {
        intersectionSet.add(el);
      }
    });
    return intersectionSet;
  };

  //returns difference of two sets as a new set
  this.difference = function(otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach(el => {
      if (!otherSet.has(el)) {
        differenceSet.add(el);
      }
    });
    return differenceSet;
  };

  //tests if this set is a subset of another set
  this.subset = function(otherSet) {
    let firstSet = this.values();
    return firstSet.every(el => otherSet.has(el));
  };
}

const hotel = new mySet();
const house = new mySet();
hotel.add("stars");
hotel.add("towels");
hotel.add("stars");
hotel.add("breakfast");
house.add("towels");
house.add("breakfast");
house.add("bed");

console.log(hotel.union(house).values());
console.log(hotel.difference(house).values());
console.log(house.difference(hotel).values());
console.log(hotel.intersection(house).values());
console.log(hotel.subset(house));
console.log(hotel.has("bed"));
