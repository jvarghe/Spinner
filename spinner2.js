/* CHALLENGE: SPINNER I [MODULE 1, WEEK 4]
 *
 * Refactor `spinner1.js` in order to remove repetitive code.
 */


const displaySpinner = function() {

  const spinners = ["|", "/", "—", "\\", "|", "/", "—", "\\", "|", ];
  let delay = 100;


  for (const element of spinners) {
  
    setTimeout(() => {

      process.stdout.write("\r" + element + "  ");

    }, delay);

    delay += 300;

  }

};


displaySpinner();
