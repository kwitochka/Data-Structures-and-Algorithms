//insert dashes before and after odd numbers
// no dashes allowes in the beginning and end of the string
//return a string

function dashatize(num) {
  //get 'em
  const str = num.toString();
  let dashed = ``;
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 == 1) {
      dashed += "-" + str[i] + "-";
    } else {
      dashed += str[i];
    }
  }
  return dashed.replace(/\-\-/g, "-").replace(/(^\-)|(\-)$/g, "");
}
console.log(dashatize(274));
console.log(dashatize(3327425));

function dashatize2(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "");
}

console.log(dashatize2(274));
console.log(dashatize2(3327425));

function dashatize3(num) {
  return String(num)
    .match(/([13579]|[24680]+)/g)
    .join("-");
}

console.log(dashatize3(274));
console.log(dashatize3(3327425));
