const loopyLighthouse = (range, multiples, words) => {
  const [start, end] = range;
  const [firstM, secondM] = multiples;
  const [word1, word2] = words;

  for (let i = start; i <= end; i++) {
    if (i % (firstM * secondM) === 0) {
      console.log(word1 + word2);
    } else if (i % firstM === 0) {
      console.log(word1);
    } else if (i % secondM === 0) {
      console.log(word2);
    } else {
      console.log(i);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
