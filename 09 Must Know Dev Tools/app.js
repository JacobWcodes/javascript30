"use strict";

const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

const h1 = document.querySelector("h1");
function changeColor() {
  h1.style.color = "green";
  h1.style.fontSize = "10px";
}

h1.addEventListener("click", changeColor);

// Regular
console.log("hello");

// Interpolated (%s)
console.log("Hello I am a %s string!", "💩");

// Same as above but using ES6 backticks ``:
console.log(`Hello I am a 💩 string`);
console.log();

// Styled (%c)
// console.log("%c I am some great text", "font-size: 30px");

// warning!
console.warn("OH CRAP!!");

// Error :|
console.error("DARN!!");

// Info
console.info("The world is round");

// Testing - will only fire if something is wrong/false otherwise it won't log anything:
console.assert(2 === 7, "Wrong!");
// Won't fire since it's true:
console.assert(2 === 2, "Wrong!");

// clearing
// console.clear();

// Viewing DOM Elements - Let's you see what methods and properties are available to use on that element. VERY USEFUL!!
console.dir(h1);
console.log(h1); // Shows the element itself and not the available mathods and properties available on that element.

console.clear();

// Grouping together

dogs.forEach((dog) => {
  //   console.group(`${dog.name}`);
  // or
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Jacob");
console.count("Jacob");
console.count("Julie");
console.count("Jacob");
console.count("Julie");
console.count("Jacob");
console.count("Jacob");
console.count("Julie");
console.count("Jacob");
console.count("Jacob");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/jacobwcodes")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.timeEnd("fetching data");
  });

// table
console.table(dogs);
