let ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// const i = 0; دا غلط عشان كونست
// let i = 0; good
// var i = 0; good
// for (i; i < ages.length; i++) {
//   console.log(ages[i]); // each item
// }
// console.log('from out' + i) // array.length = 15

// *---------------------------------------------------------------------------------------*

// here var will work because it works for global and local scope let will fails
// for (let i = 0; i < ages.length; i++) {
//   console.log(ages[i]);
// }
// console.log('from out' + i) 

// *---------------------------------------------------------------------------------*

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] < 21) continue; // continue will avoid the expression here and print others
//   else console.log(ages[i])
// }

// *---------------------------------------------------------------------------------*

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] < 21) continue; // continue will avoid the expression here and print others
//   else canDrink(ages[i])
// }

// function canDrink(value) { // can be hoisted
//   console.log('can drink when =>', value)
// }
// var canDrink = value => console.log('can drink when =>', value) // can be hoisted

// *---------------------------------------------------------------------------------*

// let x = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] > 21) x = [...x, ages[i]]
// }
// console.log(x)

// *------------------------------------------------------------------------------------*

// let x = 0;
// for (let i = 0; i < ages.length; i++) {
//   x += ages[i]
// }
// console.log(x) 460

// *--------------------dubplicate items in arr----------------------------------*
// ages.forEach((age) => ages = [...ages, age]);

// console.log("2" < "20");
// console.log("a" < "b");

// let x = "10"
// let u = 0;
// u *= x
// console.log(u)

// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age;
//   }

//   printData() {
//     console.log(this.name + " " + this.age)
//   }
// }

// class Child extends Person {
//   constructor(name, age, heraColor) {
//     super(name, age);
//     this.heraColor = heraColor;
//   }
// }

// const myChild = new Child('ahmed', 23, 'red')
// console.log(myChild.age)
