// console.log(__dirname)
// console.log(__filename)
const EventEmitter = require("events");
// const emitter = new EventEmitter();

const url = "http://mylogger.io/log";
class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
