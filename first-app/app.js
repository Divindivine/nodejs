// const path = require("path");
// const pathObj = path.parse(__filename);

// console.log(pathObj);

// const os = require("os");
// const total = os.totalmem();
// const free = os.freemem();

// console.log("total", total);
// console.log("free", free)

// const fs = require("fs");
// const files = fs.readdirSync("./");
// console.log(files);
// const files1 = fs.readdir("./", function (err, files) {
//   if (err) console.log("error", err);
//   else console.log("Result", files);
// });
// console.log(files1)

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.emit("messageLogged",{id: 1, url: 'http//'});
// const Logger = require("./logger");
// const logger = new Logger();

// logger.on("messageLogged", (arg) => {
//     console.log("Listener Called", arg);
//   });

// logger.log("message");

const http = require("http");
const server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    res.write("hello world");

  }
  if ((req.url = "/home")) {
    res.write("world");
    res.end();
  }
});

// server.on("connection", (socket) => {
//   console.log("new connection");
// });

server.listen(3000);

console.log("Listening on port 3000...");
