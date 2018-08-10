# stopwatch
JavaScript stopwatch app for studying state &amp; behavior<br>
To use the app, click https://edx-stopwatch.glitch.me/

<hr>
  ### Using clicks

  ![Clicks](/assets/stopwatch.gif)
<hr>

* I created a variable named `intervalState` and set its initial value to `false`.
* When users start the timer, the `intervalState` is set to `true`.
```JavaScript
function startTimer() {
  intervalState = true;
  run = setInterval(function() {
    count++;
    timeCount.innerHTML = count / 100;
  }, 10);
}
```
* When users stop the timer, the `intervalState` is set to `false` again.
```JavaScript
function stopTimer() {
  intervalState = false;
  clearInterval(run);
}
```
* When users clik the `reset` button, the `intervalState` is also set to `false`.
* Logging the current time is achieved by standard *Vanilla JavaScript* DOM manipulation.

* Users can click the buttons to operate the stopwatch
* Users can press the following keys to operate the stopwatch:<br>
&nbsp;&nbsp;&nbsp;'s' - start/stop<br>
&nbsp;&nbsp;&nbsp;'r' - reset<br>
&nbsp;&nbsp;&nbsp;'t' - log current time
