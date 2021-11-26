const makeLoadedDie = ()=> {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];

  return function() {
    return list.shift();
  };
};

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 1


// Implement a function countdownGenerator() that takes in a number x and returns a function that counts down when it is called (see starter code below).

const countdownGenerator = function(x) {
  return ()=>{
    if (x > 0) {
      console.log(`T-minus ${x}...`);
    } else if (x === 0) {
      console.log("Blast Off!");
    } else {
      console.log("Rockets already gone, bub!");
    }
    x -= 1;
  };
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
