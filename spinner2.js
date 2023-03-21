/* CHALLENGE: SPINNER I [MODULE 1, WEEK 4]
 *
 * Refactor `spinner1.js` in order to remove repetitive code.
 */


// This function prints a crude spinner to the console. The spinner rotates for
// one full cycle.
const displaySpinner = function() {

  // This contains spinner characters. 
  const spinners = ["|", "/", "—", "\\", "|", "/", "—", "\\", "|", ];

  // The delay variable starts at 100 ms.
  let delay = 100;


  // This loop iterates over the `spinners` array. 
  for (const element of spinners) {
  

    setTimeout(() => {

      // It prints the spinner to screen:
      process.stdout.write("\r" + element + "  ");

    }, delay);


    // The delay is incremented by 300 ms after each run.
    delay += 300;
  }

};


// DRIVER CODE:
displaySpinner();
