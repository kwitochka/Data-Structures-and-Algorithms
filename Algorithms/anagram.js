function validAnagram(str1, str2) {
  //check str1.length === str2.length ? continue : false
  if (str1.length !== str2.length || str1 === undefined || str2 === undefined) {
    return false;
  }
  //create obj1 for occurencies in str1
  var obj1 = {};

  for (let char of str1) {
    obj1[char] = ++obj1[char] || 1;
  }
  //create obj2 for occurencies in str2
  var obj2 = {};

  for (let char of str2) {
    obj2[char] = ++obj2[char] || 1;
  }

  //check obj1 for holding obj[key] and its proper amount
  for (let char in obj1) {
    if (obj1[char] !== obj2[char]) {
      return false;
    }
  }
  //return true or false
  return true;
}

console.log(validAnagram("", "")); //true
console.log(validAnagram("anna", "nana")); //true
console.log(validAnagram("false", "falsey")); //false
console.log(validAnagram("false", "falsy")); //false
console.log(validAnagram("freecodecamp", "freecampcode")); //true
