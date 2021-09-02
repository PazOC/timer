

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.


// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
//node timer1.js 10 3 5 15 9 


const setTimer = process.argv[2];

if (setTimer.length !== 0) {
  for (let i = 0; i < setTimer.length; i++ ) {

  let num = Number(setTimer[i]);
    if (num !== NaN && num >= 0) {
    let timer = num * 1000;
      setTimeout(() => {
      process.stdout.write('\x07');
      }, timer);
    }
  }
}
  

