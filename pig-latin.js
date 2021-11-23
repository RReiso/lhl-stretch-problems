const pigLatin = (words) =>{
  let result = "";
  for (let word of words) {
    word = `${word.slice(1)}${word[0]}ay `;
    result += word;
  }
  return result;
};



const args = process.argv;
console.log(pigLatin(args.slice(2)));
