//with set
function sym(args) {
  args = [].slice.call(arguments);
  let difference = args.reduce((acc, arr, i) => {
    var accSet = new Set(acc), // множество из элементов первого массива
      arrSet = new Set(arr); // множество из элементов второго массива
    return [...accSet]
      .filter(a => !arrSet.has(a)) // элементы первого множества без элементо второго
      .concat(
        // объединение
        [...arrSet].filter(a => !accSet.has(a)) // элементы второго множества без элементов первого
      );
  }, []);

  return difference.sort();
}

console.log(sym([1, 2, 3], [5, 2, 1, 4], [2, 4, 6], [1, 5, 9]));

//without set
// function symm() {
//   args = Array.prototype.slice.call(arguments);

//   return args.reduce((arr, next) => {
//     return arr.map(x => next.indexOf(x) == -1);
//   }, []);
//   // return differenceSet.sort();
// }
// console.log(symm([1, 2, 3], [5, 2, 1, 4]));
