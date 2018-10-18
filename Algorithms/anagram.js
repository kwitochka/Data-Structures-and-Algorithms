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

  //obj1[char] === str2[char] ? --obj1[char] : false

  for (let char of str2) {
    if (obj1[char] > 0) {
      obj1[char] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("", "")); //true
console.log(validAnagram("anna", "nana")); //true
console.log(validAnagram("false", "falsey")); //false
console.log(validAnagram("false", "falsy")); //false
console.log(validAnagram("freecodecamp", "freecampcode")); //true
