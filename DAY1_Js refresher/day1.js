// Exercise1: Level 1
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// 1. Declare an empty array;
const arr = Array();

// 2. Declare an array with more than 5 number of elements
const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];

// 3. Find the length of your array
const len = arrNumber.length;
console.log(`The length of the array is ${len}`);

// 4. Get the first item, the middle item and the last item of the array
const firstNuber = arrNumber[0];
console.log(firstNuber);
const middleNumber = arrNumber[Math.floor(len / 2)];
console.log(middleNumber);
const lastNumber = arrNumber[len - 1];
console.log(lastNumber);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
  "Hello World!",
  4,
  true,
  [1, 2, 3, 4, 5],
  ["Mango", "Apple", "Orange"],
  ["HTML", "CSS", "JAVASCRIPT", "REACT"],
];

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
const companiesLen = itCompanies.length;
console.log(companiesLen);

// 9. Print the first company, middle and last company
let firstCom = itCompanies[0];
console.log(firstCom);
const middleCom = itCompanies[Math.floor(companiesLen / 2)];
console.log(middleCom);
const lastCom = itCompanies[companiesLen - 1];
console.log(lastCom);

// 10. Print out each company
for (company of itCompanies) {
  console.log(company);
}

// 11. Change each company name to uppercase one by one and print them out
for (company of itCompanies) {
  console.log(company.toUpperCase());
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const sentence = `${itCompanies
  .slice(0, itCompanies.length - 1)
  .join(", ")} and ${itCompanies[itCompanies.length - 1]} are big IT companies`;
console.log(sentence);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes("Facebook")) {
  console.log("Facebook");
} else {
  console.log("company not found");
}

// 14. Filter out companies which have more than one 'o' without the filter method
// using filter

let filteredCompanies = itCompanies.filter((company) => {
  console.log(company.toLowerCase().split("o"));
  const oCount = company.toLowerCase().split("o").length - 1;
  console.log(oCount);
  return oCount > 1;
});

console.log(filteredCompanies);

// without filter
filteredCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
  let count = 0;
  const company = itCompanies[i];
  for (let j = 0; j < company.length; j++) {
    if (company[j].toLowerCase() === "o") {
      count++;
    }
  }
  if (count >= 1) {
    filteredCompanies.push(company);
  }
}

console.log(filteredCompanies);

// 16. Sort the array using sort() method
const sortIT = itCompanies.sort();
console.log(sortIT);

// 17. Reverse the array using reverse() method
const reverseIT = itCompanies.reverse();
console.log(reverseIT);

// 18. Slice out the first 3 companies from the array
const sliceFirstThreeIT = itCompanies.slice(0, 3);
console.log(sliceFirstThreeIT);

// 19. Slice out the last 3 companies from the array
const sliceLastThreeIT = itCompanies.slice(-3);
console.log(sliceLastThreeIT);

// 20. Slice out the middle IT company or companies from the array
let startIndex = Math.floor(itCompanies.length / 2);
console.log(itCompanies[startIndex]);
let endIndex = startIndex + 1;
console.log(itCompanies[endIndex]);
let sliceMiddleIT = itCompanies.slice(startIndex, endIndex);
console.log(sliceMiddleIT);

startIndex = Math.floor(itCompanies.length / 2);
console.log(itCompanies[startIndex]);
endIndex;
if (itCompanies % 2 === 0) {
  endIndex = startIndex + 2;
} else {
  endIndex = startIndex + 1;
}

console.log(itCompanies[endIndex]);
sliceMiddleIT = itCompanies.slice(startIndex, endIndex);
console.log(sliceMiddleIT);

// 21. Remove the first IT company from the array
const removeFirstIT = itCompanies.shift();
console.log(removeFirstIT);

// 22. Remove the middle IT company or companies from the array
const removeMiddleIT = itCompanies.splice(
  Math.floor(itCompanies.length / 2),
  1
);
console.log(removeMiddleIT);
// 23. Remove the last IT company from the array
const removeLastIT = itCompanies.pop();
console.log(removeLastIT);

// 24. Remove all IT companies
const removeAllIT = itCompanies.splice();
console.log(removeAllIT);

// Level 2
// 1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file

const web_techs = webTechs;
console.log(webTechs);
const countriesName = countries;
console.log(countriesName);

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
const text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = text.split(" ");
console.log(words);
console.log(words.length);

// 13. In the following shopping cart add, remove, edit items

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar");
shoppingCart;
// remove 'Honey' if you are allergic to honey
let indexHoney = shoppingCart.indexOf("Honey");
shoppingCart.splice(indexHoney, 1);
shoppingCart;
// modify Tea to 'Green Tea'
let indexTea = shoppingCart.indexOf("Tea");
shoppingCart.splice(indexTea, 1);
shoppingCart;

// 14. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes("Ethiopia")) {
  console.log("Ethiopia");
} else {
  const addNewCountry = countriesName.push("Ethiopia");
  console.log(addNewCountry);
}

// 15. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS prepocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

// 16. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Level 3
// 1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortedAges = ages.sort((a, b) => a - b);
sortedAges;
const minAge = Math.min(...sortedAges);
const maxAges = Math.max(...sortedAges);
sortedAges;
const range = maxAges - minAge;
let medianAge;
const middleIndex = Math.floor(sortedAges.length / 2);
middleIndex;
if (sortedAges.length % 2 === 0) {
  medianAge = (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2;
} else {
  medianAge = sortedAges[middleIndex];
}
let sum = 0;
sortedAges;
for (let i = 0; i < sortedAges.length; i++) {
  sum += sortedAges[i];
}
console.log(sum);

const minAverageValue = Math.abs(minAge - range);
const maxAveargeValue = Math.abs(maxAges - range);

// 1.Slice the first ten countries from the countries array
const slicedCountries = countries.slice(0, 10).join(", ");
console.log(slicedCountries);

// 2. Find the middle country(ies) in the countries array
let midCountry;
const midCountryIndex = Math.floor(countriesName.length / 2);
if (countriesName.length % 2 === 0) {
  midCountry =
    countriesName[midCountryIndex - 1] + countriesName[midCountryIndex] / 2;
} else {
  midCountry = countriesName[midCountryIndex];
}

console.log(midCountry);

// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let firstHalf;
let secondHalf;
if (countriesName.length % 2 === 0) {
  firstHalf = countriesName.slice(0, midCountryIndex);
  secondHalf = countriesName.splice(midCountryIndex + 1);
} else {
  countriesName.push("Nigeria");
  firstHalf = countriesName.slice(0, midCountryIndex + 1);
  secondHalf = countriesName.splice(midCountryIndex + 1);
}
console.log(firstHalf);
console.log(secondHalf);

// Exercise 2: Level 1
// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.

/*let userAge = prompt("Enter your age");
const drivingAge = 18;

if (userAge >= drivingAge) {
  console.log("You are old enough to drive.");
} else {
  const yearsToDriving = drivingAge - userAge;
  console.log(`You are left with ${yearsToDriving} years to drive`);
}*/

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.

/*const yourAge = prompt("Enter your age");
const myAge = 25;

if (yourAge > myAge) {
  let agedifference = yourAge - myAge;
  console.log(`You are ${agedifference} years older than me`);
} else {
  let agedifference = myAge - yourAge;
  console.log(`I am ${agedifference} years older than you`);
}*/

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
// using if else
// ternary operator.

let a = 4;
let b = 3;
// 4 is greater than 3

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}

a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.

/*const checkEvenNum = prompt("Enter a number");

if (checkEvenNum % 2 === 0) {
  console.log(`${checkEvenNum} is an even number`);
} else {
  console.log(`${checkEvenNum} is an odd number`);
}*/

// Level 2
// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

/*const grade = prompt("Enter your grade");
switch (true) {
  case grade >= 80 && grade <= 100:
    console.log("Your Grade is A");
    break;
  case grade >= 70 && grade <= 89:
    console.log("Your Grade is B");
    break;
  case grade >= 60 && grade <= 69:
    console.log("Your Grade is C");
    break;
  case grade >= 50 && grade <= 59:
    console.log("Your Grade is D");
    break;
  default:
    console.log("Your Grade is F");
}*/

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

/*const enterSeason = prompt("Enter season");
const season = enterSeason.toLowerCase();

switch (season) {
  case "september" || "october" || "november":
    console.log("The season is Autumn");
    break;
  case "december" || "january" || "february":
    console.log("The season is Winter");
    break;
  case "march" || "april" || "may":
    console.log("The season is Spring");
    break;
  case "june" || "july" || "august":
    console.log("The season is Summer");
    break;
  default:
    console.log("Enter a valid season");
}*/

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
// What is the day  today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.

/*const checkForDay = prompt("What day is today?");
const inputDay = checkForDay.toLowerCase();

switch (inputDay) {
  case "saturday" || "sunday":
    console.log(`${inputDay.charAt(0).toUpperCase() + alphabet.slice(1)} is a weekend.`);
    break;
  case "monday" || "tuesday" || "wednesday" || "thursday" || "friday":
    console.log(`${inputDay.charAt(0).toUpperCase() + alphabet.slice(1)} is a working day.`);
    break;
  default:
    console.log("Enter a valid day.");
}*/

// Level 3
// 1. Write a program which tells the number of days in a month.
// Enter a month: January
// January has 31 days.

// Enter a month: JANUARY
// January has 31 day

// Enter a month: February
// February has 28 days.

// Enter a month: FEbruary
// February has 28 days.

/*const enterMonth = prompt("Enter a month");
const inputMonth = enterMonth.toLowerCase();

switch (inputMonth) {
  case "february":
    console.log(
      `${inputMonth.charAt(0).toUpperCase() + alphabet.slice(1)} has 28 days`
    );
    break;
  case "april" || "june" || "september" || "November":
    console.log(
      `${inputMonth.charAt(0).toUpperCase() + inputMonth.slice(0)} has 30 days`
    );
    break;
  case "January" ||
    "March" ||
    "May" ||
    "July" ||
    "August" ||
    "October" ||
    "December":
    console.log(
      `${inputMonth.charAt(0).toUpperCase + inputMonth.slice(0)} has 31 days`
    );
    break;
  default:
    console.log("Invalid Month!");
}*/

// 2. Write a program which tells the number of days in a month, now consider leap year.

// Exercises: Level 1
// 1. Create an empty object called dog
const dog = {};

// 2. Print the the dog object on the console
console.log(dog);

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog.name = "Bluffy";
dog.legs = 4;
dog.age = "2 Months";
dog.color = "White";
dog.barkProperty = function () {
  return "woof woof";
};

// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.barkProperty());

// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = "PitBull";
dog.getDogInfo = function () {
  return `My Dog name is ${this.name}, its has ${this.legs} legs, color ${
    this.color
  }. My Dog is ${this.age} months old and it bark ${this.barkProperty()}`;
};

console.log(dog.getDogInfo());

// Exercises: Level 2

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// 1. Find the person who has many skills in the users object.
