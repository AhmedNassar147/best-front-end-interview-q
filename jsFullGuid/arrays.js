const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// *-------------------------------------- for -----------------------------------*

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// let canDrink = [];
// for (let x = 0; x < ages.length; x++) {
//   if (ages[x] >= 21) {
//     canDrink.push(ages[x])
//   }
// }
// console.log(canDrink);

// let ageSum = 0;
// for (let y = 0; y < ages.length; y++) {
//   ageSum += ages[y]
// }
// console.log(ageSum)


// *----------------------------- foreach ------------------------------------------*
// foreach can't return an new arr // map can return new one with transoformed date 


// companies.forEach(data => {
//   console.log(data)
// });

// *----------------------------- filter ------------------------------------------*
// The filter() method creates a new array with array elements that passes a test.

// const babecanDrink = ages.filter(value => value >= 21);
// console.log(babecanDrink)

// filter Retail

// const retailsCompany = companies.filter(data => data.category === 'Retail')
// console.log(retailsCompany)

// *------------------------------------ map ---------------------------------------*
// foreach can't return an new arr // map can return new one with transoformed date 


// const testedCompamny = companies.map(company => company.name)
// console.log(testedCompamny)

// const squareAge = ages.map(age => Math.sqrt(age))
// console.log(squareAge)

// *---------------------------- sort -----------------------------------------------*

// const sortedCompany = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
// console.log(sortedCompany)

// assending
// a < b
// const sortedAges = ages.sort((a, b) => a - b)
// console.log(sortedAges)

// dessending
// const sortedAges = ages.sort((a, b) => b - a)
// console.log(sortedAges)

// *-------------------------------------- reduce -----------------------------------*
// The reduce() method does not reduce the original array.

// const sum = ages.reduce((total, value) => total + value, 0);
// console.log(sum)

// const companyTotalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
// console.log(companyTotalYears)

// *-------------------------------------- indexOf, lastIndexOf --------------------------------------*
// indexof =>  return the first index of given value
// indexof =>  return the last index of given value

// console.log(ages.indexOf(5)) // 4
// console.log(ages.lastIndexOf(5)) // 4


// *------------------------------------------- find, findIndex -***************************************
// const ind = ages.findIndex(age => age === 20); // return index when value pass the test
const val = ages.find((age, index) => index === 2) // return value when the index of this value is exsist

// *-------------------------------------- some, All --------------------------------------*
  // `console.log(ages.some(age => age > 20)) // true`
  // console.log(ages.every(age => age > 20)) //  false

// *-------------------------------------------------- splice ---------------------------------*
    // it mutate the original arr
    // and return array of given start and end index

  // let f = ['ssss', "sstt", "d", "v", "p", "l", "j"]
  // console.log(f.splice(2, 3)) ["d", "v", "p"]
  // console.log(f)  


