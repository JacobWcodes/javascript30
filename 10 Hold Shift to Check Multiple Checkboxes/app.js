"use strict";

// Select all checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Grab first checked:
let prevChecked;

// Check all boxes between clicked boxes when shift key is pressed:
const checkAll = function (e) {
  // Set inbetween to false on first checkbox click:
  let inBetween = false;

  // Check if shiftKey is pressed and box is checked (on second checkbox click):
  if (e.shiftKey && this.checked) {
    // Loop through all checkboxes and set inBetween to true when it hits the prevChecked/the current checked(this):
    checkboxes.forEach((checkbox) => {
      //⬆️ Make sure to use arrow function so 'this' keyword is inherited from parent function
      if (checkbox === this || checkbox === prevChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  prevChecked = this;
};

// Loop through checkboxes and listen for a click:
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("click", checkAll);
});

// Explaining checkAll function:

// 1. Parameter is the e/event;

// 2. a variable is initiated 'inBetween' that keeps track of the state of the items and we set it to false initially, and when it's false the checboxes will not be checked. So now:

// 3. We have a condition that runs only when a checkbox is pressed while both, holding down the shift key AND checking a checkbox 'this.checked' (not when unchecking).

// 4. Within the above conditional we loop through the checkboxes and with a conditional we check whether the checkbox currently in the loop is the checkbox we either clicked while having the shiftkey down OR if its the checkbox we clicked first (we have that set to 'this' in the outer function not in the conditional), and when those conditions are met we change inBetween to the opposite of what it currently is, so if it's set to true it will change to false and vice versa. So, Only when those conditions are met will inBetween change its state. In other words, only at the first clicked checkbox or the last clicked checkbox will inBetween change. So for any checkbox looped that's inbetween the two clicked checkboxes 'inBetween' will be set to true and then:

// 5. Another conditionals within this loop checks if inBetween is set true, and when that is the case, then we check the boxes:

// ------------------------------

// Explanation:
// In the case of having a list of 6 checkboxes. At the start, 'inBetween' is set to false.

// Now, The first click, let's say is on the 2nd checkbox and sets 'this' to this first checkbox clicked (by setting a variable outside of the function and assigning it 'this' outside of the whole loop and if blocks but IN the function).

// Then we hold down the shiftKey and we check the 5th checkbox.  The click is evaluated and matches the conditions of having the shiftKey down as well as checked so the code moves into the first if block:

// We loop through all the checkboxes and for each checkbox:

// Code evaluates: is this checkbox currently in the loop either 'this', meaning the one that was clicked just now (5th checkbox), or the checkbox that was clicked right before (which is saved in a varibale in the function outside of the if block).

// If the checkbox currently in the loop meets the conditions stated above, the code changes inBetween to the opposite of what it's set to.

// Then there's another conditional that checks whether inBetween is set to true and if it is, it checkes the current checkbox in the loop.

// So here's how the loop works in practice:
// Remember: inBetween is set to false outside of loop:
// loop 1: Loop looks at checkbox 1, is it currently clicked/'this', or clicked right before? answer is no. doesn't meet the conditional, inBetween unchange -- inBetween = FALSE;

// next condition, inBetween = true? no, checkbox untouched and stays unchecked.

// Loop 2:  Loop looks at checkbox 2, is it currently clicked/'this', or clicked right before? yes -- it's the last one clicked before. Meets the conditional, inBetween changes -- inBetween = TRUE;

// next condition, inBetween = true? YES, checkbox gets checked.

// Loop 3:  Loop looks at checkbox 3, is it currently clicked/'this', or clicked right before? NO . Dos not meet condition of the if, inBetween unchanged -- inBetween =  (still) TRUE;

// next condition, inBetween = true? YES, checkbox gets checked.

// Loop 4:  Loop looks at checkbox 4, is it currently clicked/'this', or clicked right before? NO . Dos not meet condition of the if does not change inBetween state, inBetween unchanged -- inBetween =  (still) TRUE;

// next condition, inBetween = true? YES (still true), checkbox gets checked.

// Loop 5:  Loop looks at checkbox 5, is it currently clicked/'this', or clicked right before? yes -- it's the current clicked. Meets the conditional, inBetween changes -- inBetween = FALSE;

// next condition, inBetween = true? false, checkbox doesn't get checked by code, but since it was checked by user it doesnt change.

// Loop 6:  Loop looks at checkbox 6, is it currently clicked/'this', or clicked right before? NO . Dos not meet condition of the if, does not change inBetween state, inBetween unchanged -- inBetween =  (still) FALSE;

// next condition, inBetween = true? NO (still False), checkbox doesn't get checked.

// FINAL RESULT:
// Only the chekcboxes that are between the ones checked (including the ones checked manually) get checked.
