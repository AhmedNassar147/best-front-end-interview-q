// they can bind this to func , the call can send separated args to a given value but apply sending an arry to given func
let myObj = { askName: "your name is" };

function fuckyou(name) {
  if (typeof name === 'string') return this.askName + name
  else return this.askName + name[0]
}

console.log(fuckyou.call(myObj, "ahmed"))
console.log(fuckyou.apply(myObj, ["ahmed"]))
