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
    const regex = new RegExp(value, "gi"); // 'g' is for 'global' search. 'i' is for case insensitivity.
    // NOTE - Make sure to use 'return' keyword so that filtered data can be used!!!!!!!!!!!!!!!
    return place.city.match(regex) || place.state.match(regex);
  });
}

// find function to add commas to population number:
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 2. Whatever is returned after filter, loop through and display each separately in li as a list under the search bar ;
function displaySearch() {
  if (!searchInput.value) {
    ul.innerHTML = `<li class="item">Filter For A City</li>
        <li class="item">Or A State</li>`; // Clear ul if search is empty;
  } else {
    const matchedArray = searchCities(this.value, cities);
    const html = matchedArray
      .map((place) => {
        // Highlight searched for word in results:
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace(
          regex,
          `<span class='hl'>${this.value}</span>`
        );
        const stateName = place.state.replace(
          regex,
          `<span class='hl'>${this.value}</span>`
        );
        return `
          <li class="item">
            <span class="cityState">${cityName}, ${stateName}</span>
            <span class='population'>${numberWithCommas(
              place.population
            )}</span>
        </li>`;
      })
      .join("");

    ul.innerHTML = html;
  }
}

// TODO -

// 2.

// 3. Refine font sizes of results

// 4. Add styles to the whole page

//  Eventually find more uses for this json endpoint. Example: find neighboring cities based on geoloaction/longitude & latitude:

const searchInput = document.querySelector(".search");

const ul = document.querySelector(".item-container");

searchInput.addEventListener("keyup", displaySearch);
