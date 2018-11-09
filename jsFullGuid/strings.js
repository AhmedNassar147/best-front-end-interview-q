var x = "We are the so-called \"Vikings\" from the north.";
console.log(x)

let Valuestr = '12,15,5,8,9,6,145,32';
console.log(Valuestr.split(','))
console.log(Valuestr.slice(4, 10)); // 5,5,8
console.log(Valuestr.substr(4, 10)); // 5,5,8,9,6,
console.log(Valuestr.endsWith('32'))  // true
console.log('      hi  '.trim()) // 'hi'


var str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate")) // 7
console.log(str.lastIndexOf("locate")) // 21
console.log(str.search("locate")) // 7

const value = "ahmedaa Nassar ay btnga yala bena";

// هيرجع من اول اندكس 0 ل 6
console.log(value.slice(0, 6)) // ahmeda

//هيقطع اول سبعه ويرجع الباقي
console.log(value.slice(7));

// replace strings
str = "Please visit Microsoft!";
console.log(str.replace("Microsoft", "W3Schools"))

// concat strings
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");

// When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.
// 2 < 12 	true	
// 2 < "12"	true	
// 2 < "John"	false	
// 2 > "John"	false	
// 2 == "John"	false	
// "2" < "12"	false	
// "2" > "12"	true	
// "2" == "12"	false

// The replace() method does not change the string it is called on.It returns a new string.
// By default, the replace() function replaces only the first match:

// All string methods return a new string. They don't modify the original string.
// Formally said: Strings are immutable: Strings cannot be changed, only replaced.
