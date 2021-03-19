
class Timer {
  constructor(sleep=5,task) {
    this._state = true;
    this.sleep = sleep;
    this._timer = null;
    this.task = task;
    this._lock = true;
    this._debug(sleep, task);
  }
  
  _debug(sleep, task) {
    if (isNaN(sleep)) {
      throw new Error(
      "'sleep' is not a number type")
    }
    if ((typeof task) !== 'function') {
      throw new Error("Task object should be a function")
    }
  }
  
  _timerTask() {
    let s = this._state;
    clearInterval(this._timer);
    if (!s) return;

    this._timer = setInterval(() => {
     this._timerTask();
    }, this.sleep*1000);
    this.task();
  }
  
  start() {
    if (this._lock) {
      this._lock = false;
      this._state = true;
      this._timerTask();
    }
  }
  
  stop() {
    this._lock = true;
    this._state = false;
  }
}

// example...
var timer = new Timer(5, function() {
  let time = new Date();
  console.log(time.toLocaleString());
});

function run() {
  timer.start();
}

function quit() {
  timer.stop();
}