/* CHALLENGE: SPINNER I [MODULE 1, WEEK 4]
 *
 * Let's practice some more with setTimeout, this time creating a low-fidelity
 * loading spinner. This is basically a line that rotates in place in the
 * console.
 *
 * A problem we'll face right away when trying to "animate" on the terminal is
 * that we'll need to draw a different character to the same part of the
 * terminal. So far, we only know how to write characters or lines to stdout
 * and in doing so we move the cursor forward.
 *
 * We need to somehow have our cursor return to the same spot in the output in
 * order to rewrite that part. Thankfully, there are multiple ways to accomplish
 * this, and we'll look at a very simple and limited approach.
 *
 * Note: We can use the special character `\r` to return our cursor back to the
 * beginning of the line that we were on. After this, anything we write next to
 * stdout will overwrite the line.
 *
 * Example: process.stdout.write('hello from spinner1.js... \rheyyy\n');
 *
 *
 * HOW THIS WORKS:
 *
 * * Each character is a delayed write, using `setTimeout`.
 *
 * * With each delayed write, we start with returning the cursor to the
 *   beginning.
 *
 * * We then write the next character in the animation.
 *
 * * Spaces are added after the character so that the cursor moves far enough
 *   away from our animation.
 *
 * * Removing the space padding at the end of the strings will mean that the
 *   cursor will sit on top of the animation, making it harder to see.
 *
 *
 * GOAL: Add additional characters in order to complete one full animation of
 *       this nearly completed "spinner", so that it completes a full circle
 *       as shown in the demo above.
 */



setTimeout(() => {
  process.stdout.write("\r|  ");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/  ");
}, 300);

setTimeout(() => {
  process.stdout.write("\r—");
}, 500);

setTimeout(() => {
  process.stdout.write("\r\\");
}, 700);

setTimeout(() => {
  process.stdout.write("\r|  ");
}, 900);

setTimeout(() => {
  process.stdout.write("\r/  ");
}, 1200);

setTimeout(() => {
  process.stdout.write("\r—");
}, 1500);

setTimeout(() => {
  process.stdout.write("\r\\");
}, 1700);

setTimeout(() => {
  process.stdout.write("\r|  ");
}, 1900);