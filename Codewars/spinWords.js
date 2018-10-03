function spinWords(str) {
  return str
    .split(" ")
    .map(word => {
      return word.length >= 5
        ? word
            .split("")
            .reverse()
            .join("")
        : word;
    })
    .join(" ");
}

console.log(spinWords("Hey fellow warriors"));
