let express = require("express");
let http = require("http");

let app = express();
app.use(express.text());

app.post("/echo", (req, res) => {
  let request_body = req.body;
  res.send(request_body);
});

let server = http.createServer(app);

let port = process.env.PORT || 8888;

server.listen(port, () => {
  console.log(`Server pid ${process.pid} listen on ${port}`);
});

module.exports.server = server;
