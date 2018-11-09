let counter = (function () {
  // private variable
  let count = 0;
  function increment() {
    count++;
    return count;
  };

  function decrement() {
    count--;
    return count;
  };

  function resetCounter() {
    count = 0;
  }

  return {
    count,
    increment,
    decrement,
    resetCounter
  }
})()

console.log(counter.count)
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.count)
// console.log(counter.decrement())

