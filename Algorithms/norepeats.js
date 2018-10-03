function permAlone(str) {
  var num = 0;
  if (/.+/gi.test(str)) {
    console.log(true);
  }
  return num;
}

console.log(permAlone("aab"));
console.log(permAlone("aaaaa"));
