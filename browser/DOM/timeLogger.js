  // <script src="ex.js" async></script>
  // Create a Promise that resolves with a value of "Launch School" after a delay of 2000ms, using setTimeout. Print the Promise's resolved value by using the then method.

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  let sec = 0;

  let timeLogId = setInterval( () => {
    sec++;
    console.log(sec);

    if (sec >= callbacks.length) {
      clearInterval(timeLogId);
    }
  })

  callbacks.forEach( func => {
    setTimeout(func, 1000 * (Math.floor(Math.random() * callbacks.length)));
  });
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6