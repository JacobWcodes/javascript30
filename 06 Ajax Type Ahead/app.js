"use strict";

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

// 1. Get data and push to array:
const cities = [];

fetch(endpoint).then((dataBulk) =>
  dataBulk.json().then((data) => cities.push(...data))
);

// 1. filter through cities array based on what's searched:
function searchCities(value, cities) {
  // NOTE - Make sure to use 'return' keyword so that filtered data can be used!!!!!!!!!!!!!!!
  return cities.filter((place) => {
    // making sure everything is lower case
    const lowerCity = place.city.toLowerCase();
    const lowerState = place.state.toLowerCase();
    // NOTE - Make sure to use 'return' keyword so that filtered data can be used!!!!!!!!!!!!!!!
    return lowerCity.match(value) || lowerState.match(value);
  });
}
// ----------------------------
// Alternative to above filter by using regular expressions:
// function searchCities(value, cities) {
//   // NOTE - Make sure to use 'return' keyword so that filtered data can be used!!!!!!!!!!!!!!!
//   return cities.filter((place) => {
//     const regex = new RegExp(value, "gi"); // 'g' is for 'global' search. 'i' is for case insensitivity.
//     // NOTE - Make sure to use 'return' keyword so that filtered data can be used!!!!!!!!!!!!!!!
//     return place.city.match(regex) || place.state.match(regex);
//   });
// }
// ---------------------------

// 2. Whatever is returned after filter, loop through and display each separately in li as a list under the search bar ;
function displaySearch() {
  const matchedArray = searchCities(this.value, cities);
  const html = matchedArray
    .map((place) => {
      return `
    <li class="item">${place.city}, ${place.state} ${place.population}</li>
    `;
    })
    .join("");
  ul.innerHTML = html;
}

// TODO -
// 1. Clear ul when search input is empty;

// 2. Highlight word that was searched for;

// 3. Eventually find more uses for this json endpoint. Example: find neighboring cities based on geoloaction/longitude & latitude:

const searchInput = document.querySelector(".search");

const ul = document.querySelector(".item-container");

searchInput.addEventListener("keyup", displaySearch);
