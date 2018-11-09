
function fuckAnyOne(name) {
  const tx = "fuck you ";
  return (function () {
    return tx + name
  })()
};

console.log(fuckAnyOne('mmm'))