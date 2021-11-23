const reverse = (array) => {
  let result = "";
  for (let el of array) {
    let reversed = "";
    for (let i = el.length - 1; i > -1; i--) reversed += el[i];
    reversed += "\n";
    result += reversed;
  }
  return  result;
};

const args = process.argv;
console.log(reverse(args.slice(2)));


