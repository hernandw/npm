const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    fs.readFile("index.html", "utf-8", (err, data) => {
      res.end(data);
    });
  })
  .listen(3000, () => {
    console.log("Servidor ON");
  });
