//Return each word of the string(title) in a title case
//minor words should remain in lower case unless it is the first word of a sentence.

function titleCase(title, minorWords) {
  if (title.length == 0) {
    return "";
  }

  if (minorWords) {
    minorWords = minorWords.toLowerCase();
    return title
      .toLowerCase()
      .split(" ")
      .map((w, i) => {
        if (
          minorWords.indexOf(w) === -1 ||
          (i === 0 && minorWords.includes(w))
        ) {
          return firstLetterToUpperCase(w);
        } else {
          return w;
        }
      })
      .join(" ");
  } else {
    return title
      .toLowerCase()
      .split(" ")
      .map(w => firstLetterToUpperCase(w))
      .join(" ");
  }
}

const firstLetterToUpperCase = word => {
  return word[0].toUpperCase() + word.slice(1);
};

console.log(titleCase("and hello for WOFGs and dfgan", "and for "));
console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
console.log(titleCase("the quick brown fox"));
console.log(titleCase("First a of in", "an often into"));

//Return each word of the string(title) in a title case
//minor words should remain in lower case unless it is the first word of a sentence.

function titleCase2(title, minorWords) {
  if (title.length == 0) {
    return "";
  }

  if (minorWords) {
    minorWords = minorWords.toLowerCase().split(" ");
    console.log(minorWords);
    return title
      .toLowerCase()
      .split(" ")
      .map((w, i) => {
        if (
          minorWords.indexOf(w) === -1 ||
          (i === 0 && minorWords.includes(w))
        ) {
          return firstLetterToUpperCase(w);
        } else {
          return w;
        }
      })
      .join(" ");
  } else {
    return title
      .toLowerCase()
      .split(" ")
      .map(w => firstLetterToUpperCase(w))
      .join(" ");
  }
}

console.log(titleCase2("and hello for WOFGs and dfgan", "and for "));
console.log(titleCase2("THE WIND IN THE WILLOWS", "The In"));
console.log(titleCase2("the quick brown fox"));
console.log(titleCase2("First a of in", "an often into"));
