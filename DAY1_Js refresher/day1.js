// Exercise: Level 1
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

// Exercise 2
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

// Exercise 3
// 1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 1.Slice the first ten countries from the countries array
const slicedCountries = countries.slice(0, 10).join(", ");
console.log(slicedCountries);

// 2. Find the middle country(ies) in the countries array

// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
